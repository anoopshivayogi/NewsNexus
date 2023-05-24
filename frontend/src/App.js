import './App.css';

import {ColorModeScript} from '@chakra-ui/react'
import {useEffect, useState} from 'react';

import api from './api/axiosConfig';
import DataTabs from './components/DataTabs';
import Nav from './components/Nav';

// Login component
function Login({handleLogin}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here
    // You can make an API call to authenticate the user

    // For now, let's assume the login is successful
    handleLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
  type = "text"
  placeholder = "Username"
        value={username}
        onChange={
    (e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

function groupObjectsByCategory(objects) {
        const result = {};

        objects.forEach((obj) => {
          const {category, ...restData} = obj;

          if (!result[category]) {
            result[category] = [];
          }

          result[category].push(restData);
        });

        return result;
}

function App() {
        const [loggedIn, setLoggedIn] = useState(false);
        const [news, setNews] = useState([]);

        const handleLogin = () => { setLoggedIn(true); };

        const getNews =
            async () => {
          try {
            const response = await api.get("/api/v1/news");
            console.log(response.data);
            const newsData = groupObjectsByCategory(response.data);
            setNews(newsData);
            console.log(newsData);
          } catch (err) {
            console.log(err);
          }
        }

        useEffect(() => { getNews(); }, []);

        if (!loggedIn) {
        return <Login handleLogin =
                { handleLogin
                } />;
  }

  return (
    <div className="App">
      <ColorModeScript initialColorMode={"dark"} />
               <Nav setData =
                { setNews } />
      <DataTabs data={news} /><
               /div>
  );
}

export default App;
