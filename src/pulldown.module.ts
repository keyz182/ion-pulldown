import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CommonModule} from '@angular/common';
import {IonPullDownComponent} from './pulldown';
import {IonPulldownHeaderDirective} from './header-wrap';
import {IonPulldownTabComponent} from './pulldown-tab';

@NgModule({
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
})
export class IonPullDownModule {
}
