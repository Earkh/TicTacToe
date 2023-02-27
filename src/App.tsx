import './App.css'
import Header from './layout/Header';
import Main from "./layout/Main";

const App = () => {

  return (
    <div className="w-screen h-screen bg-slate-800 text-slate-100 flex flex-col">
      <Header></Header>
      <Main></Main>
    </div>
  )
}

export default App
