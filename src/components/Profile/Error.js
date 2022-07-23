const Error = ({ error }) => (
  <>
    <h1>GitHub Profile</h1>

    {error && (
      <div>
        {error.type === 404 ? (
          <p>User not found!</p>
        ) : (
          <p>Oh no! Something went wrong. Try again later!</p>
        )}
      </div>
    )}
  </>
);

export default Error;