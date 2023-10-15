import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



function Post() {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
  
    const navigate = useNavigate();
  
    const PostInfo = async () => {
      let formField = new FormData();
  
      formField.append('title', title);
      formField.append('subtitle', subtitle);
      formField.append('content', content);
      if (image !== null){
        formField.append('image', image)
      }
  
      await axios({
        method: 'post',
        url: 'https://127.0.0.1:8000/api/blog/',
        data: formField,
        timeout: 5000,
      }).then((response) => {
        console.log(response.data);
        window.alert('You have successfully Posted');
        navigate('/');
      }).catch((error) => {
        console.error(error);
      });
    }
  

    return(
        <div className="container mt-4">
            <div className="row justify-content-center"> {/* Added 'justify-content-center' class */}
                <div className="col-6">
                <div className="card">
                    <h3 className="card-header">Post Blog</h3>
                    <div className="card-body">
                    <form>
                        <div className="mb-3">
                        <label htmlFor="exampleTextInput" className="form-label">Title</label>
                        <input onChange={(e) => setTitle(e.target.value)}  name="title" type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleTextInput" className="form-label">Subtitle</label>
                        <input onChange={(e) => setSubtitle(e.target.value)}  name="email" type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleTextInput" className="form-label">Content</label>
                        <input onChange={(e) => setContent(e.target.value)} name="content" type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleTextInput" className="form-label">Image</label>
                        <input onChange={(e) => setImage(e.target.files[0])} name="image" type="file" className="form-control" />
                        </div>
                        <button onClick={PostInfo} type='button'  className="btn btn-primary">Post</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Post;