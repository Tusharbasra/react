import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import './assets/fontawesome-free-5.13.0-web/css/all.css';

const Login = () =>{
    return(
        <div className='login'>
            <div className='cont'>
            <form className='container'>
            <h2 style={{color:'white',position:'absolute',top:'64px',fontFamily:"arial", fontSize:"29px",marginLeft:"53px"}}>Log in</h2>
                <div className='email'>
                    
                    <input type="email" className="form-control" placeholder="ENTER YOUR EMAIL"/>
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className='password'>
                   
                    <input type="password" className="form-control" placeholder='ENTER YOUR PASSWORD'/>
                </div>
                {/* <div>
                    <label>DATE</label>
                    <input type="date" className="form-control" placeholder='ENTER DATE'/>
                </div> */}
               <button type="submit" className="btn btn-danger" style={{position:"absolute",top:"236px",marginLeft:"52px",width:"70%",height:"35px"}}>Log in</button>
               <button type="submit" className="btn btn-primary" style={{position:"absolute",top:"335px",marginLeft:"217px",width:"161px",height:"35px"}}><i class="fab fa-facebook-square" style={{fontSize:"19px"}}></i></button>
               <button type="submit" className="btn btn-light" style={{position:"absolute",top:"335px",marginLeft:"42px",width:"170px",height:"35px"}}><i class="fab fa-google" style={{fontSize:"19px"}}></i></button>
            </form>
            </div>
        </div>
    );
}

export default Login;