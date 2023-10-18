import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

function BarChart() {
  const [person, setPerson] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const baseUrl = 'http://127.0.0.1:8000/api/cost/';

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
    <div className='container'>
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        person.map((perso) => (
          <div key={`person-${perso.id}`} className="person-item">
            <ul>
              {Object.entries(perso).map(([field, value]) => (
                <li key={`field-${field}`}>
                  {`${field} = ${value}`}
                </li>
              ))}
            </ul>
            {/* Add a horizontal line after each item */}
            <hr className="horizontal-line" />
          </div>
        ))
      )}
    </div>
  );
}

export default BarChart;
