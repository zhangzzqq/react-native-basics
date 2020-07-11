import React,{Component,PureComponent} from 'react'
import {Text,TouchableOpacity} from 'react-native'
export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    // 父组件定义的方法
    onClickSon = (msgFromSon) => {
        console.log(msgFromSon)
        alert(msgFromSon)
    }
    render() {
        return (
            <Son onClickSon={this.onClickSon}/>
        )
    }
}
 class Son extends PureComponent {
    render() {
        return (
            <TouchableOpacity onPress={()=> this.props.onClickSon('I am your son')}>
                <Text>爸爸去哪</Text>
            </TouchableOpacity>
        )
    }
}
