import axios from "axios";
import { Form, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from ".././store/actions/authActions";
function Login() {
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const sendDatatoApp = async () => {
    const values = await form.validateFields();

    try {
      let res = await axios.post("http://localhost:8080/api/auth/signin", {
        username: values?.username,
        password: values?.password,
      });

      if (res?.status === 200) {
        dispatch(login(res?.data?.accessToken));
        console.log(res?.data, "response login");
      }

      console.log(res, "success result");
    } catch (er) {
      console.log(er?.response?.data?.message);
      setErrorMsg(er?.response?.data?.message);
    }
  };

  const [form] = Form.useForm();

  return (
    <>
      <div class="admin-deshboard-login-area">
        <div class="container">
          <div className="row">
            <div className="login-area mb-4">
              <h4>Log in</h4>
            </div>
            <Form onSubmit={sendDatatoApp} form={form} layout="vertical">
              <Form.Item
                name="username"
                label="User Name"
                rules={[
                  {
                    required: true,
                    message: "Please input the username!",
                  },
                ]}
              >
                <Input placeholder="User Name" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input the password!",
                  },
                ]}
              >
                <Input placeholder="Password" />
              </Form.Item>

              <p className="text-danger">{errorMsg}</p>

              <Form.Item>
                <button
                  onClick={sendDatatoApp}
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm"
                >
                  Login
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

// src/components/LoginForm.js

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from ".././store/actions/authActions";

// const LoginForm = () => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({ username: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login("ddsvdsjkvnsdkjnk"));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="username"
//         placeholder="Username"
//         value={formData.username}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={handleChange}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;
