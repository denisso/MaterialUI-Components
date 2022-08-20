import { Link } from "react-router-dom";
export const NotFound404 = () => {
  return (
    <>
      <div>Not Found</div>
      <div>
        <Link to="/">Back to Home Page</Link>
      </div>
    </>
  );
};
