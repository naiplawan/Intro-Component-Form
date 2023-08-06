import './App.css'
import Form from './Form'
import TextBox from './TextBox'

function App() {

  return (
  <div className='web-container'>
    
   <div className='center-containner'>
   <TextBox/>
   <Form/>
   </div>
    <footer>
      <p className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </p>
    </footer>
  </div>
  )
}

export default App
