import React from 'react'
import {
    Text,
    View,
    CheckBox,
    Image,
    StyleSheet,
    Dimensions,
    PixelRatio
} from 'react-native'
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
                    <CheckBox />
                    <Text>小米旗舰店</Text>
                </View>
                <GoodsItem />
                <GoodsItem />
                <GoodsItem last />
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
        borderBottomColor: '#ddd',
        borderBottomWidth: LINE,
        borderStyle: 'solid',
        backgroundColor: '#fff'
    },
    item: {
        width: width,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        backgroundColor: '#fff'
    },
    image: {
        height: 80,
        width: 80,
        borderStyle: 'solid',
        borderWidth: LINE,
        borderColor: '#ccc',
        borderRadius: 4,
        marginRight: 20
    },
    info: {
        // borderBottomWidth:1,
        // borderBottomColor:'#999',
        // borderStyle:'solid'
    },
    title: {
        fontSize: 14,
        color: '#333',
        height: 30
    },
    intro: {
        fontSize: 12,
        color: '#999',
        height: 30
    },
    price: {
        fontSize: 14,
        color: '#ff9630',
        height: 30
    },

})
export default ShopsItem