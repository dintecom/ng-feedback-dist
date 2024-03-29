(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/dialog'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/progress-spinner'), require('@angular/material/tooltip'), require('rxjs'), require('rxjs/operators'), require('html2canvas'), require('@angular/cdk/overlay')) :
    typeof define === 'function' && define.amd ? define('ng-feedback', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/button', '@angular/material/checkbox', '@angular/material/dialog', '@angular/material/icon', '@angular/material/input', '@angular/material/progress-spinner', '@angular/material/tooltip', 'rxjs', 'rxjs/operators', 'html2canvas', '@angular/cdk/overlay'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng-feedback'] = {}, global.ng.core, global.ng.common, global.ng.forms, global.ng.material.button, global.ng.material.checkbox, global.ng.material.dialog, global.ng.material.icon, global.ng.material.input, global.ng.material.progressSpinner, global.ng.material.tooltip, global.rxjs, global.rxjs.operators, global.html2canvas, global.ng.cdk.overlay));
}(this, (function (exports, i0, i3, i4$1, i4, i5, i1, icon, input, i7, i2, rxjs, operators, html2canvas, i3$1) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i4__namespace$1 = /*#__PURE__*/_interopNamespace(i4$1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var html2canvas__default = /*#__PURE__*/_interopDefaultLegacy(html2canvas);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);

    var Feedback = /** @class */ (function () {
        function Feedback() {
        }
        return Feedback;
    }());

    var Rectangle = /** @class */ (function () {
        function Rectangle() {
            this.windowScrollY = window.scrollY;
            this.windowScrollX = window.scrollX;
        }
        return Rectangle;
    }());

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
        FeedbackService.prototype.initScreenshotCanvas = function () {
            var _this = this;
            var body = document.body;
            html2canvas__default['default'](body, {
                logging: false,
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                x: document.documentElement.scrollLeft,
                y: document.documentElement.scrollTop,
                allowTaint: true,
                useCORS: true
            }).then(function (bodyCanvas) {
                _this.screenshotCanvasSource.next(bodyCanvas);
            });
        };
        FeedbackService.prototype.setCanvas = function (canvas) {
            this.screenshotCanvasSource.next(canvas);
        };
        FeedbackService.prototype.setFeedback = function (feedback) {
            this.feedbackSource.next(feedback);
        };
        FeedbackService.prototype.setIsDraggingToolbar = function (isDragging) {
            this.isDraggingToolbarSource.next(isDragging);
        };
        FeedbackService.prototype.getImgEle = function (canvas) {
            var img = canvas.toDataURL('image/png'), imageEle = document.createElement('img');
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
        FeedbackService.prototype.hideBackDrop = function () {
            var dialogBackDrop = document.getElementsByClassName('dialogBackDrop')[0];
            dialogBackDrop.style.backgroundColor = 'initial';
        };
        FeedbackService.prototype.showBackDrop = function () {
            var dialogBackDrop = document.getElementsByClassName('dialogBackDrop')[0];
            if (!dialogBackDrop.getAttribute('data-html2canvas-ignore')) {
                dialogBackDrop.setAttribute('data-html2canvas-ignore', 'true');
            }
            dialogBackDrop.style.backgroundColor = 'rgba(0, 0, 0, .288)';
        };
        return FeedbackService;
    }());
    FeedbackService.ɵfac = function FeedbackService_Factory(t) { return new (t || FeedbackService)(); };
    FeedbackService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FeedbackService, factory: FeedbackService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FeedbackService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var _c0$2 = ["toggleMove"];
    var _c1$2 = function (a0) { return { "toggle-decorator": a0 }; };
    function FeedbackToolbarComponent__svg_svg_15_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(0, "svg", 19);
            i0__namespace.ɵɵelement(1, "path", 20);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(1, _c1$2, !ctx_r2.isSwitch));
        }
    }
    function FeedbackToolbarComponent__svg_svg_20_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(0, "svg", 19);
            i0__namespace.ɵɵelement(1, "path", 20);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(1, _c1$2, ctx_r3.isSwitch));
        }
    }
    var _c2 = function (a0) { return { "deepen-color": a0 }; };
    var FeedbackToolbarComponent = /** @class */ (function () {
        function FeedbackToolbarComponent(el, feedbackService) {
            this.el = el;
            this.feedbackService = feedbackService;
            this.manipulate = new i0.EventEmitter();
            this.disableToolbarTips = false;
            this.isSwitch = false;
            this.isDragging = false;
            this.vars = {};
            this.vars = feedbackService.initialVariables;
        }
        FeedbackToolbarComponent.prototype.ngAfterViewInit = function () {
            var elStyle = this.el.nativeElement.style;
            elStyle.position = 'absolute';
            elStyle.left = '43%';
            elStyle.top = '1em';
            this.addDragListenerOnMoveBtn();
        };
        FeedbackToolbarComponent.prototype.ngOnChanges = function () {
            this.isSwitch = this.drawColor !== this.feedbackService.highlightedColor;
        };
        FeedbackToolbarComponent.prototype.done = function () {
            this.manipulate.emit('done');
        };
        FeedbackToolbarComponent.prototype.toggleHighlight = function () {
            this.isSwitch = false;
            this.manipulate.emit(this.feedbackService.highlightedColor);
        };
        FeedbackToolbarComponent.prototype.toggleHide = function () {
            this.isSwitch = true;
            this.manipulate.emit(this.feedbackService.hiddenColor);
        };
        FeedbackToolbarComponent.prototype.addDragListenerOnMoveBtn = function () {
            var _this = this;
            var mouseUp = rxjs.fromEvent(this.toggleMoveBtn.nativeElement, 'mouseup');
            var mouseMove = rxjs.fromEvent(document.documentElement, 'mousemove');
            var mouseDown = rxjs.fromEvent(this.toggleMoveBtn.nativeElement, 'mousedown');
            var mouseDrag = mouseDown.pipe(operators.mergeMap(function (md) {
                _this.feedbackService.setIsDraggingToolbar(true);
                var startX = md.offsetX;
                var startY = md.offsetY;
                _this.disableToolbarTips = true;
                _this.isDragging = true;
                // Calculate dif with mousemove until mouseup
                return mouseMove.pipe(operators.map(function (mm) {
                    mm.preventDefault();
                    return {
                        left: mm.clientX - startX,
                        top: mm.clientY - startY
                    };
                }), operators.finalize(function () {
                    _this.isDragging = false;
                    _this.disableToolbarTips = false;
                    _this.feedbackService.setIsDraggingToolbar(false);
                }), operators.takeUntil(mouseUp));
            }));
            mouseDrag.subscribe(function (pos) {
                _this.el.nativeElement.style.left = pos.left + 'px';
                _this.el.nativeElement.style.top = pos.top + 'px';
            });
        };
        return FeedbackToolbarComponent;
    }());
    FeedbackToolbarComponent.ɵfac = function FeedbackToolbarComponent_Factory(t) { return new (t || FeedbackToolbarComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(FeedbackService)); };
    FeedbackToolbarComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FeedbackToolbarComponent, selectors: [["feedback-toolbar"]], viewQuery: function FeedbackToolbarComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$2, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.toggleMoveBtn = _t.first);
            }
        }, inputs: { drawColor: "drawColor" }, outputs: { manipulate: "manipulate" }, features: [i0__namespace.ɵɵNgOnChangesFeature], decls: 23, vars: 15, consts: [["exclude-rect", "true", 1, "toolbar"], [1, "move-toolbar", 3, "matTooltip", "matTooltipDisabled"], ["toggleMove", ""], ["focusable", "false", "aria-label", "Drag", "fill", "#BDBDBD", "height", "56", "width", "16", "viewBox", "-2 2 12 12"], ["cx", "1.5", "cy", "1.5", "r", "1.5"], ["cx", "1.5", "cy", "7.5", "r", "1.5"], ["cx", "1.5", "cy", "13.5", "r", "1.5"], ["cx", "6.5", "cy", "1.5", "r", "1.5"], ["cx", "6.5", "cy", "7.5", "r", "1.5"], ["cx", "6.5", "cy", "13.5", "r", "1.5"], [1, "highlight-toggle", 3, "matTooltip", "matTooltipDisabled", "ngClass", "click"], ["highlightBtn", ""], [1, "toggle"], ["focusable", "false", "aria-label", "", "viewBox", "0 0 24 24", "height", "36", "width", "36", "fill", "#ffd740"], ["d", "M3 3h18v18H3z"], ["focusable", "false", "aria-label", "", "fill", "#757575", "viewBox", "0 0 24 24", "height", "36", "width", "36", 3, "ngClass", 4, "ngIf"], [1, "hide-toggle", 3, "matTooltip", "matTooltipDisabled", "ngClass", "click"], ["focusable", "false", "aria-label", "", "viewBox", "0 0 24 24", "height", "36", "width", "36", "fill", "#000"], ["mat-button", "", 1, "merge-button", 3, "click"], ["focusable", "false", "aria-label", "", "fill", "#757575", "viewBox", "0 0 24 24", "height", "36", "width", "36", 3, "ngClass"], ["d", "M21 17h-2.58l2.51 2.56c-.18.69-.73 1.26-1.41 1.44L17 18.5V21h-2v-6h6v2zM19 7h2v2h-2V7zm2-2h-2V3.08c1.1 0 2 .92 2 1.92zm-6-2h2v2h-2V3zm4 8h2v2h-2v-2zM9 21H7v-2h2v2zM5 9H3V7h2v2zm0-5.92V5H3c0-1 1-1.92 2-1.92zM5 17H3v-2h2v2zM9 5H7V3h2v2zm4 0h-2V3h2v2zm0 16h-2v-2h2v2zm-8-8H3v-2h2v2zm0 8.08C3.9 21.08 3 20 3 19h2v2.08z"]], template: function FeedbackToolbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1, 2);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(3, "svg", 3);
                i0__namespace.ɵɵelement(4, "circle", 4);
                i0__namespace.ɵɵelement(5, "circle", 5);
                i0__namespace.ɵɵelement(6, "circle", 6);
                i0__namespace.ɵɵelement(7, "circle", 7);
                i0__namespace.ɵɵelement(8, "circle", 8);
                i0__namespace.ɵɵelement(9, "circle", 9);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(10, "button", 10, 11);
                i0__namespace.ɵɵlistener("click", function FeedbackToolbarComponent_Template_button_click_10_listener() { return ctx.toggleHighlight(); });
                i0__namespace.ɵɵelementStart(12, "span", 12);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(13, "svg", 13);
                i0__namespace.ɵɵelement(14, "path", 14);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(15, FeedbackToolbarComponent__svg_svg_15_Template, 2, 3, "svg", 15);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(16, "button", 16);
                i0__namespace.ɵɵlistener("click", function FeedbackToolbarComponent_Template_button_click_16_listener() { return ctx.toggleHide(); });
                i0__namespace.ɵɵelementStart(17, "span", 12);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(18, "svg", 17);
                i0__namespace.ɵɵelement(19, "path", 14);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(20, FeedbackToolbarComponent__svg_svg_20_Template, 2, 3, "svg", 15);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(21, "button", 18);
                i0__namespace.ɵɵlistener("click", function FeedbackToolbarComponent_Template_button_click_21_listener() { return ctx.done(); });
                i0__namespace.ɵɵtext(22);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matTooltip", ctx.vars["moveToolbarTip"])("matTooltipDisabled", ctx.disableToolbarTips);
                i0__namespace.ɵɵadvance(9);
                i0__namespace.ɵɵproperty("matTooltip", ctx.vars["highlightTip"])("matTooltipDisabled", ctx.disableToolbarTips)("ngClass", i0__namespace.ɵɵpureFunction1(11, _c2, !ctx.isSwitch));
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("ngIf", !ctx.isSwitch);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matTooltip", ctx.vars["hideTip"])("matTooltipDisabled", ctx.disableToolbarTips)("ngClass", i0__namespace.ɵɵpureFunction1(13, _c2, ctx.isSwitch));
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngIf", ctx.isSwitch);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate(ctx.vars["editDoneLabel"]);
            }
        }, directives: [i2__namespace.MatTooltip, i3__namespace.NgClass, i3__namespace.NgIf, i4__namespace.MatButton], styles: [".toolbar[_ngcontent-%COMP%]{align-items:center;background-color:#fff;border-radius:2px;box-shadow:#00000024 0 24px 38px 3px,#0000001f 0 9px 46px 8px,#0003 0 11px 15px -7px;cursor:pointer;display:-webkit-inline-flex;flex-direction:row;height:56px;min-width:232px;pointer-events:auto;overflow:visible;position:absolute;margin:0 auto;width:228px;bottom:0;top:25%;left:0;right:0;z-index:999}.move-toolbar[_ngcontent-%COMP%]{cursor:-webkit-grab;height:56px;padding:0 12px;position:relative}.move-toolbar[_ngcontent-%COMP%]:active{cursor:-webkit-grabbing}.toggle[_ngcontent-%COMP%]{display:inline-block;position:relative;height:36px;width:36px}.toggle-decorator[_ngcontent-%COMP%]{left:0px;position:absolute;top:0px}.highlight-toggle[_ngcontent-%COMP%]{align-items:center;background-color:#fff;border:none;box-sizing:border-box;cursor:pointer;display:-webkit-flex;justify-content:center;outline:none;padding:10px;pointer-events:auto;position:relative;height:56px;width:56px}.deepen-color[_ngcontent-%COMP%]{background-color:#e0e0e0!important}.hide-toggle[_ngcontent-%COMP%]{align-items:center;background-color:#fff;border:none;box-sizing:border-box;cursor:pointer;display:-webkit-flex;justify-content:center;outline:none;padding:10px;pointer-events:auto;position:relative;height:56px;width:56px}.merge-button[_ngcontent-%COMP%]{padding:0!important;margin:0 10px!important;min-width:56px;color:#4285f4}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FeedbackToolbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'feedback-toolbar',
                        templateUrl: './feedback-toolbar.component.html',
                        styleUrls: ['./feedback-toolbar.component.css']
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: FeedbackService }]; }, { drawColor: [{
                    type: i0.Input
                }], manipulate: [{
                    type: i0.Output
                }], toggleMoveBtn: [{
                    type: i0.ViewChild,
                    args: ['toggleMove', { static: true }]
                }] });
    })();

    function FeedbackRectangleComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "span", 2);
            i0__namespace.ɵɵlistener("click", function FeedbackRectangleComponent_span_1_Template_span_click_0_listener() { i0__namespace.ɵɵrestoreView(_r2_1); var ctx_r1 = i0__namespace.ɵɵnextContext(); return ctx_r1.onClose(); });
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(1, "svg", 3);
            i0__namespace.ɵɵelement(2, "path", 4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    var _c0$1 = function (a0, a1, a2, a3) { return { "left.px": a0, "top.px": a1, "width.px": a2, "height.px": a3 }; };
    var _c1$1 = function (a0, a1, a2) { return { "highlight": a0, "hide": a1, "noHover": a2 }; };
    var FeedbackRectangleComponent = /** @class */ (function () {
        function FeedbackRectangleComponent(feedbackService) {
            this.feedbackService = feedbackService;
            this.close = new i0.EventEmitter();
            this.showCloseTag = false;
        }
        FeedbackRectangleComponent.prototype.onMouseEnter = function () {
            this.showCloseTag = this.noHover === false;
        };
        FeedbackRectangleComponent.prototype.onMouseLeave = function () {
            this.showCloseTag = false;
        };
        FeedbackRectangleComponent.prototype.onClose = function () {
            this.close.emit();
        };
        return FeedbackRectangleComponent;
    }());
    FeedbackRectangleComponent.ɵfac = function FeedbackRectangleComponent_Factory(t) { return new (t || FeedbackRectangleComponent)(i0__namespace.ɵɵdirectiveInject(FeedbackService)); };
    FeedbackRectangleComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FeedbackRectangleComponent, selectors: [["feedback-rectangle"]], hostBindings: function FeedbackRectangleComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("mouseenter", function FeedbackRectangleComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function FeedbackRectangleComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
            }
        }, inputs: { rectangle: "rectangle", noHover: "noHover" }, outputs: { close: "close" }, decls: 2, vars: 12, consts: [["exclude-rect", "true", 1, "rect", 3, "ngStyle", "ngClass"], ["exclude-rect", "true", "class", "close", 3, "click", 4, "ngIf"], ["exclude-rect", "true", 1, "close", 3, "click"], ["viewBox", "0 0 1024 1024", "width", "16", "height", "16"], ["d", "M896 224l-96-96-288 288-288-288-96 96 288 288-288 288 96 96 288-288 288 288 96-96-288-288 288-288z"]], template: function FeedbackRectangleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtemplate(1, FeedbackRectangleComponent_span_1_Template, 3, 0, "span", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngStyle", i0__namespace.ɵɵpureFunction4(3, _c0$1, ctx.rectangle.startX, ctx.rectangle.startY, ctx.rectangle.width, ctx.rectangle.height))("ngClass", i0__namespace.ɵɵpureFunction3(8, _c1$1, ctx.rectangle.color === ctx.feedbackService.highlightedColor, ctx.rectangle.color !== ctx.feedbackService.highlightedColor, ctx.noHover));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.showCloseTag);
            }
        }, directives: [i3__namespace.NgStyle, i3__namespace.NgClass, i3__namespace.NgIf], styles: [".rect[_ngcontent-%COMP%]{position:fixed;background:none;z-index:3}.highlight[_ngcontent-%COMP%]:not(.noHover):hover{cursor:default;background:rgba(55,131,249,.2)}.hide[_ngcontent-%COMP%]{background-color:#000}.hide[_ngcontent-%COMP%]:not(.noHover):hover{background-color:#1f1f1fbf}.rect[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{width:24px;height:24px;background:#FFF;border-radius:50%;justify-content:center;align-items:center;color:#999;position:absolute;right:-12px;top:-12px;cursor:pointer;display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FeedbackRectangleComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'feedback-rectangle',
                        templateUrl: './feedback-rectangle.component.html',
                        styleUrls: ['./feedback-rectangle.component.css']
                    }]
            }], function () { return [{ type: FeedbackService }]; }, { rectangle: [{
                    type: i0.Input
                }], noHover: [{
                    type: i0.Input
                }], close: [{
                    type: i0.Output
                }], onMouseEnter: [{
                    type: i0.HostListener,
                    args: ['mouseenter']
                }], onMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] });
    })();

    var _c0 = ["screenshotParent"];
    function FeedbackDialogComponent_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(ctx_r3.vars["placeholder"]);
        }
    }
    function FeedbackDialogComponent_div_0_div_11_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 21);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(1, "svg", 22);
            i0__namespace.ɵɵelement(2, "path", 23);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(3, "span", 24);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate(ctx_r6.vars["editTip"]);
        }
    }
    function FeedbackDialogComponent_div_0_div_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 17, 18);
            i0__namespace.ɵɵlistener("click", function FeedbackDialogComponent_div_0_div_11_Template_div_click_0_listener() { i0__namespace.ɵɵrestoreView(_r8_1); var ctx_r7 = i0__namespace.ɵɵnextContext(2); return ctx_r7.expandDrawingBoard(); });
            i0__namespace.ɵɵelement(2, "mat-spinner", 19);
            i0__namespace.ɵɵelement(3, "div");
            i0__namespace.ɵɵtemplate(4, FeedbackDialogComponent_div_0_div_11_div_4_Template, 5, 1, "div", 20);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("diameter", 30);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r4.showSpinner);
        }
    }
    function FeedbackDialogComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 4);
            i0__namespace.ɵɵelementStart(1, "div", 5);
            i0__namespace.ɵɵelementStart(2, "div", 6);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "div", 7);
            i0__namespace.ɵɵelementStart(5, "div", 8);
            i0__namespace.ɵɵtemplate(6, FeedbackDialogComponent_div_0_div_6_Template, 2, 1, "div", 9);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "textarea", 10);
            i0__namespace.ɵɵlistener("ngModelChange", function FeedbackDialogComponent_div_0_Template_textarea_ngModelChange_7_listener($event) { i0__namespace.ɵɵrestoreView(_r10_1); var ctx_r9 = i0__namespace.ɵɵnextContext(); return ctx_r9.feedback.description = $event; });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(8, "div", 11);
            i0__namespace.ɵɵelementStart(9, "mat-checkbox", 12);
            i0__namespace.ɵɵlistener("ngModelChange", function FeedbackDialogComponent_div_0_Template_mat_checkbox_ngModelChange_9_listener($event) { i0__namespace.ɵɵrestoreView(_r10_1); var ctx_r11 = i0__namespace.ɵɵnextContext(); return ctx_r11.includeScreenshot = $event; })("change", function FeedbackDialogComponent_div_0_Template_mat_checkbox_change_9_listener() { i0__namespace.ɵɵrestoreView(_r10_1); var ctx_r12 = i0__namespace.ɵɵnextContext(); return ctx_r12.isIncludeScreenshot(); });
            i0__namespace.ɵɵtext(10);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(11, FeedbackDialogComponent_div_0_div_11_Template, 5, 2, "div", 13);
            i0__namespace.ɵɵelementStart(12, "mat-dialog-actions", 14);
            i0__namespace.ɵɵelementStart(13, "button", 15);
            i0__namespace.ɵɵlistener("click", function FeedbackDialogComponent_div_0_Template_button_click_13_listener() { i0__namespace.ɵɵrestoreView(_r10_1); var ctx_r13 = i0__namespace.ɵɵnextContext(); return ctx_r13.dialogRef.close(); });
            i0__namespace.ɵɵtext(14);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(15, "button", 16);
            i0__namespace.ɵɵlistener("click", function FeedbackDialogComponent_div_0_Template_button_click_15_listener() { i0__namespace.ɵɵrestoreView(_r10_1); var ctx_r14 = i0__namespace.ɵɵnextContext(); return ctx_r14.dialogRef.close(true); });
            i0__namespace.ɵɵtext(16);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r0.vars["title"], " ");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.feedback.description == "");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngModel", ctx_r0.feedback.description);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngModel", ctx_r0.includeScreenshot);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(ctx_r0.vars["checkboxLabel"]);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.includeScreenshot);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(ctx_r0.vars["cancelLabel"]);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(ctx_r0.vars["sendLabel"]);
        }
    }
    function FeedbackDialogComponent_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 28);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r15 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r15.vars["drawRectTip"], " ");
        }
    }
    function FeedbackDialogComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 25);
            i0__namespace.ɵɵtemplate(1, FeedbackDialogComponent_div_1_div_1_Template, 2, 1, "div", 26);
            i0__namespace.ɵɵelementStart(2, "feedback-toolbar", 27);
            i0__namespace.ɵɵlistener("manipulate", function FeedbackDialogComponent_div_1_Template_feedback_toolbar_manipulate_2_listener($event) { i0__namespace.ɵɵrestoreView(_r17_1); var ctx_r16 = i0__namespace.ɵɵnextContext(); return ctx_r16.manipulate($event); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r1.showToolbarTips);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("drawColor", ctx_r1.drawColor);
        }
    }
    function FeedbackDialogComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵelementStart(1, "feedback-rectangle", 29);
            i0__namespace.ɵɵlistener("close", function FeedbackDialogComponent_div_2_Template_feedback_rectangle_close_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r21_1); var index_r19 = restoredCtx.index; var ctx_r20 = i0__namespace.ɵɵnextContext(); return ctx_r20.closeRect(index_r19); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var rectangle_r18 = ctx.$implicit;
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("rectangle", rectangle_r18)("noHover", !ctx_r2.showToolbar || ctx_r2.isDrawingRect);
        }
    }
    var _c1 = function (a0) { return { "pointerCursor": a0 }; };
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
        FeedbackDialogComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.feedbackService.screenshotCanvas$.subscribe(function (canvas) {
                _this.showSpinner = false;
                _this.feedback.screenshot = canvas.toDataURL('image/png');
                _this.screenshotEle = _this.feedbackService.getImgEle(canvas);
                _this.appendScreenshot();
            });
            this.feedbackService.isDraggingToolbar$.subscribe(function (isDragging) {
                if (isDragging) {
                    _this.destroyCanvasListeners();
                }
                else {
                    _this.addCanvasListeners();
                }
            });
            this.dialogRef.afterClosed().subscribe(function (sendNow) {
                if (sendNow === true) {
                    _this.feedbackService.setFeedback(_this.feedback);
                }
            });
            this.feedbackService.showBackDrop();
        };
        FeedbackDialogComponent.prototype.expandDrawingBoard = function () {
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
        FeedbackDialogComponent.prototype.onEscapeKeyDownHandler = function (evt) {
            this.showToolbar = false;
            this.includeScreenshot = true;
            this.detector.detectChanges();
            this.dialogRef.close('key down esc to close');
        };
        FeedbackDialogComponent.prototype.manipulate = function (manipulation) {
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
        FeedbackDialogComponent.prototype.startDraw = function (color) {
            this.drawColor = color;
        };
        FeedbackDialogComponent.prototype.isIncludeScreenshot = function () {
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
        FeedbackDialogComponent.prototype.appendScreenshot = function () {
            if (this.screenshotParent) {
                this.screenshotParent.nativeElement.appendChild(this.screenshotEle);
            }
        };
        FeedbackDialogComponent.prototype.initBackgroundCanvas = function () {
            this.drawCanvas = document.getElementById('draw-canvas');
            // The canvas to draw, must use this way to initial the height and width
            this.drawCanvas.style.height = this.scrollHeight + '';
            this.drawCanvas.style.width = this.scrollWidth + '';
            this.drawCanvas.height = this.scrollHeight;
            this.drawCanvas.width = this.scrollWidth;
            this.drawContainerRect();
        };
        FeedbackDialogComponent.prototype.drawContainerRect = function () {
            var drawContext = this.drawCanvas.getContext('2d'), width = this.scrollWidth, height = this.scrollHeight;
            drawContext.beginPath();
            drawContext.fillStyle = 'rgba(0,0,0,0.3)';
            drawContext.clearRect(0, 0, width, height);
            drawContext.fillRect(0, 0, width, height); // draw the rectangle
        };
        FeedbackDialogComponent.prototype.drawRectangle = function (rect) {
            var _this = this;
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
                this.rectangles.forEach(function (tmpRect) {
                    if (tmpRect.color === _this.feedbackService.highlightedColor) {
                        context.clearRect(tmpRect.startX, tmpRect.startY, tmpRect.width, tmpRect.height);
                    }
                });
            }
        };
        FeedbackDialogComponent.prototype.addCanvasListeners = function () {
            var mouseUp = rxjs.fromEvent(document.documentElement, 'mouseup'), mouseMove = rxjs.fromEvent(document.documentElement, 'mousemove'), mouseDown = rxjs.fromEvent(document.documentElement, 'mousedown'), scroll = rxjs.fromEvent(window, 'scroll');
            this.manuallyDrawRect(mouseDown, mouseMove, mouseUp);
            this.autoDrawRect(mouseMove);
            this.changeRectPosition(scroll);
        };
        FeedbackDialogComponent.prototype.changeRectPosition = function (scroll) {
            var _this = this;
            scroll.subscribe(function (event) {
                var currentWindowScrollX = window.scrollX, currentWindowScrollY = window.scrollY;
                _this.rectangles.forEach(function (rect) {
                    rect.startY = rect.startY - (currentWindowScrollY - rect.windowScrollY);
                    rect.startX = rect.startX - (currentWindowScrollX - rect.windowScrollX);
                    rect.windowScrollY = currentWindowScrollY;
                    rect.windowScrollX = currentWindowScrollX;
                });
                _this.drawPersistCanvasRectangles();
            }, function (error) { return console.error(error); });
        };
        FeedbackDialogComponent.prototype.destroyCanvasListeners = function () {
            if (this.manuallyDrawRect$) {
                this.manuallyDrawRect$.unsubscribe();
            }
            if (this.autoDrawRect$) {
                this.autoDrawRect$.unsubscribe();
            }
        };
        FeedbackDialogComponent.prototype.manuallyDrawRect = function (mouseDown, mouseMove, mouseUp) {
            var _this = this;
            var mouseDrag = mouseDown.pipe(operators.mergeMap(function (mouseDownEvent) {
                if (_this.showToolbarTips) {
                    _this.showToolbarTips = false;
                }
                _this.autoDrawRect$.unsubscribe();
                _this.isDrawingRect = true;
                var newRectangle = new Rectangle();
                newRectangle.startX = mouseDownEvent.clientX;
                newRectangle.startY = mouseDownEvent.clientY;
                newRectangle.color = _this.drawColor;
                return mouseMove.pipe(operators.map(function (mouseMoveEvent) {
                    newRectangle.width = mouseMoveEvent.clientX - mouseDownEvent.clientX;
                    newRectangle.height = mouseMoveEvent.clientY - mouseDownEvent.clientY;
                    return newRectangle;
                }), operators.finalize(function () {
                    // click to draw rectangle
                    if (newRectangle.width === undefined || newRectangle.height === undefined ||
                        newRectangle.width === 0 || newRectangle.height === 0) {
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
                }), operators.takeUntil(mouseUp));
            }));
            this.manuallyDrawRect$ = mouseDrag.subscribe(function (rec) {
                _this.drawPersistCanvasRectangles();
                _this.drawRectangle(rec);
            });
        };
        FeedbackDialogComponent.prototype.autoDrawRect = function (mouseMove) {
            var _this = this;
            this.autoDrawRect$ = mouseMove.subscribe({
                next: function (mouseMoveEvent) {
                    _this.drawPersistCanvasRectangles();
                    _this.drawTempCanvasRectangle(mouseMoveEvent);
                },
                error: function (err) { return console.error('something wrong occurred: ' + err); },
            });
        };
        FeedbackDialogComponent.prototype.drawPersistCanvasRectangles = function () {
            var _this = this;
            this.drawContainerRect();
            this.rectangles.forEach(function (tmpRect) {
                _this.drawRectangle(tmpRect);
            });
        };
        FeedbackDialogComponent.prototype.drawTempCanvasRectangle = function (event) {
            var rectangle = null;
            var clientX = event.clientX, clientY = event.clientY, els = document.elementsFromPoint(clientX, clientY), el = els[2];
            if ((!this.isExcludeRect(els)) && el && this.elCouldBeHighlighted.indexOf(el.nodeName.toLowerCase()) > -1) {
                rectangle = new Rectangle();
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
        FeedbackDialogComponent.prototype.closeRect = function (index) {
            this.rectangles.splice(index, 1);
            this.drawPersistCanvasRectangles();
        };
        FeedbackDialogComponent.prototype.isExcludeRect = function (elements) {
            var result = elements.some(function (el) {
                return el.getAttribute('exclude-rect') === 'true';
            });
            return result;
        };
        return FeedbackDialogComponent;
    }());
    FeedbackDialogComponent.ɵfac = function FeedbackDialogComponent_Factory(t) { return new (t || FeedbackDialogComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace.MatDialogRef), i0__namespace.ɵɵdirectiveInject(FeedbackService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    FeedbackDialogComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FeedbackDialogComponent, selectors: [["feedback-dialog"]], viewQuery: function FeedbackDialogComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.screenshotParent = _t.first);
            }
        }, hostBindings: function FeedbackDialogComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("keydown.escape", function FeedbackDialogComponent_keydown_escape_HostBindingHandler($event) { return ctx.onEscapeKeyDownHandler($event); }, false, i0__namespace.ɵɵresolveDocument);
            }
        }, decls: 4, vars: 6, consts: [["class", "dialog", "data-html2canvas-ignore", "true", 4, "ngIf"], ["data-html2canvas-ignore", "true", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["id", "draw-canvas", 1, "drawCanvas", 3, "ngClass"], ["data-html2canvas-ignore", "true", 1, "dialog"], [1, "dialog-title"], [1, "title-font"], [1, "dialog-content"], [1, "description-tips"], [4, "ngIf"], ["autofocus", "", 1, "description", 3, "ngModel", "ngModelChange"], [1, "screenshot-checkbox"], [3, "ngModel", "ngModelChange", "change"], ["class", "screenshot-content", 3, "click", 4, "ngIf"], ["align", "end", 1, "dialog-actions"], ["mat-button", "", 1, "action-button", 3, "click"], ["mat-button", "", 1, "submit-button", "action-button", 3, "click"], [1, "screenshot-content", 3, "click"], ["screenshotParent", ""], [1, "loading", 3, "diameter"], ["class", "screenshot-tips", 4, "ngIf"], [1, "screenshot-tips"], ["focusable", "false", "aria-label", "", "viewBox", "0 0 24 24"], ["d", "M21 17h-2.58l2.51 2.56c-.18.69-.73 1.26-1.41 1.44L17 18.5V21h-2v-6h6v2zM19 7h2v2h-2V7zm2-2h-2V3.08c1.1 0 2 .92 2 1.92zm-6-2h2v2h-2V3zm4 8h2v2h-2v-2zM9 21H7v-2h2v2zM5 9H3V7h2v2zm0-5.92V5H3c0-1 1-1.92 2-1.92zM5 17H3v-2h2v2zM9 5H7V3h2v2zm4 0h-2V3h2v2zm0 16h-2v-2h2v2zm-8-8H3v-2h2v2zm0 8.08C3.9 21.08 3 20 3 19h2v2.08z"], [1, "screenshot-tips-content"], ["data-html2canvas-ignore", "true"], ["class", "toolbar-tips", 4, "ngIf"], [3, "drawColor", "manipulate"], [1, "toolbar-tips"], [3, "rectangle", "noHover", "close"]], template: function FeedbackDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, FeedbackDialogComponent_div_0_Template, 17, 8, "div", 0);
                i0__namespace.ɵɵtemplate(1, FeedbackDialogComponent_div_1_Template, 3, 2, "div", 1);
                i0__namespace.ɵɵtemplate(2, FeedbackDialogComponent_div_2_Template, 2, 2, "div", 2);
                i0__namespace.ɵɵelement(3, "canvas", 3);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", !ctx.showToolbar);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.showToolbar);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.rectangles);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(4, _c1, !ctx.showToolbar));
            }
        }, directives: [i3__namespace.NgIf, i3__namespace.NgForOf, i3__namespace.NgClass, i4__namespace$1.DefaultValueAccessor, i4__namespace$1.NgControlStatus, i4__namespace$1.NgModel, i5__namespace.MatCheckbox, i1__namespace.MatDialogActions, i4__namespace.MatButton, i7__namespace.MatSpinner, FeedbackToolbarComponent, FeedbackRectangleComponent], styles: [".dialog[_ngcontent-%COMP%]{z-index:1000;position:relative;width:360px;background-color:#fff}.dialog-title[_ngcontent-%COMP%]{background-color:#607d8b;color:#fff;height:56px}.title-font[_ngcontent-%COMP%]{color:#fff;float:left;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:20px;line-height:56px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;padding:0 16px;margin:0}.dialog-content[_ngcontent-%COMP%]{display:-webkit-flex;flex-grow:1;height:200px;position:relative}.description[_ngcontent-%COMP%]{border:none;box-sizing:border-box;box-shadow:none;color:#212121;flex-grow:1;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:16px;line-height:normal;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;max-width:100%;outline:none;padding:18px 16px 0;resize:none;width:100%;height:inherit}.description-tips[_ngcontent-%COMP%]{color:#bdbdbd;display:block;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:16px;line-height:normal;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;left:0px;position:absolute;padding:18px 16px 0;right:0px}.screenshot-checkbox[_ngcontent-%COMP%]{padding:0 16px;background-color:#f8f8f8;height:40px;display:flex;flex-direction:column;justify-content:center}.screenshot-content[_ngcontent-%COMP%]{border:none;cursor:pointer;text-align:center;display:block;position:relative;padding:0;overflow:hidden;height:192px;width:100%;background:rgb(237,237,237) none}.screenshot-tips[_ngcontent-%COMP%]{align-items:center;background-color:#f8f8f899;border-radius:4px;box-sizing:border-box;display:-webkit-flex;flex-direction:column;justify-content:center;min-height:112px;width:224px;z-index:5;position:absolute;top:50%;right:0;bottom:0;left:0;transform:translateY(-50%);margin:0 auto}.screenshot-content[_ngcontent-%COMP%]:hover   .screenshot-tips[_ngcontent-%COMP%]{background-color:#f8f8f8cc}.screenshot-content[_ngcontent-%COMP%]:hover   .screenshot-tips-content[_ngcontent-%COMP%]{color:#4285f4}.screenshot-content[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{color:#4285f4;fill:currentColor}.screenshot-tips[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#757575;fill:currentColor;height:48px;width:48px}.screenshot-tips-content[_ngcontent-%COMP%]{color:#757575;font-weight:400;font-size:14px;line-height:20px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin-top:12px}.dialog-actions[_ngcontent-%COMP%]{border-top:1px solid rgb(224,224,224)}.submit-button[_ngcontent-%COMP%]{margin-right:8px!important;margin-left:5px!important;color:#4285f4}.action-button[_ngcontent-%COMP%]{font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:500;font-stretch:normal;font-size:14px;height:35px;line-height:normal;margin:10px 0;padding:0 8px;position:relative;min-width:75px}.loading[_ngcontent-%COMP%]{margin:0 auto;position:absolute;top:45%;bottom:0;left:0;right:0}.mat-dialog-actions[_ngcontent-%COMP%]{padding:0!important}  .feedbackDialog .mat-dialog-container{padding:0;overflow:visible;background-color:#fff0;box-shadow:none;box-shadow:initial}.toolbar-tips[_ngcontent-%COMP%]{background-color:#fff9;border-radius:12px;color:#757575;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:34px;line-height:40px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;margin-bottom:72px;padding:22px 0;text-align:center;visibility:visible;width:656px;height:auto;-webkit-animation:cssAnimation 0s ease-in 5s forwards;animation:cssAnimation 0s ease-in 5s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.drawCanvas[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:-1;margin:0 auto;cursor:crosshair}.pointerCursor[_ngcontent-%COMP%]{cursor:default!important}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FeedbackDialogComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'feedback-dialog',
                        templateUrl: './feedback-dialog.component.html',
                        styleUrls: ['./feedback-dialog.component.css']
                    }]
            }], function () { return [{ type: i1__namespace.MatDialogRef }, { type: FeedbackService }, { type: i0__namespace.ChangeDetectorRef }, { type: i0__namespace.ElementRef }]; }, { screenshotParent: [{
                    type: i0.ViewChild,
                    args: ['screenshotParent']
                }], onEscapeKeyDownHandler: [{
                    type: i0.HostListener,
                    args: ['document:keydown.escape', ['$event']]
                }] });
    })();

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
            this.send = new i0.EventEmitter();
            this.feedbackService.feedback$.subscribe(function (feedback) {
                _this.send.emit(feedback);
            });
            this.overlay = overlay;
        }
        FeedbackDirective.prototype.onClick = function () {
            this.openFeedbackDialog();
        };
        FeedbackDirective.prototype.openFeedbackDialog = function () {
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
        FeedbackDirective.prototype.ngOnInit = function () {
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
        return FeedbackDirective;
    }());
    FeedbackDirective.ɵfac = function FeedbackDirective_Factory(t) { return new (t || FeedbackDirective)(i0__namespace.ɵɵdirectiveInject(i1__namespace.MatDialog), i0__namespace.ɵɵdirectiveInject(FeedbackService), i0__namespace.ɵɵdirectiveInject(i3__namespace$1.Overlay)); };
    FeedbackDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: FeedbackDirective, selectors: [["", "feedback", ""]], hostBindings: function FeedbackDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("click", function FeedbackDirective_click_HostBindingHandler() { return ctx.onClick(); });
            }
        }, inputs: { title: "title", placeholder: "placeholder", editTip: "editTip", checkboxLabel: "checkboxLabel", cancelLabel: "cancelLabel", sendLabel: "sendLabel", moveToolbarTip: "moveToolbarTip", drawRectTip: "drawRectTip", highlightTip: "highlightTip", hideTip: "hideTip", editDoneLabel: "editDoneLabel" }, outputs: { send: "send" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FeedbackDirective, [{
                type: i0.Directive,
                args: [{ selector: '[feedback]' }]
            }], function () { return [{ type: i1__namespace.MatDialog }, { type: FeedbackService }, { type: i3__namespace$1.Overlay }]; }, { title: [{
                    type: i0.Input
                }], placeholder: [{
                    type: i0.Input
                }], editTip: [{
                    type: i0.Input
                }], checkboxLabel: [{
                    type: i0.Input
                }], cancelLabel: [{
                    type: i0.Input
                }], sendLabel: [{
                    type: i0.Input
                }], moveToolbarTip: [{
                    type: i0.Input
                }], drawRectTip: [{
                    type: i0.Input
                }], highlightTip: [{
                    type: i0.Input
                }], hideTip: [{
                    type: i0.Input
                }], editDoneLabel: [{
                    type: i0.Input
                }], send: [{
                    type: i0.Output
                }], onClick: [{
                    type: i0.HostListener,
                    args: ['click']
                }] });
    })();

    var FeedbackModule = /** @class */ (function () {
        function FeedbackModule() {
        }
        return FeedbackModule;
    }());
    FeedbackModule.ɵfac = function FeedbackModule_Factory(t) { return new (t || FeedbackModule)(); };
    FeedbackModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FeedbackModule });
    FeedbackModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [
            FeedbackService
        ], imports: [[
                i1.MatDialogModule,
                i4.MatButtonModule,
                icon.MatIconModule,
                input.MatInputModule,
                i2.MatTooltipModule,
                i3.CommonModule,
                i4$1.FormsModule,
                i5.MatCheckboxModule,
                i7.MatProgressSpinnerModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FeedbackModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            FeedbackDialogComponent,
                            FeedbackToolbarComponent,
                            FeedbackRectangleComponent,
                            FeedbackDirective
                        ],
                        imports: [
                            i1.MatDialogModule,
                            i4.MatButtonModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            i2.MatTooltipModule,
                            i3.CommonModule,
                            i4$1.FormsModule,
                            i5.MatCheckboxModule,
                            i7.MatProgressSpinnerModule
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
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FeedbackModule, { declarations: [FeedbackDialogComponent,
                FeedbackToolbarComponent,
                FeedbackRectangleComponent,
                FeedbackDirective], imports: [i1.MatDialogModule,
                i4.MatButtonModule,
                icon.MatIconModule,
                input.MatInputModule,
                i2.MatTooltipModule,
                i3.CommonModule,
                i4$1.FormsModule,
                i5.MatCheckboxModule,
                i7.MatProgressSpinnerModule], exports: [FeedbackDirective] });
    })();

    /*
     * Public API Surface of ng-feedback
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Feedback = Feedback;
    exports.FeedbackDirective = FeedbackDirective;
    exports.FeedbackModule = FeedbackModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-feedback.umd.js.map
