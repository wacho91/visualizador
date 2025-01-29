import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div>
        <h1>
            VirtualR build tools
            <span>
                {"  "}
                for developers
            </span>
        </h1>
        <p>
            Empower your creativity and bring your VR app ideas to life with our
            intuitive development tools. Get started today and turn your imagination
            into immersive reality!
        </p>
        <div>
            <a href="#">
                Start for free
            </a>
            <a href="#">
                Documentation
            </a>
        </div>
        <div>
            <video>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <video>
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}

export default Hero
