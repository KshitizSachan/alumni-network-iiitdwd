import React from "react";

const ErrorBoundaryPage = ({ error, reset }) => {
    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            {/*<p>Error Message: {error.message}</p>*/}
            {/*<button onClick={reset}>Try again</button>*/}
        </div>
    );
};

export default ErrorBoundaryPage;
