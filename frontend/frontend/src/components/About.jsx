import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const baseUrl = 'http://127.0.0.1:8000/api/react/';

function About() {
    const [person, setPerson] = useState([]);

    const getPerson = async () => {
        const response = await axios.get(baseUrl);
        setPerson(response.data);
    }

    useEffect(() => {
        getPerson();
    }, []);

    return (
        <div>
            <div className="container">
                {person.map((perso, index) => (
                    <div key={perso.id} className="person-item">
                        <div className="left-column">
                            <img src={perso.image} alt="" className="justify-center " />
                        </div>
                        <div className="right-column">
                            <div className="email">{perso.email}</div>
                        </div>
                        {/* Add a horizontal line after each item */}
                        <hr className="horizontal-line" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
