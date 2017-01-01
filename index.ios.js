import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

var Header = require('./Header')
var ScrollRecipes = require('./ScrollRecipes')
var Footer = require('./Footer')

export default class Artichoke extends Component {
  render() {
    return (
      <View style = {{backgroundColor: '#F8F9F9'}}>
        <Header />
        <ScrollRecipes />
        <Footer />
      </View>
    );
  }
}

AppRegistry.registerComponent('Artichoke', () => Artichoke);
