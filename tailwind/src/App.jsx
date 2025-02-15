import { Button } from "./components/Button"
import { Input } from "./components/Input"

function App() {

  return (
  <div className="h-screen bg-blue-700">
    <Input  placeholder={"enter date"}></Input>

    <Button disabled={true}>Continue</Button>

  </div>
  )
}

export default App
