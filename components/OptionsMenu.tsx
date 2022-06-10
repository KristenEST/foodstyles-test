import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../assets/theme';
import shareLogo from '../assets/icons/share.png';
import duplicateLogo from '../assets/icons/duplicate.png';
import deleteLogo from '../assets/icons/delete.png';

const styles = StyleSheet.create({
  transparent: {
    backgroundColor: 'transparent',
    paddingRight: 25,
  },
  optionItem: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 15,
    fontFamily: 'ProximaNovaAltSemibold',
    color: colors.GREEN_TEAL,
  },
});

export interface OptionsMenuProps {
  cardId: string;
  deleteItemPress: () => void;
  shareItemPress: () => void;
  duplicateItemPress: () => void;
}
const OptionsMenu: React.FC<OptionsMenuProps> = ({ cardId, shareItemPress, duplicateItemPress, deleteItemPress }) => {
  return (
    <View key={cardId} style={styles.transparent}>
      <TouchableOpacity onPress={shareItemPress} style={styles.optionItem}>
        <Text style={styles.optionText}>Share</Text>
        <Image source={shareLogo} />
      </TouchableOpacity>
      <TouchableOpacity onPress={duplicateItemPress} style={styles.optionItem}>
        <Text style={styles.optionText}>Duplicate</Text>
        <Image source={duplicateLogo} />
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteItemPress} style={styles.optionItem}>
        <Text style={styles.optionText}>Delete</Text>
        <Image source={deleteLogo} />
      </TouchableOpacity>
    </View>
  );
};

export default OptionsMenu;
