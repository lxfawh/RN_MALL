import React from 'react'
import { StackNavigator, TabNavigator, TabBarBottom, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import * as RouteType from '../constants/routeType'

import HomePage from '../container/home/home'
import CartPage from '../container/cart/cart'
import MinePage from '../container/mine/mine'
import SearchPage from '../container/common/search'


const TabNav = TabNavigator({
    [RouteType.ROUTE_HOME]: { screen: HomePage },
    [RouteType.ROUTE_CART]: { screen: CartPage },
    [RouteType.ROUTE_MINE]: { screen: MinePage }
}, {
        lazy: true,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarComponent: TabBarBottom,
        initialRouteName: RouteType.ROUTE_HOME,
        tabBarOptions: {
            showIcon: true,
            activeTintColor: '#00bdf7',
            inactiveTintColor: '#666',
            style: {
                backgroundColor: '#fff',
                height: 49,
                paddingBottom: 5
            },
            labelStyle: {
                fontSize: 10
            },
            indicatorStyle: {

            }
        }
    })


const AppNavigator = StackNavigator({
    [RouteType.ROUTE_INIT]: {
        screen: TabNav
    },
    [RouteType.ROUTE_SEARCH]: {
        screen: SearchPage
    }

}, {
        headerMode: 'screen',
        initialRouteName: RouteType.ROUTE_INIT,
        transitionConfig: () => ({ screenInterpolator: CardStackStyleInterpolator.forHorizontal }),
        mode: 'screen',
        gesturesEnabled: true,
        cardStyle: {
            backgroundColor: "#f5f5f5",
        },
        transitionConfig: (() => ({
        })),
        onTransitionStart: (() => {
            console.log('页面跳转动画开始')
        }),
        onTransitionEnd: (() => {
            console.log('页面跳转动画结束')
        })
    })

// const TransitionConfig = () => ({
//     screenInterpolator: (sceneProps) => {
//         const { scene } = sceneProps;
//         const { route } = scene;
//         const params = route.params || {};
//         const transition = params.transition || 'forHorizontal';
//         // forVertical
//         // const transition = 'forHorizontal'
//         return CardStackStyleInterpolator[transition](sceneProps);
//         // screenInterpolator:CardStackStyleInterpolator.forVertical,
//     },
// });

// const AppWithNavigationState = ({ dispatch, nav }) => {
//     return <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
// }


class AppWithNavigationState extends React.Component {
    render() {
        const { dispatch, nav } = this.props
        return (
            <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
        )
    }
}

// const mapStateToProps = 
// const mapStatetoProps = state => ({
//     nav: state.nav
// })

export default connect((state) => {
    return {
        nav: state.nav,
    }
})(AppWithNavigationState)