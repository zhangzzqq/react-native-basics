import React,{Component,PureComponent} from 'react'
import {Text,View} from 'react-native'
export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg:'I am your father!',
            test:1,
            test2:'123',
        }
    }
    render() {
        return <Son_1 msg={this.state.msg} />;
    }
}
// class Son_1 extends PureComponent {
//     render() {
//         return (
//             <View>
//                 <Text>{this.props.msg}</Text>
//             </View>
//         )
//     }
// }
//向更深层次组件传递值 
class Son_1 extends PureComponent {
    render() {
        return (
            <View>
                <Text>{this.props.msg}</Text>
                <Son_1_1 {...this.props}/>
            </View>
        )
    }
}
class Son_1_1 extends PureComponent{
    render() {
        return (
            <Text>{this.props.msg}</Text>
        )
    }
}


