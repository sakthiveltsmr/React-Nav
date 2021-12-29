import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <Link to="/home">
          <p className="para">Home</p>
        </Link>
        <Link to="/about">
          <p className="para">About</p>
        </Link>
      </div>
    </>
  );
}
