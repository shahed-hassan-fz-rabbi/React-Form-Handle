
import './App.css'

function App() {
  
  return (
    <>
    <h1>React Form</h1>

    <form action="">
      <label htmlFor="name">Name</label>
      <input type="text" id='name' name='name' />

      <label htmlFor="email">Email</label>
      <input type="email" id='email' name='email' />
      
      <label htmlFor="password">Password</label>
      <input type="password" id='password' name='password' />
      <button type='submit'>Submit</button>

    </form>
     
      
     
    </>
  )
}

export default App
