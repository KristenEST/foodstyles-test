import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, textStyles } from '../assets/theme';
import optionsLogo from '../assets/icons/options.png';
import closeLogo from '../assets/icons/close.png';
import { CardListDto } from '../graphql/query/cards';
import OptionsMenu from './OptionsMenu';

const styles = StyleSheet.create({
  cardListItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 18,
    paddingTop: 14,
    paddingBottom: 16,
    marginHorizontal: 18,
    marginBottom: 6,
    backgroundColor: colors.WHITE,
    shadowColor: colors.GREYISH_40,
    borderRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 7,
    shadowOpacity: 1,
  },
  options: {
    marginRight: 15,
  },
  text: {
    ...textStyles.TEXT_STYLE_6,
    flex: 1
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export interface CardListItemProps extends CardListDto {
  optionsClick: () => void;
  selectedItem: CardListDto | null;
  showOptions: boolean;
  deleteItemPress: () => void;
  shareItemPress: () => void;
  duplicateItemPress: () => void;
}

const CardListItem: React.FC<CardListItemProps> = ({
  name,
  id,
  optionsClick,
  selectedItem,
  showOptions,
  shareItemPress,
  duplicateItemPress,
  deleteItemPress
}) => {
  const thisOneIsOpen = showOptions && id === selectedItem?.id;

  return (
    <>
      <View style={styles.cardListItemContainer}>
        <Text style={styles.text}>{name}</Text>
        <TouchableOpacity style={styles.options} onPress={() => optionsClick()}>
          <Image source={thisOneIsOpen ? closeLogo : optionsLogo} />
        </TouchableOpacity>
      </View>
      {thisOneIsOpen && (
        <OptionsMenu
          cardId={id}
          shareItemPress={shareItemPress}
          duplicateItemPress={duplicateItemPress}
          deleteItemPress={deleteItemPress}
        />
      )}
    </>
  );
};

export default CardListItem;
