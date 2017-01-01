import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

var styles = require('./styles/footerStyles');

class Footer extends Component {
  render() {
    return (
      <View style = {styles.footerMain}>
        <Image source = {require('./Resources/menu.png')} style = {styles.images}/>
        <Image source = {require('./Resources/artichokeLogo.png')} style = {styles.images}/>
        <Image source = {require('./Resources/settings.png')} style = {styles.images}/>
      </View>
    );
  }
}

module.exports = Footer;
