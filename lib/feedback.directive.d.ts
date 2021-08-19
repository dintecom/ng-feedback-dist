import { EventEmitter, OnInit } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { Feedback } from './entity/feedback';
import { FeedbackService } from './feedback.service';
import * as i0 from "@angular/core";
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
    send: EventEmitter<Feedback>;
    constructor(dialogRef: MatDialog, feedbackService: FeedbackService, overlay: Overlay);
    onClick(): void;
    openFeedbackDialog(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeedbackDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FeedbackDirective, "[feedback]", never, { "title": "title"; "placeholder": "placeholder"; "editTip": "editTip"; "checkboxLabel": "checkboxLabel"; "cancelLabel": "cancelLabel"; "sendLabel": "sendLabel"; "moveToolbarTip": "moveToolbarTip"; "drawRectTip": "drawRectTip"; "highlightTip": "highlightTip"; "hideTip": "hideTip"; "editDoneLabel": "editDoneLabel"; }, { "send": "send"; }, never>;
}
