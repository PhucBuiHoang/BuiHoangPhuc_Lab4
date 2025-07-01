
import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

export default function ContactScreen() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=50');
      const data = await response.json();
      const mapped = data.results.map(user => ({
        id: user.login.uuid,
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        avatar: user.picture.large,
        phone: user.phone,
        location: `${user.location.city}, ${user.location.state}`
      }));
      setContacts(mapped);
      // setContacts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => <Card user={item} />}
        keyExtractor={item => item.id}
        style={{ width: '100%' }}
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
        numColumns={1}
      />
    </View>
  );
}
