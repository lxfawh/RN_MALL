import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import * as StaticColor from '../../../constants/colors';
import StaticImage from '../../../constants/staticImage';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: StaticColor.WHITE_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        width: (width - 30) / 2 ,
        height: (width - 30) * 490 / 690 / 2,
    },
    title: {
        color: '#333333',
        fontSize: 16,
        marginTop: 10
    },
    },
);
export default class testCom extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, onClick, imagePath, containerStyle} = this.props;
        return (
            <TouchableOpacity onPress={() => {
                onClick();
            }}>
                <View style={[styles.container, containerStyle]}>
                    <Image source={imagePath}/>
                    <Text style={{color: '#333333', fontSize: 16, marginTop: 10}}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
