import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, SafeAreaView, TouchableOpacity,
} from 'react-native';
import COLORS from '../../Constant/Colours';
import TopNavigationBar from '../../Common Components/TopNavigationBar';
import BackIcon from "react-native-vector-icons/Entypo";
import MenuIcon from "react-native-vector-icons/Entypo";

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

export default class InstaProfileScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'lightyellow'}}>
                <View style={{flex: 0.13}}>
                    <SafeAreaView style={{backgroundColor: COLORS.HEADER_COLOR, flex: 0}} />
                    <View style={{flex: 1, backgroundColor: COLORS.HEADER_COLOR, flexDirection: 'row',}}>
                        <View style={{flex: 0.22, justifyContent: 'center',}}>
                            <TouchableOpacity>
                                <BackIcon
                                    name="back-in-time"
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
                                <MenuIcon
                                    name="menu"
                                    size={25}
                                    color={COLORS.BLACK_COLOR}
                                    style={{marginHorizontal: hp('1.5%')}}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height: hp('0.1%'), backgroundColor: COLORS.BOTTOMLINE_COLOR}} />
                </View>

                <View style={{flex: 0.25, backgroundColor: 'pink', flexDirection: 'row'}}>
                    <View style={{height: wp(30), width: wp(30), flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{height: wp(23), width: wp(23), backgroundColor: 'gray', borderRadius: wp(23), marginTop: hp(1) }} />
                    </View>
                    <View style={{height: wp(30), width: wp(70), flexDirection: 'column'}}>
                        <View style={{height: wp(18), width: wp(70), flexDirection: 'row'}}>
                            <View style={{flex: 23.33, alignItems: 'center'}}>
                                <Text style={{marginTop: hp(1), fontSize: hp(2.3)}}>{'0'}</Text>
                                <Text style={{fontSize: hp(1.8)}}>{'posts'}</Text>
                            </View>
                            <View style={{flex: 23.33, alignItems: 'center'}} >
                                <Text style={{marginTop: hp(1), fontSize: hp(2.3)}}>{'1'}</Text>
                                <Text style={{fontSize: hp(1.8)}}>{'follower'}</Text>
                            </View>
                            <View style={{flex: 23.33, alignItems: 'center'}} >
                                <Text style={{marginTop: hp(1), fontSize: hp(2.3)}}>{'0'}</Text>
                                <Text style={{fontSize: hp(1.8)}}>{'following'}</Text>
                            </View>
                        </View>
                        <View style={{height: wp(12), width: wp(70), flexDirection: 'row'}} >
                            <View style={{flex: 35}}>
                                <TouchableOpacity style={{flex: 1, borderWidth: hp(0.2), borderColor: COLORS.BACKGROUND_COLOR, borderRadius: wp(2), margin: hp(0.5), justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: hp(2)}}>{'Promotions'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 35}} >
                                <TouchableOpacity style={{flex: 1,  borderWidth: hp(0.2), borderColor: COLORS.BACKGROUND_COLOR, borderRadius: wp(2), margin: hp(0.5), justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: hp(2)}}>{'Edit Profile'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
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
