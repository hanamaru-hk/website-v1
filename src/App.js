import React from "react"
import { Provider, observer } from "mobx-react"
import Nav from "./sections/Nav"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Qualification from "./sections/Qualification"
import Course from "./sections/Course"
import Transportation from "./sections/Transportation"
import Contact from "./sections/Contact"
import Copyright from "./sections/Copyright"
import { Store } from "./Store"

import "./App.css"

const store = new Store()

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Nav />
        <Hero />
        <About />
        <Qualification />
        <Course />
        <Transportation />
        <Contact />
        <Copyright />
      </Provider>
    </div>
  )
}

export default observer(App)
