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
import NewsItem from './components/newsItem'
import TabBarItem from '../../components/tabBarItem'

import { Button } from 'antd-mobile'

const { width, height } = Dimensions.get('window')

const pic = require('../../assets/avatar.jpg')

class Discover extends React.Component {

    static navigationOptions = {
        header: <NavigatorBar title="发现" />,
        // headerTitle: '发现',
        tabBarLabel: '发现',
        // tabBarIcon: <Image source={require('../../assets/icon/discover.png')} />,
        tabBarIcon: ({ focused, tintColor }) => (
            <TabBarItem
                tintColor={tintColor}
                focused={focused}
                normalImage={require('../../assets/icon/discover.png')}
                selectedImage={require('../../assets/icon/discover_fill.png')}
            />
        )
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <View style={{ height: 10 }}></View>
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
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
    },
    content: {

    }
})
export default Discover;

