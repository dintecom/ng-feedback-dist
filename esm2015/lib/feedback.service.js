import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
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
    initScreenshotCanvas() {
        const body = document.body;
        html2canvas(body, {
            logging: false,
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            x: document.documentElement.scrollLeft,
            y: document.documentElement.scrollTop,
            allowTaint: true,
            useCORS: true
        }).then(bodyCanvas => {
            this.screenshotCanvasSource.next(bodyCanvas);
        });
    }
    setCanvas(canvas) {
        this.screenshotCanvasSource.next(canvas);
    }
    setFeedback(feedback) {
        this.feedbackSource.next(feedback);
    }
    setIsDraggingToolbar(isDragging) {
        this.isDraggingToolbarSource.next(isDragging);
    }
    getImgEle(canvas) {
        const img = canvas.toDataURL('image/png'), imageEle = document.createElement('img');
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
    hideBackDrop() {
        const dialogBackDrop = document.getElementsByClassName('dialogBackDrop')[0];
        dialogBackDrop.style.backgroundColor = 'initial';
    }
    showBackDrop() {
        const dialogBackDrop = document.getElementsByClassName('dialogBackDrop')[0];
        if (!dialogBackDrop.getAttribute('data-html2canvas-ignore')) {
            dialogBackDrop.setAttribute('data-html2canvas-ignore', 'true');
        }
        dialogBackDrop.style.backgroundColor = 'rgba(0, 0, 0, .288)';
    }
}
FeedbackService.ɵfac = function FeedbackService_Factory(t) { return new (t || FeedbackService)(); };
FeedbackService.ɵprov = i0.ɵɵdefineInjectable({ token: FeedbackService, factory: FeedbackService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FeedbackService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWZlZWRiYWNrL3NyYy9saWIvZmVlZGJhY2suc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sV0FBVyxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQUkzQyxNQUFNLE9BQU8sZUFBZTtJQUQ1QjtRQUVTLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxRQUFRLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxPQUFPLENBQUM7UUFDckIsMkJBQXNCLEdBQUcsSUFBSSxPQUFPLEVBQXFCLENBQUM7UUFDM0Qsc0JBQWlCLEdBQWtDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUU3RixtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFZLENBQUM7UUFDMUMsY0FBUyxHQUF5QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBFLDRCQUF1QixHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDbEQsdUJBQWtCLEdBQXdCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQTBEOUY7SUF4RFEsb0JBQW9CO1FBQ3pCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDM0IsV0FBVyxDQUFDLElBQUksRUFBRTtZQUNoQixPQUFPLEVBQUUsS0FBSztZQUNkLEtBQUssRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVc7WUFDM0MsTUFBTSxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWTtZQUM3QyxDQUFDLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxVQUFVO1lBQ3RDLENBQUMsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVM7WUFDckMsVUFBVSxFQUFHLElBQUk7WUFDakIsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sU0FBUyxDQUFDLE1BQXlCO1FBQ3hDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLFdBQVcsQ0FBQyxRQUFrQjtRQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sb0JBQW9CLENBQUMsVUFBbUI7UUFDN0MsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sU0FBUyxDQUFDLE1BQU07UUFDckIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFDbkMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQzVCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEdBQUcsRUFBRSxLQUFLO1lBQ1YsS0FBSyxFQUFFLEdBQUc7WUFDVixJQUFJLEVBQUUsR0FBRztZQUNULE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxrQkFBa0I7U0FDOUIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVNLFlBQVk7UUFDakIsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFnQixDQUFDO1FBQzNGLGNBQWMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sWUFBWTtRQUNqQixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQWdCLENBQUM7UUFDM0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMseUJBQXlCLENBQUMsRUFBRTtZQUMzRCxjQUFjLENBQUMsWUFBWSxDQUFDLHlCQUF5QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsY0FBYyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcscUJBQXFCLENBQUM7SUFDL0QsQ0FBQzs7OEVBcEVVLGVBQWU7dURBQWYsZUFBZSxXQUFmLGVBQWU7a0RBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gJ2h0bWwyY2FudmFzJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZlZWRiYWNrIH0gZnJvbSAnLi9lbnRpdHkvZmVlZGJhY2snO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmVlZGJhY2tTZXJ2aWNlIHtcbiAgcHVibGljIGluaXRpYWxWYXJpYWJsZXM6IG9iamVjdCA9IHt9O1xuICBwdWJsaWMgaGlnaGxpZ2h0ZWRDb2xvciA9ICd5ZWxsb3cnO1xuICBwdWJsaWMgaGlkZGVuQ29sb3IgPSAnYmxhY2snO1xuICBwcml2YXRlIHNjcmVlbnNob3RDYW52YXNTb3VyY2UgPSBuZXcgU3ViamVjdDxIVE1MQ2FudmFzRWxlbWVudD4oKTtcbiAgcHVibGljIHNjcmVlbnNob3RDYW52YXMkOiBPYnNlcnZhYmxlPEhUTUxDYW52YXNFbGVtZW50PiA9IHRoaXMuc2NyZWVuc2hvdENhbnZhc1NvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIGZlZWRiYWNrU291cmNlID0gbmV3IFN1YmplY3Q8RmVlZGJhY2s+KCk7XG4gIHB1YmxpYyBmZWVkYmFjayQ6IE9ic2VydmFibGU8RmVlZGJhY2s+ID0gdGhpcy5mZWVkYmFja1NvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIGlzRHJhZ2dpbmdUb29sYmFyU291cmNlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHVibGljIGlzRHJhZ2dpbmdUb29sYmFyJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuaXNEcmFnZ2luZ1Rvb2xiYXJTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHVibGljIGluaXRTY3JlZW5zaG90Q2FudmFzKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGh0bWwyY2FudmFzKGJvZHksIHtcbiAgICAgIGxvZ2dpbmc6IGZhbHNlLFxuICAgICAgd2lkdGg6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgIGhlaWdodDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgIHg6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgeTogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgIGFsbG93VGFpbnQgOiB0cnVlLFxuICAgICAgdXNlQ09SUzogdHJ1ZVxuICAgIH0pLnRoZW4oYm9keUNhbnZhcyA9PiB7XG4gICAgICB0aGlzLnNjcmVlbnNob3RDYW52YXNTb3VyY2UubmV4dChib2R5Q2FudmFzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDYW52YXMoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuc2NyZWVuc2hvdENhbnZhc1NvdXJjZS5uZXh0KGNhbnZhcyk7XG4gIH1cblxuICBwdWJsaWMgc2V0RmVlZGJhY2soZmVlZGJhY2s6IEZlZWRiYWNrKTogdm9pZCB7XG4gICAgdGhpcy5mZWVkYmFja1NvdXJjZS5uZXh0KGZlZWRiYWNrKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRJc0RyYWdnaW5nVG9vbGJhcihpc0RyYWdnaW5nOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0RyYWdnaW5nVG9vbGJhclNvdXJjZS5uZXh0KGlzRHJhZ2dpbmcpO1xuICB9XG5cbiAgcHVibGljIGdldEltZ0VsZShjYW52YXMpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgaW1nID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyksXG4gICAgICAgICAgaW1hZ2VFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZUVsZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZyk7XG4gICAgT2JqZWN0LmFzc2lnbihpbWFnZUVsZS5zdHlsZSwge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6ICc1MCUnLFxuICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJ1xuICAgIH0pO1xuICAgIHJldHVybiBpbWFnZUVsZTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlQmFja0Ryb3AoKSB7XG4gICAgY29uc3QgZGlhbG9nQmFja0Ryb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaWFsb2dCYWNrRHJvcCcpWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgIGRpYWxvZ0JhY2tEcm9wLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbml0aWFsJztcbiAgfVxuXG4gIHB1YmxpYyBzaG93QmFja0Ryb3AoKSB7XG4gICAgY29uc3QgZGlhbG9nQmFja0Ryb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaWFsb2dCYWNrRHJvcCcpWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghZGlhbG9nQmFja0Ryb3AuZ2V0QXR0cmlidXRlKCdkYXRhLWh0bWwyY2FudmFzLWlnbm9yZScpKSB7XG4gICAgICBkaWFsb2dCYWNrRHJvcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaHRtbDJjYW52YXMtaWdub3JlJywgJ3RydWUnKTtcbiAgICB9XG4gICAgZGlhbG9nQmFja0Ryb3Auc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwgMCwgMCwgLjI4OCknO1xuICB9XG59XG4iXX0=