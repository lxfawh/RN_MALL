import React from 'react'
import { View, Dimensions, Text, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')

const img1 = require('../assets/img/1.jpg')
const img2 = require('../assets/img/2.jpg')
const img3 = require('../assets/img/3.jpg')
const img4 = require('../assets/img/4.jpg')

export default class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ show: true })
        }, 0)
    }

    render() {
        return this.state.show ?
            (<Swiper style={styles.wrapper} loop>
                {/* <Image resizeMode='cover' style={styles.image} source={img1} /> */}
                <Image resizeMode='cover' style={styles.image} source={img2} />
                <Image resizeMode='cover' style={styles.image} source={img3} />
                <Image resizeMode='cover' style={styles.image} source={img4} />
            </Swiper>

            ) : (
                <View style={styles.wrapper}>
                </View>
            )


    }
}
const styles = StyleSheet.create({
    wrapper: {
        height: 200,
        backgroundColor: '#f8f8f8'
    },
    image: {
        width: width,
        height: 200
    }
})