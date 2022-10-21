import React from 'react'

function EmployeeDetails({nextstep}) {
    const onSubmit = (e)=>{
        e.preventDefault();
        nextstep();
    }
  return (
    <div className="container">
      <div className="col-12 text-center">
        <h5 className="formHeading text-center">
           EMPLOYEE DETAILS
        </h5>
        <form onSubmit={onSubmit}>
        <button type="submit" className='btn btn-primary text-right'>SAVE & NEXT </button>
        </form>
     </div>
    </div>
  )
}

export default EmployeeDetails