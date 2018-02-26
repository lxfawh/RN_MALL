import React from 'react'
import { View, TouchableNativeFeedback, Text, Image, StyleSheet, Dimensions, PixelRatio } from 'react-native'

const { width } = Dimensions.get('window')
const Line = 1 / PixelRatio.get()

class ListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        let ico = this.props.icon ? (<Image style={styles.ico} source={this.props.icon} />) : (<View />)
        return (
            <TouchableNativeFeedback>
                <View style={[styles.list, { height: this.props.last ? 50 : 50 + Line * 2, }]}>
                    {ico}
                    <View style={[styles.text, { borderColor: '#ddd', borderBottomWidth: this.props.last ? 0 : Line }]}>
                        <Text style={styles.title}>{this.props.title || '请输入标题'}</Text>
                        <Image source={require('../../../assets/icon/icon-right.png')} style={styles.arrow} />
                    </View>
                </View>
            </TouchableNativeFeedback >
        )
    }
}

const styles = StyleSheet.create({
    list: {
        width: width,
        // height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
        height: 50,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ico: {
        width: 20,
        height: 20,
        marginLeft: 10,
        marginRight: 10
    },
    title: {
        color: '#333',
        fontSize: 16
    },
    arrow: {
        width: 16,
        height: 16,
        marginRight: 10
    }

})

export default ListItem