import React from 'react'
import {
    ScrollView,
    View,
    Text,
    TextInput,
    FlatList,
    Alert,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    PixelRatio
} from 'react-native'
import NavigatorBar from '../../components/navigatorBar'
import Radio from './components/radio'
import ShopItem from './components/shopItem'
import TabBarItem from '../../components/tabBarItem'

const { width, height } = Dimensions.get('window')
const LINE = 1 / PixelRatio.get();


class CartPage extends React.Component {

    static navigationOptions = {
        header: <NavigatorBar title="购物车" />,
        // headerTitle: '购物车',
        tabBarLabel: '购物车',
        // tabBarIcon: <Image source={require('../../assets/icon/cart.png')} />,
        tabBarIcon: ({ focused, tintColor }) => (
            <TabBarItem
                tintColor={tintColor}
                focused={focused}
                normalImage={require('../../assets/icon/cart.png')}
                selectedImage={require('../../assets/icon/cart_fill.png')}
            />
        )
    }

    render() {
        return (
            <View contentContainerStyle={styles.container}>
                <ScrollView style={styles.content}>
                    <View style={{ height: 10 }}></View>
                    <ShopItem selected={[0, 1, 2]} />
                    <ShopItem />
                    <ShopItem />
                </ScrollView>
                <View style={styles.btnBottom}>
                    <View style={styles.price}>
                        <Radio />
                        <Text style={{ fontSize: 14, marginRight: 20 }}>全选</Text>
                        <Text style={{ fontSize: 16, color: '#333' }}>合计:￥2999.00</Text>
                    </View>
                    <TouchableWithoutFeedback>
                        <View style={styles.checkOut}>
                            <Text style={styles.checkOutText}>去结算(6)</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: height,
        width: width
    },
    content: {
        height: height - 170,
        // paddingTop: 10,
        // paddingBottom: 10
    },
    btnBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width,
        height: 50,
        borderColor: '#ddd',
        borderTopWidth: LINE,
        backgroundColor: '#fff'
    },
    price: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkOut: {
        height: 50 + LINE,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff3030'
    },
    checkOutText: {
        color: '#fff',
        fontSize: 16
    }
})
export default CartPage;

