
import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, TouchableNativeFeedback, PixelRatio } from 'react-native'
import { ROUTE_MSG } from '../../../constants/routeType'

const { width } = Dimensions.get('window')

const Line = 1 / PixelRatio.get()


class NewsItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pic: require('../../../assets/img/news.jpg'),
            title: '中国话语海外认知度调研报告首次发布 汉语词汇获世界更高认知 ',
            author: '腾讯新闻',
            avatar: require('../../../assets/default.jpg')
        }
    }

    render() {
        return (
            <TouchableNativeFeedback>
                <View style={styles.container}>
                    <View style={styles.text}>
                        <Text style={styles.title} numberOfLines={2}>{this.state.title}</Text>
                        <View style={styles.info}>
                            <Image style={styles.avatar} source={this.props.avatar || this.state.avatar} />
                            <Text style={styles.author} numberOfLines={1}>{this.state.author}</Text>
                        </View>
                    </View>
                    <Image style={styles.pic} source={this.props.pic || this.state.pic} />
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: width,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#ddd',
        borderTopWidth: Line,
        borderBottomWidth: Line,
        marginBottom: 10
    },
    text: {
        height: 80,
        width: width - 150,
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 16,
        color: '#333'
    },
    info: {
        flexDirection: 'row'
    },
    avatar: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 10
    },
    author: {
        fontSize: 12,
        color: '#999'
    },
    pic: {
        height: 80,
        width: 120,
        borderRadius: 2
    }
})
export default NewsItem;