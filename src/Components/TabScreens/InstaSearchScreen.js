import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Image, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
import COLORS from '../../Constant/Colours';
import InstagramIcon from 'react-native-vector-icons/AntDesign'
import SearchIcon from 'react-native-vector-icons/AntDesign'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const statusDataArray = [
{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'IGTV',
    image: 'https://thumbs.dreamstime.com/z/lady-isolated-bright-background-happy-student-white-blouse-professional-lady-excited-girl-success-concept-smiling-96471759.jpg'
}, {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Shop',
    image: 'https://lh6.googleusercontent.com/-Tg5Xvb5MZws/AAAAAAAAAAI/AAAAAAAAE00/JA2nKK6zIwc/photo.jpg'
}, {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Decor',
    image: 'https://mcmscache.epapr.in/post_images/website_197/post_12824851/thumb.jpg'
}, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b5',
    name: 'TV & Movies',
    image: 'https://st1.bollywoodlife.com/wp-content/uploads/2018/07/Jhanvi-kapoor-bio-wiki.jpg'
}, {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f61',
    name: 'Nature',
    image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kareena-kapoor-khan-1151-26-07-2018-11-14-31.jpg'
}, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Travel',
    image: 'https://thumbs.dreamstime.com/z/lady-isolated-bright-background-happy-student-white-blouse-professional-lady-excited-girl-success-concept-smiling-96471759.jpg'
}, {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Food',
    image: 'https://lh6.googleusercontent.com/-Tg5Xvb5MZws/AAAAAAAAAAI/AAAAAAAAE00/JA2nKK6zIwc/photo.jpg'
}, {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Science & Tech',
    image: 'https://mcmscache.epapr.in/post_images/website_197/post_12824851/thumb.jpg'
}, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b5',
    name: 'Style',
    image: 'https://st1.bollywoodlife.com/wp-content/uploads/2018/07/Jhanvi-kapoor-bio-wiki.jpg'
}, {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f61',
    name: 'Music',
    image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kareena-kapoor-khan-1151-26-07-2018-11-14-31.jpg'
}, {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f61',
    name: 'Sports',
    image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kareena-kapoor-khan-1151-26-07-2018-11-14-31.jpg'
}, {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f61',
    name: 'Comics',
    image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kareena-kapoor-khan-1151-26-07-2018-11-14-31.jpg'
}, {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f61',
    name: 'DIY',
    image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kareena-kapoor-khan-1151-26-07-2018-11-14-31.jpg'
}, {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f61',
    name: 'Humor',
    image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kareena-kapoor-khan-1151-26-07-2018-11-14-31.jpg'
}];

const newsFeedArray = [
{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Kareena Kapoor Khan',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5o2aPj0kBDkJV9hFQIjdqHu9qoJ_XEm6oRR8FWj-_h7vLi_3Ttg&s'
}, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Shrdhdha Kapoor',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5g1QZEZj3K33PuSaVQJS5XKCFcgCPTUzYzcIqHoCX3oJqHINX0w&s'
}, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Dipika Padukon',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSawXwZitwVaWE08tMvELPGH8XvC3V9JiTg_CHZ3t4MKcEmWda_Zg&s'
}, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Alia Bhatt',
    image: 'https://i.pinimg.com/originals/2b/2f/cf/2b2fcfb02cf387d0b0ca6ce4ff788db8.jpg'
}];

export default class InstaHomeScreen extends Component {
    renderHeaderStatusFlatList = ({item}) => {
        return (
            <View style={styles.headerStatusContainerView}>
                <View style={styles.headerStatusView}>
                    <SearchIcon name="search1" size={15} color={COLORS.BLACK_COLOR} style={{marginLeft: hp(1)}} />
                    <Text style={{marginLeft: hp(1), marginRight: hp(1)}}>{item.name}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: COLORS.HEADER_COLOR}}>
                <View style={{flex: 0.14}}>
                    <SafeAreaView style={{backgroundColor: COLORS.HEADER_COLOR, flex: 0}} />
                    <View style={{flex: 8.5, flexDirection: 'row'}}>
                        <View style={{flex: 9, justifyContent: 'center'}}>
                            <View style={{
                                flex: 1,
                                backgroundColor: COLORS.GRAY_COLOR,
                                borderRadius: hp(1),
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginLeft: hp(1),
                                marginVertical: hp(0.8)
                            }}>
                                <SearchIcon name="search1" size={18} color={COLORS.BLACK_COLOR} style={{margin: hp(1)}} />
                                <TextInput
                                    style={{flex: 1, fontSize: hp(2)}}
                                    placeholder={'Search'}
                                    placeholderTextColor={COLORS.BLACK_COLOR}
                                />
                            </View>
                        </View>

                        <View style={{flex: 1.5, justifyContent: 'center', alignItems: 'center'}}>
                            <InstagramIcon name="instagram" size={30} color={COLORS.BLACK_COLOR} />
                        </View>

                    </View>
                </View>

                <View style={{flex: 0.07, backgroundColor: COLORS.HEADER_COLOR}}>
                    <FlatList horizontal={true}
                              showsHorizontalScrollIndicator={false}
                              data={statusDataArray}
                              renderItem={this.renderHeaderStatusFlatList} />
                </View>

                <View style={{flex: 0.79, backgroundColor: COLORS.BLACK_COLOR}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerStatusContainerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerStatusView: {
        height: hp('4.5%'),
        marginHorizontal: hp('0.5%'),
        borderWidth: hp('0.3%'),
        borderColor: COLORS.BORDER_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: hp(1)
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
    newsFeedHeaderContainer: {
        flex: 0.12,
        backgroundColor: COLORS.WHITE_COLOR,
        alignItems: 'center',
        flexDirection: 'row'
    },
    newsFeedCommentContainer: {
        flex: 0.09,
        alignItems: 'center',
        flexDirection: 'row'
    },
    commentTextStyle: {
        color: COLORS.BLACK_COLOR,
        fontSize: hp('1.8%'),
        marginLeft: hp('2%'),
        marginTop: hp('0.5%')
    },
    child: {
        height: hp(33),
        width: wp(100),
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: wp(2),
        textAlign: 'center'
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
});
