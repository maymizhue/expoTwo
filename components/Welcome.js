import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Welcome extends Component {
   
    render(){
        return(
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff',onPress:()=>this.props.navigation.openDrawer()}}
                    centerComponent={{ text: 'Welcome', style: { color: '#fff' } }}
                    rightComponent={
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Setting")}>
                            <Text>
                                <Icon name="plus-circle" color="#fff" size={14}></Icon>
                            </Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}