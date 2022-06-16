export type ImageType = {
    id: number,
    name: string,
    public_id: string
}

export type CommentType = {
    id: number,
    imageId: number,
    userName : string,
    comment : string,
    date: string
}