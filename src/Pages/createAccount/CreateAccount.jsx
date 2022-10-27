import React, {useState,useEffect} from 'react';
import './createAccount.css';
import AccountForm from "../../components/AccountForm";
import PersonalDetail from "../../components/PersonalDetail";
import EmployeeDetails from "../../components/EmployeeDetails";
import DocumentUpload from "../../components/DocumentUpload";
import Completed from "../../components/Completed";
import {useSelector, useDispatch} from "react-redux"
import { signup } from '../../features/create-account/authSlice';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CreateAccount() {
  const [step, setStep] = useState(1);
  const [formdata, setFormdata] = useState({
    name:'',
    email:'',
    password:'',
    avatar:'',
    confirmPassword:''
  })
  const [formErrors, setFormErrors] = useState({ name:'',
  email:'',
  password:'',
  avatar:'',
  confirmPassword:''});
  const dispatch = useDispatch();
  const {isLoading, isSuccess, isError} = useSelector(state => state.auth);

  useEffect(()=>{

    if(isSuccess){
      toast.success("Signup has been successfully ", { autoClose: 2000 });
     
    }
    if(isError){
      toast.error("Error has Occur ", { autoClose: 2000 });
    }
  },[isSuccess, isError])

  useEffect(()=>{
    if(formdata.confirmPassword !== formdata.password){
      setFormErrors({password:"password dont matched"})
    }else{
      setFormErrors({password:""})
    }

  },[formdata.confirmPassword, formdata.password])

  const nextstep =(e)=>{
    if(formdata.confirmPassword == formdata.password){
      setStep(pre=>pre+1);
    }
      
  }
  const handleChange = (e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value })
  }
  const handleImage = (e)=>{
   // const finalUrl = URL.createObjectURL(e.target.files[0])
    setFormdata({...formdata,[e.target.name]:e.target.files[0]})

  }

  const handleSubmit = ()=>{
     dispatch(signup(formdata)); 
  }

  

  return (
    <div className="container mb-5">
      <div className='row mt-5'>
        <div className='col-12 '>
          <div className='logo text-center'>
           
            <img src="./Assets/Logo.png" width="200px" height="100%" />
          </div>
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col-md-8 offset-md-2 col-xs-12'>
          <div className='main'>
            <div className='process-header'>
              <ToastContainer />
            {/* accordion start */}
            <div className="steps">
              <progress className="progress" value={step*25} max="99"></progress>
             
              <div className="stepcontainer">  
              <div className={`step ${step ==1?"activeStep":""}`}>1</div>
                  <div className='stepDetails'>
                    <div className="stepheading"> STEP 1</div>
                    <div className="stepBody">CREATE YOUR ACCOUNT PASSWORD</div>
                  </div>
              </div>

              <div className="stepcontainer">  
                <div className={`step ${step ==2?"activeStep":""}`}>2</div>
                  <div className='stepDetails'>
                    <div className="stepheading"> STEP 2</div>
                    <div className="stepBody">PERSONAL INFORMATION</div>
                  </div>
              </div>

              <div className="stepcontainer">  
                <div className={`step ${step ==3?"activeStep":""}`}>3</div>
                  <div className='stepDetails'>
                    <div className="stepheading"> STEP 3</div>
                    <div className="stepBody">EMPLOYEE DETAILS</div>
                  </div>
              </div>

              <div className="stepcontainer">  
                <div className={`step ${step ==4?"activeStep":""}`}>4</div>
                  <div className='stepDetails'>
                    <div className="stepheading"> STEP 4</div>
                    <div className="stepBody">UPLOAD DOCUMENTS</div>
                  </div>
              </div>

              <div className="stepcontainer">  
                <div className={`step ${step ==5?"activeStep":""}`}>5</div>
                  <div className='stepDetails'>
                    <div className="stepheading"> STEP 5</div>
                    <div className="stepBody">COMPLETED<br/><br/></div>
                  </div>
              </div>

            </div>
            {/* accordion stop */}
            </div>

            <div className='process-body'>
              {step ==1?
                <AccountForm nextstep={nextstep} handleChange={handleChange} handleImage={handleImage} formErrors={formErrors}/>
              :""}
               {step ==2?
                <PersonalDetail nextstep={nextstep}/>
              :""}

               {step ==3?
                   <EmployeeDetails nextstep={nextstep}/>
               :""}

                {step ==4?
                    <DocumentUpload handleSubmit={handleSubmit} nextstep={nextstep}/>
                :""}

                {step ==5?
                    <Completed />
                :""}
            </div>
            <div>
             
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
