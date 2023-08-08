import '../css/error-alert.css';

const ErrorAlert = ({ errorText }) => {
    if (!errorText){
      return null
    }
    return (
      <div className='error-alert'>
        <div className='error-text'>
          {errorText}
        </div>
      </div>
    )
  }

export default ErrorAlert;