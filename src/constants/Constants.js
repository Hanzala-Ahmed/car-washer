import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP
} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';

export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;
export const rf = RFPercentage;

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;