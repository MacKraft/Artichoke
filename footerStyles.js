import {
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({

  footerMain: {
    height: 50,
    zIndex: 1,
    paddingTop: 15,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    zIndex: 1,
    shadowColor: 'black',
    shadowOpacity: 100,
    shadowRadius: 7,
    shadowOffset: {width: 0, height: 7},
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
  images: {
    height: 20,
    width: 20
  },
  text: {
    fontFamily: 'AppleSDGothicNeo-Light',
    flex: 1,
    textAlign: 'center'
  }
});

module.exports = styles
