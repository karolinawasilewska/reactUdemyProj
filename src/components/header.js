//import libraries for making component
import React from 'react';
import { Text, View } from 'react-native';
//import console = require('console');

//make a component

const Header = (props) =>{

    const {textStyle, viewStyle}=styles;
    console.log('henlo!');
    return (
        <View style={viewStyle}>
            <Text style={ textStyle }>{props.headerText}</Text>
        </View>
    );
};

const styles ={
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
};

//make the component available to other parts of the app

export default Header;