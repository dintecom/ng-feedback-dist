import { Component, ElementRef, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil, finalize, map, mergeMap } from 'rxjs/operators';
import { FeedbackService } from '../feedback.service';
import * as i0 from "@angular/core";
import * as i1 from "../feedback.service";
import * as i2 from "@angular/material/tooltip";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
const _c0 = ["toggleMove"];
const _c1 = function (a0) { return { "toggle-decorator": a0 }; };
function FeedbackToolbarComponent__svg_svg_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 19);
    i0.ɵɵelement(1, "path", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c1, !ctx_r2.isSwitch));
} }
function FeedbackToolbarComponent__svg_svg_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 19);
    i0.ɵɵelement(1, "path", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c1, ctx_r3.isSwitch));
} }
const _c2 = function (a0) { return { "deepen-color": a0 }; };
export class FeedbackToolbarComponent {
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
FeedbackToolbarComponent.ɵfac = function FeedbackToolbarComponent_Factory(t) { return new (t || FeedbackToolbarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.FeedbackService)); };
FeedbackToolbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FeedbackToolbarComponent, selectors: [["feedback-toolbar"]], viewQuery: function FeedbackToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
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
    } }, directives: [i2.MatTooltip, i3.NgClass, i3.NgIf, i4.MatButton], styles: [".toolbar[_ngcontent-%COMP%]{align-items:center;background-color:#fff;border-radius:2px;bottom:0;box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.2);cursor:pointer;display:-webkit-inline-flex;flex-direction:row;height:56px;left:0;margin:0 auto;min-width:232px;overflow:visible;pointer-events:auto;position:absolute;right:0;top:25%;width:228px;z-index:999}.move-toolbar[_ngcontent-%COMP%]{cursor:-webkit-grab;height:56px;padding:0 12px;position:relative}.move-toolbar[_ngcontent-%COMP%]:active{cursor:-webkit-grabbing}.toggle[_ngcontent-%COMP%]{display:inline-block;height:36px;position:relative;width:36px}.toggle-decorator[_ngcontent-%COMP%]{left:0;position:absolute;top:0}.highlight-toggle[_ngcontent-%COMP%]{align-items:center;background-color:#fff;border:none;box-sizing:border-box;cursor:pointer;display:-webkit-flex;height:56px;justify-content:center;outline:none;padding:10px;pointer-events:auto;position:relative;width:56px}.deepen-color[_ngcontent-%COMP%]{background-color:#e0e0e0!important}.hide-toggle[_ngcontent-%COMP%]{align-items:center;background-color:#fff;border:none;box-sizing:border-box;cursor:pointer;display:-webkit-flex;height:56px;justify-content:center;outline:none;padding:10px;pointer-events:auto;position:relative;width:56px}.merge-button[_ngcontent-%COMP%]{color:#4285f4;margin:0 10px!important;min-width:56px;padding:0!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FeedbackToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'feedback-toolbar',
                templateUrl: './feedback-toolbar.component.html',
                styleUrls: ['./feedback-toolbar.component.css']
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.FeedbackService }]; }, { drawColor: [{
            type: Input
        }], manipulate: [{
            type: Output
        }], toggleMoveBtn: [{
            type: ViewChild,
            args: ['toggleMove', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2stdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1mZWVkYmFjay9zcmMvbGliL2ZlZWRiYWNrLXRvb2xiYXIvZmVlZGJhY2stdG9vbGJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1mZWVkYmFjay9zcmMvbGliL2ZlZWRiYWNrLXRvb2xiYXIvZmVlZGJhY2stdG9vbGJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBaUIsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7OztJQ2lCaEQsK0JBRUU7SUFBQSwyQkFDd1U7SUFDMVUsaUJBQU07OztJQUhzQixzRUFBMkM7Ozs7SUFhdkUsK0JBRUU7SUFBQSwyQkFDd1U7SUFDMVUsaUJBQU07OztJQUhzQixxRUFBMEM7OztBRHpCNUUsTUFBTSxPQUFPLHdCQUF3QjtJQVluQyxZQUFtQixFQUFjLEVBQVUsZUFBZ0M7UUFBeEQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVJwRSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4Qyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFHM0IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFNBQUksR0FBVyxFQUFFLENB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QzVCLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEOztrQkFFRSxLQUFLOztrQkFFTCxNQUFNOztrQkFHTixTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBmaW5hbGl6ZSwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZlZWRiYWNrU2VydmljZSB9IGZyb20gJy4uL2ZlZWRiYWNrLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmZWVkYmFjay10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZlZWRiYWNrLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mZWVkYmFjay10b29sYmFyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGZWVkYmFja1Rvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBwdWJsaWMgZHJhd0NvbG9yOiBzdHJpbmc7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgbWFuaXB1bGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBwdWJsaWMgZGlzYWJsZVRvb2xiYXJUaXBzID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoJ3RvZ2dsZU1vdmUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwcml2YXRlIHRvZ2dsZU1vdmVCdG46IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyBpc1N3aXRjaCA9IGZhbHNlO1xuICBwdWJsaWMgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICBwdWJsaWMgdmFyczogb2JqZWN0ID0ge307XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGZlZWRiYWNrU2VydmljZTogRmVlZGJhY2tTZXJ2aWNlKSB7XG4gICAgdGhpcy52YXJzID0gZmVlZGJhY2tTZXJ2aWNlLmluaXRpYWxWYXJpYWJsZXM7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGVsU3R5bGUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGU7XG4gICAgZWxTdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZWxTdHlsZS5sZWZ0ID0gJzQzJSc7XG4gICAgZWxTdHlsZS50b3AgPSAnMWVtJztcbiAgICB0aGlzLmFkZERyYWdMaXN0ZW5lck9uTW92ZUJ0bigpO1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuaXNTd2l0Y2ggPSB0aGlzLmRyYXdDb2xvciAhPT0gdGhpcy5mZWVkYmFja1NlcnZpY2UuaGlnaGxpZ2h0ZWRDb2xvcjtcbiAgfVxuXG4gIHB1YmxpYyBkb25lKCkge1xuICAgIHRoaXMubWFuaXB1bGF0ZS5lbWl0KCdkb25lJyk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlSGlnaGxpZ2h0KCkge1xuICAgIHRoaXMuaXNTd2l0Y2ggPSBmYWxzZTtcbiAgICB0aGlzLm1hbmlwdWxhdGUuZW1pdCh0aGlzLmZlZWRiYWNrU2VydmljZS5oaWdobGlnaHRlZENvbG9yKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVIaWRlKCkge1xuICAgIHRoaXMuaXNTd2l0Y2ggPSB0cnVlO1xuICAgIHRoaXMubWFuaXB1bGF0ZS5lbWl0KHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmhpZGRlbkNvbG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGREcmFnTGlzdGVuZXJPbk1vdmVCdG4oKSB7XG4gICAgY29uc3QgbW91c2VVcCA9IGZyb21FdmVudCh0aGlzLnRvZ2dsZU1vdmVCdG4ubmF0aXZlRWxlbWVudCwgJ21vdXNldXAnKTtcbiAgICBjb25zdCBtb3VzZU1vdmUgPSBmcm9tRXZlbnQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnbW91c2Vtb3ZlJyk7XG4gICAgY29uc3QgbW91c2VEb3duID0gZnJvbUV2ZW50KHRoaXMudG9nZ2xlTW92ZUJ0bi5uYXRpdmVFbGVtZW50LCAnbW91c2Vkb3duJyk7XG4gICAgY29uc3QgbW91c2VEcmFnID0gbW91c2VEb3duLnBpcGUobWVyZ2VNYXAoKG1kOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5zZXRJc0RyYWdnaW5nVG9vbGJhcih0cnVlKTtcbiAgICAgIGNvbnN0IHN0YXJ0WCA9IG1kLm9mZnNldFg7XG4gICAgICBjb25zdCBzdGFydFkgPSBtZC5vZmZzZXRZO1xuICAgICAgdGhpcy5kaXNhYmxlVG9vbGJhclRpcHMgPSB0cnVlO1xuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIC8vIENhbGN1bGF0ZSBkaWYgd2l0aCBtb3VzZW1vdmUgdW50aWwgbW91c2V1cFxuICAgICAgcmV0dXJuIG1vdXNlTW92ZS5waXBlKFxuICAgICAgICBtYXAoKG1tOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgbW0ucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogbW0uY2xpZW50WCAtIHN0YXJ0WCxcbiAgICAgICAgICAgIHRvcDogbW0uY2xpZW50WSAtIHN0YXJ0WVxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlVG9vbGJhclRpcHMgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5zZXRJc0RyYWdnaW5nVG9vbGJhcihmYWxzZSk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwobW91c2VVcCkpO1xuICAgIH0pKTtcbiAgICBtb3VzZURyYWcuc3Vic2NyaWJlKFxuICAgICAgKHBvcykgPT4ge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IHBvcy5sZWZ0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IHBvcy50b3AgKyAncHgnO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgZXhjbHVkZS1yZWN0PVwidHJ1ZVwiIGNsYXNzPVwidG9vbGJhclwiPlxuICA8ZGl2IGNsYXNzPVwibW92ZS10b29sYmFyXCIgI3RvZ2dsZU1vdmUgW21hdFRvb2x0aXBdPVwidmFyc1snbW92ZVRvb2xiYXJUaXAnXVwiIFttYXRUb29sdGlwRGlzYWJsZWRdPVwiZGlzYWJsZVRvb2xiYXJUaXBzXCI+XG4gICAgPHN2ZyBmb2N1c2FibGU9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJEcmFnXCIgZmlsbD1cIiNCREJEQkRcIiBoZWlnaHQ9XCI1NlwiIHdpZHRoPVwiMTZcIlxuICAgICAgICAgdmlld0JveD1cIi0yIDIgMTIgMTJcIj5cbiAgICAgIDxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjEuNVwiIHI9XCIxLjVcIj48L2NpcmNsZT5cbiAgICAgIDxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjcuNVwiIHI9XCIxLjVcIj48L2NpcmNsZT5cbiAgICAgIDxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjEzLjVcIiByPVwiMS41XCI+PC9jaXJjbGU+XG4gICAgICA8Y2lyY2xlIGN4PVwiNi41XCIgY3k9XCIxLjVcIiByPVwiMS41XCI+PC9jaXJjbGU+XG4gICAgICA8Y2lyY2xlIGN4PVwiNi41XCIgY3k9XCI3LjVcIiByPVwiMS41XCI+PC9jaXJjbGU+XG4gICAgICA8Y2lyY2xlIGN4PVwiNi41XCIgY3k9XCIxMy41XCIgcj1cIjEuNVwiPjwvY2lyY2xlPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5cbiAgPGJ1dHRvbiAjaGlnaGxpZ2h0QnRuIChjbGljayk9XCJ0b2dnbGVIaWdobGlnaHQoKVwiIFttYXRUb29sdGlwXT1cInZhcnNbJ2hpZ2hsaWdodFRpcCddXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcERpc2FibGVkXT1cImRpc2FibGVUb29sYmFyVGlwc1wiIGNsYXNzPVwiaGlnaGxpZ2h0LXRvZ2dsZVwiIFtuZ0NsYXNzXT1cInsnZGVlcGVuLWNvbG9yJzogIWlzU3dpdGNofVwiPlxuICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlXCI+XG4gICAgICA8c3ZnIGZvY3VzYWJsZT1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBoZWlnaHQ9XCIzNlwiIHdpZHRoPVwiMzZcIlxuICAgICAgICAgICBmaWxsPVwiI2ZmZDc0MFwiPlxuICAgICAgICA8cGF0aCBkPVwiTTMgM2gxOHYxOEgzelwiPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuXG4gICAgICA8c3ZnIGZvY3VzYWJsZT1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlwiIGZpbGw9XCIjNzU3NTc1XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgIGhlaWdodD1cIjM2XCIgd2lkdGg9XCIzNlwiIFtuZ0NsYXNzXT1cInsndG9nZ2xlLWRlY29yYXRvcic6ICFpc1N3aXRjaH1cIiAqbmdJZj1cIiFpc1N3aXRjaFwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMjEgMTdoLTIuNThsMi41MSAyLjU2Yy0uMTguNjktLjczIDEuMjYtMS40MSAxLjQ0TDE3IDE4LjVWMjFoLTJ2LTZoNnYyek0xOSA3aDJ2MmgtMlY3em0yLTJoLTJWMy4wOGMxLjEgMCAyIC45MiAyIDEuOTJ6bS02LTJoMnYyaC0yVjN6bTQgOGgydjJoLTJ2LTJ6TTkgMjFIN3YtMmgydjJ6TTUgOUgzVjdoMnYyem0wLTUuOTJWNUgzYzAtMSAxLTEuOTIgMi0xLjkyek01IDE3SDN2LTJoMnYyek05IDVIN1YzaDJ2MnptNCAwaC0yVjNoMnYyem0wIDE2aC0ydi0yaDJ2MnptLTgtOEgzdi0yaDJ2MnptMCA4LjA4QzMuOSAyMS4wOCAzIDIwIDMgMTloMnYyLjA4elwiPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZUhpZGUoKVwiIFttYXRUb29sdGlwXT1cInZhcnNbJ2hpZGVUaXAnXVwiIFttYXRUb29sdGlwRGlzYWJsZWRdPVwiZGlzYWJsZVRvb2xiYXJUaXBzXCJcbiAgICAgICAgICBjbGFzcz1cImhpZGUtdG9nZ2xlXCIgW25nQ2xhc3NdPVwieydkZWVwZW4tY29sb3InOiBpc1N3aXRjaH1cIj5cbiAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZVwiPlxuICAgICAgPHN2ZyBmb2N1c2FibGU9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgaGVpZ2h0PVwiMzZcIiB3aWR0aD1cIjM2XCJcbiAgICAgICAgICAgZmlsbD1cIiMwMDBcIj5cbiAgICAgICAgPHBhdGggZD1cIk0zIDNoMTh2MThIM3pcIj48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxzdmcgZm9jdXNhYmxlPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiXCIgZmlsbD1cIiM3NTc1NzVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgaGVpZ2h0PVwiMzZcIiB3aWR0aD1cIjM2XCIgW25nQ2xhc3NdPVwieyd0b2dnbGUtZGVjb3JhdG9yJzogaXNTd2l0Y2h9XCIgKm5nSWY9XCJpc1N3aXRjaFwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMjEgMTdoLTIuNThsMi41MSAyLjU2Yy0uMTguNjktLjczIDEuMjYtMS40MSAxLjQ0TDE3IDE4LjVWMjFoLTJ2LTZoNnYyek0xOSA3aDJ2MmgtMlY3em0yLTJoLTJWMy4wOGMxLjEgMCAyIC45MiAyIDEuOTJ6bS02LTJoMnYyaC0yVjN6bTQgOGgydjJoLTJ2LTJ6TTkgMjFIN3YtMmgydjJ6TTUgOUgzVjdoMnYyem0wLTUuOTJWNUgzYzAtMSAxLTEuOTIgMi0xLjkyek01IDE3SDN2LTJoMnYyek05IDVIN1YzaDJ2MnptNCAwaC0yVjNoMnYyem0wIDE2aC0ydi0yaDJ2MnptLTgtOEgzdi0yaDJ2MnptMCA4LjA4QzMuOSAyMS4wOCAzIDIwIDMgMTloMnYyLjA4elwiPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cIm1lcmdlLWJ1dHRvblwiIChjbGljayk9XCJkb25lKClcIj57e3ZhcnNbJ2VkaXREb25lTGFiZWwnXX19PC9idXR0b24+XG48L2Rpdj5cbiJdfQ==