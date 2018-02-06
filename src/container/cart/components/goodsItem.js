import React from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    CheckBox,
    Image,
    StyleSheet,
    Dimensions,
    PixelRatio
} from 'react-native'

const { height, width } = Dimensions.get('window')
const LINE = 1 / PixelRatio.get();
class GoodsItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TouchableOpacity style={styles.item} activeOpacity={.8}>
                <CheckBox style={styles.check}/>
                <Image style={styles.image} source={require("../../../assets/img/mix2.jpg")} />
                <View style={styles.info}>
                    <Text style={styles.title} numberOfLines={1}>小米MIX2 6GB+64G小米MIX2 6GB+64GB小米MIX2 6GB+64GB小米MIX2 6GB+64GB小米MIX2 6GB+64GB小米MIX2 6GB+64GBB</Text>
                    <Text style={styles.intro} numberOfLines={1}>黑色陶瓷 64GB</Text>
                    <Text style={styles.price}>￥2999</Text>
                </View>
            </TouchableOpacity >
        )
    }
}


const styles = StyleSheet.create({
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
        // borderStyle: 'solid',
        borderWidth: LINE,
        borderColor: '#ccc',
        borderRadius: 4,
        marginRight: 20
    },
    info: {
        flex: 1,
        height: 100,
        borderBottomWidth: LINE,
        borderBottomColor: '#aaa',
        borderStyle: 'solid'
    },
    title: {
        fontSize: 14,
        color: '#333',
        height: 30,
        lineHeight: 30,
        marginRight: 10
    },
    intro: {
        fontSize: 12,
        color: '#999',
        height: 30,
        lineHeight: 30
    },
    price: {
        fontSize: 14,
        color: '#ff9630',
        height: 30,
        lineHeight: 30
    },
    check:{
        borderWidth:1,
        // borderRadius:50%
    }
})
export default GoodsItem