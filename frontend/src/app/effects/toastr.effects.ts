import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import * as toastrActions from '../actions/toastr.actions';
import { success, error } from '../actions/toastr.actions';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class ToastrEffects {

    success$ = createEffect(() => this.actions$.pipe(
        ofType(toastrActions.success),
        tap((payload) => this.toastr.success('Success', payload.message))
    ), { dispatch: false });

    error$ = createEffect(() => this.actions$.pipe(
        ofType(toastrActions.error),
        tap((payload) => this.toastr.error('Error', payload.message))
    ), { dispatch: false });

    constructor(
        private actions$: Actions,
        private toastr: ToastrService
    ) { }
}
