(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/dialog'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/progress-spinner'), require('@angular/material/tooltip'), require('rxjs'), require('rxjs/operators'), require('html2canvas'), require('@angular/cdk/overlay')) :
    typeof define === 'function' && define.amd ? define('ng-feedback', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/button', '@angular/material/checkbox', '@angular/material/dialog', '@angular/material/icon', '@angular/material/input', '@angular/material/progress-spinner', '@angular/material/tooltip', 'rxjs', 'rxjs/operators', 'html2canvas', '@angular/cdk/overlay'], factory) :
    (global = global || self, factory(global['ng-feedback'] = {}, global.ng.core, global.ng.common, global.ng.forms, global.ng.material.button, global.ng.material.checkbox, global.ng.material.dialog, global.ng.material.icon, global.ng.material.input, global.ng.material['progress-spinner'], global.ng.material.tooltip, global.rxjs, global.rxjs.operators, global.html2canvas, global.ng.cdk.overlay));
}(this, (function (exports, core, common, forms, button, checkbox, dialog, icon, input, progressSpinner, tooltip, rxjs, operators, html2canvas, overlay) { 'use strict';

    html2canvas = html2canvas && html2canvas.hasOwnProperty('default') ? html2canvas['default'] : html2canvas;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Feedback = /** @class */ (function () {
        function Feedback() {
        }
        return Feedback;
    }());
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
    var Rectangle = /** @class */ (function () {
        function Rectangle() {
            this.windowScrollY = window.scrollY;
            this.windowScrollX = window.scrollX;
        }
        return Rectangle;
    }());
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
    var FeedbackService = /** @class */ (function () {
        function FeedbackService() {
            this.initialVariables = {};
            this.highlightedColor = 'yellow';
            this.hiddenColor = 'black';
            this.screenshotCanvasSource = new rxjs.Subject();
            this.screenshotCanvas$ = this.screenshotCanvasSource.asObservable();
            this.feedbackSource = new rxjs.Subject();
            this.feedback$ = this.feedbackSource.asObservable();
            this.isDraggingToolbarSource = new rxjs.Subject();
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
            { type: core.Injectable }
        ];
        return FeedbackService;
    }());
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
            var mouseUp = rxjs.fromEvent(document.documentElement, 'mouseup');
            /** @type {?} */
            var mouseMove = rxjs.fromEvent(document.documentElement, 'mousemove');
            /** @type {?} */
            var mouseDown = rxjs.fromEvent(document.documentElement, 'mousedown');
            /** @type {?} */
            var scroll = rxjs.fromEvent(window, 'scroll');
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
            var mouseDrag = mouseDown.pipe(operators.mergeMap((/**
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
                return mouseMove.pipe(operators.map((/**
                 * @param {?} mouseMoveEvent
                 * @return {?}
                 */
                function (mouseMoveEvent) {
                    newRectangle.width = mouseMoveEvent.clientX - mouseDownEvent.clientX;
                    newRectangle.height = mouseMoveEvent.clientY - mouseDownEvent.clientY;
                    return newRectangle;
                })), operators.finalize((/**
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
                })), operators.takeUntil(mouseUp));
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
            { type: core.Component, args: [{
                        selector: 'feedback-dialog',
                        template: "<div class=\"dialog\" *ngIf=\"!showToolbar\" data-html2canvas-ignore=\"true\">\n  <div class=\"dialog-title\">\n    <div class=\"title-font\">\n      {{vars['title']}}\n    </div>\n  </div>\n  <div class=\"dialog-content\">\n    <div class=\"description-tips\">\n      <div *ngIf=\"feedback.description==''\">{{vars['placeholder']}}</div>\n    </div>\n    <textarea\n      autofocus\n      class=\"description\"\n      [(ngModel)]=\"feedback.description\"\n    ></textarea>\n  </div>\n  <div class=\"screenshot-checkbox\">\n    <mat-checkbox [(ngModel)]=\"includeScreenshot\" (change)=\"isIncludeScreenshot()\">{{vars['checkboxLabel']}}</mat-checkbox>\n  </div>\n\n  <div #screenshotParent class=\"screenshot-content\" (click)=\"expandDrawingBoard()\" *ngIf=\"includeScreenshot\">\n    <mat-spinner class=\"loading\" [diameter]=\"30\" ></mat-spinner>\n    <div></div>\n    <div class=\"screenshot-tips\" *ngIf=\"!showSpinner\">\n      <svg focusable=\"false\" aria-label=\"\" viewBox=\"0 0 24 24\">\n        <path\n          d=\"M21 17h-2.58l2.51 2.56c-.18.69-.73 1.26-1.41 1.44L17 18.5V21h-2v-6h6v2zM19 7h2v2h-2V7zm2-2h-2V3.08c1.1 0 2 .92 2 1.92zm-6-2h2v2h-2V3zm4 8h2v2h-2v-2zM9 21H7v-2h2v2zM5 9H3V7h2v2zm0-5.92V5H3c0-1 1-1.92 2-1.92zM5 17H3v-2h2v2zM9 5H7V3h2v2zm4 0h-2V3h2v2zm0 16h-2v-2h2v2zm-8-8H3v-2h2v2zm0 8.08C3.9 21.08 3 20 3 19h2v2.08z\"></path>\n      </svg>\n      <span class=\"screenshot-tips-content\">{{vars['editTip']}}</span>\n    </div>\n  </div>\n\n  <mat-dialog-actions class=\"dialog-actions\" align=\"end\">\n    <button mat-button (click)=\"dialogRef.close()\" class=\"action-button\">{{vars['cancelLabel']}}</button>\n    <button mat-button (click)=\"dialogRef.close(true)\" class=\"submit-button action-button\">{{vars['sendLabel']}}</button>\n  </mat-dialog-actions>\n</div>\n<div *ngIf=\"showToolbar\" data-html2canvas-ignore=\"true\">\n  <div class=\"toolbar-tips\" *ngIf=\"showToolbarTips\">\n    {{vars['drawRectTip']}}\n  </div>\n\n  <feedback-toolbar [drawColor]=\"drawColor\" (manipulate)=\"manipulate($event)\"></feedback-toolbar>\n</div>\n<div *ngFor=\"let rectangle of rectangles; index as index\" >\n    <feedback-rectangle [rectangle]=\"rectangle\" [noHover]=\"!showToolbar || isDrawingRect\" (close)=\"closeRect(index)\">\n    </feedback-rectangle>\n</div>\n<canvas id=\"draw-canvas\" class=\"drawCanvas\" [ngClass]=\"{'pointerCursor': !showToolbar}\"></canvas>\n",
                        styles: [".dialog{z-index:1000;position:relative;width:360px;background-color:#fff}.dialog-title{background-color:#607d8b;color:#fff;height:56px}.title-font{color:#fff;float:left;font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:20px;line-height:56px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;padding:0 16px;margin:0}.dialog-content{display:-webkit-flex;flex-grow:1;height:200px;position:relative}.description{border:none;box-sizing:border-box;box-shadow:none;color:#212121;flex-grow:1;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:16px;line-height:normal;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;max-width:100%;outline:0;padding:18px 16px 0;resize:none;width:100%;height:inherit}.description-tips{color:#bdbdbd;display:block;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:16px;line-height:normal;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;left:0;position:absolute;padding:18px 16px 0;right:0}.screenshot-checkbox{padding:0 16px;background-color:#f8f8f8;height:40px;display:flex;flex-direction:column;justify-content:center}.screenshot-content{border:none;cursor:pointer;text-align:center;display:block;position:relative;padding:0;overflow:hidden;height:192px;width:100%;background:#ededed}.screenshot-tips{align-items:center;background-color:rgba(248,248,248,.6);border-radius:4px;box-sizing:border-box;display:-webkit-flex;flex-direction:column;justify-content:center;min-height:112px;width:224px;z-index:5;position:absolute;top:50%;right:0;bottom:0;left:0;transform:translateY(-50%);margin:0 auto}.screenshot-content:hover .screenshot-tips{background-color:rgba(248,248,248,.8)}.screenshot-content:hover .screenshot-tips-content{color:#4285f4}.screenshot-content:hover svg{color:#4285f4;fill:currentColor}.screenshot-tips svg{color:#757575;fill:currentColor;height:48px;width:48px}.screenshot-tips-content{color:#757575;font-weight:400;font-size:14px;line-height:20px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin-top:12px}.dialog-actions{border-top:1px solid #e0e0e0}.submit-button{margin-right:8px!important;margin-left:5px!important;color:#4285f4}.action-button{font-style:normal;font-variant:normal;font-weight:500;font-stretch:normal;font-size:14px;height:35px;line-height:normal;margin:10px 0;padding:0 8px;position:relative;min-width:75px}.loading{margin:0 auto;position:absolute;top:45%;bottom:0;left:0;right:0}.mat-dialog-actions{padding:0!important}::ng-deep .feedbackDialog .mat-dialog-container{padding:0;overflow:visible;background-color:rgba(255,255,255,0);box-shadow:initial}.toolbar-tips{background-color:rgba(255,255,255,.6);border-radius:12px;color:#757575;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:34px;line-height:40px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin-bottom:72px;padding:22px 0;text-align:center;visibility:visible;width:656px;height:auto;-webkit-animation:0s ease-in 5s forwards cssAnimation;animation:0s ease-in 5s forwards cssAnimation}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.drawCanvas{position:absolute;top:0;left:0;z-index:-1;margin:0 auto;cursor:crosshair}.pointerCursor{cursor:default!important}"]
                    }] }
        ];
        /** @nocollapse */
        FeedbackDialogComponent.ctorParameters = function () { return [
            { type: dialog.MatDialogRef },
            { type: FeedbackService },
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef }
        ]; };
        FeedbackDialogComponent.propDecorators = {
            screenshotParent: [{ type: core.ViewChild, args: ['screenshotParent', { static: false },] }],
            onEscapeKeyDownHandler: [{ type: core.HostListener, args: ['document:keydown.escape', ['$event'],] }]
        };
        return FeedbackDialogComponent;
    }());
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
    var FeedbackToolbarComponent = /** @class */ (function () {
        function FeedbackToolbarComponent(el, feedbackService) {
            this.el = el;
            this.feedbackService = feedbackService;
            this.manipulate = new core.EventEmitter();
            this.disableToolbarTips = false;
            this.isSwitch = false;
            this.isDragging = false;
            this.vars = {};
            this.vars = feedbackService.initialVariables;
        }
        /**
         * @return {?}
         */
        FeedbackToolbarComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var elStyle = this.el.nativeElement.style;
            elStyle.position = 'absolute';
            elStyle.left = '43%';
            elStyle.top = '60%';
            this.addDragListenerOnMoveBtn();
        };
        /**
         * @return {?}
         */
        FeedbackToolbarComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.isSwitch = this.drawColor !== this.feedbackService.highlightedColor;
        };
        /**
         * @return {?}
         */
        FeedbackToolbarComponent.prototype.done = /**
         * @return {?}
         */
        function () {
            this.manipulate.emit('done');
        };
        /**
         * @return {?}
         */
        FeedbackToolbarComponent.prototype.toggleHighlight = /**
         * @return {?}
         */
        function () {
            this.isSwitch = false;
            this.manipulate.emit(this.feedbackService.highlightedColor);
        };
        /**
         * @return {?}
         */
        FeedbackToolbarComponent.prototype.toggleHide = /**
         * @return {?}
         */
        function () {
            this.isSwitch = true;
            this.manipulate.emit(this.feedbackService.hiddenColor);
        };
        /**
         * @return {?}
         */
        FeedbackToolbarComponent.prototype.addDragListenerOnMoveBtn = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var mouseUp = rxjs.fromEvent(this.toggleMoveBtn.nativeElement, 'mouseup');
            /** @type {?} */
            var mouseMove = rxjs.fromEvent(document.documentElement, 'mousemove');
            /** @type {?} */
            var mouseDown = rxjs.fromEvent(this.toggleMoveBtn.nativeElement, 'mousedown');
            /** @type {?} */
            var mouseDrag = mouseDown.pipe(operators.mergeMap((/**
             * @param {?} md
             * @return {?}
             */
            function (md) {
                _this.feedbackService.setIsDraggingToolbar(true);
                /** @type {?} */
                var startX = md.offsetX;
                /** @type {?} */
                var startY = md.offsetY;
                _this.disableToolbarTips = true;
                _this.isDragging = true;
                // Calculate dif with mousemove until mouseup
                return mouseMove.pipe(operators.map((/**
                 * @param {?} mm
                 * @return {?}
                 */
                function (mm) {
                    mm.preventDefault();
                    return {
                        left: mm.clientX - startX,
                        top: mm.clientY - startY
                    };
                })), operators.finalize((/**
                 * @return {?}
                 */
                function () {
                    _this.isDragging = false;
                    _this.disableToolbarTips = false;
                    _this.feedbackService.setIsDraggingToolbar(false);
                })), operators.takeUntil(mouseUp));
            })));
            mouseDrag.subscribe((/**
             * @param {?} pos
             * @return {?}
             */
            function (pos) {
                _this.el.nativeElement.style.left = pos.left + 'px';
                _this.el.nativeElement.style.top = pos.top + 'px';
            }));
        };
        FeedbackToolbarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'feedback-toolbar',
                        template: "<div exclude-rect=\"true\" class=\"toolbar\">\n  <div class=\"move-toolbar\" #toggleMove [matTooltip]=\"vars['moveToolbarTip']\" [matTooltipDisabled]=\"disableToolbarTips\">\n    <svg focusable=\"false\" aria-label=\"Drag\" fill=\"#BDBDBD\" height=\"56\" width=\"16\"\n         viewBox=\"-2 2 12 12\">\n      <circle cx=\"1.5\" cy=\"1.5\" r=\"1.5\"></circle>\n      <circle cx=\"1.5\" cy=\"7.5\" r=\"1.5\"></circle>\n      <circle cx=\"1.5\" cy=\"13.5\" r=\"1.5\"></circle>\n      <circle cx=\"6.5\" cy=\"1.5\" r=\"1.5\"></circle>\n      <circle cx=\"6.5\" cy=\"7.5\" r=\"1.5\"></circle>\n      <circle cx=\"6.5\" cy=\"13.5\" r=\"1.5\"></circle>\n    </svg>\n  </div>\n  <button #highlightBtn (click)=\"toggleHighlight()\" [matTooltip]=\"vars['highlightTip']\"\n          [matTooltipDisabled]=\"disableToolbarTips\" class=\"highlight-toggle\" [ngClass]=\"{'deepen-color': !isSwitch}\">\n    <span class=\"toggle\">\n      <svg focusable=\"false\" aria-label=\"\" viewBox=\"0 0 24 24\" height=\"36\" width=\"36\"\n           fill=\"#ffd740\">\n        <path d=\"M3 3h18v18H3z\"></path>\n      </svg>\n\n      <svg focusable=\"false\" aria-label=\"\" fill=\"#757575\" viewBox=\"0 0 24 24\"\n           height=\"36\" width=\"36\" [ngClass]=\"{'toggle-decorator': !isSwitch}\" *ngIf=\"!isSwitch\">\n        <path\n          d=\"M21 17h-2.58l2.51 2.56c-.18.69-.73 1.26-1.41 1.44L17 18.5V21h-2v-6h6v2zM19 7h2v2h-2V7zm2-2h-2V3.08c1.1 0 2 .92 2 1.92zm-6-2h2v2h-2V3zm4 8h2v2h-2v-2zM9 21H7v-2h2v2zM5 9H3V7h2v2zm0-5.92V5H3c0-1 1-1.92 2-1.92zM5 17H3v-2h2v2zM9 5H7V3h2v2zm4 0h-2V3h2v2zm0 16h-2v-2h2v2zm-8-8H3v-2h2v2zm0 8.08C3.9 21.08 3 20 3 19h2v2.08z\"></path>\n      </svg>\n    </span>\n  </button>\n  <button (click)=\"toggleHide()\" [matTooltip]=\"vars['hideTip']\" [matTooltipDisabled]=\"disableToolbarTips\"\n          class=\"hide-toggle\" [ngClass]=\"{'deepen-color': isSwitch}\">\n    <span class=\"toggle\">\n      <svg focusable=\"false\" aria-label=\"\" viewBox=\"0 0 24 24\" height=\"36\" width=\"36\"\n           fill=\"#000\">\n        <path d=\"M3 3h18v18H3z\"></path>\n      </svg>\n      <svg focusable=\"false\" aria-label=\"\" fill=\"#757575\" viewBox=\"0 0 24 24\"\n           height=\"36\" width=\"36\" [ngClass]=\"{'toggle-decorator': isSwitch}\" *ngIf=\"isSwitch\">\n        <path\n          d=\"M21 17h-2.58l2.51 2.56c-.18.69-.73 1.26-1.41 1.44L17 18.5V21h-2v-6h6v2zM19 7h2v2h-2V7zm2-2h-2V3.08c1.1 0 2 .92 2 1.92zm-6-2h2v2h-2V3zm4 8h2v2h-2v-2zM9 21H7v-2h2v2zM5 9H3V7h2v2zm0-5.92V5H3c0-1 1-1.92 2-1.92zM5 17H3v-2h2v2zM9 5H7V3h2v2zm4 0h-2V3h2v2zm0 16h-2v-2h2v2zm-8-8H3v-2h2v2zm0 8.08C3.9 21.08 3 20 3 19h2v2.08z\"></path>\n      </svg>\n    </span>\n  </button>\n  <button mat-button class=\"merge-button\" (click)=\"done()\">{{vars['editDoneLabel']}}</button>\n</div>\n",
                        styles: [".toolbar{align-items:center;background-color:#fff;border-radius:2px;box-shadow:rgba(0,0,0,.14) 0 24px 38px 3px,rgba(0,0,0,.12) 0 9px 46px 8px,rgba(0,0,0,.2) 0 11px 15px -7px;cursor:pointer;display:-webkit-inline-flex;flex-direction:row;height:56px;min-width:232px;pointer-events:auto;overflow:visible;position:absolute;margin:0 auto;width:228px;bottom:0;top:25%;left:0;right:0;z-index:999}.move-toolbar{cursor:-webkit-grab;height:56px;padding:0 12px;position:relative}.move-toolbar:active{cursor:-webkit-grabbing}.toggle{display:inline-block;position:relative;height:36px;width:36px}.toggle-decorator{left:0;position:absolute;top:0}.highlight-toggle{align-items:center;background-color:#fff;border:none;box-sizing:border-box;cursor:pointer;display:-webkit-flex;justify-content:center;outline:0;padding:10px;pointer-events:auto;position:relative;height:56px;width:56px}.deepen-color{background-color:#e0e0e0!important}.hide-toggle{align-items:center;background-color:#fff;border:none;box-sizing:border-box;cursor:pointer;display:-webkit-flex;justify-content:center;outline:0;padding:10px;pointer-events:auto;position:relative;height:56px;width:56px}.merge-button{padding:0!important;margin:0 10px!important;min-width:56px;color:#4285f4}"]
                    }] }
        ];
        /** @nocollapse */
        FeedbackToolbarComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: FeedbackService }
        ]; };
        FeedbackToolbarComponent.propDecorators = {
            drawColor: [{ type: core.Input }],
            manipulate: [{ type: core.Output }],
            toggleMoveBtn: [{ type: core.ViewChild, args: ['toggleMove', { static: true },] }]
        };
        return FeedbackToolbarComponent;
    }());
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
    var FeedbackRectangleComponent = /** @class */ (function () {
        function FeedbackRectangleComponent(feedbackService) {
            this.feedbackService = feedbackService;
            this.close = new core.EventEmitter();
            this.showCloseTag = false;
        }
        /**
         * @return {?}
         */
        FeedbackRectangleComponent.prototype.onMouseEnter = /**
         * @return {?}
         */
        function () {
            this.showCloseTag = this.noHover === false;
        };
        /**
         * @return {?}
         */
        FeedbackRectangleComponent.prototype.onMouseLeave = /**
         * @return {?}
         */
        function () {
            this.showCloseTag = false;
        };
        /**
         * @return {?}
         */
        FeedbackRectangleComponent.prototype.onClose = /**
         * @return {?}
         */
        function () {
            this.close.emit();
        };
        FeedbackRectangleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'feedback-rectangle',
                        template: "<div exclude-rect=\"true\" class=\"rect\" [ngStyle]=\"{'left.px': rectangle.startX,\n                              'top.px': rectangle.startY,\n                              'width.px': rectangle.width ,\n                              'height.px': rectangle.height }\"\n    [ngClass]=\"{'highlight': rectangle.color === feedbackService.highlightedColor,\n                'hide': rectangle.color !== feedbackService.highlightedColor,\n                'noHover': noHover}\">\n  <span exclude-rect=\"true\" class=\"close\" *ngIf=\"showCloseTag\" (click)=\"onClose()\">\n    <svg viewBox=\"0 0 1024 1024\"\n         width=\"16\" height=\"16\">\n        <path\n          d=\"M896 224l-96-96-288 288-288-288-96 96 288 288-288 288 96 96 288-288 288 288 96-96-288-288 288-288z\"></path>\n    </svg>\n  </span>\n</div>\n",
                        styles: [".rect{position:fixed;background:0 0;z-index:3}.highlight:not(.noHover):hover{cursor:default;background:rgba(55,131,249,.2)}.hide{background-color:#000}.hide:not(.noHover):hover{background-color:rgba(31,31,31,.75)}.rect .close{width:24px;height:24px;background:#fff;border-radius:50%;justify-content:center;align-items:center;color:#999;position:absolute;right:-12px;top:-12px;cursor:pointer;display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]
                    }] }
        ];
        /** @nocollapse */
        FeedbackRectangleComponent.ctorParameters = function () { return [
            { type: FeedbackService }
        ]; };
        FeedbackRectangleComponent.propDecorators = {
            rectangle: [{ type: core.Input }],
            noHover: [{ type: core.Input }],
            close: [{ type: core.Output }],
            onMouseEnter: [{ type: core.HostListener, args: ['mouseenter',] }],
            onMouseLeave: [{ type: core.HostListener, args: ['mouseleave',] }]
        };
        return FeedbackRectangleComponent;
    }());
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
    var FeedbackDirective = /** @class */ (function () {
        function FeedbackDirective(dialogRef, feedbackService, overlay) {
            var _this = this;
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
            this.send = new core.EventEmitter();
            this.feedbackService.feedback$.subscribe((/**
             * @param {?} feedback
             * @return {?}
             */
            function (feedback) {
                _this.send.emit(feedback);
            }));
            this.overlay = overlay;
        }
        /**
         * @return {?}
         */
        FeedbackDirective.prototype.onClick = /**
         * @return {?}
         */
        function () {
            this.openFeedbackDialog();
        };
        /**
         * @return {?}
         */
        FeedbackDirective.prototype.openFeedbackDialog = /**
         * @return {?}
         */
        function () {
            this.feedbackService.initScreenshotCanvas();
            this.dialogRef.open(FeedbackDialogComponent, {
                panelClass: 'feedbackDialog',
                backdropClass: 'dialogBackDrop',
                disableClose: true,
                height: 'auto',
                width: 'auto',
                scrollStrategy: this.overlay.scrollStrategies.reposition()
            });
        };
        /**
         * @return {?}
         */
        FeedbackDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
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
        };
        FeedbackDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[feedback]' },] }
        ];
        /** @nocollapse */
        FeedbackDirective.ctorParameters = function () { return [
            { type: dialog.MatDialog },
            { type: FeedbackService },
            { type: overlay.Overlay }
        ]; };
        FeedbackDirective.propDecorators = {
            title: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            editTip: [{ type: core.Input }],
            checkboxLabel: [{ type: core.Input }],
            cancelLabel: [{ type: core.Input }],
            sendLabel: [{ type: core.Input }],
            moveToolbarTip: [{ type: core.Input }],
            drawRectTip: [{ type: core.Input }],
            highlightTip: [{ type: core.Input }],
            hideTip: [{ type: core.Input }],
            editDoneLabel: [{ type: core.Input }],
            send: [{ type: core.Output }],
            onClick: [{ type: core.HostListener, args: ['click',] }]
        };
        return FeedbackDirective;
    }());
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
    var FeedbackModule = /** @class */ (function () {
        function FeedbackModule() {
        }
        FeedbackModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            FeedbackDialogComponent,
                            FeedbackToolbarComponent,
                            FeedbackRectangleComponent,
                            FeedbackDirective
                        ],
                        imports: [
                            dialog.MatDialogModule,
                            button.MatButtonModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            tooltip.MatTooltipModule,
                            common.CommonModule,
                            forms.FormsModule,
                            checkbox.MatCheckboxModule,
                            progressSpinner.MatProgressSpinnerModule
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
        return FeedbackModule;
    }());

    exports.FeedbackModule = FeedbackModule;
    exports.ɵa = FeedbackDialogComponent;
    exports.ɵb = FeedbackService;
    exports.ɵc = FeedbackToolbarComponent;
    exports.ɵd = FeedbackRectangleComponent;
    exports.ɵe = FeedbackDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-feedback.umd.js.map
