import { ReactTyped } from "react-typed"
import NavButton from "./NavButton"
import SDG6 from "./assets/sdg6.png"
import SDG13 from "./assets/sdg13.png"
import SDG14 from "./assets/sdg14.png"
import SDG15 from "./assets/sdg15.png"

function SDGList() {
    const landingText = ["SDGs", "Communities", "Data"]

    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen" id="sdglist">
                <h1 className="text-4xl font-bold text-shadow-md text-shadow-violet-400">Definition and Connectedness of each SDG</h1>
                <div className="flex justify-center items-center h-90">
                    <div className="flex flex-col p-2">
                        <img src={SDG6} className="sdg shadow-2xl shadow-sky-500"></img>
                        <p>Tool Tip</p>
                    </div>
                    <div className="flex flex-col p-2">
                        <img src={SDG13} className="sdg shadow-2xl shadow-green-800"></img>
                        <p>Tool Tip</p>
                    </div>
                    <div className="flex flex-col p-2">
                        <img src={SDG14} className="sdg shadow-2xl shadow-blue-400"></img>
                        <p>Tool Tip</p>
                    </div>
                    <div className="flex flex-col p-2">
                        <img src={SDG15} className="sdg shadow-2xl shadow-lime-500"></img>
                        <p>Tool Tip</p>
                    </div>
                </div>
                <p className="text-l pt-2">Below are concise definitions and how these Sustainable Development Goals (SDGs) interrelate</p>
            </div>
        </>
  )
}

export default SDGList