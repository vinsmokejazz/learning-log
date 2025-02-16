import Button from "./components/Button"
import { Input } from "./components/Input"
import Otp from "./components/Otp"

function App() {

  return (
  <div className="h-screen bg-blue-700">
    <Input  placeholder={"enter date"}></Input>

    <Button disabled={false}>Continue</Button>
    <Otp number={6}></Otp>

    
  
   


  </div>
  )
}

export default App
