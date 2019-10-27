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
var FeedbackDialogComponent = /** @class */ (function () {
    function FeedbackDialogComponent(dialogRef, feedbackService, detector, el) {
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
    FeedbackDialogComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.feedbackService.screenshotCanvas$.subscribe((/**
         * @param {?} canvas
         * @return {?}
         */
        function (canvas) {
            _this.showSpinner = false;
            _this.feedback.screenshot = canvas.toDataURL('image/png');
            _this.screenshotEle = _this.feedbackService.getImgEle(canvas);
            _this.appendScreenshot();
        }));
        this.feedbackService.isDraggingToolbar$.subscribe((/**
         * @param {?} isDragging
         * @return {?}
         */
        function (isDragging) {
            if (isDragging) {
                _this.destroyCanvasListeners();
            }
            else {
                _this.addCanvasListeners();
            }
        }));
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} sendNow
         * @return {?}
         */
        function (sendNow) {
            if (sendNow === true) {
                _this.feedbackService.setFeedback(_this.feedback);
            }
        }));
        this.feedbackService.showBackDrop();
    };
    /**
     * @return {?}
     */
    FeedbackDialogComponent.prototype.expandDrawingBoard = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    FeedbackDialogComponent.prototype.onEscapeKeyDownHandler = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        this.showToolbar = false;
        this.includeScreenshot = true;
        this.detector.detectChanges();
        this.dialogRef.close('key down esc to close');
    };
    /**
     * @param {?} manipulation
     * @return {?}
     */
    FeedbackDialogComponent.prototype.manipulate = /**
     * @param {?} manipulation
     * @return {?}
     */
    function (manipulation) {
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
    };
    /**
     * @param {?} color
     * @return {?}
     */
    FeedbackDialogComponent.prototype.startDraw = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        this.drawColor = color;
    };
    /**
     * @return {?}
     */
    FeedbackDialogComponent.prototype.isIncludeScreenshot = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @private
     * @return {?}
     */
    FeedbackDialogComponent.prototype.appendScreenshot = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.screenshotParent) {
            this.screenshotParent.nativeElement.appendChild(this.screenshotEle);
        }
    };
    /**
     * @private
     * @return {?}
     */
    FeedbackDialogComponent.prototype.initBackgroundCanvas = /**
     * @private
     * @return {?}
     */
    function () {
        this.drawCanvas = (/** @type {?} */ (document.getElementById('draw-canvas')));
        // The canvas to draw, must use this way to initial the height and width
        this.drawCanvas.style.height = this.scrollHeight + '';
        this.drawCanvas.style.width = this.scrollWidth + '';
        this.drawCanvas.height = this.scrollHeight;
        this.drawCanvas.width = this.scrollWidth;
        this.drawContainerRect();
    };
    /**
     * @private
     * @return {?}
     */
    FeedbackDialogComponent.prototype.drawContainerRect = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var drawContext = this.drawCanvas.getContext('2d');
        /** @type {?} */
        var width = this.scrollWidth;
        /** @type {?} */
        var height = this.scrollHeight;
        drawContext.beginPath();
        drawContext.fillStyle = 'rgba(0,0,0,0.3)';
        drawContext.clearRect(0, 0, width, height);
        drawContext.fillRect(0, 0, width, height); // draw the rectangle
    };
    /**
     * @private
     * @param {?} rect
     * @return {?}
     */
    FeedbackDialogComponent.prototype.drawRectangle = /**
     * @private
     * @param {?} rect
     * @return {?}
     */
    function (rect) {
        var _this = this;
        /** @type {?} */
        var context = this.drawCanvas.getContext('2d');
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
            function (tmpRect) {
                if (tmpRect.color === _this.feedbackService.highlightedColor) {
                    context.clearRect(tmpRect.startX, tmpRect.startY, tmpRect.width, tmpRect.height);
                }
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    FeedbackDialogComponent.prototype.addCanvasListeners = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var mouseUp = fromEvent(document.documentElement, 'mouseup');
        /** @type {?} */
        var mouseMove = fromEvent(document.documentElement, 'mousemove');
        /** @type {?} */
        var mouseDown = fromEvent(document.documentElement, 'mousedown');
        /** @type {?} */
        var scroll = fromEvent(window, 'scroll');
        this.manuallyDrawRect(mouseDown, mouseMove, mouseUp);
        this.autoDrawRect(mouseMove);
        this.changeRectPosition(scroll);
    };
    /**
     * @private
     * @param {?} scroll
     * @return {?}
     */
    FeedbackDialogComponent.prototype.changeRectPosition = /**
     * @private
     * @param {?} scroll
     * @return {?}
     */
    function (scroll) {
        var _this = this;
        scroll.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var currentWindowScrollX = window.scrollX;
            /** @type {?} */
            var currentWindowScrollY = window.scrollY;
            _this.rectangles.forEach((/**
             * @param {?} rect
             * @return {?}
             */
            function (rect) {
                rect.startY = rect.startY - (currentWindowScrollY - rect.windowScrollY);
                rect.startX = rect.startX - (currentWindowScrollX - rect.windowScrollX);
                rect.windowScrollY = currentWindowScrollY;
                rect.windowScrollX = currentWindowScrollX;
            }));
            _this.drawPersistCanvasRectangles();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return console.error(error); }));
    };
    /**
     * @private
     * @return {?}
     */
    FeedbackDialogComponent.prototype.destroyCanvasListeners = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.manuallyDrawRect$) {
            this.manuallyDrawRect$.unsubscribe();
        }
        if (this.autoDrawRect$) {
            this.autoDrawRect$.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?} mouseDown
     * @param {?} mouseMove
     * @param {?} mouseUp
     * @return {?}
     */
    FeedbackDialogComponent.prototype.manuallyDrawRect = /**
     * @private
     * @param {?} mouseDown
     * @param {?} mouseMove
     * @param {?} mouseUp
     * @return {?}
     */
    function (mouseDown, mouseMove, mouseUp) {
        var _this = this;
        /** @type {?} */
        var mouseDrag = mouseDown.pipe(mergeMap((/**
         * @param {?} mouseDownEvent
         * @return {?}
         */
        function (mouseDownEvent) {
            if (_this.showToolbarTips) {
                _this.showToolbarTips = false;
            }
            _this.autoDrawRect$.unsubscribe();
            _this.isDrawingRect = true;
            /** @type {?} */
            var newRectangle = new Rectangle();
            newRectangle.startX = mouseDownEvent.clientX;
            newRectangle.startY = mouseDownEvent.clientY;
            newRectangle.color = _this.drawColor;
            return mouseMove.pipe(map((/**
             * @param {?} mouseMoveEvent
             * @return {?}
             */
            function (mouseMoveEvent) {
                newRectangle.width = mouseMoveEvent.clientX - mouseDownEvent.clientX;
                newRectangle.height = mouseMoveEvent.clientY - mouseDownEvent.clientY;
                return newRectangle;
            })), finalize((/**
             * @return {?}
             */
            function () {
                // click to draw rectangle
                if (newRectangle.width === undefined || newRectangle.height === undefined ||
                    newRectangle.width === 0 || newRectangle.height === 0) {
                    /** @type {?} */
                    var rect = _this.drawTempCanvasRectangle(mouseDownEvent);
                    if (rect) {
                        _this.rectangles.push(rect);
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
                    _this.rectangles.push(newRectangle);
                }
                _this.drawPersistCanvasRectangles();
                _this.autoDrawRect(mouseMove);
                _this.isDrawingRect = false;
            })), takeUntil(mouseUp));
        })));
        this.manuallyDrawRect$ = mouseDrag.subscribe((/**
         * @param {?} rec
         * @return {?}
         */
        function (rec) {
            _this.drawPersistCanvasRectangles();
            _this.drawRectangle(rec);
        }));
    };
    /**
     * @private
     * @param {?} mouseMove
     * @return {?}
     */
    FeedbackDialogComponent.prototype.autoDrawRect = /**
     * @private
     * @param {?} mouseMove
     * @return {?}
     */
    function (mouseMove) {
        var _this = this;
        this.autoDrawRect$ = mouseMove.subscribe({
            next: (/**
             * @param {?} mouseMoveEvent
             * @return {?}
             */
            function (mouseMoveEvent) {
                _this.drawPersistCanvasRectangles();
                _this.drawTempCanvasRectangle(mouseMoveEvent);
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return console.error('something wrong occurred: ' + err); }),
        });
    };
    /**
     * @private
     * @return {?}
     */
    FeedbackDialogComponent.prototype.drawPersistCanvasRectangles = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.drawContainerRect();
        this.rectangles.forEach((/**
         * @param {?} tmpRect
         * @return {?}
         */
        function (tmpRect) {
            _this.drawRectangle(tmpRect);
        }));
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FeedbackDialogComponent.prototype.drawTempCanvasRectangle = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var rectangle = null;
        /** @type {?} */
        var clientX = event.clientX;
        /** @type {?} */
        var clientY = event.clientY;
        /** @type {?} */
        var els = document.elementsFromPoint(clientX, clientY);
        /** @type {?} */
        var el = els[2];
        if ((!this.isExcludeRect(els)) && el && this.elCouldBeHighlighted.indexOf(el.nodeName.toLowerCase()) > -1) {
            rectangle = new Rectangle();
            /** @type {?} */
            var rect = el.getBoundingClientRect();
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
    };
    /**
     * @param {?} index
     * @return {?}
     */
    FeedbackDialogComponent.prototype.closeRect = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.rectangles.splice(index, 1);
        this.drawPersistCanvasRectangles();
    };
    /**
     * @private
     * @param {?} elements
     * @return {?}
     */
    FeedbackDialogComponent.prototype.isExcludeRect = /**
     * @private
     * @param {?} elements
     * @return {?}
     */
    function (elements) {
        /** @type {?} */
        var result = elements.some((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            return el.getAttribute('exclude-rect') === 'true';
        }));
        return result;
    };
    FeedbackDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'feedback-dialog',
                    template: "<div class=\"dialog\" *ngIf=\"!showToolbar\" data-html2canvas-ignore=\"true\">\n  <div class=\"dialog-title\">\n    <div class=\"title-font\">\n      {{vars['title']}}\n    </div>\n  </div>\n  <div class=\"dialog-content\">\n    <div class=\"description-tips\">\n      <div *ngIf=\"feedback.description==''\">{{vars['placeholder']}}</div>\n    </div>\n    <textarea\n      autofocus\n      class=\"description\"\n      [(ngModel)]=\"feedback.description\"\n    ></textarea>\n  </div>\n  <div class=\"screenshot-checkbox\">\n    <mat-checkbox [(ngModel)]=\"includeScreenshot\" (change)=\"isIncludeScreenshot()\">{{vars['checkboxLabel']}}</mat-checkbox>\n  </div>\n\n  <div #screenshotParent class=\"screenshot-content\" (click)=\"expandDrawingBoard()\" *ngIf=\"includeScreenshot\">\n    <mat-spinner class=\"loading\" [diameter]=\"30\" ></mat-spinner>\n    <div></div>\n    <div class=\"screenshot-tips\" *ngIf=\"!showSpinner\">\n      <svg focusable=\"false\" aria-label=\"\" viewBox=\"0 0 24 24\">\n        <path\n          d=\"M21 17h-2.58l2.51 2.56c-.18.69-.73 1.26-1.41 1.44L17 18.5V21h-2v-6h6v2zM19 7h2v2h-2V7zm2-2h-2V3.08c1.1 0 2 .92 2 1.92zm-6-2h2v2h-2V3zm4 8h2v2h-2v-2zM9 21H7v-2h2v2zM5 9H3V7h2v2zm0-5.92V5H3c0-1 1-1.92 2-1.92zM5 17H3v-2h2v2zM9 5H7V3h2v2zm4 0h-2V3h2v2zm0 16h-2v-2h2v2zm-8-8H3v-2h2v2zm0 8.08C3.9 21.08 3 20 3 19h2v2.08z\"></path>\n      </svg>\n      <span class=\"screenshot-tips-content\">{{vars['editTip']}}</span>\n    </div>\n  </div>\n\n  <mat-dialog-actions class=\"dialog-actions\" align=\"end\">\n    <button mat-button (click)=\"dialogRef.close()\" class=\"action-button\">{{vars['cancelLabel']}}</button>\n    <button mat-button (click)=\"dialogRef.close(true)\" class=\"submit-button action-button\">{{vars['sendLabel']}}</button>\n  </mat-dialog-actions>\n</div>\n<div *ngIf=\"showToolbar\" data-html2canvas-ignore=\"true\">\n  <div class=\"toolbar-tips\" *ngIf=\"showToolbarTips\">\n    {{vars['drawRectTip']}}\n  </div>\n\n  <feedback-toolbar [drawColor]=\"drawColor\" (manipulate)=\"manipulate($event)\"></feedback-toolbar>\n</div>\n<div *ngFor=\"let rectangle of rectangles; index as index\" >\n    <feedback-rectangle [rectangle]=\"rectangle\" [noHover]=\"!showToolbar || isDrawingRect\" (close)=\"closeRect(index)\">\n    </feedback-rectangle>\n</div>\n<canvas id=\"draw-canvas\" class=\"drawCanvas\" [ngClass]=\"{'pointerCursor': !showToolbar}\"></canvas>\n",
                    styles: [".dialog{z-index:1000;position:relative;width:360px;background-color:#fff}.dialog-title{background-color:#607d8b;color:#fff;height:56px}.title-font{color:#fff;float:left;font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:20px;line-height:56px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;padding:0 16px;margin:0}.dialog-content{display:-webkit-flex;flex-grow:1;height:200px;position:relative}.description{border:none;box-sizing:border-box;box-shadow:none;color:#212121;flex-grow:1;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:16px;line-height:normal;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;max-width:100%;outline:0;padding:18px 16px 0;resize:none;width:100%;height:inherit}.description-tips{color:#bdbdbd;display:block;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:16px;line-height:normal;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;left:0;position:absolute;padding:18px 16px 0;right:0}.screenshot-checkbox{padding:0 16px;background-color:#f8f8f8;height:40px;display:flex;flex-direction:column;justify-content:center}.screenshot-content{border:none;cursor:pointer;text-align:center;display:block;position:relative;padding:0;overflow:hidden;height:192px;width:100%;background:#ededed}.screenshot-tips{align-items:center;background-color:rgba(248,248,248,.6);border-radius:4px;box-sizing:border-box;display:-webkit-flex;flex-direction:column;justify-content:center;min-height:112px;width:224px;z-index:5;position:absolute;top:50%;right:0;bottom:0;left:0;transform:translateY(-50%);margin:0 auto}.screenshot-content:hover .screenshot-tips{background-color:rgba(248,248,248,.8)}.screenshot-content:hover .screenshot-tips-content{color:#4285f4}.screenshot-content:hover svg{color:#4285f4;fill:currentColor}.screenshot-tips svg{color:#757575;fill:currentColor;height:48px;width:48px}.screenshot-tips-content{color:#757575;font-weight:400;font-size:14px;line-height:20px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin-top:12px}.dialog-actions{border-top:1px solid #e0e0e0}.submit-button{margin-right:8px!important;margin-left:5px!important;color:#4285f4}.action-button{font-style:normal;font-variant:normal;font-weight:500;font-stretch:normal;font-size:14px;height:35px;line-height:normal;margin:10px 0;padding:0 8px;position:relative;min-width:75px}.loading{margin:0 auto;position:absolute;top:45%;bottom:0;left:0;right:0}.mat-dialog-actions{padding:0!important}::ng-deep .feedbackDialog .mat-dialog-container{padding:0;overflow:visible;background-color:rgba(255,255,255,0);box-shadow:initial}.toolbar-tips{background-color:rgba(255,255,255,.6);border-radius:12px;color:#757575;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:34px;line-height:40px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin-bottom:72px;padding:22px 0;text-align:center;visibility:visible;width:656px;height:auto;-webkit-animation:0s ease-in 5s forwards cssAnimation;animation:0s ease-in 5s forwards cssAnimation}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.drawCanvas{position:absolute;top:0;left:0;z-index:-1;margin:0 auto;cursor:crosshair}.pointerCursor{cursor:default!important}"]
                }] }
    ];
    /** @nocollapse */
    FeedbackDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: FeedbackService },
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    FeedbackDialogComponent.propDecorators = {
        screenshotParent: [{ type: ViewChild, args: ['screenshotParent', { static: false },] }],
        onEscapeKeyDownHandler: [{ type: HostListener, args: ['document:keydown.escape', ['$event'],] }]
    };
    return FeedbackDialogComponent;
}());
export { FeedbackDialogComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2stZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWZlZWRiYWNrLyIsInNvdXJjZXMiOlsibGliL2ZlZWRiYWNrLWRpYWxvZy9mZWVkYmFjay1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQTRCLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXREO0lBNEJFLGlDQUFtQixTQUFnRCxFQUMvQyxlQUFnQyxFQUNoQyxRQUEyQixFQUMzQixFQUFjO1FBSGYsY0FBUyxHQUFULFNBQVMsQ0FBdUM7UUFDL0Msb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQW1CO1FBQzNCLE9BQUUsR0FBRixFQUFFLENBQVk7UUF6QjNCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDMUIsc0JBQWlCLEdBQVksSUFBSSxDQUFDO1FBQ2xDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR25CLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLGNBQVMsR0FBVyxJ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LFFBQVEsQ0FBQzs7SUE0TnJELDhCQUFDO0NBQUEsQUF0U0QsSUFzU0M7U0FqU1ksdUJBQXVCOzs7SUFDbEMsOENBQTJCOztJQUMzQix1Q0FBeUI7O0lBQ3pCLDJDQUFpQzs7SUFDakMsb0RBQXlDOztJQUN6Qyw4Q0FBMEI7O0lBQzFCLGdEQUFrQzs7SUFDbEMsNkNBQXFDOztJQUNyQyxrREFBdUM7O0lBQ3ZDLG1EQUNvQzs7SUFDcEMsNENBQWlFOztJQUNqRSw2Q0FBb0M7Ozs7O0lBQ3BDLDhDQUEyRDs7Ozs7SUFDM0QsK0NBQTZEOzs7OztJQUM3RCx1REFFb0Y7Ozs7O0lBRXBGLG9EQUF3Qzs7Ozs7SUFDeEMsZ0RBQW9DOztJQUNwQyxnREFBc0M7O0lBRTFCLDRDQUF1RDs7Ozs7SUFDdkQsa0RBQXdDOzs7OztJQUN4QywyQ0FBbUM7Ozs7O0lBQ25DLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBmaW5hbGl6ZSwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBGZWVkYmFjayB9IGZyb20gJy4uL2VudGl0eS9mZWVkYmFjayc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuLi9lbnRpdHkvcmVjdGFuZ2xlJztcbmltcG9ydCB7IEZlZWRiYWNrU2VydmljZSB9IGZyb20gJy4uL2ZlZWRiYWNrLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmZWVkYmFjay1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmVlZGJhY2stZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmVlZGJhY2stZGlhbG9nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGZWVkYmFja0RpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgc2hvd1Rvb2xiYXIgPSBmYWxzZTtcbiAgcHVibGljIHZhcnM6IG9iamVjdCA9IHt9O1xuICBwdWJsaWMgZmVlZGJhY2sgPSBuZXcgRmVlZGJhY2soKTtcbiAgcHVibGljIGluY2x1ZGVTY3JlZW5zaG90OiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIHNob3dTcGlubmVyID0gdHJ1ZTtcbiAgcHVibGljIHNjcmVlbnNob3RFbGU6IEhUTUxFbGVtZW50O1xuICBwdWJsaWMgZHJhd0NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHB1YmxpYyBzaG93VG9vbGJhclRpcHM6IGJvb2xlYW4gPSB0cnVlO1xuICBAVmlld0NoaWxkKCdzY3JlZW5zaG90UGFyZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHB1YmxpYyBzY3JlZW5zaG90UGFyZW50OiBFbGVtZW50UmVmO1xuICBwdWJsaWMgZHJhd0NvbG9yOiBzdHJpbmcgPSB0aGlzLmZlZWRiYWNrU2VydmljZS5oaWdobGlnaHRlZENvbG9yO1xuICBwdWJsaWMgcmVjdGFuZ2xlczogUmVjdGFuZ2xlW10gPSBbXTtcbiAgcHJpdmF0ZSBzY3JvbGxXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aDtcbiAgcHJpdmF0ZSBzY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICBwcml2YXRlIGVsQ291bGRCZUhpZ2hsaWdodGVkID0gWydidXR0b24nLCAnYScsICdzcGFuJywgJ2VtJywgJ2knLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLFxuICAgICdoNScsICdoNicsICdwJywgJ3N0cm9uZycsICdzbWFsbCcsICdzdWInLCAnc3VwJywgJ2InLCAndGltZScsICdpbWcnLFxuICAgICd2aWRlbycsICdpbnB1dCcsICdsYWJlbCcsICdzZWxlY3QnLCAndGV4dGFyZWEnLCAnYXJ0aWNsZScsICdzdW1tYXJ5JywgJ3NlY3Rpb24nXTtcbiAgLy8gdGhlIGZsYWcgZmllbGQgJ2lzTWFudWFsbHlEcmF3UmVjdCcgdG8gc29sdmUgY29uZmxpY3QgYmV0d2VlbiBtYW51YWxseSBkcmF3IGFuZCBhdXRvIGRyYXdcbiAgcHJpdmF0ZSBtYW51YWxseURyYXdSZWN0JDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGF1dG9EcmF3UmVjdCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIGlzRHJhd2luZ1JlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RmVlZGJhY2tEaWFsb2dDb21wb25lbnQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIGZlZWRiYWNrU2VydmljZTogRmVlZGJhY2tTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZmVlZGJhY2sgPSBuZXcgRmVlZGJhY2soKTtcbiAgICB0aGlzLmZlZWRiYWNrLmRlc2NyaXB0aW9uID0gJyc7XG4gICAgdGhpcy52YXJzID0gdGhpcy5mZWVkYmFja1NlcnZpY2UuaW5pdGlhbFZhcmlhYmxlcztcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2Uuc2NyZWVuc2hvdENhbnZhcyQuc3Vic2NyaWJlKChjYW52YXMpID0+IHtcbiAgICAgIHRoaXMuc2hvd1NwaW5uZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuZmVlZGJhY2suc2NyZWVuc2hvdCA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuICAgICAgdGhpcy5zY3JlZW5zaG90RWxlID0gdGhpcy5mZWVkYmFja1NlcnZpY2UuZ2V0SW1nRWxlKGNhbnZhcyk7XG4gICAgICB0aGlzLmFwcGVuZFNjcmVlbnNob3QoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmlzRHJhZ2dpbmdUb29sYmFyJC5zdWJzY3JpYmUoKGlzRHJhZ2dpbmcpID0+IHtcbiAgICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveUNhbnZhc0xpc3RlbmVycygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRDYW52YXNMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChzZW5kTm93KSA9PiB7XG4gICAgICBpZiAoc2VuZE5vdyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5zZXRGZWVkYmFjayh0aGlzLmZlZWRiYWNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5zaG93QmFja0Ryb3AoKTtcbiAgfVxuXG4gIHB1YmxpYyBleHBhbmREcmF3aW5nQm9hcmQoKSB7XG4gICAgdGhpcy5zaG93VG9vbGJhciA9IHRydWU7XG4gICAgaWYgKCF0aGlzLmRyYXdDYW52YXMpIHtcbiAgICAgIHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5pbml0QmFja2dyb3VuZENhbnZhcygpO1xuICAgICAgdGhpcy5mZWVkYmFja1NlcnZpY2UuaGlkZUJhY2tEcm9wKCk7XG4gICAgfVxuICAgIHRoaXMuYWRkQ2FudmFzTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZHJhd0NhbnZhcyk7XG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2UuaGlkZUJhY2tEcm9wKCk7XG4gICAgY29uc29sZS5sb2coJ2V4cGFuZCB0aGUgYm9hcmQnKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24uZXNjYXBlJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRXNjYXBlS2V5RG93bkhhbmRsZXIoZXZ0OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5zaG93VG9vbGJhciA9IGZhbHNlO1xuICAgIHRoaXMuaW5jbHVkZVNjcmVlbnNob3QgPSB0cnVlO1xuICAgIHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCdrZXkgZG93biBlc2MgdG8gY2xvc2UnKTtcbiAgfVxuXG4gIHB1YmxpYyBtYW5pcHVsYXRlKG1hbmlwdWxhdGlvbjogc3RyaW5nKSB7XG4gICAgaWYgKG1hbmlwdWxhdGlvbiA9PT0gJ2RvbmUnKSB7XG4gICAgICB0aGlzLnNob3dUb29sYmFyVGlwcyA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93U3Bpbm5lciA9IHRydWU7XG4gICAgICB0aGlzLmRlc3Ryb3lDYW52YXNMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuc2hvd1Rvb2xiYXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5mZWVkYmFja1NlcnZpY2UuaW5pdFNjcmVlbnNob3RDYW52YXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGFydERyYXcobWFuaXB1bGF0aW9uKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhcnREcmF3KGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRyYXdDb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgcHVibGljIGlzSW5jbHVkZVNjcmVlbnNob3QoKSB7XG4gICAgaWYgKHRoaXMuaW5jbHVkZVNjcmVlbnNob3QpIHtcbiAgICAgIHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5zaG93U3Bpbm5lciA9IGZhbHNlO1xuICAgICAgdGhpcy5hcHBlbmRTY3JlZW5zaG90KCk7XG4gICAgICB0aGlzLmZlZWRiYWNrLnNjcmVlbnNob3QgPSB0aGlzLnNjcmVlbnNob3RFbGUuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHRoaXMuZmVlZGJhY2tbJ3NjcmVlbnNob3QnXTtcbiAgICAgIHRoaXMuc2hvd1NwaW5uZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwZW5kU2NyZWVuc2hvdCgpIHtcbiAgICBpZiAodGhpcy5zY3JlZW5zaG90UGFyZW50KSB7IHRoaXMuc2NyZWVuc2hvdFBhcmVudC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc2NyZWVuc2hvdEVsZSk7IH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdEJhY2tncm91bmRDYW52YXMoKSB7XG4gICAgdGhpcy5kcmF3Q2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXctY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgLy8gVGhlIGNhbnZhcyB0byBkcmF3LCBtdXN0IHVzZSB0aGlzIHdheSB0byBpbml0aWFsIHRoZSBoZWlnaHQgYW5kIHdpZHRoXG4gICAgdGhpcy5kcmF3Q2FudmFzLnN0eWxlLmhlaWdodCA9IHRoaXMuc2Nyb2xsSGVpZ2h0ICsgJyc7XG4gICAgdGhpcy5kcmF3Q2FudmFzLnN0eWxlLndpZHRoID0gdGhpcy5zY3JvbGxXaWR0aCArICcnO1xuICAgIHRoaXMuZHJhd0NhbnZhcy5oZWlnaHQgPSB0aGlzLnNjcm9sbEhlaWdodDtcbiAgICB0aGlzLmRyYXdDYW52YXMud2lkdGggPSB0aGlzLnNjcm9sbFdpZHRoO1xuICAgIHRoaXMuZHJhd0NvbnRhaW5lclJlY3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd0NvbnRhaW5lclJlY3QoKSB7XG4gICAgY29uc3QgZHJhd0NvbnRleHQgPSB0aGlzLmRyYXdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgIHdpZHRoID0gdGhpcy5zY3JvbGxXaWR0aCxcbiAgICAgIGhlaWdodCA9IHRoaXMuc2Nyb2xsSGVpZ2h0O1xuICAgIGRyYXdDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGRyYXdDb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuMyknO1xuICAgIGRyYXdDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBkcmF3Q29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTsgLy8gZHJhdyB0aGUgcmVjdGFuZ2xlXG4gIH1cblxuICBwcml2YXRlIGRyYXdSZWN0YW5nbGUocmVjdDogUmVjdGFuZ2xlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZHJhd0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnRleHQubGluZUpvaW4gPSAncm91bmQnO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgaWYgKHJlY3QuY29sb3IgPT09IHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmhpZGRlbkNvbG9yKSB7XG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDMxLCAzMSwgMzEsIDAuNzUpJztcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QocmVjdC5zdGFydFgsIHJlY3Quc3RhcnRZLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICBjb250ZXh0LnJlY3QocmVjdC5zdGFydFgsIHJlY3Quc3RhcnRZLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KHJlY3Quc3RhcnRYLCByZWN0LnN0YXJ0WSwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgICAgY29udGV4dC5saW5lV2lkdGggPSA1O1xuICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHJlY3QuY29sb3I7XG4gICAgICBjb250ZXh0LnJlY3QocmVjdC5zdGFydFgsIHJlY3Quc3RhcnRZLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgY29udGV4dC5jbGVhclJlY3QocmVjdC5zdGFydFgsIHJlY3Quc3RhcnRZLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICB0aGlzLnJlY3RhbmdsZXMuZm9yRWFjaCh0bXBSZWN0ID0+IHtcbiAgICAgICAgaWYgKHRtcFJlY3QuY29sb3IgPT09IHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmhpZ2hsaWdodGVkQ29sb3IpIHtcbiAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCh0bXBSZWN0LnN0YXJ0WCwgdG1wUmVjdC5zdGFydFksIHRtcFJlY3Qud2lkdGgsIHRtcFJlY3QuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRDYW52YXNMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgbW91c2VVcCA9IGZyb21FdmVudChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICdtb3VzZXVwJyksXG4gICAgICAgICAgbW91c2VNb3ZlID0gZnJvbUV2ZW50KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJ21vdXNlbW92ZScpLFxuICAgICAgICAgIG1vdXNlRG93biA9IGZyb21FdmVudChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICdtb3VzZWRvd24nKSxcbiAgICAgICAgICBzY3JvbGwgPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJyk7XG5cbiAgICB0aGlzLm1hbnVhbGx5RHJhd1JlY3QobW91c2VEb3duLCBtb3VzZU1vdmUsIG1vdXNlVXApO1xuICAgIHRoaXMuYXV0b0RyYXdSZWN0KG1vdXNlTW92ZSk7XG4gICAgdGhpcy5jaGFuZ2VSZWN0UG9zaXRpb24oc2Nyb2xsKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlUmVjdFBvc2l0aW9uKHNjcm9sbDogT2JzZXJ2YWJsZTxFdmVudD4pIHtcbiAgICBzY3JvbGwuc3Vic2NyaWJlKFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50V2luZG93U2Nyb2xsWCA9IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICBjdXJyZW50V2luZG93U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICB0aGlzLnJlY3RhbmdsZXMuZm9yRWFjaChyZWN0ID0+IHtcbiAgICAgICAgICByZWN0LnN0YXJ0WSA9IHJlY3Quc3RhcnRZIC0gKGN1cnJlbnRXaW5kb3dTY3JvbGxZIC0gcmVjdC53aW5kb3dTY3JvbGxZKTtcbiAgICAgICAgICByZWN0LnN0YXJ0WCA9IHJlY3Quc3RhcnRYIC0gKGN1cnJlbnRXaW5kb3dTY3JvbGxYIC0gcmVjdC53aW5kb3dTY3JvbGxYKTtcbiAgICAgICAgICByZWN0LndpbmRvd1Njcm9sbFkgPSBjdXJyZW50V2luZG93U2Nyb2xsWTtcbiAgICAgICAgICByZWN0LndpbmRvd1Njcm9sbFggPSBjdXJyZW50V2luZG93U2Nyb2xsWDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZHJhd1BlcnNpc3RDYW52YXNSZWN0YW5nbGVzKCk7XG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95Q2FudmFzTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1hbnVhbGx5RHJhd1JlY3QkKSB7IHRoaXMubWFudWFsbHlEcmF3UmVjdCQudW5zdWJzY3JpYmUoKTsgfVxuICAgIGlmICh0aGlzLmF1dG9EcmF3UmVjdCQpIHsgdGhpcy5hdXRvRHJhd1JlY3QkLnVuc3Vic2NyaWJlKCk7IH1cbiAgfVxuXG4gIHByaXZhdGUgbWFudWFsbHlEcmF3UmVjdChtb3VzZURvd246IE9ic2VydmFibGU8RXZlbnQ+LCBtb3VzZU1vdmU6IE9ic2VydmFibGU8RXZlbnQ+LCBtb3VzZVVwOiBPYnNlcnZhYmxlPEV2ZW50Pik6IHZvaWQge1xuICAgIGNvbnN0IG1vdXNlRHJhZyA9IG1vdXNlRG93bi5waXBlKG1lcmdlTWFwKChtb3VzZURvd25FdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2hvd1Rvb2xiYXJUaXBzKSB7IHRoaXMuc2hvd1Rvb2xiYXJUaXBzID0gZmFsc2U7IH1cbiAgICAgIHRoaXMuYXV0b0RyYXdSZWN0JC51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5pc0RyYXdpbmdSZWN0ID0gdHJ1ZTtcblxuICAgICAgY29uc3QgbmV3UmVjdGFuZ2xlID0gbmV3IFJlY3RhbmdsZSgpO1xuICAgICAgbmV3UmVjdGFuZ2xlLnN0YXJ0WCA9IG1vdXNlRG93bkV2ZW50LmNsaWVudFg7XG4gICAgICBuZXdSZWN0YW5nbGUuc3RhcnRZID0gbW91c2VEb3duRXZlbnQuY2xpZW50WTtcbiAgICAgIG5ld1JlY3RhbmdsZS5jb2xvciA9IHRoaXMuZHJhd0NvbG9yO1xuXG4gICAgICByZXR1cm4gbW91c2VNb3ZlLnBpcGUoXG4gICAgICAgIG1hcCgobW91c2VNb3ZlRXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICBuZXdSZWN0YW5nbGUud2lkdGggPSBtb3VzZU1vdmVFdmVudC5jbGllbnRYIC0gbW91c2VEb3duRXZlbnQuY2xpZW50WDtcbiAgICAgICAgICBuZXdSZWN0YW5nbGUuaGVpZ2h0ID0gbW91c2VNb3ZlRXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bkV2ZW50LmNsaWVudFk7XG4gICAgICAgICAgcmV0dXJuIG5ld1JlY3RhbmdsZTtcbiAgICAgICAgfSksXG4gICAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgICAvLyBjbGljayB0byBkcmF3IHJlY3RhbmdsZVxuICAgICAgICAgIGlmIChuZXdSZWN0YW5nbGUud2lkdGggPT09IHVuZGVmaW5lZCB8fCBuZXdSZWN0YW5nbGUuaGVpZ2h0ID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIG5ld1JlY3RhbmdsZS53aWR0aCA9PT0gMCB8fCBuZXdSZWN0YW5nbGUuaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5kcmF3VGVtcENhbnZhc1JlY3RhbmdsZShtb3VzZURvd25FdmVudCk7XG4gICAgICAgICAgICBpZiAocmVjdCkgeyB0aGlzLnJlY3RhbmdsZXMucHVzaChyZWN0KTsgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZHJhZyB0byBkcmF3IHJlY3RhbmdsZVxuICAgICAgICAgICAgaWYgKG5ld1JlY3RhbmdsZS5oZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICAgIG5ld1JlY3RhbmdsZS5zdGFydFkgPSBuZXdSZWN0YW5nbGUuc3RhcnRZICsgbmV3UmVjdGFuZ2xlLmhlaWdodDtcbiAgICAgICAgICAgICAgbmV3UmVjdGFuZ2xlLmhlaWdodCA9IE1hdGguYWJzKG5ld1JlY3RhbmdsZS5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld1JlY3RhbmdsZS53aWR0aCA8IDApIHtcbiAgICAgICAgICAgICAgbmV3UmVjdGFuZ2xlLnN0YXJ0WCA9IG5ld1JlY3RhbmdsZS5zdGFydFggKyBuZXdSZWN0YW5nbGUud2lkdGg7XG4gICAgICAgICAgICAgIG5ld1JlY3RhbmdsZS53aWR0aCA9IE1hdGguYWJzKG5ld1JlY3RhbmdsZS53aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlY3RhbmdsZXMucHVzaChuZXdSZWN0YW5nbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmRyYXdQZXJzaXN0Q2FudmFzUmVjdGFuZ2xlcygpO1xuICAgICAgICAgIHRoaXMuYXV0b0RyYXdSZWN0KG1vdXNlTW92ZSk7XG4gICAgICAgICAgdGhpcy5pc0RyYXdpbmdSZWN0ID0gZmFsc2U7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwobW91c2VVcCkpO1xuICAgIH0pKTtcblxuICAgIHRoaXMubWFudWFsbHlEcmF3UmVjdCQgPSBtb3VzZURyYWcuc3Vic2NyaWJlKFxuICAgICAgKHJlYykgPT4ge1xuICAgICAgICB0aGlzLmRyYXdQZXJzaXN0Q2FudmFzUmVjdGFuZ2xlcygpO1xuICAgICAgICB0aGlzLmRyYXdSZWN0YW5nbGUocmVjKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhdXRvRHJhd1JlY3QobW91c2VNb3ZlOiBPYnNlcnZhYmxlPEV2ZW50Pik6IHZvaWQge1xuICAgIHRoaXMuYXV0b0RyYXdSZWN0JCA9IG1vdXNlTW92ZS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKG1vdXNlTW92ZUV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuZHJhd1BlcnNpc3RDYW52YXNSZWN0YW5nbGVzKCk7XG4gICAgICAgIHRoaXMuZHJhd1RlbXBDYW52YXNSZWN0YW5nbGUobW91c2VNb3ZlRXZlbnQpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBlcnIgPT4gY29uc29sZS5lcnJvcignc29tZXRoaW5nIHdyb25nIG9jY3VycmVkOiAnICsgZXJyKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1BlcnNpc3RDYW52YXNSZWN0YW5nbGVzKCkge1xuICAgIHRoaXMuZHJhd0NvbnRhaW5lclJlY3QoKTtcbiAgICB0aGlzLnJlY3RhbmdsZXMuZm9yRWFjaCh0bXBSZWN0ID0+IHtcbiAgICAgIHRoaXMuZHJhd1JlY3RhbmdsZSh0bXBSZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1RlbXBDYW52YXNSZWN0YW5nbGUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBsZXQgcmVjdGFuZ2xlOiBSZWN0YW5nbGUgPSBudWxsO1xuICAgIGNvbnN0IGNsaWVudFggPSBldmVudC5jbGllbnRYLFxuICAgICAgICAgIGNsaWVudFkgPSBldmVudC5jbGllbnRZLFxuICAgICAgICAgIGVscyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGNsaWVudFgsIGNsaWVudFkpLFxuICAgICAgICAgIGVsID0gZWxzWzJdO1xuICAgIGlmICgoIXRoaXMuaXNFeGNsdWRlUmVjdChlbHMpKSAmJiBlbCAmJiB0aGlzLmVsQ291bGRCZUhpZ2hsaWdodGVkLmluZGV4T2YoZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xuICAgICAgcmVjdGFuZ2xlID0gbmV3IFJlY3RhbmdsZSgpO1xuICAgICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5kcmF3Q2FudmFzLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblxuICAgICAgT2JqZWN0LmFzc2lnbihyZWN0YW5nbGUsIHtcbiAgICAgICAgc3RhcnRYOiByZWN0LmxlZnQsXG4gICAgICAgIHN0YXJ0WTogcmVjdC50b3AsXG4gICAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgICAgICBjb2xvcjogdGhpcy5kcmF3Q29sb3JcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kcmF3UmVjdGFuZ2xlKHJlY3RhbmdsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJhd0NhbnZhcy5zdHlsZS5jdXJzb3IgPSAnY3Jvc3NoYWlyJztcbiAgICB9XG4gICAgcmV0dXJuIHJlY3RhbmdsZTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZVJlY3QoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMucmVjdGFuZ2xlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuZHJhd1BlcnNpc3RDYW52YXNSZWN0YW5nbGVzKCk7XG4gIH1cblxuICBwcml2YXRlIGlzRXhjbHVkZVJlY3QoZWxlbWVudHM6IEVsZW1lbnRbXSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGVsZW1lbnRzLnNvbWUoIGVsID0+IHtcbiAgICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ2V4Y2x1ZGUtcmVjdCcpID09PSAndHJ1ZSc7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl19