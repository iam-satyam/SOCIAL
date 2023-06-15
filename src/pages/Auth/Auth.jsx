import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className="Auth">
    <div className='a-left'>
        <img src={Logo} alt=''></img>
        <div className='WebName'>
            <h1> Media By Satyam</h1>
            <h6>Connecting World.....</h6>
        </div>
    </div>
<SignUp/>
      
    </div>
  )
}
function LogIn(){
    return(<div className='a-right'>
    <form className='infoForm authForm'>
        <h3>LOG IN</h3>
        
        <div>
            <input type="text" className='infoInput' name="username" placeholder='UserName'/>
        </div>
        
        <input type="text" placeholder='Password' className='infoInput' name='password'/>
       
<div className=''><span style={{fontSize:'13px'}}>Dont't have an Account. Sign Up!</span></div>
   <button className='button infobtn' type="submit">Login</button> </form>
</div>

    )
}
function SignUp(){
    return(
    <div className='a-right'>
        <form className='infoForm authForm'>
            <h3>Sign Up</h3>
            <div>
                <input type="text" placeholder='First Name' className='infoInput' name='firstname'/>
                <input type="text" placeholder='Last Name' className='infoInput' name='lastname'/>
            </div>
            <div>
                <input type="text" className='infoInput' name="username" placeholder='UserName'/>
            </div>
            <div>
            <input type="text" placeholder='Password' className='infoInput' name='password'/>
            <input type="text" placeholder='COnfirm Password' className='infoInput' name='confirmpass'/></div>
 <div className=''><span style={{fontSize:'12px'}}>Already have a account. Login!</span></div>
       <button className='button infobtn' type="submit">SignUp</button> </form>
    </div>)
}

export default Auth
