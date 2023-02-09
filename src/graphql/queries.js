/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserr = /* GraphQL */ `
  query GetUserr($id: ID!) {
    getUserr(id: $id) {
      id
      username
      pimage
      createdAt
      updatedAt
    }
  }
`;
export const listUserrs = /* GraphQL */ `
  query ListUserrs(
    $filter: ModelUserrFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserrs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        pimage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserP = /* GraphQL */ `
  query GetUserP($id: ID!) {
    getUserP(id: $id) {
      id
      username
      contnet
      followers {
        items {
          id
          fusername
          createdAt
          updatedAt
        }
        nextToken
      }
      following {
        items {
          id
          follusername
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserPS = /* GraphQL */ `
  query ListUserPS(
    $filter: ModelUserPFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        contnet
        followers {
          nextToken
        }
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollower = /* GraphQL */ `
  query GetFollower($id: ID!) {
    getFollower(id: $id) {
      id
      fusername
      createdAt
      updatedAt
    }
  }
`;
export const listFollowers = /* GraphQL */ `
  query ListFollowers(
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fusername
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollowing = /* GraphQL */ `
  query GetFollowing($id: ID!) {
    getFollowing(id: $id) {
      id
      follusername
      createdAt
      updatedAt
    }
  }
`;
export const listFollowings = /* GraphQL */ `
  query ListFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        follusername
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      title
      description
      username
      video
      comments {
        items {
          id
          postID
          content
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        username
        video
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      content
      username
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        content
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userrsByUsername = /* GraphQL */ `
  query UserrsByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserrFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userrsByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        pimage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userPSByUsername = /* GraphQL */ `
  query UserPSByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserPFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userPSByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        contnet
        followers {
          nextToken
        }
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const followersByFusername = /* GraphQL */ `
  query FollowersByFusername(
    $fusername: String!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followersByFusername(
      fusername: $fusername
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fusername
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const followingsByFollusername = /* GraphQL */ `
  query FollowingsByFollusername(
    $follusername: String!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followingsByFollusername(
      follusername: $follusername
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        follusername
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const videosByUsername = /* GraphQL */ `
  query VideosByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    videosByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        username
        video
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const commentsByPostIDAndContent = /* GraphQL */ `
  query CommentsByPostIDAndContent(
    $postID: ID!
    $content: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPostIDAndContent(
      postID: $postID
      content: $content
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        content
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
