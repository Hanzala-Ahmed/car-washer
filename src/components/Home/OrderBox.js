import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import CommonStyles from '../../constants/CommonStyles';
import { wp } from '../../constants/Constants';

const mockData = [
  {
    title: 'order 1',
    orderNumber: '1',
    description: 'Order 1 details'
  },
  {
    title: 'order 2',
    orderNumber: '2',
    description: 'Order 2 details'
  },
  {
    title: 'order 3',
    orderNumber: '3',
    description: 'Order 3 details'
  },
  {
    title: 'order 4',
    orderNumber: '4',
    description: 'Order 4 details'
  },
  {
    title: 'order 5',
    orderNumber: '5',
    description: 'Order 4 details'
  },
  {
    title: 'order 6',
    orderNumber: '6',
    description: 'Order 4 details'
  },
  {
    title: 'order 7',
    orderNumber: '7',
    description: 'Order 4 details'
  },
  {
    title: 'order 8',
    orderNumber: '8',
    description: 'Order 4 details'
  }
];

export const OrderBox = ({ text }) => {
  return (
    <>
      {mockData.map(val => (
        <View key={val.orderNumber.toString()} style={styles.orderBox}>
          <View style={styles.imageMainBox}>
            <View style={styles.imageBox}>{/* <img src=''/> */}</View>
          </View>
          <View style={{ width: '60%' }}>
            <Text style={CommonStyles.text}>{val.orderNumber}</Text>
            <Text style={CommonStyles.text}>{val.title}</Text>
            <Text style={CommonStyles.text}>{val.description}</Text>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  orderBox: {
    width: wp('90%'),
    height: 130,
    backgroundColor: Colors.primaryColor,
    // display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    color: Colors.whiteColor,
    margin: 2,
    borderRadius: 20
  },
  imageMainBox: {
    width: '20%',
    height: '80%',
    padding: 5,
    // backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  imageBox: {
    width: '80%',
    height: '58%',
    backgroundColor: 'white',
    borderRadius: 50
  }
});

// export default OrderBox;
