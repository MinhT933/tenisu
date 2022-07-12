
import Switch from "@material-ui/core/Switch";
import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

async function LoginAcc( username , password, navigate) {
  //  const [username , setUserName] =useState("");
  //  const [password , setPassword] =useState("");
   //call api login 
   let data = {username, password};
   let result = await axios.post("http://www.tennisv2.somee.com/api/v1.0/User/Login",data);
   console.log("results"+ result);
   navigate("/owner");


    // axios.post('http://www.tenisuu.somee.com/api/v1.0/User/Login',{
    //   username: username,
    //   password: password
    // }).then(user => {

    //   this.setState({ 
    //     initialState,
    //     submit: true
    //   });
    //   this.setState({ loading: false});
    //   console.log('User Login', user)
    // }).catch((response) => {
    //   // ? Show to user that request is failed
    //   this.setState({ errors:[response ]})
    //   this.setState({ loading: false });
    //   console.log('request failed', response)});
    
}

const signInUserSchema = yup.object().shape({
  // email: yup
  //   .string()
  //   .required("* Email is required")
  //   .email("* Email is invalid"),
  username: yup.string().required("* Username is required"),
  password: yup.string().required("* Password is required"),
});
const label = { inputProps: { "aria-label": "Switch demo" } };
export default function LoginCO() {
  const navigate = useNavigate();
  const handleLogIn = async (values, { resetForm }) => {
    console.log(values);
    try {
      if (values.username === "admin") {
        navigate("/admin");
      } else if (values.username === "owner") {
        navigate("/owner");
      }
    } catch (err) {
      // notifiError("Login Fail!");
    }
    resetForm({ values: "" });
  };
  return (
    <div className="loginstyle container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Login Your CO Account</h3>
          </div>
          <div className="card-body">
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              validationSchema={signInUserSchema}
              onSubmit={handleLogIn}
              render={(formilProps) => (
                <Form>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user" />
                      </span>
                    </div>
                    <Field
                      name="username"
                      type="text"
                      className="input"
                      onChange={formilProps.handleChange}
                    />
                  </div>
                  <ErrorMessage name="username">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-key" />
                      </span>
                    </div>
                    <Field
                      name="password"
                      type="password"
                      className="input"
                      data-type="password"
                      onChange={formilProps.handleChange}
                    />
                  </div>
                  <ErrorMessage name="password">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>

                  <div className="switch">
                    <Switch {...label} defaultChecked />
                    <p>Stay Signed in </p>
                  </div>

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Button
                      variant="contained"
                      sx={{ mb: "10px" }}
                      type="submit"
                      onClick={()=>{
                        LoginAcc(formilProps.values.username,formilProps.values.password,navigate)
                      }}
                    >
                      Login
                    </Button>
                    <Link to={"/loginRoleAD"}>
                    <Button
                      sx={{ backgroundColor: "white", color: "black", mb: "10px" }}
                    >
                      owner login

                    </Button>
                    </Link>
                  </Box>
                </Form>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
