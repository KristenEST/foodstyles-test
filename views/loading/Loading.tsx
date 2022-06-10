import React from 'react';
import { SafeAreaView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { textStyles } from '../../assets/theme';

const Loading = () => {
  return <SafeAreaView><Spinner visible={true} textContent="Loading..." textStyle={textStyles.TEXT_STYLE_5} /></SafeAreaView>;
};

export default Loading;
