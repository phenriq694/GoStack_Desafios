import React, { Component } from 'react'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1, 
        author: {
          name: "Julio Alcantra",
          avatar: "",
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratanto?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: ""
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  }


  render() {
    return (
      <div id="postList">
      </div>
    )
  }
}

export default PostList