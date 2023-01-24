import React from 'react';
import './index.css';
// TODO: import useFormik from formik library
import { useFormik } from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values =>{
      console.log('form:', values);
      alert("Login Successful");
    },
    validate: values => {
      let errors = {};
      if(!values.name) errors.name = 'Required';
      if(!values.email) errors.email = 'Required';
      if(!values.password) errors.password = 'Required';
      return errors;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div class="container">

        <div class="item">Name</div>
        <div class="item">
          <input name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
          {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div>: null}
        </div>

        <div class="item">Email</div>
        <div class="item">
        <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? (<div style={{color: 'red'}}>{formik.errors.email}</div>) : null}
        </div>

        <div class="item">Password</div>
        <div class="item">
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? (<div style={{color: 'red'}}>{formik.errors.password}</div>) : null}
        <br /><br />
        </div>

        <div class="item"></div>
        <div class="item"><span align="center">
        <button id="submitBtn" type="submit">Submit</button></span></div>

        </div>
      </form>
    </div>
  );
}

export default App;


