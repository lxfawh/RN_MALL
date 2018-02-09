import React from 'react'
import { StackNavigator, TabNavigator, TabBarBottom, addNavigationHelpers, Easing } from 'react-navigation'
import { connect } from 'react-redux'
import * as RouteType from '../constants/routeType'

import HomePage from '../container/home/home'
import Discover from '../container/discover/discover'
import CartPage from '../container/cart/cart'
import MinePage from '../container/mine/mine'
import SearchPage from '../container/common/search'
import msgPage from '../container/common/msgPage'


const TabNav = TabNavigator({
    [RouteType.ROUTE_HOME]: { screen: HomePage },
    [RouteType.ROUTE_DISCOVER]: { screen: Discover },
    [RouteType.ROUTE_CART]: { screen: CartPage },
    [RouteType.ROUTE_MINE]: { screen: MinePage }
}, {
        lazy: true,
        // headerMode: 'screen',
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarComponent: TabBarBottom,
        initialRouteName: RouteType.ROUTE_HOME,
        tabBarOptions: {
            showIcon: true,
            activeTintColor: '#ff3030',
            inactiveTintColor: '#666',
            style: {
                backgroundColor: '#fff',
                height: 50,
                paddingBottom: 5
            },
            labelStyle: {
                fontSize: 10
            },
            indicatorStyle: {

            }
        }
    })


const AppNavigator = StackNavigator(
    {
        [RouteType.ROUTE_INIT]: {
            screen: TabNav
        },
        [RouteType.ROUTE_SEARCH]: {
            screen: SearchPage
        },
        [RouteType.ROUTE_MSG]: {
            screen: msgPage
        }

    }, {
        initialRouteName: RouteType.ROUTE_INIT,
        // transitionConfig: () => ({ screenInterpolator: CardStackStyleInterpolator.forHorizontal }),
        mode: 'card',
        headerMode: 'float',//
        gesturesEnabled: true,
        cardStyle: {
            backgroundColor: "#f5f5f5",
        },
        // transitionConfig: () => ({
        //     transitionSpec: {
        //         duration: 300,
        //         easing: Easing.out(Easing.poly(4)),
        //         timing: Animated.timing,
        //     },
        //     screenInterpolator: sceneProps => {
        //         const { layout, position, scene } = sceneProps;
        //         const { index } = scene;

        //         const height = layout.initHeight;
        //         const translateY = position.interpolate({
        //             inputRange: [index - 1, index, index + 1],
        //             outputRange: [height, 0, 0],
        //         });

        //         const opacity = position.interpolate({
        //             inputRange: [index - 1, index - 0.99, index],
        //             outputRange: [0, 1, 1],
        //         });

        //         return { opacity, transform: [{ translateY }] };
        //     },
        // }),
    }
)

export default class AppWithNavigationState extends React.Component {
    render() {
        return (<AppNavigator />)
    }
}

// AppNavigator.router = {
//     ...AppNavigator.router,
//     getStateForAction(action, state) {
//         if (state && action.type === 'push') {
//             const routes = [
//                 ...state.routes,
//                 { key: 'A', routeName: 'Profile', params: { name: action.name1 } },
//                 { key: 'B', routeName: 'Profile', params: { name: action.name2 } },
//             ];
//             return {
//                 ...state,
//                 routes,
//                 index: routes.length - 1,
//             };
//         }
//         return AppNavigator.router.getStateForAction(action, state);
//     },
// };

// console.log("AppNavigator", AppNavigator)

// const AppWithNavigationState = ({ dispatch, nav }) => (
//     <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
// )


// const mapStateToProps = state => ({
//     nav: state.nav,
// })

// export default connect(mapStateToProps)(AppWithNavigationState)