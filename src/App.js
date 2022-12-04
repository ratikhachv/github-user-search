import logo from './logo.svg';
import dark from "./imgs/moon.png"
import light from "./imgs/sun.png"
import "./reset.css"
import "./bgChange.css"
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from './Container';
import { Context } from './Context';
import { matchPath } from "react";
import DateObject from 'react-date-object';


function App() {
  const [noResults, setnoResults] = useState("")
  const [userLogin, setUserLogin] = useState("octocat")
  const [searchValue, setSearchValue] = useState("")
  const [avatarUrl, setAvatarUrl] = useState("")
  const [registerDate, setRegisterDate] = useState("")
  const [userName, setUserName] = useState("")
  const [repos, setRepos] = useState("")
  const [followers, setFollowers] = useState("")
  const [following, setFollowing] = useState("")
  const [location, setLocation] = useState("")
  const [blog, setBlog] = useState("")
  const [office, setOffice] = useState("")
  const [twitter, setTwitter] = useState("")
  const [confirmedLogin, setConfirmedLogin] = useState("")
  const [color, setColor] = useState("dark")
  const [bgChangeIconSrc, setBgChangeIconSrc] = useState(dark)
  const [bgChangeActive, setBgChangeActive] = useState(true)
  
   
  useEffect(() => {
    axios.get(`https://api.github.com/users/${userLogin}`).then((response) =>{
      let data = response.data
      console.log(data);
      let getDate = data.created_at
      getDate = getDate.slice(0, 10)
      let date = new DateObject(getDate)
      let convertedDate = date.format("DD MMMM YYYY");
      console.log(date.format("DD MMMM YYYY"));
      setAvatarUrl(data.avatar_url)
      setRegisterDate("Joined " + convertedDate)
      setUserName(data.name)
      setConfirmedLogin(data.login)
      setRepos(data.public_repos)
      setFollowers(data.followers)
      setFollowing(data.following)
      setLocation(data.location)
      setBlog(data.blog)
      setOffice(data.company)
      setTwitter(data.twitter_username)
      console.log("works");
  
    }).catch(e =>{
      console.log(e);
      setnoResults("No Results")
    })
  },[userLogin])

  function searchUser(e){
    setSearchValue(e.target.value)
    console.log(userLogin);
  }
  function confirm(){
    setUserLogin(searchValue)
    console.log(userLogin);
  }

  function checkActive(){
    setBgChangeActive(!bgChangeActive)
    console.log("clicked active");
  }
  function changeBg(){
    console.log("checking", bgChangeActive);
    if(bgChangeActive){
      setColor("light")
      setBgChangeIconSrc(light)
    }else{
      setColor("dark")
      setBgChangeIconSrc(dark)
    }    
  }
  
  return (
      <Context.Provider value={{searchUser:searchUser, searchValue:searchValue, 
      confirm:confirm, avatarUrl:avatarUrl, userLogin:userLogin, 
      registerDate:registerDate, userName:userName, repos:repos, 
      following:following, followers:followers, location:location, blog:blog, 
      office:office, twitter:twitter, 
      noResults:noResults, confirmedLogin:confirmedLogin, changeBg:changeBg, 
      color:color, bgChangeIconSrc:bgChangeIconSrc, bgChangeActive:bgChangeActive, checkActive:checkActive,}}>
        <Container/>
      </Context.Provider>
  );
}

export default App;
