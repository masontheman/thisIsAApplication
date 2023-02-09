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
  return (<>
    {/* <div>{videos.map((video) => (
      <div key={video.id}>
      <Image src={video.video} width="400" height="400"></Image>
      <p >{video.title}{video.description}</p>
      <Link to={`usersprofile/${video.username}`}>{video.username}</Link>
      </div>
    ))}</div> */}
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
            ))}</div>
    </>
  );
}
