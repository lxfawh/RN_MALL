import React from 'react'
import {
    Text,
    View,
    Button,
    Image
} from 'react-native'

import NavigatorBar from '../../components/navigatorBar'

class MinePage extends React.Component {

    // static navigationOptions = ({ navigation }) => {
    //     const { state, setParams } = navigation;
    //     return {
    //         tabBarLabel: 'test',
    //         title: 'muy_PAGE',
    //         header: <NavigatorBar title='test' hiddenBackIcon={true} />,
    //         tabBarOnPress: ({ scene, jumpToIndex }) => {
    //             jumpToIndex(scene.index)
    //         },
    //         tabBarIcon: ({ tintColor }) => (<Text style={{ fontFamily: 'iconfont', color: tintColor, fontSize: 23, marginTop: 7 }}>&#xe676;</Text>)
    //     }
    // };

    static navigationOptions = {
        // header: <NavigatorBar title="我的" />,
        header: null,
        // tabBarVisible: false,
        tabBarLabel: '我的',
        tabBarIcon: <Image source={require('../../assets/icon/my.png')} />,
    }

    render() {
        return (
            <View>
                <Text>Hello, mine!</Text>
            </View>
        )
    }
    
}


export default MinePage;