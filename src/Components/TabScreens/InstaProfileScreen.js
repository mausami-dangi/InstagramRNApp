import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import COLORS from '../../Constant/Colours';

export default class InstaProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{color: COLORS.WHITE_COLOR, fontSize:25}}>Profile</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
