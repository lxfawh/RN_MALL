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

import { ROUTE_CART, ROUTE_SEARCH } from '../../constants/routeType'
import NavigatorBar from '../../components/navigatorBar'

import { Button } from 'antd-mobile'

const { width, height } = Dimensions.get('window')


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
                    <Text>discover</Text>
                </ScrollView>
            </View >
        )
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

