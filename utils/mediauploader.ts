export const mediauploader =async (file:any) : Promise<string[]> => {
    const media : string[] = []

        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'spp2qzbb')
        formData.append('cloud_name', 'dzp8kuhzh')
        try{
            const res = await fetch('https://api.cloudinary.com/v1_1/dzp8kuhzh/image/upload'
            , {
                method: 'POST',
                body: formData
            })
            const data = await res.json()
            media.push(data.url)
        }catch(err: any){
            console.log(err)
        }
    return media
}