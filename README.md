# React Easy Comments - Example

Create comment sections easily - [__See documentation__]("https://github.com/slydragonn/react-easy-comments")

## Install

```bash
  npm i @slydragonn/react-easy-comments
```

### Getting started

```tsx
  import React from 'react'
  import { CommentsSection, EasyComment } from '@slydragonn/react-easy-comments'
  import { User, Comments, doSomething } from 'example'

  export default function App {
    return (
      <main>
        <h1>My Comments Section</h1>
        <CommentsSection
          currentUser={{
            id: User.id,
            name: User.name,
            likes: User.likes,
            dislikes: user.dislikes,
            avatarUrl: User.image,
            profileLink: User.link
          }}
          initialComments={[
            Comments,
            (commentElement: any): EasyComment => ({
              commentId: commentElement.id,
              userId: commentElement.user.id,
              username: commentElement.user.name,
              comment: commentElement.text,
              creationDate: commentElement.date,
              likes: commentElement.info.likes,
              dislikes: commentElement.info.dislikes,
              avatarUrl: commentElement.user.image,
              profileLink: commentElement.user.link
            })
          ]}
          listeners={{
            onSubmit: (comment) => dosomething(comment),
            onUpdate: (comment) => dosomething(comment),
            onDelete: (comment) => dosomething(comment)
          }}
          options={{}}
        />
      </main>
    )
  }

  export default App

```
