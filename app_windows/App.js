import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableHighlight
} from 'react-native';

export default class App extends Component {
  _onPressButton = () => {
    console.log("onPRess")
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{flex:1, alignItems:'center', justifyContent:'center'}} >
            <Image
                style={{
                  width: 290,
                  height: 145}}
                source={require('./logo_museo.png')}
              />            
          </View>
          <View style={styles.buttonsBox}>
            <TouchableHighlight style={{height:100}} onPress={this._onPressButton}>
              <View style={{alignItems:'center'}}>
                <Image
                  style={styles.icon}
                  source={require('./qr.png')}
                />
                <Text style={styles.textWhite}>Escanear QR</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={{height:100}} onPress={this._onPressButton}>
              <View style={{alignItems:'center'}}>
                <Image
                  style={styles.icon}
                  source={require('./museo.png')}
                />
                <Text style={styles.textWhite}>Historia</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={{height:100}} onPress={this._onPressButton}>
              <View style={{alignItems:'center'}}>
                <Image
                  style={styles.icon}
                  source={require('./persons.png')}
                />
                <Text style={styles.textWhite}>Desarrolladores</Text>
              </View>
            </TouchableHighlight>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsBox: {
    flex:1,
    marginHorizontal:'20%',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  container: {
    backgroundColor: '#222220',
    width: '100%',
    height: '100%'
  },
  icon:{
    width: 70,
    height: 70
  },
  textWhite:{
    color: '#fff'
  }
});