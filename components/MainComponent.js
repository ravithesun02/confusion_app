import React ,{Component} from 'react';
import Menu from './MenuComponent';
import {View,Platform} from 'react-native';
import DishDetail from './DishdetailComponent';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const MenuNavigator=createStackNavigator({
    Menu:{screen:Menu},
    DishDetail:{screen:DishDetail}
},{
    InitialRouteName:'Menu',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#000000'
        },
        headerTintColor:'white',
        headerTitleColor:{
            color:'white'
        }
    }
});

const AppContainer=createAppContainer(MenuNavigator);

class Main extends Component{


    render(){
    return(
        <View style={{flex:1,paddingTop:Platform.OS ==='ios' ? 0: Expo.Constants.statusBarHeight }}>
           <AppContainer/>
        </View>
    );
}

}

export default Main;

