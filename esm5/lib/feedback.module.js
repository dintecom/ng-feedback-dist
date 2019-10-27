/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
var FeedbackModule = /** @class */ (function () {
    function FeedbackModule() {
    }
    FeedbackModule.decorators = [
        { type: NgModule, args: [{
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
                },] }
    ];
    return FeedbackModule;
}());
export { FeedbackModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2subW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZmVlZGJhY2svIiwic291cmNlcyI6WyJsaWIvZmVlZGJhY2subW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RDtJQUFBO0lBNkJBLENBQUM7O2dCQTdCQSxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHVCQUF1Qjt3QkFDdkIsd0JBQXdCO3dCQUN4QiwwQkFBMEI7d0JBQzFCLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsaUJBQWlCO3dCQUNqQix3QkFBd0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7cUJBQ2xCO29CQUNELGVBQWUsRUFBRTt3QkFDZix1QkFBdUI7cUJBQ3hCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxlQUFlO3FCQUNoQjtpQkFDRjs7SUFFRCxxQkFBQztDQUFBLEFBN0JELElBNkJDO1NBRFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IEZlZWRiYWNrRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9mZWVkYmFjay1kaWFsb2cvZmVlZGJhY2stZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZWVkYmFja1Rvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL2ZlZWRiYWNrLXRvb2xiYXIvZmVlZGJhY2stdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmVlZGJhY2tSZWN0YW5nbGVDb21wb25lbnQgfSBmcm9tICcuL2ZlZWRiYWNrLXJlY3RhbmdsZS9mZWVkYmFjay1yZWN0YW5nbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZlZWRiYWNrU2VydmljZSB9IGZyb20gJy4vZmVlZGJhY2suc2VydmljZSc7XG5pbXBvcnQgeyBGZWVkYmFja0RpcmVjdGl2ZSB9IGZyb20gJy4vZmVlZGJhY2suZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRmVlZGJhY2tEaWFsb2dDb21wb25lbnQsXG4gICAgRmVlZGJhY2tUb29sYmFyQ29tcG9uZW50LFxuICAgIEZlZWRiYWNrUmVjdGFuZ2xlQ29tcG9uZW50LFxuICAgIEZlZWRiYWNrRGlyZWN0aXZlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGZWVkYmFja0RpcmVjdGl2ZVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBGZWVkYmFja0RpYWxvZ0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBGZWVkYmFja1NlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGZWVkYmFja01vZHVsZSB7XG59XG4iXX0=