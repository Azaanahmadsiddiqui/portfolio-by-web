import Image from "next/image"
import "../style/Hero.css"

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-boxes-con">
            {/* left side */}
            <div>
                <Image className="hero-image" src={"/image.jpg"} width={250} height={210} alt="Profile"></Image>
            </div>
            {/* right side */}
            <div className="hero-right-div">
                <h1 className="title-hero">I am Shehla Zeeshan Front-end Developer</h1>
                <p className="des-hero">I am Shehla Zeeshan Front-end Developer. I am a student at GIAIC Quater 2, pursuing a course in Artificial Intelligence, Web 3.0, & Metaverse.</p>
                 <button className="hero-btn">HIRE ME</button>
            </div>
        </div>
    </div>
  )
}

export default Hero