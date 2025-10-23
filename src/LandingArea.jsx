import { ReactTyped } from "react-typed";
import NavButton from "./NavButton";

function LandingArea() {
    const landingText = ["SDGs", "Communities", "Data"]

    return (
    <div className="flex flex-col justify-center items-center h-screen snap-center" id="home">
        <h1 className="text-[14rem] font-bold text-shadow-lg text-shadow-violet-400">EcoLink</h1>
        <p className="text-4xl font-bold mt-0">Connecting&nbsp;
            <ReactTyped
                strings={landingText}
                typeSpeed={50}
                backSpeed={40}
                backDelay={1000}
                loop
            />&nbsp;for Climate Resilience.
        </p>
        <NavButton dest="#sdglist"/>
    </div>
  )
}

export default LandingArea