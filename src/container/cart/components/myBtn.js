import React from 'react'
import { Button, Alert, StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    btn: {
        width: 400,
        height: 40,
        color: '#ff9630',
        lineHeight: 40,
        borderColor: '#aaa',
        backgroundColor: '#aaa'
    }
})
export default class myBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '默认文字 '
        }
    }

    render() {
        return (
            <Button onPress={this._pressHandle.bind(this)} title={this.props.title || this.state.title} style={styles.btn} />
        )
    }

    _pressHandle() {
        if (this.props.onPress) {
            this.props.onPress();
        } else {
            Alert.alert('alert')
        }
    }
}
