import { EventEmitter } from '@angular/core';
import { Rectangle } from '../entity/rectangle';
import { FeedbackService } from '../feedback.service';
import * as i0 from "@angular/core";
export declare class FeedbackRectangleComponent {
    feedbackService: FeedbackService;
    rectangle: Rectangle;
    noHover: boolean;
    close: EventEmitter<boolean>;
    showCloseTag: boolean;
    constructor(feedbackService: FeedbackService);
    onMouseEnter(): void;
    onMouseLeave(): void;
    onClose(): void;
    static ɵfac: i0.ɵɵFactoryDef<FeedbackRectangleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FeedbackRectangleComponent, "feedback-rectangle", never, { "rectangle": "rectangle"; "noHover": "noHover"; }, { "close": "close"; }, never, never>;
}
