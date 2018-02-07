// import AppWithNavigationState from '../../App';


// export default function nav(state, action) {
//     let nextState;
//     switch (action.type) {
//         default:
//             nextState = AppWithNavigationState.router.getStateForAction(action, state);
//             break;
//     }
//     return nextState || state;
// }


import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../router/routes'
import { ROUTE_MAIN } from '../constants/routeType'

// const firstAction = AppNavigator.router.getActionForPathAndParams('Home')
// const initialNavState = AppNavigator.router.getStateForAction(firstAction)

let flag = true
console.log(AppNavigator)
export default function nav(state, action) {
    let nextState;

    switch (action.type) {
        case 'pop':
            if (action.routeName) {
                let currentKeyIndex
                state.routes.forEach((item, index) => {
                    if (item.routeName === action.routeName) {
                        currentKeyIndex = index
                    }
                })
                nextState = AppNavigator.router.getStateForAction(
                    NavigationActions.back({
                        key: state.routes[currentKeyIndex + 1].key
                    }), state)
            } else {
                nextState = AppNavigator.router.getStateForAction(
                    NavigationActions.back(), state)
            }
            break
        case 'push':
            const actionType = action.routeName + ''
            if (actionType.includes('ROUTE')) {
                if (flag) {
                    flag = false
                    nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({
                        routeName: action.routeName,
                        params: action.params,
                        action: NavigationActions.navigate({ routeName: action.routeName })
                    }), state);
                    setTimeout(() => {
                        flag = true
                    }, 500)
                }
            }
            break
        case 'reset':
            if (action.routeName !== ROUTE_MAIN) {

            } else {
                nextState = AppNavigator.router.getStateForAction(NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: action.routeName, params: action.params }),
                    ]
                }), state)
            }
            break
        default:
            nextState = AppNavigator.router.getStateForAction(action, state)
            break
    }

    return nextState || state;
}
