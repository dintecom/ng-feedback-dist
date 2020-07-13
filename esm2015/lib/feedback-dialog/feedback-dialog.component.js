import { Component, ViewChild, ElementRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil, finalize, map, mergeMap } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';
import { Feedback } from '../entity/feedback';
import { Rectangle } from '../entity/rectangle';
import { FeedbackService } from '../feedback.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../feedback.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/checkbox";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/progress-spinner";
import * as i8 from "../feedback-toolbar/feedback-toolbar.component";
import * as i9 from "../feedback-rectangle/feedback-rectangle.component";
const _c0 = ["screenshotParent"];
function FeedbackDialogComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.vars["placeholder"]);
} }
function FeedbackDialogComponent_div_0_div_11_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 22);
    i0.ɵɵelement(2, "path", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span", 24);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r6.vars["editTip"]);
} }
function FeedbackDialogComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17, 18);
    i0.ɵɵlistener("click", function FeedbackDialogComponent_div_0_div_11_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.expandDrawingBoard(); });
    i0.ɵɵelement(2, "mat-spinner", 19);
    i0.ɵɵelement(3, "div");
    i0.ɵɵtemplate(4, FeedbackDialogComponent_div_0_div_11_div_4_Template, 5, 1, "div", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("diameter", 30);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r4.showSpinner);
} }
function FeedbackDialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7);
    i0.ɵɵelementStart(5, "div", 8);
    i0.ɵɵtemplate(6, FeedbackDialogComponent_div_0_div_6_Template, 2, 1, "div", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "textarea", 10);
    i0.ɵɵlistener("ngModelChange", function FeedbackDialogComponent_div_0_Template_textarea_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.feedback.description = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 11);
    i0.ɵɵelementStart(9, "mat-checkbox", 12);
    i0.ɵɵlistener("ngModelChange", function FeedbackDialogComponent_div_0_Template_mat_checkbox_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.includeScreenshot = $event; })("change", function FeedbackDialogComponent_div_0_Template_mat_checkbox_change_9_listener() { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.isIncludeScreenshot(); });
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, FeedbackDialogComponent_div_0_div_11_Template, 5, 2, "div", 13);
    i0.ɵɵelementStart(12, "mat-dialog-actions", 14);
    i0.ɵɵelementStart(13, "button", 15);
    i0.ɵɵlistener("click", function FeedbackDialogComponent_div_0_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r10); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.dialogRef.close(); });
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 16);
    i0.ɵɵlistener("click", function FeedbackDialogComponent_div_0_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r10); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.dialogRef.close(true); });
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.vars["title"], " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.feedback.description == "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.feedback.description);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r0.includeScreenshot);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.vars["checkboxLabel"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.includeScreenshot);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.vars["cancelLabel"]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.vars["sendLabel"]);
} }
function FeedbackDialogComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.vars["drawRectTip"], " ");
} }
function FeedbackDialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, FeedbackDialogComponent_div_1_div_1_Template, 2, 1, "div", 26);
    i0.ɵɵelementStart(2, "feedback-toolbar", 27);
    i0.ɵɵlistener("manipulate", function FeedbackDialogComponent_div_1_Template_feedback_toolbar_manipulate_2_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.manipulate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.showToolbarTips);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("drawColor", ctx_r1.drawColor);
} }
function FeedbackDialogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "feedback-rectangle", 29);
    i0.ɵɵlistener("close", function FeedbackDialogComponent_div_2_Template_feedback_rectangle_close_1_listener() { i0.ɵɵrestoreView(_r21); const index_r19 = ctx.index; const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.closeRect(index_r19); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rectangle_r18 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("rectangle", rectangle_r18)("noHover", !ctx_r2.showToolbar || ctx_r2.isDrawingRect);
} }
const _c1 = function (a0) { return { "pointerCursor": a0 }; };
export class FeedbackDialogComponent {
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
    ngAfterViewInit() {
        this.feedbackService.screenshotCanvas$.subscribe((canvas) => {
            this.showSpinner = false;
            this.feedback.screenshot = canvas.toDataURL('image/png');
            this.screenshotEle = this.feedbackService.getImgEle(canvas);
            this.appendScreenshot();
        });
        this.feedbackService.isDraggingToolbar$.subscribe((isDragging) => {
            if (isDragging) {
                this.destroyCanvasListeners();
            }
            else {
                this.addCanvasListeners();
            }
        });
        this.dialogRef.afterClosed().subscribe((sendNow) => {
            if (sendNow === true) {
                this.feedbackService.setFeedback(this.feedback);
            }
        });
        this.feedbackService.showBackDrop();
    }
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
    onEscapeKeyDownHandler(evt) {
        this.showToolbar = false;
        this.includeScreenshot = true;
        this.detector.detectChanges();
        this.dialogRef.close('key down esc to close');
    }
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
    startDraw(color) {
        this.drawColor = color;
    }
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
    appendScreenshot() {
        if (this.screenshotParent) {
            this.screenshotParent.nativeElement.appendChild(this.screenshotEle);
        }
    }
    initBackgroundCanvas() {
        this.drawCanvas = document.getElementById('draw-canvas');
        // The canvas to draw, must use this way to initial the height and width
        this.drawCanvas.style.height = this.scrollHeight + '';
        this.drawCanvas.style.width = this.scrollWidth + '';
        this.drawCanvas.height = this.scrollHeight;
        this.drawCanvas.width = this.scrollWidth;
        this.drawContainerRect();
    }
    drawContainerRect() {
        const drawContext = this.drawCanvas.getContext('2d'), width = this.scrollWidth, height = this.scrollHeight;
        drawContext.beginPath();
        drawContext.fillStyle = 'rgba(0,0,0,0.3)';
        drawContext.clearRect(0, 0, width, height);
        drawContext.fillRect(0, 0, width, height); // draw the rectangle
    }
    drawRectangle(rect) {
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
            this.rectangles.forEach(tmpRect => {
                if (tmpRect.color === this.feedbackService.highlightedColor) {
                    context.clearRect(tmpRect.startX, tmpRect.startY, tmpRect.width, tmpRect.height);
                }
            });
        }
    }
    addCanvasListeners() {
        const mouseUp = fromEvent(document.documentElement, 'mouseup'), mouseMove = fromEvent(document.documentElement, 'mousemove'), mouseDown = fromEvent(document.documentElement, 'mousedown'), scroll = fromEvent(window, 'scroll');
        this.manuallyDrawRect(mouseDown, mouseMove, mouseUp);
        this.autoDrawRect(mouseMove);
        this.changeRectPosition(scroll);
    }
    changeRectPosition(scroll) {
        scroll.subscribe(event => {
            const currentWindowScrollX = window.scrollX, currentWindowScrollY = window.scrollY;
            this.rectangles.forEach(rect => {
                rect.startY = rect.startY - (currentWindowScrollY - rect.windowScrollY);
                rect.startX = rect.startX - (currentWindowScrollX - rect.windowScrollX);
                rect.windowScrollY = currentWindowScrollY;
                rect.windowScrollX = currentWindowScrollX;
            });
            this.drawPersistCanvasRectangles();
        }, error => console.error(error));
    }
    destroyCanvasListeners() {
        if (this.manuallyDrawRect$) {
            this.manuallyDrawRect$.unsubscribe();
        }
        if (this.autoDrawRect$) {
            this.autoDrawRect$.unsubscribe();
        }
    }
    manuallyDrawRect(mouseDown, mouseMove, mouseUp) {
        const mouseDrag = mouseDown.pipe(mergeMap((mouseDownEvent) => {
            if (this.showToolbarTips) {
                this.showToolbarTips = false;
            }
            this.autoDrawRect$.unsubscribe();
            this.isDrawingRect = true;
            const newRectangle = new Rectangle();
            newRectangle.startX = mouseDownEvent.clientX;
            newRectangle.startY = mouseDownEvent.clientY;
            newRectangle.color = this.drawColor;
            return mouseMove.pipe(map((mouseMoveEvent) => {
                newRectangle.width = mouseMoveEvent.clientX - mouseDownEvent.clientX;
                newRectangle.height = mouseMoveEvent.clientY - mouseDownEvent.clientY;
                return newRectangle;
            }), finalize(() => {
                // click to draw rectangle
                if (newRectangle.width === undefined || newRectangle.height === undefined ||
                    newRectangle.width === 0 || newRectangle.height === 0) {
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
            }), takeUntil(mouseUp));
        }));
        this.manuallyDrawRect$ = mouseDrag.subscribe((rec) => {
            this.drawPersistCanvasRectangles();
            this.drawRectangle(rec);
        });
    }
    autoDrawRect(mouseMove) {
        this.autoDrawRect$ = mouseMove.subscribe({
            next: (mouseMoveEvent) => {
                this.drawPersistCanvasRectangles();
                this.drawTempCanvasRectangle(mouseMoveEvent);
            },
            error: err => console.error('something wrong occurred: ' + err),
        });
    }
    drawPersistCanvasRectangles() {
        this.drawContainerRect();
        this.rectangles.forEach(tmpRect => {
            this.drawRectangle(tmpRect);
        });
    }
    drawTempCanvasRectangle(event) {
        let rectangle = null;
        const clientX = event.clientX, clientY = event.clientY, els = document.elementsFromPoint(clientX, clientY), el = els[2];
        if ((!this.isExcludeRect(els)) && el && this.elCouldBeHighlighted.indexOf(el.nodeName.toLowerCase()) > -1) {
            rectangle = new Rectangle();
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
    closeRect(index) {
        this.rectangles.splice(index, 1);
        this.drawPersistCanvasRectangles();
    }
    isExcludeRect(elements) {
        const result = elements.some(el => {
            return el.getAttribute('exclude-rect') === 'true';
        });
        return result;
    }
}
FeedbackDialogComponent.ɵfac = function FeedbackDialogComponent_Factory(t) { return new (t || FeedbackDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i2.FeedbackService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
FeedbackDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FeedbackDialogComponent, selectors: [["feedback-dialog"]], viewQuery: function FeedbackDialogComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.screenshotParent = _t.first);
    } }, hostBindings: function FeedbackDialogComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown.escape", function FeedbackDialogComponent_keydown_escape_HostBindingHandler($event) { return ctx.onEscapeKeyDownHandler($event); }, false, i0.ɵɵresolveDocument);
    } }, decls: 4, vars: 6, consts: [["class", "dialog", "data-html2canvas-ignore", "true", 4, "ngIf"], ["data-html2canvas-ignore", "true", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["id", "draw-canvas", 1, "drawCanvas", 3, "ngClass"], ["data-html2canvas-ignore", "true", 1, "dialog"], [1, "dialog-title"], [1, "title-font"], [1, "dialog-content"], [1, "description-tips"], [4, "ngIf"], ["autofocus", "", 1, "description", 3, "ngModel", "ngModelChange"], [1, "screenshot-checkbox"], [3, "ngModel", "ngModelChange", "change"], ["class", "screenshot-content", 3, "click", 4, "ngIf"], ["align", "end", 1, "dialog-actions"], ["mat-button", "", 1, "action-button", 3, "click"], ["mat-button", "", 1, "submit-button", "action-button", 3, "click"], [1, "screenshot-content", 3, "click"], ["screenshotParent", ""], [1, "loading", 3, "diameter"], ["class", "screenshot-tips", 4, "ngIf"], [1, "screenshot-tips"], ["focusable", "false", "aria-label", "", "viewBox", "0 0 24 24"], ["d", "M21 17h-2.58l2.51 2.56c-.18.69-.73 1.26-1.41 1.44L17 18.5V21h-2v-6h6v2zM19 7h2v2h-2V7zm2-2h-2V3.08c1.1 0 2 .92 2 1.92zm-6-2h2v2h-2V3zm4 8h2v2h-2v-2zM9 21H7v-2h2v2zM5 9H3V7h2v2zm0-5.92V5H3c0-1 1-1.92 2-1.92zM5 17H3v-2h2v2zM9 5H7V3h2v2zm4 0h-2V3h2v2zm0 16h-2v-2h2v2zm-8-8H3v-2h2v2zm0 8.08C3.9 21.08 3 20 3 19h2v2.08z"], [1, "screenshot-tips-content"], ["data-html2canvas-ignore", "true"], ["class", "toolbar-tips", 4, "ngIf"], [3, "drawColor", "manipulate"], [1, "toolbar-tips"], [3, "rectangle", "noHover", "close"]], template: function FeedbackDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FeedbackDialogComponent_div_0_Template, 17, 8, "div", 0);
        i0.ɵɵtemplate(1, FeedbackDialogComponent_div_1_Template, 3, 2, "div", 1);
        i0.ɵɵtemplate(2, FeedbackDialogComponent_div_2_Template, 2, 2, "div", 2);
        i0.ɵɵelement(3, "canvas", 3);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.showToolbar);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showToolbar);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.rectangles);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1, !ctx.showToolbar));
    } }, directives: [i3.NgIf, i3.NgForOf, i3.NgClass, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.MatCheckbox, i1.MatDialogActions, i6.MatButton, i7.MatSpinner, i8.FeedbackToolbarComponent, i9.FeedbackRectangleComponent], styles: [".dialog[_ngcontent-%COMP%]{background-color:#fff;position:relative;width:360px;z-index:1000}.dialog-title[_ngcontent-%COMP%]{background-color:#607d8b;color:#fff;height:56px}.title-font[_ngcontent-%COMP%]{color:#fff;float:left;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:20px;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:300;line-height:56px;margin:0;padding:0 16px}.dialog-content[_ngcontent-%COMP%]{display:-webkit-flex;flex-grow:1;height:200px;position:relative}.description[_ngcontent-%COMP%]{border:none;box-shadow:none;box-sizing:border-box;color:#212121;flex-grow:1;height:inherit;max-width:100%;outline:none;resize:none;width:100%}.description[_ngcontent-%COMP%], .description-tips[_ngcontent-%COMP%]{font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:16px;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;line-height:normal;padding:18px 16px 0}.description-tips[_ngcontent-%COMP%]{color:#bdbdbd;display:block;left:0;position:absolute;right:0}.screenshot-checkbox[_ngcontent-%COMP%]{background-color:#f8f8f8;display:flex;flex-direction:column;height:40px;justify-content:center;padding:0 16px}.screenshot-content[_ngcontent-%COMP%]{background:#ededed none;border:none;cursor:pointer;display:block;height:192px;overflow:hidden;padding:0;position:relative;text-align:center;width:100%}.screenshot-tips[_ngcontent-%COMP%]{align-items:center;background-color:hsla(0,0%,97.3%,.6);border-radius:4px;bottom:0;box-sizing:border-box;display:-webkit-flex;flex-direction:column;justify-content:center;left:0;margin:0 auto;min-height:112px;position:absolute;right:0;top:50%;transform:translateY(-50%);width:224px;z-index:5}.screenshot-content[_ngcontent-%COMP%]:hover   .screenshot-tips[_ngcontent-%COMP%]{background-color:hsla(0,0%,97.3%,.8)}.screenshot-content[_ngcontent-%COMP%]:hover   .screenshot-tips-content[_ngcontent-%COMP%]{color:#4285f4}.screenshot-content[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{color:#4285f4;fill:currentColor}.screenshot-tips[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#757575;fill:currentColor;height:48px;width:48px}.screenshot-tips-content[_ngcontent-%COMP%]{color:#757575;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px;margin-top:12px}.dialog-actions[_ngcontent-%COMP%]{border-top:1px solid #e0e0e0}.submit-button[_ngcontent-%COMP%]{color:#4285f4;margin-left:5px!important;margin-right:8px!important}.action-button[_ngcontent-%COMP%]{font-size:14px;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:500;height:35px;line-height:normal;margin:10px 0;min-width:75px;padding:0 8px;position:relative}.loading[_ngcontent-%COMP%]{bottom:0;left:0;margin:0 auto;position:absolute;right:0;top:45%}.mat-dialog-actions[_ngcontent-%COMP%]{padding:0!important}  .feedbackDialog .mat-dialog-container{background-color:hsla(0,0%,100%,0);box-shadow:none;overflow:visible;padding:0}.toolbar-tips[_ngcontent-%COMP%]{-webkit-animation:cssAnimation 0s ease-in 5s forwards;-webkit-animation-fill-mode:forwards;animation:cssAnimation 0s ease-in 5s forwards;animation-fill-mode:forwards;background-color:hsla(0,0%,100%,.6);border-radius:12px;color:#757575;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:34px;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;line-height:40px;margin-bottom:72px;padding:22px 0;text-align:center;visibility:visible;width:656px}@keyframes cssAnimation{to{height:0;overflow:hidden;width:0}}@-webkit-keyframes cssAnimation{to{height:0;visibility:hidden;width:0}}.drawCanvas[_ngcontent-%COMP%]{cursor:crosshair;left:0;margin:0 auto;position:absolute;top:0;z-index:-1}.pointerCursor[_ngcontent-%COMP%]{cursor:default!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FeedbackDialogComponent, [{
        type: Component,
        args: [{
                selector: 'feedback-dialog',
                templateUrl: './feedback-dialog.component.html',
                styleUrls: ['./feedback-dialog.component.css']
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: i2.FeedbackService }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, { screenshotParent: [{
            type: ViewChild,
            args: ['screenshotParent']
        }], onEscapeKeyDownHandler: [{
            type: HostListener,
            args: ['document:keydown.escape', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2stZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWZlZWRiYWNrL3NyYy9saWIvZmVlZGJhY2stZGlhbG9nL2ZlZWRiYWNrLWRpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1mZWVkYmFjay9zcmMvbGliL2ZlZWRiYWNrLWRpYWxvZy9mZWVkYmFjay1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUE0QixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0VoRCwyQkFBc0M7SUFBQSxZQUF1QjtJQUFBLGlCQUFNOzs7SUFBN0IsZUFBdUI7SUFBdkIsZ0RBQXVCOzs7SUFlL0QsK0JBQ0U7SUFBQSxtQkFDRTtJQURGLCtCQUNFO0lBQUEsMkJBQ3dVO0lBQzFVLGlCQUFNO0lBQ04sb0JBQXNDO0lBQXRDLGdDQUFzQztJQUFBLFlBQW1CO0lBQUEsaUJBQU87SUFDbEUsaUJBQU07OztJQURrQyxlQUFtQjtJQUFuQiw0Q0FBbUI7Ozs7SUFSN0QsbUNBQ0U7SUFEZ0Qsd01B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Q0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7OEZBaFNVLHVCQUF1Qjs0REFBdkIsdUJBQXVCOzs7Ozs7NEhBQXZCLGtDQUE4Qjs7UUNiM0MseUVBQ0U7UUFvQ0Ysd0VBQ0U7UUFNRix3RUFDSTtRQUdKLDRCQUFpRzs7UUFoRDdFLHVDQUFvQjtRQXFDbkMsZUFBbUI7UUFBbkIsc0NBQW1CO1FBT25CLGVBQW9EO1FBQXBELHdDQUFvRDtRQUliLGVBQTJDO1FBQTNDLHNFQUEyQzs7a0REbkMxRSx1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DOztrQkFVRSxTQUFTO21CQUFDLGtCQUFrQjs7a0JBNEQ1QixZQUFZO21CQUFDLHlCQUF5QixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIGZpbmFsaXplLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IEZlZWRiYWNrIH0gZnJvbSAnLi4vZW50aXR5L2ZlZWRiYWNrJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4uL2VudGl0eS9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgRmVlZGJhY2tTZXJ2aWNlIH0gZnJvbSAnLi4vZmVlZGJhY2suc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZlZWRiYWNrLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9mZWVkYmFjay1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mZWVkYmFjay1kaWFsb2cuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBzaG93VG9vbGJhciA9IGZhbHNlO1xuICBwdWJsaWMgdmFyczogb2JqZWN0ID0ge307XG4gIHB1YmxpYyBmZWVkYmFjayA9IG5ldyBGZWVkYmFjaygpO1xuICBwdWJsaWMgaW5jbHVkZVNjcmVlbnNob3Q6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgc2hvd1NwaW5uZXIgPSB0cnVlO1xuICBwdWJsaWMgc2NyZWVuc2hvdEVsZTogSFRNTEVsZW1lbnQ7XG4gIHB1YmxpYyBkcmF3Q2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHVibGljIHNob3dUb29sYmFyVGlwczogYm9vbGVhbiA9IHRydWU7XG4gIEBWaWV3Q2hpbGQoJ3NjcmVlbnNob3RQYXJlbnQnKVxuICBwdWJsaWMgc2NyZWVuc2hvdFBhcmVudDogRWxlbWVudFJlZjtcbiAgcHVibGljIGRyYXdDb2xvcjogc3RyaW5nID0gdGhpcy5mZWVkYmFja1NlcnZpY2UuaGlnaGxpZ2h0ZWRDb2xvcjtcbiAgcHVibGljIHJlY3RhbmdsZXM6IFJlY3RhbmdsZVtdID0gW107XG4gIHByaXZhdGUgc2Nyb2xsV2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGg7XG4gIHByaXZhdGUgc2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgcHJpdmF0ZSBlbENvdWxkQmVIaWdobGlnaHRlZCA9IFsnYnV0dG9uJywgJ2EnLCAnc3BhbicsICdlbScsICdpJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JyxcbiAgICAnaDUnLCAnaDYnLCAncCcsICdzdHJvbmcnLCAnc21hbGwnLCAnc3ViJywgJ3N1cCcsICdiJywgJ3RpbWUnLCAnaW1nJyxcbiAgICAndmlkZW8nLCAnaW5wdXQnLCAnbGFiZWwnLCAnc2VsZWN0JywgJ3RleHRhcmVhJywgJ2FydGljbGUnLCAnc3VtbWFyeScsICdzZWN0aW9uJ107XG4gIC8vIHRoZSBmbGFnIGZpZWxkICdpc01hbnVhbGx5RHJhd1JlY3QnIHRvIHNvbHZlIGNvbmZsaWN0IGJldHdlZW4gbWFudWFsbHkgZHJhdyBhbmQgYXV0byBkcmF3XG4gIHByaXZhdGUgbWFudWFsbHlEcmF3UmVjdCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBhdXRvRHJhd1JlY3QkOiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyBpc0RyYXdpbmdSZWN0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEZlZWRiYWNrRGlhbG9nQ29tcG9uZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmZWVkYmFja1NlcnZpY2U6IEZlZWRiYWNrU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmZlZWRiYWNrID0gbmV3IEZlZWRiYWNrKCk7XG4gICAgdGhpcy5mZWVkYmFjay5kZXNjcmlwdGlvbiA9ICcnO1xuICAgIHRoaXMudmFycyA9IHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmluaXRpYWxWYXJpYWJsZXM7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLnNjcmVlbnNob3RDYW52YXMkLnN1YnNjcmliZSgoY2FudmFzKSA9PiB7XG4gICAgICB0aGlzLnNob3dTcGlubmVyID0gZmFsc2U7XG4gICAgICB0aGlzLmZlZWRiYWNrLnNjcmVlbnNob3QgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcbiAgICAgIHRoaXMuc2NyZWVuc2hvdEVsZSA9IHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmdldEltZ0VsZShjYW52YXMpO1xuICAgICAgdGhpcy5hcHBlbmRTY3JlZW5zaG90KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5pc0RyYWdnaW5nVG9vbGJhciQuc3Vic2NyaWJlKChpc0RyYWdnaW5nKSA9PiB7XG4gICAgICBpZiAoaXNEcmFnZ2luZykge1xuICAgICAgICB0aGlzLmRlc3Ryb3lDYW52YXNMaXN0ZW5lcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkQ2FudmFzTGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoc2VuZE5vdykgPT4ge1xuICAgICAgaWYgKHNlbmROb3cgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5mZWVkYmFja1NlcnZpY2Uuc2V0RmVlZGJhY2sodGhpcy5mZWVkYmFjayk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2Uuc2hvd0JhY2tEcm9wKCk7XG4gIH1cblxuICBwdWJsaWMgZXhwYW5kRHJhd2luZ0JvYXJkKCkge1xuICAgIHRoaXMuc2hvd1Rvb2xiYXIgPSB0cnVlO1xuICAgIGlmICghdGhpcy5kcmF3Q2FudmFzKSB7XG4gICAgICB0aGlzLmRldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuaW5pdEJhY2tncm91bmRDYW52YXMoKTtcbiAgICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmhpZGVCYWNrRHJvcCgpO1xuICAgIH1cbiAgICB0aGlzLmFkZENhbnZhc0xpc3RlbmVycygpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRyYXdDYW52YXMpO1xuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmhpZGVCYWNrRHJvcCgpO1xuICAgIGNvbnNvbGUubG9nKCdleHBhbmQgdGhlIGJvYXJkJyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duLmVzY2FwZScsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkVzY2FwZUtleURvd25IYW5kbGVyKGV2dDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMuc2hvd1Rvb2xiYXIgPSBmYWxzZTtcbiAgICB0aGlzLmluY2x1ZGVTY3JlZW5zaG90ID0gdHJ1ZTtcbiAgICB0aGlzLmRldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgna2V5IGRvd24gZXNjIHRvIGNsb3NlJyk7XG4gIH1cblxuICBwdWJsaWMgbWFuaXB1bGF0ZShtYW5pcHVsYXRpb246IHN0cmluZykge1xuICAgIGlmIChtYW5pcHVsYXRpb24gPT09ICdkb25lJykge1xuICAgICAgdGhpcy5zaG93VG9vbGJhclRpcHMgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd1NwaW5uZXIgPSB0cnVlO1xuICAgICAgdGhpcy5kZXN0cm95Q2FudmFzTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLnNob3dUb29sYmFyID0gZmFsc2U7XG4gICAgICB0aGlzLmRldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmluaXRTY3JlZW5zaG90Q2FudmFzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhcnREcmF3KG1hbmlwdWxhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXJ0RHJhdyhjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5kcmF3Q29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIHB1YmxpYyBpc0luY2x1ZGVTY3JlZW5zaG90KCkge1xuICAgIGlmICh0aGlzLmluY2x1ZGVTY3JlZW5zaG90KSB7XG4gICAgICB0aGlzLmRldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuc2hvd1NwaW5uZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuYXBwZW5kU2NyZWVuc2hvdCgpO1xuICAgICAgdGhpcy5mZWVkYmFjay5zY3JlZW5zaG90ID0gdGhpcy5zY3JlZW5zaG90RWxlLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmZlZWRiYWNrWydzY3JlZW5zaG90J107XG4gICAgICB0aGlzLnNob3dTcGlubmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZFNjcmVlbnNob3QoKSB7XG4gICAgaWYgKHRoaXMuc2NyZWVuc2hvdFBhcmVudCkgeyB0aGlzLnNjcmVlbnNob3RQYXJlbnQubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNjcmVlbnNob3RFbGUpOyB9XG4gIH1cblxuICBwcml2YXRlIGluaXRCYWNrZ3JvdW5kQ2FudmFzKCkge1xuICAgIHRoaXMuZHJhd0NhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcmF3LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIC8vIFRoZSBjYW52YXMgdG8gZHJhdywgbXVzdCB1c2UgdGhpcyB3YXkgdG8gaW5pdGlhbCB0aGUgaGVpZ2h0IGFuZCB3aWR0aFxuICAgIHRoaXMuZHJhd0NhbnZhcy5zdHlsZS5oZWlnaHQgPSB0aGlzLnNjcm9sbEhlaWdodCArICcnO1xuICAgIHRoaXMuZHJhd0NhbnZhcy5zdHlsZS53aWR0aCA9IHRoaXMuc2Nyb2xsV2lkdGggKyAnJztcbiAgICB0aGlzLmRyYXdDYW52YXMuaGVpZ2h0ID0gdGhpcy5zY3JvbGxIZWlnaHQ7XG4gICAgdGhpcy5kcmF3Q2FudmFzLndpZHRoID0gdGhpcy5zY3JvbGxXaWR0aDtcbiAgICB0aGlzLmRyYXdDb250YWluZXJSZWN0KCk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdDb250YWluZXJSZWN0KCkge1xuICAgIGNvbnN0IGRyYXdDb250ZXh0ID0gdGhpcy5kcmF3Q2FudmFzLmdldENvbnRleHQoJzJkJyksXG4gICAgICB3aWR0aCA9IHRoaXMuc2Nyb2xsV2lkdGgsXG4gICAgICBoZWlnaHQgPSB0aGlzLnNjcm9sbEhlaWdodDtcbiAgICBkcmF3Q29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBkcmF3Q29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjMpJztcbiAgICBkcmF3Q29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgZHJhd0NvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7IC8vIGRyYXcgdGhlIHJlY3RhbmdsZVxuICB9XG5cbiAgcHJpdmF0ZSBkcmF3UmVjdGFuZ2xlKHJlY3Q6IFJlY3RhbmdsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmRyYXdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb250ZXh0LmxpbmVKb2luID0gJ3JvdW5kJztcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGlmIChyZWN0LmNvbG9yID09PSB0aGlzLmZlZWRiYWNrU2VydmljZS5oaWRkZW5Db2xvcikge1xuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgzMSwgMzEsIDMxLCAwLjc1KSc7XG4gICAgICBjb250ZXh0LmZpbGxSZWN0KHJlY3Quc3RhcnRYLCByZWN0LnN0YXJ0WSwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgICAgY29udGV4dC5yZWN0KHJlY3Quc3RhcnRYLCByZWN0LnN0YXJ0WSwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdChyZWN0LnN0YXJ0WCwgcmVjdC5zdGFydFksIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICAgIGNvbnRleHQubGluZVdpZHRoID0gNTtcbiAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSByZWN0LmNvbG9yO1xuICAgICAgY29udGV4dC5yZWN0KHJlY3Quc3RhcnRYLCByZWN0LnN0YXJ0WSwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KHJlY3Quc3RhcnRYLCByZWN0LnN0YXJ0WSwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgICAgdGhpcy5yZWN0YW5nbGVzLmZvckVhY2godG1wUmVjdCA9PiB7XG4gICAgICAgIGlmICh0bXBSZWN0LmNvbG9yID09PSB0aGlzLmZlZWRiYWNrU2VydmljZS5oaWdobGlnaHRlZENvbG9yKSB7XG4gICAgICAgICAgY29udGV4dC5jbGVhclJlY3QodG1wUmVjdC5zdGFydFgsIHRtcFJlY3Quc3RhcnRZLCB0bXBSZWN0LndpZHRoLCB0bXBSZWN0LmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQ2FudmFzTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGNvbnN0IG1vdXNlVXAgPSBmcm9tRXZlbnQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnbW91c2V1cCcpLFxuICAgICAgICAgIG1vdXNlTW92ZSA9IGZyb21FdmVudChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICdtb3VzZW1vdmUnKSxcbiAgICAgICAgICBtb3VzZURvd24gPSBmcm9tRXZlbnQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnbW91c2Vkb3duJyksXG4gICAgICAgICAgc2Nyb2xsID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpO1xuXG4gICAgdGhpcy5tYW51YWxseURyYXdSZWN0KG1vdXNlRG93biwgbW91c2VNb3ZlLCBtb3VzZVVwKTtcbiAgICB0aGlzLmF1dG9EcmF3UmVjdChtb3VzZU1vdmUpO1xuICAgIHRoaXMuY2hhbmdlUmVjdFBvc2l0aW9uKHNjcm9sbCk7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZVJlY3RQb3NpdGlvbihzY3JvbGw6IE9ic2VydmFibGU8RXZlbnQ+KSB7XG4gICAgc2Nyb2xsLnN1YnNjcmliZShcbiAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFdpbmRvd1Njcm9sbFggPSB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgY3VycmVudFdpbmRvd1Njcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgICAgdGhpcy5yZWN0YW5nbGVzLmZvckVhY2gocmVjdCA9PiB7XG4gICAgICAgICAgcmVjdC5zdGFydFkgPSByZWN0LnN0YXJ0WSAtIChjdXJyZW50V2luZG93U2Nyb2xsWSAtIHJlY3Qud2luZG93U2Nyb2xsWSk7XG4gICAgICAgICAgcmVjdC5zdGFydFggPSByZWN0LnN0YXJ0WCAtIChjdXJyZW50V2luZG93U2Nyb2xsWCAtIHJlY3Qud2luZG93U2Nyb2xsWCk7XG4gICAgICAgICAgcmVjdC53aW5kb3dTY3JvbGxZID0gY3VycmVudFdpbmRvd1Njcm9sbFk7XG4gICAgICAgICAgcmVjdC53aW5kb3dTY3JvbGxYID0gY3VycmVudFdpbmRvd1Njcm9sbFg7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRyYXdQZXJzaXN0Q2FudmFzUmVjdGFuZ2xlcygpO1xuICAgICAgfSxcbiAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveUNhbnZhc0xpc3RlbmVycygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tYW51YWxseURyYXdSZWN0JCkgeyB0aGlzLm1hbnVhbGx5RHJhd1JlY3QkLnVuc3Vic2NyaWJlKCk7IH1cbiAgICBpZiAodGhpcy5hdXRvRHJhd1JlY3QkKSB7IHRoaXMuYXV0b0RyYXdSZWN0JC51bnN1YnNjcmliZSgpOyB9XG4gIH1cblxuICBwcml2YXRlIG1hbnVhbGx5RHJhd1JlY3QobW91c2VEb3duOiBPYnNlcnZhYmxlPEV2ZW50PiwgbW91c2VNb3ZlOiBPYnNlcnZhYmxlPEV2ZW50PiwgbW91c2VVcDogT2JzZXJ2YWJsZTxFdmVudD4pOiB2b2lkIHtcbiAgICBjb25zdCBtb3VzZURyYWcgPSBtb3VzZURvd24ucGlwZShtZXJnZU1hcCgobW91c2VEb3duRXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnNob3dUb29sYmFyVGlwcykgeyB0aGlzLnNob3dUb29sYmFyVGlwcyA9IGZhbHNlOyB9XG4gICAgICB0aGlzLmF1dG9EcmF3UmVjdCQudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuaXNEcmF3aW5nUmVjdCA9IHRydWU7XG5cbiAgICAgIGNvbnN0IG5ld1JlY3RhbmdsZSA9IG5ldyBSZWN0YW5nbGUoKTtcbiAgICAgIG5ld1JlY3RhbmdsZS5zdGFydFggPSBtb3VzZURvd25FdmVudC5jbGllbnRYO1xuICAgICAgbmV3UmVjdGFuZ2xlLnN0YXJ0WSA9IG1vdXNlRG93bkV2ZW50LmNsaWVudFk7XG4gICAgICBuZXdSZWN0YW5nbGUuY29sb3IgPSB0aGlzLmRyYXdDb2xvcjtcblxuICAgICAgcmV0dXJuIG1vdXNlTW92ZS5waXBlKFxuICAgICAgICBtYXAoKG1vdXNlTW92ZUV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgbmV3UmVjdGFuZ2xlLndpZHRoID0gbW91c2VNb3ZlRXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bkV2ZW50LmNsaWVudFg7XG4gICAgICAgICAgbmV3UmVjdGFuZ2xlLmhlaWdodCA9IG1vdXNlTW92ZUV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25FdmVudC5jbGllbnRZO1xuICAgICAgICAgIHJldHVybiBuZXdSZWN0YW5nbGU7XG4gICAgICAgIH0pLFxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgLy8gY2xpY2sgdG8gZHJhdyByZWN0YW5nbGVcbiAgICAgICAgICBpZiAobmV3UmVjdGFuZ2xlLndpZHRoID09PSB1bmRlZmluZWQgfHwgbmV3UmVjdGFuZ2xlLmhlaWdodCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBuZXdSZWN0YW5nbGUud2lkdGggPT09IDAgfHwgbmV3UmVjdGFuZ2xlLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZHJhd1RlbXBDYW52YXNSZWN0YW5nbGUobW91c2VEb3duRXZlbnQpO1xuICAgICAgICAgICAgaWYgKHJlY3QpIHsgdGhpcy5yZWN0YW5nbGVzLnB1c2gocmVjdCk7IH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGRyYWcgdG8gZHJhdyByZWN0YW5nbGVcbiAgICAgICAgICAgIGlmIChuZXdSZWN0YW5nbGUuaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgICBuZXdSZWN0YW5nbGUuc3RhcnRZID0gbmV3UmVjdGFuZ2xlLnN0YXJ0WSArIG5ld1JlY3RhbmdsZS5oZWlnaHQ7XG4gICAgICAgICAgICAgIG5ld1JlY3RhbmdsZS5oZWlnaHQgPSBNYXRoLmFicyhuZXdSZWN0YW5nbGUuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdSZWN0YW5nbGUud2lkdGggPCAwKSB7XG4gICAgICAgICAgICAgIG5ld1JlY3RhbmdsZS5zdGFydFggPSBuZXdSZWN0YW5nbGUuc3RhcnRYICsgbmV3UmVjdGFuZ2xlLndpZHRoO1xuICAgICAgICAgICAgICBuZXdSZWN0YW5nbGUud2lkdGggPSBNYXRoLmFicyhuZXdSZWN0YW5nbGUud2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVzLnB1c2gobmV3UmVjdGFuZ2xlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kcmF3UGVyc2lzdENhbnZhc1JlY3RhbmdsZXMoKTtcbiAgICAgICAgICB0aGlzLmF1dG9EcmF3UmVjdChtb3VzZU1vdmUpO1xuICAgICAgICAgIHRoaXMuaXNEcmF3aW5nUmVjdCA9IGZhbHNlO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFrZVVudGlsKG1vdXNlVXApKTtcbiAgICB9KSk7XG5cbiAgICB0aGlzLm1hbnVhbGx5RHJhd1JlY3QkID0gbW91c2VEcmFnLnN1YnNjcmliZShcbiAgICAgIChyZWMpID0+IHtcbiAgICAgICAgdGhpcy5kcmF3UGVyc2lzdENhbnZhc1JlY3RhbmdsZXMoKTtcbiAgICAgICAgdGhpcy5kcmF3UmVjdGFuZ2xlKHJlYyk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYXV0b0RyYXdSZWN0KG1vdXNlTW92ZTogT2JzZXJ2YWJsZTxFdmVudD4pOiB2b2lkIHtcbiAgICB0aGlzLmF1dG9EcmF3UmVjdCQgPSBtb3VzZU1vdmUuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChtb3VzZU1vdmVFdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLmRyYXdQZXJzaXN0Q2FudmFzUmVjdGFuZ2xlcygpO1xuICAgICAgICB0aGlzLmRyYXdUZW1wQ2FudmFzUmVjdGFuZ2xlKG1vdXNlTW92ZUV2ZW50KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZXJyID0+IGNvbnNvbGUuZXJyb3IoJ3NvbWV0aGluZyB3cm9uZyBvY2N1cnJlZDogJyArIGVyciksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdQZXJzaXN0Q2FudmFzUmVjdGFuZ2xlcygpIHtcbiAgICB0aGlzLmRyYXdDb250YWluZXJSZWN0KCk7XG4gICAgdGhpcy5yZWN0YW5nbGVzLmZvckVhY2godG1wUmVjdCA9PiB7XG4gICAgICB0aGlzLmRyYXdSZWN0YW5nbGUodG1wUmVjdCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdUZW1wQ2FudmFzUmVjdGFuZ2xlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgbGV0IHJlY3RhbmdsZTogUmVjdGFuZ2xlID0gbnVsbDtcbiAgICBjb25zdCBjbGllbnRYID0gZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICBjbGllbnRZID0gZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICBlbHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChjbGllbnRYLCBjbGllbnRZKSxcbiAgICAgICAgICBlbCA9IGVsc1syXTtcbiAgICBpZiAoKCF0aGlzLmlzRXhjbHVkZVJlY3QoZWxzKSkgJiYgZWwgJiYgdGhpcy5lbENvdWxkQmVIaWdobGlnaHRlZC5pbmRleE9mKGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcbiAgICAgIHJlY3RhbmdsZSA9IG5ldyBSZWN0YW5nbGUoKTtcbiAgICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMuZHJhd0NhbnZhcy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24ocmVjdGFuZ2xlLCB7XG4gICAgICAgIHN0YXJ0WDogcmVjdC5sZWZ0LFxuICAgICAgICBzdGFydFk6IHJlY3QudG9wLFxuICAgICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICAgICAgY29sb3I6IHRoaXMuZHJhd0NvbG9yXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZHJhd1JlY3RhbmdsZShyZWN0YW5nbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYXdDYW52YXMuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7XG4gICAgfVxuICAgIHJldHVybiByZWN0YW5nbGU7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VSZWN0KGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnJlY3RhbmdsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLmRyYXdQZXJzaXN0Q2FudmFzUmVjdGFuZ2xlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0V4Y2x1ZGVSZWN0KGVsZW1lbnRzOiBFbGVtZW50W10pOiBib29sZWFuIHtcbiAgICBjb25zdCByZXN1bHQgPSBlbGVtZW50cy5zb21lKCBlbCA9PiB7XG4gICAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCdleGNsdWRlLXJlY3QnKSA9PT0gJ3RydWUnO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJkaWFsb2dcIiAqbmdJZj1cIiFzaG93VG9vbGJhclwiIGRhdGEtaHRtbDJjYW52YXMtaWdub3JlPVwidHJ1ZVwiPlxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nLXRpdGxlXCI+XG4gICAgPGRpdiBjbGFzcz1cInRpdGxlLWZvbnRcIj5cbiAgICAgIHt7dmFyc1sndGl0bGUnXX19XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWNvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24tdGlwc1wiPlxuICAgICAgPGRpdiAqbmdJZj1cImZlZWRiYWNrLmRlc2NyaXB0aW9uPT0nJ1wiPnt7dmFyc1sncGxhY2Vob2xkZXInXX19PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHRleHRhcmVhXG4gICAgICBhdXRvZm9jdXNcbiAgICAgIGNsYXNzPVwiZGVzY3JpcHRpb25cIlxuICAgICAgWyhuZ01vZGVsKV09XCJmZWVkYmFjay5kZXNjcmlwdGlvblwiXG4gICAgPjwvdGV4dGFyZWE+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2NyZWVuc2hvdC1jaGVja2JveFwiPlxuICAgIDxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJpbmNsdWRlU2NyZWVuc2hvdFwiIChjaGFuZ2UpPVwiaXNJbmNsdWRlU2NyZWVuc2hvdCgpXCI+e3t2YXJzWydjaGVja2JveExhYmVsJ119fTwvbWF0LWNoZWNrYm94PlxuICA8L2Rpdj5cblxuICA8ZGl2ICNzY3JlZW5zaG90UGFyZW50IGNsYXNzPVwic2NyZWVuc2hvdC1jb250ZW50XCIgKGNsaWNrKT1cImV4cGFuZERyYXdpbmdCb2FyZCgpXCIgKm5nSWY9XCJpbmNsdWRlU2NyZWVuc2hvdFwiPlxuICAgIDxtYXQtc3Bpbm5lciBjbGFzcz1cImxvYWRpbmdcIiBbZGlhbWV0ZXJdPVwiMzBcIiA+PC9tYXQtc3Bpbm5lcj5cbiAgICA8ZGl2PjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzY3JlZW5zaG90LXRpcHNcIiAqbmdJZj1cIiFzaG93U3Bpbm5lclwiPlxuICAgICAgPHN2ZyBmb2N1c2FibGU9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk0yMSAxN2gtMi41OGwyLjUxIDIuNTZjLS4xOC42OS0uNzMgMS4yNi0xLjQxIDEuNDRMMTcgMTguNVYyMWgtMnYtNmg2djJ6TTE5IDdoMnYyaC0yVjd6bTItMmgtMlYzLjA4YzEuMSAwIDIgLjkyIDIgMS45MnptLTYtMmgydjJoLTJWM3ptNCA4aDJ2MmgtMnYtMnpNOSAyMUg3di0yaDJ2MnpNNSA5SDNWN2gydjJ6bTAtNS45MlY1SDNjMC0xIDEtMS45MiAyLTEuOTJ6TTUgMTdIM3YtMmgydjJ6TTkgNUg3VjNoMnYyem00IDBoLTJWM2gydjJ6bTAgMTZoLTJ2LTJoMnYyem0tOC04SDN2LTJoMnYyem0wIDguMDhDMy45IDIxLjA4IDMgMjAgMyAxOWgydjIuMDh6XCI+PC9wYXRoPlxuICAgICAgPC9zdmc+XG4gICAgICA8c3BhbiBjbGFzcz1cInNjcmVlbnNob3QtdGlwcy1jb250ZW50XCI+e3t2YXJzWydlZGl0VGlwJ119fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPG1hdC1kaWFsb2ctYWN0aW9ucyBjbGFzcz1cImRpYWxvZy1hY3Rpb25zXCIgYWxpZ249XCJlbmRcIj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImRpYWxvZ1JlZi5jbG9zZSgpXCIgY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCI+e3t2YXJzWydjYW5jZWxMYWJlbCddfX08L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImRpYWxvZ1JlZi5jbG9zZSh0cnVlKVwiIGNsYXNzPVwic3VibWl0LWJ1dHRvbiBhY3Rpb24tYnV0dG9uXCI+e3t2YXJzWydzZW5kTGFiZWwnXX19PC9idXR0b24+XG4gIDwvbWF0LWRpYWxvZy1hY3Rpb25zPlxuPC9kaXY+XG48ZGl2ICpuZ0lmPVwic2hvd1Rvb2xiYXJcIiBkYXRhLWh0bWwyY2FudmFzLWlnbm9yZT1cInRydWVcIj5cbiAgPGRpdiBjbGFzcz1cInRvb2xiYXItdGlwc1wiICpuZ0lmPVwic2hvd1Rvb2xiYXJUaXBzXCI+XG4gICAge3t2YXJzWydkcmF3UmVjdFRpcCddfX1cbiAgPC9kaXY+XG5cbiAgPGZlZWRiYWNrLXRvb2xiYXIgW2RyYXdDb2xvcl09XCJkcmF3Q29sb3JcIiAobWFuaXB1bGF0ZSk9XCJtYW5pcHVsYXRlKCRldmVudClcIj48L2ZlZWRiYWNrLXRvb2xiYXI+XG48L2Rpdj5cbjxkaXYgKm5nRm9yPVwibGV0IHJlY3RhbmdsZSBvZiByZWN0YW5nbGVzOyBpbmRleCBhcyBpbmRleFwiID5cbiAgICA8ZmVlZGJhY2stcmVjdGFuZ2xlIFtyZWN0YW5nbGVdPVwicmVjdGFuZ2xlXCIgW25vSG92ZXJdPVwiIXNob3dUb29sYmFyIHx8IGlzRHJhd2luZ1JlY3RcIiAoY2xvc2UpPVwiY2xvc2VSZWN0KGluZGV4KVwiPlxuICAgIDwvZmVlZGJhY2stcmVjdGFuZ2xlPlxuPC9kaXY+XG48Y2FudmFzIGlkPVwiZHJhdy1jYW52YXNcIiBjbGFzcz1cImRyYXdDYW52YXNcIiBbbmdDbGFzc109XCJ7J3BvaW50ZXJDdXJzb3InOiAhc2hvd1Rvb2xiYXJ9XCI+PC9jYW52YXM+XG4iXX0=