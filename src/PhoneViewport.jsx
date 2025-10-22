import MobileLandingArea from "./MobileLandingArea"
import MobileSDGList from "./MobileSDGList"
import cleanWaterPic from "./assets/cleanWaterPic.png"
import climateActionPic from "./assets/climateActionPic.png"
import lifeOnLandPic from "./assets/lifeOnLandPic.png"
import lifeBelowWaterPic from "./assets/lifeBelowWaterPic.png"
import MobileRender from "./MobileRender"


function PhoneViewport(){
      const sdg6 = [
    {
      id: 6,
      title: "SDG 6 — Clean Water and Sanitation",
      desc: `Availability and sustainable management of water and sanitation for all — i.e., universal,
equitable access to safely managed drinking water, adequate sanitation and hygiene;
sustainable water-resource management; wastewater treatment and reuse; and protection
of water-related ecosystems.`,
      image: cleanWaterPic
    },
  ]

  const sdg13 = [
    {
      id: 13,
      title: "SDG 13 — Climate Action",
      desc: `Take urgent action to combat climate change and its impacts — by strengthening resilience and 
      adaptive capacity to climate-related hazards and natural disasters, integrating climate change 
      measures into national and local policies, and improving education, awareness and institutional 
      capacity on climate change mitigation and adaptation.`,
      image: climateActionPic
    }
  ]

  const sdg14 = [
    {
      id: 14,
      title: "SDG 14 — Life Below Water",
      desc: `Conserve and sustainably use the oceans, seas and marine resources for sustainable
development — including reducing marine pollution, ending overfishing, protecting
coastal/marine ecosystems, and building resilience to ocean acidification and climate
of water-related ecosystems.`,
      image: lifeBelowWaterPic
    },
  ]

  const sdg15 = [
    {
      id: 15,
      title: "SDG 15 — Life on Land",
      desc: `Protect, restore and promote sustainable use of terrestrial ecosystems; sustainably
manage forests; combat desertification; restore degraded land and soil; and halt
biodiversity loss. In short: healthy forests, soils, and biodiversity that support people’s
livelihoods and climate resilience..`,
      image: lifeOnLandPic
    },
  ]

    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory snap-always scroll-smooth">
            <MobileLandingArea />
            <MobileSDGList />
            <MobileRender items={sdg6} nextId="#sdg13"/>
            <MobileRender items={sdg13} nextId="#sdg14"/>
            <MobileRender items={sdg14} nextId="#sdg15"/>
            <MobileRender items={sdg15} last={true}/>
        </div>
    )
}

export default PhoneViewport