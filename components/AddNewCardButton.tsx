import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, textStyles } from '../assets/theme';
import addLogo from '../assets/icons/add.png';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  addCardContainer: {
    backgroundColor: 'pink',
  },
  addLogo: {
    marginHorizontal: 15,
  },
  touchable: {
    flexDirection: 'row',
    marginHorizontal: 18,
    marginBottom: 10,
    backgroundColor: colors.WHITE,
    shadowColor: colors.GREYISH_40,
    borderRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 7,
    shadowOpacity: 1,
    paddingTop: 11,
    paddingBottom: 13,
    alignItems: 'center',
  },
});

export interface AddnewCardProps {
  title: string;
  onPress: () => void;
}

const AddNewCard: React.FC<AddnewCardProps> = ({ title, onPress }) => {
  return (
    <LinearGradient
      colors={[colors.BACKGROUND_GRAY, colors.WHITE]}
      locations={[0, 0.3]}
      style={styles.addCardContainer}>
      <TouchableOpacity style={styles.touchable} onPress={() => onPress()}>
        <Image style={styles.addLogo} source={addLogo} />
        <Text style={textStyles.TEXT_STYLE_7}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default AddNewCard;
