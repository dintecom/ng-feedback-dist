import { Directive, HostListener, EventEmitter, Output, Input } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { FeedbackService } from './feedback.service';
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
FeedbackDirective.ɵdir = i0.ɵɵdefineDirective({ type: FeedbackDirective, selectors: [["", "feedback", ""]], hostBindings: function FeedbackDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function FeedbackDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { title: "title", placeholder: "placeholder", editTip: "editTip", checkboxLabel: "checkboxLabel", cancelLabel: "cancelLabel", sendLabel: "sendLabel", moveToolbarTip: "moveToolbarTip", drawRectTip: "drawRectTip", highlightTip: "highlightTip", hideTip: "hideTip", editDoneLabel: "editDoneLabel" }, outputs: { send: "send" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FeedbackDirective, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZmVlZGJhY2svc3JjL2xpYi9mZWVkYmFjay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBR3JELE1BQU0sT0FBTyxpQkFBaUI7SUFlNUIsWUFBMkIsU0FBb0IsRUFBVSxlQUFnQyxFQUFFLE9BQWdCO1FBQWhGLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFiaEYsVUFBSyxHQUFXLGVBQWUsQ0FBQztRQUNoQyxnQkFBVyxHQUFXLHlDQUF5QyxDQUFDO1FBQ2hFLFlBQU8sR0FBRyxpQ0FBaUMsQ0FBQztRQUM1QyxrQkFBYSxHQUFHLG9CQUFvQixDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxjQUFjLENBQUM7UUFDaEMsZ0JBQVcsR0FBRyx1RUFBdUUsQ0FBQztRQUN0RixpQkFBWSxHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxrQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUNmLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBR25ELElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FDdEMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUdNLE9BQU87UUFDWixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUMzQyxVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLGFBQWEsRUFBRSxnQkFBZ0I7WUFDL0IsWUFBWSxFQUFFLElBQUk7WUFDbEIsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsTUFBTTtZQUNiLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRTtTQUMzRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEdBQUc7WUFDdEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtTQUNsQyxDQUFDO0lBQ0osQ0FBQzs7a0ZBdkRVLGlCQUFpQjtzREFBakIsaUJBQWlCOzhGQUFqQixhQUFTOztrREFBVCxpQkFBaUI7Y0FEN0IsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLFlBQVksRUFBQzs7a0JBR2hDLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQVdOLFlBQVk7bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBGZWVkYmFjayB9IGZyb20gJy4vZW50aXR5L2ZlZWRiYWNrJztcbmltcG9ydCB7IEZlZWRiYWNrRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9mZWVkYmFjay1kaWFsb2cvZmVlZGJhY2stZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZWVkYmFja1NlcnZpY2UgfSBmcm9tICcuL2ZlZWRiYWNrLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tmZWVkYmFja10nfSlcbmV4cG9ydCBjbGFzcyBGZWVkYmFja0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheTtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICdTZW5kIGZlZWRiYWNrJztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdEZXNjcmliZSB5b3VyIGlzc3VlIG9yIHNoYXJlIHlvdXIgaWRlYXMnO1xuICBASW5wdXQoKSBlZGl0VGlwID0gJ0NsaWNrIHRvIGhpZ2hsaWdodCBvciBoaWRlIGluZm8nO1xuICBASW5wdXQoKSBjaGVja2JveExhYmVsID0gJ0luY2x1ZGUgc2NyZWVuc2hvdCc7XG4gIEBJbnB1dCgpIGNhbmNlbExhYmVsID0gJ0NBTkNFTCc7XG4gIEBJbnB1dCgpIHNlbmRMYWJlbCA9ICdTRU5EJztcbiAgQElucHV0KCkgbW92ZVRvb2xiYXJUaXAgPSAnbW92ZSB0b29sYmFyJztcbiAgQElucHV0KCkgZHJhd1JlY3RUaXAgPSAnRHJhdyB1c2luZyB5ZWxsb3cgdG8gaGlnaGxpZ2h0IGlzc3VlcyBvciBibGFjayB0byBoaWRlIHNlbnNpdGl2ZSBpbmZvJztcbiAgQElucHV0KCkgaGlnaGxpZ2h0VGlwID0gJ2hpZ2hsaWdodCBpc3N1ZXMnO1xuICBASW5wdXQoKSBoaWRlVGlwID0gJ2hpZGUgc2Vuc2l0aXZlIGluZm8nO1xuICBASW5wdXQoKSBlZGl0RG9uZUxhYmVsID0gJ0RPTkUnO1xuICBAT3V0cHV0KCkgcHVibGljIHNlbmQgPSBuZXcgRXZlbnRFbWl0dGVyPEZlZWRiYWNrPigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nLCBwcml2YXRlIGZlZWRiYWNrU2VydmljZTogRmVlZGJhY2tTZXJ2aWNlLCBvdmVybGF5OiBPdmVybGF5KSB7XG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2UuZmVlZGJhY2skLnN1YnNjcmliZShcbiAgICAgIChmZWVkYmFjaykgPT4ge1xuICAgICAgICB0aGlzLnNlbmQuZW1pdChmZWVkYmFjayk7XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLm92ZXJsYXkgPSBvdmVybGF5O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBwdWJsaWMgb25DbGljaygpIHtcbiAgICB0aGlzLm9wZW5GZWVkYmFja0RpYWxvZygpO1xuICB9XG5cbiAgcHVibGljIG9wZW5GZWVkYmFja0RpYWxvZygpIHtcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5pbml0U2NyZWVuc2hvdENhbnZhcygpO1xuICAgIHRoaXMuZGlhbG9nUmVmLm9wZW4oRmVlZGJhY2tEaWFsb2dDb21wb25lbnQsIHtcbiAgICAgIHBhbmVsQ2xhc3M6ICdmZWVkYmFja0RpYWxvZycsXG4gICAgICBiYWNrZHJvcENsYXNzOiAnZGlhbG9nQmFja0Ryb3AnLFxuICAgICAgZGlzYWJsZUNsb3NlOiB0cnVlLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2UuaW5pdGlhbFZhcmlhYmxlcyA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICBlZGl0VGlwOiB0aGlzLmVkaXRUaXAsXG4gICAgICBjaGVja2JveExhYmVsOiB0aGlzLmNoZWNrYm94TGFiZWwsXG4gICAgICBjYW5jZWxMYWJlbDogdGhpcy5jYW5jZWxMYWJlbCxcbiAgICAgIHNlbmRMYWJlbDogdGhpcy5zZW5kTGFiZWwsXG4gICAgICBtb3ZlVG9vbGJhclRpcDogdGhpcy5tb3ZlVG9vbGJhclRpcCxcbiAgICAgIGRyYXdSZWN0VGlwOiB0aGlzLmRyYXdSZWN0VGlwLFxuICAgICAgaGlnaGxpZ2h0VGlwOiB0aGlzLmhpZ2hsaWdodFRpcCxcbiAgICAgIGhpZGVUaXA6IHRoaXMuaGlkZVRpcCxcbiAgICAgIGVkaXREb25lTGFiZWw6IHRoaXMuZWRpdERvbmVMYWJlbFxuICAgIH07XG4gIH1cbn1cbiJdfQ==