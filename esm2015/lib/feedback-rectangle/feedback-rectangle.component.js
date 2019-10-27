/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Rectangle } from '../entity/rectangle';
import { FeedbackService } from '../feedback.service';
export class FeedbackRectangleComponent {
    /**
     * @param {?} feedbackService
     */
    constructor(feedbackService) {
        this.feedbackService = feedbackService;
        this.close = new EventEmitter();
        this.showCloseTag = false;
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        this.showCloseTag = this.noHover === false;
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        this.showCloseTag = false;
    }
    /**
     * @return {?}
     */
    onClose() {
        this.close.emit();
    }
}
FeedbackRectangleComponent.decorators = [
    { type: Component, args: [{
                selector: 'feedback-rectangle',
                template: "<div exclude-rect=\"true\" class=\"rect\" [ngStyle]=\"{'left.px': rectangle.startX,\n                              'top.px': rectangle.startY,\n                              'width.px': rectangle.width ,\n                              'height.px': rectangle.height }\"\n    [ngClass]=\"{'highlight': rectangle.color === feedbackService.highlightedColor,\n                'hide': rectangle.color !== feedbackService.highlightedColor,\n                'noHover': noHover}\">\n  <span exclude-rect=\"true\" class=\"close\" *ngIf=\"showCloseTag\" (click)=\"onClose()\">\n    <svg viewBox=\"0 0 1024 1024\"\n         width=\"16\" height=\"16\">\n        <path\n          d=\"M896 224l-96-96-288 288-288-288-96 96 288 288-288 288 96 96 288-288 288 288 96-96-288-288 288-288z\"></path>\n    </svg>\n  </span>\n</div>\n",
                styles: [".rect{position:fixed;background:0 0;z-index:3}.highlight:not(.noHover):hover{cursor:default;background:rgba(55,131,249,.2)}.hide{background-color:#000}.hide:not(.noHover):hover{background-color:rgba(31,31,31,.75)}.rect .close{width:24px;height:24px;background:#fff;border-radius:50%;justify-content:center;align-items:center;color:#999;position:absolute;right:-12px;top:-12px;cursor:pointer;display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]
            }] }
];
/** @nocollapse */
FeedbackRectangleComponent.ctorParameters = () => [
    { type: FeedbackService }
];
FeedbackRectangleComponent.propDecorators = {
    rectangle: [{ type: Input }],
    noHover: [{ type: Input }],
    close: [{ type: Output }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2stcmVjdGFuZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWZlZWRiYWNrLyIsInNvdXJjZXMiOlsibGliL2ZlZWRiYWNrLXJlY3RhbmdsZS9mZWVkYmFjay1yZWN0YW5nbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBT3RELE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFTckMsWUFBbUIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSDVDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3BDLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBR3JDLENBQUM7Ozs7SUFHTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUM7SUFDN0MsQ0FBQzs7OztJQUdNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVNLE9BQU87UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsdXpCQUFrRDs7YUFFbkQ7Ozs7WUFOUSxlQUFlOzs7d0JBUXJCLEtBQUs7c0JBRUwsS0FBSztvQkFFTCxNQUFNOzJCQU9OLFlBQVksU0FBQyxZQUFZOzJCQUt6QixZQUFZLFNBQUMsWUFBWTs7OztJQWhCMUIsK0NBQzRCOztJQUM1Qiw2Q0FDd0I7O0lBQ3hCLDJDQUMyQzs7SUFDM0Msa0RBQXFDOztJQUV6QixxREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuLi9lbnRpdHkvcmVjdGFuZ2xlJztcbmltcG9ydCB7IEZlZWRiYWNrU2VydmljZSB9IGZyb20gJy4uL2ZlZWRiYWNrLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmZWVkYmFjay1yZWN0YW5nbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmVlZGJhY2stcmVjdGFuZ2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmVlZGJhY2stcmVjdGFuZ2xlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGZWVkYmFja1JlY3RhbmdsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByZWN0YW5nbGU6IFJlY3RhbmdsZTtcbiAgQElucHV0KClcbiAgcHVibGljIG5vSG92ZXI6IGJvb2xlYW47XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHB1YmxpYyBzaG93Q2xvc2VUYWc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmVlZGJhY2tTZXJ2aWNlOiBGZWVkYmFja1NlcnZpY2UpIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBwdWJsaWMgb25Nb3VzZUVudGVyKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0Nsb3NlVGFnID0gdGhpcy5ub0hvdmVyID09PSBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBwdWJsaWMgb25Nb3VzZUxlYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0Nsb3NlVGFnID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgb25DbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgfVxufVxuIl19