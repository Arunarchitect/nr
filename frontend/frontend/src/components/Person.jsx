import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const baseUrl= 'http://127.0.0.1:8000/api/react/'
function Person() {
    const [person, setPerson] = useState([])
    const getPerson = async () => {
        const response = await axios.get(baseUrl)
        setPerson(response.data)
    }

    useEffect(() => {
        getPerson();
    },[])
    return (
        <div className="container">
            <h3 className=" pb-1 mb-4">Professionals<a href="#" className="float-end">See All</a></h3>
            {
                person.map((perso,index)=> (
                    <Card key={perso.id} className='m-2 rounded shadow-lg' style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={perso.image} />
                    <Card.Body>
                        <Card.Title>{perso.full_name}</Card.Title>
                        <Card.Text>{perso.email}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                ))
            }
            
        </div>

    );
  }
  
  export default Person;
  