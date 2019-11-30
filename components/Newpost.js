import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Newpost extends Component {
   
    render(){
        return(
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff',onPress:()=>this.props.navigation.openDrawer()}}
                    centerComponent={{ text: 'Add New Post', style: { color: '#fff' } }}
                    rightComponent={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
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