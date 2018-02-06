import React from 'react'
import {
    ScrollView,
    View,
    Text,
    TextInput,
    FlatList,
    Alert,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native'
import NavigatorBar from '../../components/navigatorBar'
import BtnGroup from './components/btnGroup'
import ShopItem from './components/shopItem'

const { width, height } = Dimensions.get('window')



class CartPage extends React.Component {

    static navigationOptions = {
        header: <NavigatorBar title="购物车" />,
        headerTitle: '购物车',
        tabBarLabel: '购物车',
        tabBarIcon: <Image source={require('../../assets/icon/cart.png')} />,
    }

    render() {
        return (
            <View contentContainerStyle={styles.container}>
                <ScrollView>
                    <ShopItem />
                    <ShopItem />
                </ScrollView>
                <View style={styles.btnBottom}>
                    <BtnGroup title1="加入购物车" title2='立即购买' handle1={() => { Alert.alert('加入购物车') }} handle2={() => { Alert.alert('立即购买') }} />
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
        position: 'relative',
        height: height,
        width: width
    },
    btnBottom: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
})
export default CartPage;

