import { Form } from "antd";
import { Link } from "react-router-dom";
import Input from "antd/lib/input/Input";
import React from "react";
import '../resources/authentication.css'

function Register() {

  const onFinish=(values)=>{
    console.log(values)
  }
  return (
    <div className="register">
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-5">
         <div className="lottie"><dotlottie-player
            src="https://lottie.host/b1400339-2c40-4989-aec8-d8f50e93dd68/9WgqbhtMVW.lottie"
            background="transparent"
            speed="1"
            // style="width: 300px; height: 300px"
            loop
            autoplay
          ></dotlottie-player>
          </div>
        </div>
        <div className="col-md-5">
          <Form layout="vertical" onFinish={onFinish}>
          <h1>EXPENSE-TRACKER REGISTER</h1>
          <br></br><br></br>
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>

            <Form.Item label="Password" name="Password">
              <Input />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">Already Registered , Click Here To Login</Link>
              <button className="primary" type="submit">REGISTER</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
