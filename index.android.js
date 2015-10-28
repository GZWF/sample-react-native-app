/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View
} = React;
var Header = require('./app/header.js');
var Content = require('./app/index/content.js');
var Footer = require('./app/footer.js');
var Guazi = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
          <Header/>
          <Content/>
          <Footer/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
}); 
AppRegistry.registerComponent('Guazi', () => Guazi);
