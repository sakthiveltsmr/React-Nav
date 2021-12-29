import { Link } from "react-router-dom";
import Profile from "../images/profile.jpg";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about">
        <img src={Profile} alt="me" className="img1" />
        <p className="para">
          <strong className="st">Name : </strong>Sakthivel
        </p>
        <p className="para">
          <strong className="st">Age : </strong>24
        </p>
        <p className="para">
          <strong className="st">positon : </strong>WebDeveloper
        </p>
      </div>
    </>
  );
}
