import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider} from 'react-redux';
import { ConfigureStore} from './redux/configureStore';
import Main from './components/main/main.component';
import Header from './components/header/header.component';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <Header/>
        <Main/>
    </div>
    </Provider>
  );
}

export default App;
