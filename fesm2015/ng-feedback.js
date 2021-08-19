import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, ViewChild, HostListener, Directive, NgModule } from '@angular/core';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4$1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i4 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i5 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i1 from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import * as i7 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i2 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Subject, fromEvent } from 'rxjs';
import { mergeMap, map, finalize, takeUntil } from 'rxjs/operators';
import html2canvas from 'html2canvas';
import * as i3$1 from '@angular/cdk/overlay';

class Feedback {
}

class Rectangle {
    constructor() {
        this.windowScrollY = window.scrollY;
        this.windowScrollX = window.scrollX;
    }
}

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
FeedbackService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FeedbackService, factory: FeedbackService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeedbackService, [{
        type: Injectable
    }], null, null); })();

const _c0$2 = ["toggleMove"];
const _c1$2 = function (a0) { return { "toggle-decorator": a0 }; };
function FeedbackToolbarComponent__svg_svg_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 19);
    i0.ɵɵelement(1, "path", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c1$2, !ctx_r2.isSwitch));
} }
function FeedbackToolbarComponent__svg_svg_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 19);
    i0.ɵɵelement(1, "path", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c1$2, ctx_r3.isSwitch));
} }
const _c2 = function (a0) { return { "deepen-color": a0 }; };
class FeedbackToolbarComponent {
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
    ngAfterViewInit() {
        const elStyle = this.el.nativeElement.style;
        elStyle.position = 'absolute';
        elStyle.left = '43%';
        elStyle.top = '1em';
        this.addDragListenerOnMoveBtn();
    }
    ngOnChanges() {
        this.isSwitch = this.drawColor !== this.feedbackService.highlightedColor;
    }
    done() {
        this.manipulate.emit('done');
    }
    toggleHighlight() {
        this.isSwitch = false;
        this.manipulate.emit(this.feedbackService.highlightedColor);
    }
    toggleHide() {
        this.isSwitch = true;
        this.manipulate.emit(this.feedbackService.hiddenColor);
    }
    addDragListenerOnMoveBtn() {
        const mouseUp = fromEvent(this.toggleMoveBtn.nativeElement, 'mouseup');
        const mouseMove = fromEvent(document.documentElement, 'mousemove');
        const mouseDown = fromEvent(this.toggleMoveBtn.nativeElement, 'mousedown');
        const mouseDrag = mouseDown.pipe(mergeMap((md) => {
            this.feedbackService.setIsDraggingToolbar(true);
            const startX = md.offsetX;
            const startY = md.offsetY;
            this.disableToolbarTips = true;
            this.isDragging = true;
            // Calculate dif with mousemove until mouseup
            return mouseMove.pipe(map((mm) => {
                mm.preventDefault();
                return {
                    left: mm.clientX - startX,
                    top: mm.clientY - startY
                };
            }), finalize(() => {
                this.isDragging = false;
                this.disableToolbarTips = false;
                this.feedbackService.setIsDraggingToolbar(false);
            }), takeUntil(mouseUp));
        }));
        mouseDrag.subscribe((pos) => {
            this.el.nativeElement.style.left = pos.left + 'px';
            this.el.nativeElement.style.top = pos.top + 'px';
        });
    }
}
FeedbackToolbarComponent.ɵfac = function FeedbackToolbarComponent_Factory(t) { return new (t || FeedbackToolbarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(FeedbackService)); };
FeedbackToolbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeedbackToolbarComponent, selectors: [["feedback-toolbar"]], viewQuery: function FeedbackToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$2, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.toggleMoveBtn = _t.first);
    } }, inputs: { drawColor: "drawColor" }, outputs: { manipulate: "manipulate" }, features: [i0.ɵɵNgOnChangesFeature], decls: 23, vars: 15, consts: [["exclude-rect", "true", 1, "toolbar"], [1, "move-toolbar", 3, "matTooltip", "matTooltipDisabled"], ["toggleMove", ""], ["focusable", "false", "aria-label", "Drag", "fill", "#BDBDBD", "height", "56", "width", "16", "viewBox", "-2 2 12 12"], ["cx", "1.5", "cy", "1.5", "r", "1.5"], ["cx", "1.5", "cy", "7.5", "r", "1.5"], ["cx", "1.5", "cy", "13.5", "r", "1.5"], ["cx", "6.5", "cy", "1.5", "r", "1.5"], ["cx", "6.5", "cy", "7.5", "r", "1.5"], ["cx", "6.5", "cy", "13.5", "r", "1.5"], [1, "highlight-toggle", 3, "matTooltip", "matTooltipDisabled", "ngClass", "click"], ["highlightBtn", ""], [1, "toggle"], ["focusable", "false", "aria-label", "", "viewBox", "0 0 24 24", "height", "36", "width", "36", "fill", "#ffd740"], ["d", "M3 3h18v18H3z"], ["focusable", "false", "aria-label", "", "fill", "#757575", "viewBox", "0 0 24 24", "height", "36", "width", "36", 3, "ngClass", 4, "ngIf"], [1, "hide-toggle", 3, "matTooltip", "matTooltipDisabled", "ngClass", "click"], ["focusable", "false", "aria-label", "", "viewBox", "0 0 24 24", "height", "36", "width", "36", "fill", "#000"], ["mat-button", "", 1, "merge-button", 3, "click"], ["focusable", "false", "aria-label", "", "fill", "#757575", "viewBox", "0 0 24 24", "height", "36", "width", "36", 3, "ngClass"], ["d", "M21 17h-2.58l2.51 2.56c-.18.69-.73 1.26-1.41 1.44L17 18.5V21h-2v-6h6v2zM19 7h2v2h-2V7zm2-2h-2V3.08c1.1 0 2 .92 2 1.92zm-6-2h2v2h-2V3zm4 8h2v2h-2v-2zM9 21H7v-2h2v2zM5 9H3V7h2v2zm0-5.92V5H3c0-1 1-1.92 2-1.92zM5 17H3v-2h2v2zM9 5H7V3h2v2zm4 0h-2V3h2v2zm0 16h-2v-2h2v2zm-8-8H3v-2h2v2zm0 8.08C3.9 21.08 3 20 3 19h2v2.08z"]], template: function FeedbackToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1, 2);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(3, "svg", 3);
        i0.ɵɵelement(4, "circle", 4);
        i0.ɵɵelement(5, "circle", 5);
        i0.ɵɵelement(6, "circle", 6);
        i0.ɵɵelement(7, "circle", 7);
        i0.ɵɵelement(8, "circle", 8);
        i0.ɵɵelement(9, "circle", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(10, "button", 10, 11);
        i0.ɵɵlistener("click", function FeedbackToolbarComponent_Template_button_click_10_listener() { return ctx.toggleHighlight(); });
        i0.ɵɵelementStart(12, "span", 12);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(13, "svg", 13);
        i0.ɵɵelement(14, "path", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(15, FeedbackToolbarComponent__svg_svg_15_Template, 2, 3, "svg", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(16, "button", 16);
        i0.ɵɵlistener("click", function FeedbackToolbarComponent_Template_button_click_16_listener() { return ctx.toggleHide(); });
        i0.ɵɵelementStart(17, "span", 12);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(18, "svg", 17);
        i0.ɵɵelement(19, "path", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(20, FeedbackToolbarComponent__svg_svg_20_Template, 2, 3, "svg", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(21, "button", 18);
        i0.ɵɵlistener("click", function FeedbackToolbarComponent_Template_button_click_21_listener() { return ctx.done(); });
        i0.ɵɵtext(22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", ctx.vars["moveToolbarTip"])("matTooltipDisabled", ctx.disableToolbarTips);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("matTooltip", ctx.vars["highlightTip"])("matTooltipDisabled", ctx.disableToolbarTips)("ngClass", i0.ɵɵpureFunction1(11, _c2, !ctx.isSwitch));
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", !ctx.isSwitch);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", ctx.vars["hideTip"])("matTooltipDisabled", ctx.disableToolbarTips)("ngClass", i0.ɵɵpureFunction1(13, _c2, ctx.isSwitch));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.isSwitch);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.vars["editDoneLabel"]);
    } }, directives: [i2.MatTooltip, i3.NgClass, i3.NgIf, i4.MatButton], styles: [".toolbar[_ngcontent-%COMP%]{align-items:center;background-color:#fff;border-radius:2px;box-shadow:#00000024 0 24px 38px 3px,#0000001f 0 9px 46px 8px,#0003 0 11px 15px -7px;cursor:pointer;display:-webkit-inline-flex;flex-direction:row;height:56px;min-width:232px;pointer-events:auto;overflow:visible;position:absolute;margin:0 auto;width:228px;bottom:0;top:25%;left:0;right:0;z-index:999}.move-toolbar[_ngcontent-%COMP%]{cursor:-webkit-grab;height:56px;padding:0 12px;position:relative}.move-toolbar[_ngcontent-%COMP%]:active{cursor:-webkit-grabbing}.toggle[_ngcontent-%COMP%]{display:inline-block;position:relative;height:36px;width:36px}.toggle-decorator[_ngcontent-%COMP%]{left:0px;position:absolute;top:0px}.highlight-toggle[_ngcontent-%COMP%]{align-items:center;background-color:#fff;border:none;box-sizing:border-box;cursor:pointer;display:-webkit-flex;justify-content:center;outline:none;padding:10px;pointer-events:auto;position:relative;height:56px;width:56px}.deepen-color[_ngcontent-%COMP%]{background-color:#e0e0e0!important}.hide-toggle[_ngcontent-%COMP%]{align-items:center;background-color:#fff;border:none;box-sizing:border-box;cursor:pointer;display:-webkit-flex;justify-content:center;outline:none;padding:10px;pointer-events:auto;position:relative;height:56px;width:56px}.merge-button[_ngcontent-%COMP%]{padding:0!important;margin:0 10px!important;min-width:56px;color:#4285f4}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeedbackToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'feedback-toolbar',
                templateUrl: './feedback-toolbar.component.html',
                styleUrls: ['./feedback-toolbar.component.css']
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: FeedbackService }]; }, { drawColor: [{
            type: Input
        }], manipulate: [{
            type: Output
        }], toggleMoveBtn: [{
            type: ViewChild,
            args: ['toggleMove', { static: true }]
        }] }); })();

function FeedbackRectangleComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 2);
    i0.ɵɵlistener("click", function FeedbackRectangleComponent_span_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.onClose(); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 3);
    i0.ɵɵelement(2, "path", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c0$1 = function (a0, a1, a2, a3) { return { "left.px": a0, "top.px": a1, "width.px": a2, "height.px": a3 }; };
const _c1$1 = function (a0, a1, a2) { return { "highlight": a0, "hide": a1, "noHover": a2 }; };
class FeedbackRectangleComponent {
    constructor(feedbackService) {
        this.feedbackService = feedbackService;
        this.close = new EventEmitter();
        this.showCloseTag = false;
    }
    onMouseEnter() {
        this.showCloseTag = this.noHover === false;
    }
    onMouseLeave() {
        this.showCloseTag = false;
    }
    onClose() {
        this.close.emit();
    }
}
FeedbackRectangleComponent.ɵfac = function FeedbackRectangleComponent_Factory(t) { return new (t || FeedbackRectangleComponent)(i0.ɵɵdirectiveInject(FeedbackService)); };
FeedbackRectangleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeedbackRectangleComponent, selectors: [["feedback-rectangle"]], hostBindings: function FeedbackRectangleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function FeedbackRectangleComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function FeedbackRectangleComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { rectangle: "rectangle", noHover: "noHover" }, outputs: { close: "close" }, decls: 2, vars: 12, consts: [["exclude-rect", "true", 1, "rect", 3, "ngStyle", "ngClass"], ["exclude-rect", "true", "class", "close", 3, "click", 4, "ngIf"], ["exclude-rect", "true", 1, "close", 3, "click"], ["viewBox", "0 0 1024 1024", "width", "16", "height", "16"], ["d", "M896 224l-96-96-288 288-288-288-96 96 288 288-288 288 96 96 288-288 288 288 96-96-288-288 288-288z"]], template: function FeedbackRectangleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, FeedbackRectangleComponent_span_1_Template, 3, 0, "span", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(3, _c0$1, ctx.rectangle.startX, ctx.rectangle.startY, ctx.rectangle.width, ctx.rectangle.height))("ngClass", i0.ɵɵpureFunction3(8, _c1$1, ctx.rectangle.color === ctx.feedbackService.highlightedColor, ctx.rectangle.color !== ctx.feedbackService.highlightedColor, ctx.noHover));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showCloseTag);
    } }, directives: [i3.NgStyle, i3.NgClass, i3.NgIf], styles: [".rect[_ngcontent-%COMP%]{position:fixed;background:none;z-index:3}.highlight[_ngcontent-%COMP%]:not(.noHover):hover{cursor:default;background:rgba(55,131,249,.2)}.hide[_ngcontent-%COMP%]{background-color:#000}.hide[_ngcontent-%COMP%]:not(.noHover):hover{background-color:#1f1f1fbf}.rect[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{width:24px;height:24px;background:#FFF;border-radius:50%;justify-content:center;align-items:center;color:#999;position:absolute;right:-12px;top:-12px;cursor:pointer;display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeedbackRectangleComponent, [{
        type: Component,
        args: [{
                selector: 'feedback-rectangle',
                templateUrl: './feedback-rectangle.component.html',
                styleUrls: ['./feedback-rectangle.component.css']
            }]
    }], function () { return [{ type: FeedbackService }]; }, { rectangle: [{
            type: Input
        }], noHover: [{
            type: Input
        }], close: [{
            type: Output
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

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
class FeedbackDialogComponent {
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
FeedbackDialogComponent.ɵfac = function FeedbackDialogComponent_Factory(t) { return new (t || FeedbackDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(FeedbackService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
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
    } }, directives: [i3.NgIf, i3.NgForOf, i3.NgClass, i4$1.DefaultValueAccessor, i4$1.NgControlStatus, i4$1.NgModel, i5.MatCheckbox, i1.MatDialogActions, i4.MatButton, i7.MatSpinner, FeedbackToolbarComponent, FeedbackRectangleComponent], styles: [".dialog[_ngcontent-%COMP%]{z-index:1000;position:relative;width:360px;background-color:#fff}.dialog-title[_ngcontent-%COMP%]{background-color:#607d8b;color:#fff;height:56px}.title-font[_ngcontent-%COMP%]{color:#fff;float:left;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:20px;line-height:56px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;padding:0 16px;margin:0}.dialog-content[_ngcontent-%COMP%]{display:-webkit-flex;flex-grow:1;height:200px;position:relative}.description[_ngcontent-%COMP%]{border:none;box-sizing:border-box;box-shadow:none;color:#212121;flex-grow:1;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:16px;line-height:normal;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;max-width:100%;outline:none;padding:18px 16px 0;resize:none;width:100%;height:inherit}.description-tips[_ngcontent-%COMP%]{color:#bdbdbd;display:block;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:16px;line-height:normal;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;left:0px;position:absolute;padding:18px 16px 0;right:0px}.screenshot-checkbox[_ngcontent-%COMP%]{padding:0 16px;background-color:#f8f8f8;height:40px;display:flex;flex-direction:column;justify-content:center}.screenshot-content[_ngcontent-%COMP%]{border:none;cursor:pointer;text-align:center;display:block;position:relative;padding:0;overflow:hidden;height:192px;width:100%;background:rgb(237,237,237) none}.screenshot-tips[_ngcontent-%COMP%]{align-items:center;background-color:#f8f8f899;border-radius:4px;box-sizing:border-box;display:-webkit-flex;flex-direction:column;justify-content:center;min-height:112px;width:224px;z-index:5;position:absolute;top:50%;right:0;bottom:0;left:0;transform:translateY(-50%);margin:0 auto}.screenshot-content[_ngcontent-%COMP%]:hover   .screenshot-tips[_ngcontent-%COMP%]{background-color:#f8f8f8cc}.screenshot-content[_ngcontent-%COMP%]:hover   .screenshot-tips-content[_ngcontent-%COMP%]{color:#4285f4}.screenshot-content[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{color:#4285f4;fill:currentColor}.screenshot-tips[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#757575;fill:currentColor;height:48px;width:48px}.screenshot-tips-content[_ngcontent-%COMP%]{color:#757575;font-weight:400;font-size:14px;line-height:20px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin-top:12px}.dialog-actions[_ngcontent-%COMP%]{border-top:1px solid rgb(224,224,224)}.submit-button[_ngcontent-%COMP%]{margin-right:8px!important;margin-left:5px!important;color:#4285f4}.action-button[_ngcontent-%COMP%]{font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:500;font-stretch:normal;font-size:14px;height:35px;line-height:normal;margin:10px 0;padding:0 8px;position:relative;min-width:75px}.loading[_ngcontent-%COMP%]{margin:0 auto;position:absolute;top:45%;bottom:0;left:0;right:0}.mat-dialog-actions[_ngcontent-%COMP%]{padding:0!important}  .feedbackDialog .mat-dialog-container{padding:0;overflow:visible;background-color:#fff0;box-shadow:none;box-shadow:initial}.toolbar-tips[_ngcontent-%COMP%]{background-color:#fff9;border-radius:12px;color:#757575;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:34px;line-height:40px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin-bottom:72px;padding:22px 0;text-align:center;visibility:visible;width:656px;height:auto;-webkit-animation:cssAnimation 0s ease-in 5s forwards;animation:cssAnimation 0s ease-in 5s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.drawCanvas[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:-1;margin:0 auto;cursor:crosshair}.pointerCursor[_ngcontent-%COMP%]{cursor:default!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeedbackDialogComponent, [{
        type: Component,
        args: [{
                selector: 'feedback-dialog',
                templateUrl: './feedback-dialog.component.html',
                styleUrls: ['./feedback-dialog.component.css']
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: FeedbackService }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, { screenshotParent: [{
            type: ViewChild,
            args: ['screenshotParent']
        }], onEscapeKeyDownHandler: [{
            type: HostListener,
            args: ['document:keydown.escape', ['$event']]
        }] }); })();

class FeedbackDirective {
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
        this.feedbackService.feedback$.subscribe((feedback) => {
            this.send.emit(feedback);
        });
        this.overlay = overlay;
    }
    onClick() {
        this.openFeedbackDialog();
    }
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
FeedbackDirective.ɵfac = function FeedbackDirective_Factory(t) { return new (t || FeedbackDirective)(i0.ɵɵdirectiveInject(i1.MatDialog), i0.ɵɵdirectiveInject(FeedbackService), i0.ɵɵdirectiveInject(i3$1.Overlay)); };
FeedbackDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FeedbackDirective, selectors: [["", "feedback", ""]], hostBindings: function FeedbackDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function FeedbackDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { title: "title", placeholder: "placeholder", editTip: "editTip", checkboxLabel: "checkboxLabel", cancelLabel: "cancelLabel", sendLabel: "sendLabel", moveToolbarTip: "moveToolbarTip", drawRectTip: "drawRectTip", highlightTip: "highlightTip", hideTip: "hideTip", editDoneLabel: "editDoneLabel" }, outputs: { send: "send" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeedbackDirective, [{
        type: Directive,
        args: [{ selector: '[feedback]' }]
    }], function () { return [{ type: i1.MatDialog }, { type: FeedbackService }, { type: i3$1.Overlay }]; }, { title: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], editTip: [{
            type: Input
        }], checkboxLabel: [{
            type: Input
        }], cancelLabel: [{
            type: Input
        }], sendLabel: [{
            type: Input
        }], moveToolbarTip: [{
            type: Input
        }], drawRectTip: [{
            type: Input
        }], highlightTip: [{
            type: Input
        }], hideTip: [{
            type: Input
        }], editDoneLabel: [{
            type: Input
        }], send: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();

class FeedbackModule {
}
FeedbackModule.ɵfac = function FeedbackModule_Factory(t) { return new (t || FeedbackModule)(); };
FeedbackModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FeedbackModule });
FeedbackModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        FeedbackService
    ], imports: [[
            MatDialogModule,
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            MatTooltipModule,
            CommonModule,
            FormsModule,
            MatCheckboxModule,
            MatProgressSpinnerModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeedbackModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FeedbackModule, { declarations: [FeedbackDialogComponent,
        FeedbackToolbarComponent,
        FeedbackRectangleComponent,
        FeedbackDirective], imports: [MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatTooltipModule,
        CommonModule,
        FormsModule,
        MatCheckboxModule,
        MatProgressSpinnerModule], exports: [FeedbackDirective] }); })();

/*
 * Public API Surface of ng-feedback
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Feedback, FeedbackDirective, FeedbackModule };
//# sourceMappingURL=ng-feedback.js.map
