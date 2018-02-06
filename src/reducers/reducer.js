import * as ActionType from '../constants/actionType'
import { actionAdd } from '../action/actionCreator'

export default function (state = 0, action) {
    switch (action.type) {
        case ActionType.ACTION_ADD:
            return state + 1
        case ActionType.ACTION_SUB:
            return state - 1
        default:
            return 10;
    }
}