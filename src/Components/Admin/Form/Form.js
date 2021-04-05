import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';


const Form = () => {
    const [imageUrl, setImageUrl] = useState(null)

    const handleUpload = (e) => {
        const image = new FormData();
        image.set("key" , '939f3dce73a9bc7f6dff177e09a6f903')
        image.append('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload' , image)
        .then( img => setImageUrl(img.data.data.display_url)) 
    }
    console.log( imageUrl )
    
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const eventData = {
            price: data.price,
            authorName : data.authorName,
            name: data.bookName,
            imageUrl: imageUrl
        }
        const url = `http://localhost:5000/addBooks`
        fetch(url, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log(res ,'res'))
        console.log(data)
    };
    return (
        
        <form onSubmit={handleSubmit(onSubmit) } autoComplete='off' >
          <h3>Add Book</h3>
            <div className="formInput" >
                    <input name="bookName" placeholder="Book Name" ref={register}  />
                    <input authorName="authorName" placeholder="Author Name" ref={register}  />
                    <input price="price" placeholder="Price" ref={register}  />
                    <input onChange={handleUpload} name="image" type="file" />
            </div>
          <input className="submitBtn" type="submit" />
        </form>
    );
};

export default Form;