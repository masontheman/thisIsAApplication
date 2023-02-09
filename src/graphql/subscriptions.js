/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserr = /* GraphQL */ `
  subscription OnCreateUserr($filter: ModelSubscriptionUserrFilterInput) {
    onCreateUserr(filter: $filter) {
      id
      username
      pimage
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserr = /* GraphQL */ `
  subscription OnUpdateUserr($filter: ModelSubscriptionUserrFilterInput) {
    onUpdateUserr(filter: $filter) {
      id
      username
      pimage
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserr = /* GraphQL */ `
  subscription OnDeleteUserr($filter: ModelSubscriptionUserrFilterInput) {
    onDeleteUserr(filter: $filter) {
      id
      username
      pimage
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserP = /* GraphQL */ `
  subscription OnCreateUserP($filter: ModelSubscriptionUserPFilterInput) {
    onCreateUserP(filter: $filter) {
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
export const onUpdateUserP = /* GraphQL */ `
  subscription OnUpdateUserP($filter: ModelSubscriptionUserPFilterInput) {
    onUpdateUserP(filter: $filter) {
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
export const onDeleteUserP = /* GraphQL */ `
  subscription OnDeleteUserP($filter: ModelSubscriptionUserPFilterInput) {
    onDeleteUserP(filter: $filter) {
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
export const onCreateFollower = /* GraphQL */ `
  subscription OnCreateFollower($filter: ModelSubscriptionFollowerFilterInput) {
    onCreateFollower(filter: $filter) {
      id
      fusername
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFollower = /* GraphQL */ `
  subscription OnUpdateFollower($filter: ModelSubscriptionFollowerFilterInput) {
    onUpdateFollower(filter: $filter) {
      id
      fusername
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFollower = /* GraphQL */ `
  subscription OnDeleteFollower($filter: ModelSubscriptionFollowerFilterInput) {
    onDeleteFollower(filter: $filter) {
      id
      fusername
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onCreateFollowing(filter: $filter) {
      id
      follusername
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onUpdateFollowing(filter: $filter) {
      id
      follusername
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onDeleteFollowing(filter: $filter) {
      id
      follusername
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo($filter: ModelSubscriptionVideoFilterInput) {
    onCreateVideo(filter: $filter) {
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo($filter: ModelSubscriptionVideoFilterInput) {
    onUpdateVideo(filter: $filter) {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo($filter: ModelSubscriptionVideoFilterInput) {
    onDeleteVideo(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
      postID
      content
      username
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      postID
      content
      username
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      postID
      content
      username
      createdAt
      updatedAt
    }
  }
`;
