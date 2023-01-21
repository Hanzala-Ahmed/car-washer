import * as React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import { OrderBox } from '../../components/Home/OrderBox';
import Colors from '../../constants/Colors';
import { wp } from '../../constants/Constants';
// import Icon from '../../constants/Icon';

const Home = () => {
  const [searchText, onSearchText] = React.useState('');
  return (
    <View>
      <View style={styles.topNavBox}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchText}
          onChangeText={onSearchText}
        />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.mainBox}>
          <OrderBox />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    // height: "10%",
    backgroundColor: Colors.whiteColor,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4
  },
  topNavBox: {
    width: wp('100%'),
    height: 120,
    backgroundColor: Colors.primaryColor,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  input: {
    width: wp('80%'),
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: Colors.whiteColor,
    borderRadius: 4,
    padding: 10,
    marginBottom: 20
  }
});

export default Home;
