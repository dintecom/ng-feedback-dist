/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil, finalize, map, mergeMap } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';
import { Feedback } from '../entity/feedback';
import { Rectangle } from '../entity/rectangle';
import { FeedbackService } from '../feedback.service';
export class FeedbackDialogComponent {
    /**
     * @param {?} dialogRef
     * @param {?} feedbackService
     * @param {?} detector
     * @param {?} el
     */
    constructor(dialogRef, feedbackService, detector, el) {
        this.dialogRef = dialogRef;
        this.feedbackService = feedbackService;
        this.detector = detector;
        this.el = el;
        this.showToolbar = false;
        this.vars = {};
        this.feedback = new Feedback();
        this.includeScreenshot = true;
        this.showSpinner = true;
        this.showToolbarTips = true;
        this.drawColor = this.feedbackService.highlightedColor;
        this.rectangles = [];
        this.scrollWidth = document.documentElement.scrollWidth;
        this.scrollHeight = document.documentElement.scrollHeight;
        this.elCouldBeHighlighted = ['button', 'a', 'span', 'em', 'i', 'h1', 'h2', 'h3', 'h4',
            'h5', 'h6', 'p', 'strong', 'small', 'sub', 'sup', 'b', 'time', 'img',
            'video', 'input', 'label', 'select', 'textarea', 'article', 'summary', 'section'];
        this.isDrawingRect = false;
        this.feedback = new Feedback();
        this.feedback.description = '';
        this.vars = this.feedbackService.initialVariables;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.feedbackService.screenshotCanvas$.subscribe((/**
         * @param {?} canvas
         * @return {?}
         */
        (canvas) => {
            this.showSpinner = false;
            this.feedback.screenshot = canvas.toDataURL('image/png');
            this.screenshotEle = this.feedbackService.getImgEle(canvas);
            this.appendScreenshot();
        }));
        this.feedbackService.isDraggingToolbar$.subscribe((/**
         * @param {?} isDragging
         * @return {?}
         */
        (isDragging) => {
            if (isDragging) {
                this.destroyCanvasListeners();
            }
            else {
                this.addCanvasListeners();
            }
        }));
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} sendNow
         * @return {?}
         */
        (sendNow) => {
            if (sendNow === true) {
                this.feedbackService.setFeedback(this.feedback);
            }
        }));
        this.feedbackService.showBackDrop();
    }
    /**
     * @return {?}
     */
    expandDrawingBoard() {
        this.showToolbar = true;
        if (!this.drawCanvas) {
            this.detector.detectChanges();
            this.initBackgroundCanvas();
            this.feedbackService.hideBackDrop();
        }
        this.addCanvasListeners();
        this.el.nativeElement.appendChild(this.drawCanvas);
        this.feedbackService.hideBackDrop();
        console.log('expand the board');
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onEscapeKeyDownHandler(evt) {
        this.showToolbar = false;
        this.includeScreenshot = true;
        this.detector.detectChanges();
        this.dialogRef.close('key down esc to close');
    }
    /**
     * @param {?} manipulation
     * @return {?}
     */
    manipulate(manipulation) {
        if (manipulation === 'done') {
            this.showToolbarTips = false;
            this.showSpinner = true;
            this.destroyCanvasListeners();
            this.showToolbar = false;
            this.detector.detectChanges();
            this.feedbackService.initScreenshotCanvas();
        }
        else {
            this.startDraw(manipulation);
        }
    }
    /**
     * @param {?} color
     * @return {?}
     */
    startDraw(color) {
        this.drawColor = color;
    }
    /**
     * @return {?}
     */
    isIncludeScreenshot() {
        if (this.includeScreenshot) {
            this.detector.detectChanges();
            this.showSpinner = false;
            this.appendScreenshot();
            this.feedback.screenshot = this.screenshotEle.getAttribute('src');
        }
        else {
            delete this.feedback['screenshot'];
            this.showSpinner = true;
        }
    }
    /**
     * @private
     * @return {?}
     */
    appendScreenshot() {
        if (this.screenshotParent) {
            this.screenshotParent.nativeElement.appendChild(this.screenshotEle);
        }
    }
    /**
     * @private
     * @return {?}
     */
    initBackgroundCanvas() {
        this.drawCanvas = (/** @type {?} */ (document.getElementById('draw-canvas')));
        // The canvas to draw, must use this way to initial the height and width
        this.drawCanvas.style.height = this.scrollHeight + '';
        this.drawCanvas.style.width = this.scrollWidth + '';
        this.drawCanvas.height = this.scrollHeight;
        this.drawCanvas.width = this.scrollWidth;
        this.drawContainerRect();
    }
    /**
     * @private
     * @return {?}
     */
    drawContainerRect() {
        /** @type {?} */
        const drawContext = this.drawCanvas.getContext('2d');
        /** @type {?} */
        const width = this.scrollWidth;
        /** @type {?} */
        const height = this.scrollHeight;
        drawContext.beginPath();
        drawContext.fillStyle = 'rgba(0,0,0,0.3)';
        drawContext.clearRect(0, 0, width, height);
        drawContext.fillRect(0, 0, width, height); // draw the rectangle
    }
    /**
     * @private
     * @param {?} rect
     * @return {?}
     */
    drawRectangle(rect) {
        /** @type {?} */
        const context = this.drawCanvas.getContext('2d');
        context.lineJoin = 'round';
        context.beginPath();
        if (rect.color === this.feedbackService.hiddenColor) {
            context.fillStyle = 'rgba(31, 31, 31, 0.75)';
            context.fillRect(rect.startX, rect.startY, rect.width, rect.height);
            context.rect(rect.startX, rect.startY, rect.width, rect.height);
        }
        else {
            context.clearRect(rect.startX, rect.startY, rect.width, rect.height);
            context.lineWidth = 5;
            context.strokeStyle = rect.color;
            context.rect(rect.startX, rect.startY, rect.width, rect.height);
            context.stroke();
            context.clearRect(rect.startX, rect.startY, rect.width, rect.height);
            this.rectangles.forEach((/**
             * @param {?} tmpRect
             * @return {?}
             */
            tmpRect => {
                if (tmpRect.color === this.feedbackService.highlightedColor) {
                    context.clearRect(tmpRect.startX, tmpRect.startY, tmpRect.width, tmpRect.height);
                }
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    addCanvasListeners() {
        /** @type {?} */
        const mouseUp = fromEvent(document.documentElement, 'mouseup');
        /** @type {?} */
        const mouseMove = fromEvent(document.documentElement, 'mousemove');
        /** @type {?} */
        const mouseDown = fromEvent(document.documentElement, 'mousedown');
        /** @type {?} */
        const scroll = fromEvent(window, 'scroll');
        this.manuallyDrawRect(mouseDown, mouseMove, mouseUp);
        this.autoDrawRect(mouseMove);
        this.changeRectPosition(scroll);
    }
    /**
     * @private
     * @param {?} scroll
     * @return {?}
     */
    changeRectPosition(scroll) {
        scroll.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            /** @type {?} */
            const currentWindowScrollX = window.scrollX;
            /** @type {?} */
            const currentWindowScrollY = window.scrollY;
            this.rectangles.forEach((/**
             * @param {?} rect
             * @return {?}
             */
            rect => {
                rect.startY = rect.startY - (currentWindowScrollY - rect.windowScrollY);
                rect.startX = rect.startX - (currentWindowScrollX - rect.windowScrollX);
                rect.windowScrollY = currentWindowScrollY;
                rect.windowScrollX = currentWindowScrollX;
            }));
            this.drawPersistCanvasRectangles();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => console.error(error)));
    }
    /**
     * @private
     * @return {?}
     */
    destroyCanvasListeners() {
        if (this.manuallyDrawRect$) {
            this.manuallyDrawRect$.unsubscribe();
        }
        if (this.autoDrawRect$) {
            this.autoDrawRect$.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} mouseDown
     * @param {?} mouseMove
     * @param {?} mouseUp
     * @return {?}
     */
    manuallyDrawRect(mouseDown, mouseMove, mouseUp) {
        /** @type {?} */
        const mouseDrag = mouseDown.pipe(mergeMap((/**
         * @param {?} mouseDownEvent
         * @return {?}
         */
        (mouseDownEvent) => {
            if (this.showToolbarTips) {
                this.showToolbarTips = false;
            }
            this.autoDrawRect$.unsubscribe();
            this.isDrawingRect = true;
            /** @type {?} */
            const newRectangle = new Rectangle();
            newRectangle.startX = mouseDownEvent.clientX;
            newRectangle.startY = mouseDownEvent.clientY;
            newRectangle.color = this.drawColor;
            return mouseMove.pipe(map((/**
             * @param {?} mouseMoveEvent
             * @return {?}
             */
            (mouseMoveEvent) => {
                newRectangle.width = mouseMoveEvent.clientX - mouseDownEvent.clientX;
                newRectangle.height = mouseMoveEvent.clientY - mouseDownEvent.clientY;
                return newRectangle;
            })), finalize((/**
             * @return {?}
             */
            () => {
                // click to draw rectangle
                if (newRectangle.width === undefined || newRectangle.height === undefined ||
                    newRectangle.width === 0 || newRectangle.height === 0) {
                    /** @type {?} */
                    const rect = this.drawTempCanvasRectangle(mouseDownEvent);
                    if (rect) {
                        this.rectangles.push(rect);
                    }
                }
                else {
                    // drag to draw rectangle
                    if (newRectangle.height < 0) {
                        newRectangle.startY = newRectangle.startY + newRectangle.height;
                        newRectangle.height = Math.abs(newRectangle.height);
                    }
                    if (newRectangle.width < 0) {
                        newRectangle.startX = newRectangle.startX + newRectangle.width;
                        newRectangle.width = Math.abs(newRectangle.width);
                    }
                    this.rectangles.push(newRectangle);
                }
                this.drawPersistCanvasRectangles();
                this.autoDrawRect(mouseMove);
                this.isDrawingRect = false;
            })), takeUntil(mouseUp));
        })));
        this.manuallyDrawRect$ = mouseDrag.subscribe((/**
         * @param {?} rec
         * @return {?}
         */
        (rec) => {
            this.drawPersistCanvasRectangles();
            this.drawRectangle(rec);
        }));
    }
    /**
     * @private
     * @param {?} mouseMove
     * @return {?}
     */
    autoDrawRect(mouseMove) {
        this.autoDrawRect$ = mouseMove.subscribe({
            next: (/**
             * @param {?} mouseMoveEvent
             * @return {?}
             */
            (mouseMoveEvent) => {
                this.drawPersistCanvasRectangles();
                this.drawTempCanvasRectangle(mouseMoveEvent);
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            err => console.error('something wrong occurred: ' + err)),
        });
    }
    /**
     * @private
     * @return {?}
     */
    drawPersistCanvasRectangles() {
        this.drawContainerRect();
        this.rectangles.forEach((/**
         * @param {?} tmpRect
         * @return {?}
         */
        tmpRect => {
            this.drawRectangle(tmpRect);
        }));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    drawTempCanvasRectangle(event) {
        /** @type {?} */
        let rectangle = null;
        /** @type {?} */
        const clientX = event.clientX;
        /** @type {?} */
        const clientY = event.clientY;
        /** @type {?} */
        const els = document.elementsFromPoint(clientX, clientY);
        /** @type {?} */
        const el = els[2];
        if ((!this.isExcludeRect(els)) && el && this.elCouldBeHighlighted.indexOf(el.nodeName.toLowerCase()) > -1) {
            rectangle = new Rectangle();
            /** @type {?} */
            const rect = el.getBoundingClientRect();
            this.drawCanvas.style.cursor = 'pointer';
            Object.assign(rectangle, {
                startX: rect.left,
                startY: rect.top,
                width: rect.width,
                height: rect.height,
                color: this.drawColor
            });
            this.drawRectangle(rectangle);
        }
        else {
            this.drawCanvas.style.cursor = 'crosshair';
        }
        return rectangle;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    closeRect(index) {
        this.rectangles.splice(index, 1);
        this.drawPersistCanvasRectangles();
    }
    /**
     * @private
     * @param {?} elements
     * @return {?}
     */
    isExcludeRect(elements) {
        /** @type {?} */
        const result = elements.some((/**
         * @param {?} el
         * @return {?}
         */
        el => {
            return el.getAttribute('exclude-rect') === 'true';
        }));
        return result;
    }
}
FeedbackDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'feedback-dialog',
                template: "<div class=\"dialog\" *ngIf=\"!showToolbar\" data-html2canvas-ignore=\"true\">\n  <div class=\"dialog-title\">\n    <div class=\"title-font\">\n      {{vars['title']}}\n    </div>\n  </div>\n  <div class=\"dialog-content\">\n    <div class=\"description-tips\">\n      <div *ngIf=\"feedback.description==''\">{{vars['placeholder']}}</div>\n    </div>\n    <textarea\n      autofocus\n      class=\"description\"\n      [(ngModel)]=\"feedback.description\"\n    ></textarea>\n  </div>\n  <div class=\"screenshot-checkbox\">\n    <mat-checkbox [(ngModel)]=\"includeScreenshot\" (change)=\"isIncludeScreenshot()\">{{vars['checkboxLabel']}}</mat-checkbox>\n  </div>\n\n  <div #screenshotParent class=\"screenshot-content\" (click)=\"expandDrawingBoard()\" *ngIf=\"includeScreenshot\">\n    <mat-spinner class=\"loading\" [diameter]=\"30\" ></mat-spinner>\n    <div></div>\n    <div class=\"screenshot-tips\" *ngIf=\"!showSpinner\">\n      <svg focusable=\"false\" aria-label=\"\" viewBox=\"0 0 24 24\">\n        <path\n          d=\"M21 17h-2.58l2.51 2.56c-.18.69-.73 1.26-1.41 1.44L17 18.5V21h-2v-6h6v2zM19 7h2v2h-2V7zm2-2h-2V3.08c1.1 0 2 .92 2 1.92zm-6-2h2v2h-2V3zm4 8h2v2h-2v-2zM9 21H7v-2h2v2zM5 9H3V7h2v2zm0-5.92V5H3c0-1 1-1.92 2-1.92zM5 17H3v-2h2v2zM9 5H7V3h2v2zm4 0h-2V3h2v2zm0 16h-2v-2h2v2zm-8-8H3v-2h2v2zm0 8.08C3.9 21.08 3 20 3 19h2v2.08z\"></path>\n      </svg>\n      <span class=\"screenshot-tips-content\">{{vars['editTip']}}</span>\n    </div>\n  </div>\n\n  <mat-dialog-actions class=\"dialog-actions\" align=\"end\">\n    <button mat-button (click)=\"dialogRef.close()\" class=\"action-button\">{{vars['cancelLabel']}}</button>\n    <button mat-button (click)=\"dialogRef.close(true)\" class=\"submit-button action-button\">{{vars['sendLabel']}}</button>\n  </mat-dialog-actions>\n</div>\n<div *ngIf=\"showToolbar\" data-html2canvas-ignore=\"true\">\n  <div class=\"toolbar-tips\" *ngIf=\"showToolbarTips\">\n    {{vars['drawRectTip']}}\n  </div>\n\n  <feedback-toolbar [drawColor]=\"drawColor\" (manipulate)=\"manipulate($event)\"></feedback-toolbar>\n</div>\n<div *ngFor=\"let rectangle of rectangles; index as index\" >\n    <feedback-rectangle [rectangle]=\"rectangle\" [noHover]=\"!showToolbar || isDrawingRect\" (close)=\"closeRect(index)\">\n    </feedback-rectangle>\n</div>\n<canvas id=\"draw-canvas\" class=\"drawCanvas\" [ngClass]=\"{'pointerCursor': !showToolbar}\"></canvas>\n",
                styles: [".dialog{z-index:1000;position:relative;width:360px;background-color:#fff}.dialog-title{background-color:#607d8b;color:#fff;height:56px}.title-font{color:#fff;float:left;font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:20px;line-height:56px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;padding:0 16px;margin:0}.dialog-content{display:-webkit-flex;flex-grow:1;height:200px;position:relative}.description{border:none;box-sizing:border-box;box-shadow:none;color:#212121;flex-grow:1;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:16px;line-height:normal;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;max-width:100%;outline:0;padding:18px 16px 0;resize:none;width:100%;height:inherit}.description-tips{color:#bdbdbd;display:block;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:16px;line-height:normal;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;left:0;position:absolute;padding:18px 16px 0;right:0}.screenshot-checkbox{padding:0 16px;background-color:#f8f8f8;height:40px;display:flex;flex-direction:column;justify-content:center}.screenshot-content{border:none;cursor:pointer;text-align:center;display:block;position:relative;padding:0;overflow:hidden;height:192px;width:100%;background:#ededed}.screenshot-tips{align-items:center;background-color:rgba(248,248,248,.6);border-radius:4px;box-sizing:border-box;display:-webkit-flex;flex-direction:column;justify-content:center;min-height:112px;width:224px;z-index:5;position:absolute;top:50%;right:0;bottom:0;left:0;transform:translateY(-50%);margin:0 auto}.screenshot-content:hover .screenshot-tips{background-color:rgba(248,248,248,.8)}.screenshot-content:hover .screenshot-tips-content{color:#4285f4}.screenshot-content:hover svg{color:#4285f4;fill:currentColor}.screenshot-tips svg{color:#757575;fill:currentColor;height:48px;width:48px}.screenshot-tips-content{color:#757575;font-weight:400;font-size:14px;line-height:20px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin-top:12px}.dialog-actions{border-top:1px solid #e0e0e0}.submit-button{margin-right:8px!important;margin-left:5px!important;color:#4285f4}.action-button{font-style:normal;font-variant:normal;font-weight:500;font-stretch:normal;font-size:14px;height:35px;line-height:normal;margin:10px 0;padding:0 8px;position:relative;min-width:75px}.loading{margin:0 auto;position:absolute;top:45%;bottom:0;left:0;right:0}.mat-dialog-actions{padding:0!important}::ng-deep .feedbackDialog .mat-dialog-container{padding:0;overflow:visible;background-color:rgba(255,255,255,0);box-shadow:initial}.toolbar-tips{background-color:rgba(255,255,255,.6);border-radius:12px;color:#757575;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:34px;line-height:40px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin-bottom:72px;padding:22px 0;text-align:center;visibility:visible;width:656px;height:auto;-webkit-animation:0s ease-in 5s forwards cssAnimation;animation:0s ease-in 5s forwards cssAnimation}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.drawCanvas{position:absolute;top:0;left:0;z-index:-1;margin:0 auto;cursor:crosshair}.pointerCursor{cursor:default!important}"]
            }] }
];
/** @nocollapse */
FeedbackDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: FeedbackService },
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
FeedbackDialogComponent.propDecorators = {
    screenshotParent: [{ type: ViewChild, args: ['screenshotParent', { static: false },] }],
    onEscapeKeyDownHandler: [{ type: HostListener, args: ['document:keydown.escape', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    FeedbackDialogComponent.prototype.showToolbar;
    /** @type {?} */
    FeedbackDialogComponent.prototype.vars;
    /** @type {?} */
    FeedbackDialogComponent.prototype.feedback;
    /** @type {?} */
    FeedbackDialogComponent.prototype.includeScreenshot;
    /** @type {?} */
    FeedbackDialogComponent.prototype.showSpinner;
    /** @type {?} */
    FeedbackDialogComponent.prototype.screenshotEle;
    /** @type {?} */
    FeedbackDialogComponent.prototype.drawCanvas;
    /** @type {?} */
    FeedbackDialogComponent.prototype.showToolbarTips;
    /** @type {?} */
    FeedbackDialogComponent.prototype.screenshotParent;
    /** @type {?} */
    FeedbackDialogComponent.prototype.drawColor;
    /** @type {?} */
    FeedbackDialogComponent.prototype.rectangles;
    /**
     * @type {?}
     * @private
     */
    FeedbackDialogComponent.prototype.scrollWidth;
    /**
     * @type {?}
     * @private
     */
    FeedbackDialogComponent.prototype.scrollHeight;
    /**
     * @type {?}
     * @private
     */
    FeedbackDialogComponent.prototype.elCouldBeHighlighted;
    /**
     * @type {?}
     * @private
     */
    FeedbackDialogComponent.prototype.manuallyDrawRect$;
    /**
     * @type {?}
     * @private
     */
    FeedbackDialogComponent.prototype.autoDrawRect$;
    /** @type {?} */
    FeedbackDialogComponent.prototype.isDrawingRect;
    /** @type {?} */
    FeedbackDialogComponent.prototype.dialogRef;
    /**
     * @type {?}
     * @private
     */
    FeedbackDialogComponent.prototype.feedbackService;
    /**
     * @type {?}
     * @private
     */
    FeedbackDialogComponent.prototype.detector;
    /**
     * @type {?}
     * @private
     */
    FeedbackDialogComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2stZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWZlZWRiYWNrLyIsInNvdXJjZXMiOlsibGliL2ZlZWRiYWNrLWRpYWxvZy9mZWVkYmFjay1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQTRCLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBT3RELE1BQU0sT0FBTyx1QkFBdUI7Ozs7Ozs7SUF1QmxDLFlBQW1CLFNBQWdELEVBQy9DLGVBQWdDLEVBQ2hDLFFBQTJCLEVBQzNCLEVBQWM7UUFIZixjQUFTLEdBQVQsU0FBUyxDQUF1QztRQUMvQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQXpCM0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMxQixzQkFBaUIsR0FBWSxJQUFJLENBQUM7UUFDbEMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFHbkIsb0JBQWUsR0FBWSxJQUFJ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Q2pFLDZDQUFvQzs7Ozs7SUFDcEMsOENBQTJEOzs7OztJQUMzRCwrQ0FBNkQ7Ozs7O0lBQzdELHVEQUVvRjs7Ozs7SUFFcEYsb0RBQXdDOzs7OztJQUN4QyxnREFBb0M7O0lBQ3BDLGdEQUFzQzs7SUFFMUIsNENBQXVEOzs7OztJQUN2RCxrREFBd0M7Ozs7O0lBQ3hDLDJDQUFtQzs7Ozs7SUFDbkMscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIGZpbmFsaXplLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IEZlZWRiYWNrIH0gZnJvbSAnLi4vZW50aXR5L2ZlZWRiYWNrJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4uL2VudGl0eS9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgRmVlZGJhY2tTZXJ2aWNlIH0gZnJvbSAnLi4vZmVlZGJhY2suc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZlZWRiYWNrLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9mZWVkYmFjay1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mZWVkYmFjay1kaWFsb2cuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBzaG93VG9vbGJhciA9IGZhbHNlO1xuICBwdWJsaWMgdmFyczogb2JqZWN0ID0ge307XG4gIHB1YmxpYyBmZWVkYmFjayA9IG5ldyBGZWVkYmFjaygpO1xuICBwdWJsaWMgaW5jbHVkZVNjcmVlbnNob3Q6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgc2hvd1NwaW5uZXIgPSB0cnVlO1xuICBwdWJsaWMgc2NyZWVuc2hvdEVsZTogSFRNTEVsZW1lbnQ7XG4gIHB1YmxpYyBkcmF3Q2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHVibGljIHNob3dUb29sYmFyVGlwczogYm9vbGVhbiA9IHRydWU7XG4gIEBWaWV3Q2hpbGQoJ3NjcmVlbnNob3RQYXJlbnQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcHVibGljIHNjcmVlbnNob3RQYXJlbnQ6IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyBkcmF3Q29sb3I6IHN0cmluZyA9IHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmhpZ2hsaWdodGVkQ29sb3I7XG4gIHB1YmxpYyByZWN0YW5nbGVzOiBSZWN0YW5nbGVbXSA9IFtdO1xuICBwcml2YXRlIHNjcm9sbFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xuICBwcml2YXRlIHNjcm9sbEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gIHByaXZhdGUgZWxDb3VsZEJlSGlnaGxpZ2h0ZWQgPSBbJ2J1dHRvbicsICdhJywgJ3NwYW4nLCAnZW0nLCAnaScsICdoMScsICdoMicsICdoMycsICdoNCcsXG4gICAgJ2g1JywgJ2g2JywgJ3AnLCAnc3Ryb25nJywgJ3NtYWxsJywgJ3N1YicsICdzdXAnLCAnYicsICd0aW1lJywgJ2ltZycsXG4gICAgJ3ZpZGVvJywgJ2lucHV0JywgJ2xhYmVsJywgJ3NlbGVjdCcsICd0ZXh0YXJlYScsICdhcnRpY2xlJywgJ3N1bW1hcnknLCAnc2VjdGlvbiddO1xuICAvLyB0aGUgZmxhZyBmaWVsZCAnaXNNYW51YWxseURyYXdSZWN0JyB0byBzb2x2ZSBjb25mbGljdCBiZXR3ZWVuIG1hbnVhbGx5IGRyYXcgYW5kIGF1dG8gZHJhd1xuICBwcml2YXRlIG1hbnVhbGx5RHJhd1JlY3QkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgYXV0b0RyYXdSZWN0JDogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgaXNEcmF3aW5nUmVjdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxGZWVkYmFja0RpYWxvZ0NvbXBvbmVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgZmVlZGJhY2tTZXJ2aWNlOiBGZWVkYmFja1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5mZWVkYmFjayA9IG5ldyBGZWVkYmFjaygpO1xuICAgIHRoaXMuZmVlZGJhY2suZGVzY3JpcHRpb24gPSAnJztcbiAgICB0aGlzLnZhcnMgPSB0aGlzLmZlZWRiYWNrU2VydmljZS5pbml0aWFsVmFyaWFibGVzO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5zY3JlZW5zaG90Q2FudmFzJC5zdWJzY3JpYmUoKGNhbnZhcykgPT4ge1xuICAgICAgdGhpcy5zaG93U3Bpbm5lciA9IGZhbHNlO1xuICAgICAgdGhpcy5mZWVkYmFjay5zY3JlZW5zaG90ID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG4gICAgICB0aGlzLnNjcmVlbnNob3RFbGUgPSB0aGlzLmZlZWRiYWNrU2VydmljZS5nZXRJbWdFbGUoY2FudmFzKTtcbiAgICAgIHRoaXMuYXBwZW5kU2NyZWVuc2hvdCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2UuaXNEcmFnZ2luZ1Rvb2xiYXIkLnN1YnNjcmliZSgoaXNEcmFnZ2luZykgPT4ge1xuICAgICAgaWYgKGlzRHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95Q2FudmFzTGlzdGVuZXJzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZENhbnZhc0xpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHNlbmROb3cpID0+IHtcbiAgICAgIGlmIChzZW5kTm93ID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLnNldEZlZWRiYWNrKHRoaXMuZmVlZGJhY2spO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLnNob3dCYWNrRHJvcCgpO1xuICB9XG5cbiAgcHVibGljIGV4cGFuZERyYXdpbmdCb2FyZCgpIHtcbiAgICB0aGlzLnNob3dUb29sYmFyID0gdHJ1ZTtcbiAgICBpZiAoIXRoaXMuZHJhd0NhbnZhcykge1xuICAgICAgdGhpcy5kZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLmluaXRCYWNrZ3JvdW5kQ2FudmFzKCk7XG4gICAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5oaWRlQmFja0Ryb3AoKTtcbiAgICB9XG4gICAgdGhpcy5hZGRDYW52YXNMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kcmF3Q2FudmFzKTtcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5oaWRlQmFja0Ryb3AoKTtcbiAgICBjb25zb2xlLmxvZygnZXhwYW5kIHRoZSBib2FyZCcpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bi5lc2NhcGUnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25Fc2NhcGVLZXlEb3duSGFuZGxlcihldnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLnNob3dUb29sYmFyID0gZmFsc2U7XG4gICAgdGhpcy5pbmNsdWRlU2NyZWVuc2hvdCA9IHRydWU7XG4gICAgdGhpcy5kZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoJ2tleSBkb3duIGVzYyB0byBjbG9zZScpO1xuICB9XG5cbiAgcHVibGljIG1hbmlwdWxhdGUobWFuaXB1bGF0aW9uOiBzdHJpbmcpIHtcbiAgICBpZiAobWFuaXB1bGF0aW9uID09PSAnZG9uZScpIHtcbiAgICAgIHRoaXMuc2hvd1Rvb2xiYXJUaXBzID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dTcGlubmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGVzdHJveUNhbnZhc0xpc3RlbmVycygpO1xuICAgICAgdGhpcy5zaG93VG9vbGJhciA9IGZhbHNlO1xuICAgICAgdGhpcy5kZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5pbml0U2NyZWVuc2hvdENhbnZhcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXJ0RHJhdyhtYW5pcHVsYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGFydERyYXcoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuZHJhd0NvbG9yID0gY29sb3I7XG4gIH1cblxuICBwdWJsaWMgaXNJbmNsdWRlU2NyZWVuc2hvdCgpIHtcbiAgICBpZiAodGhpcy5pbmNsdWRlU2NyZWVuc2hvdCkge1xuICAgICAgdGhpcy5kZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLnNob3dTcGlubmVyID0gZmFsc2U7XG4gICAgICB0aGlzLmFwcGVuZFNjcmVlbnNob3QoKTtcbiAgICAgIHRoaXMuZmVlZGJhY2suc2NyZWVuc2hvdCA9IHRoaXMuc2NyZWVuc2hvdEVsZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdGhpcy5mZWVkYmFja1snc2NyZWVuc2hvdCddO1xuICAgICAgdGhpcy5zaG93U3Bpbm5lciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBlbmRTY3JlZW5zaG90KCkge1xuICAgIGlmICh0aGlzLnNjcmVlbnNob3RQYXJlbnQpIHsgdGhpcy5zY3JlZW5zaG90UGFyZW50Lm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zY3JlZW5zaG90RWxlKTsgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0QmFja2dyb3VuZENhbnZhcygpIHtcbiAgICB0aGlzLmRyYXdDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhdy1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAvLyBUaGUgY2FudmFzIHRvIGRyYXcsIG11c3QgdXNlIHRoaXMgd2F5IHRvIGluaXRpYWwgdGhlIGhlaWdodCBhbmQgd2lkdGhcbiAgICB0aGlzLmRyYXdDYW52YXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zY3JvbGxIZWlnaHQgKyAnJztcbiAgICB0aGlzLmRyYXdDYW52YXMuc3R5bGUud2lkdGggPSB0aGlzLnNjcm9sbFdpZHRoICsgJyc7XG4gICAgdGhpcy5kcmF3Q2FudmFzLmhlaWdodCA9IHRoaXMuc2Nyb2xsSGVpZ2h0O1xuICAgIHRoaXMuZHJhd0NhbnZhcy53aWR0aCA9IHRoaXMuc2Nyb2xsV2lkdGg7XG4gICAgdGhpcy5kcmF3Q29udGFpbmVyUmVjdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3Q29udGFpbmVyUmVjdCgpIHtcbiAgICBjb25zdCBkcmF3Q29udGV4dCA9IHRoaXMuZHJhd0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpLFxuICAgICAgd2lkdGggPSB0aGlzLnNjcm9sbFdpZHRoLFxuICAgICAgaGVpZ2h0ID0gdGhpcy5zY3JvbGxIZWlnaHQ7XG4gICAgZHJhd0NvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgZHJhd0NvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMC4zKSc7XG4gICAgZHJhd0NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGRyYXdDb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpOyAvLyBkcmF3IHRoZSByZWN0YW5nbGVcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1JlY3RhbmdsZShyZWN0OiBSZWN0YW5nbGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5kcmF3Q2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5saW5lSm9pbiA9ICdyb3VuZCc7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBpZiAocmVjdC5jb2xvciA9PT0gdGhpcy5mZWVkYmFja1NlcnZpY2UuaGlkZGVuQ29sb3IpIHtcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMzEsIDMxLCAzMSwgMC43NSknO1xuICAgICAgY29udGV4dC5maWxsUmVjdChyZWN0LnN0YXJ0WCwgcmVjdC5zdGFydFksIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICAgIGNvbnRleHQucmVjdChyZWN0LnN0YXJ0WCwgcmVjdC5zdGFydFksIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5jbGVhclJlY3QocmVjdC5zdGFydFgsIHJlY3Quc3RhcnRZLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDU7XG4gICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcmVjdC5jb2xvcjtcbiAgICAgIGNvbnRleHQucmVjdChyZWN0LnN0YXJ0WCwgcmVjdC5zdGFydFksIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdChyZWN0LnN0YXJ0WCwgcmVjdC5zdGFydFksIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICAgIHRoaXMucmVjdGFuZ2xlcy5mb3JFYWNoKHRtcFJlY3QgPT4ge1xuICAgICAgICBpZiAodG1wUmVjdC5jb2xvciA9PT0gdGhpcy5mZWVkYmFja1NlcnZpY2UuaGlnaGxpZ2h0ZWRDb2xvcikge1xuICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KHRtcFJlY3Quc3RhcnRYLCB0bXBSZWN0LnN0YXJ0WSwgdG1wUmVjdC53aWR0aCwgdG1wUmVjdC5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZENhbnZhc0xpc3RlbmVycygpOiB2b2lkIHtcbiAgICBjb25zdCBtb3VzZVVwID0gZnJvbUV2ZW50KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJ21vdXNldXAnKSxcbiAgICAgICAgICBtb3VzZU1vdmUgPSBmcm9tRXZlbnQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnbW91c2Vtb3ZlJyksXG4gICAgICAgICAgbW91c2VEb3duID0gZnJvbUV2ZW50KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJ21vdXNlZG93bicpLFxuICAgICAgICAgIHNjcm9sbCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKTtcblxuICAgIHRoaXMubWFudWFsbHlEcmF3UmVjdChtb3VzZURvd24sIG1vdXNlTW92ZSwgbW91c2VVcCk7XG4gICAgdGhpcy5hdXRvRHJhd1JlY3QobW91c2VNb3ZlKTtcbiAgICB0aGlzLmNoYW5nZVJlY3RQb3NpdGlvbihzY3JvbGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VSZWN0UG9zaXRpb24oc2Nyb2xsOiBPYnNlcnZhYmxlPEV2ZW50Pikge1xuICAgIHNjcm9sbC5zdWJzY3JpYmUoXG4gICAgICBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXaW5kb3dTY3JvbGxYID0gd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgIGN1cnJlbnRXaW5kb3dTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgIHRoaXMucmVjdGFuZ2xlcy5mb3JFYWNoKHJlY3QgPT4ge1xuICAgICAgICAgIHJlY3Quc3RhcnRZID0gcmVjdC5zdGFydFkgLSAoY3VycmVudFdpbmRvd1Njcm9sbFkgLSByZWN0LndpbmRvd1Njcm9sbFkpO1xuICAgICAgICAgIHJlY3Quc3RhcnRYID0gcmVjdC5zdGFydFggLSAoY3VycmVudFdpbmRvd1Njcm9sbFggLSByZWN0LndpbmRvd1Njcm9sbFgpO1xuICAgICAgICAgIHJlY3Qud2luZG93U2Nyb2xsWSA9IGN1cnJlbnRXaW5kb3dTY3JvbGxZO1xuICAgICAgICAgIHJlY3Qud2luZG93U2Nyb2xsWCA9IGN1cnJlbnRXaW5kb3dTY3JvbGxYO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kcmF3UGVyc2lzdENhbnZhc1JlY3RhbmdsZXMoKTtcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3lDYW52YXNMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWFudWFsbHlEcmF3UmVjdCQpIHsgdGhpcy5tYW51YWxseURyYXdSZWN0JC51bnN1YnNjcmliZSgpOyB9XG4gICAgaWYgKHRoaXMuYXV0b0RyYXdSZWN0JCkgeyB0aGlzLmF1dG9EcmF3UmVjdCQudW5zdWJzY3JpYmUoKTsgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYW51YWxseURyYXdSZWN0KG1vdXNlRG93bjogT2JzZXJ2YWJsZTxFdmVudD4sIG1vdXNlTW92ZTogT2JzZXJ2YWJsZTxFdmVudD4sIG1vdXNlVXA6IE9ic2VydmFibGU8RXZlbnQ+KTogdm9pZCB7XG4gICAgY29uc3QgbW91c2VEcmFnID0gbW91c2VEb3duLnBpcGUobWVyZ2VNYXAoKG1vdXNlRG93bkV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5zaG93VG9vbGJhclRpcHMpIHsgdGhpcy5zaG93VG9vbGJhclRpcHMgPSBmYWxzZTsgfVxuICAgICAgdGhpcy5hdXRvRHJhd1JlY3QkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmlzRHJhd2luZ1JlY3QgPSB0cnVlO1xuXG4gICAgICBjb25zdCBuZXdSZWN0YW5nbGUgPSBuZXcgUmVjdGFuZ2xlKCk7XG4gICAgICBuZXdSZWN0YW5nbGUuc3RhcnRYID0gbW91c2VEb3duRXZlbnQuY2xpZW50WDtcbiAgICAgIG5ld1JlY3RhbmdsZS5zdGFydFkgPSBtb3VzZURvd25FdmVudC5jbGllbnRZO1xuICAgICAgbmV3UmVjdGFuZ2xlLmNvbG9yID0gdGhpcy5kcmF3Q29sb3I7XG5cbiAgICAgIHJldHVybiBtb3VzZU1vdmUucGlwZShcbiAgICAgICAgbWFwKChtb3VzZU1vdmVFdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgIG5ld1JlY3RhbmdsZS53aWR0aCA9IG1vdXNlTW92ZUV2ZW50LmNsaWVudFggLSBtb3VzZURvd25FdmVudC5jbGllbnRYO1xuICAgICAgICAgIG5ld1JlY3RhbmdsZS5oZWlnaHQgPSBtb3VzZU1vdmVFdmVudC5jbGllbnRZIC0gbW91c2VEb3duRXZlbnQuY2xpZW50WTtcbiAgICAgICAgICByZXR1cm4gbmV3UmVjdGFuZ2xlO1xuICAgICAgICB9KSxcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgIC8vIGNsaWNrIHRvIGRyYXcgcmVjdGFuZ2xlXG4gICAgICAgICAgaWYgKG5ld1JlY3RhbmdsZS53aWR0aCA9PT0gdW5kZWZpbmVkIHx8IG5ld1JlY3RhbmdsZS5oZWlnaHQgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgbmV3UmVjdGFuZ2xlLndpZHRoID09PSAwIHx8IG5ld1JlY3RhbmdsZS5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmRyYXdUZW1wQ2FudmFzUmVjdGFuZ2xlKG1vdXNlRG93bkV2ZW50KTtcbiAgICAgICAgICAgIGlmIChyZWN0KSB7IHRoaXMucmVjdGFuZ2xlcy5wdXNoKHJlY3QpOyB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBkcmFnIHRvIGRyYXcgcmVjdGFuZ2xlXG4gICAgICAgICAgICBpZiAobmV3UmVjdGFuZ2xlLmhlaWdodCA8IDApIHtcbiAgICAgICAgICAgICAgbmV3UmVjdGFuZ2xlLnN0YXJ0WSA9IG5ld1JlY3RhbmdsZS5zdGFydFkgKyBuZXdSZWN0YW5nbGUuaGVpZ2h0O1xuICAgICAgICAgICAgICBuZXdSZWN0YW5nbGUuaGVpZ2h0ID0gTWF0aC5hYnMobmV3UmVjdGFuZ2xlLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3UmVjdGFuZ2xlLndpZHRoIDwgMCkge1xuICAgICAgICAgICAgICBuZXdSZWN0YW5nbGUuc3RhcnRYID0gbmV3UmVjdGFuZ2xlLnN0YXJ0WCArIG5ld1JlY3RhbmdsZS53aWR0aDtcbiAgICAgICAgICAgICAgbmV3UmVjdGFuZ2xlLndpZHRoID0gTWF0aC5hYnMobmV3UmVjdGFuZ2xlLndpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlcy5wdXNoKG5ld1JlY3RhbmdsZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZHJhd1BlcnNpc3RDYW52YXNSZWN0YW5nbGVzKCk7XG4gICAgICAgICAgdGhpcy5hdXRvRHJhd1JlY3QobW91c2VNb3ZlKTtcbiAgICAgICAgICB0aGlzLmlzRHJhd2luZ1JlY3QgPSBmYWxzZTtcbiAgICAgICAgfSksXG4gICAgICAgIHRha2VVbnRpbChtb3VzZVVwKSk7XG4gICAgfSkpO1xuXG4gICAgdGhpcy5tYW51YWxseURyYXdSZWN0JCA9IG1vdXNlRHJhZy5zdWJzY3JpYmUoXG4gICAgICAocmVjKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhd1BlcnNpc3RDYW52YXNSZWN0YW5nbGVzKCk7XG4gICAgICAgIHRoaXMuZHJhd1JlY3RhbmdsZShyZWMpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGF1dG9EcmF3UmVjdChtb3VzZU1vdmU6IE9ic2VydmFibGU8RXZlbnQ+KTogdm9pZCB7XG4gICAgdGhpcy5hdXRvRHJhd1JlY3QkID0gbW91c2VNb3ZlLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAobW91c2VNb3ZlRXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5kcmF3UGVyc2lzdENhbnZhc1JlY3RhbmdsZXMoKTtcbiAgICAgICAgdGhpcy5kcmF3VGVtcENhbnZhc1JlY3RhbmdsZShtb3VzZU1vdmVFdmVudCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGVyciA9PiBjb25zb2xlLmVycm9yKCdzb21ldGhpbmcgd3Jvbmcgb2NjdXJyZWQ6ICcgKyBlcnIpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3UGVyc2lzdENhbnZhc1JlY3RhbmdsZXMoKSB7XG4gICAgdGhpcy5kcmF3Q29udGFpbmVyUmVjdCgpO1xuICAgIHRoaXMucmVjdGFuZ2xlcy5mb3JFYWNoKHRtcFJlY3QgPT4ge1xuICAgICAgdGhpcy5kcmF3UmVjdGFuZ2xlKHRtcFJlY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3VGVtcENhbnZhc1JlY3RhbmdsZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGxldCByZWN0YW5nbGU6IFJlY3RhbmdsZSA9IG51bGw7XG4gICAgY29uc3QgY2xpZW50WCA9IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSA9IGV2ZW50LmNsaWVudFksXG4gICAgICAgICAgZWxzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoY2xpZW50WCwgY2xpZW50WSksXG4gICAgICAgICAgZWwgPSBlbHNbMl07XG4gICAgaWYgKCghdGhpcy5pc0V4Y2x1ZGVSZWN0KGVscykpICYmIGVsICYmIHRoaXMuZWxDb3VsZEJlSGlnaGxpZ2h0ZWQuaW5kZXhPZihlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XG4gICAgICByZWN0YW5nbGUgPSBuZXcgUmVjdGFuZ2xlKCk7XG4gICAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLmRyYXdDYW52YXMuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuXG4gICAgICBPYmplY3QuYXNzaWduKHJlY3RhbmdsZSwge1xuICAgICAgICBzdGFydFg6IHJlY3QubGVmdCxcbiAgICAgICAgc3RhcnRZOiByZWN0LnRvcCxcbiAgICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgICAgIGNvbG9yOiB0aGlzLmRyYXdDb2xvclxuICAgICAgfSk7XG4gICAgICB0aGlzLmRyYXdSZWN0YW5nbGUocmVjdGFuZ2xlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3Q2FudmFzLnN0eWxlLmN1cnNvciA9ICdjcm9zc2hhaXInO1xuICAgIH1cbiAgICByZXR1cm4gcmVjdGFuZ2xlO1xuICB9XG5cbiAgcHVibGljIGNsb3NlUmVjdChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5yZWN0YW5nbGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5kcmF3UGVyc2lzdENhbnZhc1JlY3RhbmdsZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFeGNsdWRlUmVjdChlbGVtZW50czogRWxlbWVudFtdKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZWxlbWVudHMuc29tZSggZWwgPT4ge1xuICAgICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgnZXhjbHVkZS1yZWN0JykgPT09ICd0cnVlJztcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=