import React, { useState,useEffect} from 'react'
import {
    createVideo
  } from "./graphql/mutations";
  import {
    Button,
    Flex,
    Heading,
    Image,
    Text,
    TextField,
    View,
    withAuthenticator,
  } from "@aws-amplify/ui-react";
  import { API , Auth,graphqlOperation,Storage} from 'aws-amplify';
  import { useNavigate, Link } from 'react-router-dom';
export default function CreateVideoPage() {
    const [user, setUser ] = useState(null);
    const history = useNavigate();
    async function getCurrentUser(){
        const userGotten  = await Auth.currentAuthenticatedUser();
        setUser(userGotten.username);
      }
    async function createAVideo(event){
        event.preventDefault();
        const form = new FormData(event.target);
        const video = form.get("video");
        const data = {
            title: form.get("title"),
            description: form.get("description"),
            username: 'masonman8787',
            video: video.name,
        };
        if (!!data.video) await Storage.put(data.title, video);
        await API.graphql(graphqlOperation(createVideo,{input: data}));
        console.log('success')
        history('/')
    }
    useEffect(() => {
        getCurrentUser();
      },[]);   
  return (<>
  <View as="form" margin="3rem 0" onSubmit={createAVideo}>
  <Flex direction="row" justifyContent="center">
    <TextField
      name="title"
      placeholder="Note Name"
      label="Title"
      labelHidden
      variation="quiet"
      required
    />
    <TextField
      name="description"
      placeholder="Note Description"
      label="Video Description"
      labelHidden
      variation="quiet"
      required
    />
    <View
      name="video"
      as="input"
      type="file"
      style={{ alignSelf: "end" }}
    />
    <Button type="submit" variation="primary">
      Create Video
    </Button>
  </Flex>
</View>
<ul>
    <li></li>
</ul>
</>
  )
}
