import React, {useState, useEffect} from 'react'

function AccountForm({nextstep, handleChange, handleImage, formErrors}) {
  const [avator, setAvator] = useState("")
  const onSubmit = (e)=>{
      e.preventDefault();
      nextstep();
  }
const handleImageFile = (e)=>{
  handleImage(e);
  setAvator(e.target.files[0])
}

  return (
    <>
  
     <h5 className="formHeading text-center">
                CREATE ACCOUNT
     </h5>
     <p className='formParah'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam harum pariatur excepturi omnis error rerum nihil sed libero tempora commodi. Accusamus ducimus autem totam consequatur odit, hic esse est dolor!</p>
              <form onSubmit={onSubmit}>
                <div className="row">
                <div className="col-md-3 text-center">
                <input type="file" accept="image/png, image/gif, image/jpeg" name="avatar"  className='fileuploader' onChange={handleImageFile}/>
                <img src={avator?URL.createObjectURL(avator):`./Assets/Avatar.png`} width="170px" height="170px" />
                <p className='uploaderHeading'>Upload</p>
               
                </div>
                  <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label className='form-label'>Name</label>
                        <input type="text" placeholder='Name' className='form-control'
                        name="name"
                        onChange={handleChange}
                        required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className='form-label'>E-mail</label>
                        <input type="email" placeholder='E-mail' 
                          name="email"
                          required
                         onChange={handleChange}className='form-control'/>
                         
                      </div>

                  </div>

                  <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label className='form-label'>Password</label>
                        <input type="password" minLength="8" placeholder='Password' 
                          name="password"
                         onChange={handleChange}
                         required
                         className='form-control'/>
                         
                      </div>
                      <div className="form-group mb-3">
                        <label className='form-label'>Password</label>
                        <input type="password" minLength="8" placeholder='ConfirmPassword' 
                          name="confirmPassword"
                         onChange={handleChange}
                         required
                         className='form-control'/>
                       <div className='error'>
                       {formErrors.password}
                       </div>
                      </div>
                      <div className='submitButton'>
                          <button  type="submit" className='btn btn-primary text-left '>SAVE & NEXT</button>
                      </div>
                 </div>
                 
                </div>

                 
     
                
              </form>
    </>
  )
}

export default AccountForm