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
FeedbackModule.ɵfac = function FeedbackModule_Factory(t) { return new (t || FeedbackModule)(); };
FeedbackModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FeedbackModule });
FeedbackModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeedbackModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2subW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZmVlZGJhY2svc3JjL2xpYi9mZWVkYmFjay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBOEJ6RCxNQUFNLE9BQU8sY0FBYzs7NEVBQWQsY0FBYztnRUFBZCxjQUFjO3FFQUpkO1FBQ1QsZUFBZTtLQUNoQixZQW5CUTtZQUNQLGVBQWU7WUFDZixlQUFlO1lBQ2YsYUFBYTtZQUNiLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsd0JBQXdCO1NBQ3pCO3VGQVdVLGNBQWM7Y0E1QjFCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLDBCQUEwQjtvQkFDMUIsaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxpQkFBaUI7b0JBQ2pCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGVBQWU7aUJBQ2hCO2FBQ0Y7O3dGQUNZLGNBQWMsbUJBMUJ2Qix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLDBCQUEwQjtRQUMxQixpQkFBaUIsYUFHakIsZUFBZTtRQUNmLGVBQWU7UUFDZixhQUFhO1FBQ2IsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osV0FBVztRQUNYLGlCQUFpQjtRQUNqQix3QkFBd0IsYUFHeEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgRmVlZGJhY2tEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2ZlZWRiYWNrLWRpYWxvZy9mZWVkYmFjay1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEZlZWRiYWNrVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vZmVlZGJhY2stdG9vbGJhci9mZWVkYmFjay10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZWVkYmFja1JlY3RhbmdsZUNvbXBvbmVudCB9IGZyb20gJy4vZmVlZGJhY2stcmVjdGFuZ2xlL2ZlZWRiYWNrLXJlY3RhbmdsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmVlZGJhY2tTZXJ2aWNlIH0gZnJvbSAnLi9mZWVkYmFjay5zZXJ2aWNlJztcbmltcG9ydCB7IEZlZWRiYWNrRGlyZWN0aXZlIH0gZnJvbSAnLi9mZWVkYmFjay5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGZWVkYmFja0RpYWxvZ0NvbXBvbmVudCxcbiAgICBGZWVkYmFja1Rvb2xiYXJDb21wb25lbnQsXG4gICAgRmVlZGJhY2tSZWN0YW5nbGVDb21wb25lbnQsXG4gICAgRmVlZGJhY2tEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEZlZWRiYWNrRGlyZWN0aXZlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEZlZWRiYWNrRGlhbG9nQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEZlZWRiYWNrU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrTW9kdWxlIHtcbn1cbiJdfQ==