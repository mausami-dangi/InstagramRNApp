import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Image, SafeAreaView, TouchableOpacity, TextInput, ScrollView} from 'react-native';
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

                <View style={{flex: 0.79, backgroundColor: COLORS.BLACK_COLOR}}>
                    <View style={{height: hp(30), flexDirection: 'row'}}>
                        <View style={{height: hp(15), width: hp(15), flexDirection: 'column'}}>
                            <View style={{height: hp(15), backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
                                <Image style={{height: hp(15), width: hp(15),  borderWidth: 2, borderColor: 'white'}}
                                source={{url: 'https://www.shaadidukaan.com/editor-img/image/mehandi/arabic-mehndi-designs/simple-arabic-mehndi/simple-arabic-mehndi7.jpg'}} />
                            </View>
                            <View style={{height: hp(15), backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center'}}>
                                <Image style={{height: hp(15), width: hp(15), borderWidth: 2, borderColor: 'white'}}
                                       source={{url: 'data:image/jpeg;base64,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'}} />
                            </View>
                        </View>
                        <View style={{height: hp(30), width: wp(85), backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{height: hp(30), width: wp(85), borderWidth: 2, borderColor: 'white'}}
                                   source={{url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deepika-padukone-attends-the-2019-met-gala-celebrating-camp-news-photo-1147451265-1557255686.jpg'}} />
                        </View>
                    </View>

                    <View style={{height: wp(33.33), backgroundColor: 'red', flexDirection: 'row'}}>
                        <View style={{height: wp(33.33), width: wp(33.33), backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{height: wp(33.33), width: wp(33.33), borderWidth: 2, borderColor: 'white'}}
                                   source={{url: 'https://i.pinimg.com/originals/8b/46/13/8b4613c5226c741dc6634d33983bfe66.jpg'}} />
                        </View>
                        <View style={{height: wp(33.33), width: wp(33.33), backgroundColor: 'blue'}}>
                            <Image style={{height: wp(33.33), width: wp(33.33), borderWidth: 2, borderColor: 'white'}}
                                   source={{url: 'https://i.pinimg.com/originals/c3/15/0c/c3150c5f2dfe27dbe3eadbebd59a64d2.jpg'}} />
                        </View>
                        <View style={{height: wp(33.33), width: wp(33.33), backgroundColor: 'blue'}}>
                            <Image style={{height: wp(33.33), width: wp(33.33), borderWidth: 2, borderColor: 'white'}}
                                   source={{url: 'https://d2z4fd79oscvvx.cloudfront.net/0026585_pink_dress_barbie_cake_385.jpeg'}} />
                        </View>
                    </View>

                    <View style={{height: wp(33.33), backgroundColor: 'red', flexDirection: 'row'}}>
                        <View style={{height: wp(33.33), width: wp(33.33), backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{height: wp(33.33), width: wp(33.33), borderWidth: 2, borderColor: 'white'}}
                                   source={{url: 'http://s3-ap-southeast-1.amazonaws.com/seeoutlook/wp-content/uploads/2018/03/16163233/cartoon-015.jpg'}} />
                        </View>
                        <View style={{height: wp(33.33), width: wp(33.33), backgroundColor: 'blue'}}>
                            <Image style={{height: wp(33.33), width: wp(33.33), borderWidth: 2, borderColor: 'white'}}
                                   source={{url: 'data:image/jpeg;base64,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'}} />
                        </View>
                        <View style={{height: wp(33.33), width: wp(33.33), backgroundColor: 'blue'}}>
                            <Image style={{height: wp(33.33), width: wp(33.33), borderWidth: 2, borderColor: 'white'}}
                                   source={{url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPvczOv9NRlwRETQUUT_yC4pMX9cnWs7eRLgFFjklplDmDCklew&s'}} />
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
