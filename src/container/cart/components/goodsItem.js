import React from 'react'
import {
    TouchableNativeFeedback,
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    PixelRatio
} from 'react-native'

import Radio from './radio'
import Counter from './counter'

const { height, width } = Dimensions.get('window')
const LINE = 1 / PixelRatio.get()

const pic = require("../../../assets/img/mix2.jpg")


class GoodsItem extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     last: false
        // }
    }
    // componentWillMount() {
    //     this.props.last && this.setState({ last: true })
    // }
    render() {
        return (
            <TouchableNativeFeedback>
                <View style={styles.item}>
                    <Radio checked={this.props.checked} />
                    <Image style={styles.image} source={this.props.pic || pic} />
                    <View style={[styles.info, { borderBottomWidth: this.props.last ? 0 : LINE }]} >
                        <Text style={styles.title} numberOfLines={1}>{this.props.title || '小米MIX2 6GB+64G'}</Text>
                        <Text style={styles.intro} numberOfLines={1}>{this.props.props || '黑色陶瓷 64GB'}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.price}>￥{this.props.price || '2999'}</Text>
                            <Counter />
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback >
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
        marginRight: 10
    },
    info: {
        flex: 1,
        height: 100,
        borderBottomColor: '#d1d1d1',
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
    check: {
        borderWidth: 1,
        // borderRadius:50%
    }
})
export default GoodsItem