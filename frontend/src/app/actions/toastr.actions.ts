import { createAction, props } from '@ngrx/store';

export const success = createAction('[Toastr] Success Message', props<{ message: string }>());
export const error = createAction('[Toastr] Error Message', props<{ message: string }>());
