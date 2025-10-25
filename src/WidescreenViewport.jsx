import LandingArea from "./LandingArea"
import SDGList from "./SDGList"
import Render from "./Render"
import cleanWaterPic from "./assets/cleanWaterPic.png"
import climateActionPic from "./assets/climateActionPic.png"
import lifeOnLandPic from "./assets/lifeOnLandPic.png"
import lifeBelowWaterPic from "./assets/lifeBelowWaterPic.png"
import Footer from "./Footer"

function WidescreenViewport(){
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

  const sdg16 = [
    {
      id: 16,
      title: "Academic Sources",
      desc: `Here are the studies and links mentioned in each studies, these are retrieved from various sources such as
      the official United Nation. The texts provided are clickable links.`
    },
  ]

  return (
    <>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory snap-always scroll-smooth">
        <LandingArea />
        <SDGList />
        <Render items={sdg6} nextId="#sdg13" />
        <Render items={sdg13} nextId="#sdg14" />
        <Render items={sdg14} nextId="#sdg15" />
        <Render items={sdg15} nextId="#sdg16" />
        <Render items={sdg16} last={true} isSources={true}/>
      </div>
      <Footer />
    </>
  )
}

export default WidescreenViewport