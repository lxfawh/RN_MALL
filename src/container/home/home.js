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
import SearchBar from '../../components/searchBar'
import Carousel from '../../components/carousel'
import GoodsItem from './components/goodsItem'
import TabBarItem from '../../components/tabBarItem'

import { Button } from 'antd-mobile'

const { width, height } = Dimensions.get('window')


class HomePage extends React.Component {

    static navigationOptions = {
        header: <SearchBar />,
        headerTitle: '首页',
        tabBarLabel: '首页',
        headerMode: 'screen',
        // tabBarIcon: <Image source={require('../../assets/icon/home.png')} />,
        tabBarIcon: ({ focused, tintColor }) => (
            <TabBarItem
                tintColor={tintColor}
                focused={focused}
                normalImage={require('../../assets/icon/home.png')}
                selectedImage={require('../../assets/icon/home_fill.png')}
            />
        )
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.navigation.setParams({
            title: '自定义Headers',
            navigatePress: this.navigatePress
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Carousel />
                    <View style={styles.nav}>
                        <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate(ROUTE_SEARCH, { id: '12345676878' }) }} >
                            <View style={styles.navItem}>
                                <Image source={require('../../assets/icon/1.png')} style={styles.navIcon} />
                                <Text style={styles.navTitle}>物流</Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate(ROUTE_CART, { id: '12345676878' }) }} >
                            <View style={styles.navItem}>
                                <Image source={require('../../assets/icon/2.png')} style={styles.navIcon} />
                                <Text style={styles.navTitle}>购物车</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate(ROUTE_CART, { id: '12345676878' }) }} >
                            <View style={styles.navItem}>
                                <Image source={require('../../assets/icon/3.png')} style={styles.navIcon} />
                                <Text style={styles.navTitle}>优惠券</Text>
                            </View>

                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate(ROUTE_CART, { id: '12345676878' }) }} >
                            <View style={styles.navItem}>
                                <Image source={require('../../assets/icon/4.png')} style={styles.navIcon} />
                                <Text style={styles.navTitle}>充值</Text>
                            </View>

                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate(ROUTE_CART, { id: '12345676878' }) }} >
                            <View style={styles.navItem}>
                                <Image source={require('../../assets/icon/5.png')} style={styles.navIcon} />
                                <Text style={styles.navTitle}>钱包</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.recCon}>
                        <View style={styles.recHeader}>
                            <Text style={styles.recTit}>年货节</Text>
                            <Text style={styles.recMore} onPress={() => { this.props.navigation.navigate(ROUTE_CART, { id: '12345676878' }) }} >更多 ></Text>
                        </View>
                        <Image source={require('../../assets/img/rec1.jpg')} style={styles.recImg} resizeMode="cover" />
                    </View>
                    <View style={styles.recItemCon}>
                        <View style={styles.recHeader}>
                            <Text style={styles.recTit}>新品推荐</Text>
                            <Text style={styles.recMore} onPress={() => { this.props.navigation.navigate(ROUTE_CART, { id: '12345676878' }) }} >更多 ></Text>
                        </View>
                        <View style={styles.recItem}>
                            <GoodsItem pic={require('../../assets/img/iphonex.jpg')} title="Apple iPhone X (A1865) 256GB 深空灰色" />
                            <GoodsItem pic={require('../../assets/img/ipad.jpg')} title="Apple iPad Pro 平板电脑 12.9英寸（256G WLAN版/A10X芯片/Retina屏/Multi-Touch技术 MP6J2CH/A）金色" />
                            <GoodsItem pic={require('../../assets/img/iphone.jpg')} title="Apple iPhone 8 Plus 256GB 金色" />
                            <GoodsItem />
                            <GoodsItem pic={require('../../assets/img/iphonex.jpg')} title="Apple iPhone X (A1865) 256GB 深空灰色" />
                            <GoodsItem pic={require('../../assets/img/ipad.jpg')} title="Apple iPad Pro 平板电脑 12.9英寸（256G WLAN版/A10X芯片/Retina屏/Multi-Touch技术 MP6J2CH/A）金色" />
                            <GoodsItem pic={require('../../assets/img/iphone.jpg')} title="Apple iPhone 8 Plus 256GB 金色" />
                            <GoodsItem />
                        </View>
                    </View>
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
    nav: {
        height: 90,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: LINE,
        borderColor: '#eee'
    },
    navItem: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'#ccc'
    },
    navIcon: {
        width: 40,
        height: 40,
        borderRadius: 14,
        alignItems: 'center',
    },
    navTitle: {
        fontSize: 12,
        color: '#666',
        marginTop: 10
    },
    recCon: {
        width: width,
        height: 180,
        backgroundColor: '#eee',
        marginTop: 10,
        borderTopWidth: LINE,
        borderColor: '#eee'
    },
    recHeader: {
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    recTit: {
        fontSize: 14,
        color: '#333',
        marginLeft: 10
    },
    recMore: {
        fontSize: 12,
        color: '#999',
        marginRight: 10
    },
    recImg: {
        width: width,
        height: 140
    },
    recItemCon: {
        width: width,
        backgroundColor: '#eee',
        marginTop: 10,
        borderTopWidth: LINE,
        borderColor: '#eee',
        // paddingBottom: 10
    },
    recItem: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: 4
    }
})
export default HomePage;

