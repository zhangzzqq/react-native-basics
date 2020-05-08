import React from 'react'
class Test extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Number:1
        }
    }
    //这里调用了setState但是并没有改变setState中的值
    handleClick = () => {
        const preNumber = this.state.Number
        this.setState({
            Number:this.state.Number
        })
    }
    //在render函数调用前判断：如果前后state中Number不变，通过return false阻止render调用
    shouldComponentUpdate(nextProps,nextState){
        if(nextState.Number == this.state.Number){
            return false
        }
    }
    render(){
        //当render函数被调用时，打印当前的Number
        console.log(this.state.Number)
        return(<h1 onClick = {this.handleClick} style ={{margin:30}}>
            {this.state.Number}
        </h1>)
    }
}
