import './App.css';
import Form from './components/Form';
import TextBox from './components/TextBox';

function App() {
  return (
    <div className='web-container'>
      <div className='center-container'>
        <TextBox />
        <Form />
      </div>
      <footer>
        <p className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
          Coded by <a href="#">Rachaphol Plookaom</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
