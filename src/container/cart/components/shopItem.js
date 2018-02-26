import React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    PixelRatio
} from 'react-native'

import Radio from './radio'
import GoodsItem from './goodsItem'

const { height, width } = Dimensions.get('window')
const LINE = 1 / PixelRatio.get();
// const OnePX = 1/PixelRatio.get()

class ShopsItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Radio />
                    <Image source={require('../../../assets/icon/shop.png')} style={styles.shopIcon} />
                    <Text style={styles.title}>苹果Apple旗舰店</Text>
                    <Image source={require('../../../assets/icon/icon-right.png')} style={styles.arrow} />
                </View>
                <GoodsItem pic={require('../../../assets/img/iphonex.jpg')} title="Apple iPhone X (A1865) 256GB 深空灰色" props="256GB 深空灰色" price="8999" />
                <GoodsItem pic={require('../../../assets/img/iphone.jpg')} title="Apple iPhone 8 Plus 256GB 金色" props="256GB 金色" price="6688" />
                <GoodsItem pic={require('../../../assets/img/ipad.jpg')} title="Apple iPad Pro 平板电脑 12.9英寸（256G WLAN版/A10X芯片/Retina屏/Multi-Touch技术 MP6J2CH/A）金色" props="12.9英寸256G WLAN版" price="6688" last />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: width,
        borderTopColor: '#ddd',
        borderBottomColor: '#ddd',
        borderTopWidth: LINE,
        borderBottomWidth: LINE,
        borderStyle: 'solid',
        marginBottom: 10
    },
    header: {
        width: width,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        borderBottomColor: '#eee',
        borderBottomWidth: LINE,
        borderStyle: 'solid',
        backgroundColor: '#f9f9f9'
    },
    title: {
        color: '#333',
        marginRight: 5
    },
    shopIcon: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    arrow: {
        width: 16,
        height: 16,
        marginRight: 10
    }
})
export default ShopsItem