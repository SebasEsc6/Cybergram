import React, { useEffect, useRef }  from 'react'
import CancelItem from '../Components/Shared/CancelItem'
import AcceptItem from '../Components/Shared/AcceptItem'

function Uploadpage() {
  const [post, setPost] = useState('');
  const [loading, setloading] = useState('')
  const inputRef = useRef(null)

  const uploadImage = async (e)=>{
    const files = inputRef.current.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "publicaciones");
    setloading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dlnt393h1/image/upload",
      {
        method: "POST",
        body: data,
      }
    )
    const file = await res.json();
    setPost(file.secure_url)
    setloading(false)
    return file.secure_url
  }


  return (
    <div>
        <CancelItem />
        Uploadpage
        <form></form>
        <AcceptItem />
    </div>
  )
}

export default Uploadpage