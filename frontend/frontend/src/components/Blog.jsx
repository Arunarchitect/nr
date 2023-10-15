import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Blog() {
    const [person, setPerson] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const baseUrl = 'https://127.0.0.1:8000/api/blog/';

        const getPerson = async () => {
            try {
                const response = await axios.get(baseUrl);
                setPerson(response.data);
            } catch (err) {
                setError(err);
                console.error(err); // Log the error to the console
            }
        }

        getPerson(); // Call the getPerson function to make the GET request

    }, []);

    return (
        <div>
            <div className="container">
                {error ? (
                    <div>Error: {error.message}</div>
                ) : (
                    person.map((perso, index) => (
                        <div key={perso.id} className="person-item">
                            <div className="left-column p-3">
                                <img src={perso.image} alt="" className="justify-center" />
                            </div>
                            <div className="right-column">
                                <div className="email">
                                    <h1>{perso.title}</h1>
                                    <h2>{perso.subtitle}</h2>
                                    <p>{perso.content}</p>
                                </div>
                            </div>
                            {/* Add a horizontal line after each item */}
                            <hr className="horizontal-line" />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Blog;
