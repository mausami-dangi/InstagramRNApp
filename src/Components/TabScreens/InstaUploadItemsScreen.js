import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import COLORS from '../../Constant/Colours';

export default class InstaUploadItemsScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: COLORS.BACKGROUND_COLOR}}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
