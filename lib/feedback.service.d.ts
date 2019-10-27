import { Observable } from 'rxjs';
import { Feedback } from './entity/feedback';
export declare class FeedbackService {
    initialVariables: object;
    highlightedColor: string;
    hiddenColor: string;
    private screenshotCanvasSource;
    screenshotCanvas$: Observable<HTMLCanvasElement>;
    private feedbackSource;
    feedback$: Observable<Feedback>;
    private isDraggingToolbarSource;
    isDraggingToolbar$: Observable<boolean>;
    initScreenshotCanvas(): void;
    setCanvas(canvas: HTMLCanvasElement): void;
    setFeedback(feedback: Feedback): void;
    setIsDraggingToolbar(isDragging: boolean): void;
    getImgEle(canvas: any): HTMLElement;
    hideBackDrop(): void;
    showBackDrop(): void;
}
