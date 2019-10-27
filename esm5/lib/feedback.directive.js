/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, EventEmitter, Output, Input } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { FeedbackService } from './feedback.service';
var FeedbackDirective = /** @class */ (function () {
    function FeedbackDirective(dialogRef, feedbackService, overlay) {
        var _this = this;
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
        function (feedback) {
            _this.send.emit(feedback);
        }));
        this.overlay = overlay;
    }
    /**
     * @return {?}
     */
    FeedbackDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.openFeedbackDialog();
    };
    /**
     * @return {?}
     */
    FeedbackDirective.prototype.openFeedbackDialog = /**
     * @return {?}
     */
    function () {
        this.feedbackService.initScreenshotCanvas();
        this.dialogRef.open(FeedbackDialogComponent, {
            panelClass: 'feedbackDialog',
            backdropClass: 'dialogBackDrop',
            disableClose: true,
            height: 'auto',
            width: 'auto',
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    };
    /**
     * @return {?}
     */
    FeedbackDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    FeedbackDirective.decorators = [
        { type: Directive, args: [{ selector: '[feedback]' },] }
    ];
    /** @nocollapse */
    FeedbackDirective.ctorParameters = function () { return [
        { type: MatDialog },
        { type: FeedbackService },
        { type: Overlay }
    ]; };
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
    return FeedbackDirective;
}());
export { FeedbackDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZmVlZGJhY2svIiwic291cmNlcyI6WyJsaWIvZmVlZGJhY2suZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRDtJQWdCRSwyQkFBMkIsU0FBb0IsRUFBVSxlQUFnQyxFQUFFLE9BQWdCO1FBQTNHLGlCQU9DO1FBUDBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFiaEYsVUFBSyxHQUFXLGVBQWUsQ0FBQztRQUNoQyxnQkFBVyxHQUFXLHlDQUF5QyxDQUFDO1FBQ2hFLFlBQU8sR0FBRyxpQ0FBaUMsQ0FBQztRQUM1QyxrQkFBYSxHQUFHLG9CQUFvQixDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxjQUFjLENBQUM7UUFDaEMsZ0JBQVcsR0FBRyx1RUFBdUUsQ0FBQztRQUN0RixpQkFBWSxHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxrQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUNmLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBR2pELElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7UUFDdEMsVUFBQyxRQUFRO1lBQ1AsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUNGLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDOzs7O0lBR00sbUNBQU87OztJQURkO1FBRUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVNLDhDQUFrQjs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQzNDLFVBQVUsRUFBRSxnQkFBZ0I7WUFDNUIsYUFBYSxFQUFFLGdCQUFnQjtZQUMvQixZQUFZLEVBQUUsSUFBSTtZQUNsQixNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxNQUFNO1lBQ2IsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFO1NBQzNELENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixHQUFHO1lBQ3RDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDbEMsQ0FBQztJQUNKLENBQUM7O2dCQXhERixTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsWUFBWSxFQUFDOzs7O2dCQUoxQixTQUFTO2dCQUVULGVBQWU7Z0JBSGYsT0FBTzs7O3dCQVFiLEtBQUs7OEJBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLO2lDQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLEtBQUs7Z0NBQ0wsS0FBSzt1QkFDTCxNQUFNOzBCQVdOLFlBQVksU0FBQyxPQUFPOztJQWdDdkIsd0JBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXhEWSxpQkFBaUI7Ozs7OztJQUM1QixvQ0FBeUI7O0lBQ3pCLGtDQUF5Qzs7SUFDekMsd0NBQXlFOztJQUN6RSxvQ0FBcUQ7O0lBQ3JELDBDQUE4Qzs7SUFDOUMsd0NBQWdDOztJQUNoQyxzQ0FBNEI7O0lBQzVCLDJDQUF5Qzs7SUFDekMsd0NBQStGOztJQUMvRix5Q0FBMkM7O0lBQzNDLG9DQUF5Qzs7SUFDekMsMENBQWdDOztJQUNoQyxpQ0FBbUQ7Ozs7O0lBRWhDLHNDQUE0Qjs7Ozs7SUFBRSw0Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgRmVlZGJhY2tEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2ZlZWRiYWNrLWRpYWxvZy9mZWVkYmFjay1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEZlZWRiYWNrU2VydmljZSB9IGZyb20gJy4vZmVlZGJhY2suc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2ZlZWRiYWNrXSd9KVxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5O1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJ1NlbmQgZmVlZGJhY2snO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ0Rlc2NyaWJlIHlvdXIgaXNzdWUgb3Igc2hhcmUgeW91ciBpZGVhcyc7XG4gIEBJbnB1dCgpIGVkaXRUaXAgPSAnQ2xpY2sgdG8gaGlnaGxpZ2h0IG9yIGhpZGUgaW5mbyc7XG4gIEBJbnB1dCgpIGNoZWNrYm94TGFiZWwgPSAnSW5jbHVkZSBzY3JlZW5zaG90JztcbiAgQElucHV0KCkgY2FuY2VsTGFiZWwgPSAnQ0FOQ0VMJztcbiAgQElucHV0KCkgc2VuZExhYmVsID0gJ1NFTkQnO1xuICBASW5wdXQoKSBtb3ZlVG9vbGJhclRpcCA9ICdtb3ZlIHRvb2xiYXInO1xuICBASW5wdXQoKSBkcmF3UmVjdFRpcCA9ICdEcmF3IHVzaW5nIHllbGxvdyB0byBoaWdobGlnaHQgaXNzdWVzIG9yIGJsYWNrIHRvIGhpZGUgc2Vuc2l0aXZlIGluZm8nO1xuICBASW5wdXQoKSBoaWdobGlnaHRUaXAgPSAnaGlnaGxpZ2h0IGlzc3Vlcyc7XG4gIEBJbnB1dCgpIGhpZGVUaXAgPSAnaGlkZSBzZW5zaXRpdmUgaW5mbyc7XG4gIEBJbnB1dCgpIGVkaXREb25lTGFiZWwgPSAnRE9ORSc7XG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nLCBwcml2YXRlIGZlZWRiYWNrU2VydmljZTogRmVlZGJhY2tTZXJ2aWNlLCBvdmVybGF5OiBPdmVybGF5KSB7XG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2UuZmVlZGJhY2skLnN1YnNjcmliZShcbiAgICAgIChmZWVkYmFjaykgPT4ge1xuICAgICAgICB0aGlzLnNlbmQuZW1pdChmZWVkYmFjayk7XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLm92ZXJsYXkgPSBvdmVybGF5O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBwdWJsaWMgb25DbGljaygpIHtcbiAgICB0aGlzLm9wZW5GZWVkYmFja0RpYWxvZygpO1xuICB9XG5cbiAgcHVibGljIG9wZW5GZWVkYmFja0RpYWxvZygpIHtcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5pbml0U2NyZWVuc2hvdENhbnZhcygpO1xuICAgIHRoaXMuZGlhbG9nUmVmLm9wZW4oRmVlZGJhY2tEaWFsb2dDb21wb25lbnQsIHtcbiAgICAgIHBhbmVsQ2xhc3M6ICdmZWVkYmFja0RpYWxvZycsXG4gICAgICBiYWNrZHJvcENsYXNzOiAnZGlhbG9nQmFja0Ryb3AnLFxuICAgICAgZGlzYWJsZUNsb3NlOiB0cnVlLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2UuaW5pdGlhbFZhcmlhYmxlcyA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICBlZGl0VGlwOiB0aGlzLmVkaXRUaXAsXG4gICAgICBjaGVja2JveExhYmVsOiB0aGlzLmNoZWNrYm94TGFiZWwsXG4gICAgICBjYW5jZWxMYWJlbDogdGhpcy5jYW5jZWxMYWJlbCxcbiAgICAgIHNlbmRMYWJlbDogdGhpcy5zZW5kTGFiZWwsXG4gICAgICBtb3ZlVG9vbGJhclRpcDogdGhpcy5tb3ZlVG9vbGJhclRpcCxcbiAgICAgIGRyYXdSZWN0VGlwOiB0aGlzLmRyYXdSZWN0VGlwLFxuICAgICAgaGlnaGxpZ2h0VGlwOiB0aGlzLmhpZ2hsaWdodFRpcCxcbiAgICAgIGhpZGVUaXA6IHRoaXMuaGlkZVRpcCxcbiAgICAgIGVkaXREb25lTGFiZWw6IHRoaXMuZWRpdERvbmVMYWJlbFxuICAgIH07XG4gIH1cbn1cbiJdfQ==