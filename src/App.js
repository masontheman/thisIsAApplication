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
    <header>
      <nav className="bg-black text-white">
          <div className="border-black flex items-center justify-between p-2">
            <div className="flex items-center space-x-3">
            <img src="Logo_World_Uncensored.png" alt="" className="hover:rounded-full"/>
            <Link to="/" className="hover:text-red-700">Home</Link>
            {/* <Link to="/worlduncensored">worlduncensored</Link> */}
            <Link to="/profile" className="hover:text-red-700">Profile</Link> 
            <Link to="/signin" className="hover:text-red-700">signin</Link>
            <Link to="createvideo" className="hover:text-red-700">New Video</Link>
            <button onClick={signOut}>sign out</button>
            <img src="LogIn_SignUp.png" alt="" className="h-14 rounded-full"/>
            </div>
            <div className="flex items-center space-x-1">
            <img src="lllllll.png" alt="" className="h-14 hover:rounded-full"/>
            <input type="text" placeholder="Search World Uncensored" className="border w-80 min-w-max rounded-full text-black active:bg-red-700"/>
            </div>
          </div>
      </nav>
      </header>
      <Outlet/>
      <footer className="flex justify-around bg-black text-white">
            <p className="hover:text-red-700">World Uncensored &copy; 2023</p>
            <a href="#" className="hover:text-red-700"><p>Twitter: @bloodgorepainn</p></a>
        </footer>
    </>
  )
}


