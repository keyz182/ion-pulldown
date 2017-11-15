import { Component, HostListener, Output, EventEmitter } from '@angular/core';
var IonPulldownTabComponent = (function () {
    function IonPulldownTabComponent() {
        this.onClick = new EventEmitter();
    }
    IonPulldownTabComponent.prototype._onClick = function (evt) {
        this.onClick.emit();
    };
    return IonPulldownTabComponent;
}());
export { IonPulldownTabComponent };
IonPulldownTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-pulldown-tab',
                template: "\n<ion-icon name=\"reorder\"></ion-icon>\n"
            },] },
];
/** @nocollapse */
IonPulldownTabComponent.ctorParameters = function () { return []; };
IonPulldownTabComponent.propDecorators = {
    'onClick': [{ type: Output },],
    '_onClick': [{ type: HostListener, args: ['click', ['$event'],] },],
};
//# sourceMappingURL=pulldown-tab.js.map