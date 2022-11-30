import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
// import LoginData from '../assets/accountData'

import Auth from '../utils/auth'
import { LOGIN_USER } from '../utils/mutations'


export default function LoginComponent() {

  const [userInput, setUserInput] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

const [loginUser] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      
      const { data } = await loginUser({
        variables: { ...userInput },
      });


      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserInput({
      username: '',
      email: '',
      password: '',
    });
  };
    

  return (
      <>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Credentials are not correct. Please try again!
          </Alert>
          <Form.Group>
            <Form.Label htmlFor='username'>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your username'
              name='username'
              onChange={handleInputChange}
              value={userInput.username}
              required
            />
            <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
          </Form.Group>
  
          <Form.Group>
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Your password'
              name='password'
              onChange={handleInputChange}
              value={userInput.password}
              required
            />
            <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
          </Form.Group>
          <Button
            disabled={!(userInput.username && userInput.password)}
            type='submit'
            variant='success'>
            Submit
          </Button>
        </Form>
      </>
    );
}






// export default function LoginComponent({ UserLogin, error }) {
//   const [info, setInfo] = useState({ username: "", password: "" });

//   const submitForm = e => {
//     e.preventDefault();

  
//     console.log(info);
//   }

//   return (
//     <div className="container pt-5 centered-contact text-center form-margin">
//       <div className="jumbotron">
//         <h1>Login</h1>
//         <div className="card">
//           <div className="card-body">
//             <form onSubmit={submitForm}>
//               <div>
//                 <label htmlFor='username'>
//                   Username:
//                   <input
//                     className="form-control"
//                     type="text"
//                     id="username"
//                     name="username"
//                     onChange={e => setInfo({ ...info, username: e.target.value })}
//                     value={info.username}
//                   />
//                 </label>
//               </div>
//               <div className="">
//                 <label htmlFor='password'>
//                   Password:
//                   <input
//                     className="form-control"
//                     type="password"
//                     id="password"
//                     name="password"
//                     onChange={e => setInfo({ ...info, password: e.target.value })}
//                     value={info.password}
//                   />
//                 </label>
//               </div>
//               <button className="btn btn-primary" type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }