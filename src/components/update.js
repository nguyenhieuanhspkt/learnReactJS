import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';


export default function Update() {
    //declare variable
    let navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
}, []);
    

    //code the Update
    const updateAPIData = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(checkbox);
        axios.put(`https://657b8e49394ca9e4af147ca2.mockapi.io/LearnReact/v1/users/${id}`, {
            firstName,
            lastName,
            checkbox
        })
    .then(()=> {
        navigate('/read')
    })
    }
    //code the cancelcontrollerFucntion

    const cancel = () => {
        navigate('/read')
    }

    //code the UI
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value = {lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick ={updateAPIData} type='submit'>Submit</Button>
                <Button onClick ={cancel} type=''>Cancel</Button>

            </Form>
        </div>
    )
}