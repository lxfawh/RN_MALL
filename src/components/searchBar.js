import React from 'react'
import {
    View,
    Text,
    Image,
    Alert,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions,
    StyleSheet,
    PixelRatio
} from 'react-native'

import * as RouteType from '../constants/routeType'
const { width } = Dimensions.get('window')
const LOGO = require('../assets/logo.png')
const Line = 1 / PixelRatio.get()

export default class NavigatorBar extends React.Component {
    constructor(props) {
        super(props)
        this._search = this._search.bind(this)
    }

    render() {
        return (
            <View style={styles.bar} onPress={this._search}>
                <Image style={styles.logo} source={LOGO} />
                <TouchableWithoutFeedback onPress={this._search}>
                    <View style={styles.searchCon} >
                        <Image style={styles.searchIcon} source={require('../../src/assets/icon/icon-search.png')} />
                        <Text style={styles.placeholder}>输入关键字</Text>
                        {/* <TextInput/> */}
                    </View>
                </TouchableWithoutFeedback >

                <Image style={styles.msg} source={require('../assets/icon/ico-msg.png')} />
            </View>
        )
    }

    _search() {
        console.log(this.props)
        // this.props.navigation.navigate(RouteType.ROUTE_SEARCH)
        this.props.navigation.dispatch({ type: 'push', routeName: RouteType.ROUTE_SEARCH, params: { from: 'test' } })
    }
}
const styles = StyleSheet.create({
    bar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        width: width,
        // backgroundColor:'transparent',
        alignItems: 'center'
    },
    logo: {
        width: 30,
        height: 30,

    },
    searchCon: {
        height: 30,
        width: width - 110,
        backgroundColor: '#f1f1f1',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    placeholder: {
        marginLeft: 10,
        color: '#999'
    },
    searchIcon: {
        width: 18,
        height: 18,
        marginLeft: 10
    },
    msg: {
        width: 30,
        height: 30,


    },
    mainTit: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'normal'
    }
})