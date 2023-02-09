import React, {useState,useEffect} from 'react'
import { API , Auth,graphqlOperation,Storage} from 'aws-amplify';
import { userrsByUsername,userPSByUsername,videosByUsername,listVideos } from './graphql/queries';
import { Button, Flex ,Image} from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';
import ViewingUserProfile from './ViewingUserProfile';
export function Home() {
  const [videos,setVideos] = useState([])
  async function getHomePageVideos(){
      try {
      const videos = await API.graphql(graphqlOperation(listVideos))
      const videosFromAPI = videos.data.listVideos.items
      await Promise.all(
        videosFromAPI.map( async (video) => {
          if (video.video) {
            const url = await Storage.get(video.title);
            video.video = url
          }
          return video;
        })
      );
      setVideos(videosFromAPI)
    } catch (error) {
      console.log(error)
    }
  }

useEffect(() => {
  getHomePageVideos();
},[]);
const thisIsAusername = 'masonman8787'
  return (<>
    <nav>
    
    <p>{thisIsAusername}</p>
    <Link to={`usersprofile/${thisIsAusername}`}>{thisIsAusername}</Link>
    </nav>
    
    {/* <div>{videos.map((video) => (
      <div key={video.id}>
      <Image src={video.video} width="400" height="400"></Image>
      <p >{video.title}{video.description}</p>
      <Link to={`usersprofile/${video.username}`}>{video.username}</Link>
      </div>
    ))}</div> */}
    </>
  );
}
