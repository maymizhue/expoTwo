import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {Header,Card,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Newpost from './components/Newpost'
import Welcome from './components/Welcome'
import Posts from './components/Posts'
import Setting from './components/Setting'

export default class App extends Component{
 render(){
   const Mystack=createStackNavigator({
     Welcome:{
       screen:Welcome
     },
     Newpost:{
       screen:Newpost
     }
   },
   {
     initialRouteName:"Welcome",
     defaultNavigationOptions:{
       header:null
     }
   })

   const MyTab=createBottomTabNavigator({
    Posts:{
      screen:Posts,
      navigationOptions:{
        tabBarLabel:"Posts",
        tabBarIcon:({tintColor})=><Icon name="tags" color={tintColor} size={14}></Icon>
      }
    },
    Newpost:{
      screen:Newpost,
      navigationOptions:{
       tabBarLabel:"Add Post",
       tabBarIcon:({tintColor})=><Icon name="plus-circle" color={tintColor} size={14}></Icon>
     }
    }
  })


   const MyDrawer=createDrawerNavigator({
     Posts:MyTab,

     Welcome:{
       screen:Welcome,
       navigationOptions:{
         drawerLabel:"Dashboard",
         drawerIcon:({tintColor})=><Icon name="home" color={tintColor} size={14}></Icon>
       }
     },
     Setting:{
       screen:Setting,
       navigationOptions:{
         drawerLabel:"Setting",
         drawerIcon:({tintColor})=><Icon name="cogs" color={tintColor} size={14}></Icon>
       }
     }
   },
   {
     drawerPosition:"left",
     drawerWidth:200,
     initialRouteName:"Posts"
   }
   )

     const MySwitch=createSwitchNavigator({
     MyD:MyDrawer,
     MyT:MyTab
   },
   {
      initialRouteName:"MyD"
   })
   
   

const AppContainer=createAppContainer(MySwitch)

   return(<AppContainer></AppContainer>)
 }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
