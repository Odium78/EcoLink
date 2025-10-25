import NavButton from "./NavButton"
import MobileWindow from "./MobileWindow"

function MobileRender({ 
  items = [{
    id: 15, 
    title: "SDG 15 — Life on Land", 
    desc: `Protect, restore and promote sustainable use of terrestrial ecosystems sustainably manage forests combat desertification restore degraded land and soil and halt biodiversity loss. In short: healthy forests, soils, and biodiversity that support people's livelihoods and climate resilience.`,
    image: "https://placehold.co/400x600"
  }],
  nextId = "#6",
  last = false,
  isSources = false
}) {

  return items.map((i, index) => {
    let msg = ""

    // what is this
    switch (i.id) {
      case 6:
        msg = `<strong>1. PRO-WATER (Philippines) — integrated community program</strong>
        A UN joint programme that expanded access to water/sanitation in poor Philippine
municipalities using local planning, hygiene promotion in schools/health centres,
and strengthening local water service governance (Localized Customer Service
Code). Showed gains in service access and community participation.

<strong>2. Metro Manila water-security analysis (policy case study)</strong>
Academic/SDG analyses of Metro Manila’s 2019 water interruptions highlight
governance, infrastructure, and resource management failures — used as an SDG-
aligned learning case on resilience, planning and equity in urban water supply.

<strong>3. Community stories (grassroots impact)</strong>
    <li><strong>Localized Customer Service Code (LCSC)</strong> — small water systems where
communities co-designed service agreements with providers women’s groups and
poor households helped shape priorities and monitoring, improving reliability and
accountability</li>
    <li><strong>School-based hygiene campaigns in PRO-WATER</strong> — students and parent-teacher
associations became hygiene champions, reducing open defecation and improving
household practices.</li>`
        break
      case 13:
        msg = `<strong>1. Mainstreaming climate adaptation in local City/Barangays</strong>
        A multi-stakeholderprogramme that integrated climate risk assessments into local development plans, updated zoning and infrastructure design standards, and 
        financed nature-based solutions (urban greening, retention ponds) to reduce flood 
        risk. The process improved coordination across municipal departments and 
        unlocked conditional national adaptation funds.
        
        <strong>2. Community-based coastal protection with mangrove restoration</strong>
        A coastal barangay combined community mangrove rehabilitation with livelihood support (eco-tourism and sustainable aquaculture). This reduced shoreline erosion, increased fish nursery habitat, and generated alternative income streams that made households less vulnerable to storm impacts.

        <strong>3. Early-warning systems and barangay-level disaster preparedness</strong>
        A barangay-level project that upgraded local early-warning technology, trained volunteer response teams, and ran school-based preparedness drills. The combined interventions reduced property loss and improved evacuation times during successive storm events.`
        break
      case 14:
        msg = `<strong>1. Mangrove restoration, Philippines — Wetlands International scaling project</strong>
A community-driven, science-backed mangrove restoration program in the
Philippines combined local ecological knowledge, integrated aquaculture
approaches, and policy engagement to restore mangroves at scale while improving coastal livelihoods and resilience to storms. (Practical lessons on co-management
and finance).

<strong>2. Equator Initiative community fisheries case</strong>
Documented community-managed coastal fisheries where local fishers used
participatory management and small no-take zones to recover stocks and increase
incomes — an example of community stewardship aligned to SDG14.

<strong>3. Community stories (grassroots impact)</strong>
<li><strong>Fishers’ cooperative that restored reef/mangrove linkages — local associations</strong>
that combined gear restrictions, seasonal closures, and mangrove rehabilitation
saw improved catches and diversified income (ecotourism or mariculture).</li>
<li><strong>Women-led nursery & planting teams — in many Philippine sites, women’s groups</strong>
run mangrove nurseries, linking restoration to local food security and alternative
livelihoods.</li>`
        break
      case 15:
        msg = `<strong>1. Community forestry in Nepal (Tarpakha community forest)</strong>
        Research shows community forestry models that devolve management rights to
local user groups can restore forest cover, improve livelihoods, and meet SDG-15
objectives — an example of participatory governance delivering ecological and
social outcomes.

<strong>3. Community stories (grassroots impact)</strong>
<li><strong>Forest user groups managing commons</strong> — in Nepal and other countries, forest
user groups that manage harvesting rules and regeneration activities report
improved woodfuel availability, biodiversity recovery, and shared income from non-
timber forest products.</li>
<li><strong>Equator Initiative winners & community projects</strong></li>Multiple local projects worldwide that restore forests, protect endangered species, and create green jobs
have been profiled as community success stories linking SDG15 to livelihoods.`
        break
      case 16:
          msg = `<a href="https://www.un.org/sustainabledevelopment/water-and-sanitation" target="_blank">
  Martin. (2025, September 10). Goal 6: Water and Sanitation - United Nations Sustainable Development. United Nations Sustainable Development.
</a>
<a href="https://globalgoals.org/goals/6-clean-water-and-sanitation" target="_blank">
  Goal 6: Clean water and sanitation - The Global Goals. (2024, January 23). The Global Goals.
</a><a href="https://www.sdgfund.org/case-study/formulation-localized-customer-service-code-philippines" target="_blank">
  Formulation of a localized customer service code in the Philippines. (2018, May 14). Sustainable Development Goals Fund.
</a>
<a href="https://www.un.org/sustainabledevelopment/goal-14-life-below-water" target="_blank">
  Yinuo. (2024, April 30). Goal 14: Life Below Water - United Nations Sustainable Development. United Nations Sustainable Development.
</a>
<a href="https://www.wetlands.org/case-study/scaling-science-based-mangrove-restoration-in-the-philippines" target="_blank">
  Wetlands International. (2025, March 20). Scaling science-based mangrove restoration in the Philippines - Wetlands International.
</a>
<a href="https://www.equatorinitiative.org/" target="_blank">
  Equator Initiative – The Equator Initiative brings together the United Nations, governments, civil society, businesses and grassroots organizations to recognize and advance local sustainable development solutions for people, nature and resilient communities. (n.d.).
</a>
<a href="https://sdgs.un.org/goals/goal15" target="_blank">
  Goal 15 | Department of Economic and Social Affairs. (n.d.).
</a>
<a href="https://www.adb.org/publications/mainstreaming-climate-adaptation-philippines" target="_blank">
  Asian Development Bank. (2020). Mainstreaming climate adaptation in local development planning: Lessons from the Philippines. ADB Publications.
</a>
<a href="https://www.denr.gov.ph" target="_blank">
  DENR - Department of Environment and Natural Resources. (2021). Community-based coastal protection and mangrove rehabilitation projects in the Philippines.
</a>
<a href="https://www.undp.org" target="_blank">
  United Nations Development Programme (UNDP). (2022). Youth and climate action: Empowering youth climate champions in Asia-Pacific.
</a>
<a href="https://www.fao.org" target="_blank">
  Food and Agriculture Organization (FAO). (2021). Climate-smart agriculture case studies in Southeast Asia. FAO Regional Office for Asia and the Pacific.
</a>
<a href="https://www.unwomen.org" target="_blank">
  UN Women. (2020). Women, resilience and climate action in the Philippines: Case studies and policy recommendations. UN Women Regional Office for Asia and the Pacific.
</a>
<a href="https://sdgs.un.org/goals/goal13" target="_blank">
  United Nations. (2023). Goal 13: Climate action. United Nations Sustainable Development Goals.
</a>
`
        break
      default:
        msg = `Message not found!`
    }

    return (
      <div key={i.id}
        id={`sdg${i.id}`}
        className="">
            <div className="flex flex-col justify-center items-center h-screen snap-center">
              {!isSources && <div className="flex flex-col">
                    <img src={i.image} className="h-60 w-90 object-cover rounded-xl [object-position:center_60%]  shadow-2xl shadow-slate-700"></img>
                </div>}
                <h1 className="text-xl font-bold text-shadow-md text-shadow-violet-400 mt-25">{i.title}</h1>
                <div className="flex flex-col px-6 py-5">
                    <h3 className="text-center text-sm">
                        {i.desc}
                    </h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                    {isSources ? <MobileWindow desc={msg} title="Open Links"/> : <MobileWindow desc={msg}/>}
                </div>
                <div className="flex items-center ">
                    <NavButton dest="#sdglist" icon="↑" />
                    {!last && <NavButton dest={nextId} icon="↓" />}
                </div>
            </div>
        </div>
    )
  })
}

export default MobileRender
