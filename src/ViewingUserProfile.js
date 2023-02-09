import React from 'react'
import {useState,useEffect} from 'react'
import { API , Auth,graphqlOperation,Storage} from 'aws-amplify';
import { useParams } from 'react-router-dom';
import {
  createFollower
} from "./graphql/mutations";
import { Button, Flex ,Image} from '@aws-amplify/ui-react';
// use params from react-router-dom 
export default function ViewingUserProfile(props) {
  const { username } = useParams();
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
  return (<>
    <div>
    {username}
    this is a ahjsdflkajsd
    </div>
    <Button onClick={handleClick}>Follow</Button>
    <Button onClick={handleClick2}>unFollow</Button>
    </>
  );
}
