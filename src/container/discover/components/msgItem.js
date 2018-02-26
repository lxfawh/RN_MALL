
import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, TouchableNativeFeedback, PixelRatio } from 'react-native'
import { ROUTE_MSG } from '../../../constants/routeType'

const { width } = Dimensions.get('window')
const defaultAvatar = require('../../../assets/default.jpg')

const Line = 1 / PixelRatio.get()


class MsgItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar: defaultAvatar,
            title: '默认标题',
            text: 'some text,some,text',
            badgeShow: true
        }
    }

    render() {

        let Badge = this.state.badgeShow ?
            (<View style={styles.badge}>
                <Text style={styles.info} onPress={this._viewMsg.bind(this)}>{this.props.info || "···"}</Text>
            </View>) : <View />

        return (

            <TouchableNativeFeedback onPress={this._handle.bind(this)}>
                <View style={styles.container}>
                    <View style={styles.avatar}>
                        <Image source={this.props.avatar || this.state.avatar} style={styles.userPic} />
                    </View>
                    <View style={styles.context}>
                        <Text style={styles.title}>{this.props.title || this.state.title}</Text>
                        <Text style={styles.text}>{this.props.text || this.state.text}</Text>
                    </View>
                    {Badge}
                </View>
            </TouchableNativeFeedback>
        )
    }

    _handle() {
        console.log('111')
        this.props.navigation.navigate(ROUTE_MSG)
        // this.props.navigation.navigate(ROUTE_CART, { id: '12345676878' }) }}
    }
    _viewMsg() {
        this.setState({
            badgeShow: false
        })
    }

}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: width,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: '#ff6633',
        paddingLeft: 10,

    },
    avatar: {
        height: 60,
        width: 60,
        // backgroundColor: '#eee',
        marginRight: 10,

    },
    userPic: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: Line,
        borderColor: '#dfdfdf'
    },
    context: {
        flex: 1,
        height: 80,
        borderBottomWidth: Line,
        borderBottomColor: '#ddd'
        // backgroundColor: '#ccc'
    },
    title: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
        height: 32,
        lineHeight: 32,
        // backgroundColor: '#aaa'
    },
    text: {
        fontSize: 14,
        color: '#999'
    },
    badge: {
        position: 'absolute',
        right: 10
    },
    info: {
        minWidth: 22,
        height: 22,
        fontSize: 12,
        // lineHeight: 22,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#ff3030',
        color: '#fff',
        borderRadius: 11,
        padding: 3
    }
})
export default MsgItem;