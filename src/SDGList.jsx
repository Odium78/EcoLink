import { ReactTyped } from "react-typed"
import NavButton from "./NavButton"
import SDG6 from "./assets/sdg6.png"
import SDG13 from "./assets/sdg13.png"
import SDG14 from "./assets/sdg14.png"
import SDG15 from "./assets/sdg15.png"
import AcademicSourcesPic from "./assets/AcademicSourcesPic.png"

function SDGList() {
    const landingText = ["SDGs", "Communities", "Data"]

    return (
        <div className="flex flex-col justify-center items-center h-screen snap-center" id="sdglist">
            <h1 className="text-5xl font-bold text-shadow-md text-shadow-violet-400">Definition and Connectedness of each SDG</h1>
            <div className="flex justify-center items-center h-90">
                <div className="group flex flex-col p-2">
                    <a href="#sdg6"><img src={SDG6} className="sdg shadow-2xl shadow-sky-500"></img></a>
                </div>
                <div className="group flex flex-col p-2">
                    <a href="#sdg13"><img src={SDG13} className="sdg shadow-2xl shadow-green-800"></img></a>
                </div>
                <div className="group flex flex-col p-2">
                    <a href="#sdg14"><img src={SDG14} className="sdg shadow-2xl shadow-blue-400"></img></a>
                </div>
                <div className="group flex flex-col p-2">
                    <a href="#sdg15"><img src={SDG15} className="sdg shadow-2xl shadow-lime-500"></img></a>
                </div>
                <div className="group flex flex-col p-2">
                    <a href="#sdg16"><img src={AcademicSourcesPic} className="sdg shadow-2xl shadow-zinc-400"></img></a>
                </div>
            </div>
            <p className="text-xl pt-2">Above are concise definitions and how these Sustainable Development Goals (SDGs) interrelate</p>
            <NavButton dest="#home" icon="↑" className=""></NavButton>
        </div>
  )
}

export default SDGList