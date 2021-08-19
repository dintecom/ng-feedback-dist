import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil, finalize, map, mergeMap } from 'rxjs/operators';
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
FeedbackToolbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeedbackToolbarComponent, selectors: [["feedback-toolbar"]], viewQuery: function FeedbackToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
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
    }], function () { return [{ type: i0.ElementRef }, { type: i1.FeedbackService }]; }, { drawColor: [{
            type: Input
        }], manipulate: [{
            type: Output
        }], toggleMoveBtn: [{
            type: ViewChild,
            args: ['toggleMove', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2stdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1mZWVkYmFjay9zcmMvbGliL2ZlZWRiYWNrLXRvb2xiYXIvZmVlZGJhY2stdG9vbGJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1mZWVkYmFjay9zcmMvbGliL2ZlZWRiYWNrLXRvb2xiYXIvZmVlZGJhY2stdG9vbGJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFpQixTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7SUNrQjlELCtCQUMwRjtJQUN4RiwyQkFDd1U7SUFDMVUsaUJBQU07OztJQUhzQixzRUFBMkM7Ozs7SUFhdkUsK0JBQ3dGO0lBQ3RGLDJCQUN3VTtJQUMxVSxpQkFBTTs7O0lBSHNCLHFFQUEwQzs7O0FEekI1RSxNQUFNLE9BQU8sd0JBQXdCO0lBWW5DLFlBQW1CLEVBQWMsRUFBVSxlQUFnQztRQUF4RCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBUnBFLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3hDLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUczQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUd2QixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FB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QUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRDsyRkFHUSxTQUFTO2tCQURmLEtBQUs7WUFHQyxVQUFVO2tCQURoQixNQUFNO1lBSUMsYUFBYTtrQkFEcEIsU0FBUzttQkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgZmluYWxpemUsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGZWVkYmFja1NlcnZpY2UgfSBmcm9tICcuLi9mZWVkYmFjay5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmVlZGJhY2stdG9vbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mZWVkYmFjay10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmVlZGJhY2stdG9vbGJhci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmVlZGJhY2tUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgcHVibGljIGRyYXdDb2xvcjogc3RyaW5nO1xuICBAT3V0cHV0KClcbiAgcHVibGljIG1hbmlwdWxhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgcHVibGljIGRpc2FibGVUb29sYmFyVGlwcyA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCd0b2dnbGVNb3ZlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHJpdmF0ZSB0b2dnbGVNb3ZlQnRuOiBFbGVtZW50UmVmO1xuICBwdWJsaWMgaXNTd2l0Y2ggPSBmYWxzZTtcbiAgcHVibGljIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgcHVibGljIHZhcnM6IG9iamVjdCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBmZWVkYmFja1NlcnZpY2U6IEZlZWRiYWNrU2VydmljZSkge1xuICAgIHRoaXMudmFycyA9IGZlZWRiYWNrU2VydmljZS5pbml0aWFsVmFyaWFibGVzO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBlbFN0eWxlID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlO1xuICAgIGVsU3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGVsU3R5bGUubGVmdCA9ICc0MyUnO1xuICAgIGVsU3R5bGUudG9wID0gJzFlbSc7XG4gICAgdGhpcy5hZGREcmFnTGlzdGVuZXJPbk1vdmVCdG4oKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmlzU3dpdGNoID0gdGhpcy5kcmF3Q29sb3IgIT09IHRoaXMuZmVlZGJhY2tTZXJ2aWNlLmhpZ2hsaWdodGVkQ29sb3I7XG4gIH1cblxuICBwdWJsaWMgZG9uZSgpIHtcbiAgICB0aGlzLm1hbmlwdWxhdGUuZW1pdCgnZG9uZScpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUhpZ2hsaWdodCgpIHtcbiAgICB0aGlzLmlzU3dpdGNoID0gZmFsc2U7XG4gICAgdGhpcy5tYW5pcHVsYXRlLmVtaXQodGhpcy5mZWVkYmFja1NlcnZpY2UuaGlnaGxpZ2h0ZWRDb2xvcik7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlSGlkZSgpIHtcbiAgICB0aGlzLmlzU3dpdGNoID0gdHJ1ZTtcbiAgICB0aGlzLm1hbmlwdWxhdGUuZW1pdCh0aGlzLmZlZWRiYWNrU2VydmljZS5oaWRkZW5Db2xvcik7XG4gIH1cblxuICBwdWJsaWMgYWRkRHJhZ0xpc3RlbmVyT25Nb3ZlQnRuKCkge1xuICAgIGNvbnN0IG1vdXNlVXAgPSBmcm9tRXZlbnQodGhpcy50b2dnbGVNb3ZlQnRuLm5hdGl2ZUVsZW1lbnQsICdtb3VzZXVwJyk7XG4gICAgY29uc3QgbW91c2VNb3ZlID0gZnJvbUV2ZW50KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJ21vdXNlbW92ZScpO1xuICAgIGNvbnN0IG1vdXNlRG93biA9IGZyb21FdmVudCh0aGlzLnRvZ2dsZU1vdmVCdG4ubmF0aXZlRWxlbWVudCwgJ21vdXNlZG93bicpO1xuICAgIGNvbnN0IG1vdXNlRHJhZyA9IG1vdXNlRG93bi5waXBlKG1lcmdlTWFwKChtZDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgdGhpcy5mZWVkYmFja1NlcnZpY2Uuc2V0SXNEcmFnZ2luZ1Rvb2xiYXIodHJ1ZSk7XG4gICAgICBjb25zdCBzdGFydFggPSBtZC5vZmZzZXRYO1xuICAgICAgY29uc3Qgc3RhcnRZID0gbWQub2Zmc2V0WTtcbiAgICAgIHRoaXMuZGlzYWJsZVRvb2xiYXJUaXBzID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAvLyBDYWxjdWxhdGUgZGlmIHdpdGggbW91c2Vtb3ZlIHVudGlsIG1vdXNldXBcbiAgICAgIHJldHVybiBtb3VzZU1vdmUucGlwZShcbiAgICAgICAgbWFwKChtbTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgIG1tLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IG1tLmNsaWVudFggLSBzdGFydFgsXG4gICAgICAgICAgICB0b3A6IG1tLmNsaWVudFkgLSBzdGFydFlcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGlzYWJsZVRvb2xiYXJUaXBzID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5mZWVkYmFja1NlcnZpY2Uuc2V0SXNEcmFnZ2luZ1Rvb2xiYXIoZmFsc2UpO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFrZVVudGlsKG1vdXNlVXApKTtcbiAgICB9KSk7XG4gICAgbW91c2VEcmFnLnN1YnNjcmliZShcbiAgICAgIChwb3MpID0+IHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSBwb3MubGVmdCArICdweCc7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBwb3MudG9wICsgJ3B4JztcbiAgICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2IGV4Y2x1ZGUtcmVjdD1cInRydWVcIiBjbGFzcz1cInRvb2xiYXJcIj5cbiAgPGRpdiBjbGFzcz1cIm1vdmUtdG9vbGJhclwiICN0b2dnbGVNb3ZlIFttYXRUb29sdGlwXT1cInZhcnNbJ21vdmVUb29sYmFyVGlwJ11cIiBbbWF0VG9vbHRpcERpc2FibGVkXT1cImRpc2FibGVUb29sYmFyVGlwc1wiPlxuICAgIDxzdmcgZm9jdXNhYmxlPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiRHJhZ1wiIGZpbGw9XCIjQkRCREJEXCIgaGVpZ2h0PVwiNTZcIiB3aWR0aD1cIjE2XCJcbiAgICAgICAgIHZpZXdCb3g9XCItMiAyIDEyIDEyXCI+XG4gICAgICA8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMS41XCI+PC9jaXJjbGU+XG4gICAgICA8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCI3LjVcIiByPVwiMS41XCI+PC9jaXJjbGU+XG4gICAgICA8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxMy41XCIgcj1cIjEuNVwiPjwvY2lyY2xlPlxuICAgICAgPGNpcmNsZSBjeD1cIjYuNVwiIGN5PVwiMS41XCIgcj1cIjEuNVwiPjwvY2lyY2xlPlxuICAgICAgPGNpcmNsZSBjeD1cIjYuNVwiIGN5PVwiNy41XCIgcj1cIjEuNVwiPjwvY2lyY2xlPlxuICAgICAgPGNpcmNsZSBjeD1cIjYuNVwiIGN5PVwiMTMuNVwiIHI9XCIxLjVcIj48L2NpcmNsZT5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG4gIDxidXR0b24gI2hpZ2hsaWdodEJ0biAoY2xpY2spPVwidG9nZ2xlSGlnaGxpZ2h0KClcIiBbbWF0VG9vbHRpcF09XCJ2YXJzWydoaWdobGlnaHRUaXAnXVwiXG4gICAgICAgICAgW21hdFRvb2x0aXBEaXNhYmxlZF09XCJkaXNhYmxlVG9vbGJhclRpcHNcIiBjbGFzcz1cImhpZ2hsaWdodC10b2dnbGVcIiBbbmdDbGFzc109XCJ7J2RlZXBlbi1jb2xvcic6ICFpc1N3aXRjaH1cIj5cbiAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZVwiPlxuICAgICAgPHN2ZyBmb2N1c2FibGU9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgaGVpZ2h0PVwiMzZcIiB3aWR0aD1cIjM2XCJcbiAgICAgICAgICAgZmlsbD1cIiNmZmQ3NDBcIj5cbiAgICAgICAgPHBhdGggZD1cIk0zIDNoMTh2MThIM3pcIj48L3BhdGg+XG4gICAgICA8L3N2Zz5cblxuICAgICAgPHN2ZyBmb2N1c2FibGU9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJcIiBmaWxsPVwiIzc1NzU3NVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICBoZWlnaHQ9XCIzNlwiIHdpZHRoPVwiMzZcIiBbbmdDbGFzc109XCJ7J3RvZ2dsZS1kZWNvcmF0b3InOiAhaXNTd2l0Y2h9XCIgKm5nSWY9XCIhaXNTd2l0Y2hcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTIxIDE3aC0yLjU4bDIuNTEgMi41NmMtLjE4LjY5LS43MyAxLjI2LTEuNDEgMS40NEwxNyAxOC41VjIxaC0ydi02aDZ2MnpNMTkgN2gydjJoLTJWN3ptMi0yaC0yVjMuMDhjMS4xIDAgMiAuOTIgMiAxLjkyem0tNi0yaDJ2MmgtMlYzem00IDhoMnYyaC0ydi0yek05IDIxSDd2LTJoMnYyek01IDlIM1Y3aDJ2MnptMC01LjkyVjVIM2MwLTEgMS0xLjkyIDItMS45MnpNNSAxN0gzdi0yaDJ2MnpNOSA1SDdWM2gydjJ6bTQgMGgtMlYzaDJ2MnptMCAxNmgtMnYtMmgydjJ6bS04LThIM3YtMmgydjJ6bTAgOC4wOEMzLjkgMjEuMDggMyAyMCAzIDE5aDJ2Mi4wOHpcIj48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICA8L3NwYW4+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVIaWRlKClcIiBbbWF0VG9vbHRpcF09XCJ2YXJzWydoaWRlVGlwJ11cIiBbbWF0VG9vbHRpcERpc2FibGVkXT1cImRpc2FibGVUb29sYmFyVGlwc1wiXG4gICAgICAgICAgY2xhc3M9XCJoaWRlLXRvZ2dsZVwiIFtuZ0NsYXNzXT1cInsnZGVlcGVuLWNvbG9yJzogaXNTd2l0Y2h9XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJ0b2dnbGVcIj5cbiAgICAgIDxzdmcgZm9jdXNhYmxlPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGhlaWdodD1cIjM2XCIgd2lkdGg9XCIzNlwiXG4gICAgICAgICAgIGZpbGw9XCIjMDAwXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMyAzaDE4djE4SDN6XCI+PC9wYXRoPlxuICAgICAgPC9zdmc+XG4gICAgICA8c3ZnIGZvY3VzYWJsZT1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlwiIGZpbGw9XCIjNzU3NTc1XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgIGhlaWdodD1cIjM2XCIgd2lkdGg9XCIzNlwiIFtuZ0NsYXNzXT1cInsndG9nZ2xlLWRlY29yYXRvcic6IGlzU3dpdGNofVwiICpuZ0lmPVwiaXNTd2l0Y2hcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTIxIDE3aC0yLjU4bDIuNTEgMi41NmMtLjE4LjY5LS43MyAxLjI2LTEuNDEgMS40NEwxNyAxOC41VjIxaC0ydi02aDZ2MnpNMTkgN2gydjJoLTJWN3ptMi0yaC0yVjMuMDhjMS4xIDAgMiAuOTIgMiAxLjkyem0tNi0yaDJ2MmgtMlYzem00IDhoMnYyaC0ydi0yek05IDIxSDd2LTJoMnYyek01IDlIM1Y3aDJ2MnptMC01LjkyVjVIM2MwLTEgMS0xLjkyIDItMS45MnpNNSAxN0gzdi0yaDJ2MnpNOSA1SDdWM2gydjJ6bTQgMGgtMlYzaDJ2MnptMCAxNmgtMnYtMmgydjJ6bS04LThIM3YtMmgydjJ6bTAgOC4wOEMzLjkgMjEuMDggMyAyMCAzIDE5aDJ2Mi4wOHpcIj48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICA8L3NwYW4+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJtZXJnZS1idXR0b25cIiAoY2xpY2spPVwiZG9uZSgpXCI+e3t2YXJzWydlZGl0RG9uZUxhYmVsJ119fTwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=