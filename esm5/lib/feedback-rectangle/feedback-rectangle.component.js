/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Rectangle } from '../entity/rectangle';
import { FeedbackService } from '../feedback.service';
var FeedbackRectangleComponent = /** @class */ (function () {
    function FeedbackRectangleComponent(feedbackService) {
        this.feedbackService = feedbackService;
        this.close = new EventEmitter();
        this.showCloseTag = false;
    }
    /**
     * @return {?}
     */
    FeedbackRectangleComponent.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        this.showCloseTag = this.noHover === false;
    };
    /**
     * @return {?}
     */
    FeedbackRectangleComponent.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        this.showCloseTag = false;
    };
    /**
     * @return {?}
     */
    FeedbackRectangleComponent.prototype.onClose = /**
     * @return {?}
     */
    function () {
        this.close.emit();
    };
    FeedbackRectangleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'feedback-rectangle',
                    template: "<div exclude-rect=\"true\" class=\"rect\" [ngStyle]=\"{'left.px': rectangle.startX,\n                              'top.px': rectangle.startY,\n                              'width.px': rectangle.width ,\n                              'height.px': rectangle.height }\"\n    [ngClass]=\"{'highlight': rectangle.color === feedbackService.highlightedColor,\n                'hide': rectangle.color !== feedbackService.highlightedColor,\n                'noHover': noHover}\">\n  <span exclude-rect=\"true\" class=\"close\" *ngIf=\"showCloseTag\" (click)=\"onClose()\">\n    <svg viewBox=\"0 0 1024 1024\"\n         width=\"16\" height=\"16\">\n        <path\n          d=\"M896 224l-96-96-288 288-288-288-96 96 288 288-288 288 96 96 288-288 288 288 96-96-288-288 288-288z\"></path>\n    </svg>\n  </span>\n</div>\n",
                    styles: [".rect{position:fixed;background:0 0;z-index:3}.highlight:not(.noHover):hover{cursor:default;background:rgba(55,131,249,.2)}.hide{background-color:#000}.hide:not(.noHover):hover{background-color:rgba(31,31,31,.75)}.rect .close{width:24px;height:24px;background:#fff;border-radius:50%;justify-content:center;align-items:center;color:#999;position:absolute;right:-12px;top:-12px;cursor:pointer;display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]
                }] }
    ];
    /** @nocollapse */
    FeedbackRectangleComponent.ctorParameters = function () { return [
        { type: FeedbackService }
    ]; };
    FeedbackRectangleComponent.propDecorators = {
        rectangle: [{ type: Input }],
        noHover: [{ type: Input }],
        close: [{ type: Output }],
        onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
        onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
    };
    return FeedbackRectangleComponent;
}());
export { FeedbackRectangleComponent };
if (false) {
    /** @type {?} */
    FeedbackRectangleComponent.prototype.rectangle;
    /** @type {?} */
    FeedbackRectangleComponent.prototype.noHover;
    /** @type {?} */
    FeedbackRectangleComponent.prototype.close;
    /** @type {?} */
    FeedbackRectangleComponent.prototype.showCloseTag;
    /** @type {?} */
    FeedbackRectangleComponent.prototype.feedbackService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2stcmVjdGFuZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWZlZWRiYWNrLyIsInNvdXJjZXMiOlsibGliL2ZlZWRiYWNrLXJlY3RhbmdsZS9mZWVkYmFjay1yZWN0YW5nbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXREO0lBY0Usb0NBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUg1QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNwQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztJQUdyQyxDQUFDOzs7O0lBR00saURBQVk7OztJQURuQjtRQUVFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUM7SUFDN0MsQ0FBQzs7OztJQUdNLGlEQUFZOzs7SUFEbkI7UUFFRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7O0lBRU0sNENBQU87OztJQUFkO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLHV6QkFBa0Q7O2lCQUVuRDs7OztnQkFOUSxlQUFlOzs7NEJBUXJCLEtBQUs7MEJBRUwsS0FBSzt3QkFFTCxNQUFNOytCQU9OLFlBQVksU0FBQyxZQUFZOytCQUt6QixZQUFZLFNBQUMsWUFBWTs7SUFRNUIsaUNBQUM7Q0FBQSxBQTlCRCxJQThCQztTQXpCWSwwQkFBMEI7OztJQUNyQywrQ0FDNEI7O0lBQzVCLDZDQUN3Qjs7SUFDeEIsMkNBQzJDOztJQUMzQyxrREFBcUM7O0lBRXpCLHFEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4uL2VudGl0eS9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgRmVlZGJhY2tTZXJ2aWNlIH0gZnJvbSAnLi4vZmVlZGJhY2suc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZlZWRiYWNrLXJlY3RhbmdsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mZWVkYmFjay1yZWN0YW5nbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mZWVkYmFjay1yZWN0YW5nbGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrUmVjdGFuZ2xlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIHJlY3RhbmdsZTogUmVjdGFuZ2xlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgbm9Ib3ZlcjogYm9vbGVhbjtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgcHVibGljIHNob3dDbG9zZVRhZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmZWVkYmFja1NlcnZpY2U6IEZlZWRiYWNrU2VydmljZSkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIHB1YmxpYyBvbk1vdXNlRW50ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93Q2xvc2VUYWcgPSB0aGlzLm5vSG92ZXIgPT09IGZhbHNlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIHB1YmxpYyBvbk1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93Q2xvc2VUYWcgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xuICB9XG59XG4iXX0=