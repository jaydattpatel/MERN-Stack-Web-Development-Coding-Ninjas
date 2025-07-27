import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <Link to="/timer">Timer</Link>
      <Link to="/counter">Counter</Link>
    </div>
  );
};
