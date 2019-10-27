/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import { Subject } from 'rxjs';
export class FeedbackService {
    constructor() {
        this.initialVariables = {};
        this.highlightedColor = 'yellow';
        this.hiddenColor = 'black';
        this.screenshotCanvasSource = new Subject();
        this.screenshotCanvas$ = this.screenshotCanvasSource.asObservable();
        this.feedbackSource = new Subject();
        this.feedback$ = this.feedbackSource.asObservable();
        this.isDraggingToolbarSource = new Subject();
        this.isDraggingToolbar$ = this.isDraggingToolbarSource.asObservable();
    }
    /**
     * @return {?}
     */
    initScreenshotCanvas() {
        /** @type {?} */
        const body = document.body;
        html2canvas(body, {
            logging: false,
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            x: document.documentElement.scrollLeft,
            y: document.documentElement.scrollTop,
            allowTaint: true,
            useCORS: true
        }).then((/**
         * @param {?} bodyCanvas
         * @return {?}
         */
        bodyCanvas => {
            this.screenshotCanvasSource.next(bodyCanvas);
        }));
    }
    /**
     * @param {?} canvas
     * @return {?}
     */
    setCanvas(canvas) {
        this.screenshotCanvasSource.next(canvas);
    }
    /**
     * @param {?} feedback
     * @return {?}
     */
    setFeedback(feedback) {
        this.feedbackSource.next(feedback);
    }
    /**
     * @param {?} isDragging
     * @return {?}
     */
    setIsDraggingToolbar(isDragging) {
        this.isDraggingToolbarSource.next(isDragging);
    }
    /**
     * @param {?} canvas
     * @return {?}
     */
    getImgEle(canvas) {
        /** @type {?} */
        const img = canvas.toDataURL('image/png');
        /** @type {?} */
        const imageEle = document.createElement('img');
        imageEle.setAttribute('src', img);
        Object.assign(imageEle.style, {
            position: 'absolute',
            top: '50%',
            right: '0',
            left: '0',
            margin: '0 auto',
            maxHeight: '100%',
            maxWidth: '100%',
            transform: 'translateY(-50%)'
        });
        return imageEle;
    }
    /**
     * @return {?}
     */
    hideBackDrop() {
        /** @type {?} */
        const dialogBackDrop = (/** @type {?} */ (document.getElementsByClassName('dialogBackDrop')[0]));
        dialogBackDrop.style.backgroundColor = 'initial';
    }
    /**
     * @return {?}
     */
    showBackDrop() {
        /** @type {?} */
        const dialogBackDrop = (/** @type {?} */ (document.getElementsByClassName('dialogBackDrop')[0]));
        if (!dialogBackDrop.getAttribute('data-html2canvas-ignore')) {
            dialogBackDrop.setAttribute('data-html2canvas-ignore', 'true');
        }
        dialogBackDrop.style.backgroundColor = 'rgba(0, 0, 0, .288)';
    }
}
FeedbackService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    FeedbackService.prototype.initialVariables;
    /** @type {?} */
    FeedbackService.prototype.highlightedColor;
    /** @type {?} */
    FeedbackService.prototype.hiddenColor;
    /**
     * @type {?}
     * @private
     */
    FeedbackService.prototype.screenshotCanvasSource;
    /** @type {?} */
    FeedbackService.prototype.screenshotCanvas$;
    /**
     * @type {?}
     * @private
     */
    FeedbackService.prototype.feedbackSource;
    /** @type {?} */
    FeedbackService.prototype.feedback$;
    /**
     * @type {?}
     * @private
     */
    FeedbackService.prototype.isDraggingToolbarSource;
    /** @type {?} */
    FeedbackService.prototype.isDraggingToolbar$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWZlZWRiYWNrLyIsInNvdXJjZXMiOlsibGliL2ZlZWRiYWNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxXQUFXLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFJM0MsTUFBTSxPQUFPLGVBQWU7SUFENUI7UUFFUyxxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLDJCQUFzQixHQUFHLElBQUksT0FBTyxFQUFxQixDQUFDO1FBQzNELHNCQUFpQixHQUFrQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFN0YsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBWSxDQUFDO1FBQzFDLGNBQVMsR0FBeUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwRSw0QkFBdUIsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQ2xELHVCQUFrQixHQUF3QixJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxFQUFFLENBQUM7SUEwRC9GLENBQUM7Ozs7SUF4RFEsb0JBQW9COztjQUNuQixJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUk7UUFDMUIsV0FBVyxDQUFDLElBQUksRUFBRTtZQUNoQixPQUFPLEVBQUUsS0FBSztZQUNkLEtBQUssRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVc7WUFDM0MsTUFBTSxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWTtZQUM3QyxDQUFDLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxVQUFVO1lBQ3RDLENBQUMsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVM7WUFDckMsVUFBVSxFQUFHLElBQUk7WUFDakIsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxNQUF5QjtRQUN4QyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLFFBQWtCO1FBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRU0sb0JBQW9CLENBQUMsVUFBbUI7UUFDN0MsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxNQUFNOztjQUNmLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQzs7Y0FDbkMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzlDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUM1QixRQUFRLEVBQUUsVUFBVTtZQUNwQixHQUFHLEVBQUUsS0FBSztZQUNWLEtBQUssRUFBRSxHQUFHO1lBQ1YsSUFBSSxFQUFFLEdBQUc7WUFDVCxNQUFNLEVBQUUsUUFBUTtZQUNoQixTQUFTLEVBQUUsTUFBTTtZQUNqQixRQUFRLEVBQUUsTUFBTTtZQUNoQixTQUFTLEVBQUUsa0JBQWtCO1NBQzlCLENBQUMsQ0FBQztRQUNILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFTSxZQUFZOztjQUNYLGNBQWMsR0FBRyxtQkFBQSxRQUFRLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBZTtRQUMxRixjQUFjLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVNLFlBQVk7O2NBQ1gsY0FBYyxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFlO1FBQzFGLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLHlCQUF5QixDQUFDLEVBQUU7WUFDM0QsY0FBYyxDQUFDLFlBQVksQ0FBQyx5QkFBeUIsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNoRTtRQUNELGNBQWMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLHFCQUFxQixDQUFDO0lBQy9ELENBQUM7OztZQXJFRixVQUFVOzs7O0lBRVQsMkNBQXFDOztJQUNyQywyQ0FBbUM7O0lBQ25DLHNDQUE2Qjs7Ozs7SUFDN0IsaURBQWtFOztJQUNsRSw0Q0FBcUc7Ozs7O0lBRXJHLHlDQUFpRDs7SUFDakQsb0NBQTRFOzs7OztJQUU1RSxrREFBeUQ7O0lBQ3pELDZDQUE2RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGZWVkYmFjayB9IGZyb20gJy4vZW50aXR5L2ZlZWRiYWNrJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrU2VydmljZSB7XG4gIHB1YmxpYyBpbml0aWFsVmFyaWFibGVzOiBvYmplY3QgPSB7fTtcbiAgcHVibGljIGhpZ2hsaWdodGVkQ29sb3IgPSAneWVsbG93JztcbiAgcHVibGljIGhpZGRlbkNvbG9yID0gJ2JsYWNrJztcbiAgcHJpdmF0ZSBzY3JlZW5zaG90Q2FudmFzU291cmNlID0gbmV3IFN1YmplY3Q8SFRNTENhbnZhc0VsZW1lbnQ+KCk7XG4gIHB1YmxpYyBzY3JlZW5zaG90Q2FudmFzJDogT2JzZXJ2YWJsZTxIVE1MQ2FudmFzRWxlbWVudD4gPSB0aGlzLnNjcmVlbnNob3RDYW52YXNTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBmZWVkYmFja1NvdXJjZSA9IG5ldyBTdWJqZWN0PEZlZWRiYWNrPigpO1xuICBwdWJsaWMgZmVlZGJhY2skOiBPYnNlcnZhYmxlPEZlZWRiYWNrPiA9IHRoaXMuZmVlZGJhY2tTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBpc0RyYWdnaW5nVG9vbGJhclNvdXJjZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHB1YmxpYyBpc0RyYWdnaW5nVG9vbGJhciQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmlzRHJhZ2dpbmdUb29sYmFyU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHB1YmxpYyBpbml0U2NyZWVuc2hvdENhbnZhcygpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBodG1sMmNhbnZhcyhib2R5LCB7XG4gICAgICBsb2dnaW5nOiBmYWxzZSxcbiAgICAgIHdpZHRoOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICB4OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgIHk6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICBhbGxvd1RhaW50IDogdHJ1ZSxcbiAgICAgIHVzZUNPUlM6IHRydWVcbiAgICB9KS50aGVuKGJvZHlDYW52YXMgPT4ge1xuICAgICAgdGhpcy5zY3JlZW5zaG90Q2FudmFzU291cmNlLm5leHQoYm9keUNhbnZhcyk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q2FudmFzKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNjcmVlbnNob3RDYW52YXNTb3VyY2UubmV4dChjYW52YXMpO1xuICB9XG5cbiAgcHVibGljIHNldEZlZWRiYWNrKGZlZWRiYWNrOiBGZWVkYmFjayk6IHZvaWQge1xuICAgIHRoaXMuZmVlZGJhY2tTb3VyY2UubmV4dChmZWVkYmFjayk7XG4gIH1cblxuICBwdWJsaWMgc2V0SXNEcmFnZ2luZ1Rvb2xiYXIoaXNEcmFnZ2luZzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEcmFnZ2luZ1Rvb2xiYXJTb3VyY2UubmV4dChpc0RyYWdnaW5nKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbWdFbGUoY2FudmFzKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGltZyA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpLFxuICAgICAgICAgIGltYWdlRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2VFbGUuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcpO1xuICAgIE9iamVjdC5hc3NpZ24oaW1hZ2VFbGUuc3R5bGUsIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAnNTAlJyxcbiAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKSdcbiAgICB9KTtcbiAgICByZXR1cm4gaW1hZ2VFbGU7XG4gIH1cblxuICBwdWJsaWMgaGlkZUJhY2tEcm9wKCkge1xuICAgIGNvbnN0IGRpYWxvZ0JhY2tEcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGlhbG9nQmFja0Ryb3AnKVswXSBhcyBIVE1MRWxlbWVudDtcbiAgICBkaWFsb2dCYWNrRHJvcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5pdGlhbCc7XG4gIH1cblxuICBwdWJsaWMgc2hvd0JhY2tEcm9wKCkge1xuICAgIGNvbnN0IGRpYWxvZ0JhY2tEcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGlhbG9nQmFja0Ryb3AnKVswXSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIWRpYWxvZ0JhY2tEcm9wLmdldEF0dHJpYnV0ZSgnZGF0YS1odG1sMmNhbnZhcy1pZ25vcmUnKSkge1xuICAgICAgZGlhbG9nQmFja0Ryb3Auc2V0QXR0cmlidXRlKCdkYXRhLWh0bWwyY2FudmFzLWlnbm9yZScsICd0cnVlJyk7XG4gICAgfVxuICAgIGRpYWxvZ0JhY2tEcm9wLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIC4yODgpJztcbiAgfVxufVxuIl19