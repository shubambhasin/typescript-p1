import { useState } from 'react';
import {Header} from './components/Header'
import "./styles.css";

export default function App() {

  const [user, setUser]= useState({
    userName: "Shubam",
    score: 0
  })
  return (
    <div className="App">

      <Header userName={user.userName} score={user.score}/>
  
    </div>
  );
}
