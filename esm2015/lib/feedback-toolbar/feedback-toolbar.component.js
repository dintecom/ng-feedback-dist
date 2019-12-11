/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil, finalize, map, mergeMap } from 'rxjs/operators';
import { FeedbackService } from '../feedback.service';
export class FeedbackToolbarComponent {
    /**
     * @param {?} el
     * @param {?} feedbackService
     */
    constructor(el, feedbackService) {
        this.el = el;
        this.feedbackService = feedbackService;
        this.manipulate = new EventEmitter();
        this.disableToolbarTips = false;
        this.isSwitch = false;
        this.isDragging = false;
        this.vars = {};
        this.vars = feedbackService.initialVariables;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const elStyle = this.el.nativeElement.style;
        elStyle.position = 'absolute';
        elStyle.left = '43%';
        elStyle.top = '1em';
        this.addDragListenerOnMoveBtn();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.isSwitch = this.drawColor !== this.feedbackService.highlightedColor;
    }
    /**
     * @return {?}
     */
    done() {
        this.manipulate.emit('done');
    }
    /**
     * @return {?}
     */
    toggleHighlight() {
        this.isSwitch = false;
        this.manipulate.emit(this.feedbackService.highlightedColor);
    }
    /**
     * @return {?}
     */
    toggleHide() {
        this.isSwitch = true;
        this.manipulate.emit(this.feedbackService.hiddenColor);
    }
    /**
     * @return {?}
     */
    addDragListenerOnMoveBtn() {
        /** @type {?} */
        const mouseUp = fromEvent(this.toggleMoveBtn.nativeElement, 'mouseup');
        /** @type {?} */
        const mouseMove = fromEvent(document.documentElement, 'mousemove');
        /** @type {?} */
        const mouseDown = fromEvent(this.toggleMoveBtn.nativeElement, 'mousedown');
        /** @type {?} */
        const mouseDrag = mouseDown.pipe(mergeMap((/**
         * @param {?} md
         * @return {?}
         */
        (md) => {
            this.feedbackService.setIsDraggingToolbar(true);
            /** @type {?} */
            const startX = md.offsetX;
            /** @type {?} */
            const startY = md.offsetY;
            this.disableToolbarTips = true;
            this.isDragging = true;
            // Calculate dif with mousemove until mouseup
            return mouseMove.pipe(map((/**
             * @param {?} mm
             * @return {?}
             */
            (mm) => {
                mm.preventDefault();
                return {
                    left: mm.clientX - startX,
                    top: mm.clientY - startY
                };
            })), finalize((/**
             * @return {?}
             */
            () => {
                this.isDragging = false;
                this.disableToolbarTips = false;
                this.feedbackService.setIsDraggingToolbar(false);
            })), takeUntil(mouseUp));
        })));
        mouseDrag.subscribe((/**
         * @param {?} pos
         * @return {?}
         */
        (pos) => {
            this.el.nativeElement.style.left = pos.left + 'px';
            this.el.nativeElement.style.top = pos.top + 'px';
        }));
    }
}
FeedbackToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'feedback-toolbar',
                template: "<div exclude-rect=\"true\" class=\"toolbar\">\n  <div class=\"move-toolbar\" #toggleMove [matTooltip]=\"vars['moveToolbarTip']\" [matTooltipDisabled]=\"disableToolbarTips\">\n    <svg focusable=\"false\" aria-label=\"Drag\" fill=\"#BDBDBD\" height=\"56\" width=\"16\"\n         viewBox=\"-2 2 12 12\">\n      <circle cx=\"1.5\" cy=\"1.5\" r=\"1.5\"></circle>\n      <circle cx=\"1.5\" cy=\"7.5\" r=\"1.5\"></circle>\n      <circle cx=\"1.5\" cy=\"13.5\" r=\"1.5\"></circle>\n      <circle cx=\"6.5\" cy=\"1.5\" r=\"1.5\"></circle>\n      <circle cx=\"6.5\" cy=\"7.5\" r=\"1.5\"></circle>\n      <circle cx=\"6.5\" cy=\"13.5\" r=\"1.5\"></circle>\n    </svg>\n  </div>\n  <button #highlightBtn (click)=\"toggleHighlight()\" [matTooltip]=\"vars['highlightTip']\"\n          [matTooltipDisabled]=\"disableToolbarTips\" class=\"highlight-toggle\" [ngClass]=\"{'deepen-color': !isSwitch}\">\n    <span class=\"toggle\">\n      <svg focusable=\"false\" aria-label=\"\" viewBox=\"0 0 24 24\" height=\"36\" width=\"36\"\n           fill=\"#ffd740\">\n        <path d=\"M3 3h18v18H3z\"></path>\n      </svg>\n\n      <svg focusable=\"false\" aria-label=\"\" fill=\"#757575\" viewBox=\"0 0 24 24\"\n           height=\"36\" width=\"36\" [ngClass]=\"{'toggle-decorator': !isSwitch}\" *ngIf=\"!isSwitch\">\n        <path\n          d=\"M21 17h-2.58l2.51 2.56c-.18.69-.73 1.26-1.41 1.44L17 18.5V21h-2v-6h6v2zM19 7h2v2h-2V7zm2-2h-2V3.08c1.1 0 2 .92 2 1.92zm-6-2h2v2h-2V3zm4 8h2v2h-2v-2zM9 21H7v-2h2v2zM5 9H3V7h2v2zm0-5.92V5H3c0-1 1-1.92 2-1.92zM5 17H3v-2h2v2zM9 5H7V3h2v2zm4 0h-2V3h2v2zm0 16h-2v-2h2v2zm-8-8H3v-2h2v2zm0 8.08C3.9 21.08 3 20 3 19h2v2.08z\"></path>\n      </svg>\n    </span>\n  </button>\n  <button (click)=\"toggleHide()\" [matTooltip]=\"vars['hideTip']\" [matTooltipDisabled]=\"disableToolbarTips\"\n          class=\"hide-toggle\" [ngClass]=\"{'deepen-color': isSwitch}\">\n    <span class=\"toggle\">\n      <svg focusable=\"false\" aria-label=\"\" viewBox=\"0 0 24 24\" height=\"36\" width=\"36\"\n           fill=\"#000\">\n        <path d=\"M3 3h18v18H3z\"></path>\n      </svg>\n      <svg focusable=\"false\" aria-label=\"\" fill=\"#757575\" viewBox=\"0 0 24 24\"\n           height=\"36\" width=\"36\" [ngClass]=\"{'toggle-decorator': isSwitch}\" *ngIf=\"isSwitch\">\n        <path\n          d=\"M21 17h-2.58l2.51 2.56c-.18.69-.73 1.26-1.41 1.44L17 18.5V21h-2v-6h6v2zM19 7h2v2h-2V7zm2-2h-2V3.08c1.1 0 2 .92 2 1.92zm-6-2h2v2h-2V3zm4 8h2v2h-2v-2zM9 21H7v-2h2v2zM5 9H3V7h2v2zm0-5.92V5H3c0-1 1-1.92 2-1.92zM5 17H3v-2h2v2zM9 5H7V3h2v2zm4 0h-2V3h2v2zm0 16h-2v-2h2v2zm-8-8H3v-2h2v2zm0 8.08C3.9 21.08 3 20 3 19h2v2.08z\"></path>\n      </svg>\n    </span>\n  </button>\n  <button mat-button class=\"merge-button\" (click)=\"done()\">{{vars['editDoneLabel']}}</button>\n</div>\n",
                styles: [".toolbar{align-items:center;background-color:#fff;border-radius:2px;box-shadow:rgba(0,0,0,.14) 0 24px 38px 3px,rgba(0,0,0,.12) 0 9px 46px 8px,rgba(0,0,0,.2) 0 11px 15px -7px;cursor:pointer;display:-webkit-inline-flex;flex-direction:row;height:56px;min-width:232px;pointer-events:auto;overflow:visible;position:absolute;margin:0 auto;width:228px;bottom:0;top:25%;left:0;right:0;z-index:999}.move-toolbar{cursor:-webkit-grab;height:56px;padding:0 12px;position:relative}.move-toolbar:active{cursor:-webkit-grabbing}.toggle{display:inline-block;position:relative;height:36px;width:36px}.toggle-decorator{left:0;position:absolute;top:0}.highlight-toggle{align-items:center;background-color:#fff;border:none;box-sizing:border-box;cursor:pointer;display:-webkit-flex;justify-content:center;outline:0;padding:10px;pointer-events:auto;position:relative;height:56px;width:56px}.deepen-color{background-color:#e0e0e0!important}.hide-toggle{align-items:center;background-color:#fff;border:none;box-sizing:border-box;cursor:pointer;display:-webkit-flex;justify-content:center;outline:0;padding:10px;pointer-events:auto;position:relative;height:56px;width:56px}.merge-button{padding:0!important;margin:0 10px!important;min-width:56px;color:#4285f4}"]
            }] }
];
/** @nocollapse */
FeedbackToolbarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FeedbackService }
];
FeedbackToolbarComponent.propDecorators = {
    drawColor: [{ type: Input }],
    manipulate: [{ type: Output }],
    toggleMoveBtn: [{ type: ViewChild, args: ['toggleMove', { static: true },] }]
};
if (false) {
    /** @type {?} */
    FeedbackToolbarComponent.prototype.drawColor;
    /** @type {?} */
    FeedbackToolbarComponent.prototype.manipulate;
    /** @type {?} */
    FeedbackToolbarComponent.prototype.disableToolbarTips;
    /**
     * @type {?}
     * @private
     */
    FeedbackToolbarComponent.prototype.toggleMoveBtn;
    /** @type {?} */
    FeedbackToolbarComponent.prototype.isSwitch;
    /** @type {?} */
    FeedbackToolbarComponent.prototype.isDragging;
    /** @type {?} */
    FeedbackToolbarComponent.prototype.vars;
    /** @type {?} */
    FeedbackToolbarComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    FeedbackToolbarComponent.prototype.feedbackService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2stdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1mZWVkYmFjay8iLCJzb3VyY2VzIjpbImxpYi9mZWVkYmFjay10b29sYmFyL2ZlZWRiYWNrLXRvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBaUIsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU90RCxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQVluQyxZQUFtQixFQUFjLEVBQVUsZUFBZ0M7UUFBeEQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVJwRSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4Qyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFHM0IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFNBQUksR0FBVyxFQUFFLENBQUM7UUFHdkIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVNLGVBQWU7O2NBQ2QsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUs7UUFDM0MsT0FBTyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDOUIsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDckIsT0FBTyxDQUFDLEdBQUcsR0FBRyxLQUFL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QVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFMekMsNkNBQ3lCOztJQUN6Qiw4Q0FDK0M7O0lBQy9DLHNEQUFrQzs7Ozs7SUFDbEMsaURBQ2tDOztJQUNsQyw0Q0FBd0I7O0lBQ3hCLDhDQUEwQjs7SUFDMUIsd0NBQXlCOztJQUViLHNDQUFxQjs7Ozs7SUFBRSxtREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBmaW5hbGl6ZSwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZlZWRiYWNrU2VydmljZSB9IGZyb20gJy4uL2ZlZWRiYWNrLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmZWVkYmFjay10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZlZWRiYWNrLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mZWVkYmFjay10b29sYmFyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGZWVkYmFja1Rvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBwdWJsaWMgZHJhd0NvbG9yOiBzdHJpbmc7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgbWFuaXB1bGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBwdWJsaWMgZGlzYWJsZVRvb2xiYXJUaXBzID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoJ3RvZ2dsZU1vdmUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwcml2YXRlIHRvZ2dsZU1vdmVCdG46IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyBpc1N3aXRjaCA9IGZhbHNlO1xuICBwdWJsaWMgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICBwdWJsaWMgdmFyczogb2JqZWN0ID0ge307XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGZlZWRiYWNrU2VydmljZTogRmVlZGJhY2tTZXJ2aWNlKSB7XG4gICAgdGhpcy52YXJzID0gZmVlZGJhY2tTZXJ2aWNlLmluaXRpYWxWYXJpYWJsZXM7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGVsU3R5bGUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGU7XG4gICAgZWxTdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZWxTdHlsZS5sZWZ0ID0gJzQzJSc7XG4gICAgZWxTdHlsZS50b3AgPSAnMWVtJztcbiAgICB0aGlzLmFkZERyYWdMaXN0ZW5lck9uTW92ZUJ0bigpO1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuaXNTd2l0Y2ggPSB0aGlzLmRyYXdDb2xvciAhPT0gdGhpcy5mZWVkYmFja1NlcnZpY2UuaGlnaGxpZ2h0ZWRDb2xvcjtcbiAgfVxuXG4gIHB1YmxpYyBkb25lKCkge1xuICAgIHRoaXMubWFuaXB1bGF0ZS5lbWl0KCdkb25lJyk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlSGlnaGxpZ2h0KCkge1xuICAgIHRoaXMuaXNTd2l0Y2ggPSBmYWxzZTtcbiAgICB0aGlzLm1hbmlwdWxhdGUuZW1pdCh0aGlzLmZlZWRiYWNrU2VydmljZS5oaWdobGlnaHRlZENvbG9yKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVIaWRlKCkge1xuICAgIHRoaXMuaXNTd2l0Y2ggPSB0cnVlO1xuICAgIHRoaXMubWFuaXB1bGF0ZS5lbWl0KHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmhpZGRlbkNvbG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGREcmFnTGlzdGVuZXJPbk1vdmVCdG4oKSB7XG4gICAgY29uc3QgbW91c2VVcCA9IGZyb21FdmVudCh0aGlzLnRvZ2dsZU1vdmVCdG4ubmF0aXZlRWxlbWVudCwgJ21vdXNldXAnKTtcbiAgICBjb25zdCBtb3VzZU1vdmUgPSBmcm9tRXZlbnQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnbW91c2Vtb3ZlJyk7XG4gICAgY29uc3QgbW91c2VEb3duID0gZnJvbUV2ZW50KHRoaXMudG9nZ2xlTW92ZUJ0bi5uYXRpdmVFbGVtZW50LCAnbW91c2Vkb3duJyk7XG4gICAgY29uc3QgbW91c2VEcmFnID0gbW91c2VEb3duLnBpcGUobWVyZ2VNYXAoKG1kOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5zZXRJc0RyYWdnaW5nVG9vbGJhcih0cnVlKTtcbiAgICAgIGNvbnN0IHN0YXJ0WCA9IG1kLm9mZnNldFg7XG4gICAgICBjb25zdCBzdGFydFkgPSBtZC5vZmZzZXRZO1xuICAgICAgdGhpcy5kaXNhYmxlVG9vbGJhclRpcHMgPSB0cnVlO1xuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIC8vIENhbGN1bGF0ZSBkaWYgd2l0aCBtb3VzZW1vdmUgdW50aWwgbW91c2V1cFxuICAgICAgcmV0dXJuIG1vdXNlTW92ZS5waXBlKFxuICAgICAgICBtYXAoKG1tOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgbW0ucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogbW0uY2xpZW50WCAtIHN0YXJ0WCxcbiAgICAgICAgICAgIHRvcDogbW0uY2xpZW50WSAtIHN0YXJ0WVxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlVG9vbGJhclRpcHMgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5zZXRJc0RyYWdnaW5nVG9vbGJhcihmYWxzZSk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwobW91c2VVcCkpO1xuICAgIH0pKTtcbiAgICBtb3VzZURyYWcuc3Vic2NyaWJlKFxuICAgICAgKHBvcykgPT4ge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IHBvcy5sZWZ0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IHBvcy50b3AgKyAncHgnO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==