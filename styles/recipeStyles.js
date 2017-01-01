import {
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  recipeGrouper: {
    height: 80,
    flexDirection: 'row',
    marginBottom: 8,
    backgroundColor: 'white'
  },
  textGrouper: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 8
  },
  headerGrouper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recipeName: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'AppleSDGothicNeo-Medium'
  },
  recipePrice: {
    fontSize: 16,
    fontFamily: 'AppleSDGothicNeo-Light'
  },
  recipeImage: {
    width: 80,
    height: 80
  },
  recipeBody: {
    fontFamily: 'AppleSDGothicNeo-Light',
    fontSize: 14,
  },
  recipeSubHeading: {
    fontFamily: 'AppleSDGothicNeo-Light',
    fontSize: 12,
    color: 'grey'
  }
});

module.exports = styles
