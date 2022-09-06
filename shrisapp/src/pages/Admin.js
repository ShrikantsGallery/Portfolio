import React,{useState} from 'react'

export default function Admin() {


  const [image,setImage] = useState('')
  const [loading,setLoading] = useState(false)

  const uploadImage = async e => {  
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'shrisnaps1')
    setLoading(true)
    const res = await fetch (
        'https://api.cloudinary.com/v1_1/dxyuqoh9w/image/upload',
        {
            method: 'POST',
            body: data
        }

    )

    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
  }
  return (
    <div>
        <h1>Welcome Admin</h1>
        <h2>Upload image</h2>
        <input type="file" name ="file"  placeholder="Upload image" onChange={uploadImage}/>

        { loading ? 
            ( <h3>loading ...</h3> ) : 
            <img src={image} style ={{width: '300px'}} /> 
        }
    </div>

  )
}
