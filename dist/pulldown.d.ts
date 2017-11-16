import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { Content, Platform } from 'ionic-angular';
import 'rxjs/Rx';
import { IonPulldownHeaderDirective } from './header-wrap';
import { IonPulldownTabComponent } from './pulldown-tab';
export declare class IonPullDownComponent implements OnInit {
    private platform;
    private renderer;
    private elRef;
    content: Content;
    header: IonPulldownHeaderDirective;
    headerRef: ElementRef;
    tab: IonPulldownTabComponent;
    tabRef: ElementRef;
    mainContent: Content;
    onInit: EventEmitter<any>;
    onMoveStart: EventEmitter<any>;
    onMove: EventEmitter<any>;
    onMoveDone: EventEmitter<any>;
    onCollapse: EventEmitter<any>;
    onExpand: EventEmitter<any>;
    onMidPoint: EventEmitter<any>;
    private defaultHeight;
    private maxHeight;
    private currentHeight;
    private minHeight;
    private footer;
    private footerHeight;
    private toolbar;
    private toolbarHeight;
    private tabHeight;
    private mainContentHeight;
    private previousPosY;
    private currentPosY;
    private hammer;
    constructor(platform: Platform, renderer: Renderer2, elRef: ElementRef);
    ngOnInit(): void;
    getHeights(): void;
    computeHeights(isInit?: boolean): void;
    updateUI(isInit?: boolean): void;
    clearStyle(clearTransition?: boolean): void;
    setStyle(height: number, transition?: boolean): void;
    startStyle(): void;
    endStyle(): void;
    collapse(isInit?: boolean): void;
    expand(): void;
    midPoint(): void;
}
