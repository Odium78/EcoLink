import { ReactTyped } from "react-typed"
import NavButton from "./NavButton"
import SDG6 from "./assets/sdg6.png"
import SDG13 from "./assets/sdg13.png"
import SDG14 from "./assets/sdg14.png"
import SDG15 from "./assets/sdg15.png"
import Carousel from "./Carousel"


function MobileSDGList() {
    const landingText = ["SDGs", "Communities", "Data"]

    return (
        <div className="flex flex-col justify-center items-center h-screen snap-center" id="sdglist">
            <h1 className="text-md font-bold text-shadow-md text-shadow-violet-400">Definition and Connectedness of each SDG</h1>
            <Carousel>
                    <a href="#sdg6"><img src={SDG6} className="w-40 h-40 rounded-3xl shadow-2xl shadow-sky-500"></img></a>
                    <a href="#sdg13"><img src={SDG13} className="w-40 h-40 rounded-3xl shadow-2xl shadow-green-800"></img></a>
                    <a href="#sdg14"><img src={SDG14} className="w-40 h-40 rounded-3xl shadow-2xl shadow-blue-400"></img></a>
                    <a href="#sdg15"><img src={SDG15} className="w-40 h-40 rounded-3xl shadow-2xl shadow-lime-500"></img></a>
            </Carousel>
            <div className="flex flex-col text-center">
                <p className="text-xs px-5">{`(Swipe Left and Right)`}</p>
                <p className="text-xs text-center font-semibold">Above are concise definitions and how these Sustainable Development Goals (SDGs) interrelate</p>
            </div>
            <NavButton dest="#home" icon="↑" className=""></NavButton>
        </div>
  )
}

export default MobileSDGList