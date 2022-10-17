import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: 'Алекс Портареску' },
  { id: 2, name: 'Максим Озерский' },
  { id: 3, name: 'Яна Пузына' },
  { id: 4, name: 'Армин Ван Бюрен' },
  { id: 5, name: 'Кто-то' }
];

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Its OK?' },
  { id: 4, message: 'Хэй бро, когда мой гост допишешь?' },
  { id: 5, message: 'Ок' }
];

let posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 0}, 
  {id: 2, message: 'Its my first post',likesCount: 20}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
