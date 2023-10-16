import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



function Register() {
    const [full_name, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const navigate = useNavigate();
  
    const RegisterInfo = async () => {
      let formfield = new FormData();
  
      formfield.append('full_name', full_name);
      formfield.append('email', email);
      formfield.append('password', password);
  
      await axios({
        method: 'post',
        url: 'https://modelflick.com/api/react/',
        data: formfield,
        timeout: 5000,
      }).then((response) => {
        console.log(response.data);
        window.alert('You are successfully registered');
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
                    <h3 className="card-header">User Register</h3>
                    <div className="card-body">
                    <form>
                        <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                        <input onChange={(e) => setFullname(e.target.value)}  name="full_name" type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)}  name="email" type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} name="password" type="password" className="form-control" />
                        </div>
                        <button onClick={RegisterInfo} type='button'  className="btn btn-primary">Register</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Register;