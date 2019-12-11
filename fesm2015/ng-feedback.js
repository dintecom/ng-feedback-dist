import { Injectable, Component, ChangeDetectorRef, ElementRef, ViewChild, HostListener, EventEmitter, Input, Output, Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogRef, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Subject, fromEvent } from 'rxjs';
import { mergeMap, map, finalize, takeUntil } from 'rxjs/operators';
import html2canvas from 'html2canvas';
import { Overlay } from '@angular/cdk/overlay';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Feedback {
}
if (false) {
    /** @type {?} */
    Feedback.prototype.description;
    /** @type {?} */
    Feedback.prototype.screenshot;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Rectangle {
    constructor() {
        this.windowScrollY = window.scrollY;
        this.windowScrollX = window.scrollX;
    }
}
if (false) {
    /** @type {?} */
    Rectangle.prototype.startX;
    /** @type {?} */
    Rectangle.prototype.startY;
    /** @type {?} */
    Rectangle.prototype.width;
    /** @type {?} */
    Rectangle.prototype.height;
    /** @type {?} */
    Rectangle.prototype.color;
    /** @type {?} */
    Rectangle.prototype.windowScrollY;
    /** @type {?} */
    Rectangle.prototype.windowScrollX;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeedbackService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeedbackDialogComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeedbackToolbarComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeedbackRectangleComponent {
    /**
     * @param {?} feedbackService
     */
    constructor(feedbackService) {
        this.feedbackService = feedbackService;
        this.close = new EventEmitter();
        this.showCloseTag = false;
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        this.showCloseTag = this.noHover === false;
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        this.showCloseTag = false;
    }
    /**
     * @return {?}
     */
    onClose() {
        this.close.emit();
    }
}
FeedbackRectangleComponent.decorators = [
    { type: Component, args: [{
                selector: 'feedback-rectangle',
                template: "<div exclude-rect=\"true\" class=\"rect\" [ngStyle]=\"{'left.px': rectangle.startX,\n                              'top.px': rectangle.startY,\n                              'width.px': rectangle.width ,\n                              'height.px': rectangle.height }\"\n    [ngClass]=\"{'highlight': rectangle.color === feedbackService.highlightedColor,\n                'hide': rectangle.color !== feedbackService.highlightedColor,\n                'noHover': noHover}\">\n  <span exclude-rect=\"true\" class=\"close\" *ngIf=\"showCloseTag\" (click)=\"onClose()\">\n    <svg viewBox=\"0 0 1024 1024\"\n         width=\"16\" height=\"16\">\n        <path\n          d=\"M896 224l-96-96-288 288-288-288-96 96 288 288-288 288 96 96 288-288 288 288 96-96-288-288 288-288z\"></path>\n    </svg>\n  </span>\n</div>\n",
                styles: [".rect{position:fixed;background:0 0;z-index:3}.highlight:not(.noHover):hover{cursor:default;background:rgba(55,131,249,.2)}.hide{background-color:#000}.hide:not(.noHover):hover{background-color:rgba(31,31,31,.75)}.rect .close{width:24px;height:24px;background:#fff;border-radius:50%;justify-content:center;align-items:center;color:#999;position:absolute;right:-12px;top:-12px;cursor:pointer;display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]
            }] }
];
/** @nocollapse */
FeedbackRectangleComponent.ctorParameters = () => [
    { type: FeedbackService }
];
FeedbackRectangleComponent.propDecorators = {
    rectangle: [{ type: Input }],
    noHover: [{ type: Input }],
    close: [{ type: Output }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
if (false) {
    /** @type {?} */
    FeedbackRectangleComponent.prototype.rectangle;
    /** @type {?} */
    FeedbackRectangleComponent.prototype.noHover;
    /** @type {?} */
    FeedbackRectangleComponent.prototype.close;
    /** @type {?} */
    FeedbackRectangleComponent.prototype.showCloseTag;
    /** @type {?} */
    FeedbackRectangleComponent.prototype.feedbackService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeedbackDirective {
    /**
     * @param {?} dialogRef
     * @param {?} feedbackService
     * @param {?} overlay
     */
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
        this.feedbackService.feedback$.subscribe((/**
         * @param {?} feedback
         * @return {?}
         */
        (feedback) => {
            this.send.emit(feedback);
        }));
        this.overlay = overlay;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.openFeedbackDialog();
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
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
FeedbackDirective.decorators = [
    { type: Directive, args: [{ selector: '[feedback]' },] }
];
/** @nocollapse */
FeedbackDirective.ctorParameters = () => [
    { type: MatDialog },
    { type: FeedbackService },
    { type: Overlay }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeedbackModule {
}
FeedbackModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FeedbackDialogComponent,
                    FeedbackToolbarComponent,
                    FeedbackRectangleComponent,
                    FeedbackDirective
                ],
                imports: [
                    MatDialogModule,
                    MatButtonModule,
                    MatIconModule,
                    MatInputModule,
                    MatTooltipModule,
                    CommonModule,
                    FormsModule,
                    MatCheckboxModule,
                    MatProgressSpinnerModule
                ],
                exports: [
                    FeedbackDirective
                ],
                entryComponents: [
                    FeedbackDialogComponent
                ],
                providers: [
                    FeedbackService
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Feedback, FeedbackModule, FeedbackDialogComponent as ɵa, FeedbackService as ɵb, FeedbackToolbarComponent as ɵc, FeedbackRectangleComponent as ɵd, FeedbackDirective as ɵe };
//# sourceMappingURL=ng-feedback.js.map
