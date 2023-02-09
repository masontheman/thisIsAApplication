import React, { useEffect, useState } from "react";
import { Home } from "./Home";
import {Route, Link, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, useParams } from "react-router-dom";
import AuthSystem from "./AuthSystem";
import Profile from "./Profile";
import SignUpp from "./SignUpp";
import { userrsByUsername,userPSByUsername } from './graphql/queries';
import { API , Auth,graphqlOperation} from 'aws-amplify';
import SignIn from "./SignIn";
import { Button } from "@aws-amplify/ui-react";
import CreateVideoPage from "./CreateVideoPage";
import ViewingUserProfile from "./ViewingUserProfile";

export default function App(props) {
  // const [profile, setProfile ] = useState(null);
  // const [user, setUser ] = useState(null)
  // async function getCurrentUser(){
  //   const userGotten  = await Auth.currentAuthenticatedUser();
  //   setUser(userGotten.username);
  // }
  
  // async function Plswork2() {
  //   const fetchUSER = await API.graphql(
  //     graphqlOperation(userPSByUsername, {username: user})
  //   );
  //   setProfile(fetchUSER);
  // }
  
  // useEffect(() => {
  //   getCurrentUser();
  // },[user]);
  
  // useEffect(() => {
  //   if (user && profile === null) {
  //     Plswork2();
  //   }
  // }, [user, profile]);
  
  // useEffect(() => {
  //   if (profile) {
  //     console.log('user profile fetched', profile);
  //   }
  // }, [profile]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
      <Route index element={<Home/>}/>
      {/* <Route path="/profile" element={<Profile/>} /> */}
      <Route path="/signup" element={<SignUpp />} />
      <Route path="/worlduncensored" element={<AuthSystem/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/createvideo" element={<CreateVideoPage/>} />
      <Route path="/usersprofile/:username" element={<ViewingUserProfile/>} />
      </Route>
    )
  )
  return (
    
    <RouterProvider router={router} />
  );
}

const Root = (props) => {

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
  return(
    <>
      <Link to="/">Home</Link>
      {/* <Link to="/worlduncensored">worlduncensored</Link> */}
      <Link to="/profile">Profile</Link> 
      <Link to="/signin">signin</Link>
      <Link to="createvideo">New Video</Link>
      <Button onClick={signOut}  >sign out</Button>
      <Outlet/>
    </>
  )
}