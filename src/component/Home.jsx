import "./Home.css";
import profile from "../images/resumeProfile.jpg";
function Home() {
  return (
    <div>
      <div className="div">
        <h1 className="h">Welcome to Sakthi</h1>
        <img src={profile} alt="me" className="img" />
        <p className="p">hai iam sakthi i'm learning to React</p>
      </div>
    </div>
  );
}
export default Home;
