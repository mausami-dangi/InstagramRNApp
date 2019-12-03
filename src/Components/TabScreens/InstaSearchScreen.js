import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Image, SafeAreaView, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import COLORS from '../../Constant/Colours';
import InstagramIcon from 'react-native-vector-icons/AntDesign'
import SearchIcon from 'react-native-vector-icons/AntDesign'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const statusDataArray = [
    {
        id: '001',
        name: 'IGTV',
        image: 'https://thumbs.dreamstime.com/z/lady-isolated-bright-background-happy-student-white-blouse-professional-lady-excited-girl-success-concept-smiling-96471759.jpg'
    }, {
        id: '002',
        name: 'Shop',
        image: 'https://lh6.googleusercontent.com/-Tg5Xvb5MZws/AAAAAAAAAAI/AAAAAAAAE00/JA2nKK6zIwc/photo.jpg'
    }, {
        id: '003',
        name: 'Decor',
        image: 'https://mcmscache.epapr.in/post_images/website_197/post_12824851/thumb.jpg'
    }, {
        id: '004',
        name: 'TV & Movies',
        image: 'https://st1.bollywoodlife.com/wp-content/uploads/2018/07/Jhanvi-kapoor-bio-wiki.jpg'
    }, {
        id: '005',
        name: 'Nature',
        image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kareena-kapoor-khan-1151-26-07-2018-11-14-31.jpg'
    }, {
        id: '006',
        name: 'Travel',
        image: 'https://thumbs.dreamstime.com/z/lady-isolated-bright-background-happy-student-white-blouse-professional-lady-excited-girl-success-concept-smiling-96471759.jpg'
    }, {
        id: '007',
        name: 'Food',
        image: 'https://lh6.googleusercontent.com/-Tg5Xvb5MZws/AAAAAAAAAAI/AAAAAAAAE00/JA2nKK6zIwc/photo.jpg'
    }, {
        id: '008',
        name: 'Science & Tech',
        image: 'https://mcmscache.epapr.in/post_images/website_197/post_12824851/thumb.jpg'
    }, {
        id: '009',
        name: 'Style',
        image: 'https://st1.bollywoodlife.com/wp-content/uploads/2018/07/Jhanvi-kapoor-bio-wiki.jpg'
    }, {
        id: '010',
        name: 'Music',
        image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kareena-kapoor-khan-1151-26-07-2018-11-14-31.jpg'
    }, {
        id: '011',
        name: 'Sports',
        image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kareena-kapoor-khan-1151-26-07-2018-11-14-31.jpg'
    }, {
        id: '012',
        name: 'Comics',
        image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kareena-kapoor-khan-1151-26-07-2018-11-14-31.jpg'
    }, {
        id: '013',
        name: 'DIY',
        image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kareena-kapoor-khan-1151-26-07-2018-11-14-31.jpg'
    }, {
        id: '014',
        name: 'Humor',
        image: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kareena-kapoor-khan-1151-26-07-2018-11-14-31.jpg'
    }
];

const newsDataArray = [
    {
        id: '001',
    }, {
        id: '002',
    }, {
        id: '003',
    }
];

export default class InstaHomeScreen extends Component {

    renderHeaderComponent = () => {
        return(
            <View style={{flex: 0.07, backgroundColor: COLORS.HEADER_COLOR, marginVertical: hp(0.8)}}>
                <FlatList horizontal={true}
                          showsHorizontalScrollIndicator={false}
                          data={statusDataArray}
                          renderItem={this.renderHeaderStatusFlatList} />
            </View>
        );
    }

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

