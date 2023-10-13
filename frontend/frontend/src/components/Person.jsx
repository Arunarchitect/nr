import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'

const viteLogo = "/static/vite.svg"

const baseUrl= 'http://127.0.0.1:8000/api'
function Person() {
    const [person, setPerson]=useState(null)
    useEffect(()=>{
        axios.get(baseUrl+'/react/').then((response)=>{
            setPerson(response.data)
        })
    },[])
    console.log(person)
    return (
        <div className="container">
            <h3 className=" pb-1 mb-4">Professionals<a href="#" className="float-end">See All</a></h3>
            <div className="row">
                <div className="col-md-3">
                    <div className ="card" >
                    <a href="#"><img src={viteLogo} className ="card-img-top" alt="..."/></a> 
                        <div className ="card-body">
                            <h5 className ="card-title"> <a href="#"> Blog Title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className ="card" >
                    <a href="#"><img src={viteLogo} className ="card-img-top" alt="..."/></a> 
                        <div className ="card-body">
                            <h5 className ="card-title"> <a href="#"> Blog Title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className ="card" >
                    <a href="#"><img src={viteLogo} className ="card-img-top" alt="..."/></a> 
                        <div className ="card-body">
                            <h5 className ="card-title"> <a href="#"> Blog Title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className ="card" >
                    <a href="#"><img src={viteLogo} className ="card-img-top" alt="..."/></a> 
                        <div className ="card-body">
                            <h5 className ="card-title"> <a href="#"> Blog Title</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }
  
  export default Person;
  