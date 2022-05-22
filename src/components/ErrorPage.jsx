import { Link } from "react-router-dom";

export const ErrorPage = ({ error }) => {
  if (error === undefined) {
    return (
      <div className="error-card">
        <h1 className="error-head">404: Not Found</h1>
        <h3 className="error-text">Something went wrong.</h3>
        <p>
          <Link to="/">Go Home</Link>
        </p>
      </div>
    );
  } else if (error.response.status === 404 || error.response.status === 400) {
    return (
      <div className="error-card">
        <h1 className="error-head">
          {error.response.status}: {error.response.msg}
        </h1>
        <h3 className="error-text">Something went wrong.</h3>
        <p>
          <Link to="/">Go Home</Link>
        </p>
      </div>
    );
  } else {
    return (
      <div className="error-card">
        <h1 className="error-head">Uh oh!</h1>
        <h3 className="error-text">Something went wrong.</h3>
        <p>
          <Link to="/">Go Home</Link>
        </p>
      </div>
    );
  }
};

export default ErrorPage;
