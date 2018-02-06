import React from 'react'
import {Text} from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom, DrawerNavigator } from 'react-navigation'

import HomePage from './src/container/home/home'
import CartPage from './src/container/cart/cart'

// const TabRouteConfigs = {
//     Home: {
//         screen: HomePage,
//         navigationOptions: {
//             title: 'home',
//             headerBackTitle: 'back',
//             headerTitleStyle: {
//             },
//             gesturesEnabled: true
//         }
//     },
//     Cart: {
//         screen: CartPage,
//         navigationOptions: {
//             title: 'cart',
//             headerTitle: '购物车',
//             headerBackTitle: 'back',
//             headerTitleStyle: {
//             },
//             gesturesEnabled: true
//         }
//     }
// }
// const TabNavigatorConfig = {
//     lazy: true,
//     initialRouteName: 'Home',
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom'
// }
// const TabNav = TabNavigator(TabRouteConfigs, TabNavigatorConfig)
// const StackRouteConfigs = {
//     Home: { screen: TabNav },
//     Cart: { screen: TabNav }
// }


const DrawerRouteConfigs = {
    Home: {
        screen: HomePage,
        navigationOptions: {
            drawerLabel: '首页',
            drawerIcon:<Text style={{ fontFamily: 'iconfont', color: '#999', fontSize: 23, marginTop: 7 }}>&#xe678;</Text>,
            // gesturesEnabled: true
        }
    },
    Cart: {
        screen: CartPage,
        navigationOptions: {
            drawerLabel: '购物车',
            drawerIcon:<Text style={{ fontFamily: 'iconfont', color: '#999', fontSize: 23, marginTop: 7 }}>&#xe678;</Text>,
            // gesturesEnabled: true
        }
    }
}

const DrawerNavigatorConfig = {
    lazy: true,
    initialRouteName: 'Home',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'top'
}

const DrawerNav = DrawerNavigator(DrawerRouteConfigs, DrawerNavigatorConfig)

const StackRouteConfigs = {
    Home: { screen: DrawerNav },
    Cart: { screen: DrawerNav }
}

const StackNavigatorConfig = {
    initialRouteName: 'Home',
    initialRouteParams: { initPara: '初始页面参数' },
    navigationOptions: {
        // headerTitle: 'default',
        headerTitleStyle: {
            // color:"#00ffff"
        }
    },
    mode: 'card',
    headerMode: 'screen',
    gesturesEnabled: true,
    cardStyle: {
        backgroundColor: "#fff",
    },
    transitionConfig: (() => ({
    })),
    onTransitionStart: (() => {
        console.log('页面跳转动画开始')
    }),
    onTransitionEnd: (() => {
        console.log('页面跳转动画结束')
    })
}
const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfig)



export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Navigator />)
    }
}