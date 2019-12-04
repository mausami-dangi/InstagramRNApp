import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Image, Dimensions
} from 'react-native';
import COLORS from '../../Constant/Colours';
import BackIcon from "react-native-vector-icons/Entypo";
import MenuIcon from "react-native-vector-icons/Entypo";
import PlusIcon from "react-native-vector-icons/Entypo";
import DownIcon from "react-native-vector-icons/Entypo";
import GridIcon from "react-native-vector-icons/MaterialCommunityIcons";
import UserIcon from "react-native-vector-icons/Fontisto";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const profileDataArray = [
    {
        id: '001',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DrtxDJBuMiujO28D9p0HLXeifBm1tJWe0vvIzz-xO00pKruC&s',
    },
];

const storiesArray = [
    {
        id: '001',
        name: 'New',
        image: 'https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/plus-24-128.png',
    },
    {
        id: '002',
        name: '',
        image: '',
    },
    {
        id: '003',
        name: '',
        image: '',
    },
    {
        id: '004',
        name: '',
        image: '',
    },
];

const imagesDataArray = [
    'data:image/jpeg;base64,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',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTz1bLMmDvf1dYtVfQAFp7fF58iNz2JcTHp5yX3-SvlQ4SsRSdrw&s',
    'data:image/jpeg;base64,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',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHsJvq_8IPcUtMxZcof-sAoIh7WM11jLX5SibI2EUjwtvYMLCOvA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5o2aPj0kBDkJV9hFQIjdqHu9qoJ_XEm6oRR8FWj-_h7vLi_3Ttg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgd4d4SU-ipdrtUCoswp0AsrhIM-SOegmuo2f0tE0QHhtcIArBA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DrtxDJBuMiujO28D9p0HLXeifBm1tJWe0vvIzz-xO00pKruC&s',
    'data:image/jpeg;base64,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'
];

export default class InstaProfileScreen extends Component {

    constructor() {
        super()
        this.state  = {isVisible: false, selectedTab :0}
    }

