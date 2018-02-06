import React from 'react'
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native'
// import { NavBar, Icon } from 'antd-mobile'

const { width } = Dimensions.get('window');

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
        flexDirection: 'column',
        justifyContent: 'center',
        height: 50,
        width: width,
        alignItems: 'center'
    },
    mainTit: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'normal'
    }
})