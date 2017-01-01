import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

var styles = require('./styles/headerStyles');

class Header extends Component {
  render() {
    return (
      <View style = {styles.headerGroup}>
        <View style = {styles.headerMain}>
          <Image source = {require('./Resources/menu.png')} style = {styles.imagePaths}/>
          <Image source = {require('./Resources/artichokeLogo.png')} style = {styles.image}/>
          <Image source = {require('./Resources/settings.png')} style = {styles.imagePaths}/>
        </View>
        <View style = {styles.headerSub}>
          <TextInput style = {styles.textInput} placeholder = '123 W. Washington Madison, WI 53703'/>
          <Text style = {styles.text}>
            PRICE
          </Text>
        </View>
      </View>
    );
  }
}

module.exports = Header;
