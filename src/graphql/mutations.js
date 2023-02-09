/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createUserr = /* GraphQL */ `
  mutation CreateUserr(
    $input: CreateUserrInput!
    $condition: ModelUserrConditionInput
  ) {
    createUserr(input: $input, condition: $condition) {
      id
      username
      pimage
      createdAt
      updatedAt
    }
  }
`;
export const updateUserr = /* GraphQL */ `
  mutation UpdateUserr(
    $input: UpdateUserrInput!
    $condition: ModelUserrConditionInput
  ) {
    updateUserr(input: $input, condition: $condition) {
      id
      username
      pimage
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserr = /* GraphQL */ `
  mutation DeleteUserr(
    $input: DeleteUserrInput!
    $condition: ModelUserrConditionInput
  ) {
    deleteUserr(input: $input, condition: $condition) {
      id
      username
      pimage
      createdAt
      updatedAt
    }
  }
`;
export const createUserP = /* GraphQL */ `
  mutation CreateUserP(
    $input: CreateUserPInput!
    $condition: ModelUserPConditionInput
  ) {
    createUserP(input: $input, condition: $condition) {
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
export const updateUserP = /* GraphQL */ `
  mutation UpdateUserP(
    $input: UpdateUserPInput!
    $condition: ModelUserPConditionInput
  ) {
    updateUserP(input: $input, condition: $condition) {
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
export const deleteUserP = /* GraphQL */ `
  mutation DeleteUserP(
    $input: DeleteUserPInput!
    $condition: ModelUserPConditionInput
  ) {
    deleteUserP(input: $input, condition: $condition) {
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
export const createFollower = /* GraphQL */ `
  mutation CreateFollower(
    $input: CreateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    createFollower(input: $input, condition: $condition) {
      id
      fusername
      createdAt
      updatedAt
    }
  }
`;
export const updateFollower = /* GraphQL */ `
  mutation UpdateFollower(
    $input: UpdateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    updateFollower(input: $input, condition: $condition) {
      id
      fusername
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollower = /* GraphQL */ `
  mutation DeleteFollower(
    $input: DeleteFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    deleteFollower(input: $input, condition: $condition) {
      id
      fusername
      createdAt
      updatedAt
    }
  }
`;
export const createFollowing = /* GraphQL */ `
  mutation CreateFollowing(
    $input: CreateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    createFollowing(input: $input, condition: $condition) {
      id
      follusername
      createdAt
      updatedAt
    }
  }
`;
export const updateFollowing = /* GraphQL */ `
  mutation UpdateFollowing(
    $input: UpdateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    updateFollowing(input: $input, condition: $condition) {
      id
      follusername
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollowing = /* GraphQL */ `
  mutation DeleteFollowing(
    $input: DeleteFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    deleteFollowing(input: $input, condition: $condition) {
      id
      follusername
      createdAt
      updatedAt
    }
  }
`;
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
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
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
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
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      postID
      content
      username
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      postID
      content
      username
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      postID
      content
      username
      createdAt
      updatedAt
    }
  }
`;
