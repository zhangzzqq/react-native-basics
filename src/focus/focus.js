import React from 'react';
import { View, Text, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
 
 
export default class HomeScreen extends React.Component {
 
 
   constructor(props) {
	super(props);
	console.log("HomeScreen constructor start");
        this.didFocusListener = this.props.navigation.addListener(
		'didFocus',
		(obj) => {console.log("HomeScreen didFocus start")}
		);
	this.didBlurListener = this.props.navigation.addListener(
		'didBlur',
		(obj) => {console.log('HomeScreen didBlur start')}
		);
    }
 
    static navigationOptions = {
        title : 'HomeScreen',
    }
 
    componentDidMount = () => {
                console.log("HomeScreen componentDidMount start")
    }
 
    componentWillUnmount() {
		console.log("HomeScreen componentWillUnmount start")
		this.didFocusListener.remove();
		this.didBlurListener.remove();
    }
 
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
               <Text>Home Screen</Text>
 
               <Button onPress={() => this.props.navigation.navigate('Details', {
                   itemId:100,
                   otherParam:'chenyu',
               })} title = "go to Details"/>
  
               <Button
        	title="Go back"
       		onPress={() => this.props.navigation.goBack()}
              />
        </View>
    );
 
    }
}
 
class DetailsScreen extends React.Component {
 
 
   constructor(props) {
	super(props);
	console.log("DetailsScreen constructor start");
        this.didFocusListener = this.props.navigation.addListener(
		'didFocus',
		(obj) => {console.log("DetailsScreen didFocus start")}
	);
	this.didBlurListener = this.props.navigation.addListener(
		'didBlur',
		(obj) => {console.log('DetailsScreen didBlur start')}
	);
    }
 
 
    static navigationOptions = ({navigation}) => {
        return {
            title : navigation.getParam('otherParam', 'no-values'),
        };
    };
    componentDidMount = () => {
        console.log("DetailsScreen componentDidMount start")
    }
 
    componentWillUnmount() {
	console.log("DetailsScreen componentWillUnmount start")
        this.didFocusListener.remove();
	this.didBlurListener.remove();
    }
 
    render() {
        const {navigation} = this.props;
        const itemId = navigation.getParam('itemId', 'no-values');
        const otherParam = navigation.getParam('otherParam', 'no-values');
 
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	    	<Text>Details Screen</Text>
		<Text>itemId:{JSON.stringify(itemId)}</Text>
		<Text>otherParam:{JSON.stringify(otherParam)}</Text>
		<Button
			title="Go to Details... again"
			onPress={() => this.props.navigation.push('Details', {
		    	itemId: Math.floor(Math.random() * 100),
		})}
		/>
		<Button
			title="Go to Home"
			onPress={() => this.props.navigation.navigate('Home')}
		/> 
		<Button
			title="Go back"
			onPress={() => this.props.navigation.goBack()}
		/>
		<Button
			title="Go popToTop"
			onPress={() => this.props.navigation.popToTop()}
		/>
           </View>
       );
    }
}
 
 
const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }
);
 
 
 class App extends React.Component {
 
    constructor(props) {
	super(props);
    }
    render() {
        return <RootStack/>;
    }
 
 
}
 