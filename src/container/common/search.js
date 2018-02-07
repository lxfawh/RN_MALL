import React from 'react'
import {
    View,
    Text,
    Image,
    Alert,
    TextInput,
    Dimensions,
    StyleSheet,
    PixelRatio
} from 'react-native'
// import { NavBar, Icon } from 'antd-mobile'
import * as RouteType from '../../constants/routeType'

const { width } = Dimensions.get('window')
const Line = 1 / PixelRatio.get()
const BackIcon = require('../../assets/icon/icon-back.png')

export default class NavigatorBar extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            text: '请输入商品名称或店铺名称'
        }
    }

    render() {
        return (
            <View style={styles.bar}>
                {/* <Image style={styles.back} source={BackIcon} /> */}
                <View style={styles.searchCon}>
                    <Image style={styles.searchIcon} source={require('../../assets/icon/icon-search.png')} />
                    <TextInput style={styles.input} onChangeText={(text) => this.setState({ text })}
                        value={this.state.text} underlineColorAndroid='transparent' maxLength={40} onFocus={() => { this.setState({ text: '' }) }} />
                </View>
                <Text style={styles.searchBtn} onPress={this._back.bind(this)}>取消</Text>
            </View>
        )
    }

    _back() {
        // Alert.alert('123')
        // this.props.navigation.goBack(-1)
        this.props.navigation.goBack();
        console.log(this.props)
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
        alignItems: 'center',
        borderBottomWidth: Line,
        borderColor: '#ddd'
    },
    back: {
        width: 20,
        height: 20,

    },
    searchCon: {
        height: 30,
        width: width - 60,
        backgroundColor: '#f1f1f1',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    input: {
        padding: 0,
        // borderWidth: 0,
        marginLeft: 10,
        height: 30,
        width: width - 60,
        color: '#999',
        textDecorationLine: 'none',
        color: '#333'
    },
    searchIcon: {
        width: 18,
        height: 18,
        marginLeft: 10
    },
    searchBtn: {
        width: 30,
        height: 30,
        lineHeight: 30,
        color: '#333'
    },
    // mainTit: {
    //     fontSize: 18,
    //     color: '#333',
    //     fontWeight: 'normal'
    // }
})