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
        i0.ɵɵviewQuery(_c0, 1);
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
    } }, directives: [i3.NgIf, i3.NgForOf, i3.NgClass, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.MatCheckbox, i1.MatDialogActions, i6.MatButton, i7.MatSpinner, i8.FeedbackToolbarComponent, i9.FeedbackRectangleComponent], styles: [".dialog[_ngcontent-%COMP%]{background-color:#fff;position:relative;width:360px;z-index:1000}.dialog-title[_ngcontent-%COMP%]{background-color:#607d8b;color:#fff;height:56px}.title-font[_ngcontent-%COMP%]{color:#fff;float:left;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:20px;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:300;line-height:56px;margin:0;padding:0 16px}.dialog-content[_ngcontent-%COMP%]{display:-webkit-flex;flex-grow:1;height:200px;position:relative}.description[_ngcontent-%COMP%]{border:none;box-shadow:none;box-sizing:border-box;color:#212121;flex-grow:1;height:inherit;max-width:100%;outline:none;resize:none;width:100%}.description[_ngcontent-%COMP%], .description-tips[_ngcontent-%COMP%]{font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:16px;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;line-height:normal;padding:18px 16px 0}.description-tips[_ngcontent-%COMP%]{color:#bdbdbd;display:block;left:0;position:absolute;right:0}.screenshot-checkbox[_ngcontent-%COMP%]{background-color:#f8f8f8;display:flex;flex-direction:column;height:40px;justify-content:center;padding:0 16px}.screenshot-content[_ngcontent-%COMP%]{background:#ededed none;border:none;cursor:pointer;display:block;height:192px;overflow:hidden;padding:0;position:relative;text-align:center;width:100%}.screenshot-tips[_ngcontent-%COMP%]{align-items:center;background-color:hsla(0,0%,97.3%,.6);border-radius:4px;bottom:0;box-sizing:border-box;display:-webkit-flex;flex-direction:column;justify-content:center;left:0;margin:0 auto;min-height:112px;position:absolute;right:0;top:50%;transform:translateY(-50%);width:224px;z-index:5}.screenshot-content[_ngcontent-%COMP%]:hover   .screenshot-tips[_ngcontent-%COMP%]{background-color:hsla(0,0%,97.3%,.8)}.screenshot-content[_ngcontent-%COMP%]:hover   .screenshot-tips-content[_ngcontent-%COMP%]{color:#4285f4}.screenshot-content[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{color:#4285f4;fill:currentColor}.screenshot-tips[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#757575;fill:currentColor;height:48px;width:48px}.screenshot-tips-content[_ngcontent-%COMP%]{color:#757575;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px;margin-top:12px}.dialog-actions[_ngcontent-%COMP%]{border-top:1px solid #e0e0e0}.submit-button[_ngcontent-%COMP%]{color:#4285f4;margin-left:5px!important;margin-right:8px!important}.action-button[_ngcontent-%COMP%]{font-size:14px;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:500;height:35px;line-height:normal;margin:10px 0;min-width:75px;padding:0 8px;position:relative}.loading[_ngcontent-%COMP%]{bottom:0;left:0;margin:0 auto;position:absolute;right:0;top:45%}.mat-dialog-actions[_ngcontent-%COMP%]{padding:0!important}  .feedbackDialog .mat-dialog-container{background-color:hsla(0,0%,100%,0);box-shadow:none;overflow:visible;padding:0}.toolbar-tips[_ngcontent-%COMP%]{-webkit-animation:cssAnimation 0s ease-in 5s forwards;-webkit-animation-fill-mode:forwards;animation:cssAnimation 0s ease-in 5s forwards;animation-fill-mode:forwards;background-color:hsla(0,0%,100%,.6);border-radius:12px;color:#757575;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:34px;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;line-height:40px;margin-bottom:72px;padding:22px 0;text-align:center;visibility:visible;width:656px}@keyframes cssAnimation{to{height:0;overflow:hidden;width:0}}@-webkit-keyframes cssAnimation{to{height:0;visibility:hidden;width:0}}.drawCanvas[_ngcontent-%COMP%]{cursor:crosshair;left:0;margin:0 auto;position:absolute;top:0;z-index:-1}.pointerCursor[_ngcontent-%COMP%]{cursor:default!important}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2stZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWZlZWRiYWNrL3NyYy9saWIvZmVlZGJhY2stZGlhbG9nL2ZlZWRiYWNrLWRpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1mZWVkYmFjay9zcmMvbGliL2ZlZWRiYWNrLWRpYWxvZy9mZWVkYmFjay1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUE0QixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0VoRCwyQkFBc0M7SUFBQSxZQUF1QjtJQUFBLGlCQUFNOzs7SUFBN0IsZUFBdUI7SUFBdkIsZ0RBQXVCOzs7SUFlL0QsK0JBQ0U7SUFBQSxtQkFDRTtJQURGLCtCQUNFO0lBQUEsMkJBQ3dVO0lBQzFVLGlCQUFNO0lBQ04sb0JBQXNDO0lBQXRDLGdDQUFzQztJQUFBLFlBQW1CO0lBQUEsaUJBQU87SUFDbEUsaUJBQU07OztJQURrQyxlQUFtQjtJQUFuQiw0Q0FBbUI7Ozs7SUFSN0QsbUNBQ0U7SUFEZ0Qsd01B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SCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs4RkFoU1UsdUJBQXVCOzREQUF2Qix1QkFBdUI7Ozs7Ozs0SEFBdkIsa0NBQThCOztRQ2IzQyx5RUFvQ007UUFDTix3RUFNTTtRQUNOLHdFQUdNO1FBQ04sNEJBQWlHOztRQWhENUUsdUNBQWtCO1FBcUNqQyxlQUFpQjtRQUFqQixzQ0FBaUI7UUFPSSxlQUFlO1FBQWYsd0NBQWU7UUFJRSxlQUEyQztRQUEzQyxzRUFBMkM7O3VGRG5DMUUsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQztzSkFXUSxnQkFBZ0I7a0JBRHRCLFNBQVM7bUJBQUMsa0JBQWtCO1lBNkR0QixzQkFBc0I7a0JBRDVCLFlBQVk7bUJBQUMseUJBQXlCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgZmluYWxpemUsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgRmVlZGJhY2sgfSBmcm9tICcuLi9lbnRpdHkvZmVlZGJhY2snO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnLi4vZW50aXR5L3JlY3RhbmdsZSc7XG5pbXBvcnQgeyBGZWVkYmFja1NlcnZpY2UgfSBmcm9tICcuLi9mZWVkYmFjay5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmVlZGJhY2stZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZlZWRiYWNrLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZlZWRiYWNrLWRpYWxvZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmVlZGJhY2tEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIHNob3dUb29sYmFyID0gZmFsc2U7XG4gIHB1YmxpYyB2YXJzOiBvYmplY3QgPSB7fTtcbiAgcHVibGljIGZlZWRiYWNrID0gbmV3IEZlZWRiYWNrKCk7XG4gIHB1YmxpYyBpbmNsdWRlU2NyZWVuc2hvdDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBzaG93U3Bpbm5lciA9IHRydWU7XG4gIHB1YmxpYyBzY3JlZW5zaG90RWxlOiBIVE1MRWxlbWVudDtcbiAgcHVibGljIGRyYXdDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwdWJsaWMgc2hvd1Rvb2xiYXJUaXBzOiBib29sZWFuID0gdHJ1ZTtcbiAgQFZpZXdDaGlsZCgnc2NyZWVuc2hvdFBhcmVudCcpXG4gIHB1YmxpYyBzY3JlZW5zaG90UGFyZW50OiBFbGVtZW50UmVmO1xuICBwdWJsaWMgZHJhd0NvbG9yOiBzdHJpbmcgPSB0aGlzLmZlZWRiYWNrU2VydmljZS5oaWdobGlnaHRlZENvbG9yO1xuICBwdWJsaWMgcmVjdGFuZ2xlczogUmVjdGFuZ2xlW10gPSBbXTtcbiAgcHJpdmF0ZSBzY3JvbGxXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aDtcbiAgcHJpdmF0ZSBzY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICBwcml2YXRlIGVsQ291bGRCZUhpZ2hsaWdodGVkID0gWydidXR0b24nLCAnYScsICdzcGFuJywgJ2VtJywgJ2knLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLFxuICAgICdoNScsICdoNicsICdwJywgJ3N0cm9uZycsICdzbWFsbCcsICdzdWInLCAnc3VwJywgJ2InLCAndGltZScsICdpbWcnLFxuICAgICd2aWRlbycsICdpbnB1dCcsICdsYWJlbCcsICdzZWxlY3QnLCAndGV4dGFyZWEnLCAnYXJ0aWNsZScsICdzdW1tYXJ5JywgJ3NlY3Rpb24nXTtcbiAgLy8gdGhlIGZsYWcgZmllbGQgJ2lzTWFudWFsbHlEcmF3UmVjdCcgdG8gc29sdmUgY29uZmxpY3QgYmV0d2VlbiBtYW51YWxseSBkcmF3IGFuZCBhdXRvIGRyYXdcbiAgcHJpdmF0ZSBtYW51YWxseURyYXdSZWN0JDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGF1dG9EcmF3UmVjdCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIGlzRHJhd2luZ1JlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RmVlZGJhY2tEaWFsb2dDb21wb25lbnQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIGZlZWRiYWNrU2VydmljZTogRmVlZGJhY2tTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZmVlZGJhY2sgPSBuZXcgRmVlZGJhY2soKTtcbiAgICB0aGlzLmZlZWRiYWNrLmRlc2NyaXB0aW9uID0gJyc7XG4gICAgdGhpcy52YXJzID0gdGhpcy5mZWVkYmFja1NlcnZpY2UuaW5pdGlhbFZhcmlhYmxlcztcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2Uuc2NyZWVuc2hvdENhbnZhcyQuc3Vic2NyaWJlKChjYW52YXMpID0+IHtcbiAgICAgIHRoaXMuc2hvd1NwaW5uZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuZmVlZGJhY2suc2NyZWVuc2hvdCA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuICAgICAgdGhpcy5zY3JlZW5zaG90RWxlID0gdGhpcy5mZWVkYmFja1NlcnZpY2UuZ2V0SW1nRWxlKGNhbnZhcyk7XG4gICAgICB0aGlzLmFwcGVuZFNjcmVlbnNob3QoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmlzRHJhZ2dpbmdUb29sYmFyJC5zdWJzY3JpYmUoKGlzRHJhZ2dpbmcpID0+IHtcbiAgICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveUNhbnZhc0xpc3RlbmVycygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRDYW52YXNMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChzZW5kTm93KSA9PiB7XG4gICAgICBpZiAoc2VuZE5vdyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5zZXRGZWVkYmFjayh0aGlzLmZlZWRiYWNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5zaG93QmFja0Ryb3AoKTtcbiAgfVxuXG4gIHB1YmxpYyBleHBhbmREcmF3aW5nQm9hcmQoKSB7XG4gICAgdGhpcy5zaG93VG9vbGJhciA9IHRydWU7XG4gICAgaWYgKCF0aGlzLmRyYXdDYW52YXMpIHtcbiAgICAgIHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5pbml0QmFja2dyb3VuZENhbnZhcygpO1xuICAgICAgdGhpcy5mZWVkYmFja1NlcnZpY2UuaGlkZUJhY2tEcm9wKCk7XG4gICAgfVxuICAgIHRoaXMuYWRkQ2FudmFzTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZHJhd0NhbnZhcyk7XG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2UuaGlkZUJhY2tEcm9wKCk7XG4gICAgY29uc29sZS5sb2coJ2V4cGFuZCB0aGUgYm9hcmQnKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24uZXNjYXBlJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRXNjYXBlS2V5RG93bkhhbmRsZXIoZXZ0OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5zaG93VG9vbGJhciA9IGZhbHNlO1xuICAgIHRoaXMuaW5jbHVkZVNjcmVlbnNob3QgPSB0cnVlO1xuICAgIHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCdrZXkgZG93biBlc2MgdG8gY2xvc2UnKTtcbiAgfVxuXG4gIHB1YmxpYyBtYW5pcHVsYXRlKG1hbmlwdWxhdGlvbjogc3RyaW5nKSB7XG4gICAgaWYgKG1hbmlwdWxhdGlvbiA9PT0gJ2RvbmUnKSB7XG4gICAgICB0aGlzLnNob3dUb29sYmFyVGlwcyA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93U3Bpbm5lciA9IHRydWU7XG4gICAgICB0aGlzLmRlc3Ryb3lDYW52YXNMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuc2hvd1Rvb2xiYXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5mZWVkYmFja1NlcnZpY2UuaW5pdFNjcmVlbnNob3RDYW52YXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGFydERyYXcobWFuaXB1bGF0aW9uKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhcnREcmF3KGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRyYXdDb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgcHVibGljIGlzSW5jbHVkZVNjcmVlbnNob3QoKSB7XG4gICAgaWYgKHRoaXMuaW5jbHVkZVNjcmVlbnNob3QpIHtcbiAgICAgIHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5zaG93U3Bpbm5lciA9IGZhbHNlO1xuICAgICAgdGhpcy5hcHBlbmRTY3JlZW5zaG90KCk7XG4gICAgICB0aGlzLmZlZWRiYWNrLnNjcmVlbnNob3QgPSB0aGlzLnNjcmVlbnNob3RFbGUuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHRoaXMuZmVlZGJhY2tbJ3NjcmVlbnNob3QnXTtcbiAgICAgIHRoaXMuc2hvd1NwaW5uZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwZW5kU2NyZWVuc2hvdCgpIHtcbiAgICBpZiAodGhpcy5zY3JlZW5zaG90UGFyZW50KSB7IHRoaXMuc2NyZWVuc2hvdFBhcmVudC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc2NyZWVuc2hvdEVsZSk7IH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdEJhY2tncm91bmRDYW52YXMoKSB7XG4gICAgdGhpcy5kcmF3Q2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXctY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgLy8gVGhlIGNhbnZhcyB0byBkcmF3LCBtdXN0IHVzZSB0aGlzIHdheSB0byBpbml0aWFsIHRoZSBoZWlnaHQgYW5kIHdpZHRoXG4gICAgdGhpcy5kcmF3Q2FudmFzLnN0eWxlLmhlaWdodCA9IHRoaXMuc2Nyb2xsSGVpZ2h0ICsgJyc7XG4gICAgdGhpcy5kcmF3Q2FudmFzLnN0eWxlLndpZHRoID0gdGhpcy5zY3JvbGxXaWR0aCArICcnO1xuICAgIHRoaXMuZHJhd0NhbnZhcy5oZWlnaHQgPSB0aGlzLnNjcm9sbEhlaWdodDtcbiAgICB0aGlzLmRyYXdDYW52YXMud2lkdGggPSB0aGlzLnNjcm9sbFdpZHRoO1xuICAgIHRoaXMuZHJhd0NvbnRhaW5lclJlY3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd0NvbnRhaW5lclJlY3QoKSB7XG4gICAgY29uc3QgZHJhd0NvbnRleHQgPSB0aGlzLmRyYXdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgIHdpZHRoID0gdGhpcy5zY3JvbGxXaWR0aCxcbiAgICAgIGhlaWdodCA9IHRoaXMuc2Nyb2xsSGVpZ2h0O1xuICAgIGRyYXdDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGRyYXdDb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuMyknO1xuICAgIGRyYXdDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBkcmF3Q29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTsgLy8gZHJhdyB0aGUgcmVjdGFuZ2xlXG4gIH1cblxuICBwcml2YXRlIGRyYXdSZWN0YW5nbGUocmVjdDogUmVjdGFuZ2xlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZHJhd0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnRleHQubGluZUpvaW4gPSAncm91bmQnO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgaWYgKHJlY3QuY29sb3IgPT09IHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmhpZGRlbkNvbG9yKSB7XG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDMxLCAzMSwgMzEsIDAuNzUpJztcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QocmVjdC5zdGFydFgsIHJlY3Quc3RhcnRZLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICBjb250ZXh0LnJlY3QocmVjdC5zdGFydFgsIHJlY3Quc3RhcnRZLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KHJlY3Quc3RhcnRYLCByZWN0LnN0YXJ0WSwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgICAgY29udGV4dC5saW5lV2lkdGggPSA1O1xuICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHJlY3QuY29sb3I7XG4gICAgICBjb250ZXh0LnJlY3QocmVjdC5zdGFydFgsIHJlY3Quc3RhcnRZLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgY29udGV4dC5jbGVhclJlY3QocmVjdC5zdGFydFgsIHJlY3Quc3RhcnRZLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICB0aGlzLnJlY3RhbmdsZXMuZm9yRWFjaCh0bXBSZWN0ID0+IHtcbiAgICAgICAgaWYgKHRtcFJlY3QuY29sb3IgPT09IHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmhpZ2hsaWdodGVkQ29sb3IpIHtcbiAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCh0bXBSZWN0LnN0YXJ0WCwgdG1wUmVjdC5zdGFydFksIHRtcFJlY3Qud2lkdGgsIHRtcFJlY3QuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRDYW52YXNMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgbW91c2VVcCA9IGZyb21FdmVudChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICdtb3VzZXVwJyksXG4gICAgICAgICAgbW91c2VNb3ZlID0gZnJvbUV2ZW50KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJ21vdXNlbW92ZScpLFxuICAgICAgICAgIG1vdXNlRG93biA9IGZyb21FdmVudChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICdtb3VzZWRvd24nKSxcbiAgICAgICAgICBzY3JvbGwgPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJyk7XG5cbiAgICB0aGlzLm1hbnVhbGx5RHJhd1JlY3QobW91c2VEb3duLCBtb3VzZU1vdmUsIG1vdXNlVXApO1xuICAgIHRoaXMuYXV0b0RyYXdSZWN0KG1vdXNlTW92ZSk7XG4gICAgdGhpcy5jaGFuZ2VSZWN0UG9zaXRpb24oc2Nyb2xsKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlUmVjdFBvc2l0aW9uKHNjcm9sbDogT2JzZXJ2YWJsZTxFdmVudD4pIHtcbiAgICBzY3JvbGwuc3Vic2NyaWJlKFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50V2luZG93U2Nyb2xsWCA9IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICBjdXJyZW50V2luZG93U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICB0aGlzLnJlY3RhbmdsZXMuZm9yRWFjaChyZWN0ID0+IHtcbiAgICAgICAgICByZWN0LnN0YXJ0WSA9IHJlY3Quc3RhcnRZIC0gKGN1cnJlbnRXaW5kb3dTY3JvbGxZIC0gcmVjdC53aW5kb3dTY3JvbGxZKTtcbiAgICAgICAgICByZWN0LnN0YXJ0WCA9IHJlY3Quc3RhcnRYIC0gKGN1cnJlbnRXaW5kb3dTY3JvbGxYIC0gcmVjdC53aW5kb3dTY3JvbGxYKTtcbiAgICAgICAgICByZWN0LndpbmRvd1Njcm9sbFkgPSBjdXJyZW50V2luZG93U2Nyb2xsWTtcbiAgICAgICAgICByZWN0LndpbmRvd1Njcm9sbFggPSBjdXJyZW50V2luZG93U2Nyb2xsWDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZHJhd1BlcnNpc3RDYW52YXNSZWN0YW5nbGVzKCk7XG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95Q2FudmFzTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1hbnVhbGx5RHJhd1JlY3QkKSB7IHRoaXMubWFudWFsbHlEcmF3UmVjdCQudW5zdWJzY3JpYmUoKTsgfVxuICAgIGlmICh0aGlzLmF1dG9EcmF3UmVjdCQpIHsgdGhpcy5hdXRvRHJhd1JlY3QkLnVuc3Vic2NyaWJlKCk7IH1cbiAgfVxuXG4gIHByaXZhdGUgbWFudWFsbHlEcmF3UmVjdChtb3VzZURvd246IE9ic2VydmFibGU8RXZlbnQ+LCBtb3VzZU1vdmU6IE9ic2VydmFibGU8RXZlbnQ+LCBtb3VzZVVwOiBPYnNlcnZhYmxlPEV2ZW50Pik6IHZvaWQge1xuICAgIGNvbnN0IG1vdXNlRHJhZyA9IG1vdXNlRG93bi5waXBlKG1lcmdlTWFwKChtb3VzZURvd25FdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2hvd1Rvb2xiYXJUaXBzKSB7IHRoaXMuc2hvd1Rvb2xiYXJUaXBzID0gZmFsc2U7IH1cbiAgICAgIHRoaXMuYXV0b0RyYXdSZWN0JC51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5pc0RyYXdpbmdSZWN0ID0gdHJ1ZTtcblxuICAgICAgY29uc3QgbmV3UmVjdGFuZ2xlID0gbmV3IFJlY3RhbmdsZSgpO1xuICAgICAgbmV3UmVjdGFuZ2xlLnN0YXJ0WCA9IG1vdXNlRG93bkV2ZW50LmNsaWVudFg7XG4gICAgICBuZXdSZWN0YW5nbGUuc3RhcnRZID0gbW91c2VEb3duRXZlbnQuY2xpZW50WTtcbiAgICAgIG5ld1JlY3RhbmdsZS5jb2xvciA9IHRoaXMuZHJhd0NvbG9yO1xuXG4gICAgICByZXR1cm4gbW91c2VNb3ZlLnBpcGUoXG4gICAgICAgIG1hcCgobW91c2VNb3ZlRXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICBuZXdSZWN0YW5nbGUud2lkdGggPSBtb3VzZU1vdmVFdmVudC5jbGllbnRYIC0gbW91c2VEb3duRXZlbnQuY2xpZW50WDtcbiAgICAgICAgICBuZXdSZWN0YW5nbGUuaGVpZ2h0ID0gbW91c2VNb3ZlRXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bkV2ZW50LmNsaWVudFk7XG4gICAgICAgICAgcmV0dXJuIG5ld1JlY3RhbmdsZTtcbiAgICAgICAgfSksXG4gICAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgICAvLyBjbGljayB0byBkcmF3IHJlY3RhbmdsZVxuICAgICAgICAgIGlmIChuZXdSZWN0YW5nbGUud2lkdGggPT09IHVuZGVmaW5lZCB8fCBuZXdSZWN0YW5nbGUuaGVpZ2h0ID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIG5ld1JlY3RhbmdsZS53aWR0aCA9PT0gMCB8fCBuZXdSZWN0YW5nbGUuaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5kcmF3VGVtcENhbnZhc1JlY3RhbmdsZShtb3VzZURvd25FdmVudCk7XG4gICAgICAgICAgICBpZiAocmVjdCkgeyB0aGlzLnJlY3RhbmdsZXMucHVzaChyZWN0KTsgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZHJhZyB0byBkcmF3IHJlY3RhbmdsZVxuICAgICAgICAgICAgaWYgKG5ld1JlY3RhbmdsZS5oZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICAgIG5ld1JlY3RhbmdsZS5zdGFydFkgPSBuZXdSZWN0YW5nbGUuc3RhcnRZICsgbmV3UmVjdGFuZ2xlLmhlaWdodDtcbiAgICAgICAgICAgICAgbmV3UmVjdGFuZ2xlLmhlaWdodCA9IE1hdGguYWJzKG5ld1JlY3RhbmdsZS5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld1JlY3RhbmdsZS53aWR0aCA8IDApIHtcbiAgICAgICAgICAgICAgbmV3UmVjdGFuZ2xlLnN0YXJ0WCA9IG5ld1JlY3RhbmdsZS5zdGFydFggKyBuZXdSZWN0YW5nbGUud2lkdGg7XG4gICAgICAgICAgICAgIG5ld1JlY3RhbmdsZS53aWR0aCA9IE1hdGguYWJzKG5ld1JlY3RhbmdsZS53aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlY3RhbmdsZXMucHVzaChuZXdSZWN0YW5nbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmRyYXdQZXJzaXN0Q2FudmFzUmVjdGFuZ2xlcygpO1xuICAgICAgICAgIHRoaXMuYXV0b0RyYXdSZWN0KG1vdXNlTW92ZSk7XG4gICAgICAgICAgdGhpcy5pc0RyYXdpbmdSZWN0ID0gZmFsc2U7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwobW91c2VVcCkpO1xuICAgIH0pKTtcblxuICAgIHRoaXMubWFudWFsbHlEcmF3UmVjdCQgPSBtb3VzZURyYWcuc3Vic2NyaWJlKFxuICAgICAgKHJlYykgPT4ge1xuICAgICAgICB0aGlzLmRyYXdQZXJzaXN0Q2FudmFzUmVjdGFuZ2xlcygpO1xuICAgICAgICB0aGlzLmRyYXdSZWN0YW5nbGUocmVjKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhdXRvRHJhd1JlY3QobW91c2VNb3ZlOiBPYnNlcnZhYmxlPEV2ZW50Pik6IHZvaWQge1xuICAgIHRoaXMuYXV0b0RyYXdSZWN0JCA9IG1vdXNlTW92ZS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKG1vdXNlTW92ZUV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuZHJhd1BlcnNpc3RDYW52YXNSZWN0YW5nbGVzKCk7XG4gICAgICAgIHRoaXMuZHJhd1RlbXBDYW52YXNSZWN0YW5nbGUobW91c2VNb3ZlRXZlbnQpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBlcnIgPT4gY29uc29sZS5lcnJvcignc29tZXRoaW5nIHdyb25nIG9jY3VycmVkOiAnICsgZXJyKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1BlcnNpc3RDYW52YXNSZWN0YW5nbGVzKCkge1xuICAgIHRoaXMuZHJhd0NvbnRhaW5lclJlY3QoKTtcbiAgICB0aGlzLnJlY3RhbmdsZXMuZm9yRWFjaCh0bXBSZWN0ID0+IHtcbiAgICAgIHRoaXMuZHJhd1JlY3RhbmdsZSh0bXBSZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1RlbXBDYW52YXNSZWN0YW5nbGUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBsZXQgcmVjdGFuZ2xlOiBSZWN0YW5nbGUgPSBudWxsO1xuICAgIGNvbnN0IGNsaWVudFggPSBldmVudC5jbGllbnRYLFxuICAgICAgICAgIGNsaWVudFkgPSBldmVudC5jbGllbnRZLFxuICAgICAgICAgIGVscyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGNsaWVudFgsIGNsaWVudFkpLFxuICAgICAgICAgIGVsID0gZWxzWzJdO1xuICAgIGlmICgoIXRoaXMuaXNFeGNsdWRlUmVjdChlbHMpKSAmJiBlbCAmJiB0aGlzLmVsQ291bGRCZUhpZ2hsaWdodGVkLmluZGV4T2YoZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xuICAgICAgcmVjdGFuZ2xlID0gbmV3IFJlY3RhbmdsZSgpO1xuICAgICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5kcmF3Q2FudmFzLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblxuICAgICAgT2JqZWN0LmFzc2lnbihyZWN0YW5nbGUsIHtcbiAgICAgICAgc3RhcnRYOiByZWN0LmxlZnQsXG4gICAgICAgIHN0YXJ0WTogcmVjdC50b3AsXG4gICAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgICAgICBjb2xvcjogdGhpcy5kcmF3Q29sb3JcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kcmF3UmVjdGFuZ2xlKHJlY3RhbmdsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJhd0NhbnZhcy5zdHlsZS5jdXJzb3IgPSAnY3Jvc3NoYWlyJztcbiAgICB9XG4gICAgcmV0dXJuIHJlY3RhbmdsZTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZVJlY3QoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMucmVjdGFuZ2xlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuZHJhd1BlcnNpc3RDYW52YXNSZWN0YW5nbGVzKCk7XG4gIH1cblxuICBwcml2YXRlIGlzRXhjbHVkZVJlY3QoZWxlbWVudHM6IEVsZW1lbnRbXSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGVsZW1lbnRzLnNvbWUoIGVsID0+IHtcbiAgICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ2V4Y2x1ZGUtcmVjdCcpID09PSAndHJ1ZSc7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImRpYWxvZ1wiICpuZ0lmPVwiIXNob3dUb29sYmFyXCIgZGF0YS1odG1sMmNhbnZhcy1pZ25vcmU9XCJ0cnVlXCI+XG4gIDxkaXYgY2xhc3M9XCJkaWFsb2ctdGl0bGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGl0bGUtZm9udFwiPlxuICAgICAge3t2YXJzWyd0aXRsZSddfX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJkaWFsb2ctY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbi10aXBzXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiZmVlZGJhY2suZGVzY3JpcHRpb249PScnXCI+e3t2YXJzWydwbGFjZWhvbGRlciddfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8dGV4dGFyZWFcbiAgICAgIGF1dG9mb2N1c1xuICAgICAgY2xhc3M9XCJkZXNjcmlwdGlvblwiXG4gICAgICBbKG5nTW9kZWwpXT1cImZlZWRiYWNrLmRlc2NyaXB0aW9uXCJcbiAgICA+PC90ZXh0YXJlYT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzY3JlZW5zaG90LWNoZWNrYm94XCI+XG4gICAgPG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImluY2x1ZGVTY3JlZW5zaG90XCIgKGNoYW5nZSk9XCJpc0luY2x1ZGVTY3JlZW5zaG90KClcIj57e3ZhcnNbJ2NoZWNrYm94TGFiZWwnXX19PC9tYXQtY2hlY2tib3g+XG4gIDwvZGl2PlxuXG4gIDxkaXYgI3NjcmVlbnNob3RQYXJlbnQgY2xhc3M9XCJzY3JlZW5zaG90LWNvbnRlbnRcIiAoY2xpY2spPVwiZXhwYW5kRHJhd2luZ0JvYXJkKClcIiAqbmdJZj1cImluY2x1ZGVTY3JlZW5zaG90XCI+XG4gICAgPG1hdC1zcGlubmVyIGNsYXNzPVwibG9hZGluZ1wiIFtkaWFtZXRlcl09XCIzMFwiID48L21hdC1zcGlubmVyPlxuICAgIDxkaXY+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNjcmVlbnNob3QtdGlwc1wiICpuZ0lmPVwiIXNob3dTcGlubmVyXCI+XG4gICAgICA8c3ZnIGZvY3VzYWJsZT1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTIxIDE3aC0yLjU4bDIuNTEgMi41NmMtLjE4LjY5LS43MyAxLjI2LTEuNDEgMS40NEwxNyAxOC41VjIxaC0ydi02aDZ2MnpNMTkgN2gydjJoLTJWN3ptMi0yaC0yVjMuMDhjMS4xIDAgMiAuOTIgMiAxLjkyem0tNi0yaDJ2MmgtMlYzem00IDhoMnYyaC0ydi0yek05IDIxSDd2LTJoMnYyek01IDlIM1Y3aDJ2MnptMC01LjkyVjVIM2MwLTEgMS0xLjkyIDItMS45MnpNNSAxN0gzdi0yaDJ2MnpNOSA1SDdWM2gydjJ6bTQgMGgtMlYzaDJ2MnptMCAxNmgtMnYtMmgydjJ6bS04LThIM3YtMmgydjJ6bTAgOC4wOEMzLjkgMjEuMDggMyAyMCAzIDE5aDJ2Mi4wOHpcIj48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxzcGFuIGNsYXNzPVwic2NyZWVuc2hvdC10aXBzLWNvbnRlbnRcIj57e3ZhcnNbJ2VkaXRUaXAnXX19PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8bWF0LWRpYWxvZy1hY3Rpb25zIGNsYXNzPVwiZGlhbG9nLWFjdGlvbnNcIiBhbGlnbj1cImVuZFwiPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwiZGlhbG9nUmVmLmNsb3NlKClcIiBjbGFzcz1cImFjdGlvbi1idXR0b25cIj57e3ZhcnNbJ2NhbmNlbExhYmVsJ119fTwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwiZGlhbG9nUmVmLmNsb3NlKHRydWUpXCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uIGFjdGlvbi1idXR0b25cIj57e3ZhcnNbJ3NlbmRMYWJlbCddfX08L2J1dHRvbj5cbiAgPC9tYXQtZGlhbG9nLWFjdGlvbnM+XG48L2Rpdj5cbjxkaXYgKm5nSWY9XCJzaG93VG9vbGJhclwiIGRhdGEtaHRtbDJjYW52YXMtaWdub3JlPVwidHJ1ZVwiPlxuICA8ZGl2IGNsYXNzPVwidG9vbGJhci10aXBzXCIgKm5nSWY9XCJzaG93VG9vbGJhclRpcHNcIj5cbiAgICB7e3ZhcnNbJ2RyYXdSZWN0VGlwJ119fVxuICA8L2Rpdj5cblxuICA8ZmVlZGJhY2stdG9vbGJhciBbZHJhd0NvbG9yXT1cImRyYXdDb2xvclwiIChtYW5pcHVsYXRlKT1cIm1hbmlwdWxhdGUoJGV2ZW50KVwiPjwvZmVlZGJhY2stdG9vbGJhcj5cbjwvZGl2PlxuPGRpdiAqbmdGb3I9XCJsZXQgcmVjdGFuZ2xlIG9mIHJlY3RhbmdsZXM7IGluZGV4IGFzIGluZGV4XCIgPlxuICAgIDxmZWVkYmFjay1yZWN0YW5nbGUgW3JlY3RhbmdsZV09XCJyZWN0YW5nbGVcIiBbbm9Ib3Zlcl09XCIhc2hvd1Rvb2xiYXIgfHwgaXNEcmF3aW5nUmVjdFwiIChjbG9zZSk9XCJjbG9zZVJlY3QoaW5kZXgpXCI+XG4gICAgPC9mZWVkYmFjay1yZWN0YW5nbGU+XG48L2Rpdj5cbjxjYW52YXMgaWQ9XCJkcmF3LWNhbnZhc1wiIGNsYXNzPVwiZHJhd0NhbnZhc1wiIFtuZ0NsYXNzXT1cInsncG9pbnRlckN1cnNvcic6ICFzaG93VG9vbGJhcn1cIj48L2NhbnZhcz5cbiJdfQ==