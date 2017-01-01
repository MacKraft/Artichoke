import {
  StyleSheet
} from 'react-native';

let logoSize = 60;

var styles = StyleSheet.create({
  headerGroup: {
    zIndex: 1
  },
  headerMain: {
    height: 65,
    paddingTop: 15,
    alignItems: 'center',
    backgroundColor: '#0084ff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    zIndex: 1

  },
  headerSub: {
    height: 25,
    shadowColor: 'black',
    shadowOpacity: 90,
    shadowRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'white'

  },
  image: {
    height: logoSize,
    width: logoSize
  },
  imagePaths: {
    height: 25,
    width: 25
  },
  textInput: {
    flex: 2,
    height: 20,
    padding: 4,
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    fontFamily: 'AppleSDGothicNeo-Light',
  },
  text: {
    fontFamily: 'AppleSDGothicNeo-Light',
    flex: 1,
    textAlign: 'center'
  }
});

module.exports = styles
