import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'

const baseUrl= 'http://127.0.0.1:8000/api/react/';
function Register(){
    const [personData, setpersonData] = useState({
        'full_name': '',
        'email': '',
        'password': ''
    })
    
    // change element value
    const handleChange=(event)=>{
        setpersonData({
            ...personData,
            [event.target.name]:event.target.value
        })
    }
    // submit form
    const submitForm = async () => {
        const personFormData = new FormData();
        personFormData.append('full_name', personData.full_name);
        personFormData.append('email', personData.email);
        personFormData.append('password', personData.password);
    
        try {
            const response = await axios.post(baseUrl, personFormData);
            console.log(response.data);
        } catch (error) {
            console.error("Error in registration:", error);
        }
    }
    useEffect(()=>{
        console.log(personData);
        document.title='Register';
    })
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
                        <input onChange={handleChange}  name="full_name" type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <input onChange={handleChange}  name="email" type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onChange={handleChange} name="password" type="password" className="form-control" />
                        </div>
                        <button onClick={submitForm} type="submit" className="btn btn-primary">Register</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Register;