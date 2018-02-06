import React from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet
} from 'react-native'


class BtnGroup extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpactiy={0.9} style={styles.btn1}
                    onPress={() => { this.props.handle1() }}>
                    <Text style={styles.text}>{this.props.title1 || '按钮1'}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpactiy={0.9} style={styles.btn2}
                    onPress={() => { this.props.handle2() }}>
                    <Text style={styles.text}>{this.props.title2 || '按钮2'}</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn1: {
        backgroundColor: '#ff9630',
        alignItems: 'center',
        height: 44,
        flex: 1
    },
    btn2: {
        backgroundColor: '#ff3030',
        alignItems: 'center',
        height: 44,
        flex: 1,
    },
    text: {
        color: '#fff',
        height: 44,
        lineHeight: 44
    }
})



export default BtnGroup;