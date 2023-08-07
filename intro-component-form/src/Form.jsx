import './Form.css';

function Form() {
  return (
    <div>
      <div className="ads-box"> Try it free 7 days then $20/mo. thereafter </div>
      <form className='form-box'>
        <label>
          <input type='text' placeholder='FirstName'/>
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
        <button type='submit'>Claim your free trial</button>
      </form>
      <p className='description'>
        By clicking the button, you are agreeing to our <a href='#'>Terms and Services</a>.
      </p>
    </div>
  );
}

export default Form;
