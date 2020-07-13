import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { FeedbackToolbarComponent } from './feedback-toolbar/feedback-toolbar.component';
import { FeedbackRectangleComponent } from './feedback-rectangle/feedback-rectangle.component';
import { FeedbackService } from './feedback.service';
import { FeedbackDirective } from './feedback.directive';
import * as i0 from "@angular/core";
export class FeedbackModule {
}
FeedbackModule.ɵmod = i0.ɵɵdefineNgModule({ type: FeedbackModule });
FeedbackModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FeedbackModule_Factory(t) { return new (t || FeedbackModule)(); }, providers: [
        FeedbackService
    ], imports: [[
            MatDialogModule,
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            MatTooltipModule,
            CommonModule,
            FormsModule,
            MatCheckboxModule,
            MatProgressSpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FeedbackModule, { declarations: [FeedbackDialogComponent,
        FeedbackToolbarComponent,
        FeedbackRectangleComponent,
        FeedbackDirective], imports: [MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatTooltipModule,
        CommonModule,
        FormsModule,
        MatCheckboxModule,
        MatProgressSpinnerModule], exports: [FeedbackDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FeedbackModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    FeedbackDialogComponent,
                    FeedbackToolbarComponent,
                    FeedbackRectangleComponent,
                    FeedbackDirective
                ],
                imports: [
                    MatDialogModule,
                    MatButtonModule,
                    MatIconModule,
                    MatInputModule,
                    MatTooltipModule,
                    CommonModule,
                    FormsModule,
                    MatCheckboxModule,
                    MatProgressSpinnerModule
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
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2subW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZmVlZGJhY2svc3JjL2xpYi9mZWVkYmFjay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBOEJ6RCxNQUFNLE9BQU8sY0FBYzs7a0RBQWQsY0FBYzsyR0FBZCxjQUFjLG1CQUpkO1FBQ1QsZUFBZTtLQUNoQixZQW5CUTtZQUNQLGVBQWU7WUFDZixlQUFlO1lBQ2YsYUFBYTtZQUNiLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsd0JBQXdCO1NBQ3pCO3dGQVdVLGNBQWMsbUJBMUJ2Qix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLDBCQUEwQjtRQUMxQixpQkFBaUIsYUFHakIsZUFBZTtRQUNmLGVBQWU7UUFDZixhQUFhO1FBQ2IsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osV0FBVztRQUNYLGlCQUFpQjtRQUNqQix3QkFBd0IsYUFHeEIsaUJBQWlCO2tEQVNSLGNBQWM7Y0E1QjFCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLDBCQUEwQjtvQkFDMUIsaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxpQkFBaUI7b0JBQ2pCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGVBQWU7aUJBQ2hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBGZWVkYmFja0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZmVlZGJhY2stZGlhbG9nL2ZlZWRiYWNrLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmVlZGJhY2tUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9mZWVkYmFjay10b29sYmFyL2ZlZWRiYWNrLXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZlZWRiYWNrUmVjdGFuZ2xlQ29tcG9uZW50IH0gZnJvbSAnLi9mZWVkYmFjay1yZWN0YW5nbGUvZmVlZGJhY2stcmVjdGFuZ2xlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZWVkYmFja1NlcnZpY2UgfSBmcm9tICcuL2ZlZWRiYWNrLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmVlZGJhY2tEaXJlY3RpdmUgfSBmcm9tICcuL2ZlZWRiYWNrLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZlZWRiYWNrRGlhbG9nQ29tcG9uZW50LFxuICAgIEZlZWRiYWNrVG9vbGJhckNvbXBvbmVudCxcbiAgICBGZWVkYmFja1JlY3RhbmdsZUNvbXBvbmVudCxcbiAgICBGZWVkYmFja0RpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRmVlZGJhY2tEaXJlY3RpdmVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgRmVlZGJhY2tEaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRmVlZGJhY2tTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRmVlZGJhY2tNb2R1bGUge1xufVxuIl19