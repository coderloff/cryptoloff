import Header from "./components/Header"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <>
    <Sidebar/>
    <Header />
    <Main coinId="ethereum"/>
    </>
  )
}

export default App