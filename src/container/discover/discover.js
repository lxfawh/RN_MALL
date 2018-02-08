import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    PixelRatio,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native'

const LINE = 1 / PixelRatio.get();

import { ROUTE_CART, ROUTE_SEARCH, ROUTE_MSG } from '../../constants/routeType'
import NavigatorBar from '../../components/navigatorBar'
import MsgItem from './components/msgItem'

import { Button } from 'antd-mobile'

const { width, height } = Dimensions.get('window')

const pic = require('../../assets/avatar.jpg')

class Discover extends React.Component {

    static navigationOptions = {
        header: <NavigatorBar title="发现" />,
        // headerTitle: '发现',
        tabBarLabel: '发现',
        tabBarIcon: <Image source={require('../../assets/icon/discover.png')} />,
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {/* <Text>discover</Text> */}
                    <MsgItem {...this.props} avatar={pic} title="苹果Apple自营店" text="您的订单12345678已发货" info="99+" onPress={this._viewMsg.bind(this)} />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                </ScrollView>
            </View >
        )
    }

    _viewMsg() {
        console.log("view msg")

    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height - 120,
        backgroundColor: '#f8f8f8'
    }
})
export default Discover;

