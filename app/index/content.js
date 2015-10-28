'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} = React;

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
module.exports = React.createClass({
  render: function(){
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableHighlight onPress={this._onPressButton}>
          <Image resizeMode={'stretch'} style={contentStyles.image} source={{uri: 'http://image.ganjistatic1.com/gjfs15/M03/43/D4/CgEHQVX,z1jKIoyNAAA4A3,,1Ds341_640-290_8-0.png'}}/>
        </TouchableHighlight>
        <TabView />
        <FilterView />
        <ListView />
      </ScrollView>
    );
  },
  _onPressButton : function(){
    //window.alert(1231);
  }
});

