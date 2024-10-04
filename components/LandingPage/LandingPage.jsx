import "./LandingPage.css";
import hero_Video from "../../public/student_with_phone.mp4";
const LandingPage = () => {
  return (
     <div className="hero-container">
        <video
          className="hero-video"
          src={hero_Video}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay">
          <h1>Welcome to Our Landing Page</h1>
          <p>Connecting Students with Knowledge</p>
          <button>Get Started</button>
        </div>
       
      </div>
  )
}

export default LandingPage