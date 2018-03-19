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
    width: 80,
    height: 22,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: LINE,
    borderColor: '#ddd',
    borderRadius: 4,
    marginRight: 10
  },
  button: {
    flex: 1,
    alignItems: 'center'
  },
  icon: {
    width: 12,
    height: 12
  },
  input: {
    width: 30,
    height: 22,
    lineHeight: 22,
    fontSize: 14,
    textAlign: 'center',
    borderLeftWidth: LINE,
    borderRightWidth: LINE,
    borderColor: '#ddd',
  }
})