import { Component, ViewChild, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil, finalize, map, mergeMap } from 'rxjs/operators';
import { Feedback } from '../entity/feedback';
import { Rectangle } from '../entity/rectangle';
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
    i0.ɵɵlistener("close", function FeedbackDialogComponent_div_2_Template_feedback_rectangle_close_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r21); const index_r19 = restoredCtx.index; const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.closeRect(index_r19); });
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
FeedbackDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeedbackDialogComponent, selectors: [["feedback-dialog"]], viewQuery: function FeedbackDialogComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
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
    } }, directives: [i3.NgIf, i3.NgForOf, i3.NgClass, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.MatCheckbox, i1.MatDialogActions, i6.MatButton, i7.MatSpinner, i8.FeedbackToolbarComponent, i9.FeedbackRectangleComponent], styles: [".dialog[_ngcontent-%COMP%]{z-index:1000;position:relative;width:360px;background-color:#fff}.dialog-title[_ngcontent-%COMP%]{background-color:#607d8b;color:#fff;height:56px}.title-font[_ngcontent-%COMP%]{color:#fff;float:left;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:20px;line-height:56px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;padding:0 16px;margin:0}.dialog-content[_ngcontent-%COMP%]{display:-webkit-flex;flex-grow:1;height:200px;position:relative}.description[_ngcontent-%COMP%]{border:none;box-sizing:border-box;box-shadow:none;color:#212121;flex-grow:1;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:16px;line-height:normal;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;max-width:100%;outline:none;padding:18px 16px 0;resize:none;width:100%;height:inherit}.description-tips[_ngcontent-%COMP%]{color:#bdbdbd;display:block;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:16px;line-height:normal;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;left:0px;position:absolute;padding:18px 16px 0;right:0px}.screenshot-checkbox[_ngcontent-%COMP%]{padding:0 16px;background-color:#f8f8f8;height:40px;display:flex;flex-direction:column;justify-content:center}.screenshot-content[_ngcontent-%COMP%]{border:none;cursor:pointer;text-align:center;display:block;position:relative;padding:0;overflow:hidden;height:192px;width:100%;background:rgb(237,237,237) none}.screenshot-tips[_ngcontent-%COMP%]{align-items:center;background-color:#f8f8f899;border-radius:4px;box-sizing:border-box;display:-webkit-flex;flex-direction:column;justify-content:center;min-height:112px;width:224px;z-index:5;position:absolute;top:50%;right:0;bottom:0;left:0;transform:translateY(-50%);margin:0 auto}.screenshot-content[_ngcontent-%COMP%]:hover   .screenshot-tips[_ngcontent-%COMP%]{background-color:#f8f8f8cc}.screenshot-content[_ngcontent-%COMP%]:hover   .screenshot-tips-content[_ngcontent-%COMP%]{color:#4285f4}.screenshot-content[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{color:#4285f4;fill:currentColor}.screenshot-tips[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#757575;fill:currentColor;height:48px;width:48px}.screenshot-tips-content[_ngcontent-%COMP%]{color:#757575;font-weight:400;font-size:14px;line-height:20px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin-top:12px}.dialog-actions[_ngcontent-%COMP%]{border-top:1px solid rgb(224,224,224)}.submit-button[_ngcontent-%COMP%]{margin-right:8px!important;margin-left:5px!important;color:#4285f4}.action-button[_ngcontent-%COMP%]{font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:500;font-stretch:normal;font-size:14px;height:35px;line-height:normal;margin:10px 0;padding:0 8px;position:relative;min-width:75px}.loading[_ngcontent-%COMP%]{margin:0 auto;position:absolute;top:45%;bottom:0;left:0;right:0}.mat-dialog-actions[_ngcontent-%COMP%]{padding:0!important}  .feedbackDialog .mat-dialog-container{padding:0;overflow:visible;background-color:#fff0;box-shadow:none;box-shadow:initial}.toolbar-tips[_ngcontent-%COMP%]{background-color:#fff9;border-radius:12px;color:#757575;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:34px;line-height:40px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin-bottom:72px;padding:22px 0;text-align:center;visibility:visible;width:656px;height:auto;-webkit-animation:cssAnimation 0s ease-in 5s forwards;animation:cssAnimation 0s ease-in 5s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.drawCanvas[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:-1;margin:0 auto;cursor:crosshair}.pointerCursor[_ngcontent-%COMP%]{cursor:default!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeedbackDialogComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2stZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWZlZWRiYWNrL3NyYy9saWIvZmVlZGJhY2stZGlhbG9nL2ZlZWRiYWNrLWRpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1mZWVkYmFjay9zcmMvbGliL2ZlZWRiYWNrLWRpYWxvZy9mZWVkYmFjay1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsU0FBUyxFQUFpQyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUE0QixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNHMUMsMkJBQXNDO0lBQUEsWUFBdUI7SUFBQSxpQkFBTTs7O0lBQTdCLGVBQXVCO0lBQXZCLGdEQUF1Qjs7O0lBZS9ELCtCQUFrRDtJQUNoRCxtQkFBeUQ7SUFBekQsK0JBQXlEO0lBQ3ZELDJCQUN3VTtJQUMxVSxpQkFBTTtJQUNOLG9CQUFzQztJQUF0QyxnQ0FBc0M7SUFBQSxZQUFtQjtJQUFBLGlCQUFPO0lBQ2xFLGlCQUFNOzs7SUFEa0MsZUFBbUI7SUFBbkIsNENBQW1COzs7O0lBUjdELG1DQUEyRztJQUF6RCx3TUFBOEI7SUFDOUUsa0NBQTREO0lBQzVELHNCQUFXO0lBQ1gsc0ZBTU07SUFDUixpQkFBTTs7O0lBVHlCLGVBQWU7SUFBZiw2QkFBZTtJQUVkLGVBQWtCO0lBQWxCLDBDQUFrQjs7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YjNDLHlFQW9DTTtRQUNOLHdFQU1NO1FBQ04sd0VBR007UUFDTiw0QkFBaUc7O1FBaEQ1RSx1Q0FBa0I7UUFxQ2pDLGVBQWlCO1FBQWpCLHNDQUFpQjtRQU9JLGVBQWU7UUFBZix3Q0FBZTtRQUlFLGVBQTJDO1FBQTNDLHNFQUEyQzs7dUZEbkMxRSx1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DO3NKQVdRLGdCQUFnQjtrQkFEdEIsU0FBUzttQkFBQyxrQkFBa0I7WUE2RHRCLHNCQUFzQjtrQkFENUIsWUFBWTttQkFBQyx5QkFBeUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBmaW5hbGl6ZSwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBGZWVkYmFjayB9IGZyb20gJy4uL2VudGl0eS9mZWVkYmFjayc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuLi9lbnRpdHkvcmVjdGFuZ2xlJztcbmltcG9ydCB7IEZlZWRiYWNrU2VydmljZSB9IGZyb20gJy4uL2ZlZWRiYWNrLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmZWVkYmFjay1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmVlZGJhY2stZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmVlZGJhY2stZGlhbG9nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGZWVkYmFja0RpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgc2hvd1Rvb2xiYXIgPSBmYWxzZTtcbiAgcHVibGljIHZhcnM6IG9iamVjdCA9IHt9O1xuICBwdWJsaWMgZmVlZGJhY2sgPSBuZXcgRmVlZGJhY2soKTtcbiAgcHVibGljIGluY2x1ZGVTY3JlZW5zaG90OiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIHNob3dTcGlubmVyID0gdHJ1ZTtcbiAgcHVibGljIHNjcmVlbnNob3RFbGU6IEhUTUxFbGVtZW50O1xuICBwdWJsaWMgZHJhd0NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHB1YmxpYyBzaG93VG9vbGJhclRpcHM6IGJvb2xlYW4gPSB0cnVlO1xuICBAVmlld0NoaWxkKCdzY3JlZW5zaG90UGFyZW50JylcbiAgcHVibGljIHNjcmVlbnNob3RQYXJlbnQ6IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyBkcmF3Q29sb3I6IHN0cmluZyA9IHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmhpZ2hsaWdodGVkQ29sb3I7XG4gIHB1YmxpYyByZWN0YW5nbGVzOiBSZWN0YW5nbGVbXSA9IFtdO1xuICBwcml2YXRlIHNjcm9sbFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xuICBwcml2YXRlIHNjcm9sbEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gIHByaXZhdGUgZWxDb3VsZEJlSGlnaGxpZ2h0ZWQgPSBbJ2J1dHRvbicsICdhJywgJ3NwYW4nLCAnZW0nLCAnaScsICdoMScsICdoMicsICdoMycsICdoNCcsXG4gICAgJ2g1JywgJ2g2JywgJ3AnLCAnc3Ryb25nJywgJ3NtYWxsJywgJ3N1YicsICdzdXAnLCAnYicsICd0aW1lJywgJ2ltZycsXG4gICAgJ3ZpZGVvJywgJ2lucHV0JywgJ2xhYmVsJywgJ3NlbGVjdCcsICd0ZXh0YXJlYScsICdhcnRpY2xlJywgJ3N1bW1hcnknLCAnc2VjdGlvbiddO1xuICAvLyB0aGUgZmxhZyBmaWVsZCAnaXNNYW51YWxseURyYXdSZWN0JyB0byBzb2x2ZSBjb25mbGljdCBiZXR3ZWVuIG1hbnVhbGx5IGRyYXcgYW5kIGF1dG8gZHJhd1xuICBwcml2YXRlIG1hbnVhbGx5RHJhd1JlY3QkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgYXV0b0RyYXdSZWN0JDogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgaXNEcmF3aW5nUmVjdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxGZWVkYmFja0RpYWxvZ0NvbXBvbmVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgZmVlZGJhY2tTZXJ2aWNlOiBGZWVkYmFja1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5mZWVkYmFjayA9IG5ldyBGZWVkYmFjaygpO1xuICAgIHRoaXMuZmVlZGJhY2suZGVzY3JpcHRpb24gPSAnJztcbiAgICB0aGlzLnZhcnMgPSB0aGlzLmZlZWRiYWNrU2VydmljZS5pbml0aWFsVmFyaWFibGVzO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5zY3JlZW5zaG90Q2FudmFzJC5zdWJzY3JpYmUoKGNhbnZhcykgPT4ge1xuICAgICAgdGhpcy5zaG93U3Bpbm5lciA9IGZhbHNlO1xuICAgICAgdGhpcy5mZWVkYmFjay5zY3JlZW5zaG90ID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG4gICAgICB0aGlzLnNjcmVlbnNob3RFbGUgPSB0aGlzLmZlZWRiYWNrU2VydmljZS5nZXRJbWdFbGUoY2FudmFzKTtcbiAgICAgIHRoaXMuYXBwZW5kU2NyZWVuc2hvdCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2UuaXNEcmFnZ2luZ1Rvb2xiYXIkLnN1YnNjcmliZSgoaXNEcmFnZ2luZykgPT4ge1xuICAgICAgaWYgKGlzRHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95Q2FudmFzTGlzdGVuZXJzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZENhbnZhc0xpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHNlbmROb3cpID0+IHtcbiAgICAgIGlmIChzZW5kTm93ID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLnNldEZlZWRiYWNrKHRoaXMuZmVlZGJhY2spO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLnNob3dCYWNrRHJvcCgpO1xuICB9XG5cbiAgcHVibGljIGV4cGFuZERyYXdpbmdCb2FyZCgpIHtcbiAgICB0aGlzLnNob3dUb29sYmFyID0gdHJ1ZTtcbiAgICBpZiAoIXRoaXMuZHJhd0NhbnZhcykge1xuICAgICAgdGhpcy5kZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLmluaXRCYWNrZ3JvdW5kQ2FudmFzKCk7XG4gICAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5oaWRlQmFja0Ryb3AoKTtcbiAgICB9XG4gICAgdGhpcy5hZGRDYW52YXNMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kcmF3Q2FudmFzKTtcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5oaWRlQmFja0Ryb3AoKTtcbiAgICBjb25zb2xlLmxvZygnZXhwYW5kIHRoZSBib2FyZCcpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bi5lc2NhcGUnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25Fc2NhcGVLZXlEb3duSGFuZGxlcihldnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLnNob3dUb29sYmFyID0gZmFsc2U7XG4gICAgdGhpcy5pbmNsdWRlU2NyZWVuc2hvdCA9IHRydWU7XG4gICAgdGhpcy5kZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoJ2tleSBkb3duIGVzYyB0byBjbG9zZScpO1xuICB9XG5cbiAgcHVibGljIG1hbmlwdWxhdGUobWFuaXB1bGF0aW9uOiBzdHJpbmcpIHtcbiAgICBpZiAobWFuaXB1bGF0aW9uID09PSAnZG9uZScpIHtcbiAgICAgIHRoaXMuc2hvd1Rvb2xiYXJUaXBzID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dTcGlubmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGVzdHJveUNhbnZhc0xpc3RlbmVycygpO1xuICAgICAgdGhpcy5zaG93VG9vbGJhciA9IGZhbHNlO1xuICAgICAgdGhpcy5kZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5pbml0U2NyZWVuc2hvdENhbnZhcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXJ0RHJhdyhtYW5pcHVsYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGFydERyYXcoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuZHJhd0NvbG9yID0gY29sb3I7XG4gIH1cblxuICBwdWJsaWMgaXNJbmNsdWRlU2NyZWVuc2hvdCgpIHtcbiAgICBpZiAodGhpcy5pbmNsdWRlU2NyZWVuc2hvdCkge1xuICAgICAgdGhpcy5kZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLnNob3dTcGlubmVyID0gZmFsc2U7XG4gICAgICB0aGlzLmFwcGVuZFNjcmVlbnNob3QoKTtcbiAgICAgIHRoaXMuZmVlZGJhY2suc2NyZWVuc2hvdCA9IHRoaXMuc2NyZWVuc2hvdEVsZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdGhpcy5mZWVkYmFja1snc2NyZWVuc2hvdCddO1xuICAgICAgdGhpcy5zaG93U3Bpbm5lciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBlbmRTY3JlZW5zaG90KCkge1xuICAgIGlmICh0aGlzLnNjcmVlbnNob3RQYXJlbnQpIHsgdGhpcy5zY3JlZW5zaG90UGFyZW50Lm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zY3JlZW5zaG90RWxlKTsgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0QmFja2dyb3VuZENhbnZhcygpIHtcbiAgICB0aGlzLmRyYXdDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhdy1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAvLyBUaGUgY2FudmFzIHRvIGRyYXcsIG11c3QgdXNlIHRoaXMgd2F5IHRvIGluaXRpYWwgdGhlIGhlaWdodCBhbmQgd2lkdGhcbiAgICB0aGlzLmRyYXdDYW52YXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zY3JvbGxIZWlnaHQgKyAnJztcbiAgICB0aGlzLmRyYXdDYW52YXMuc3R5bGUud2lkdGggPSB0aGlzLnNjcm9sbFdpZHRoICsgJyc7XG4gICAgdGhpcy5kcmF3Q2FudmFzLmhlaWdodCA9IHRoaXMuc2Nyb2xsSGVpZ2h0O1xuICAgIHRoaXMuZHJhd0NhbnZhcy53aWR0aCA9IHRoaXMuc2Nyb2xsV2lkdGg7XG4gICAgdGhpcy5kcmF3Q29udGFpbmVyUmVjdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3Q29udGFpbmVyUmVjdCgpIHtcbiAgICBjb25zdCBkcmF3Q29udGV4dCA9IHRoaXMuZHJhd0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpLFxuICAgICAgd2lkdGggPSB0aGlzLnNjcm9sbFdpZHRoLFxuICAgICAgaGVpZ2h0ID0gdGhpcy5zY3JvbGxIZWlnaHQ7XG4gICAgZHJhd0NvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgZHJhd0NvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMC4zKSc7XG4gICAgZHJhd0NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGRyYXdDb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpOyAvLyBkcmF3IHRoZSByZWN0YW5nbGVcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1JlY3RhbmdsZShyZWN0OiBSZWN0YW5nbGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5kcmF3Q2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5saW5lSm9pbiA9ICdyb3VuZCc7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBpZiAocmVjdC5jb2xvciA9PT0gdGhpcy5mZWVkYmFja1NlcnZpY2UuaGlkZGVuQ29sb3IpIHtcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMzEsIDMxLCAzMSwgMC43NSknO1xuICAgICAgY29udGV4dC5maWxsUmVjdChyZWN0LnN0YXJ0WCwgcmVjdC5zdGFydFksIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICAgIGNvbnRleHQucmVjdChyZWN0LnN0YXJ0WCwgcmVjdC5zdGFydFksIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5jbGVhclJlY3QocmVjdC5zdGFydFgsIHJlY3Quc3RhcnRZLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDU7XG4gICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcmVjdC5jb2xvcjtcbiAgICAgIGNvbnRleHQucmVjdChyZWN0LnN0YXJ0WCwgcmVjdC5zdGFydFksIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdChyZWN0LnN0YXJ0WCwgcmVjdC5zdGFydFksIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICAgIHRoaXMucmVjdGFuZ2xlcy5mb3JFYWNoKHRtcFJlY3QgPT4ge1xuICAgICAgICBpZiAodG1wUmVjdC5jb2xvciA9PT0gdGhpcy5mZWVkYmFja1NlcnZpY2UuaGlnaGxpZ2h0ZWRDb2xvcikge1xuICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KHRtcFJlY3Quc3RhcnRYLCB0bXBSZWN0LnN0YXJ0WSwgdG1wUmVjdC53aWR0aCwgdG1wUmVjdC5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZENhbnZhc0xpc3RlbmVycygpOiB2b2lkIHtcbiAgICBjb25zdCBtb3VzZVVwID0gZnJvbUV2ZW50KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJ21vdXNldXAnKSxcbiAgICAgICAgICBtb3VzZU1vdmUgPSBmcm9tRXZlbnQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnbW91c2Vtb3ZlJyksXG4gICAgICAgICAgbW91c2VEb3duID0gZnJvbUV2ZW50KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJ21vdXNlZG93bicpLFxuICAgICAgICAgIHNjcm9sbCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKTtcblxuICAgIHRoaXMubWFudWFsbHlEcmF3UmVjdChtb3VzZURvd24sIG1vdXNlTW92ZSwgbW91c2VVcCk7XG4gICAgdGhpcy5hdXRvRHJhd1JlY3QobW91c2VNb3ZlKTtcbiAgICB0aGlzLmNoYW5nZVJlY3RQb3NpdGlvbihzY3JvbGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VSZWN0UG9zaXRpb24oc2Nyb2xsOiBPYnNlcnZhYmxlPEV2ZW50Pikge1xuICAgIHNjcm9sbC5zdWJzY3JpYmUoXG4gICAgICBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXaW5kb3dTY3JvbGxYID0gd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgIGN1cnJlbnRXaW5kb3dTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgIHRoaXMucmVjdGFuZ2xlcy5mb3JFYWNoKHJlY3QgPT4ge1xuICAgICAgICAgIHJlY3Quc3RhcnRZID0gcmVjdC5zdGFydFkgLSAoY3VycmVudFdpbmRvd1Njcm9sbFkgLSByZWN0LndpbmRvd1Njcm9sbFkpO1xuICAgICAgICAgIHJlY3Quc3RhcnRYID0gcmVjdC5zdGFydFggLSAoY3VycmVudFdpbmRvd1Njcm9sbFggLSByZWN0LndpbmRvd1Njcm9sbFgpO1xuICAgICAgICAgIHJlY3Qud2luZG93U2Nyb2xsWSA9IGN1cnJlbnRXaW5kb3dTY3JvbGxZO1xuICAgICAgICAgIHJlY3Qud2luZG93U2Nyb2xsWCA9IGN1cnJlbnRXaW5kb3dTY3JvbGxYO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kcmF3UGVyc2lzdENhbnZhc1JlY3RhbmdsZXMoKTtcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3lDYW52YXNMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWFudWFsbHlEcmF3UmVjdCQpIHsgdGhpcy5tYW51YWxseURyYXdSZWN0JC51bnN1YnNjcmliZSgpOyB9XG4gICAgaWYgKHRoaXMuYXV0b0RyYXdSZWN0JCkgeyB0aGlzLmF1dG9EcmF3UmVjdCQudW5zdWJzY3JpYmUoKTsgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYW51YWxseURyYXdSZWN0KG1vdXNlRG93bjogT2JzZXJ2YWJsZTxFdmVudD4sIG1vdXNlTW92ZTogT2JzZXJ2YWJsZTxFdmVudD4sIG1vdXNlVXA6IE9ic2VydmFibGU8RXZlbnQ+KTogdm9pZCB7XG4gICAgY29uc3QgbW91c2VEcmFnID0gbW91c2VEb3duLnBpcGUobWVyZ2VNYXAoKG1vdXNlRG93bkV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5zaG93VG9vbGJhclRpcHMpIHsgdGhpcy5zaG93VG9vbGJhclRpcHMgPSBmYWxzZTsgfVxuICAgICAgdGhpcy5hdXRvRHJhd1JlY3QkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmlzRHJhd2luZ1JlY3QgPSB0cnVlO1xuXG4gICAgICBjb25zdCBuZXdSZWN0YW5nbGUgPSBuZXcgUmVjdGFuZ2xlKCk7XG4gICAgICBuZXdSZWN0YW5nbGUuc3RhcnRYID0gbW91c2VEb3duRXZlbnQuY2xpZW50WDtcbiAgICAgIG5ld1JlY3RhbmdsZS5zdGFydFkgPSBtb3VzZURvd25FdmVudC5jbGllbnRZO1xuICAgICAgbmV3UmVjdGFuZ2xlLmNvbG9yID0gdGhpcy5kcmF3Q29sb3I7XG5cbiAgICAgIHJldHVybiBtb3VzZU1vdmUucGlwZShcbiAgICAgICAgbWFwKChtb3VzZU1vdmVFdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgIG5ld1JlY3RhbmdsZS53aWR0aCA9IG1vdXNlTW92ZUV2ZW50LmNsaWVudFggLSBtb3VzZURvd25FdmVudC5jbGllbnRYO1xuICAgICAgICAgIG5ld1JlY3RhbmdsZS5oZWlnaHQgPSBtb3VzZU1vdmVFdmVudC5jbGllbnRZIC0gbW91c2VEb3duRXZlbnQuY2xpZW50WTtcbiAgICAgICAgICByZXR1cm4gbmV3UmVjdGFuZ2xlO1xuICAgICAgICB9KSxcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgIC8vIGNsaWNrIHRvIGRyYXcgcmVjdGFuZ2xlXG4gICAgICAgICAgaWYgKG5ld1JlY3RhbmdsZS53aWR0aCA9PT0gdW5kZWZpbmVkIHx8IG5ld1JlY3RhbmdsZS5oZWlnaHQgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgbmV3UmVjdGFuZ2xlLndpZHRoID09PSAwIHx8IG5ld1JlY3RhbmdsZS5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmRyYXdUZW1wQ2FudmFzUmVjdGFuZ2xlKG1vdXNlRG93bkV2ZW50KTtcbiAgICAgICAgICAgIGlmIChyZWN0KSB7IHRoaXMucmVjdGFuZ2xlcy5wdXNoKHJlY3QpOyB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBkcmFnIHRvIGRyYXcgcmVjdGFuZ2xlXG4gICAgICAgICAgICBpZiAobmV3UmVjdGFuZ2xlLmhlaWdodCA8IDApIHtcbiAgICAgICAgICAgICAgbmV3UmVjdGFuZ2xlLnN0YXJ0WSA9IG5ld1JlY3RhbmdsZS5zdGFydFkgKyBuZXdSZWN0YW5nbGUuaGVpZ2h0O1xuICAgICAgICAgICAgICBuZXdSZWN0YW5nbGUuaGVpZ2h0ID0gTWF0aC5hYnMobmV3UmVjdGFuZ2xlLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3UmVjdGFuZ2xlLndpZHRoIDwgMCkge1xuICAgICAgICAgICAgICBuZXdSZWN0YW5nbGUuc3RhcnRYID0gbmV3UmVjdGFuZ2xlLnN0YXJ0WCArIG5ld1JlY3RhbmdsZS53aWR0aDtcbiAgICAgICAgICAgICAgbmV3UmVjdGFuZ2xlLndpZHRoID0gTWF0aC5hYnMobmV3UmVjdGFuZ2xlLndpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlcy5wdXNoKG5ld1JlY3RhbmdsZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZHJhd1BlcnNpc3RDYW52YXNSZWN0YW5nbGVzKCk7XG4gICAgICAgICAgdGhpcy5hdXRvRHJhd1JlY3QobW91c2VNb3ZlKTtcbiAgICAgICAgICB0aGlzLmlzRHJhd2luZ1JlY3QgPSBmYWxzZTtcbiAgICAgICAgfSksXG4gICAgICAgIHRha2VVbnRpbChtb3VzZVVwKSk7XG4gICAgfSkpO1xuXG4gICAgdGhpcy5tYW51YWxseURyYXdSZWN0JCA9IG1vdXNlRHJhZy5zdWJzY3JpYmUoXG4gICAgICAocmVjKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhd1BlcnNpc3RDYW52YXNSZWN0YW5nbGVzKCk7XG4gICAgICAgIHRoaXMuZHJhd1JlY3RhbmdsZShyZWMpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGF1dG9EcmF3UmVjdChtb3VzZU1vdmU6IE9ic2VydmFibGU8RXZlbnQ+KTogdm9pZCB7XG4gICAgdGhpcy5hdXRvRHJhd1JlY3QkID0gbW91c2VNb3ZlLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAobW91c2VNb3ZlRXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5kcmF3UGVyc2lzdENhbnZhc1JlY3RhbmdsZXMoKTtcbiAgICAgICAgdGhpcy5kcmF3VGVtcENhbnZhc1JlY3RhbmdsZShtb3VzZU1vdmVFdmVudCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGVyciA9PiBjb25zb2xlLmVycm9yKCdzb21ldGhpbmcgd3Jvbmcgb2NjdXJyZWQ6ICcgKyBlcnIpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3UGVyc2lzdENhbnZhc1JlY3RhbmdsZXMoKSB7XG4gICAgdGhpcy5kcmF3Q29udGFpbmVyUmVjdCgpO1xuICAgIHRoaXMucmVjdGFuZ2xlcy5mb3JFYWNoKHRtcFJlY3QgPT4ge1xuICAgICAgdGhpcy5kcmF3UmVjdGFuZ2xlKHRtcFJlY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3VGVtcENhbnZhc1JlY3RhbmdsZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGxldCByZWN0YW5nbGU6IFJlY3RhbmdsZSA9IG51bGw7XG4gICAgY29uc3QgY2xpZW50WCA9IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSA9IGV2ZW50LmNsaWVudFksXG4gICAgICAgICAgZWxzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoY2xpZW50WCwgY2xpZW50WSksXG4gICAgICAgICAgZWwgPSBlbHNbMl07XG4gICAgaWYgKCghdGhpcy5pc0V4Y2x1ZGVSZWN0KGVscykpICYmIGVsICYmIHRoaXMuZWxDb3VsZEJlSGlnaGxpZ2h0ZWQuaW5kZXhPZihlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XG4gICAgICByZWN0YW5nbGUgPSBuZXcgUmVjdGFuZ2xlKCk7XG4gICAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLmRyYXdDYW52YXMuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuXG4gICAgICBPYmplY3QuYXNzaWduKHJlY3RhbmdsZSwge1xuICAgICAgICBzdGFydFg6IHJlY3QubGVmdCxcbiAgICAgICAgc3RhcnRZOiByZWN0LnRvcCxcbiAgICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgICAgIGNvbG9yOiB0aGlzLmRyYXdDb2xvclxuICAgICAgfSk7XG4gICAgICB0aGlzLmRyYXdSZWN0YW5nbGUocmVjdGFuZ2xlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3Q2FudmFzLnN0eWxlLmN1cnNvciA9ICdjcm9zc2hhaXInO1xuICAgIH1cbiAgICByZXR1cm4gcmVjdGFuZ2xlO1xuICB9XG5cbiAgcHVibGljIGNsb3NlUmVjdChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5yZWN0YW5nbGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5kcmF3UGVyc2lzdENhbnZhc1JlY3RhbmdsZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFeGNsdWRlUmVjdChlbGVtZW50czogRWxlbWVudFtdKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZWxlbWVudHMuc29tZSggZWwgPT4ge1xuICAgICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgnZXhjbHVkZS1yZWN0JykgPT09ICd0cnVlJztcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZGlhbG9nXCIgKm5nSWY9XCIhc2hvd1Rvb2xiYXJcIiBkYXRhLWh0bWwyY2FudmFzLWlnbm9yZT1cInRydWVcIj5cbiAgPGRpdiBjbGFzcz1cImRpYWxvZy10aXRsZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1mb250XCI+XG4gICAgICB7e3ZhcnNbJ3RpdGxlJ119fVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRpYWxvZy1jb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLXRpcHNcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCJmZWVkYmFjay5kZXNjcmlwdGlvbj09JydcIj57e3ZhcnNbJ3BsYWNlaG9sZGVyJ119fTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDx0ZXh0YXJlYVxuICAgICAgYXV0b2ZvY3VzXG4gICAgICBjbGFzcz1cImRlc2NyaXB0aW9uXCJcbiAgICAgIFsobmdNb2RlbCldPVwiZmVlZGJhY2suZGVzY3JpcHRpb25cIlxuICAgID48L3RleHRhcmVhPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNjcmVlbnNob3QtY2hlY2tib3hcIj5cbiAgICA8bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwiaW5jbHVkZVNjcmVlbnNob3RcIiAoY2hhbmdlKT1cImlzSW5jbHVkZVNjcmVlbnNob3QoKVwiPnt7dmFyc1snY2hlY2tib3hMYWJlbCddfX08L21hdC1jaGVja2JveD5cbiAgPC9kaXY+XG5cbiAgPGRpdiAjc2NyZWVuc2hvdFBhcmVudCBjbGFzcz1cInNjcmVlbnNob3QtY29udGVudFwiIChjbGljayk9XCJleHBhbmREcmF3aW5nQm9hcmQoKVwiICpuZ0lmPVwiaW5jbHVkZVNjcmVlbnNob3RcIj5cbiAgICA8bWF0LXNwaW5uZXIgY2xhc3M9XCJsb2FkaW5nXCIgW2RpYW1ldGVyXT1cIjMwXCIgPjwvbWF0LXNwaW5uZXI+XG4gICAgPGRpdj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2NyZWVuc2hvdC10aXBzXCIgKm5nSWY9XCIhc2hvd1NwaW5uZXJcIj5cbiAgICAgIDxzdmcgZm9jdXNhYmxlPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMjEgMTdoLTIuNThsMi41MSAyLjU2Yy0uMTguNjktLjczIDEuMjYtMS40MSAxLjQ0TDE3IDE4LjVWMjFoLTJ2LTZoNnYyek0xOSA3aDJ2MmgtMlY3em0yLTJoLTJWMy4wOGMxLjEgMCAyIC45MiAyIDEuOTJ6bS02LTJoMnYyaC0yVjN6bTQgOGgydjJoLTJ2LTJ6TTkgMjFIN3YtMmgydjJ6TTUgOUgzVjdoMnYyem0wLTUuOTJWNUgzYzAtMSAxLTEuOTIgMi0xLjkyek01IDE3SDN2LTJoMnYyek05IDVIN1YzaDJ2MnptNCAwaC0yVjNoMnYyem0wIDE2aC0ydi0yaDJ2MnptLTgtOEgzdi0yaDJ2MnptMCA4LjA4QzMuOSAyMS4wOCAzIDIwIDMgMTloMnYyLjA4elwiPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzY3JlZW5zaG90LXRpcHMtY29udGVudFwiPnt7dmFyc1snZWRpdFRpcCddfX08L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxtYXQtZGlhbG9nLWFjdGlvbnMgY2xhc3M9XCJkaWFsb2ctYWN0aW9uc1wiIGFsaWduPVwiZW5kXCI+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJkaWFsb2dSZWYuY2xvc2UoKVwiIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiPnt7dmFyc1snY2FuY2VsTGFiZWwnXX19PC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJkaWFsb2dSZWYuY2xvc2UodHJ1ZSlcIiBjbGFzcz1cInN1Ym1pdC1idXR0b24gYWN0aW9uLWJ1dHRvblwiPnt7dmFyc1snc2VuZExhYmVsJ119fTwvYnV0dG9uPlxuICA8L21hdC1kaWFsb2ctYWN0aW9ucz5cbjwvZGl2PlxuPGRpdiAqbmdJZj1cInNob3dUb29sYmFyXCIgZGF0YS1odG1sMmNhbnZhcy1pZ25vcmU9XCJ0cnVlXCI+XG4gIDxkaXYgY2xhc3M9XCJ0b29sYmFyLXRpcHNcIiAqbmdJZj1cInNob3dUb29sYmFyVGlwc1wiPlxuICAgIHt7dmFyc1snZHJhd1JlY3RUaXAnXX19XG4gIDwvZGl2PlxuXG4gIDxmZWVkYmFjay10b29sYmFyIFtkcmF3Q29sb3JdPVwiZHJhd0NvbG9yXCIgKG1hbmlwdWxhdGUpPVwibWFuaXB1bGF0ZSgkZXZlbnQpXCI+PC9mZWVkYmFjay10b29sYmFyPlxuPC9kaXY+XG48ZGl2ICpuZ0Zvcj1cImxldCByZWN0YW5nbGUgb2YgcmVjdGFuZ2xlczsgaW5kZXggYXMgaW5kZXhcIiA+XG4gICAgPGZlZWRiYWNrLXJlY3RhbmdsZSBbcmVjdGFuZ2xlXT1cInJlY3RhbmdsZVwiIFtub0hvdmVyXT1cIiFzaG93VG9vbGJhciB8fCBpc0RyYXdpbmdSZWN0XCIgKGNsb3NlKT1cImNsb3NlUmVjdChpbmRleClcIj5cbiAgICA8L2ZlZWRiYWNrLXJlY3RhbmdsZT5cbjwvZGl2PlxuPGNhbnZhcyBpZD1cImRyYXctY2FudmFzXCIgY2xhc3M9XCJkcmF3Q2FudmFzXCIgW25nQ2xhc3NdPVwieydwb2ludGVyQ3Vyc29yJzogIXNob3dUb29sYmFyfVwiPjwvY2FudmFzPlxuIl19