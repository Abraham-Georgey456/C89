import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image } from "react-native";
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default class CustomizeSideBarMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            light_theme: true,
        }
    }
    componentDidMount(){
        let theme
        firebase
            .database()
            .ref("/users/" + firebase.auth().currentUser.uid)
            .on("value", function(snapshot){
                theme = snapshot.val().current_theme
            })
            this.setState({ light_theme: theme == "light" ? true : false });
    }
 render(){
    return(
        <View>
            <Image source={require ("../assets/logo.png")} style = {styles.sideMenuProfileIcon}></Image>
            <DrawerContentScrollView {...this.props}>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
        </View>
    )
 }
}
const styles = StyleSheet.create({
     sideMenuProfileIcon: { 
       width: RFValue(140),
       height: RFValue(140),
       marginTop: RFValue(60),
       borderRadius: RFValue(70),
       alignSelf: "center",
        resizeMode: "contain"
     },
});