
import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, TouchableWithoutFeedback, ScrollView, PixelRatio } from 'react-native'
import NavigatorBar from '../../components/navigatorBar'
const { width, height } = Dimensions.get('window')
import CardMsg from '../../components/cardMsg'
const Line = 1 / PixelRatio.get()

class MsgPage extends React.Component {
    static navigationOptions = {
        header: <NavigatorBar title="苹果Apple自营店" />,
    }

    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <CardMsg />
                    <CardMsg />
                    <CardMsg />
                    <CardMsg />
                    <CardMsg />
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: width,
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'

    }
})
export default MsgPage;