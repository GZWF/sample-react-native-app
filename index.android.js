/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Navigator,
  PixelRatio
} = React;
//          <!--<Image source={{uri: 'http://sta.ganjistatic1.com/public/image/mobile/touch/haoche/icon_new.png'}} style={headerStyles.searchLogo}/>-->
var Header = React.createClass({
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
var navs = [{uri:'http://chuantu.biz/t2/13/1442993202x-954497781.png', name: '首页'}, {uri: 'http://chuantu.biz/t2/13/1442993347x-954497781.png', name: '买车'}, {uri: 'http://chuantu.biz/t2/13/1442993398x-954497781.png', name: '卖车'}, {uri: 'http://chuantu.biz/t2/13/1442993453x-954497781.png', name: '我的'}];

var Content = React.createClass({
  render: function(){
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image resizeMode={'stretch'} style={contentStyles.image} source={{uri: 'http://image.ganjistatic1.com/gjfs15/M03/43/D4/CgEHQVX,z1jKIoyNAAA4A3,,1Ds341_640-290_8-0.png'}}/>
        <TabView />
        <FilterView />
        <ListView />
      </ScrollView>
    );
  }
});
var TabView = React.createClass({
  render: function(){
    var items = [];
    var category = ['100%个人二手车', '259项全车检测', '14天可退1年质保'];
    category.map(function(item){
      items.push(<Text style={tabViewStyle.text}>{item}</Text>);
    });
    return (
      <View style={tabViewStyle.container}>
        {items}
      </View>
    );
  }
});
var FilterView = React.createClass({
  render: function(){
    return (
      <View>
        <ContentTitle text="快速选车" />
        <FilterContent />
        <View style={FilterStyles.linkContainer}>
          <Text style={FilterStyles.linkText}>查看更多></Text>
        </View>
      </View>
    );
  }
});
var ListView = React.createClass({
  render: function(){
    var rows = [];
    var data = [[{
      title: '奔驰M级 2014款...',
      info: '2014年上牌 | 2.7万公里',
      cost: '82.00万',
      primeCost: '108.30万',
      uri: 'http://scs.ganjistatic1.com/gjfs15/M08/96/2D/CgEHQFYBYyqHwqXKAA2jDwpaI8A613_290-190c_8-0.jpg',
    }, {
      title: '奔驰E级 2010款...',
      info: '2012年上牌 | 3.9万公里',
      cost: '24.00万',
      primeCost: '53.00万',
      uri: 'http://scs.ganjistatic1.com/gjfs16/M01/8B/7A/CgEHQlYBNpnUOLMlABqZjrP1grs125_290-190c_8-0.jpg'
    }],[{
      title: '奔驰M级 2014款...',
      info: '2014年上牌 | 2.7万公里',
      cost: '82.00万',
      primeCost: '108.30万',
      uri: 'http://scs.ganjistatic1.com/gjfs15/M08/96/2D/CgEHQFYBYyqHwqXKAA2jDwpaI8A613_290-190c_8-0.jpg',
    }, {
      title: '奔驰E级 2010款...',
      info: '2012年上牌 | 3.9万公里',
      cost: '24.00万',
      primeCost: '53.00万',
      uri: 'http://scs.ganjistatic1.com/gjfs16/M01/8B/7A/CgEHQlYBNpnUOLMlABqZjrP1grs125_290-190c_8-0.jpg'
    }],[{
      title: '奔驰M级 2014款...',
      info: '2014年上牌 | 2.7万公里',
      cost: '82.00万',
      primeCost: '108.30万',
      uri: 'http://scs.ganjistatic1.com/gjfs15/M08/96/2D/CgEHQFYBYyqHwqXKAA2jDwpaI8A613_290-190c_8-0.jpg',
    }, {
      title: '奔驰E级 2010款...',
      info: '2012年上牌 | 3.9万公里',
      cost: '24.00万',
      primeCost: '53.00万',
      uri: 'http://scs.ganjistatic1.com/gjfs16/M01/8B/7A/CgEHQlYBNpnUOLMlABqZjrP1grs125_290-190c_8-0.jpg'
    }]];
    data.map(function(item){
      rows.push(<ListRow data={item}/>)
    });
    return (
      <View style={listStyles.container}>
        <ContentTitle text="最新车源" />
        {rows}
        <View style={FilterStyles.linkContainer}>
            <Text style={FilterStyles.linkText}>查看更多></Text>
        </View>
      </View>
    );
  }
});
var ListRow = React.createClass({
  render: function(){
    var rows = [];
    this.props.data.map(function(item){
      rows.push(<ListItem data={item} />);
    });
    return (
      <View style={listStyles.row}>{rows}</View>
    );
  }
})
var ListItem = React.createClass({
  render : function(){
    var data = this.props.data;
    return (
      <View style={listStyles.item}>
        <Image style={listStyles.image} source={{uri: data.uri}}/>
        <Text style={listStyles.title}>{data.title}</Text>
        <Text style={listStyles.info}>{data.info}</Text>
        <View style={listStyles.costWrapper}>
            <Text style={listStyles.cost}>{data.cost}</Text>
            <Text style={listStyles.primeCost}>{data.primeCost}</Text>
        </View>
      </View>
    );
  }
});
var ContentTitle = React.createClass({
  render: function(){
    var text = this.props.text;
    return (
      <View style={FilterStyles.titleContainer}>
        <View style={FilterStyles.titlePrefix}></View>
        <Text style={FilterStyles.title}>{text}</Text>
      </View>
    );
  }
});
var FilterContent = React.createClass({
  render: function(){
    var rows = [];
    var data = [{
      title: '价格',
      type: 'text',
      data: [
        ['5万以下', '5-10万', '10-15万', '15-20万'],
        ['20-25万', '25-40万', '40-60万', '60万以上']
      ] 
    }, {
      title: '品牌',
      type: 'text',
      data: [
        ['大众', '现代', '丰田', '宝马'],
        ['福特', '日产', '别克', '本田']
      ]
    }, {
      title: '车型',
      type: 'text',
      data:[
        ['小轿车', 'SUV', 'MPV', '跑车'],
      ]
    }];
    data.map(function(item){
      rows.push(<FilterTitle title={item.title}/>);
      item.data.map(function(list){
        if (item.type == 'text') {
          rows.push(<FilterTextView data={list}/>)
        } else {
          //image
        }
      });
    });
    return (
        <View>
          {rows}
        </View>
    );
  }
});
var FilterTitle = React.createClass({
  render: function(){
    var title = this.props.title;
    return (
      <View style={FilterStyles.filterTitleContainer}>
        <Text style={FilterStyles.FilterTitle}>{title}</Text>
      </View>
    );
  }
});
var FilterTextView = React.createClass({
  render: function(){
    var rows = [];
    var data = this.props.data;
    data.map(function(text, index){
      rows.push(<View style={(index== 0) ? FilterStyles.firstFilterTextView : FilterStyles.FilterTextView}><Text style={FilterStyles.text}>{text}</Text></View>)
    });
    return (
      <View style={FilterStyles.FilterTextContainer}>
        {rows}
      </View>
    );
  }
});
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

//css
var listStyles = StyleSheet.create({
  container: {
    height: 580,
    flexDirection : 'column',
  },
  row : {
    flexDirection : 'row',
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  item: {
    paddingRight: 8,
    flex: 1,
  },
  title: {
    color: '#333',
    fontWeight: '400',
    lineHeight: 20,
    fontSize: 15
  },
  info: {
    color: '#999',
    fontSize: 12,
    lineHeight: 18
  },
  image: {
    flex: 1,
    resizeMode: 'stretch'
  },
  costWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cost: {
    color: '#22ac38',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18
  },
  primeCost: {
    color: '#999',
    fontSize: 12,
    textDecorationLine: 'line-through',
  }
});
var FilterStyles = StyleSheet.create({
  titleContainer : {
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingLeft: 15,
    height: 45,
    justifyContent: 'flex-start',
    flexDirection : 'row',
    alignItems: 'center'
  },
  FilterTextContainer: {
    flexDirection: 'row',
  },
  titlePrefix: {
    alignSelf: 'center',
    height: 18,
    marginRight: 5,
    backgroundColor: '#22ac38',
    width: 2,
  },
  title : {
    fontSize: 15,
    color: '#333',
  },
  filterTitleContainer : {
    //height: 25,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  FilterTitle: {
    lineHeight: 25,
    color: '#999',
    fontSize: 12,
    marginLeft: 15,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  FilterTextView: {
    height: 50,
    borderColor: '#eee',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    justifyContent: 'center',
    flex:1
  },
  firstFilterTextView: {
    height: 50,
    borderColor: '#eee',
    borderBottomWidth: 1,
    justifyContent: 'center',
    flex:1
  },
  text: {
    color: '#333',
    fontSize: 13,
    textAlign: 'center'
  },
  linkContainer: {
    height: 42,
    borderColor: '#e5e5e5',
    borderBottomWidth: 7,
    justifyContent: 'center'
  },
  linkText: {
    fontSize: 13,
    color: '#22ac38',
    textAlign: 'center'
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
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});
var contentStyles = StyleSheet.create({
  image: {
    height: 200
  },
});
var tabViewStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 30,
    marginRight: 10,
    backgroundColor: '#fff'
  },
  text: {
    top: 5,
    flex: 1,
    lineHeight: 30,
    fontSize: 11,
    textAlign: 'center'
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
AppRegistry.registerComponent('Guazi', () => Guazi);
