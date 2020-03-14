import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ImageBackground,
    Image,
    Button,
    Alert,
    TouchableHighlight
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default class Home extends Component {
    render() {
        return (
            <SafeAreaView>
                <ImageBackground
                    source={require('./test6.jpg')}
                    style={{ width: '100%', height: '100%' }}
                >
                    <StatusBar hidden />
                    <View style={styles.container}>
                        <View style={styles.contentLeft} >
                            <Image
                                style={styles.logo}
                                source={require('./logo_museo.png')}
                            />
                            <Text style={{ color: '#fff' }}>Bienvenido al museo!</Text>
                            <Button
                                title="Press me"
                                color="#f194ff"
                                style={{ borderColor: 'white', borderWidth: 2 }}
                                onPress={() => this.props.navigation.navigate('Scanner')}
                            />
                            <TouchableHighlight
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('Scanner')}
                            >
                                <Text> Touch Here </Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{ flex: 1, borderColor: 'blue', borderWidth: 0 }} >
                            <Image
                                style={{
                                    flex: 1,
                                    alignSelf: 'stretch',
                                    width: undefined,
                                    height: undefined
                                }}
                                source={require('./bagon.png')}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    engine: {
        position: 'absolute',
        right: 0,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        padding: 8,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius:2
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
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    contentLeft: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        borderColor: 'white',
        borderWidth: 0,
        justifyContent: 'space-between'
    },
    logo: {
        alignSelf: 'stretch',
        width: 280,
        height: 165,
        marginLeft: 30
    }
});