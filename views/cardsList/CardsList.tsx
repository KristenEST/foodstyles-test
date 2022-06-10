import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Share,
} from 'react-native';
import { useMutation, useQuery } from '@apollo/client';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { CardListDto, QUERY_GET_CARDS } from '../../graphql/query/cards';
import { MUTATION_CREATE_CARD } from '../../graphql/mutation/createCard';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, textStyles } from '../../assets/theme';
import HeaderLogo from '../../assets/icons/logo.png';
import CardListItem from '../../components/CardListItem';
import Loading from '../loading/Loading';
import AddNewCard from '../../components/AddNewCardButton';
import uuid from 'react-native-uuid';
import { MUTATION_DELETE_CARD } from '../../graphql/mutation/deleteCard';
import { MUTATION_SHARE_CARD } from '../../graphql/mutation/shareCard';
import { MUTATION_DUPLICATE_CARD } from '../../graphql/mutation/duplicateCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 9 + (getStatusBarHeight() || 0) + 58,
    backgroundColor: colors.BACKGROUND_GRAY,
  },
  header: {
    position: 'absolute',
    height: 157,
    width: '100%',
  },
  headerLogo: {
    position: 'absolute',
    marginLeft: 19,
    marginTop: 9 + (getStatusBarHeight() || 0),
  },
});

const CardsList = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CardListDto | null>(null);

  const handleOptionsClick = (item: CardListDto) => {
    setShowOptions(!showOptions);
    if (!showOptions) {
      setSelectedItem(item);
    } else {
      setSelectedItem(null);
    }
  };

  const {
    loading: getCardsLoading,
    error: getCardsError,
    data: getCardsData,
  } = useQuery(QUERY_GET_CARDS, {
    notifyOnNetworkStatusChange: true,
  });

  const [
    addNewCard,
    { data: addNewCardData, loading: addNewCardLoading, error: addNewCardError },
  ] = useMutation(MUTATION_CREATE_CARD, {
    refetchQueries: [{ query: QUERY_GET_CARDS }],
  });

  const onAddNewPressed = useCallback(() => {
    addNewCard({
      variables: {
        data: {
          name: `My food style (${uuid.v4()})`,
          minPrice: null,
          maxPrice: null,
          locationTypeIds: [],
          locationCuisineTypeIds: [],
          dishTypeIds: [],
          courseTypeIds: [],
          dietIds: [],
          excludedIngredientIds: [],
        },
      },
    });
  }, [addNewCard]);

  const [
    shareCard,
    { data: shareCardData, loading: shareCardLoading, error: sharedCardError },
  ] = useMutation(MUTATION_SHARE_CARD, {
    refetchQueries: [{ query: QUERY_GET_CARDS }]
  });

  const shareItemPress = useCallback(() => {
    if (selectedItem && !shareCardData?.shareCard) {
      shareCard({ variables: { id: selectedItem.id } });
    }

    if (shareCardData && shareCardData.shareCard) {
      Share.share({
        url: `https://cards.foodstyles.com/${shareCardData.shareCard}`,
      });
    }
  }, [selectedItem, shareCardData, shareCard]);

  const [
    duplicateCard,
    {
      data: duplicateCardData,
      loading: duplicateCardLoading,
      error: duplicateCardError,
    },
  ] = useMutation(MUTATION_DUPLICATE_CARD, {
    refetchQueries: [{ query: QUERY_GET_CARDS }],
    variables: { id: selectedItem?.id },
  });

  const duplicateItemPress = useCallback(() => {
    if (selectedItem) {
      duplicateCard({ variables: { id: selectedItem.id } });
      setShowOptions(false);
      setSelectedItem(null);
    }
  }, [selectedItem, duplicateCard]);

  const [
    deleteCard,
    {
      data: deleteCardData,
      loading: deleteCardLoading,
      error: deleteCardError,
    },
  ] = useMutation(MUTATION_DELETE_CARD, {
    refetchQueries: [{ query: QUERY_GET_CARDS }],
  });

  const deleteItemPress = useCallback(() => {
    if (selectedItem) {
      Alert.alert(
        'Confirm delete',
        `This will delete ${selectedItem.name} and all its settings.`,
        [
          {
            text: 'Delete',
            onPress: () => {
              deleteCard({ variables: { id: selectedItem.id } });
              setShowOptions(false);
              setSelectedItem(null);
            },
            style: 'destructive',
          },
          {
            text: 'Cancel',
            onPress: undefined,
            style: 'default',
          },
        ]
      );
    }
  }, [selectedItem, deleteCard]);



  const renderItem = ({ item }: { item: CardListDto }) => (
    <CardListItem
      name={item.name}
      id={item.id}
      optionsClick={() => handleOptionsClick(item)}
      selectedItem={selectedItem}
      showOptions={showOptions}
      shareItemPress={shareItemPress}
      duplicateItemPress={duplicateItemPress}
      deleteItemPress={deleteItemPress}
    />

  );

  if (getCardsError || addNewCardError || deleteCardError || sharedCardError || duplicateCardError) {
    return (
      <SafeAreaView>
        <Text>Oh snap! We got an error</Text>
        <Text>{getCardsError?.message || addNewCardError?.message}</Text>
      </SafeAreaView>
    );
  }

  if (getCardsLoading || addNewCardLoading || deleteCardLoading || shareCardLoading || duplicateCardLoading) {
    return <Loading />;
  }

  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          colors={[colors.ORANGISH, colors.MAIZE, colors.BACKGROUND_GRAY]}
          locations={[0.3, 0.75, 0.95]}
          style={styles.header}
        />
        <Image style={styles.headerLogo} source={HeaderLogo} />
        {getCardsData.cards.length > 0 && (
          <FlatList data={getCardsData.cards} renderItem={renderItem} />
        )}
        {getCardsData.cards.length === 0 && <Text style={textStyles.TEXT_STYLE_5}>No items to be shown</Text>}
      </View>
      <AddNewCard title="New food style" onPress={onAddNewPressed} />
    </>
  );
};

export default CardsList;
