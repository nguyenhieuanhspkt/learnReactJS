import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';


export default function UpdateXampp() {
    //declare variable
    let navigate = useNavigate();

    const [Ten, setTen] = useState('');
    const [Permission, setPermission] = useState('');
    const [Password, setPassword] = useState('');
    const [CreateBy, setCreateBy] = useState('');

    const [id, setId] = useState(null);
    useEffect(() => {
        setId(localStorage.getItem('ID'));
        setTen(localStorage.getItem('Ten'));
        setPermission(localStorage.getItem('Permission'));
        setPassword(localStorage.getItem('Password'));
        setCreateBy(localStorage.getItem('CreateBy'))
}, []);
    

    //code the Update
    const updateAPIDataXampp = () => {
        

        axios.put(`http://localhost:4000/api/tblnguoithuchien/${id}`, {
            
            Ten,
            Permission,
            Password,
            CreateBy
        })
    .then(()=> {
        navigate('/Xampp')
    })
    }
    //code the cancelcontrollerFucntion

    const cancel = () => {
        navigate('/Xampp')
    }

    //code the UI
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Ten</label>
                    <input placeholder='ten' value={Ten} onChange={(e) => setTen(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Permission</label>
                    <input placeholder='Permission' value = {Permission} onChange={(e) => setPermission(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' value = {Password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>CreateBy</label>
                    <input placeholder='CreateBy' value = {CreateBy} onChange={(e) => setCreateBy(e.target.value)}/>
                </Form.Field>
              

                <Button onClick ={updateAPIDataXampp} type='submit'>Submit</Button>
                <Button onClick ={cancel} type=''>Cancel</Button>

            </Form>
        </div>
    )
}