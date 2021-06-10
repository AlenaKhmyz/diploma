
import React, { useCallback, useState, useEffect } from 'react';
import './styles.css';
import { useSelector, useDispatch  } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { ROUTES } from '../../const';
import { changePhoneAction, changePasswordAction, signIn} from '../../actions';


const Login = () => {
    const user = useSelector((state) => state.login.user)
    const [redirect, setRedirect] = useState(false);

    const redirectOnSignIn= () => {
        setRedirect(true) 
      }
  
      useEffect( () => {
        if (user) {
          redirectOnSignIn()
        } else {
          setRedirect(false)
        }
      }, [user]) 

    const dispatch = useDispatch()

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = async () => {
        dispatch(signIn({phone,password}))
    }


    return(
        <div className="page">
            <div className="page-sign-in">
                <div className="decor">
                    <div className="form-left-decoration"></div>
                    <div className="form-right-decoration"></div>
                    <div className="circle"></div>
                    <div className="form-inner">
                    <h3>Don't forget that Alcohol helps to remove the Stress the Bra, the Panties and Many other Problems.</h3>
                        <input
                            type="text"
                            placeholder="phone"
                            className="form-phone"
                            onChange={(event) => setPhone(event.target.value)}
                            value={phone}
                        />
                        <input
                            type="text"
                            placeholder="password"
                            className="form-password"
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                        />
                        <button className="form-button" onClick={onLogin}>Sign in</button> 
                        {redirect && <Redirect to = "/"/>}
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Login