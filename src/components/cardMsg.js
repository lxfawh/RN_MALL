
import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, TouchableNativeFeedback, ScrollView, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')
const pic = require('../assets/img/2.jpg')
const Line = 1 / PixelRatio.get()


class CardMsg extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {
            pic: pic,
            title: '默认标题',
            text: 'some text,some,textsome text,some,textsome text,some,textsome text,some,textsome text,some,textsome text,some,text'
        }
    }


    render() {
        return (
            <TouchableNativeFeedback onPress={this._handle.bind(this)}>
                <View style={styles.container}>
                    <Image source={pic} style={styles.pic} resizeMode='stretch' />
                    <Text style={styles.title}>{this.props.title || this.state.title}</Text>
                    <Text style={styles.context} numberOfLines={2}>{this.props.text || this.state.text}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }

    _handle() {
        console.log('111')
    }

}

const styles = StyleSheet.create({
    container: {
        width: width - 20,
        marginTop: 10,
        height: 280,
        borderRadius: 4,
        borderWidth: Line,
        borderColor: '#ddd',
        backgroundColor: '#fff'
    },
    pic: {
        width: width - 20,
        height: 180,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },

    title: {
        marginTop: 10,
        fontSize: 16,
        // fontWeight: 'bold',
        color: '#333',
        height: 32,
        lineHeight: 32,
        paddingLeft: 10,
        paddingRight: 10
    },
    context: {
        fontSize: 14,
        color: '#999',
        paddingLeft: 10,
        paddingRight: 10
    }
})
export default CardMsg;