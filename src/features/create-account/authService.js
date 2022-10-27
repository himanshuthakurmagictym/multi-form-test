const BASE_URL = 'http://localhost:5000/api/';
const signup = async(formdata)=>{

    const body = new FormData();
    body.append("name", formdata.name);
    body.append("avatar", formdata.avatar);
    body.append("email", formdata.email)
    body.append("password", formdata.password)
    body.append("confirmPassword", formdata.confirmPassword)
    const response =  await fetch(BASE_URL+ 'auth/signup', {
            method:"POST",
            body
        }).then(res => res.json());

        if(response.data){
             localStorage.setItem('user', JSON.stringify(formdata))
             return response.data;   
        }
        // return formdata;
}

const authService = {
    signup,
}

export default authService