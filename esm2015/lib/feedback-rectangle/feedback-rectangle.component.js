import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Rectangle } from '../entity/rectangle';
import { FeedbackService } from '../feedback.service';
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
FeedbackRectangleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FeedbackRectangleComponent, selectors: [["feedback-rectangle"]], hostBindings: function FeedbackRectangleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function FeedbackRectangleComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function FeedbackRectangleComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { rectangle: "rectangle", noHover: "noHover" }, outputs: { close: "close" }, decls: 2, vars: 12, consts: [["exclude-rect", "true", 1, "rect", 3, "ngStyle", "ngClass"], ["exclude-rect", "true", "class", "close", 3, "click", 4, "ngIf"], ["exclude-rect", "true", 1, "close", 3, "click"], ["viewBox", "0 0 1024 1024", "width", "16", "height", "16"], ["d", "M896 224l-96-96-288 288-288-288-96 96 288 288-288 288 96 96 288-288 288 288 96-96-288-288 288-288z"]], template: function FeedbackRectangleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, FeedbackRectangleComponent_span_1_Template, 3, 0, "span", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(3, _c0, ctx.rectangle.startX, ctx.rectangle.startY, ctx.rectangle.width, ctx.rectangle.height))("ngClass", i0.ɵɵpureFunction3(8, _c1, ctx.rectangle.color === ctx.feedbackService.highlightedColor, ctx.rectangle.color !== ctx.feedbackService.highlightedColor, ctx.noHover));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showCloseTag);
    } }, directives: [i2.NgStyle, i2.NgClass, i2.NgIf], styles: [".rect[_ngcontent-%COMP%]{background:none;position:fixed;z-index:3}.highlight[_ngcontent-%COMP%]:not(.noHover):hover{background:rgba(55,131,249,.2);cursor:default}.hide[_ngcontent-%COMP%]{background-color:#000}.hide[_ngcontent-%COMP%]:not(.noHover):hover{background-color:rgba(31,31,31,.75)}.rect[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{-moz-user-select:none;-webkit-user-select:none;align-items:center;background:#fff;border-radius:50%;color:#999;cursor:pointer;display:flex;height:24px;justify-content:center;position:absolute;right:-12px;top:-12px;user-select:none;width:24px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2stcmVjdGFuZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWZlZWRiYWNrL3NyYy9saWIvZmVlZGJhY2stcmVjdGFuZ2xlL2ZlZWRiYWNrLXJlY3RhbmdsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1mZWVkYmFjay9zcmMvbGliL2ZlZWRiYWNrLXJlY3RhbmdsZS9mZWVkYmFjay1yZWN0YW5nbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0lDS3BELCtCQUNFO0lBRDJELDBMQUFtQjtJQUM5RSxtQkFFSTtJQUZKLDhCQUVJO0lBQUEsMEJBQ2dIO0lBQ3BILGlCQUFNO0lBQ1IsaUJBQU87Ozs7QURKVCxNQUFNLE9BQU8sMEJBQTBCO0lBU3JDLFlBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUg1QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNwQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztJQUdyQyxDQUFDO0lBR00sWUFBWTtRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDO0lBQzdDLENBQUM7SUFHTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDOztvR0F4QlUsMEJBQTBCOytEQUExQiwwQkFBMEI7aUhBQTFCLGtCQUFjLGdHQUFkLGtCQUFjOztRQ1QzQiw4QkFPRTtRQUFBLDZFQU1PO1FBQ1QsaUJBQU07O1FBZGdDLDJJQUd3QixnTEFBQTtRQUluQixlQUFrQjtRQUFsQix1Q0FBa0I7O3VGREVoRCwwQkFBMEI7Y0FMdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEO2tFQUdRLFNBQVM7a0JBRGYsS0FBSztZQUdDLE9BQU87a0JBRGIsS0FBSztZQUdDLEtBQUs7a0JBRFgsTUFBTTtZQVFBLFlBQVk7a0JBRGxCLFlBQVk7bUJBQUMsWUFBWTtZQU1uQixZQUFZO2tCQURsQixZQUFZO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuLi9lbnRpdHkvcmVjdGFuZ2xlJztcbmltcG9ydCB7IEZlZWRiYWNrU2VydmljZSB9IGZyb20gJy4uL2ZlZWRiYWNrLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmZWVkYmFjay1yZWN0YW5nbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmVlZGJhY2stcmVjdGFuZ2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmVlZGJhY2stcmVjdGFuZ2xlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGZWVkYmFja1JlY3RhbmdsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByZWN0YW5nbGU6IFJlY3RhbmdsZTtcbiAgQElucHV0KClcbiAgcHVibGljIG5vSG92ZXI6IGJvb2xlYW47XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHB1YmxpYyBzaG93Q2xvc2VUYWc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmVlZGJhY2tTZXJ2aWNlOiBGZWVkYmFja1NlcnZpY2UpIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBwdWJsaWMgb25Nb3VzZUVudGVyKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0Nsb3NlVGFnID0gdGhpcy5ub0hvdmVyID09PSBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBwdWJsaWMgb25Nb3VzZUxlYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0Nsb3NlVGFnID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgb25DbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgfVxufVxuIiwiPGRpdiBleGNsdWRlLXJlY3Q9XCJ0cnVlXCIgY2xhc3M9XCJyZWN0XCIgW25nU3R5bGVdPVwieydsZWZ0LnB4JzogcmVjdGFuZ2xlLnN0YXJ0WCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0b3AucHgnOiByZWN0YW5nbGUuc3RhcnRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoLnB4JzogcmVjdGFuZ2xlLndpZHRoICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdoZWlnaHQucHgnOiByZWN0YW5nbGUuaGVpZ2h0IH1cIlxuICAgIFtuZ0NsYXNzXT1cInsnaGlnaGxpZ2h0JzogcmVjdGFuZ2xlLmNvbG9yID09PSBmZWVkYmFja1NlcnZpY2UuaGlnaGxpZ2h0ZWRDb2xvcixcbiAgICAgICAgICAgICAgICAnaGlkZSc6IHJlY3RhbmdsZS5jb2xvciAhPT0gZmVlZGJhY2tTZXJ2aWNlLmhpZ2hsaWdodGVkQ29sb3IsXG4gICAgICAgICAgICAgICAgJ25vSG92ZXInOiBub0hvdmVyfVwiPlxuICA8c3BhbiBleGNsdWRlLXJlY3Q9XCJ0cnVlXCIgY2xhc3M9XCJjbG9zZVwiICpuZ0lmPVwic2hvd0Nsb3NlVGFnXCIgKGNsaWNrKT1cIm9uQ2xvc2UoKVwiPlxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxuICAgICAgICAgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk04OTYgMjI0bC05Ni05Ni0yODggMjg4LTI4OC0yODgtOTYgOTYgMjg4IDI4OC0yODggMjg4IDk2IDk2IDI4OC0yODggMjg4IDI4OCA5Ni05Ni0yODgtMjg4IDI4OC0yODh6XCI+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICA8L3NwYW4+XG48L2Rpdj5cbiJdfQ==