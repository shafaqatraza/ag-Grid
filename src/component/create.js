import React,{useState} from 'react'
import axios from 'axios';

export const Create = () => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault();
        let response = axios.post('http://localhost:4000/programs/',{name,status})
    }
  
    return (
        <div className="container">
            <p className="text-secondary mb-2 mt-2">Programs</p>
            <form onSubmit={e => { submitHandler(e) }}>
                <div className="form-group mb-2">
                    <input  className="form-control" type="text" onChange={e => setName(e.target.value)} name="name" value={name}
                    placeholder="Enter Name" />
                </div>
                <div className="form-group mb-2">
                    <select  className="form-control" onChange={e => setStatus(e.target.value)} name="status" 
                    >
                        <option value="">Select Status</option>
                        <option value="0">Disabled</option>
                        <option value="1">Active</option>
                    </select>
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        </div>
    )
}
