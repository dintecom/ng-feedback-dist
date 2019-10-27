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
            allowTaint: true
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWZlZWRiYWNrLyIsInNvdXJjZXMiOlsibGliL2ZlZWRiYWNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxXQUFXLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFJM0MsTUFBTSxPQUFPLGVBQWU7SUFENUI7UUFFUyxxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLDJCQUFzQixHQUFHLElBQUksT0FBTyxFQUFxQixDQUFDO1FBQzNELHNCQUFpQixHQUFrQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFN0YsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBWSxDQUFDO1FBQzFDLGNBQVMsR0FBeUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwRSw0QkFBdUIsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQ2xELHVCQUFrQixHQUF3QixJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxFQUFFLENBQUM7SUF5RC9GLENBQUM7Ozs7SUF2RFEsb0JBQW9COztjQUNuQixJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUk7UUFDMUIsV0FBVyxDQUFDLElBQUksRUFBRTtZQUNoQixPQUFPLEVBQUUsS0FBSztZQUNkLEtBQUssRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVc7WUFDM0MsTUFBTSxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWTtZQUM3QyxDQUFDLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxVQUFVO1lBQ3RDLENBQUMsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVM7WUFDckMsVUFBVSxFQUFHLElBQUk7U0FDbEIsQ0FBQyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFVLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsTUFBeUI7UUFDeEMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVNLFdBQVcsQ0FBQyxRQUFrQjtRQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVNLG9CQUFvQixDQUFDLFVBQW1CO1FBQzdDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsTUFBTTs7Y0FDZixHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7O2NBQ25DLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUM5QyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDNUIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsR0FBRyxFQUFFLEtBQUs7WUFDVixLQUFLLEVBQUUsR0FBRztZQUNWLElBQUksRUFBRSxHQUFHO1lBQ1QsTUFBTSxFQUFFLFFBQVE7WUFDaEIsU0FBUyxFQUFFLE1BQU07WUFDakIsUUFBUSxFQUFFLE1BQU07WUFDaEIsU0FBUyxFQUFFLGtCQUFrQjtTQUM5QixDQUFDLENBQUM7UUFDSCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7O0lBRU0sWUFBWTs7Y0FDWCxjQUFjLEdBQUcsbUJBQUEsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFDMUYsY0FBYyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFTSxZQUFZOztjQUNYLGNBQWMsR0FBRyxtQkFBQSxRQUFRLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBZTtRQUMxRixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO1lBQzNELGNBQWMsQ0FBQyxZQUFZLENBQUMseUJBQXlCLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDaEU7UUFDRCxjQUFjLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxxQkFBcUIsQ0FBQztJQUMvRCxDQUFDOzs7WUFwRUYsVUFBVTs7OztJQUVULDJDQUFxQzs7SUFDckMsMkNBQW1DOztJQUNuQyxzQ0FBNkI7Ozs7O0lBQzdCLGlEQUFrRTs7SUFDbEUsNENBQXFHOzs7OztJQUVyRyx5Q0FBaUQ7O0lBQ2pELG9DQUE0RTs7Ozs7SUFFNUUsa0RBQXlEOztJQUN6RCw2Q0FBNkYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgaHRtbDJjYW52YXMgZnJvbSAnaHRtbDJjYW52YXMnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmVlZGJhY2sgfSBmcm9tICcuL2VudGl0eS9mZWVkYmFjayc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGZWVkYmFja1NlcnZpY2Uge1xuICBwdWJsaWMgaW5pdGlhbFZhcmlhYmxlczogb2JqZWN0ID0ge307XG4gIHB1YmxpYyBoaWdobGlnaHRlZENvbG9yID0gJ3llbGxvdyc7XG4gIHB1YmxpYyBoaWRkZW5Db2xvciA9ICdibGFjayc7XG4gIHByaXZhdGUgc2NyZWVuc2hvdENhbnZhc1NvdXJjZSA9IG5ldyBTdWJqZWN0PEhUTUxDYW52YXNFbGVtZW50PigpO1xuICBwdWJsaWMgc2NyZWVuc2hvdENhbnZhcyQ6IE9ic2VydmFibGU8SFRNTENhbnZhc0VsZW1lbnQ+ID0gdGhpcy5zY3JlZW5zaG90Q2FudmFzU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgZmVlZGJhY2tTb3VyY2UgPSBuZXcgU3ViamVjdDxGZWVkYmFjaz4oKTtcbiAgcHVibGljIGZlZWRiYWNrJDogT2JzZXJ2YWJsZTxGZWVkYmFjaz4gPSB0aGlzLmZlZWRiYWNrU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgaXNEcmFnZ2luZ1Rvb2xiYXJTb3VyY2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwdWJsaWMgaXNEcmFnZ2luZ1Rvb2xiYXIkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5pc0RyYWdnaW5nVG9vbGJhclNvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICBwdWJsaWMgaW5pdFNjcmVlbnNob3RDYW52YXMoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgaHRtbDJjYW52YXMoYm9keSwge1xuICAgICAgbG9nZ2luZzogZmFsc2UsXG4gICAgICB3aWR0aDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgeDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICB5OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgYWxsb3dUYWludCA6IHRydWVcbiAgICB9KS50aGVuKGJvZHlDYW52YXMgPT4ge1xuICAgICAgdGhpcy5zY3JlZW5zaG90Q2FudmFzU291cmNlLm5leHQoYm9keUNhbnZhcyk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q2FudmFzKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNjcmVlbnNob3RDYW52YXNTb3VyY2UubmV4dChjYW52YXMpO1xuICB9XG5cbiAgcHVibGljIHNldEZlZWRiYWNrKGZlZWRiYWNrOiBGZWVkYmFjayk6IHZvaWQge1xuICAgIHRoaXMuZmVlZGJhY2tTb3VyY2UubmV4dChmZWVkYmFjayk7XG4gIH1cblxuICBwdWJsaWMgc2V0SXNEcmFnZ2luZ1Rvb2xiYXIoaXNEcmFnZ2luZzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEcmFnZ2luZ1Rvb2xiYXJTb3VyY2UubmV4dChpc0RyYWdnaW5nKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbWdFbGUoY2FudmFzKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGltZyA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpLFxuICAgICAgICAgIGltYWdlRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2VFbGUuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcpO1xuICAgIE9iamVjdC5hc3NpZ24oaW1hZ2VFbGUuc3R5bGUsIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAnNTAlJyxcbiAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKSdcbiAgICB9KTtcbiAgICByZXR1cm4gaW1hZ2VFbGU7XG4gIH1cblxuICBwdWJsaWMgaGlkZUJhY2tEcm9wKCkge1xuICAgIGNvbnN0IGRpYWxvZ0JhY2tEcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGlhbG9nQmFja0Ryb3AnKVswXSBhcyBIVE1MRWxlbWVudDtcbiAgICBkaWFsb2dCYWNrRHJvcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5pdGlhbCc7XG4gIH1cblxuICBwdWJsaWMgc2hvd0JhY2tEcm9wKCkge1xuICAgIGNvbnN0IGRpYWxvZ0JhY2tEcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGlhbG9nQmFja0Ryb3AnKVswXSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIWRpYWxvZ0JhY2tEcm9wLmdldEF0dHJpYnV0ZSgnZGF0YS1odG1sMmNhbnZhcy1pZ25vcmUnKSkge1xuICAgICAgZGlhbG9nQmFja0Ryb3Auc2V0QXR0cmlidXRlKCdkYXRhLWh0bWwyY2FudmFzLWlnbm9yZScsICd0cnVlJyk7XG4gICAgfVxuICAgIGRpYWxvZ0JhY2tEcm9wLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIC4yODgpJztcbiAgfVxufVxuIl19