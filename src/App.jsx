import { BlueCard } from "./Components/BlueCard"
import { RevenueCard } from "./Components/RevenueCard"

function App() {


  return (
    <>
    <div className="grid grid-cols-3">
      <BlueCard title={"Next payout"} amount={"2,313.24"} orderCount={"23"} timeTitle={"Next payout date: " } time={"Today, 04:00 PM"}/>
      <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"}/>
    </div>
      
    </>
  )
}

export default App
