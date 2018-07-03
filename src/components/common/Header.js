import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const { headerStyle } = styles;
    
    return (
        <View style={headerStyle}>
            <Text>{props.title}</Text>
        </View>
    );
}

const styles = {
    headerStyle: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 5,
        backgroundColor: '#f00'
    }
}

export { Header };