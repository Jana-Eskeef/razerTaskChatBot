import React, { useState } from 'react';

const SignUp = ({ setPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [name, setname] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [confirmpassworderror, setconfirmpassworderror] = useState('');
  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    // Check if password length is at least 6 characters
    return password.length >= 6;
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Reset email error when email format is valid
    setEmailError(validateEmail(e.target.value) ? '' : 'Please enter a valid email address');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Update password error dynamically
    setPasswordError(e.target.value.length < 6 ? 'Password must be at least 6 characters long' : '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    // Dummy authentication
    if ((email && password)&& (password===confirmpassword)&&(validateEmail(email) && validatePassword(password))) {
      setPage('chat');
    }
    else
    {
      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address');
      }
      if (!validatePassword(password)) {
        setPasswordError('Password must be at least 6 characters long');
      }
      setconfirmpassworderror("Passwords Dont Match!");
    }
    
  };

  return (
    <div className=" main flex  justify-center  items-center min-h-screen  bg-black">
      <div className="Sign-in bg-slate-700 border-2 rounded-xl shadow-md  max-w-md">
        <div className='image'><img  className="amazio mb-6 "alt='Amazio' src='./amazio.png'></img></div>
        <h2 className="text-2xl text-white font-weight:600 mt-6">Sign Up</h2>
        <p className="text-white mb-4">Welcome back to AMAIZO</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
          <button
        className=" mt-1 w-96 text-white p-2 rounded-full border-white border-2">
        Sign Up With Google</button>
          <button
        className=" mt-1 w-96 text-white p-2 rounded-full border-white border-2">
        Sign Up With Apple</button>
          <button
        className=" mt-1 w-96 mb-6 text-white p-2 rounded-full border-white border-2">
        Sign Up With Single Sign</button>
            <input
              type="text"
              className="w-full p-2 border mb-4 border-gray-300 rounded-xl "
              value={name}
              placeholder='Username'
              onChange={(e) => setname(e.target.value)}
              required
            />
           <div className='flex flex-col'>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-xl"
                value={email}
                placeholder='Email'
                onChange={handleEmailChange}
                required
              />
              {emailError && <span className='text-red-500 text-sm mt-1'>{emailError}</span>}
            </div>
          </div>
          <div className="mb-4">
            
          <div className='flex flex-col'>
              <input
                type="password"
                placeholder='Password'
                className="w-full p-2 border border-gray-300 rounded-xl"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              {passwordError && <span className='text-red-500 text-sm mt-1'>{passwordError}</span>}
            </div>
           
          </div>
          <div className="mb-4">
            <div className='flex flex-col'>
              <input
              type="password"
              placeholder=' confirm password'
              className="w-full p-2 border border-gray-300 rounded-xl "
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
              required
            />
            {confirmpassworderror && <span className='text-red-500 text-sm mt-1'>{confirmpassworderror}</span>}</div>
            
          </div>
          <button type="submit" className="w-full sign text-white mt-4 p-2 rounded-xl">Create Your New Account</button>
        </form>
        <div className="mt-4 text-center">
       
        </div>   <button onClick={() => setPage('signin')} className="text-white">Already Have An Account? Sign in</button>
      </div>
    </div>
  );
};

export default SignUp;