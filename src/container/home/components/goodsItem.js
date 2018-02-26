import React from 'react'
import { View, TouchableOpacity, Dimensions, Image, Text, PixelRatio, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')
const Line = 1 / PixelRatio.get()

class GoodsItem extends React.Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={.8}>
                <View style={styles.item}>
                    <Image resizeMode='cover' style={styles.image} source={this.props.pic || require("../../../assets/img/mix2.jpg")} />
                    <Text style={styles.tit} numberOfLines={1}>{this.props.title || "小米MIX2 6GB+64G"}</Text>
                    <Text style={styles.price} numberOfLines={1}>￥{this.props.price || "2999"}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        width: width / 2 - 2,
        height: width / 2 + 54,
        // display: 'flex',
        borderWidth: 0,
        borderColor: '#ddd',
        // borderRadius: 4,
        marginBottom: 4,
        // marginLeft: 10,
        backgroundColor: '#fff'
    },
    image: {
        width: width / 2 - 2,
        height: width / 2 - 2,
        // borderRadius: 4
    },
    tit: {
        // backgroundColor: '#ffc',
        alignItems: 'center',
        height: width / 20,
        fontSize: 12,
        marginTop: 6,
        paddingLeft: 10
    },
    price: {
        // backgroundColor: '#fcc',
        alignItems: 'center',
        // height: width / 21 - Line * 2,
        height: width / 21 - Line * 2,
        color: '#ff3030',
        paddingLeft: 10,
        // fontWeight: 'bold',
        fontSize: 14
    }
})

export default GoodsItem