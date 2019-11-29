import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image, TouchableOpacity,
} from 'react-native';
import COLORS from '../../Constant/Colours';
import TopNavigationBar from '../../Common Components/TopNavigationBar'
import DotIcon from 'react-native-vector-icons/Entypo'
import HeartIcon from 'react-native-vector-icons/AntDesign'
import CommentIcon from 'react-native-vector-icons/Fontisto'
import SendIcon from 'react-native-vector-icons/Feather';


import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const statusDataArray = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Mausami',
        image: 'https://thumbs.dreamstime.com/z/lady-isolated-bright-background-happy-student-white-blouse-professional-lady-excited-girl-success-concept-smiling-96471759.jpg'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Kalgi',
        image: 'https://lh6.googleusercontent.com/-Tg5Xvb5MZws/AAAAAAAAAAI/AAAAAAAAE00/JA2nKK6zIwc/photo.jpg'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Priya',
        image: 'https://mcmscache.epapr.in/post_images/website_197/post_12824851/thumb.jpg'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b5',
        name: 'Janvi',
        image: 'https://st1.bollywoodlife.com/wp-content/uploads/2018/07/Jhanvi-kapoor-bio-wiki.jpg'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f61',
        name: 'Suhagi',
        image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kareena-kapoor-khan-1151-26-07-2018-11-14-31.jpg'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Mausami',
        image: 'https://thumbs.dreamstime.com/z/lady-isolated-bright-background-happy-student-white-blouse-professional-lady-excited-girl-success-concept-smiling-96471759.jpg'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Kalgi',
        image: 'https://lh6.googleusercontent.com/-Tg5Xvb5MZws/AAAAAAAAAAI/AAAAAAAAE00/JA2nKK6zIwc/photo.jpg'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Priya',
        image: 'https://mcmscache.epapr.in/post_images/website_197/post_12824851/thumb.jpg'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b5',
        name: 'Janvi',
        image: 'https://st1.bollywoodlife.com/wp-content/uploads/2018/07/Jhanvi-kapoor-bio-wiki.jpg'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f61',
        name: 'Suhagi',
        image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kareena-kapoor-khan-1151-26-07-2018-11-14-31.jpg'
    },

];

const newsFeedArray = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Mausami',
        image: 'https://thumbs.dreamstime.com/z/lady-isolated-bright-background-happy-student-white-blouse-professional-lady-excited-girl-success-concept-smiling-96471759.jpg'
    },

];

export default class InstaHomeScreen extends Component {
    renderHeaderStatusFlatList = ({item}) => {
        return (
            <View style={styles.headerStatusContainerView}>
                <View style={styles.headerStatusView}>
                    <Image
                        style={styles.profileImageView}
                        source={{uri: item.image}}
                    />
                </View>
                <Text style={styles.headerStatusText}>{item.name}</Text>
            </View>
        );
    }

    renderNewsFeedFlatList = ({item}) => {
        return (

                <View style={{height: hp('50%'), backgroundColor: 'red'}}>
                    <View style={{flex: 0.12, backgroundColor: COLORS.BLACK_COLOR, alignItems: 'center', flexDirection: 'row'}}>
                        <Image style={styles.profileIcon}
                                source={{uri: item.image}}/>
                        <Text style={{color: COLORS.WHITE_COLOR, marginHorizontal: hp('1.5%')}}>{item.name}</Text>
                        <DotIcon name="dots-three-horizontal" color={COLORS.WHITE_COLOR} size={hp('2%')} style={{position: 'absolute', right: hp('1%')}} />
                    </View>
                    <View style={{flex: 0.65, backgroundColor: 'pink'}}>
                        <Image style={{flex: 1}}
                               source={{uri: item.image}}/>
                    </View>
                    <View style={{flex: 0.09, backgroundColor: 'blue', alignItems: 'center', flexDirection: 'row'}}>
                        <HeartIcon name="hearto" color={COLORS.WHITE_COLOR} size={hp('2.5%')} style={{marginLeft: hp('1.5%')}} />
                        <CommentIcon name="comment" color={COLORS.WHITE_COLOR} size={hp('2.5%')} style={{marginLeft: hp('2%')}}/>
                        <SendIcon name="send" color={COLORS.WHITE_COLOR} size={hp('2.5%')} style={{marginLeft: hp('2%')}}/>

                        <DotIcon name="dots-three-horizontal" color={COLORS.WHITE_COLOR} size={hp('2%')} style={{position: 'absolute', right: hp('1%')}} />
                    </View>

                    <View style={{flex: 0.14, backgroundColor: 'green'}}/>
                </View>

        );
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: COLORS.WHITE_COLOR}}>
                <TopNavigationBar />
                <View style={{flex: 0.12, backgroundColor: COLORS.HEADER_COLOR}}>
                    <FlatList horizontal={true}
                              data={statusDataArray}
                              renderItem={this.renderHeaderStatusFlatList}
                    />
                </View>
                <View style={{flex: 0.75, backgroundColor: COLORS.BACKGROUND_COLOR}}>
                    <FlatList
                              data={newsFeedArray}
                              renderItem={this.renderNewsFeedFlatList}
                    />
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
    },
    headerStatusContainerView: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: hp('0.1%'),
        alignItems: 'center',
    },
    headerStatusView: {
        height: hp('6.5%'),
        width: hp('6.5%'),
        borderRadius: hp('6.5%'),
        marginHorizontal: hp('0.5%'),
        borderWidth: hp('0.3%'),
        borderColor: COLORS.BORDER_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileIcon: {
        height: hp('4.5%'),
        width: hp('4.5%'),
        borderRadius: hp('4.5%'),
        marginLeft: hp('1%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerStatusText: {
        fontSize: hp('1.5%'),
        marginVertical: hp('0.3%')
    },
    profileImageView: {
        height: hp('5.5%'),
        width: hp('5.5%'),
        borderRadius: hp('5.5%'),
        borderWidth: hp('0.3%'),
        borderColor: COLORS.HEADER_COLOR,
        margin: hp('1%')

    },
});
