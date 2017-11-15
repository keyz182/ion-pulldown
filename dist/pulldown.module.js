import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { IonPullDownComponent } from './pulldown';
import { IonPulldownHeaderDirective } from './header-wrap';
import { IonPulldownTabComponent } from './pulldown-tab';
var IonPullDownModule = (function () {
    function IonPullDownModule() {
    }
    return IonPullDownModule;
}());
export { IonPullDownModule };
IonPullDownModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    IonicModule.forRoot(IonPullDownComponent),
                    IonicModule.forRoot(IonPulldownHeaderDirective),
                    IonicModule.forRoot(IonPulldownTabComponent),
                ],
                declarations: [
                    IonPullDownComponent,
                    IonPulldownHeaderDirective,
                    IonPulldownTabComponent
                ],
                exports: [
                    IonPullDownComponent,
                    IonPulldownHeaderDirective,
                    IonPulldownTabComponent,
                    CommonModule
                ]
            },] },
];
/** @nocollapse */
IonPullDownModule.ctorParameters = function () { return []; };
//# sourceMappingURL=pulldown.module.js.map