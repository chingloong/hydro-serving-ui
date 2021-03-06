import { ModelRuntime } from '@shared/models/_index';
import * as ModelRuntimeActions from '@shared/actions/_index';


const initialState: any[] = [];


export function ModelRuntimeReducer (state = initialState, action: ModelRuntimeActions.ModelRuntimeActions) {
    switch (action.type) {
        case ModelRuntimeActions.GET_MODEL_RUNTIME:
            return action.payload;
        default:
            return state;
    }
}
