import React,{useState} from 'react'


const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //write code to handle login
  const handleAdminLogin = async() => {
    if(!email || !email.includes('@')){
      alert("Not a valid email address");
      return;
    }
    const data = {
      Email : email,
      Password : password
    }
    try{
      const response = await fetch("http://localhost:8000/test",{
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    if(responseData.success && !responseData.error) window.location.href ='/adminProfile';
    else if(!responseData.success && !responseData.error) alert("Incorrect password! Try again...");
    else if(!responseData.success && responseData.error) alert("you are not registered admin!");
    }catch(err){
      console.log(err);
    }
  };
  
  return (
    <div>
       <div className='login'>
    <div className="login-container">
      <div className="login-card">
        <h2 className='heading'>Admin Login</h2>
        
        <br/>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button onClick={handleAdminLogin}>Submit</button>
          <button  className="openModalBtn">Forgot Password</button>
        </div>
      </div>
    
    </div>
   </div>
    </div>
  )
  }

export default AdminLogin