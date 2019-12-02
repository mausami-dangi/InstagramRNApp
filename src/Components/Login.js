import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert, ScrollView,
    NativeModules
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {validateEmail, validatePassword} from '../Validations/Validation'
import UserIcon from 'react-native-vector-icons/Entypo';
import FacebookIcon from 'react-native-vector-icons/Entypo';
import CheckBoxIcon from 'react-native-vector-icons/Ionicons';
import COLORS from '../Constant/Colours';
import FirebaseApp from '../Config/Firebase';
const {RNTwitterSignIn} = NativeModules;

export default class Login extends Component {
    state = {email: '', password: '', error: ''};

    handleTextInput = (key, val) => {
        this.setState({[key]: val});
    };

    signInBtnPressed = () => {
        if (this.state.email === '') {
            Alert.alert('Please Enter Email');
        } else if (validateEmail(this.state.email) === false) {
            Alert.alert('Please Enter correct Email');
        } else if (this.state.password === '') {
            Alert.alert('Please Enter Password');
        } else if (validatePassword(this.state.password) === false) {
            Alert.alert('Please Enter Strong Password');
        } else {
            FirebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => this.props.navigation.navigate('Dashboard'))
                .catch(error => Alert.alert(error.message))
        }
    };

    twitterBtnPressed = () => {
        RNTwitterSignIn.init("OEBY9EbkdHPbb2Jgcqp2jo8za", "n1DH0Pa799KNdj8YnuMsjQjZXWggbIsTF0z3ROyevaU0B87Sc3")
        RNTwitterSignIn.logIn()
            .then(loginData => {
                console.log("twitetr data...", loginData)
                let twitterResults = {
                    Email: loginData.email,
                    Id: loginData.userID,
                    Name: loginData.userName
                }
                console.log(twitterResults)
            })
            .catch(error => {
                    console.log("twitter error..", error)
                }
            )
    }

    componentWillMount() {
        FirebaseApp.auth().onAuthStateChanged(user => this.props.navigation.navigate(user ? 'Dashboard' : 'Login'))
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} bounces={false}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.headerTitle}>SIGN IN</Text>
                        <Image
                            style={styles.profileImageView}
                            source={{
                                uri:
                                    'https://thumbs.dreamstime.com/z/lady-isolated-bright-background-happy-student-white-blouse-professional-lady-excited-girl-success-concept-smiling-96471759.jpg',
                            }}
                        />
                        <View style={{marginTop: hp('3%'), height: hp('7%'), width: wp('100%'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <FacebookIcon
                                name="facebook-with-circle"
                                size={35}
                                color={COLORS.WHITE_COLOR}
                                style={{marginHorizontal: hp('0.5%')}}
                            />
                            <FacebookIcon
                                name="twitter-with-circle"
                                size={35}
                                color={COLORS.WHITE_COLOR}
                                onPress={this.twitterBtnPressed}
                                style={{marginHorizontal: hp('0.5%')}}
                            />
                            <FacebookIcon
                                name="instagram-with-circle"
                                size={35}
                                color={COLORS.WHITE_COLOR}
                                style={{marginHorizontal: hp('0.5%')}}
                            />
                        </View>
                        <View style={[styles.inputContainerView, {marginTop: hp('3%'), marginHorizontal: wp('1%')}]}>
                            <UserIcon
                                name="user"
                                size={25}
                                color={COLORS.WHITE_COLOR}
                                style={{marginLeft: hp('1%'), alignSelf: 'center'}}
                            />
                            <TextInput
                                style={styles.textInputView}
                                placeholder="Mobile Number Or Email"
                                placeholderTextColor={COLORS.BORDER_COLOR}
                                autoCapitalize = 'none'
                                onChangeText={val => this.handleTextInput('email', val)}
                            />
                        </View>
                        <View style={[styles.inputContainerView, {marginTop: hp('1%')}]}>
                            <UserIcon
                                name="lock"
                                size={25}
                                color={COLORS.WHITE_COLOR}
                                style={{marginLeft: hp('1%'), alignSelf: 'center'}}
                            />
                            <TextInput
                                style={styles.textInputView}
                                placeholder="Password"
                                placeholderTextColor={COLORS.BORDER_COLOR}
                                onChangeText={val => this.handleTextInput('password', val)}
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={styles.forgotPasswordContainerView}>
                            <View style={styles.rememberMeView}>
                                <CheckBoxIcon
                                    name="ios-checkbox"
                                    size={hp('3%')}
                                    color={COLORS.WHITE_COLOR}
                                    style={{marginLeft: hp('1%'), alignSelf: 'center'}}
                                />
                                <Text
                                    style={{
                                        alignSelf: 'center',
                                        marginLeft: hp('0.5%'),
                                        color: COLORS.WHITE_COLOR,
                                        fontSize: hp('1.8%'),
                                    }}>
                                    Remember Me
                                </Text>
                            </View>
                            <View style={styles.forgotPwdView}>
                                <TouchableOpacity>
                                    <Text
                                        style={{
                                            alignSelf: 'flex-end',
                                            color: COLORS.WHITE_COLOR,
                                            fontSize: hp('1.8%'),
                                        }}>
                                        Forgot Password?
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={[styles.inputContainerView, styles.signInButtonView]}
                            onPress={() => this.signInBtnPressed()}>
                            <Text style={styles.buttonText}>{'SIGN IN'}</Text>
                        </TouchableOpacity>

                        <View style={{justifyContent: 'flex-end', flex: 1}}>
                            <TouchableOpacity
                                style={[styles.inputContainerView, styles.signUpButtonView, {marginTop: hp('10%')}]}
                                onPress={() => this.props.navigation.navigate('SignUp')}>
                                <Text style={styles.buttonText}>{'CREATE NEW ACCOUNT'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND_COLOR,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: hp('3.5%'),
        marginTop: hp('10%'),
        color: COLORS.WHITE_COLOR,
    },
    profileImageView: {
        height: hp('15%'),
        width: hp('15%'),
        marginTop: hp('3%'),
        borderRadius: hp('7.5%'),
    },
    inputContainerView: {
        height: hp('6.5%'),
        width: wp('90%'),
        borderRadius: wp('2.5%'),
        flexDirection: 'row',
        borderColor: COLORS.BORDER_COLOR,
        borderWidth: 2,
    },
    textInputView: {
        flex: 1,
        marginLeft: hp('1%'),
        color: COLORS.WHITE_COLOR,
    },
    signInButtonView: {
        alignItems: 'center',
        marginTop: hp('2%'),
        justifyContent: 'center',
        backgroundColor: COLORS.PINK_COLOR,
        borderColor: COLORS.PINK_COLOR,
    },
    signUpButtonView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: hp('2%'),
        color: COLORS.WHITE_COLOR,
    },
    forgotPasswordContainerView: {
        height: hp('3%'),
        width: wp('90%'),
        flexDirection: 'row',
        marginTop: '6%',
    },
    rememberMeView: {
        height: hp('3%'),
        width: wp('45%'),
        flexDirection: 'row',
    },
    forgotPwdView: {
        height: hp('3%'),
        width: wp('45%'),
        justifyContent: 'center',
    },
});
