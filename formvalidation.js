const displayMsg=(msg,id,colorName)=>{
    document.getElementById(id).innerHTML=msg
    document.getElementById(id).style.color=colorName
    document.getElementById(id).style.fontWeight='bold'
}
const fnameValidate=()=>{
    const first_name=document.getElementById('fname').value 
    if(first_name==""){
        // msg,id and color 
        displayMsg('firstname is mandatory','fnameMSg','red')
        return false
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
          displayMsg('fistname only accepts lowercase alpahbets','fnameMsg','red')
          return false
    }
    else if(first_name.length <3){
        displayMsg('firstname must be more than 2 characters','fnameMsg','red')
        return false
    }
    else{
        displayMsg('valid firstname','fnameMsg','green')
        return true
    }
}
const MnameValidate=()=>{
    const Middle_name=document.getElementById('Mname').value 
    if(Middle_name==""){
        // msg,id and color 
        displayMsg('Middlename is mandatory','MnameMSg','red')
        return false
    }
    else if(!Middle_name.match(/^([a-zA-Z])+$/)){
          displayMsg('Middlename only accepts lowercase alpahbets','MnameMsg','red')
          return false
    }
    else if(Middle_name.length <3){
        displayMsg('Middlename must be more than 2 characters','MnameMsg','red')
        return false
    }
    else{
        displayMsg('valid Middlename','MnameMsg','green')
        return true
    }
}
const lnameValidate=()=>{
    const last_name=document.getElementById('lname').value 
    if(last_name==""){
        // msg,id and color 
        displayMsg('lastname is mandatory','lnameMSg','red')
        return false
    }
    else if(!last_name.match(/^([a-zA-Z])+$/)){
        displayMsg('lastname only accepts lowercase alpahbets','lnameMsg','red')
        return false
  }
    else if(last_name.length <3){
        displayMsg('lastname must be more than 2 characters','lnameMsg','red')
        return false
    }
    else{
        displayMsg('valid lastname','lnameMsg','green')
        return true
    }
}
const emailValidate=()=>{
    const email= document.getElementById('email').value
    if(email==""){
        displayMsg('email must be required','emailMsg','red')
        return false
    }
    else if(!email.match(/^([a-z0-9])[a-z0-9\.\_]+\@+([a-z])+\.+([a-z])/)){ 
    displayMsg('Invalid Email format','emailMsg','red')
    return false
    }
    else{
        displayMsg('Valid Email format','emailMsg','green')
        return true
    }
}
const pwdValidate=()=>{
    const pwd= document.getElementById('pwd').value
    if(pwd==""){
        displayMsg('Password must be required','pwdMsg','red')
        return false
    }
    else if(!pwd.match(/^(?=.*[a-z])(?=.*[0-9])(?=.*[@#$_!?]).{8,100}$/)){
        displayMsg('Weak Password and should use the special characters,numbers and alphabets','pwdMsg','red')
        return false
    }
    else {
        displayMsg('Valid Password format','pwdMsg','green')
        return true
    }
}
const cpwdValidate=()=>{
    const pwd= document.getElementById('pwd').value
    if(cpwd==""){
        displayMsg('Password must be required','pwdMsg','red')
        return false
    }
    else if(pwd!==cpwd){
        displayMsg('password and confirm password doesnot matched','cpwdMsg','red')
        return false
    }
    else {
        displayMsg('Password and confirm password matched','cpwdMsg','green')
        return true
    }
}
const validForm=()=>{
    if(fnameValidate() && MnameValidate() && lnameValidate() && pwdValidate() &&cpwdValidate())
    {
        return true
    }
    else{
        return false 
    }
}