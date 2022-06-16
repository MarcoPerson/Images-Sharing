import React from 'react'

import {ImageType, CommentType} from '../interfaces'


type Props = {comments: CommentType[]}

export default function Comments({comments}: Props) {
  return (
    <div>Comments</div>
  )
}