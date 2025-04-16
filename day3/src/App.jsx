
import { useFormState } from 'react-dom'
import './App.css'

function App() {
  const [username, setusername] = useFormState('')
  function submithandler(e){
    e.preventDefault() // to prevent reload which the default behaviour of form submission
    console.log("form submitted")
  }
 
  
  return (
    <>
     <div>hello ji kese ho </div>

     <form onSubmit={(e) => {
       submithandler(e)}}>
        <input 
         onChange={(e) => {
          console.log(e.target.value)
         }
        }
        type="text" placeholder='username' />
        
        <button type="submit">submit</button>
     

     </form>
    </>
  )
}

export default App
