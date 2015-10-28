'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image
} = React;

var navs = [{uri:'http://chuantu.biz/t2/13/1442993202x-954497781.png', name: '首页'}, {uri: 'http://chuantu.biz/t2/13/1442993347x-954497781.png', name: '买车'}, {uri: 'http://chuantu.biz/t2/13/1442993398x-954497781.png', name: '卖车'}, {uri: 'http://chuantu.biz/t2/13/1442993453x-954497781.png', name: '我的'}];

var Footer = React.createClass({
  render: function(){
    var items = [];
    navs.map(function(item){
      items.push(<FooterNav name={item.name} uri={item.uri}/>);
    });
    return (
      <View style={footerStyles.container}>
        {items}
      </View>
    );
  }
});
//<Text style={footerStyles.text}>{name}</Text>
var FooterNav = React.createClass({
  render: function(){
      var name = this.props.name;
      var uri = this.props.uri;
      return (
        <View style={footerStyles.nav}>
          <Image style={footerStyles.image} source={{uri: uri}}/>
        </View>
      );
  }
});
var footerStyles = StyleSheet.create({
    container: {
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: '#999',
        borderTopWidth: 1
    },
    nav: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
      fontSize: 13,
      textAlign: 'center'
    },
    image: {
      alignSelf: 'center',
      width: 22,
      height: 30,
      alignItems: 'center',
      resizeMode: 'stretch'
    }
});
module.exports = Footer;
