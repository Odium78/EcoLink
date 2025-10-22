import { useMediaQuery } from "react-responsive"
import WidescreenViewport from "./WidescreenViewport"
import PhoneViewport from "./PhoneViewport"

function App(){
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? <PhoneViewport /> : <WidescreenViewport />
}

export default App