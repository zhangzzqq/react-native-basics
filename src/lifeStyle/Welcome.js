import React from 'react';
import {AppState, Button, Text, View} from 'react-native';

export default class PizzaTranslator extends React.Component {

    state = {email: this.props.email};

    constructor(props) {
        super(props);
        console.log('constructor(props)')
        this.state = {
            currentAppState: AppState.currentState,
        };

    }

    componentWillMount() {

    console.log(' componentWillMount()')
    }


    componentDidMount() {
        console.log('  componentDidMount()')

    }


    componentWillReceiveProps(nextProps) {

        console.log('  componentWillReceiveProps()')
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('  shouldComponentUpdate()')
        return true;
    }

    shouldComponentUpdate() {

        console.log('shouldComponentUpdate()')
    }

    componentWillUpdate() {

        console.log('componentWillUpdate()')
    }

    componentDidUpdate() {

        console.log('componentDidUpdate()')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount()')

    }

    render() {
        console.log('render')
        console.log(this.state.currentAppState);
        return (
            <View style={{flex: 1, backgroundColor: '#1b1b1b'}}>

                <Text style={{color: 'red'}}>

                    生命周期
                </Text>

                <Button
                 onPress={this._click()}
                 title="set state"
                />

                <Button
                    onPress={this._click2()}
                    title="set props"
                />

            </View>);
    }


    _click(){
        this.setState({
            email:'this.state.count + 1',
        })
    }

    _click2(){
      console.log(this.props);
    }



}

