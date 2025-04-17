// Store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // đường dẫn đúng nhé

const store = configureStore({
  reducer: {
    counter: counterReducer, // <-- key 'counter' phải trùng với state.counter bên App.jsx
  },
});

export default store;