import { EventEmitter } from '@angular/core';
import { Rectangle } from '../entity/rectangle';
import { FeedbackService } from '../feedback.service';
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
}
