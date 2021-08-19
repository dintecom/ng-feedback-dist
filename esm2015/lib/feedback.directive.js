import { Directive, HostListener, EventEmitter, Output, Input } from '@angular/core';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "./feedback.service";
import * as i3 from "@angular/cdk/overlay";
export class FeedbackDirective {
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
        this.feedbackService.feedback$.subscribe((feedback) => {
            this.send.emit(feedback);
        });
        this.overlay = overlay;
    }
    onClick() {
        this.openFeedbackDialog();
    }
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
FeedbackDirective.ɵfac = function FeedbackDirective_Factory(t) { return new (t || FeedbackDirective)(i0.ɵɵdirectiveInject(i1.MatDialog), i0.ɵɵdirectiveInject(i2.FeedbackService), i0.ɵɵdirectiveInject(i3.Overlay)); };
FeedbackDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FeedbackDirective, selectors: [["", "feedback", ""]], hostBindings: function FeedbackDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function FeedbackDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { title: "title", placeholder: "placeholder", editTip: "editTip", checkboxLabel: "checkboxLabel", cancelLabel: "cancelLabel", sendLabel: "sendLabel", moveToolbarTip: "moveToolbarTip", drawRectTip: "drawRectTip", highlightTip: "highlightTip", hideTip: "hideTip", editDoneLabel: "editDoneLabel" }, outputs: { send: "send" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeedbackDirective, [{
        type: Directive,
        args: [{ selector: '[feedback]' }]
    }], function () { return [{ type: i1.MatDialog }, { type: i2.FeedbackService }, { type: i3.Overlay }]; }, { title: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], editTip: [{
            type: Input
        }], checkboxLabel: [{
            type: Input
        }], cancelLabel: [{
            type: Input
        }], sendLabel: [{
            type: Input
        }], moveToolbarTip: [{
            type: Input
        }], drawRectTip: [{
            type: Input
        }], highlightTip: [{
            type: Input
        }], hideTip: [{
            type: Input
        }], editDoneLabel: [{
            type: Input
        }], send: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZmVlZGJhY2svc3JjL2xpYi9mZWVkYmFjay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFJN0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7O0FBSXRGLE1BQU0sT0FBTyxpQkFBaUI7SUFlNUIsWUFBMkIsU0FBb0IsRUFBVSxlQUFnQyxFQUFFLE9BQWdCO1FBQWhGLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFiaEYsVUFBSyxHQUFXLGVBQWUsQ0FBQztRQUNoQyxnQkFBVyxHQUFXLHlDQUF5QyxDQUFDO1FBQ2hFLFlBQU8sR0FBRyxpQ0FBaUMsQ0FBQztRQUM1QyxrQkFBYSxHQUFHLG9CQUFvQixDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxjQUFjLENBQUM7UUFDaEMsZ0JBQVcsR0FBRyx1RUFBdUUsQ0FBQztRQUN0RixpQkFBWSxHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxrQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUNmLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBR25ELElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FDdEMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUdNLE9BQU87UUFDWixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUMzQyxVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLGFBQWEsRUFBRSxnQkFBZ0I7WUFDL0IsWUFBWSxFQUFFLElBQUk7WUFDbEIsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsTUFBTTtZQUNiLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRTtTQUMzRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEdBQUc7WUFDdEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtTQUNsQyxDQUFDO0lBQ0osQ0FBQzs7a0ZBdkRVLGlCQUFpQjtvRUFBakIsaUJBQWlCOzhGQUFqQixhQUFTOzt1RkFBVCxpQkFBaUI7Y0FEN0IsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLFlBQVksRUFBQztnSEFHeEIsS0FBSztrQkFBYixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDVyxJQUFJO2tCQUFwQixNQUFNO1lBWUEsT0FBTztrQkFEYixZQUFZO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgRmVlZGJhY2sgfSBmcm9tICcuL2VudGl0eS9mZWVkYmFjayc7XG5pbXBvcnQgeyBGZWVkYmFja0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZmVlZGJhY2stZGlhbG9nL2ZlZWRiYWNrLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmVlZGJhY2tTZXJ2aWNlIH0gZnJvbSAnLi9mZWVkYmFjay5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZmVlZGJhY2tdJ30pXG5leHBvcnQgY2xhc3MgRmVlZGJhY2tEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXk7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnU2VuZCBmZWVkYmFjayc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnRGVzY3JpYmUgeW91ciBpc3N1ZSBvciBzaGFyZSB5b3VyIGlkZWFzJztcbiAgQElucHV0KCkgZWRpdFRpcCA9ICdDbGljayB0byBoaWdobGlnaHQgb3IgaGlkZSBpbmZvJztcbiAgQElucHV0KCkgY2hlY2tib3hMYWJlbCA9ICdJbmNsdWRlIHNjcmVlbnNob3QnO1xuICBASW5wdXQoKSBjYW5jZWxMYWJlbCA9ICdDQU5DRUwnO1xuICBASW5wdXQoKSBzZW5kTGFiZWwgPSAnU0VORCc7XG4gIEBJbnB1dCgpIG1vdmVUb29sYmFyVGlwID0gJ21vdmUgdG9vbGJhcic7XG4gIEBJbnB1dCgpIGRyYXdSZWN0VGlwID0gJ0RyYXcgdXNpbmcgeWVsbG93IHRvIGhpZ2hsaWdodCBpc3N1ZXMgb3IgYmxhY2sgdG8gaGlkZSBzZW5zaXRpdmUgaW5mbyc7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodFRpcCA9ICdoaWdobGlnaHQgaXNzdWVzJztcbiAgQElucHV0KCkgaGlkZVRpcCA9ICdoaWRlIHNlbnNpdGl2ZSBpbmZvJztcbiAgQElucHV0KCkgZWRpdERvbmVMYWJlbCA9ICdET05FJztcbiAgQE91dHB1dCgpIHB1YmxpYyBzZW5kID0gbmV3IEV2ZW50RW1pdHRlcjxGZWVkYmFjaz4oKTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZywgcHJpdmF0ZSBmZWVkYmFja1NlcnZpY2U6IEZlZWRiYWNrU2VydmljZSwgb3ZlcmxheTogT3ZlcmxheSkge1xuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmZlZWRiYWNrJC5zdWJzY3JpYmUoXG4gICAgICAoZmVlZGJhY2spID0+IHtcbiAgICAgICAgdGhpcy5zZW5kLmVtaXQoZmVlZGJhY2spO1xuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5vdmVybGF5ID0gb3ZlcmxheTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgcHVibGljIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5vcGVuRmVlZGJhY2tEaWFsb2coKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuRmVlZGJhY2tEaWFsb2coKSB7XG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2UuaW5pdFNjcmVlbnNob3RDYW52YXMoKTtcbiAgICB0aGlzLmRpYWxvZ1JlZi5vcGVuKEZlZWRiYWNrRGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICBwYW5lbENsYXNzOiAnZmVlZGJhY2tEaWFsb2cnLFxuICAgICAgYmFja2Ryb3BDbGFzczogJ2RpYWxvZ0JhY2tEcm9wJyxcbiAgICAgIGRpc2FibGVDbG9zZTogdHJ1ZSxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKClcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmluaXRpYWxWYXJpYWJsZXMgPSB7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgZWRpdFRpcDogdGhpcy5lZGl0VGlwLFxuICAgICAgY2hlY2tib3hMYWJlbDogdGhpcy5jaGVja2JveExhYmVsLFxuICAgICAgY2FuY2VsTGFiZWw6IHRoaXMuY2FuY2VsTGFiZWwsXG4gICAgICBzZW5kTGFiZWw6IHRoaXMuc2VuZExhYmVsLFxuICAgICAgbW92ZVRvb2xiYXJUaXA6IHRoaXMubW92ZVRvb2xiYXJUaXAsXG4gICAgICBkcmF3UmVjdFRpcDogdGhpcy5kcmF3UmVjdFRpcCxcbiAgICAgIGhpZ2hsaWdodFRpcDogdGhpcy5oaWdobGlnaHRUaXAsXG4gICAgICBoaWRlVGlwOiB0aGlzLmhpZGVUaXAsXG4gICAgICBlZGl0RG9uZUxhYmVsOiB0aGlzLmVkaXREb25lTGFiZWxcbiAgICB9O1xuICB9XG59XG4iXX0=