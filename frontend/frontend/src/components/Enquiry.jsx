import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Enquiry() {
    const [budget, setBudget] = useState(''); // State to store the selected budget

    useEffect(() => {
        document.title = 'GetQuote';
    });

    const handleBudgetChange = (event) => {
        setBudget(event.target.value); // Update the budget state when an option is selected
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card">
                        <h3 className="card-header">Get Quote!</h3>
                        <div className="card-body">
                            <form action='https://getform.io/f/5600d5a2-1142-4820-af52-0fa6b4ef945f' method='POST' encType='multipart/form-data'>
                                <div className="mb-3">
                                    <label htmlFor="exampleTextInput" className="form-label">Name</label>
                                    <input type="text" name='name' className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleTextInput" className="form-label">Place</label>
                                    <input type="text" name='place' className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleTextInput" className="form-label">Phone Number</label>
                                    <input name='phone' type="number"  maxLength="10" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Building type</label>
                                    <select
                                        name="type"
                                        value={budget}
                                        onChange={handleBudgetChange}
                                        className="form-select"
                                    >
                                        <option value="residential">Residential</option>
                                        <option value="educational">Educational</option>
                                        <option value="commercial">Commercial</option>
                                        <option value="industrial">Industrial</option>
                                        <option value="institutional">Institutional</option>
                                        <option value="assembly">Assembly</option>
                                        <option value="mercantile">Mercantile</option>
                                        <option value="storage">Storage</option>
                                        <option value="hazardous">Hazardous</option>
                                        <option value="special">Special</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Enquiry</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Enquiry;
