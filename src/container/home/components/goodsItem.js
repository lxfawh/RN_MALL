import React from 'react'
import { View, TouchableOpacity, Dimensions, Image, Text, PixelRatio, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')
const Line = 1 / PixelRatio.get()

class GoodsItem extends React.Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={.8}>
                <View style={styles.item}>
                    <Image resizeMode='cover' style={styles.image} source={require("../../../assets/img/mix2.jpg")} />
                    <Text style={styles.tit}>小米MIX2 6GB+64G</Text>
                    <Text style={styles.price}>￥2999</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        width: width / 2 - 15,
        height: width / 2 + 36,
        // display: 'flex',
        borderWidth: Line,
        borderColor: '#ddd',
        // borderRadius: 4,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: '#fff'
    },
    image: {
        width: width / 2 - 15 - Line * 2,
        height: width / 2 - 15 - Line * 2,
        // borderRadius: 4
    },
    tit: {
        // backgroundColor: '#ffc',
        alignItems: 'center',
        height: width / 20,
        fontSize: 14,
        paddingLeft: 10
    },
    price: {
        // backgroundColor: '#fcc',
        alignItems: 'center',
        height: width / 21 - Line * 2,
        color: '#ff9630',
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default GoodsItem