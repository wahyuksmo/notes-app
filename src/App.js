import Notes from "./components/Notes";
import Navigasi from "./components/Navigasi";
import { Route, Routes } from "react-router-dom"
import "./App.css";




export default function App() {

  return (
    <>
    <Navigasi />
    <Routes>
      <Route path="/" element={<Notes/>} />
      {/* <Route path="/quranDetail/:id" element={<QuranDetail/>}  /> */}
    </Routes>
    </>
  )


}
