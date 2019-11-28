import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import COLORS from '../../Constant/Colours';
import TopNavigationBar from '../../Common Components/TopNavigationBar';

export default class InstaUploadItemsScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'lightyellow'}}>
                <TopNavigationBar />
                <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                    <Text style={{color: COLORS.BLACK_COLOR, fontSize:20}}>Upload</Text>
                </View>
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
