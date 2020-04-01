import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  RefreshControl,
  ScrollView,
  TouchableWithoutFeedback,
  Text
} from 'react-native';
class Row extends Component {
  _onClick = ()=>{
    console.log('onclick');
    this.props.onClick(this.props.data);
  };
  render(){
    return(
        <TouchableWithoutFeedback onPress={this._onClick}>
          <View style={{backgroundColor: '#3a5795', borderWidth: 1, padding: 20, borderColor: 'grey', margin: 5}}>
            <Text style={{alignSelf:'center', color:'#fff'}}>
              {this.props.data.text + '('+ this.props.data.clicks + ' clicks)'}
            </Text>
          </View>
        </TouchableWithoutFeedback>
    )
  }
}
export default  class RNRefreshView extends Component {
  constructor(props){
    super(props);
    this.state = {
      isRefreshing: false,
      loaded: 0,
      //使用map创建对象数组
      rowData: Array.from(new Array(20)).map((val, i)=>({
            text: 'Inital row' + i,
            clicks: 0
          })
      )
    }
  }
  //传递当前的对象，将clicks+1，刷新界面
  _onClick22 =(row)=> {
    console.log('1111' + row.text);
    row.clicks++;
    this.setState({
      rowData: this.state.rowData,
    });
  };
  render(){
    //map遍历并创建Row类,row是数组的对象，i是索引位置
    const rows = this.state.rowData.map((row, i)=>{
      console.log('4444' + i);
      return <Row key={i} data={row} onClick={this._onClick22}/>;
    });
    return(
        <ScrollView style={{flex: 1, backgroundColor: '#ffaaff'}}
                    refreshControl={
                      <RefreshControl refreshing={this.state.isRefreshing}
                                      onRefresh={this._onRefresh}
                                      tintColor="#ff0000"
                                      title="Loading..."
                                      titleColor="#00ff00"
                      />
                    }>
          {rows}
        </ScrollView>
    )
  }
  _onRefresh =()=>{
    this.setState({
      isRefreshing: true
    });
    //间隔5秒结束下拉刷新
    setTimeout(()=>{
      //.concat拼接字符串，数组
      let rowData = Array.from(new Array(10)).map((val, i)=>({
        text: 'Loaded row' + (+this.state.loaded + i),
        clicks: 0
      }))
          .concat(this.state.rowData);
      this.setState({
        loaded: this.state.loaded + 10,
        isRefreshing: false,
        rowData: rowData
      })
    }, 5000);
  }
}
AppRegistry.registerComponent('RNRefreshView', ()=>RNRefreshView);
