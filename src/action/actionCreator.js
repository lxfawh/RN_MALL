import * as ActionType from '../constants/actionType'

export function actionAdd(params) {
    return {
        type: ActionType.ACTION_ADD,
        payload: params
    }
}
export function actionSub(params) {
    return {
        type: ActionType.ACTION_SUB,
        payload: params
    }
}

export function actionFetch(params) {
    return function (dispatch) {
        setTimeout(() => {
            dispatch({ type: ActionType.ACTION_ADD })
        }, 1000)
    }
}