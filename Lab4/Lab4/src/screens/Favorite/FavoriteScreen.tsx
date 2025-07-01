import { View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { ICard, StackParamList } from '../../interface/interface';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<StackParamList, 'Favorite'>;

export default function FavoriteScreen() {
  const { contacts } = useSelector((state: any) => state);
  const navigation = useNavigation<NavigationProp>();

  const favorites = contacts.filter((contact: ICard) => contact.favorite);

  const renderFavoriteThumbnail = ({ item }: { item: ICard }) => (
    <TouchableOpacity
      style={styles.avatarContainer}
      onPress={() => navigation.navigate('Details', { user: item })}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.phone}
        numColumns={3}
        contentContainerStyle={styles.list}
        renderItem={renderFavoriteThumbnail}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    alignItems: 'center',
  },
  avatarContainer: {
    margin: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#eee',
  },
});
