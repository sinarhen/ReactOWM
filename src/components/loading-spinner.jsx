// src/components/loading-spinner.jsx

// Import the CSS styles for the LoadingSpinner component
import '../css/spinner.css';

// LoadingSpinner component definition
const LoadingSpinner = () => {
  return (
    /*
        The LoadingSpinner component displays a container that holds a spinning animation (spinner).
        The spinner is created using CSS animations defined in the 'spinner.css' stylesheet.
    */
    <div className="spinner-container">
      <div className="loading-spinner"></div> {/* The spinner element */}
    </div>
  );
};

// Export the LoadingSpinner component for use in other parts of the application
export default LoadingSpinner;