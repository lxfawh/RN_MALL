import React from 'react'
import { View, Text, TextInput, Image, TouchableWithoutFeedback, PixelRatio, StyleSheet, Alert } from 'react-native'

const LINE = 1 / PixelRatio.get()

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => { this.state.num > 1 && this.setState({ num: this.state.num - 1 }) }}>
          <View style={styles.button}>
            <Image style={styles.icon} source={require('../../../assets/icon/icon-min.png')} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View>
            <Text style={styles.input}>{this.state.num}</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { this.setState({ num: this.state.num + 1 }) }}>
          <View style={styles.button}>
            <Image style={styles.icon} source={require('../../../assets/icon/icon-add.png')} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 86,
    height: 28,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: LINE,
    borderColor: '#999',
    borderRadius: 4,
    marginRight: 10
  },
  button: {
    flex: 1,
    alignItems: 'center'
  },
  icon: {
    width: 18,
    height: 18
  },
  input: {
    width: 30,
    height: 28,
    lineHeight: 30,
    textAlign: 'center',
    borderLeftWidth: LINE,
    borderRightWidth: LINE,
    borderColor: '#999',
  }
})