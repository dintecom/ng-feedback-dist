import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../feedback.service";
import * as i2 from "@angular/common";
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
const _c0 = function (a0, a1, a2, a3) { return { "left.px": a0, "top.px": a1, "width.px": a2, "height.px": a3 }; };
const _c1 = function (a0, a1, a2) { return { "highlight": a0, "hide": a1, "noHover": a2 }; };
export class FeedbackRectangleComponent {
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
FeedbackRectangleComponent.ɵfac = function FeedbackRectangleComponent_Factory(t) { return new (t || FeedbackRectangleComponent)(i0.ɵɵdirectiveInject(i1.FeedbackService)); };
FeedbackRectangleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeedbackRectangleComponent, selectors: [["feedback-rectangle"]], hostBindings: function FeedbackRectangleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function FeedbackRectangleComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function FeedbackRectangleComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { rectangle: "rectangle", noHover: "noHover" }, outputs: { close: "close" }, decls: 2, vars: 12, consts: [["exclude-rect", "true", 1, "rect", 3, "ngStyle", "ngClass"], ["exclude-rect", "true", "class", "close", 3, "click", 4, "ngIf"], ["exclude-rect", "true", 1, "close", 3, "click"], ["viewBox", "0 0 1024 1024", "width", "16", "height", "16"], ["d", "M896 224l-96-96-288 288-288-288-96 96 288 288-288 288 96 96 288-288 288 288 96-96-288-288 288-288z"]], template: function FeedbackRectangleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, FeedbackRectangleComponent_span_1_Template, 3, 0, "span", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(3, _c0, ctx.rectangle.startX, ctx.rectangle.startY, ctx.rectangle.width, ctx.rectangle.height))("ngClass", i0.ɵɵpureFunction3(8, _c1, ctx.rectangle.color === ctx.feedbackService.highlightedColor, ctx.rectangle.color !== ctx.feedbackService.highlightedColor, ctx.noHover));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showCloseTag);
    } }, directives: [i2.NgStyle, i2.NgClass, i2.NgIf], styles: [".rect[_ngcontent-%COMP%]{position:fixed;background:none;z-index:3}.highlight[_ngcontent-%COMP%]:not(.noHover):hover{cursor:default;background:rgba(55,131,249,.2)}.hide[_ngcontent-%COMP%]{background-color:#000}.hide[_ngcontent-%COMP%]:not(.noHover):hover{background-color:#1f1f1fbf}.rect[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{width:24px;height:24px;background:#FFF;border-radius:50%;justify-content:center;align-items:center;color:#999;position:absolute;right:-12px;top:-12px;cursor:pointer;display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeedbackRectangleComponent, [{
        type: Component,
        args: [{
                selector: 'feedback-rectangle',
                templateUrl: './feedback-rectangle.component.html',
                styleUrls: ['./feedback-rectangle.component.css']
            }]
    }], function () { return [{ type: i1.FeedbackService }]; }, { rectangle: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2stcmVjdGFuZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWZlZWRiYWNrL3NyYy9saWIvZmVlZGJhY2stcmVjdGFuZ2xlL2ZlZWRiYWNrLXJlY3RhbmdsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1mZWVkYmFjay9zcmMvbGliL2ZlZWRiYWNrLXJlY3RhbmdsZS9mZWVkYmFjay1yZWN0YW5nbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ09uRiwrQkFBaUY7SUFBcEIsMExBQW1CO0lBQzlFLG1CQUM0QjtJQUQ1Qiw4QkFDNEI7SUFDeEIsMEJBQ2dIO0lBQ3BILGlCQUFNO0lBQ1IsaUJBQU87Ozs7QURKVCxNQUFNLE9BQU8sMEJBQTBCO0lBU3JDLFlBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUg1QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNwQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztJQUdyQyxDQUFDO0lBR00sWUFBWTtRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDO0lBQzdDLENBQUM7SUFHTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDOztvR0F4QlUsMEJBQTBCOzZFQUExQiwwQkFBMEI7aUhBQTFCLGtCQUFjLGdHQUFkLGtCQUFjOztRQ1QzQiw4QkFNcUM7UUFDbkMsNkVBTU87UUFDVCxpQkFBTTs7UUFkZ0MsMklBR3dCLGdMQUFBO1FBSW5CLGVBQWtCO1FBQWxCLHVDQUFrQjs7dUZERWhELDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQ7a0VBR1EsU0FBUztrQkFEZixLQUFLO1lBR0MsT0FBTztrQkFEYixLQUFLO1lBR0MsS0FBSztrQkFEWCxNQUFNO1lBUUEsWUFBWTtrQkFEbEIsWUFBWTttQkFBQyxZQUFZO1lBTW5CLFlBQVk7a0JBRGxCLFlBQVk7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJy4uL2VudGl0eS9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgRmVlZGJhY2tTZXJ2aWNlIH0gZnJvbSAnLi4vZmVlZGJhY2suc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZlZWRiYWNrLXJlY3RhbmdsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mZWVkYmFjay1yZWN0YW5nbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mZWVkYmFjay1yZWN0YW5nbGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrUmVjdGFuZ2xlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIHJlY3RhbmdsZTogUmVjdGFuZ2xlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgbm9Ib3ZlcjogYm9vbGVhbjtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgcHVibGljIHNob3dDbG9zZVRhZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmZWVkYmFja1NlcnZpY2U6IEZlZWRiYWNrU2VydmljZSkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIHB1YmxpYyBvbk1vdXNlRW50ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93Q2xvc2VUYWcgPSB0aGlzLm5vSG92ZXIgPT09IGZhbHNlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIHB1YmxpYyBvbk1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93Q2xvc2VUYWcgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xuICB9XG59XG4iLCI8ZGl2IGV4Y2x1ZGUtcmVjdD1cInRydWVcIiBjbGFzcz1cInJlY3RcIiBbbmdTdHlsZV09XCJ7J2xlZnQucHgnOiByZWN0YW5nbGUuc3RhcnRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RvcC5weCc6IHJlY3RhbmdsZS5zdGFydFksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd2lkdGgucHgnOiByZWN0YW5nbGUud2lkdGggLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hlaWdodC5weCc6IHJlY3RhbmdsZS5oZWlnaHQgfVwiXG4gICAgW25nQ2xhc3NdPVwieydoaWdobGlnaHQnOiByZWN0YW5nbGUuY29sb3IgPT09IGZlZWRiYWNrU2VydmljZS5oaWdobGlnaHRlZENvbG9yLFxuICAgICAgICAgICAgICAgICdoaWRlJzogcmVjdGFuZ2xlLmNvbG9yICE9PSBmZWVkYmFja1NlcnZpY2UuaGlnaGxpZ2h0ZWRDb2xvcixcbiAgICAgICAgICAgICAgICAnbm9Ib3Zlcic6IG5vSG92ZXJ9XCI+XG4gIDxzcGFuIGV4Y2x1ZGUtcmVjdD1cInRydWVcIiBjbGFzcz1cImNsb3NlXCIgKm5nSWY9XCJzaG93Q2xvc2VUYWdcIiAoY2xpY2spPVwib25DbG9zZSgpXCI+XG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXG4gICAgICAgICB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTg5NiAyMjRsLTk2LTk2LTI4OCAyODgtMjg4LTI4OC05NiA5NiAyODggMjg4LTI4OCAyODggOTYgOTYgMjg4LTI4OCAyODggMjg4IDk2LTk2LTI4OC0yODggMjg4LTI4OHpcIj48L3BhdGg+XG4gICAgPC9zdmc+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuIl19