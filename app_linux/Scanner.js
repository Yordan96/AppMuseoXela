import React, { Component, } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { black } from 'color-name';

export default class Scanner extends Component {
  render() {
    onSuccess = (e) => {
      this.props.navigation.navigate('Detail')
      }
    return (
        <QRCodeScanner
        showMarker={true}
        onRead={this.onSuccess}   
      />
    );
  }

  takePicture = async() => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777',
      backgroundColor:'black'
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)',
      backgroundColor:'black',
    },
    buttonTouchable: {
      padding: 10,
      backgroundColor: 'black',
    },
    abajo: {
        backgroundColor:'black',
        height:10,
        padding:5
    }
  });