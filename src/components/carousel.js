import React from 'react'
import { View, Dimensions, Text, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')
const img1 = require('../assets/img/1.jpg');
const img2 = require('../assets/img/2.jpg');
const img3 = require('../assets/img/3.jpg');
const img4 = require('../assets/img/4.jpg');
export default class Carousel extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image resizeMode='stretch' style={styles.image} source={img1} />
                {/* <Swiper style={styles.wrapper} autoplay
                    onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)} loop >
                    <View style={styles.slide} >
                        <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
                        <Image resizeMode='cover' style={styles.image} source={img1} />
                    </View>
                    <View style={styles.slide}>
                        <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
                        <Image resizeMode='cover' style={styles.image} source={img2} />
                    </View>
                    <View style={styles.slide} >
                        <Text numberOfLines={1}>Why Stone split from Garfield</Text>
                        <Image resizeMode='cover' style={styles.image} source={img3} />
                    </View>
                    <View style={styles.slide}>
                        <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
                        <Image resizeMode='cover' style={styles.image} source={img4} />
                    </View>
                </Swiper> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: width,
        height: 200
    },

    wrapper: {
        flex: 1
    },

    // slide: {
    //     // flex: 1,
    //     // justifyContent: 'center',
    //     // backgroundColor: 'transparent'
    // },

    // slide1: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#fff'
    // },

    text: {
        color: '#fff',
        fontSize: 30,
    },

    image: {
        width: width,
        height: 200
    }
})