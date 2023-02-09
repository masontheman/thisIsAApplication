import React from 'react'
import {useState,useEffect} from 'react'
import { API , Auth,graphqlOperation,Storage} from 'aws-amplify';
import { useParams ,Link} from 'react-router-dom';
import {
  createFollower
} from "./graphql/mutations";
import {
  videosByUsername
} from "./graphql/queries";
import { Button, Flex ,Image} from '@aws-amplify/ui-react';
// use params from react-router-dom 
export default function ViewingUserProfile(props) {
  const { username } = useParams();
  const [usersVideos, setUsersVideos] = useState([])
    // const username = props.username
    console.log(username)
    async function handleClick(e){
      e.preventDefault();
      const data = {
        username: 'maasond87'
      }
      await API.graphql(graphqlOperation(createFollower,{input: data}));
        console.log('success')


    }
    async function handleClick2(e){
      e.preventDefault();
      const data = {
        username: 'maasond87'
      }
      await API.graphql(graphqlOperation(createFollower,{input: data}));
        console.log('success')
    }
    async function getTheUsersVideos(){
        try {
        const vids = await API.graphql(graphqlOperation(videosByUsername,{username: username}));
        console.log(vids, 'vids')
        const videosFromAPI = vids.data.videosByUsername.items
        await Promise.all(
          videosFromAPI.map( async (video) => {
            if (video.video) {
              const url = await Storage.get(video.title);
              video.video = url
            }
            return video;
          })
        );
        setUsersVideos(videosFromAPI)
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      getTheUsersVideos();
    },[]);
  return (<>
    <div>
    {username}
    this is a ahjsdflkajsd
    </div>
    <Button onClick={handleClick}>Follow</Button>
    <Button onClick={handleClick2}>unFollow</Button>
        <div className="grid grid-cols-4 gap-4 m-2 bg-black text-white">{usersVideos.map((video) => (
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
