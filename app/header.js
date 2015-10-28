'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image
} = React;

module.exports = React.createClass({
  render: function(){
    return (
      <View style={headerStyles.container}>
        <Image style={headerStyles.logo} source={{uri: 'http://chuantu.biz/t2/13/1442990978x-1566638302.png'}}/>
        <Text style={headerStyles.cityText}>
             北京
        </Text>
        <View style={headerStyles.searchBar}>
          <Image style={headerStyles.searchLogo}/>
          <Text style={headerStyles.placeHoder}>
            搜靠谱好车
          </Text>
        </View>
      </View>
    );
  }
});
var headerStyles = StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: '#22ac38',
    flexDirection : 'row',
    justifyContent : 'flex-start',
    //alignItems : 'center',
    //justifyContent : 'center'
  },
  logo: {
    marginTop : 9,
    marginLeft : 10,
    width : 124,
    height : 26
  },
  cityText: {
    marginTop : 14,
    marginLeft : 8,
    color : '#fff',
    lineHeight: 30,
    textAlign: 'center',
    fontSize: 12
  },
  searchBar: {
    backgroundColor: '#179500',
    height: 30,
    marginTop: 7,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 3,
    flex:1,
    flexDirection : 'row',
  },
  searchLogo: {
    width: 24,
    height: 24,
    left: 4,
    top: 3
  },
  placeHoder: {
    lineHeight:30,
    fontSize:12,
    color:'#fff',
    marginLeft:10,
    textAlign: 'center',
    top:7
  }
});