import React from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
import google from "../images/icons/google.png";
import facebook from "../images/icons/facebook.png";
// toastify
import { ToastContainer, toast } from "react-toastify";
//import { useContext } from "react";
//const {TransactionContext} = require("../context/Transactions");

const Signup = () => {
  const [formInput, setFormInput] = React.useState({ firstName: "", lastName: "", email: "", password: "",confirmPassword: "" });
  const [file, setFile] = React.useState(null);
  // const {currentAccount,setUser} = useContext(TransactionContext);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e) => {
    const file=e.target.files[0];
    const base= await convertToBase64(file);
    setFile(base);
    };


  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror=()=>resolve(reader.error);
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if(formInput.password!==formInput.confirmPassword) return alert("Passwords do not match");

      const res=await axios.post ("http://glhapi.ekanatechnologies.in/api/auth/register", {name:`${formInput.firstName} ${formInput.lastName}`,
       email: formInput.email, password: formInput.password,
        profilePicture: file,
      });
      // const res=await axios.post ("http://localhost:5000/api/auth/register", {name:`${formInput.firstName} ${formInput.lastName}`,
      //   email: formInput.email, password: formInput.password,
      //     profilePicture: file,
      //     account:currentAccount});
     
    if (res.statusText === "Created") {
      // setUser(res.data.user);
      setFormInput({ firstName: "", lastName: "", email: "", password: "",confirmPassword: "" });
      setFile(null);
      toast.success("Account created successfully");
      navigate("/login");
    }  
    } catch (error) {
      console.log(error);
      
    }
  };


  return (
    <div>
      <ToastContainer />
      <div className="rn-breadcrumb-inner ptb--30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <h5 className="title text-center text-md-start">Sign Up</h5>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-list">
                <li className="item">
                  <Link to="/">Home</Link>
                </li>
                <li className="separator">
                  <i className="feather-chevron-right"></i>
                </li>
                <li className="item current">Sign Up</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="login-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            <div className="offset-2 col-lg-4 col-md-6 ml_md--0 ml_sm--0 col-sm-12">
              <div className="form-wrapper-one registration-area">
                <h4>Sign up</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input type="text" id="firstName" name="firstName" onChange={handleChange} value={formInput.firstName}/>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="sastName" className="form-label">
                      Last name
                    </label>
                    <input type="text" id="sastName" value={formInput.lastName} name="lastName" onChange={handleChange}/>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input type="email" id="exampleInputEmail1" name="email" onChange={handleChange} value={formInput.email}/>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="newPassword" className="form-label">
                      Create Password
                    </label>
                    <input type="password" id="newPassword" name="password" onChange={handleChange} value={formInput.password}/>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Re Password
                    </label>
                    <input type="password" id="exampleInputPassword1" name="confirmPassword" onChange={handleChange} value={formInput.confirmPassword}/>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Upload Profile Picture
                    </label>
                    <input type="file" id="exampleInputPassword1" onChange={handleFileUpload} />
                  </div>
                  {file && (
                    <div className="mb-5">
                      <img src={file} alt="profile" height={150} width={150}/>
                    </div>
                  )}

                  <div className="mb-5 rn-check-box">
                    <input
                      type="checkbox"
                      className="rn-check-box-input"
                      id="exampleCheck1"
                    />
                    <label
                      className="rn-check-box-label"
                      htmlFor="exampleCheck1"
                    >
                      Allow to all tearms & condition
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary mr--15">
                    Sign Up
                  </button>
                  <Link to="/login" className="btn btn-primary-alta">
                    Log In
                  </Link>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="social-share-media form-wrapper-one">
                <h6>Another way to sign up</h6>
                <p>
                  {" "}
                  Lorem ipsum dolor sit, amet sectetur adipisicing elit.cumque.
                </p>
                <button className="another-login login-facebook">
                  {" "}
                  <img className="small-image" src={google} alt="" />{" "}
                  <span>Log in with Google</span>
                </button>
                <button className="another-login login-facebook">
                  {" "}
                  <img className="small-image" src={facebook} alt="" />{" "}
                  <span>Log in with Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;