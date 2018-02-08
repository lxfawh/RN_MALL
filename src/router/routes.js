import React from 'react'
import { StackNavigator, TabNavigator, TabBarBottom, addNavigationHelpers } from 'react-navigation'
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
        headerMode: 'screen',
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
        headerMode: 'screen',
        initialRouteName: RouteType.ROUTE_INIT,
        transitionConfig: () => ({ screenInterpolator: CardStackStyleInterpolator.forHorizontal }),
        mode: 'screen',
        gesturesEnabled: true,
        cardStyle: {
            backgroundColor: "#f5f5f5",
        },
        transitionConfig: () => ({})
    }
)

export default class AppWithNavigationState extends React.Component {
    render() {
        return (<AppNavigator />)
    }
}

// const AppWithNavigationState = ({ dispatch, nav }) => (
//     <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
// )


// const mapStateToProps = state => ({
//     nav: state.nav,
// })

// export default connect(mapStateToProps)(AppWithNavigationState)