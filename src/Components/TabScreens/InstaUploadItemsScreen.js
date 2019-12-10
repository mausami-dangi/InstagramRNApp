import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView, TouchableOpacity
} from 'react-native';
import COLORS from '../../Constant/Colours';
import {RNCamera} from 'react-native-camera';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default class InstaUploadItemsScreen extends Component {

    constructor (){
        super()
        this.state = {selectedTab: 0}
    }

    render() {
        const {segmentContainerView, segmentView, segmentText} = styles;
        return (
            <SafeAreaView style={{flex: 1}}>
                <SafeAreaView style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        {
                            (this.state.selectedTab === 0) &&
                            <View style={{height: '95%', width: '100%', backgroundColor: 'blue'}}>

                            </View> ||
                            <View style={{flex: 1, backgroundColor: 'green'}}>

                            </View>
                        }

                        <View style={segmentContainerView}>
                            <TouchableOpacity style={[
                                segmentView,
                                {borderBottomWidth: (this.state.selectedTab === 0) && hp(0.2) || hp(0)}]}
                                              onPress={() => this.setState({selectedTab: 0})}>
                                <Text style={[
                                    segmentText,
                                    {fontWeight: (this.state.selectedTab === 0) && 'bold' || ''},
                                ]}>{'GALLERY'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[
                                segmentView,
                                {borderBottomWidth: (this.state.selectedTab === 1) && hp(0.2) || hp(0)}]}
                                              onPress={() => this.setState({selectedTab: 1})}>
                                <Text style={[
                                    segmentText,
                                    {fontWeight: (this.state.selectedTab === 1) && 'bold' || ''},
                                ]}>{'PHOTO'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    segmentContainerView:{
        position: 'absolute',
        bottom: 0,
        height: '5%',
        width: '100%',
        flexDirection: 'row'
    },
    segmentView: {
        backgroundColor: COLORS.HEADER_COLOR,
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    segmentText: {
        color: COLORS.BLACK_COLOR,
        fontSize: hp(1.5)
    }
});
