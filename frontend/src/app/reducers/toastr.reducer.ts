import { Action, createReducer, on } from '@ngrx/store';
import * as toastrActions from '../actions/toastr.actions';

export interface State {
    show: boolean;
}

const initialState: State = {
    show: false
};


const toastrReducer = createReducer(
    initialState,
    on(toastrActions.success, (state, { message }) => {
        return Object.assign({}, state, { message });
    }),
    on(toastrActions.error, (state, { message }) => {
        console.log(state);
        return Object.assign({}, state, { message });
    })
);

export function reducer(state: State | undefined, action: Action) {
    return toastrReducer(state, action);
}
