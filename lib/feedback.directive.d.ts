import { EventEmitter, OnInit } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackService } from './feedback.service';
export declare class FeedbackDirective implements OnInit {
    private dialogRef;
    private feedbackService;
    private overlay;
    title: string;
    placeholder: string;
    editTip: string;
    checkboxLabel: string;
    cancelLabel: string;
    sendLabel: string;
    moveToolbarTip: string;
    drawRectTip: string;
    highlightTip: string;
    hideTip: string;
    editDoneLabel: string;
    send: EventEmitter<object>;
    constructor(dialogRef: MatDialog, feedbackService: FeedbackService, overlay: Overlay);
    onClick(): void;
    openFeedbackDialog(): void;
    ngOnInit(): void;
}
