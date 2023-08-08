// src/components/loading-spinner.jsx

// Import the CSS styles for the Heading component
import '../css/heading.css';

// Heading component definition
const Heading = ({ title, description }) => {
  return (
    /*
       The Heading component displays a styled container containing a title and description.
       The title and description are provided as props and are dynamically inserted into the JSX.
    */
    <div className="heading">
      <h1 className="heading-title">
        {title}
      </h1>
      <p className="heading-description">
        {description} 
      </p>
    </div>
  );
};

// Export the Heading component for use in other parts of the application
export default Heading;