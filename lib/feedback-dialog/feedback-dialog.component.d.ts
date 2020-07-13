import { AfterViewInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Feedback } from '../entity/feedback';
import { Rectangle } from '../entity/rectangle';
import { FeedbackService } from '../feedback.service';
import * as i0 from "@angular/core";
export declare class FeedbackDialogComponent implements AfterViewInit {
    dialogRef: MatDialogRef<FeedbackDialogComponent>;
    private feedbackService;
    private detector;
    private el;
    showToolbar: boolean;
    vars: object;
    feedback: Feedback;
    includeScreenshot: boolean;
    showSpinner: boolean;
    screenshotEle: HTMLElement;
    drawCanvas: HTMLCanvasElement;
    showToolbarTips: boolean;
    screenshotParent: ElementRef;
    drawColor: string;
    rectangles: Rectangle[];
    private scrollWidth;
    private scrollHeight;
    private elCouldBeHighlighted;
    private manuallyDrawRect$;
    private autoDrawRect$;
    isDrawingRect: boolean;
    constructor(dialogRef: MatDialogRef<FeedbackDialogComponent>, feedbackService: FeedbackService, detector: ChangeDetectorRef, el: ElementRef);
    ngAfterViewInit(): void;
    expandDrawingBoard(): void;
    onEscapeKeyDownHandler(evt: KeyboardEvent): void;
    manipulate(manipulation: string): void;
    startDraw(color: string): void;
    isIncludeScreenshot(): void;
    private appendScreenshot;
    private initBackgroundCanvas;
    private drawContainerRect;
    private drawRectangle;
    private addCanvasListeners;
    private changeRectPosition;
    private destroyCanvasListeners;
    private manuallyDrawRect;
    private autoDrawRect;
    private drawPersistCanvasRectangles;
    private drawTempCanvasRectangle;
    closeRect(index: number): void;
    private isExcludeRect;
    static ɵfac: i0.ɵɵFactoryDef<FeedbackDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FeedbackDialogComponent, "feedback-dialog", never, {}, {}, never, never>;
}
