
import './App.css'

function App() {

  const handleSubmit = (e) => {
    e.preventDefault() // prevent the default form submission behavior

    //Way 1: using event.target
    // const form = e.target;
    // const name = form.name.value; // get the value of the input field with name 'name'
    // const emial = form.email.value; // get the value of the input field with name 'email'

    // console.log(name, emial);


    //Way 2: using FormData API

    const formData = new FormData(e.target); // create a FormData object from the form element
    const name = formData.get('name'); // get the value of the input field with name 'name'
    const email = formData.get('email'); // get the value of the input field with name 'email'

    console.log(name, email);

    

     
  }

  
  return (
    <>
    <h1>React Form</h1>

    <form onSubmit={handleSubmit} >
      <label htmlFor="name">Name</label>
      <input type="text" id='name' name='name' />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" id='email' name='email' />

      
      <br />
      <button type='submit'>Submit</button>

    </form>
     
      
     
    </>
  )
}

export default App
