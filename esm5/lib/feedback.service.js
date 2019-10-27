/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import { Subject } from 'rxjs';
var FeedbackService = /** @class */ (function () {
    function FeedbackService() {
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
    FeedbackService.prototype.initScreenshotCanvas = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var body = document.body;
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
        function (bodyCanvas) {
            _this.screenshotCanvasSource.next(bodyCanvas);
        }));
    };
    /**
     * @param {?} canvas
     * @return {?}
     */
    FeedbackService.prototype.setCanvas = /**
     * @param {?} canvas
     * @return {?}
     */
    function (canvas) {
        this.screenshotCanvasSource.next(canvas);
    };
    /**
     * @param {?} feedback
     * @return {?}
     */
    FeedbackService.prototype.setFeedback = /**
     * @param {?} feedback
     * @return {?}
     */
    function (feedback) {
        this.feedbackSource.next(feedback);
    };
    /**
     * @param {?} isDragging
     * @return {?}
     */
    FeedbackService.prototype.setIsDraggingToolbar = /**
     * @param {?} isDragging
     * @return {?}
     */
    function (isDragging) {
        this.isDraggingToolbarSource.next(isDragging);
    };
    /**
     * @param {?} canvas
     * @return {?}
     */
    FeedbackService.prototype.getImgEle = /**
     * @param {?} canvas
     * @return {?}
     */
    function (canvas) {
        /** @type {?} */
        var img = canvas.toDataURL('image/png');
        /** @type {?} */
        var imageEle = document.createElement('img');
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
    };
    /**
     * @return {?}
     */
    FeedbackService.prototype.hideBackDrop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dialogBackDrop = (/** @type {?} */ (document.getElementsByClassName('dialogBackDrop')[0]));
        dialogBackDrop.style.backgroundColor = 'initial';
    };
    /**
     * @return {?}
     */
    FeedbackService.prototype.showBackDrop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dialogBackDrop = (/** @type {?} */ (document.getElementsByClassName('dialogBackDrop')[0]));
        if (!dialogBackDrop.getAttribute('data-html2canvas-ignore')) {
            dialogBackDrop.setAttribute('data-html2canvas-ignore', 'true');
        }
        dialogBackDrop.style.backgroundColor = 'rgba(0, 0, 0, .288)';
    };
    FeedbackService.decorators = [
        { type: Injectable }
    ];
    return FeedbackService;
}());
export { FeedbackService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWZlZWRiYWNrLyIsInNvdXJjZXMiOlsibGliL2ZlZWRiYWNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxXQUFXLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFHM0M7SUFBQTtRQUVTLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxRQUFRLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxPQUFPLENBQUM7UUFDckIsMkJBQXNCLEdBQUcsSUFBSSxPQUFPLEVBQXFCLENBQUM7UUFDM0Qsc0JBQWlCLEdBQWtDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUU3RixtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFZLENBQUM7UUFDMUMsY0FBUyxHQUF5QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBFLDRCQUF1QixHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDbEQsdUJBQWtCLEdBQXdCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQTBEL0YsQ0FBQzs7OztJQXhEUSw4Q0FBb0I7OztJQUEzQjtRQUFBLGlCQWFDOztZQVpPLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSTtRQUMxQixXQUFXLENBQUMsSUFBSSxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsS0FBSyxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVztZQUMzQyxNQUFNLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZO1lBQzdDLENBQUMsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLFVBQVU7WUFDdEMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUztZQUNyQyxVQUFVLEVBQUcsSUFBSTtZQUNqQixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxVQUFVO1lBQ2hCLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVNLG1DQUFTOzs7O0lBQWhCLFVBQWlCLE1BQXlCO1FBQ3hDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFTSxxQ0FBVzs7OztJQUFsQixVQUFtQixRQUFrQjtRQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVNLDhDQUFvQjs7OztJQUEzQixVQUE0QixVQUFtQjtRQUM3QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRU0sbUNBQVM7Ozs7SUFBaEIsVUFBaUIsTUFBTTs7WUFDZixHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7O1lBQ25DLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUM5QyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDNUIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsR0FBRyxFQUFFLEtBQUs7WUFDVixLQUFLLEVBQUUsR0FBRztZQUNWLElBQUksRUFBRSxHQUFHO1lBQ1QsTUFBTSxFQUFFLFFBQVE7WUFDaEIsU0FBUyxFQUFFLE1BQU07WUFDakIsUUFBUSxFQUFFLE1BQU07WUFDaEIsU0FBUyxFQUFFLGtCQUFrQjtTQUM5QixDQUFDLENBQUM7UUFDSCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7O0lBRU0sc0NBQVk7OztJQUFuQjs7WUFDUSxjQUFjLEdBQUcsbUJBQUEsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFDMUYsY0FBYyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFTSxzQ0FBWTs7O0lBQW5COztZQUNRLGNBQWMsR0FBRyxtQkFBQSxRQUFRLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBZTtRQUMxRixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO1lBQzNELGNBQWMsQ0FBQyxZQUFZLENBQUMseUJBQXlCLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDaEU7UUFDRCxjQUFjLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxxQkFBcUIsQ0FBQztJQUMvRCxDQUFDOztnQkFyRUYsVUFBVTs7SUFzRVgsc0JBQUM7Q0FBQSxBQXRFRCxJQXNFQztTQXJFWSxlQUFlOzs7SUFDMUIsMkNBQXFDOztJQUNyQywyQ0FBbUM7O0lBQ25DLHNDQUE2Qjs7Ozs7SUFDN0IsaURBQWtFOztJQUNsRSw0Q0FBcUc7Ozs7O0lBRXJHLHlDQUFpRDs7SUFDakQsb0NBQTRFOzs7OztJQUU1RSxrREFBeUQ7O0lBQ3pELDZDQUE2RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGZWVkYmFjayB9IGZyb20gJy4vZW50aXR5L2ZlZWRiYWNrJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrU2VydmljZSB7XG4gIHB1YmxpYyBpbml0aWFsVmFyaWFibGVzOiBvYmplY3QgPSB7fTtcbiAgcHVibGljIGhpZ2hsaWdodGVkQ29sb3IgPSAneWVsbG93JztcbiAgcHVibGljIGhpZGRlbkNvbG9yID0gJ2JsYWNrJztcbiAgcHJpdmF0ZSBzY3JlZW5zaG90Q2FudmFzU291cmNlID0gbmV3IFN1YmplY3Q8SFRNTENhbnZhc0VsZW1lbnQ+KCk7XG4gIHB1YmxpYyBzY3JlZW5zaG90Q2FudmFzJDogT2JzZXJ2YWJsZTxIVE1MQ2FudmFzRWxlbWVudD4gPSB0aGlzLnNjcmVlbnNob3RDYW52YXNTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBmZWVkYmFja1NvdXJjZSA9IG5ldyBTdWJqZWN0PEZlZWRiYWNrPigpO1xuICBwdWJsaWMgZmVlZGJhY2skOiBPYnNlcnZhYmxlPEZlZWRiYWNrPiA9IHRoaXMuZmVlZGJhY2tTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBpc0RyYWdnaW5nVG9vbGJhclNvdXJjZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHB1YmxpYyBpc0RyYWdnaW5nVG9vbGJhciQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmlzRHJhZ2dpbmdUb29sYmFyU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHB1YmxpYyBpbml0U2NyZWVuc2hvdENhbnZhcygpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBodG1sMmNhbnZhcyhib2R5LCB7XG4gICAgICBsb2dnaW5nOiBmYWxzZSxcbiAgICAgIHdpZHRoOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICB4OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgIHk6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICBhbGxvd1RhaW50IDogdHJ1ZSxcbiAgICAgIHVzZUNPUlM6IHRydWVcbiAgICB9KS50aGVuKGJvZHlDYW52YXMgPT4ge1xuICAgICAgdGhpcy5zY3JlZW5zaG90Q2FudmFzU291cmNlLm5leHQoYm9keUNhbnZhcyk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q2FudmFzKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNjcmVlbnNob3RDYW52YXNTb3VyY2UubmV4dChjYW52YXMpO1xuICB9XG5cbiAgcHVibGljIHNldEZlZWRiYWNrKGZlZWRiYWNrOiBGZWVkYmFjayk6IHZvaWQge1xuICAgIHRoaXMuZmVlZGJhY2tTb3VyY2UubmV4dChmZWVkYmFjayk7XG4gIH1cblxuICBwdWJsaWMgc2V0SXNEcmFnZ2luZ1Rvb2xiYXIoaXNEcmFnZ2luZzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEcmFnZ2luZ1Rvb2xiYXJTb3VyY2UubmV4dChpc0RyYWdnaW5nKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbWdFbGUoY2FudmFzKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGltZyA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpLFxuICAgICAgICAgIGltYWdlRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2VFbGUuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcpO1xuICAgIE9iamVjdC5hc3NpZ24oaW1hZ2VFbGUuc3R5bGUsIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAnNTAlJyxcbiAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKSdcbiAgICB9KTtcbiAgICByZXR1cm4gaW1hZ2VFbGU7XG4gIH1cblxuICBwdWJsaWMgaGlkZUJhY2tEcm9wKCkge1xuICAgIGNvbnN0IGRpYWxvZ0JhY2tEcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGlhbG9nQmFja0Ryb3AnKVswXSBhcyBIVE1MRWxlbWVudDtcbiAgICBkaWFsb2dCYWNrRHJvcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5pdGlhbCc7XG4gIH1cblxuICBwdWJsaWMgc2hvd0JhY2tEcm9wKCkge1xuICAgIGNvbnN0IGRpYWxvZ0JhY2tEcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGlhbG9nQmFja0Ryb3AnKVswXSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIWRpYWxvZ0JhY2tEcm9wLmdldEF0dHJpYnV0ZSgnZGF0YS1odG1sMmNhbnZhcy1pZ25vcmUnKSkge1xuICAgICAgZGlhbG9nQmFja0Ryb3Auc2V0QXR0cmlidXRlKCdkYXRhLWh0bWwyY2FudmFzLWlnbm9yZScsICd0cnVlJyk7XG4gICAgfVxuICAgIGRpYWxvZ0JhY2tEcm9wLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIC4yODgpJztcbiAgfVxufVxuIl19