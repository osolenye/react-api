import images from "./assets/images.png"
import "./hero.css"

function Hero() {
  return (
    <div className="hero">
      <div className="image_wrapper">
        <img src={images} alt=""/>
      </div>

      <h1 className="header">Online Experiences</h1>
      <p className="hero_text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </div>
  )
}

export default Hero
