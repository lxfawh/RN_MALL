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
const Line = 1 / PixelRatio.get()

export default class NavigatorBar extends React.Component {
    constructor(props) {
        super(props)
        this._search = this._search.bind(this)
    }

    render() {
        return (
            <View style={styles.bar}>
                <View style={styles.scan}>
                    <Image style={styles.scanIcon} source={require('../assets/icon/icon-scan.png')} />
                    <Text style={styles.scanText}>扫一扫</Text>
                </View>

                <TouchableWithoutFeedback onPress={this._search}>
                    <View style={styles.searchCon} >
                        <Image style={styles.searchIcon} source={require('../../src/assets/icon/icon-search.png')} />
                        <Text style={styles.placeholder}>输入关键字</Text>
                        {/* <TextInput/> */}
                    </View>
                </TouchableWithoutFeedback >
                <View style={styles.msg}>
                    <Image style={styles.msgIcon} source={require('../assets/icon/icon-msg.png')} />
                    <Text style={styles.msgText}>消息</Text>
                </View>

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
    scan: {
        alignItems: 'center'
    },
    scanIcon: {
        width: 20,
        height: 20
    },
    scanText: {
        fontSize: 10
    },
    msg: {
        alignItems: 'center'
    },
    msgIcon: {
        width: 24,
        height: 24
    },
    msgText: {
        fontSize: 10
    },
})