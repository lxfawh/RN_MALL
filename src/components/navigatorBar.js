import React from 'react'
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    PixelRatio
} from 'react-native'
// import { NavBar, Icon } from 'antd-mobile'

const { width } = Dimensions.get('window');
const Line = 1 / PixelRatio.get()

export default class NavigatorBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.bar}>
                <Text style={styles.mainTit}>{this.props.title || 'TITLE'}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',

        height: 50,
        width: width,
        alignItems: 'center',
        borderBottomWidth: Line,
        borderColor: '#d1d1d1'
    },
    mainTit: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'normal',
        marginLeft: 12,
    }
})