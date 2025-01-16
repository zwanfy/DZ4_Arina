import './App.css';
import {useEffect, useState} from "react";

import MainPages from "./Page/MainPage/MainPage";
import ErrorPage from "./Page/ErrorPage/ErrorPage";


function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("");
  let users = {
    name: "",
    lastname: ""
  }
  useEffect(() => {
    const name = prompt("Введите ваше имя.");
    const lastname = prompt("Введите вашу фамилию.")
    users = {name, lastname}
    setUser(users)
    if (name === "John" && lastname === "Johns") {
      setPage("mainPage")
    }else {
      setPage("errorPage")
    }
  },[])
  return (
    <div className="App">
      {page === "mainPage" ? <MainPages user={user}/> : null}
      {page === "errorPage" ? <ErrorPage user={user}/> : null}
    </div>
  );
}

export default App;
