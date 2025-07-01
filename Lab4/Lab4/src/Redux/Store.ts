import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import uuid from "react-native-uuid";
import { ICard } from '../interface/interface';

interface ContactsState {
  contacts: ICard[];
}

const initialState: ContactsState = {
  contacts: [],
};

export const mapContacts = (contact: any) => {
  const { name, picture, phone, cell, email } = contact;
  return {
    id: uuid.v4(),
    name: name.first + ' ' + name.last,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() < 0.1 ? true : false,
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchContactsSuccess: (state: any, action: PayloadAction<ICard>) => {
      state.contacts = action.payload;
    },
  },
});

export const { fetchContactsSuccess } = contactsSlice.actions;
const store = configureStore({
  reducer: contactsSlice.reducer,
});

export default store;