    profileStoriesFlatList = ({item}) => {
        return(
            <View style={{height: hp(8), width: hp(8), alignItems: 'center', marginLeft: wp(2), marginTop: hp(1.5)}}>
                <View style={{height: hp(8), width: hp(8), borderRadius: hp(8), backgroundColor: COLORS.DARK_GRAY_COLOR, justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        style={{height: hp(2), width: hp(2)}}
                        source={{uri : item.image}} />
                </View>
                <Text style={{marginTop: hp(0.2)}}>{item.name}</Text>
            </View>
        );
    }

    renderMainFlatList = ({item}) => {
        return (
            <View>
                <View style={{height: hp(12), flexDirection: 'row'}}>
                    <View style={{height: hp(12), width: hp(12),justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{height: '80%', width: '80%', backgroundColor: COLORS.DARK_GRAY_COLOR, borderRadius: wp(80) }} >
                            <Image
                                style={{height: '100%', width: '100%', backgroundColor: COLORS.DARK_GRAY_COLOR, borderRadius: wp(80)}}
                                source={{uri: item.images}}/>

                        </View>
                        <View style={{height: '18%', width: '18%', backgroundColor: COLORS.BLUE_COLOR, borderRadius: wp(18), position: 'absolute', bottom: 15, right: 15, alignItems: 'center', justifyContent:  'center' }} >
                            <PlusIcon name={"plus"} color={COLORS.WHITE_COLOR} size={18} />
                        </View>
                    </View>
                    <View style={{height: hp(12), width: wp(88), alignItems: 'center', flexDirection: 'row'}}>
                        <View style={{width: '25%', alignItems: 'center'}} >
                            <Text style={{fontSize: hp(2.3)}}>{'0'}</Text>
                            <Text style={{fontSize: hp(1.8)}}>{'posts'}</Text>
                        </View>
                        <View style={{width: '25%', alignItems: 'center'}} >
                            <Text style={{fontSize: hp(2.3)}}>{'1'}</Text>
                            <Text style={{fontSize: hp(1.8)}}>{'follower'}</Text>
                        </View>
                        <View style={{width: '25%', alignItems: 'center'}} >
                            <Text style={{fontSize: hp(2.3)}}>{'0'}</Text>
                            <Text style={{fontSize: hp(1.8)}}>{'following'}</Text>
                        </View>
                    </View>
                </View>
                <View style={{height: hp(5), justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: hp(1.5), marginLeft: wp(2)}}>{'Emotional Princess'}</Text>
                    <Text style={{fontSize: hp(1.5),marginLeft: wp(2)}}>{'iOS Developer'}</Text>
                </View>
                <View style={{height: hp(5)}}>
                    <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: wp(2), marginHorizontal: wp(2), marginVertical: hp(0.5), borderWidth: wp(0.5), borderColor: COLORS.DARK_GRAY_COLOR}}>
                        <Text>{'Edit Profile'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{height: hp(2.5), flexDirection: 'row', alignItems: 'center', marginTop: hp(1)}}>
                    <Text style={{fontWeight: 'bold', marginLeft: wp(2)}}>{'Story Highlights'}</Text>
                    {
                        (this.state.isVisible) &&
                        <DownIcon
                            name="chevron-up"
                            size={20}
                            color={COLORS.BLACK_COLOR}
                            onPress={() => this.setState({isVisible: !this.state.isVisible})}
                            style={{position: 'absolute', right: wp(2)}}
                        />
                        ||
                        <DownIcon
                            name="chevron-down"
                            size={20}
                            color={COLORS.BLACK_COLOR}
                            onPress={() => this.setState({isVisible: !this.state.isVisible})}
                            style={{position: 'absolute', right: wp(2)}}
                        />
                    }
                </View>

                {
                    !(this.state.isVisible) &&
                    <View style={{height: hp(15)}}>
                        <Text style={{marginLeft: wp(2)}}>{'Keep your favourite stories on your profile'}</Text>
                        <FlatList
                            horizontal={true}
                            data={storiesArray}
                            renderItem={this.profileStoriesFlatList}/>
                    </View>
                }

                <View style={{height: hp(6), marginTop: hp(1)}}>
                    <View style={{borderTopWidth: hp(0.1), borderTopColor: COLORS.DARK_GRAY_COLOR}} />
                    <View style={{flex: 1, flexDirection:'row'}}>
                        <TouchableOpacity style={{
                            flex: 0.50,
                            borderBottomWidth: hp(0.1),
                            borderBottomColor: (this.state.selectedTab ===0) && COLORS.BLACK_COLOR || COLORS.DARK_GRAY_COLOR,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                                          onPress={() => this.setState({selectedTab: 0})}>
                            <GridIcon
                                name="grid"
                                size={20}

                                color={ (this.state.selectedTab === 0) && COLORS.BLACK_COLOR || COLORS.DARK_GRAY_COLOR }
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flex: 0.50,
                            borderBottomWidth: hp(0.1),
                            borderBottomColor: (this.state.selectedTab ===1) && COLORS.BLACK_COLOR || COLORS.DARK_GRAY_COLOR,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                                          onPress={() => this.setState({selectedTab: 1})}>
                            <UserIcon
                                name="person"
                                size={20}
                                color={ (this.state.selectedTab === 1) && COLORS.BLACK_COLOR || COLORS.DARK_GRAY_COLOR }
                            />
                        </TouchableOpacity>

                    </View>
                </View>

                {
                    (this.state.selectedTab === 0) &&
                    <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
                        {
                            imagesDataArray.map((data, index) => {
                                return(
                                    <View style={{height: SCREEN_WIDTH / 3, width: SCREEN_WIDTH / 3, borderColor: COLORS.WHITE_COLOR, borderWidth: hp(0.1)}}>
                                        <Image style={{height: '100%', width: '100%'}}
                                               source={{uri: data}}/>
                                    </View>
                                );
                            })
                        }
                    </View>
                    ||
                    <View style={{marginTop: hp(5), alignItems: 'center'}}>
                        <View style={{
                            height: hp(11),
                            width: hp(11),
                            borderRadius: hp(11),
                            borderWidth: hp(0.2),
                            borderColor: COLORS.BLACK_COLOR,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image
                                style={{height: hp(10), width: hp(10)}}
                                source={{uri: 'https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-72-128.png'}}
                            />
                        </View>
                        <View style={{marginTop: hp(5), alignItems: 'center'}}>
                            <Text style={{fontSize: hp(2.5)}}>{'Photos and Videos of You'}</Text>
                            <Text style={{marginTop: hp(2), fontSize: hp(1.5)}}>{"When peopple tag you in phototos or videos,"}</Text>
                            <Text style={{fontSize: hp(1.5)}}>{"they'll appear here."}</Text>
                        </View>
                    </View>
                }
            </View>

        );
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 0.13}}>
                    <SafeAreaView style={{backgroundColor: COLORS.HEADER_COLOR, flex: 0,}} />
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
                        <View style={{flex: 0.56, justifyContent: 'center', alignItems: 'center', }}>
                            <TouchableOpacity style={{flexDirection: 'row'}}>
                                <Text style={{fontSize: hp('2%')}}>{'Mausami Dangi'}</Text>
                                <DownIcon
                                    name="chevron-down"
                                    size={20}
                                    color={COLORS.BLACK_COLOR}
                                />
                            </TouchableOpacity>
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
                <FlatList
                    style={{flex: 0.87}}
                    data={profileDataArray}
                    renderItem={this.renderMainFlatList}>

                </FlatList>
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
    },
});
