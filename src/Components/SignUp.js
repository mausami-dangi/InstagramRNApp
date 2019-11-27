import React, {Component} from 'react';
import {
  Text,
  View,
  Alert,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import UserIcon from 'react-native-vector-icons/Entypo';
import CheckBoxIcon from 'react-native-vector-icons/Ionicons';
import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PhoneIcon from 'react-native-vector-icons/FontAwesome';
import {validateEmail, validatePassword} from '../Validations/Validation'
import COLORS from '../Constant/Colours';
import FirebaseApp from '../Config/Firebase';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      password: '',
      confirmPassword: '',
      error: ''
    }
  }

  handleTextInput = (key, val) => {
    this.setState({[key]: val})
  }

  signUpBtnPressed = () => {
    if (this.state.firstName === '') {
      Alert.alert('Please Enter FirstName');
    } else if (this.state.lastName === '') {
      Alert.alert('Please Enter LastName');
    } else if (this.state.email === '') {
      Alert.alert('Please Enter Email ID');
    } else if (this.state.mobileNumber === '') {
      Alert.alert('Please Enter Mobile Number');
    } else if (this.state.password === '') {
      Alert.alert('Please Enter Password');
    } else if (this.state.confirmPassword === '') {
      Alert.alert('Please Enter Confirm Password');
    } else if (validateEmail(this.state.email) === false) {
      Alert.alert('Please Enter Valid Email ID');
    } else if (validatePassword(this.state.password) === false) {
      Alert.alert('Please Enter Strong Password');
    } else if (this.state.password != this.state.confirmPassword) {
      Alert.alert('Password & Confirm password should be same');
    } else {
      FirebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => this.props.navigation.navigate('Dashboard'))
          .catch(err => Alert.alert(err.message))

    }
  }

  render() {
    return (
        <View style={styles.container}>
          <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} bounces={false}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.headerTitle}>SIGN UP</Text>
              <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled keyboardVerticalOffset={40}>
                <View style={[styles.inputContainerView, {marginTop: hp('7%')}]}>
                  <UserIcon
                      name="user"
                      size={25}
                      color={COLORS.WHITE_COLOR}
                      style={{marginLeft: hp('1%'), alignSelf: 'center'}}
                  />
                  <TextInput
                      style={styles.textInputView}
                      placeholder={'First Name'}
                      placeholderTextColor={COLORS.BORDER_COLOR}
                      onChangeText={(firstName) => this.handleTextInput('firstName', firstName)}
                  />
                </View>
                <View style={[styles.inputContainerView, {marginTop: hp('1%')}]}>
                  <UserIcon
                      name="user"
                      size={25}
                      color={COLORS.WHITE_COLOR}
                      style={{marginLeft: hp('1%'), alignSelf: 'center'}}
                  />
                  <TextInput
                      style={styles.textInputView}
                      placeholder={'Last Name'}
                      placeholderTextColor={COLORS.BORDER_COLOR}
                      onChangeText={(lastName) => this.handleTextInput('lastName', lastName)}
                  />
                </View>
                <View style={[styles.inputContainerView, {marginTop: hp('1%')}]}>
                  <EmailIcon
                      name="email"
                      size={25}
                      color={COLORS.WHITE_COLOR}
                      style={{marginLeft: hp('1%'), alignSelf: 'center'}}
                  />
                  <TextInput
                      style={styles.textInputView}
                      autocapitalize={'none'}
                      placeholder={'Email'}
                      placeholderTextColor={COLORS.BORDER_COLOR}
                      autoCapitalize = 'none'
                      onChangeText={(email) => this.handleTextInput('email', email)}
                  />
                </View>
                <View style={[styles.inputContainerView, {marginTop: hp('1%')}]}>
                  <PhoneIcon
                      name="phone"
                      size={25}
                      color={COLORS.WHITE_COLOR}
                      style={{marginLeft: hp('1%'), alignSelf: 'center'}}
                  />
                  <TextInput
                      style={styles.textInputView}
                      placeholder={'Phone Number'}
                      placeholderTextColor={COLORS.BORDER_COLOR}
                      onChangeText={(mobileNumber) => this.handleTextInput('mobileNumber', mobileNumber)}
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
                      placeholder={'Password'}
                      placeholderTextColor={COLORS.BORDER_COLOR}
                      onChangeText={(password) => this.handleTextInput('password', password)}
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
                      placeholder={'Confirm Password'}
                      placeholderTextColor={COLORS.BORDER_COLOR}
                      onChangeText={(confirmPassword) => this.handleTextInput('confirmPassword', confirmPassword)}
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
                      {'I agree to Terms and Privacy Policy'}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                    style={[styles.inputContainerView, styles.signInButtonView]}
                    onPress={() => this.signUpBtnPressed()}>
                  <Text style={styles.buttonText}>{'SIGN UP'}</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
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
    backgroundColor: 'pink',
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
    position: 'absolute',
    bottom: hp('6%'),
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
    width: wp('90%'),
    flexDirection: 'row',
  },
  forgotPwdView: {
    height: hp('3%'),
    width: wp('45%'),
    justifyContent: 'center',
  },
});
