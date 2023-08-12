import './Form.css';

function Form() {
  return (
    <div className='right-box'>
      <div className="ads-box"> <div className="title-ads-box"> Try it free 7 days </div> <div className="subtitle-text-box">then $20/mo. thereafter</div>  
      </div>
      
      <form className='form-box'>
        <label>
          <input type='text' placeholder='First Name'/>
        </label>
        <label>
          <input type='text' placeholder='Last Name' />
        </label>
        <label>
          <input type='email' placeholder='Email Address' />
        </label>
        <label>
          <input type='password' placeholder='Password' />
        </label>
        <button type='submit' className='submit-button'>CLAIM YOUR FREE TRIAL</button>
        
        <p className='description'>
        By clicking the button, you are agreeing to our <a href='#'>Terms and Services</a>.
      </p>
      </form>
    </div>
  );
}

export default Form;
