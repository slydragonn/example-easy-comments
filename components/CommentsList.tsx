import { CommentsList, EasyComment } from '@slydragonn/react-easy-comments'
import { comments } from '../helpers'

interface Props {
  theme: 'default' | 'dark'
}


const CommentsWithoutCurrentUser = ({theme}: Props) => {
  return (
    <CommentsList
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
      options={{
        theme
      }}
    />
  )
}

export default CommentsWithoutCurrentUser
