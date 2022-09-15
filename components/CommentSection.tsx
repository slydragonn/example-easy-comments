import { CommentsSection, EasyComment } from "@slydragonn/react-easy-comments"
import { comments, user } from "../helpers"

interface Props {
  theme: 'default' | 'dark'
}

const CommentsWithCurrentUser = ({theme}: Props) => {
  return (
    <CommentsSection
      currentUser={user}
      initialComments={[
        comments,
        (commentElement: any): EasyComment => (
          {
            commentId: commentElement.commentId,
            userId: commentElement.userId,
            username: commentElement.username,
            comment: commentElement.comment,
            creationDate: commentElement.creationDate,
            likes: commentElement.likes,
            dislikes: commentElement.dislikes,
            avatarUrl: commentElement.avatarUrl,
            profileLink: commentElement.profileLink
          }
        )
      ]}
      listeners={{
        onSubmit: (comment) => console.log('on submit: ', comment),
        onUpdate: (comment) => console.log('on update: ', comment),
        onDelete: (commentId) => console.log('on delete: ', commentId)
      }}
      options={{
        theme
      }}
    />
  )
}

export default CommentsWithCurrentUser