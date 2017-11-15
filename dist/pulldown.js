import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, Renderer2, ContentChild } from '@angular/core';
import { Platform, Content } from 'ionic-angular';
import 'rxjs/Rx';
import { IonPulldownHeaderDirective } from './header-wrap';
import { IonPulldownTabComponent } from './pulldown-tab';
var IonPullDownComponent = (function () {
    function IonPullDownComponent(platform, renderer) {
        this.platform = platform;
        this.renderer = renderer;
        this.onMove = new EventEmitter();
        this.onMoveDone = new EventEmitter();
        if (!window.hasOwnProperty('Hammer')) {
            throw new Error('Hammer.js not found at window.Hammer!');
        }
        else {
            this.hammer = window['Hammer'];
        }
    }
    IonPullDownComponent.prototype.ngOnInit = function () {
        var component = this;
        window.addEventListener("orientationchange", function () {
            component.updateUI();
        });
        component.platform.resume.subscribe(function () {
            component.updateUI();
        });
        var hammerOpts = {};
        if (navigator.userAgent.match(/Android/i)) {
            hammerOpts['inputClass'] = window['Hammer'].TouchInput;
        }
        function handler(event) {
            switch (event.type) {
                case 'panstart':
                    component.renderer.removeStyle(component.headerRef.nativeElement, 'transition');
                    component.renderer.removeStyle(component.headerRef.nativeElement, '-o-transition');
                    component.renderer.removeStyle(component.headerRef.nativeElement, '-ms-transition');
                    component.renderer.removeStyle(component.headerRef.nativeElement, '-moz-transition');
                    component.renderer.removeStyle(component.headerRef.nativeElement, '-webkit-transition');
                    component.renderer.removeStyle(component.content.getNativeElement(), 'display');
                    component.content.resize();
                    component.mainContent.resize();
                    component.onMove.emit();
                    break;
                case 'pan':
                case 'pan-up':
                case 'pan-down':
                    event.preventDefault();
                    var deltaY = event.deltaY;
                    var xlate = component.previousPosY + deltaY - 4;
                    if (xlate < component.minHeight)
                        xlate = component.minHeight;
                    if (xlate > component.maxHeight)
                        xlate = component.maxHeight;
                    component.currentPosY = xlate;
                    component.clearStyle();
                    component.setStyle(xlate, true);
                    component.content.resize();
                    component.mainContent.resize();
                    component.onMove.emit();
                    break;
                case 'panend':
                    component.renderer.removeStyle(component.headerRef.nativeElement, 'transition');
                    component.renderer.setStyle(component.headerRef.nativeElement, 'transition', '300ms ease-in-out');
                    if (component.currentPosY > (component.maxHeight * 0.8)) {
                        component.expand();
                    }
                    else if (component.currentPosY < (component.maxHeight * 0.2)) {
                        component.collapse();
                    }
                    else {
                        component.currentPosY = component.maxHeight / 2;
                        component.clearStyle();
                        component.setStyle(component.currentPosY);
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
        var hammer = new this.hammer(this.tabRef.nativeElement, hammerOpts);
        hammer.get('pan').set({ threshold: 0 });
        hammer.on('pan panstart panend pan-up pan-down', handler);
        this.updateUI(true);
    };
    IonPullDownComponent.prototype.getHeights = function () {
        this.defaultHeight = this.headerRef.nativeElement.offsetHeight;
        this.footer = document.querySelector('ion-footer');
        this.footerHeight = this.footer.offsetHeight;
        this.toolbar = document.querySelector('ion-navbar');
        if (!this.toolbar) {
            this.toolbar = document.querySelector('ion-toolbar');
        }
        this.toolbarHeight = this.toolbar.offsetHeight;
        this.tabHeight = this.tabRef.nativeElement.offsetHeight;
        this.minHeight = 0;
        this.currentHeight = this.minHeight;
        this.maxHeight = window.innerHeight - this.footerHeight - this.toolbarHeight - this.tabHeight;
        this.mainContentHeight = window.innerHeight - this.toolbarHeight;
        this.renderer.setStyle(this.mainContent.getNativeElement(), 'height', this.mainContentHeight + 'px');
        this.renderer.setStyle(this.mainContent.getNativeElement(), 'transform', 'translate3d(0,' + (this.toolbarHeight) + 'px, 0)');
        this.renderer.setStyle(this.mainContent.getNativeElement(), 'transition', 'none');
    };
    IonPullDownComponent.prototype.computeHeights = function (isInit) {
        if (isInit === void 0) { isInit = false; }
        this.getHeights();
        this.content.resize();
        this.renderer.setStyle(this.headerRef.nativeElement, 'height', this.currentHeight + 'px');
        this.collapse(isInit);
    };
    IonPullDownComponent.prototype.updateUI = function (isInit) {
        var _this = this;
        if (isInit === void 0) { isInit = false; }
        setTimeout(function () {
            _this.computeHeights(isInit);
        }, 10);
        // avoids flickering when changing orientation
        this.renderer.setStyle(this.headerRef.nativeElement, 'transition', 'none');
    };
    IonPullDownComponent.prototype.clearStyle = function (clearTransition) {
        if (clearTransition === void 0) { clearTransition = true; }
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
    };
    IonPullDownComponent.prototype.setStyle = function (height, transition) {
        if (transition === void 0) { transition = false; }
        this.renderer.setStyle(this.headerRef.nativeElement, 'height', height + 'px');
        this.renderer.setStyle(this.mainContent.getNativeElement(), 'height', (this.mainContentHeight - height) + 'px');
        this.renderer.setStyle(this.mainContent.getNativeElement(), 'transform', 'translate3d(0,' + (height + this.footerHeight) + 'px, 0)');
        if (transition) {
            this.renderer.setStyle(this.headerRef.nativeElement, 'transition', 'height 0');
            this.renderer.setStyle(this.headerRef.nativeElement, '-o-transition', 'height 0');
            this.renderer.setStyle(this.headerRef.nativeElement, '-ms-transition', 'height 0');
            this.renderer.setStyle(this.headerRef.nativeElement, '-moz-transition', 'height 0');
            this.renderer.setStyle(this.headerRef.nativeElement, '-webkit-transition', 'height 0');
        }
    };
    IonPullDownComponent.prototype.collapse = function (isInit) {
        if (isInit === void 0) { isInit = false; }
        this.currentPosY = 0;
        this.previousPosY = this.minHeight;
        this.clearStyle();
        this.setStyle(this.minHeight, true);
        this.renderer.setStyle(this.content.getNativeElement(), 'display', 'none');
        this.content.resize();
        this.mainContent.resize();
        if (!isInit) {
            this.onMove.emit();
        }
        console.log('Collapse!');
    };
    IonPullDownComponent.prototype.expand = function () {
        this.currentPosY = this.maxHeight;
        this.previousPosY = this.maxHeight;
        this.clearStyle();
        this.setStyle(this.maxHeight, true);
        this.content.resize();
        this.mainContent.resize();
        this.onMove.emit();
        console.log('Expand!');
    };
    return IonPullDownComponent;
}());
export { IonPullDownComponent };
IonPullDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-pull-down',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n  <ion-header ionPulldownHeader #header>\n    <ng-content></ng-content>\n    <ion-pulldown-tab></ion-pulldown-tab>\n  </ion-header>\n  "
            },] },
];
/** @nocollapse */
IonPullDownComponent.ctorParameters = function () { return [
    { type: Platform, },
    { type: Renderer2, },
]; };
IonPullDownComponent.propDecorators = {
    'content': [{ type: ContentChild, args: [Content,] },],
    'header': [{ type: ViewChild, args: [IonPulldownHeaderDirective,] },],
    'headerRef': [{ type: ViewChild, args: [IonPulldownHeaderDirective, { read: ElementRef },] },],
    'tab': [{ type: ViewChild, args: [IonPulldownTabComponent,] },],
    'tabRef': [{ type: ViewChild, args: [IonPulldownTabComponent, { read: ElementRef },] },],
    'mainContent': [{ type: Input },],
    'onMove': [{ type: Output },],
    'onMoveDone': [{ type: Output },],
};
//# sourceMappingURL=pulldown.js.map