import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import Home from '../Home/Home';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Login = () => {
    const {user,setIsLoading,setUser,sendVerification,signInWithGoogle} = useAuth()
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from ||'/home';
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
    const user = result.user;
    setUser(user)
    sendVerification()
    history.push(redirect_uri);
  })
  .finally(()=>setIsLoading(false))
    }
    return (
      <div>
         {
             user.email? <Home></Home>
             :
             <div>
             <Navigation/>
              <div className="my-5">
                  <br />
                  <br />
              <div className="text-center my-5">
             <button className="btn btn-outline-primary" onClick={handleGoogleLogin}><img src="https://i.ibb.co/mRvYX9k/google-logo.png"/>Login with google</button>
               </div>
              </div>
               <Footer/>
             </div>


         }
      </div>
    );
};

export default Login;