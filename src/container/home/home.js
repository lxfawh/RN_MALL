import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    PixelRatio,
    TouchableOpacity,
    ScrollView
} from 'react-native'

const LINE = 1 / PixelRatio.get();

import { ROUTE_CART, ROUTE_SEARCH } from '../../constants/routeType'
import SearchBar from '../../components/searchBar'
import Carousel from '../../components/carousel'
import GoodsItem from './components/goodsItem'

import { Button } from 'antd-mobile'

const { width, height } = Dimensions.get('window')


class HomePage extends React.Component {

    // static navigationOptions = ({ navigation }) => {
    //     const { state, setParams } = navigation;
    //     return {
    //         tabBarLabel: 'test',
    //         title: 'HOME_PAGE',
    //         header: <NavigatorBar title='test' hiddenBackIcon={true} />,
    //         tabBarOnPress: ({ scene, jumpToIndex }) => {
    //             jumpToIndex(scene.index)
    //         },
    //         tabBarIcon: ({ tintColor }) => (<Text style={{ fontFamily: 'iconfont', color: tintColor, fontSize: 23, marginTop: 7 }}>&#xe676;</Text>)
    //     }
    // };

    static navigationOptions = {

        header: <SearchBar />,
        headerTitle: '首页',
        tabBarLabel: '首页',
        tabBarIcon: <Image source={require('../../assets/icon/home.png')} />,

    }
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Carousel />
                    <View style={styles.nav}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate(ROUTE_SEARCH, { id: '12345676878' }) }} >
                            <View style={styles.navItem}>
                                <Image source={require('../../assets/icon/1.png')} style={styles.navIcon} />
                                <Text style={styles.navTitle}>物流</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate(ROUTE_CART, { id: '12345676878' }) }} >
                            <View style={styles.navItem}>
                                <Image source={require('../../assets/icon/2.png')} style={styles.navIcon} />
                                <Text style={styles.navTitle}>购物车</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate(ROUTE_CART, { id: '12345676878' }) }} >
                            <View style={styles.navItem}>
                                <Image source={require('../../assets/icon/3.png')} style={styles.navIcon} />
                                <Text style={styles.navTitle}>优惠券</Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate(ROUTE_CART, { id: '12345676878' }) }} >
                            <View style={styles.navItem}>
                                <Image source={require('../../assets/icon/4.png')} style={styles.navIcon} />
                                <Text style={styles.navTitle}>充值</Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate(ROUTE_CART, { id: '12345676878' }) }} >
                            <View style={styles.navItem}>
                                <Image source={require('../../assets/icon/5.png')} style={styles.navIcon} />
                                <Text style={styles.navTitle}>钱包</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
 
                    <View style={styles.recCon}>
                        <View style={styles.recHeader}>
                            <Text style={styles.recTit}>优品推荐</Text>
                            <Text style={styles.recMore} onPress={() => { this.props.navigation.navigate(ROUTE_CART, { id: '12345676878' }) }} >更多 ></Text>
                        </View>
                        <Image source={require('../../assets/img/rec.jpg')} style={styles.recImg} resizeMode="cover" />
                    </View>
                    <View style={styles.recItemCon}>
                        <View style={styles.recHeader}>
                            <Text style={styles.recTit}>优品推荐</Text>
                            <Text style={styles.recMore} onPress={() => { this.props.navigation.navigate(ROUTE_CART, { id: '12345676878' }) }} >更多 ></Text>
                        </View>
                        <View style={styles.recItem}>
                            <GoodsItem />
                            <GoodsItem />
                            <GoodsItem />
                            <GoodsItem />
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
        borderColor: '#ddd'
    },
    navItem: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'#ccc'
    },
    navIcon: {
        width: 44,
        height: 44,
        borderRadius: 18,
        alignItems: 'center',
    },
    navTitle: {
        fontSize: 12,
        color: '#333',
        marginTop: 10
    },
    recCon: {
        width: width,
        height: 200,
        backgroundColor: '#eee',
        marginTop: 10,
        borderTopWidth: LINE,
        borderColor: '#ddd'
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
        height: 200
    },
    recItemCon: {
        width: width,
        backgroundColor: '#eee',
        marginTop: 10,
        borderTopWidth: LINE,
        borderColor: '#ddd',
        paddingBottom: 10
    },
    recItem: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden'
    }
})
export default HomePage;

