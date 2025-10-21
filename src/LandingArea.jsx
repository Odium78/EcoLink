import { ReactTyped } from "react-typed";
import NavButton from "./NavButton";

function LandingArea() {
    const landingText = ["SDGs", "Communities", "Data"]

    return (
    <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-9xl font-bold text-shadow-lg text-shadow-violet-400">EcoLink</h1>
        <p className="text-2xl mt-2 font-bold">Connecting&nbsp;
            <ReactTyped
                strings={landingText}
                typeSpeed={50}
                backSpeed={40}
                backDelay={1000}
                loop
            />&nbsp;for Climate Resilience.
        </p>
        <NavButton/>
    </div>
  )
}

export default LandingArea