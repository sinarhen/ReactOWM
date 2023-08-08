// src/components/error-alert.jsx

// Import the CSS styles for the ErrorAlert component
import '../css/error-alert.css';

// ErrorAlert component definition
const ErrorAlert = ({ errorText }) => {
  // If errorText is falsy (e.g., an empty string or undefined), return null to render nothing
  if (!errorText) {
    return null;
  }

  // If errorText is truthy, render the error alert with the errorText content
  return (
    <div className='error-alert'>
      <div className='error-text'>
        {errorText} 
      </div>
    </div>
  );
};

// Export the ErrorAlert component for use in other parts of the application
export default ErrorAlert;