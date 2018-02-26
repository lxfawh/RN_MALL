import React from 'react'
import {
    Text,
    View,
    Button,
    Image,
    ScrollView,
    StyleSheet,
    PixelRatio,
    Dimensions
} from 'react-native'

import NavigatorBar from '../../components/navigatorBar'
import TabBarItem from '../../components/tabBarItem'
import ListItem from './components/listItem'
const Line = 1 / PixelRatio.get()
const { width } = Dimensions.get('window')

class MinePage extends React.Component {

    // static navigationOptions = ({ navigation }) => {
    //     const { state, setParams } = navigation;
    //     return {
    //         tabBarLabel: 'test',
    //         title: 'muy_PAGE',
    //         header: <NavigatorBar title='test' hiddenBackIcon={true} />,
    //         tabBarOnPress: ({ scene, jumpToIndex }) => {
    //             jumpToIndex(scene.index)
    //         },
    //         tabBarIcon: ({ tintColor }) => (<Text style={{ fontFamily: 'iconfont', color: tintColor, fontSize: 23, marginTop: 7 }}>&#xe676;</Text>)
    //     }
    // };

    static navigationOptions = {
        // header: <NavigatorBar title="我的" />,
        header: null,
        // tabBarVisible: false,
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
            <TabBarItem
                tintColor={tintColor}
                focused={focused}
                normalImage={require('../../assets/icon/my.png')}
                selectedImage={require('../../assets/icon/my_fill.png')}
            />
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            bgImg: require('../../assets/img/back.jpg'),
            avatar: require('../../assets/default.jpg'),
            name: '阿里巴巴',
            intro: '好好学习，天天向上'
        }
    }



    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.avatar}>
                            <Image source={this.state.avatar} style={styles.pic} />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.name}>{this.state.name}</Text>
                            <Text style={styles.intro}>{this.state.intro}</Text>
                        </View>
                        <View style={styles.set}>
                            {/* <Image source={require('../../assets/icon/set.png')} style={styles.setIco} /> */}
                            <Text style={{ color: '#fff', marginRight: 5 }}>个人信息</Text>
                            <Image source={require('../../assets/icon/icon-right.png')} style={styles.arrow} />
                        </View>
                        <Image source={this.state.bgImg} style={styles.bgImg} resizeMode="contain" />
                    </View>
                    <View style={styles.fav}>
                        <View style={styles.favItem}>
                            <Text style={styles.favNum}>100</Text>
                            <Text style={styles.favTit}>商品关注</Text>
                        </View>
                        <View style={styles.favItem}>
                            <Text style={styles.favNum}>99</Text>
                            <Text style={styles.favTit}>店铺关注</Text>
                        </View>
                        <View style={styles.favItem}>
                            <Text style={styles.favNum}>9</Text>
                            <Text style={styles.favTit}>浏览历史</Text>
                        </View>
                    </View>
                    <View style={styles.order}>
                        <View style={styles.orderTit}>
                            <Text style={styles.myTit}>我的订单</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.allTit}>全部订单</Text>
                                <Image source={require('../../assets/icon/icon-right.png')} style={styles.arrow} />
                            </View>
                        </View>
                        <View style={styles.orderStatus}>
                            <View style={styles.statusItem}>
                                <Image style={styles.statusIcon} source={require('../../assets/icon/icon-dfk.png')} />
                                <Text style={styles.statusTit}>待付款</Text>
                            </View>
                            <View style={styles.statusItem}>
                                <Image style={styles.statusIcon} source={require('../../assets/icon/icon-dfh.png')} />
                                <Text style={styles.statusTit}>待发货</Text>
                            </View>
                            <View style={styles.statusItem}>
                                <Image style={styles.statusIcon} source={require('../../assets/icon/icon-dsh.png')} />
                                <Text style={styles.statusTit}>待收货</Text>
                            </View>
                            <View style={styles.statusItem}>
                                <Image style={styles.statusIcon} source={require('../../assets/icon/icon-dpj.png')} />
                                <Text style={styles.statusTit}>待评价</Text>
                            </View>
                            <View style={styles.statusItem}>
                                <Image style={styles.statusIcon} source={require('../../assets/icon/icon-tk.png')} />
                                <Text style={styles.statusTit}>退款/售后</Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.listGroup}>
                        <ListItem icon={require('../../assets/icon/money.png')} title="我的资产" />
                        <ListItem icon={require('../../assets/icon/vip.png')} title="会员中心" />
                        <ListItem icon={require('../../assets/icon/ticket.png')} title="卡券管理" />
                        {/* <ListItem icon={require('../../assets/icon/time.png')} title="历史记录" /> */}
                        <ListItem icon={require('../../assets/icon/help.png')} title="帮助/反馈" last />
                    </View>
                    <View style={styles.listGroup}>
                        <ListItem icon={require('../../assets/icon/setting.png')} title="设置" last />
                    </View>
                </View>
            </ScrollView >
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: width,
        paddingBottom: 10
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 140,
        position: 'relative',
        backgroundColor: '#ff0000'
    },
    avatar: {
        height: 66,
        width: 66,
        borderRadius: 33,
        borderColor: '#fff',
        borderWidth: Line,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },
    pic: {
        height: 62,
        width: 62,
        borderRadius: 31,
    },
    info: {
        flex: 1,
        marginLeft: 20
    },
    name: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 32
    },
    intro: {
        color: '#fff',
        fontSize: 12,
        lineHeight: 24
    },
    set: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    // setIco: {
    //     width: 20,
    //     height: 20,
    //     marginRight: 5
    // },
    bgImg: {
        position: 'absolute',
        zIndex: -1,
        width: width
    },
    fav: {
        height: 64,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        borderBottomWidth: Line,
        borderBottomColor: '#ddd',
    },
    favItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    favNum: {
        fontSize: 20,
        color: '#ff9830',
        lineHeight: 30
    },
    favTit: {
        fontSize: 10,
        color: '#666'
    },
    order: {
        marginTop: 10,
        height: 120,
        // backgroundColor: '#ccc'
    },
    orderTit: {
        height: 46,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: Line,
        borderBottomWidth: Line,
        borderColor: '#ddd',
        backgroundColor: '#fff'
    },
    myTit: {
        fontSize: 16,
        color: '#333',
        marginLeft: 10
    },
    allTit: {
        fontSize: 14,
        color: '#999',
        marginRight: 5,
    },
    arrow: {
        width: 16,
        height: 16,
        marginRight: 10
    },
    orderStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 72,
        borderBottomColor: '#ddd',
        borderBottomWidth: Line,
        backgroundColor: '#fff'
    },
    statusItem: {
        width: width / 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusIcon: {
        width: 24,
        height: 24,
        marginBottom: 5
    },
    statusTit: {
        fontSize: 12,
        color: '#333'
    },
    listGroup: {
        marginTop: 10,
        borderTopWidth: Line,
        borderBottomWidth: Line,
        borderColor: '#ddd'
    }
})

export default MinePage
