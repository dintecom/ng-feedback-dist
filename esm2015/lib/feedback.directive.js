/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, EventEmitter, Output, Input } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { FeedbackService } from './feedback.service';
export class FeedbackDirective {
    /**
     * @param {?} dialogRef
     * @param {?} feedbackService
     * @param {?} overlay
     */
    constructor(dialogRef, feedbackService, overlay) {
        this.dialogRef = dialogRef;
        this.feedbackService = feedbackService;
        this.title = 'Send feedback';
        this.placeholder = 'Describe your issue or share your ideas';
        this.editTip = 'Click to highlight or hide info';
        this.checkboxLabel = 'Include screenshot';
        this.cancelLabel = 'CANCEL';
        this.sendLabel = 'SEND';
        this.moveToolbarTip = 'move toolbar';
        this.drawRectTip = 'Draw using yellow to highlight issues or black to hide sensitive info';
        this.highlightTip = 'highlight issues';
        this.hideTip = 'hide sensitive info';
        this.editDoneLabel = 'DONE';
        this.send = new EventEmitter();
        this.feedbackService.feedback$.subscribe((/**
         * @param {?} feedback
         * @return {?}
         */
        (feedback) => {
            this.send.emit(feedback);
        }));
        this.overlay = overlay;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.openFeedbackDialog();
    }
    /**
     * @return {?}
     */
    openFeedbackDialog() {
        this.feedbackService.initScreenshotCanvas();
        this.dialogRef.open(FeedbackDialogComponent, {
            panelClass: 'feedbackDialog',
            backdropClass: 'dialogBackDrop',
            disableClose: true,
            height: 'auto',
            width: 'auto',
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.feedbackService.initialVariables = {
            title: this.title,
            placeholder: this.placeholder,
            editTip: this.editTip,
            checkboxLabel: this.checkboxLabel,
            cancelLabel: this.cancelLabel,
            sendLabel: this.sendLabel,
            moveToolbarTip: this.moveToolbarTip,
            drawRectTip: this.drawRectTip,
            highlightTip: this.highlightTip,
            hideTip: this.hideTip,
            editDoneLabel: this.editDoneLabel
        };
    }
}
FeedbackDirective.decorators = [
    { type: Directive, args: [{ selector: '[feedback]' },] }
];
/** @nocollapse */
FeedbackDirective.ctorParameters = () => [
    { type: MatDialog },
    { type: FeedbackService },
    { type: Overlay }
];
FeedbackDirective.propDecorators = {
    title: [{ type: Input }],
    placeholder: [{ type: Input }],
    editTip: [{ type: Input }],
    checkboxLabel: [{ type: Input }],
    cancelLabel: [{ type: Input }],
    sendLabel: [{ type: Input }],
    moveToolbarTip: [{ type: Input }],
    drawRectTip: [{ type: Input }],
    highlightTip: [{ type: Input }],
    hideTip: [{ type: Input }],
    editDoneLabel: [{ type: Input }],
    send: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    FeedbackDirective.prototype.overlay;
    /** @type {?} */
    FeedbackDirective.prototype.title;
    /** @type {?} */
    FeedbackDirective.prototype.placeholder;
    /** @type {?} */
    FeedbackDirective.prototype.editTip;
    /** @type {?} */
    FeedbackDirective.prototype.checkboxLabel;
    /** @type {?} */
    FeedbackDirective.prototype.cancelLabel;
    /** @type {?} */
    FeedbackDirective.prototype.sendLabel;
    /** @type {?} */
    FeedbackDirective.prototype.moveToolbarTip;
    /** @type {?} */
    FeedbackDirective.prototype.drawRectTip;
    /** @type {?} */
    FeedbackDirective.prototype.highlightTip;
    /** @type {?} */
    FeedbackDirective.prototype.hideTip;
    /** @type {?} */
    FeedbackDirective.prototype.editDoneLabel;
    /** @type {?} */
    FeedbackDirective.prototype.send;
    /**
     * @type {?}
     * @private
     */
    FeedbackDirective.prototype.dialogRef;
    /**
     * @type {?}
     * @private
     */
    FeedbackDirective.prototype.feedbackService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZmVlZGJhY2svIiwic291cmNlcyI6WyJsaWIvZmVlZGJhY2suZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFlNUIsWUFBMkIsU0FBb0IsRUFBVSxlQUFnQyxFQUFFLE9BQWdCO1FBQWhGLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFiaEYsVUFBSyxHQUFXLGVBQWUsQ0FBQztRQUNoQyxnQkFBVyxHQUFXLHlDQUF5QyxDQUFDO1FBQ2hFLFlBQU8sR0FBRyxpQ0FBaUMsQ0FBQztRQUM1QyxrQkFBYSxHQUFHLG9CQUFvQixDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxjQUFjLENBQUM7UUFDaEMsZ0JBQVcsR0FBRyx1RUFBdUUsQ0FBQztRQUN0RixpQkFBWSxHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxrQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUNmLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBR2pELElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7UUFDdEMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzs7OztJQUdNLE9BQU87UUFDWixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRU0sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUMzQyxVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLGFBQWEsRUFBRSxnQkFBZ0I7WUFDL0IsWUFBWSxFQUFFLElBQUk7WUFDbEIsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsTUFBTTtZQUNiLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRTtTQUMzRCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEdBQUc7WUFDdEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtTQUNsQyxDQUFDO0lBQ0osQ0FBQzs7O1lBeERGLFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUM7Ozs7WUFKMUIsU0FBUztZQUVULGVBQWU7WUFIZixPQUFPOzs7b0JBUWIsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7c0JBQ0wsS0FBSzs0QkFDTCxLQUFLO21CQUNMLE1BQU07c0JBV04sWUFBWSxTQUFDLE9BQU87Ozs7Ozs7SUF2QnJCLG9DQUF5Qjs7SUFDekIsa0NBQXlDOztJQUN6Qyx3Q0FBeUU7O0lBQ3pFLG9DQUFxRDs7SUFDckQsMENBQThDOztJQUM5Qyx3Q0FBZ0M7O0lBQ2hDLHNDQUE0Qjs7SUFDNUIsMkNBQXlDOztJQUN6Qyx3Q0FBK0Y7O0lBQy9GLHlDQUEyQzs7SUFDM0Msb0NBQXlDOztJQUN6QywwQ0FBZ0M7O0lBQ2hDLGlDQUFtRDs7Ozs7SUFFaEMsc0NBQTRCOzs7OztJQUFFLDRDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBGZWVkYmFja0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZmVlZGJhY2stZGlhbG9nL2ZlZWRiYWNrLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmVlZGJhY2tTZXJ2aWNlIH0gZnJvbSAnLi9mZWVkYmFjay5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZmVlZGJhY2tdJ30pXG5leHBvcnQgY2xhc3MgRmVlZGJhY2tEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXk7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnU2VuZCBmZWVkYmFjayc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnRGVzY3JpYmUgeW91ciBpc3N1ZSBvciBzaGFyZSB5b3VyIGlkZWFzJztcbiAgQElucHV0KCkgZWRpdFRpcCA9ICdDbGljayB0byBoaWdobGlnaHQgb3IgaGlkZSBpbmZvJztcbiAgQElucHV0KCkgY2hlY2tib3hMYWJlbCA9ICdJbmNsdWRlIHNjcmVlbnNob3QnO1xuICBASW5wdXQoKSBjYW5jZWxMYWJlbCA9ICdDQU5DRUwnO1xuICBASW5wdXQoKSBzZW5kTGFiZWwgPSAnU0VORCc7XG4gIEBJbnB1dCgpIG1vdmVUb29sYmFyVGlwID0gJ21vdmUgdG9vbGJhcic7XG4gIEBJbnB1dCgpIGRyYXdSZWN0VGlwID0gJ0RyYXcgdXNpbmcgeWVsbG93IHRvIGhpZ2hsaWdodCBpc3N1ZXMgb3IgYmxhY2sgdG8gaGlkZSBzZW5zaXRpdmUgaW5mbyc7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodFRpcCA9ICdoaWdobGlnaHQgaXNzdWVzJztcbiAgQElucHV0KCkgaGlkZVRpcCA9ICdoaWRlIHNlbnNpdGl2ZSBpbmZvJztcbiAgQElucHV0KCkgZWRpdERvbmVMYWJlbCA9ICdET05FJztcbiAgQE91dHB1dCgpIHB1YmxpYyBzZW5kID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2csIHByaXZhdGUgZmVlZGJhY2tTZXJ2aWNlOiBGZWVkYmFja1NlcnZpY2UsIG92ZXJsYXk6IE92ZXJsYXkpIHtcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5mZWVkYmFjayQuc3Vic2NyaWJlKFxuICAgICAgKGZlZWRiYWNrKSA9PiB7XG4gICAgICAgIHRoaXMuc2VuZC5lbWl0KGZlZWRiYWNrKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMub3ZlcmxheSA9IG92ZXJsYXk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHB1YmxpYyBvbkNsaWNrKCkge1xuICAgIHRoaXMub3BlbkZlZWRiYWNrRGlhbG9nKCk7XG4gIH1cblxuICBwdWJsaWMgb3BlbkZlZWRiYWNrRGlhbG9nKCkge1xuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmluaXRTY3JlZW5zaG90Q2FudmFzKCk7XG4gICAgdGhpcy5kaWFsb2dSZWYub3BlbihGZWVkYmFja0RpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgcGFuZWxDbGFzczogJ2ZlZWRiYWNrRGlhbG9nJyxcbiAgICAgIGJhY2tkcm9wQ2xhc3M6ICdkaWFsb2dCYWNrRHJvcCcsXG4gICAgICBkaXNhYmxlQ2xvc2U6IHRydWUsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5pbml0aWFsVmFyaWFibGVzID0ge1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgIGVkaXRUaXA6IHRoaXMuZWRpdFRpcCxcbiAgICAgIGNoZWNrYm94TGFiZWw6IHRoaXMuY2hlY2tib3hMYWJlbCxcbiAgICAgIGNhbmNlbExhYmVsOiB0aGlzLmNhbmNlbExhYmVsLFxuICAgICAgc2VuZExhYmVsOiB0aGlzLnNlbmRMYWJlbCxcbiAgICAgIG1vdmVUb29sYmFyVGlwOiB0aGlzLm1vdmVUb29sYmFyVGlwLFxuICAgICAgZHJhd1JlY3RUaXA6IHRoaXMuZHJhd1JlY3RUaXAsXG4gICAgICBoaWdobGlnaHRUaXA6IHRoaXMuaGlnaGxpZ2h0VGlwLFxuICAgICAgaGlkZVRpcDogdGhpcy5oaWRlVGlwLFxuICAgICAgZWRpdERvbmVMYWJlbDogdGhpcy5lZGl0RG9uZUxhYmVsXG4gICAgfTtcbiAgfVxufVxuIl19