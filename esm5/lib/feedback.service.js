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
            allowTaint: true
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWZlZWRiYWNrLyIsInNvdXJjZXMiOlsibGliL2ZlZWRiYWNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxXQUFXLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFHM0M7SUFBQTtRQUVTLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxRQUFRLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxPQUFPLENBQUM7UUFDckIsMkJBQXNCLEdBQUcsSUFBSSxPQUFPLEVBQXFCLENBQUM7UUFDM0Qsc0JBQWlCLEdBQWtDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUU3RixtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFZLENBQUM7UUFDMUMsY0FBUyxHQUF5QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBFLDRCQUF1QixHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDbEQsdUJBQWtCLEdBQXdCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQXlEL0YsQ0FBQzs7OztJQXZEUSw4Q0FBb0I7OztJQUEzQjtRQUFBLGlCQVlDOztZQVhPLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSTtRQUMxQixXQUFXLENBQUMsSUFBSSxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsS0FBSyxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVztZQUMzQyxNQUFNLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZO1lBQzdDLENBQUMsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLFVBQVU7WUFDdEMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUztZQUNyQyxVQUFVLEVBQUcsSUFBSTtTQUNsQixDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsVUFBVTtZQUNoQixLQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxtQ0FBUzs7OztJQUFoQixVQUFpQixNQUF5QjtRQUN4QyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRU0scUNBQVc7Ozs7SUFBbEIsVUFBbUIsUUFBa0I7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFTSw4Q0FBb0I7Ozs7SUFBM0IsVUFBNEIsVUFBbUI7UUFDN0MsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVNLG1DQUFTOzs7O0lBQWhCLFVBQWlCLE1BQU07O1lBQ2YsR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDOztZQUNuQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDOUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQzVCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEdBQUcsRUFBRSxLQUFLO1lBQ1YsS0FBSyxFQUFFLEdBQUc7WUFDVixJQUFJLEVBQUUsR0FBRztZQUNULE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxrQkFBa0I7U0FDOUIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVNLHNDQUFZOzs7SUFBbkI7O1lBQ1EsY0FBYyxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFlO1FBQzFGLGNBQWMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRU0sc0NBQVk7OztJQUFuQjs7WUFDUSxjQUFjLEdBQUcsbUJBQUEsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFDMUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMseUJBQXlCLENBQUMsRUFBRTtZQUMzRCxjQUFjLENBQUMsWUFBWSxDQUFDLHlCQUF5QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsY0FBYyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcscUJBQXFCLENBQUM7SUFDL0QsQ0FBQzs7Z0JBcEVGLFVBQVU7O0lBcUVYLHNCQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0FwRVksZUFBZTs7O0lBQzFCLDJDQUFxQzs7SUFDckMsMkNBQW1DOztJQUNuQyxzQ0FBNkI7Ozs7O0lBQzdCLGlEQUFrRTs7SUFDbEUsNENBQXFHOzs7OztJQUVyRyx5Q0FBaUQ7O0lBQ2pELG9DQUE0RTs7Ozs7SUFFNUUsa0RBQXlEOztJQUN6RCw2Q0FBNkYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgaHRtbDJjYW52YXMgZnJvbSAnaHRtbDJjYW52YXMnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmVlZGJhY2sgfSBmcm9tICcuL2VudGl0eS9mZWVkYmFjayc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGZWVkYmFja1NlcnZpY2Uge1xuICBwdWJsaWMgaW5pdGlhbFZhcmlhYmxlczogb2JqZWN0ID0ge307XG4gIHB1YmxpYyBoaWdobGlnaHRlZENvbG9yID0gJ3llbGxvdyc7XG4gIHB1YmxpYyBoaWRkZW5Db2xvciA9ICdibGFjayc7XG4gIHByaXZhdGUgc2NyZWVuc2hvdENhbnZhc1NvdXJjZSA9IG5ldyBTdWJqZWN0PEhUTUxDYW52YXNFbGVtZW50PigpO1xuICBwdWJsaWMgc2NyZWVuc2hvdENhbnZhcyQ6IE9ic2VydmFibGU8SFRNTENhbnZhc0VsZW1lbnQ+ID0gdGhpcy5zY3JlZW5zaG90Q2FudmFzU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgZmVlZGJhY2tTb3VyY2UgPSBuZXcgU3ViamVjdDxGZWVkYmFjaz4oKTtcbiAgcHVibGljIGZlZWRiYWNrJDogT2JzZXJ2YWJsZTxGZWVkYmFjaz4gPSB0aGlzLmZlZWRiYWNrU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgaXNEcmFnZ2luZ1Rvb2xiYXJTb3VyY2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwdWJsaWMgaXNEcmFnZ2luZ1Rvb2xiYXIkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5pc0RyYWdnaW5nVG9vbGJhclNvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICBwdWJsaWMgaW5pdFNjcmVlbnNob3RDYW52YXMoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgaHRtbDJjYW52YXMoYm9keSwge1xuICAgICAgbG9nZ2luZzogZmFsc2UsXG4gICAgICB3aWR0aDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgeDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICB5OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgYWxsb3dUYWludCA6IHRydWVcbiAgICB9KS50aGVuKGJvZHlDYW52YXMgPT4ge1xuICAgICAgdGhpcy5zY3JlZW5zaG90Q2FudmFzU291cmNlLm5leHQoYm9keUNhbnZhcyk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q2FudmFzKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNjcmVlbnNob3RDYW52YXNTb3VyY2UubmV4dChjYW52YXMpO1xuICB9XG5cbiAgcHVibGljIHNldEZlZWRiYWNrKGZlZWRiYWNrOiBGZWVkYmFjayk6IHZvaWQge1xuICAgIHRoaXMuZmVlZGJhY2tTb3VyY2UubmV4dChmZWVkYmFjayk7XG4gIH1cblxuICBwdWJsaWMgc2V0SXNEcmFnZ2luZ1Rvb2xiYXIoaXNEcmFnZ2luZzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEcmFnZ2luZ1Rvb2xiYXJTb3VyY2UubmV4dChpc0RyYWdnaW5nKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbWdFbGUoY2FudmFzKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGltZyA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpLFxuICAgICAgICAgIGltYWdlRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2VFbGUuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcpO1xuICAgIE9iamVjdC5hc3NpZ24oaW1hZ2VFbGUuc3R5bGUsIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAnNTAlJyxcbiAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKSdcbiAgICB9KTtcbiAgICByZXR1cm4gaW1hZ2VFbGU7XG4gIH1cblxuICBwdWJsaWMgaGlkZUJhY2tEcm9wKCkge1xuICAgIGNvbnN0IGRpYWxvZ0JhY2tEcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGlhbG9nQmFja0Ryb3AnKVswXSBhcyBIVE1MRWxlbWVudDtcbiAgICBkaWFsb2dCYWNrRHJvcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5pdGlhbCc7XG4gIH1cblxuICBwdWJsaWMgc2hvd0JhY2tEcm9wKCkge1xuICAgIGNvbnN0IGRpYWxvZ0JhY2tEcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGlhbG9nQmFja0Ryb3AnKVswXSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIWRpYWxvZ0JhY2tEcm9wLmdldEF0dHJpYnV0ZSgnZGF0YS1odG1sMmNhbnZhcy1pZ25vcmUnKSkge1xuICAgICAgZGlhbG9nQmFja0Ryb3Auc2V0QXR0cmlidXRlKCdkYXRhLWh0bWwyY2FudmFzLWlnbm9yZScsICd0cnVlJyk7XG4gICAgfVxuICAgIGRpYWxvZ0JhY2tEcm9wLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIC4yODgpJztcbiAgfVxufVxuIl19