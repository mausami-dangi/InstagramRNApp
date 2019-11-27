import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View, AsyncStorage} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import COLORS from '../Constant/Colours';
import LogoutIcon from 'react-native-vector-icons/AntDesign'
import FirebaseApp from '../Config/Firebase';

export default class Dashboard extends Component {
  state = {
    data: '',
    error: ''
  }

  renderFlatListItem = ({item}) => {
    return (
        <View style={styles.item}>
          <Text style={{padding: hp('2%')}}>{item.title}</Text>
          <View style={{borderBottomColor: COLORS.BACKGROUND_COLOR, borderBottomWidth: 1 }}/>
          <Text style={{flex: 1, padding: hp('2%')}}>{item.body}</Text>
        </View>
    );
  }

  fetchGetAPIData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET'
    }).then((response) => response.json())
        .then((response) => {
          this.setState({data: response})
        }) .catch((error) => {
      console.log(error)
    })
  }

  signOutBtnPressed = () => {

    FirebaseApp.auth().signOut()
        .then(this.props.navigation.navigate('Login'))
        .catch(error => alert(error.message))
  }

  componentDidMount = () => {
    this.fetchGetAPIData()
  }

  render() {
    const { data } = this.state;
    return (
        <View style={{flex: 1}}>
          <SafeAreaView style={{backgroundColor: 'red', flex: 0}} />
          <SafeAreaView style={{flex: 1, backgroundColor: 'green'}}>
            <View style={{flex: 0.05, justifyContent: 'center', alignItems: 'center',backgroundColor: 'blue'}}>
              <LogoutIcon name={'logout'} color={'white'} size={20} onPress={this.signOutBtnPressed} style={{alignSelf: 'flex-end', marginRight: hp('2%')}}/>
            </View>
            <View style={[styles.container, {flex: 0.95},{backgroundColor: 'green'}]}>
              <FlatList
                  data={data}
                  renderItem={this.renderFlatListItem}
              />
            </View>
          </SafeAreaView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE_COLOR,
  },
  item: {
    marginHorizontal: wp('5%'),
    width: wp('90%'),
    marginVertical: hp('0.8%'),
    backgroundColor: 'lightblue',
    borderWidth: hp('0.2%'),
    borderRadius: hp('2%'),
    borderColor: COLORS.BACKGROUND_COLOR,
    shadowColor: COLORS.BACKGROUND_COLOR,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  }
});
