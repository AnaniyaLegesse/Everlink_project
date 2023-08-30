import React from 'react';
import "../css/login.css";

function Login() {
  return (
    <div className='loginBody'>

	
        <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true" className='loginLable'>Sign up</label>
					<input className='loginInput' type="text" name="txt" placeholder="User name" required=""/>
					<input className='loginInput' type="email" name="email" placeholder="Email" required=""/>
					<input className='loginInput' type="password" name="pswd" placeholder="Password" required=""/>
					<button className='loginBtn'>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label for="chk" aria-hidden="true" className='loginLable'>Login</label>
					<input className='loginInput' type="email" name="email" placeholder="Email" required=""/>
					<input className='loginInput' type="password" name="pswd" placeholder="Password" required=""/>
					<button className='loginBtn'>Login</button>
				</form>
			</div>
		</div>
	</div> 
  )
}

export default Login;