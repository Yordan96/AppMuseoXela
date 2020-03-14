import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ImageBackground,
    Image,
    Button,
    Alert
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default class Detail extends Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text>Detalle de la pieza</Text>
                </View>   
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        color: "#000"
    },
    texto: {
        color: "#fff"
    },
    highlight: {
        fontWeight: '700',
    },
    container:{
        flex: 1, 
        flexDirection: 'row'
    },
    contentLeft:{
        flex: 1, 
        alignItems: 'center', 
        flexDirection: 'column', 
        borderColor: 'white', 
        borderWidth: 0
    },
    logo:{
        alignSelf: 'stretch',
        width: 280,
        height: 165,
        marginLeft:30
    }
});