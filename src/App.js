import axios from "axios";

import  { useEffect } from 'react';

const client = axios.create({
});

function App() {
  useEffect(() => {
    client.get('/feed').then((response) => {
      console.log(response)
    });
  }, []);
}

export default App;