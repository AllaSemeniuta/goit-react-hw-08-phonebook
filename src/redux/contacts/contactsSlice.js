import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  fetchContacts,
  deleteContact,
  editContact,
} from 'redux/contacts/operations';
import { logOut } from 'redux/auth/operations';

// import { toast } from 'react-hot-toast';

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};

export const contactsSlise = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: [...action.payload],
      };
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: [...state.items, action.payload],
      };
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: [...state.items.filter(item => item.id !== action.payload.id)],
      };
    },

    [deleteContact.rejected]: handleRejected,
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
    [editContact.pending]: handlePending,

    [editContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: [
          ...state.items.filter(item => item.id !== action.payload.id),
          action.payload,
        ],
      };
    },
  },
});

export const contactsReducer = contactsSlise.reducer;
