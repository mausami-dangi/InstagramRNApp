import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import {
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CameraIcon from 'react-native-vector-icons/Feather';
import SendIcon from 'react-native-vector-icons/Feather';
import COLORS from '../Constant/Colours';

export default class TopNavigationBar extends Component {
    render() {
        return (
            <View style={{flex: 0.13}}>
                <SafeAreaView style={{backgroundColor: COLORS.HEADER_COLOR, flex: 0}} />
                    <View style={{flex: 1, backgroundColor: COLORS.HEADER_COLOR, flexDirection: 'row',}}>
                        <View style={{flex: 0.22, justifyContent: 'center',}}>
                            <TouchableOpacity>
                                <CameraIcon
                                    name="camera"
                                    size={25}
                                    color={COLORS.BLACK_COLOR}
                                    style={{marginLeft: hp('1.5%')}}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 0.56, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: hp('3.5%'), fontFamily: 'Billabong'}}>{'Instagram'}</Text>
                        </View>
                        <View style={{flex: 0.22, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <TouchableOpacity>
                                <SendIcon
                                    name="send"
                                    size={25}
                                    color={COLORS.BLACK_COLOR}
                                    style={{marginHorizontal: hp('1.5%')}}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height: hp('0.1%'), backgroundColor: COLORS.BOTTOMLINE_COLOR}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: hp('10%'),
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
});