    renderNewsData = () => {
        return (
            <View style={{flex: 1}}>
                <View style={{height: wp(66.66), flexDirection: 'row'}}>
                    <View style={[styles.commonFlexView, {flexDirection: 'column'}]}>
                        <View style={styles.commonFlexView}>
                            <Image style={styles.commonImageViewStyle}
                                   source={{url: 'https://www.shaadidukaan.com/editor-img/image/mehandi/arabic-mehndi-designs/simple-arabic-mehndi/simple-arabic-mehndi7.jpg'}} />
                        </View>
                        <View style={styles.commonFlexView}>
                            <Image style={styles.commonImageViewStyle}
                                   source={{url: 'data:image/jpeg;base64,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'}} />
                        </View>
                    </View>
                    <View style={styles.commonFlexView}>
                        <Image style={{height: wp(66.66), width: wp(66.66), borderWidth: 1, borderColor: 'white'}}
                               source={{url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deepika-padukone-attends-the-2019-met-gala-celebrating-camp-news-photo-1147451265-1557255686.jpg'}} />
                    </View>
                </View>

                <View style={{height: wp(33.33), backgroundColor: 'red', flexDirection: 'row'}}>
                    <View style={styles.commonFlexView}>
                        <Image style={styles.commonImageViewStyle}
                               source={{url: 'https://i.pinimg.com/originals/8b/46/13/8b4613c5226c741dc6634d33983bfe66.jpg'}} />
                    </View>
                    <View style={styles.commonFlexView}>
                        <Image style={styles.commonImageViewStyle}
                               source={{url: 'https://i.pinimg.com/originals/c3/15/0c/c3150c5f2dfe27dbe3eadbebd59a64d2.jpg'}} />
                    </View>
                    <View style={styles.commonFlexView}>
                        <Image style={styles.commonImageViewStyle}
                               source={{url: 'https://d2z4fd79oscvvx.cloudfront.net/0026585_pink_dress_barbie_cake_385.jpeg'}} />
                    </View>
                </View>

                <View style={{height: wp(33.33), backgroundColor: 'red', flexDirection: 'row'}}>
                    <View style={styles.commonFlexView}>
                        <Image style={styles.commonImageViewStyle}
                               source={{url: 'data:image/jpeg;base64,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'}} />
                    </View>
                    <View style={styles.commonFlexView}>
                        <Image style={styles.commonImageViewStyle}
                               source={{url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXGBkWGBgYGRoYGhcYGBcWFxoWGBgYHiggGh0lHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKYBLwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EADoQAAEDAgQEAwcEAgEDBQAAAAEAAhEDIQQSMUEFUWFxIoGRBhMyobHB8ELR4fEUUiMVgpIHFmJyov/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACcRAAICAgICAQQCAwAAAAAAAAABAhEDIRIxQVEiBBMyYfDxFIHB/9oADAMBAAIRAxEAPwDucoIkXBuD05qBYqT2U4yxzTQf4SyzC79QJMgnSQSB27LpXUVyNUUKBq3kRixZlUjIBY1pOyM1iLTQAJlM8kQsRQFnu0hgGMRC0o4ZCYFCQkMUDVstRXU+S2xiAF8iwU05lWe7QAqWKQamW0gpZEAKBnRTFNMhTa1ACoYVv3aayKORFDFjTWBqa9ys9ynQC7aSIxiIKZRaVEoSAynTUyFMBaKsQMhRIRColDAEQtEIhCiQpAEWqBCOQoEJABIUCEYhRIQMEQouCKQokJAI1qaSq0lbVGJKs1AHlLKvizTDuYteIldBwv2lq023PvZMua4ucQLDwuOm65l1MgkEXH9LYYu5wTOZOj1nBY+jV+B4JES2biRMR6jyKa92vJsI5zSC3VpB1i45dV6j7O4w16Ic742+FxjUgai265pw4msXYUsR6bQiupLQprMo3kCNTphDDUVhQMwtC2RyU2tRfdoAAymilikGrWTogCJZC17sozW9FsoABCyEUtWFqABZVINPRaIW5QBshY1i1KKwJoDYatsC2pBiqgNwtwtwtKhGiolSKS4tj20KTqjrxoJiTyn5+SQxkqt4xxanh25nkSdGzBIkAkc4BlVnFfa+kxsUxnLmnQxlJAi8X1PouCxoe+C97nEAASZsAAB6AIWxP2WtPjDKlT3zq2IpvvGUhzWg/pDSIjT0XXcP47SeABXaXTJzsyS3cC8A9fkvN8HhS42BK7PhXs9TogVcSY3FPc9/2UySi+yrs68Cbi4US1I4fjAdRqVQwBrCA0c9h9QlsRxsimK7W5mRle3em/Y9j+yVoKLUhQIXHYP2veHf8kOZoYEOkfrAtry+i6zCYynVbmpuDm6SNjrBGxuhqhEiFEhFIUCEhgXpGuFYvaln0kgPMcU+k8y7wEiSRds3MtIFp/dbp8PDmucxwtoHQS60gADnB+SXwOF9+8smCAQwnQRJAPKefNDoudTcWuEObpuAWmYtq0ldFNfGL2jD9sLTw0OhxAPWb72/ddX7JvLKzbnI9zm2u2SBA7zF1TcZawFh+ElgkHnF4JS2ExZBHuxBDpP/AMo0EbDVS25xTGtM9ZcxYGLk8J7TH3gLn54GV40iDqOZufwLrsHWbVYHsMg/I8j1Wa2aGsi2GI/uisDEUAMBTAKkGFJ1+MUWEtc+SBJjxc7W3t8wigsbAW0lR45QcYDjP/1dzAnTS6m3ilE1BSD5cfSbGJ53RQWOgqULYasTGaLVAhTK0gARatFqKokbpAQAUsyWdxGiCAajL6eIR66bLQ4lR8X/ACN8IJMHYGExWOtU2lc5/wC5R44bt4JN83J42E8uSr8R7RViWuBDIbDmwCC697+UKkLkjtZWlxQ9r6gInKQIBtrzM81rGe2rgHFoaJjKCLjSSSEByR1uPx1Oi0vqODR8/IBea8a42cQ+XEho+Fs2G3qqjiXEXVCXOMk/dJtJKtY/LJch6Z7J/huBqVSGtb+w6kqHD+H5gH1DkYNzqegCs6vFYb7uiMjdzue5WU5PqJol7LPDmjgx4YqVt3bN7KsxeMdVMuJKrK1bmmMI6bBTwrb7C70dJW8GBY3eo+fIf0FVcNx/u6hDhNN4yvadCDv5K19pDlbRp/6snzMfsudqPkfJTFWjVAPaPhRov8JljrsPMfuFH2e49/juJyyCIc0T4o/Vc2drpa/RW2DxAq0zh6m12O5Fc1j8MWOIIutcbv4y7M5ryj0L2b48MU10tDHt1bMyP9h9FbuC8j4TxN1CpnaToQRJEyCPvK7ngntVTeym2o4B5zNJJ2aAQ5xOkg/Ipzg0yFI6EhBe5MEIbmhZlnm1fFMHhAax7coOSaecETBLTDtfyUzgHURJbUsPFDgDltcTAPOCeUSleFcP941uaoyq4SMtWmCCQJyNc4yBpaOZCaxdJ9PM9tGm1gaSQxwa6mwAE6j1g8tFwPIk+Ke/57Ip9nK+2NR5xBEnIQ11O8ty7ZYmddeq1RxeSmJETfW/f6rr+JOo4qk0wASyGkj4i2Ybm1tMAwTfrekrMxOGZmcGOowGFwGZtokPaQIO0keei7MP1KcVFra1RMkV+HxMmxgHmBPeJPX0C6nB8YdSaXB5lkOIabO2mBsfuhcMOGq5WljGwbPAAkOBiXAAE5gBfaZ1MzxvDKuHcd6REGIEtMAsM6a7d0/8iMpcXp/vyFa0WT+NVXOzio69xBsJ6dFeUfachrs7czr5SI+cLl6dFgaPd5izrqJvFkVlOFa3tBbDOx1Vwc0vdDjmIkkTJO+07ILaXRGbTR2Uk7EAZRRqbAIIFwZ7orWIgASYDB4liHEw8jWIAgT+WVpw7jPwtqggwAXay694Hkbc1z7qzRugV+It5yhXY7O9p1WuAIcLieRjsbhC4hiW0mF79B8zyHVcBW4g+BcgCCOn7C+iFiceanxucTrc9NVQ+R1GK9q2jLkYT/sCdp28r3VbW9oqlQOaYaCCPDrcgyT2t6qgqYwCNEGtXIiD9k6J5MsHBreSh78RIVHiMbsTftoUrTxbuYA5q1jdE2XNfGEcwlamP1gyk3VyZBIKymy0iPrKpRXkArqztTHRLvdO6P7suE/RZQoSZNhvNlSaQUCp0SYAEz+eSsqNBtPxOhzhtsO/NCdXaLMED5lHxOBe1ge5jg3YnqodyLWixwXDKmKa6pmhrfwwFWVqsfpDdBlBmPPdFoYuqGFjXlrDqBukww33Vco8ONLT7NJTi1SNF5Oqs+D0s1Rg6j6qtYydPmr/ANnKZ98CYtJWWR1Fih2Oe02JzVnDZoDVRkiPVG4tWzOeZuXE+Wiq21dSpxw+Jo3sKapEEGCE5XcKzAf1C3foqmq7X1WqOJy/Qq3DyuyXIXr04MboNa1hv9VZYmjnGYETv+/7qvqWHiG/zWsXZjLR2fsLx1gb/jvnNJLTJIM7RsegC6uriqe1Rn/kLd+S8bLyDmbbtz/dHbj6hIc5zsw0O+kanpZRLFbtAp0UfCOJOY4ZLRDiS4SACDYZhmNu66zh/tcxtQZTnlpMNDh7uCJABmxnyI1gwvMMx5iDr26xr2U21SCXMcZm4Igz3WWX6SGT8gUmj0ahjKVi0MEH4WhvjEAZqjw6x8caRraVb8FxThUANQNa8ZQwN0NhYzdpiSDO2gsvNxiXtHja4B0GzbSDoDGy6LgvEabSyHN8RJAqQJtygDcCM15XLm+majrYJ0zseNcDphjKlI+6uQ7IWta4XgwDAuCP0zKu+DUXBhZUk08ty8+JogjKR/rEGeiqeFcWGb3NZsB/hBIdlDpbYtLjEeAiI+LsVZYrivucrHU4a9pbJcHC1oaRcy06ECLdV5s3N1BmyrsUbXotNWl8QN2RoCDGvMXkFLU6zbgOBgweh1+6Zxns1Te1rmuc15c0h93ANAdYxYibbai/PknVTTqVGTOY6wQQQTq06G5svS+lnHInxZnO0dK3FtG4UHcTb6Lma1ZzSA42IkEX8lDOR/K7ljRnZ0lTigiZVc/iTjeVV/5QjVRpVcxI067eapY0gssG4lxMao76wZEmTy/Oqrqb8vwnMdzyBUX41omwkb/mqT30IddiXG5kTcfyq12NMkFAOMJuYgg/hSb2kEHWbrSEfYFxh8ZmsTaI0krPeNj4ifSP5VbSbMXglP0yAIA80pJIBWpXgyRfUWkX6Jml/wApjKJF7QPoErin3iPlClQcR8IMOtEHXpz3TfViMrMIHPbn8kTCPmW20sTbyHVFpcNfu4ZTrB+xifVP0cPQMtb4XcyTc9QdAollSXsaJYJwa0DMD0n6lKYmuS4iIgxCbdgIEgtzb5SMvKLxB6q59neGU35jVuQfhMW894CxlkjC5vZpGLk6RQ8LcBVY51wHAkdAV0PtX7SNrMFKmLWzH6ABVPGaAbUPu4yxYjpqqek6T9VtB8vkhN8fiW7IAhRqiBNr27IdGuTcXWyc5HIa/sooCQbG6vOEVAA47hqpGmxAB1VhhjFN3MrPIrReN0yvxlTxKvqv1TeK+yRyzuFvDoGzYM36flkBz1ImN1jjK0E2So1SLfnZRrX7FRgC11PMDt3/AHS/ZAuALh224UZbO9tlLE0wNClW3M/UquyWcViJa4j8+SLhcQ5rplvcrfEKJaQTLpmLzpt9/NBykbH7JraGX2HxLHsLBzzeKplBcAbkEFu5vmFuWqhWY2IDRGsCYmCDlcZjsZ36QnhMJnh2ZrB6XFgY2HayypRDH5cxAPY/TT9lmoq+wo6zhHtE2kxoMEAR4gA8CIGV4aQbRryPK9zV9pc9EUwKhOZkPIlwu4+AgCCZGtrmNgOM4LjC2Q6mwtdAJflMwZFnaHW8SQbK/pYum8/8YFOdAD4SRBuJs69p9OXHlwQ5XxK5ao9D4PxJxymbGWlhM3Gpvz8NwHd1Rf8AqNTa19OqCM7xcXB8Oj7yYOn/AGrluF8dLHEvp+8tESW5b3BAPNX2KxVOrTaalLOJNyTLTItIdew3nuuTHgeDMp+BuVqjn2YrMIcZi4PLom6Dw8TMnr9ijYvCUW5XBocw67FvKdAe/RK4agacjMHMIJmwggxcEmNea9NZIyWjM01rGzee+g7c1lTEgWEDnMpfFAyMxg+ot1Sp0kk9ANPotEr2xD4e1viJtfXTupVarY8AEzppPXpoqSrUcdZU6Of9MkfRX9vzYDdeoL6f0osrSIdqdChMaTzJPrKboYYkeM5QDFxfqBdN0kBmEIn9vmm3PMy0QOlvom8FhWgeG07k6+X7Kfu4OZxB5AEEAcysXkTYyvDntBkWOp5+adoUqTxcZTbffoLpTF18x7WRaOIgRlAPoY7mUSTasArsYWWFryYMqLcQ158UxsRaDI8vkhuw+b9Qtzm3rqtf4roJG2wk237BCjH/AGFFrSxLGgamNybnyGqbFVtQASWOnawItbpoueoVTpt+XRaFbITLtdPw2USxeux2W9XBhwgVBvFp1VS7CvZ8WnMXB8wmXYwWkjNoIIN9pBE/nZOYaoHtyvBjXQ7KVKUFvoRV08QeqO02ibpkUqbiWgAHZwnlvqgHCvFsp9D9VpzT/QyVKpe5iFZGsBTiOXzKrXUi2Zt0/NVOrUgaqZJMuL0BqPF9Uo54W6tU6kzP5sgPcT2/LLaKJs2XgGIQHYjbRaICG9t1pSFYQuWhXIQq9hZAe/QISFY6IJ3IKx9OR4Rp6ImDxWVuWLbkc0LEPcXRuot2BVtxLMwe5niaQR8LSNJ0GUyLXadj3Jxh1B/ipUwzNDnMuWzaQzKNJzWPkYTnFuDsqeOmXNIJY5opgiLkHwEQLm5nQKjqYR7TYhzLw6Zkfmy5YOMtpjst+F0KRYWPpwSJbUkggkCIvlA6Rz0VXx6iGVGZvEA3mb63kHc8p0HNSpVWtZ4tCYncRtqnqr2PpTDaoaQRIBcBqYuqVqVgU9HioLMrmggRlB2HQm/1Vjw7iDicwgC2lyBMXzTI727KjbgQ4EtnU2Ed4AmbJnCYCRIJBG2k8xfQ38+S1lGIi640BmzjR22UtNubhY8tdo2WsHxcgCnHgncyA7nzjTsgH3j2Zcri1tyACYO5IAiP5StGQAWxGvWDYi5UKK40wOs4NXzFzZBa4GxFragx53+0FLCq4te1gkti06AEh0SAdvn5JHAVSfFLZb4i0yDIEEg+c2TOEc2hVIzC5/VrfUyLEHmPks+NNsQpUxMnTqNtboL3kwTYfmyc4jwhwAcwEibgGRBvIOsfuqh1afyV1QaatDGmGTfRWDC6wax06gBroPnuleH0p8Tgcg1OnlMclcM4vlaQAMtoEET0iZKnJJ9JALtwmTx1LEzDf1DkTITAw7nwXuyxch3Kbb8pU6WKFUHMDpeNAO5tPzR206U3OUWvrNtzr6rJzfnsaRJ1do7DkULFtJEiB2Jk8rfst+5pHwipfr9QY890KnSNM3uD8L2mf6KUa8DFDWcYEk7R0T73B0DLA5gW6bwElVfL5kxtBEkcpCdZXBEOcRYdR8/stZeBDWFwhyZmskTBdrfoOSUxFSHbg+UBWNPEEtApABo1JdcdwO+y1i6VN4M/ERGcCb+vldQstPaKb1SKvFvEZovOs/UBBpYdtQahpnrHoTPK6lVpa3BNt9+p/NEJ0tMG3LkfNarrTINhkWcIItZXPD6xgDNp+aQqgeJ07fdPUBfw+Hnf6E/RRkVrYDPEQ5rs2UgWvrECItp5pnD8QEAG/b7lbw7otnAdHqOpUK2Edd+WDuQQLAD18lhaa4yGiw8LwA6+hidJSPEOHj9J8z35oAxEHb6/VaFeJIcAOR/tCjKL0yr0Vv8AjvEzFtd/olwPEJEDqrXEtEhwNjcxz7H1hVWOcc1zP5rC6YS5EkqlYEQBbba6Rr+H82RjUH59kvVdNwtIqibBA2W6LCTZDe7qEzhmw28mbwJ7KpOkAcuiw9Jj5wp+9Y4RpyP780tVYQIuZ2j+UqH7CQft3KyqwLThHE82UOuL3nK5vQxOYd+WqV4xQqNJdShzCYIbZsSZDoMAzHrcJjhlYMykxeRcGBrc2IHdV+Oe/DVHNfmc2o3OwAtM5pls5YsZ22HdcMfz1/ZbKrBhwlpgbZZB6zyJ3T2IoO92PdOENd0jMRAvsbnvCSpO8ZgODZkB2seQAJ09E9gX5CXTaYMReSdfzddMmBTPoOpFrhmH5dHwtYOkF2pF+V/QKxrGQXFsCxEgG4MWI3O4tqlDQDwC12Wdxpt1tuqUr7EdPhyQwbwBDhGYRpMQefql8bwl0mqxhdmALssQCBDhlibi8zcylsNna2Pite8Sef8AStsE+oBIIjuYG+Uz1XO7i7QFFh2upA5gYJjMBBBid9QdFbGsSLtBJEXIBHQgiT63hNVaT88ta3SDExmgm/KQeoQsVSJaLROU3EAwRO3UmeibmpBRDB1/DBEiLAEnS8CB9FXswRg+GRrpDonnty20TVTD1S/K0NbIJkcgJAjlJ1E6pek6o1/iseUXmdZ5LSLroQN2HixBsdrR5HUwj1KAIktjrAab7kjVbqPlxbA6Rc+QNgEB8TLnGdSI5WiTv5K7bKSLBtcNAY3MT/qCfyddFupjHB0ubkdFjGnl5lIMq6ZBHMnXlaUSnTjeSef86JcV5LosXFpElocegDflaUGvWyeEDwm/2IMITnFvW+s/VPjB52Zjl8te/qlqPfQmgIq5hDB9BfndHwvDjJ94bWgzN5v0SDaLgRsOf8qwbipOv8+acr8EpAq+II8IMQYiND90vUxpGg10Oht2sni2k7MQIMa66b8kBtOXAB1j8U2PmLhCa9CZAVmvuWyYv1jexUi7NBDM0f67dgFYUDRp60gSLzM//q1+ieZiabyBlaToBDQYtAkmQ4KJZK6WgKA4dpvOUnyTWCwv+zuxBkdk5xHg/izN8J5EGDyg7JTD08tnGDygH1v9lX3FKOmFBBh95bIPOPTaVZYWtbUj85KtdWDXQB1/JW21xmibH5fnJZyTkhoY4rhzZzRPMj5GPJKUnxqJCdrNc+RIyiJjW0GVVYtha79WXmQR/aePapgw+Kpktt8rH+VTVQSdTbmn6VYRcW05rVVjXDKRHJwPpbdbwfHTJKmrOu2y3g2BxIOmtvsi1mRp1Qve7dNT1PRat60IK+i2RAEdYPmiNDTZpE7TaB3lRdTgeKRbYEj5FJGsJtp1gH5So7A3iadQG8RzBn67qBf4cuW3QmVmLxUgR9APoswokgloP/dH0T8bAYY6GH3kXjUEgERfS211vi+O/wCA0Yl0Nc0wSAJsWxYGJv8AwtV6jn08ggPgSM0SOYJImY6rncY6pmIaTm0cNxGl2rhxwUnvwWP0aUtMAyAIE3Os2/OyjjKkMaW6S6db3EA+YCjgnlkF4HikE99DItKfqVabqbtPFEg6T5XnVbeQE8DXES0QIki7ha+kHfmeauKTBEsAN76C3U237rn2Ui0lt4cBHMSTuOx9Va4UVWwCy0XkxE89z6JTXoTLGli8kEEeIiWjnyI3BG6ew9VjzHu4dqQ2crukbRt2VDjOH1BLoGsnKQ46HbldQ4fWrSCGODQQSXAgWM67Hp3WTgmrTA6ilUyPcGAmCYvO5mSR0PZWOHrCo3LUZba2k3kchdcxTxbmVH5hLbyQBIl2aG2kd1Z0K9Qta9pcWGLzBaJAId5g6LGcP7KTBY3DvovAI8N/E2YPUwLajWN0txHGAFpcJJnxFpuBoJBAt9l0eG4gyqCwt1J1BIJ1MTN7eqRr4JplmXO0HWIgDQgnp21VQyb+S2NoquLtBptqBuVxOVxykGDudncpHS6VpVR8OX0E+avcRhDkDfhEzIANvoNTolhwlmVwMzBhxkZTFp2K3hkjWxpFETFhCdwbnPho69ABzkXQK+BNN+R19xE3tM6XH7JrBVCCYtBvOva+y2btaKLKlw97onKRrM7bGNfzosr4jI3JvaDlEGNbi0eUoeHqNJjnvfXqdFvFYIx4XSNxJI6FY3b+QCeHrkGwF+Ww/OaMzE3Jc23TdDp4dzLEQOcBEpUQRJf4eUct+q1bRkxsYZpu1rb3IJIi0c7c9FXu8DrAE7ZSTlHT+U5QoXgGG6gkSf8AxlSxGGdYteCP1SIn0n0UKVOmwK8kuEgOnef3Ov55XPCmZGguvUubj4BpF9EkzCuaMznbzb5XRWY6R4SR15ncom+SpAi6o8QkAOJEHWLeXy1WYkMfy5kix/LKroY47gEjXe2nKE+2u2NWkAiQTJHI3+q53Hi9FFTVYLm86einwzD0z4n3PnAHpco9ShSLSAYdeCfOJAtEoOBwL4OZwF+YNuY5jdbuVx7oRZUq1Nr/AANtO+nYcvJSrsDhOUFm40jqCVX12NYCc4MCY3Mcv7Spx7mxlPcLNQvaBs3jeEvZDmk5b3dAi0weaVFB52jqYHlBVng8XmBP6dD0SOJrAGJJj8utozl0yRfE4J8TAPMAzHdUtU5TN4XQ0nmd+f58/VKYrBs1kiZ30P55rWGTwxMp31yItCi50Rz31+ani8IQQfibuRP12QKlWB4Tb81K10+iQhcD+noNvmsrNcy8x/5NjoNJ1QRm1iNwT9h90F1R4+E972PcHVIZZ0ahdVmQDvPxC4ILDBBif6VZjMUadQseMw11D8wNxJnnNuqzHcPqUmiqxpEGTJkAdnARfusdVGIbmykEAZ4i2vjb+x5iOnJFLvwWDdh2ZSGOIjxRzbrHl9gpUMWG/f679UniJboc2XeIN+fMXW8PUBMQQT1gfTRa1rYizfjQ+J20dGmu09SiVMW7/e3UfsqsF4PiEDn9pTeFw5f4muDbRF77QOs9VLSQFrhMWMjmF4FrltiLxJJG+kp1mIY6mKbgSyQcwgFugzNdfl/a5rFcNqBxLDMAG5AJmBubQg4d8zMmRGqn7ae0wOoq4VjXZmPsTN7Bwm1jabXGl1YUCPizNpum8EgQc0y0ansCuTw+Iqtysa+IsL8uYKbp8Rc1uV4ytNwBzFwY80njdDR0NSjVzh0yObTIItdvKy27GubBnMdikOHcWcfF7tuXTmRPM2OhOqLjaLXnMyQx2oA0gxpfeb9FHHdMtKy1w3EHv2ncmLb2nTmivY+2V0dLbxrvzsq2hiHUoOYFoOxHz3IurWnxSiRZpbI1bDb9zKxlFp6RqoMBgnS8ZhLm2sIAiTvprsrL/p1Gq0x4XCSIIiTsRFxrzStbFFzZpvcR1OsDkdNvVK0uJOnSSP8AaDMX3EBZvm9rQrIcR4TUpCQ5pEgQ3MSSdhbooUKFQtkNcLwJmO86QrX/AKsdAAPMQJvzEam6zEgO8QNjqJ3GgkCdL/krSOWaVSRDZU4uGeB3idrlBJm8WA3skuHPzudmdDBaDEk9bFdG7HDIXBjXZYOpcdh4Zm/p+/McX4kwVXFlPKRNxIzE3JLdjJIW2Kcp6ohlw2iQS69x+k3Hkd+yTo1nkkFrhrcg3i3fkk6XEiCLw7/XbTRM4rFTJIIkAxIMxaw1A0kTaZV009iNue2fESO2nlOqhWxcWDen890lUrF/+rbaW3+aHScZhxIjl9o2WnH2IsqDveEAN1tqAVa0OGuGWSC2Z1vy2H5CrOGljZcXX0ganv0um3cX0Fx0nXXkFjPk3USkP4rBHWmWkHY3M9CLR+XQ6bWhtzcC8dIjX7JanxBsSydbj8+6XxvFDl8NwZClRl0DLGtTlpdTFoks2M2tNv7XNY3EASIg7mL/AMK3weOc7RrjFzF9th9lrG1abiT7sFxF8wvysddgtINxdNCYhgahy+EwYNp9JSJxDnEDcwL7p84MNGemXjKJLTP5bkgPx5Ik3OgdF45HeOi2T3aEGZg3tJ1cAJkGR1A3CT4hktLy3WBrzU8PjQDJkA2N/pyKaxOWsyCLiIJuRb85pW09iKqTZptAjUaH+0lXpZXATIMEHeN+iuaFExc32Gp1jy7dlldkTLdAdNB2ba/yVKdMQvFPKAWWO+Y5h1mY5WhaNKmBAvPMA/MpOlXLncu33RHEnUjvb6IoZXYDi72NDXOLmnvMRpM6XToDWlrqTA0EF173DZ/B0WLFlOKW0UyTcfTeHPdRY6NSWgOP12CyvSa8zRGW1w47dIk2m11ixS1x6AD/AIhLmaQLEEncfPT1R6eJglskQbZQOe+nJbWIW+xDLPG1wJLo1BJaOdi2/qocSqwxmVoFw70IABEeIXCxYpX5DE+LUgDmbIInOLRtGTf9Wh5a3SQxBNiAbCOnKFixdEOhjNKsbRaL26dV0eH4g5liAXATMWcCPhc2YjTrqsWKZpM0x9hf8gCpERMQNQMwB7labRa4QbOgEEefP91ixYvRsTr0svgbAFr7meaNReAQ4jNAIIixgajrAPS62sWPaMJdjeHw7alMF2aSP9tGm8AkapL/ACPDbTNlIIF7TM9h9brFiWPbaZAdjvd1BBjMc1gIiBMjnCq38Kc6s57XgXDrgyA8SAL7aLaxXGTjtev+gLcTplgzZifFHnrruEkK7nDZaWLrhuNki+ciYOl/smcRh3MiXTmt6wbrFipvaGPZ8rQIEwFrD1DYlYsU+BhadQZj6oFevBLSARryWLEJbExnA1iSI8MbD87o1WsWmHAOIAHlssWKGvlQiQxsAWsQD1HK5lV3FngtkCHTBiwOpkgbrFicUkwKV+JJEnnt+dEzh8bAiNvv/CxYuhpCNmpF76ki9/XZbo4yDuQbXPPXRYsUUIzE0mtbmbIBsRJ1CSbUBsRIm3osWIQz/9k='}} />
                    </View>
                    <View style={styles.commonFlexView}>
                        <Image style={styles.commonImageViewStyle}
                               source={{url: 'https://d3pc1xvrcw35tl.cloudfront.net/sm/images/1050x788/shahrukh-zero_20180735494.jpg'}} />
                    </View>
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

                <View style={{flex: 0.86, backgroundColor: COLORS.HEADER_COLOR}}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={this.renderHeaderComponent}
                        data={newsDataArray}
                        renderItem={this.renderNewsData} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    commonFlexView:{
        height: wp(33.33),
        width: wp(33.33)
    },
    commonImageViewStyle: {
        height: wp(33.33),
        width: wp(33.33),
        borderWidth: 1,
        borderColor: 'white'
    }
});
