import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    Renderer2,
    ViewChild
} from '@angular/core';
import {Content, Platform} from 'ionic-angular';
import 'rxjs/Rx';
import {IonPulldownHeaderDirective} from './header-wrap';
import {IonPulldownTabComponent} from './pulldown-tab';

@Component({
    selector: 'ion-pull-down',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <ion-header ionPulldownHeader #header>
            <ng-content></ng-content>
            <ion-pulldown-tab></ion-pulldown-tab>
        </ion-header>
    `
})
export class IonPullDownComponent implements OnInit {
    @ContentChild(Content) public content: Content;
    @ViewChild(IonPulldownHeaderDirective) header: IonPulldownHeaderDirective;
    @ViewChild(IonPulldownHeaderDirective, {read: ElementRef}) headerRef: ElementRef;
    @ViewChild(IonPulldownTabComponent) tab: IonPulldownTabComponent;
    @ViewChild(IonPulldownTabComponent, {read: ElementRef}) tabRef: ElementRef;

    @Input() mainContent: Content;

    @Output() onInit: EventEmitter<any> = new EventEmitter<any>();
    @Output() onMoveStart: EventEmitter<any> = new EventEmitter<any>();
    @Output() onMove: EventEmitter<any> = new EventEmitter<any>();
    @Output() onMoveDone: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCollapse: EventEmitter<any> = new EventEmitter<any>();
    @Output() onExpand: EventEmitter<any> = new EventEmitter<any>();
    @Output() onMidPoint: EventEmitter<any> = new EventEmitter<any>();

    private defaultHeight: number;
    private maxHeight: number;
    private currentHeight: number;
    private minHeight: number;
    private footer: Element;
    private footerHeight: number;
    private toolbar: Element;
    private toolbarHeight: number;
    private tabHeight: number;
    private mainContentHeight: number;

    private previousPosY: number;
    private currentPosY: number;

    private hammer;

    constructor(private platform: Platform, private renderer: Renderer2) {
        if (!window.hasOwnProperty('Hammer')) {
            throw new Error('Hammer.js not found at window.Hammer!');
        } else {
            this.hammer = window['Hammer'];
        }
    }

    ngOnInit(): void {
        const component = this;

        window.addEventListener("orientationchange", () => {
            component.updateUI();
        });
        component.platform.resume.subscribe(() => {
            component.updateUI();
        });

        let hammerOpts = {};

        if (navigator.userAgent.match(/Android/i)) {
            hammerOpts['inputClass'] = window['Hammer'].TouchInput;
        }

        function handler(event) {

            switch (event.type) {
                case 'panstart':
                    component.startStyle();

                    component.content.resize();
                    component.mainContent.resize();
                    component.onMoveStart.emit();
                    break;
                case 'pan':
                case 'pan-up':
                case 'pan-down':
                    event.preventDefault();

                    let deltaY = event.deltaY;
                    let xlate = component.previousPosY + deltaY - 4;

                    if (xlate < component.minHeight) xlate = component.minHeight;
                    if (xlate > component.maxHeight) xlate = component.maxHeight;

                    component.currentPosY = xlate;

                    component.clearStyle();
                    component.setStyle(xlate, true);

                    component.content.resize();
                    component.mainContent.resize();
                    component.onMove.emit();
                    break;
                case 'panend':
                    component.endStyle();

                    if (component.currentPosY > (component.maxHeight * 0.8)) {
                        component.expand();
                    } else if (component.currentPosY < (component.maxHeight * 0.2)) {
                        component.collapse();
                    } else {
                        component.midPoint();
                    }

                    component.previousPosY = component.currentPosY;
                    component.content.resize();
                    component.mainContent.resize();
                    component.onMoveDone.emit();

                    break;
                default:
                    break;
            }
        }

        let hammer = new this.hammer(this.tabRef.nativeElement, hammerOpts);

        hammer.get('pan').set({threshold: 0});

        hammer.on('pan panstart panend pan-up pan-down', handler);

        this.updateUI(true);
    }

    getHeights() {
        this.defaultHeight = this.headerRef.nativeElement.offsetHeight;
        this.footer = document.querySelector('ion-footer');
        this.footerHeight = (<HTMLElement>this.footer).offsetHeight;
        this.toolbar = document.querySelector('ion-navbar');
        if (!this.toolbar) {
            this.toolbar = document.querySelector('ion-toolbar');
        }
        this.toolbarHeight = (<HTMLElement>this.toolbar).offsetHeight;
        this.tabHeight = this.tabRef.nativeElement.offsetHeight;
        this.minHeight = 0;
        this.currentHeight = this.minHeight;
        this.maxHeight = window.innerHeight - this.footerHeight - this.toolbarHeight - this.tabHeight;
        this.mainContentHeight = window.innerHeight - this.toolbarHeight;

        this.renderer.setStyle(this.mainContent.getNativeElement(), 'height', this.mainContentHeight + 'px');
        this.renderer.setStyle(this.mainContent.getNativeElement(),
            'transform',
            'translate3d(0,' + (this.toolbarHeight) + 'px, 0)');
        this.renderer.setStyle(this.mainContent.getNativeElement(),
            'transition',
            'none');
    }

    computeHeights(isInit: boolean = false) {
        this.getHeights();
        this.content.resize();

        this.renderer.setStyle(this.headerRef.nativeElement, 'height', this.currentHeight + 'px');

        this.collapse(isInit);
    }

    updateUI(isInit: boolean = false) {
        setTimeout(() => {
            this.computeHeights(isInit);
        }, 10);
        // avoids flickering when changing orientation
        this.renderer.setStyle(this.headerRef.nativeElement, 'transition', 'none');
    }

    clearStyle(clearTransition: boolean = true) {
        if (clearTransition) {
            this.renderer.removeStyle(this.headerRef.nativeElement, 'transition');
            this.renderer.removeStyle(this.headerRef.nativeElement, '-o-transition');
            this.renderer.removeStyle(this.headerRef.nativeElement, '-ms-transition');
            this.renderer.removeStyle(this.headerRef.nativeElement, '-moz-transition');
            this.renderer.removeStyle(this.headerRef.nativeElement, '-webkit-transition');
        }

        this.renderer.removeStyle(this.headerRef.nativeElement, 'height');
        this.renderer.removeStyle(this.mainContent.getNativeElement(), 'height');
        this.renderer.removeStyle(this.mainContent.getNativeElement(), 'transform');
    }

    setStyle(height: number, transition: boolean = false) {
        this.renderer.setStyle(this.headerRef.nativeElement, 'height', height + 'px');

        this.renderer.setStyle(this.mainContent.getNativeElement(),
            'height', (this.mainContentHeight - height ) + 'px');
        this.renderer.setStyle(this.mainContent.getNativeElement(),
            'transform',
            'translate3d(0,' + (height + this.footerHeight) + 'px, 0)');

        if (transition) {
            this.renderer.setStyle(this.headerRef.nativeElement, 'transition', 'height 0');
            this.renderer.setStyle(this.headerRef.nativeElement, '-o-transition', 'height 0');
            this.renderer.setStyle(this.headerRef.nativeElement, '-ms-transition', 'height 0');
            this.renderer.setStyle(this.headerRef.nativeElement, '-moz-transition', 'height 0');
            this.renderer.setStyle(this.headerRef.nativeElement, '-webkit-transition', 'height 0');
        }
    }

    startStyle(){
        this.renderer.removeStyle(this.headerRef.nativeElement, 'transition');
        this.renderer.removeStyle(this.headerRef.nativeElement, '-o-transition');
        this.renderer.removeStyle(this.headerRef.nativeElement, '-ms-transition');
        this.renderer.removeStyle(this.headerRef.nativeElement, '-moz-transition');
        this.renderer.removeStyle(this.headerRef.nativeElement, '-webkit-transition');

        this.renderer.removeStyle(this.content.getNativeElement(), 'display');
    }

    endStyle(){
        this.renderer.removeStyle(this.headerRef.nativeElement, 'transition');
        this.renderer.setStyle(this.headerRef.nativeElement, 'transition', '300ms ease-in-out');
    }

    collapse(isInit: boolean = false) {
        this.startStyle();
        this.currentPosY = 0;
        this.previousPosY = this.minHeight;

        this.clearStyle();
        this.setStyle(this.minHeight, true);
        this.renderer.setStyle(this.content.getNativeElement(), 'display', 'none');

        this.endStyle();

        this.content.resize();
        this.mainContent.resize();

        if (!isInit) {
            this.onMove.emit();
            this.onCollapse.emit();
        } else {
            this.onInit.emit();
        }
    }

    expand() {this.content.resize();
        this.startStyle();
        this.mainContent.resize();

        this.currentPosY = this.maxHeight;
        this.previousPosY = this.maxHeight;
        this.clearStyle();
        this.setStyle(this.maxHeight, true);

        this.endStyle();

        this.content.resize();
        this.mainContent.resize();
        this.onMove.emit();
        this.onExpand.emit();
    }

    midPoint() {
        this.startStyle();
        this.currentPosY = this.maxHeight / 2;
        this.previousPosY = this.maxHeight / 2;

        this.clearStyle();
        this.setStyle(this.currentPosY);

        this.endStyle();

        this.content.resize();
        this.mainContent.resize();
        this.onMove.emit();
        this.onMidPoint.emit();
    }
}
