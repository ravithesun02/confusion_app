import React ,{Component} from 'react';
import Menu from './MenuComponent';
import {View,Platform} from 'react-native';
import DishDetail from './DishdetailComponent';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './HomeComponent';
import {createDrawerNavigator} from 'react-navigation-drawer';


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

const HomeNavigator=createStackNavigator({
    Home:{screen:Home},
},{
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

const MainNavigator=createDrawerNavigator({
    Home:{
        screen :HomeNavigator,
        navigationOptions:{
            title:'Home',
            drawerLabel:'Home'
        }
    },
    Menu:{
        screen :MenuNavigator,
        navigationOptions:{
            title:'Menu',
            drawerLabel:'Menu'
        }
    }
},{
    drawerBackgroundColor:'black',
    drawerWidth:150,
    contentOptions: {
        inactiveTintColor:'white',
        activeTintColor: '#e91e63',
        itemsContainerStyle: {
          marginVertical: 0,
        }
      }
});

const AppContainer=createAppContainer(MainNavigator);

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

