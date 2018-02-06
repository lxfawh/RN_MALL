import React from 'react'
import {
    View,
    Text,
    Image,
    Alert,
    TextInput,
    Dimensions,
    StyleSheet
} from 'react-native'

import { ROUTE_SEARCH } from '../constants/routeType'
const { width } = Dimensions.get('window')
const LOGO = require('../assets/logo.png')

export default class NavigatorBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.bar} onPress={this._search.bind(this)}>
                <Image style={styles.logo} source={LOGO} />
                <View style={styles.searchCon}>
                    <Image style={styles.searchIcon} source={require('../../src/assets/icon/icon-search.png')} />
                    <Text style={styles.placeholder}>输入关键字</Text>
                    {/* <TextInput/> */}
                </View>
                <Image style={styles.msg} source={require('../assets/icon/ico-msg.png')} />
            </View>
        )
    }

    _search() {
        Alert.alert('aaa')
        // this.props.navigation.navigate(ROUTE_SEARCH) 
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
        backgroundColor: '#f8f8f8',
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