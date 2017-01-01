import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

var styles = require('./styles/recipeStyles');

class RecipeEntry extends Component {
  render() {
    return (
      <View style = {styles.recipeGrouper}>
        <Image source = {this.props.recipeImage} style = {styles.recipeImage} />
        <View style = {styles.textGrouper}>
        {/*Grouper for all recipe text information*/}
          <View>
          {/*Grouper for header and sub header*/}
            <View style = {styles.headerGrouper}>
            {/*Recipe header text (Name and Price) information*/}
              <Text style = {styles.recipeName}>
                {this.props.recipeName}
              </Text>
              <Text style = {styles.recipePrice}>
                {this.props.recipePrice}
              </Text>
            </View>
            <View>
              {/*Recipe sub header (num ingredients) information*/}
                <Text style = {styles.recipeSubHeading}>
                  {this.props.recipeIngredients} ingredients | {this.props.recipePrepTime} mins.
                </Text>
            </View>
          </View>
          <View>
          {/*Grouper for body information*/}
            <Text style = {styles.recipeBody}>
              {this.props.locationDistance} | {this.props.location}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = RecipeEntry;
