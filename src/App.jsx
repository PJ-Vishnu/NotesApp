import React from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NoteList from './Components/NoteList'
import NewNote from './Components/NewNote'
import ViewNote from './Components/ViewNote'

function App() {
  return (
    
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<NoteList/>}></Route>
        <Route path="newnote" element={<NewNote/>}></Route>
        <Route path="viewnote/:id" element={<ViewNote/>}></Route>
        </Routes>
        </BrowserRouter>
  )
}

export default App
