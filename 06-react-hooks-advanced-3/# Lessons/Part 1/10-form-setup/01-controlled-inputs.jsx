/*
  Form - Setup
  - when we talk about "Form" -> we talk about "Controlled Input"


*/

const ControlledInputs = () => {
  return (
    <form className='form'>
      <h4>controlled inputs</h4>

      {/* Name */}
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input type='text' className='form-input' id='name' />
      </div>

      {/* Email */}
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input type='email' className='form-input' id='email' />
      </div>

      {/* Button */}
      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  )
}
export default ControlledInputs
