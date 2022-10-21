import React from 'react'

function DocumentUpload({handleSubmit, nextstep}) {
  const onSubmit = (e)=>{
    e.preventDefault();
    handleSubmit();
    nextstep();
}
  return (
    <div className="container">
      <div className="col-12 text-center">
        <h5 className="formHeading text-center">
         DOCUMENT UPLOAD
        </h5>
        <form onSubmit={onSubmit}>
        <button type="submit" className='btn btn-success text-right'>Completed</button>
        </form>
     </div>
    </div>
  )
}

export default DocumentUpload