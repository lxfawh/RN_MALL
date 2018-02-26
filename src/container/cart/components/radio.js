import React from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'

const check = require('../../../assets/icon/check.png')
const checked = require('../../../assets/icon/checked.png')
export default class Radio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }
  componentDidMount() {
    this.props.checked && this.setState({ checked: true })
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => { this.setState({ checked: !this.state.checked }) }}>
        <View style={styles.container}>
          <Image source={this.state.checked ? checked : check} resizeMode="cover" style={styles.radio} />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10
  },
  radio: {
    width: 22,
    height: 22
  }
})