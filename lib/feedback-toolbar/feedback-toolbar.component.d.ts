import { ElementRef, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import * as i0 from "@angular/core";
export declare class FeedbackToolbarComponent implements AfterViewInit, OnChanges {
    el: ElementRef;
    private feedbackService;
    drawColor: string;
    manipulate: EventEmitter<string>;
    disableToolbarTips: boolean;
    private toggleMoveBtn;
    isSwitch: boolean;
    isDragging: boolean;
    vars: object;
    constructor(el: ElementRef, feedbackService: FeedbackService);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    done(): void;
    toggleHighlight(): void;
    toggleHide(): void;
    addDragListenerOnMoveBtn(): void;
    static ɵfac: i0.ɵɵFactoryDef<FeedbackToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FeedbackToolbarComponent, "feedback-toolbar", never, { "drawColor": "drawColor"; }, { "manipulate": "manipulate"; }, never, never>;
}
