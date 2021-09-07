import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeedScreen from '../screens/FeedScreen'
import CreateScreen from '../screens/CreateScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default class TabNavigator extends Component {
    render() {
        return (
            <Tab.Navigator 
            screenOptions = {({route})=>({
                tabBarIcon: ({focused,color,size})=>{
                    let iconName
                    if(route.name === "Feed Stories"){
                        iconName = focused?'book':'book-outline'
                    }else if(route.name === "Create Stories"){
                        iconName = focused?'create':'create-outline'
                    }
                    return(
                        <Ionicons name = {iconName} color = {'skyblue'} size = {30}/>
                    )
                }
            })}
            tabBarOptions = {{
                activeTintColor:'skyblue',
                inactiveTintColor: 'lightblue',
                labelStyle: {fontWeight: 'bold', fontSize: 12}
            }}>
                <Tab.Screen name = "Feed Stories" component = {FeedScreen} />
                <Tab.Screen name = "Create Stories" component = {CreateScreen} />
            </Tab.Navigator>
        )
    }
}
