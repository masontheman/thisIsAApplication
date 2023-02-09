import React, { useEffect, useState } from "react";
import { userrsByUsername,userPSByUsername , videosByUsername} from './graphql/queries';
import { API , Auth,graphqlOperation,Storage} from 'aws-amplify';
import { useParams ,Link} from 'react-router-dom';
export default function Profile() {
  const [profile, setProfile ] = useState(null);
  const [user, setUser ] = useState(null);
  const [videos, setVideos] = useState([]);

  async function Plswork2() {
    const fetchUSER = await API.graphql(
      graphqlOperation(userPSByUsername, {username: user})
    );
    setProfile(fetchUSER);
  }
  async function getVideosByProfileUser(){
    const usersVideos = await API.graphql(graphqlOperation(videosByUsername, {username: user}))
    console.log(usersVideos.data.videosByUsername.items)
    const TheUsersVideos = usersVideos.data.videosByUsername.items
    await Promise.all(
      TheUsersVideos.map( async (video) => {
        if (video.video) {
          const url = await Storage.get(video.title);
          video.video = url
        }
        return video;
      })
    );
    setVideos(TheUsersVideos)
  }
  async function getCurrentUser(){
    const userGotten  = await Auth.currentAuthenticatedUser();
    setUser(userGotten.username);
  }
  
  useEffect(() => {
    getCurrentUser();
    
  },[user]);
  
  useEffect(() => {
    if (user && profile === null) {
      Plswork2();
    }
  }, [user, profile]);
  
  useEffect(() => {
    if (profile) {
      console.log('user profile fetched', profile);
      // getTheUsersVideos();
      getVideosByProfileUser();
    }
  }, [profile]);

async function Plswork2(props) {
  try {
    const fetchUSER = await API.graphql(
    graphqlOperation(userPSByUsername, {username: user})
    // graphqlOperation(getUser, {username: 'masonman8787'})
    );
    setProfile(fetchUSER)
    console.log('user profile fetched', fetchUSER);
  } catch {

  }
}

useEffect(() => {
    Plswork2();
    
},[])
  return (<>
    {/* <div>Profile</div>
    {profile ? <h1>{profile.data.userPSByUsername.items[0].username} 's Profile Page</h1> : <h1>Not a User</h1>}
    <div className="grid grid-cols-4 gap-4 m-2 bg-black text-white">{videos.map((video) => (
    <div className="flex-1 " key={video.id}>
      <img src={video.video} alt="" className="rounded-3xl w-[480px] h-[360px]"/>
      <div className="flex items-center">
        <div className="m-1">
          <img src="https://source.unsplash.com/random/200x200" alt="" className="rounded-full h-10"/>
        </div>
        <div>
          <p>{video.title}</p>
          <p>{video.description}</p>
          <Link to={`usersprofile/${video.username}`}>{video.username}</Link>
        </div>
      </div>
    </div>
    ))}</div> */}
    </>
  )
}

