import React ,{Component} from 'react';
import Menu from './MenuComponent';
import {View,Platform,Text,Image,StyleSheet,ScrollView} from 'react-native';
import DishDetail from './DishdetailComponent';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,SafeAreaView} from 'react-navigation';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';


const MenuNavigator=createStackNavigator({
    Menu:{screen:Menu,
    navigationOptions:({navigation})=>({
        headerLeft:<Icon name='menu' size={24} color='white' onPress={()=>navigation.toggleDrawer()}/>
    })
    },
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

const ContactNavigator=createStackNavigator({
    Contact:{screen:Contact},
},{
    defaultNavigationOptions:({navigation})=>({
        headerStyle:{
            backgroundColor:'#000000'
        },
        headerTintColor:'white',
        headerTitleColor:{
            color:'white'
        },
        headerLeft:<Icon name='menu' size={24} color='white' onPress={()=>navigation.toggleDrawer()}/>
    })
});

const AboutNavigator=createStackNavigator({
    About:{screen:About},
},{
    defaultNavigationOptions:({navigation})=>({
        headerStyle:{
            backgroundColor:'#000000'
        },
        headerTintColor:'white',
        headerTitleColor:{
            color:'white'
        },
        headerLeft:<Icon name='menu' size={24} color='white' onPress={()=>navigation.toggleDrawer()}/>
    })
})

const HomeNavigator=createStackNavigator({
    Home:{screen:Home},
},{
    defaultNavigationOptions:({navigation})=>({
        headerStyle:{
            backgroundColor:'#000000'
        },
        headerTintColor:'white',
        headerTitleColor:{
            color:'white'
        },
        headerLeft:()=><Icon name='menu' size={24} color='white' onPress={()=>navigation.toggleDrawer()}/>
    })
});


const CustomDrawerContentComponent=(props)=>(
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{top:'always',horizontal:'never'}}>
        <View style={styles.drawerHeader}>
            <View style={{flex:1}}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage}/>
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.drawerHeaderText}> Restaurent Con Fusion</Text>

                </View>
            </View>

            <DrawerItems {...props}/>

        </SafeAreaView>
    </ScrollView>
    );

const MainNavigator=createDrawerNavigator({
    Home:{
        screen :HomeNavigator,
        navigationOptions:{
            title:'Home',
            drawerLabel:'Home',
            drawerIcon:({tintColor})=>(  <Icon type='font-awesome' name='home' size={24} color={tintColor}/>)
        }
    },
    Menu:{
        screen :MenuNavigator,
        navigationOptions:{
            title:'Menu',
            drawerLabel:'Menu',
            drawerIcon:({tintColor})=>(  <Icon type='font-awesome' name='list' size={24} color={tintColor}/>)
        }
    },
    About:{
        screen:AboutNavigator,
        navigationOptions:{
            title:'About Us',
            drawerLabel:'About Us',
            drawerIcon:({tintColor})=>(  <Icon type='font-awesome' name='info-circle' size={24} color={tintColor}/>)

        }
    },
    Contact:{
        screen:ContactNavigator,
        navigationOptions:{
            title:'Contact Us',
            drawerLabel:'Contact Us',
            drawerIcon:({tintColor})=>(  <Icon type='font-awesome' name='address-card' size={24} color={tintColor}/>)
        }
    }
},{
    drawerBackgroundColor:'gray',
    contentComponent:CustomDrawerContentComponent
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

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    drawerHeader:{
        backgroundColor:'#512DA8',
        height:140,
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        flexDirection:'row'
    },
    drawerImage:{
        margin:10,
        height:60,
        width:80
    },
    drawerHeaderText:{
        color:'white',
        fontSize:24,
        fontWeight:'bold'
    }
});

export default Main;

