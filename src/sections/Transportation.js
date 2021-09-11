import React, { useState, useRef, useEffect } from "react"
import "./Transportation.css"
import { inject, observer } from "mobx-react"
import { autorun } from "mobx"
import PropTypes from "prop-types"
import LaiChiKokModal from "../components/LaiChiKokModal"
import { scrollToRef } from "../helpers/Anim"

function Transportation({ store }) {
  const [modalState, toggleModal] = useState(false)
  const closeModal = () => {
    toggleModal(false)
  }
  const scrollRef = useRef()
  useEffect(
    () =>
      autorun(() => {
        if (store && store.dest && store.dest === "transportation") {
          scrollToRef(scrollRef)
          store.scrollTo(null)
        }
      }),
    [store] // note empty dependencies
  )
  return (
    <section className="transportation" ref={scrollRef}>
      <div className="transportation-second-diagonal">
        <div className="container transportation-container">
          <div className="container-padding">
            <h1 className="qualification-title retroshadow">前往方法</h1>
            <div className="card transportation-card">
              <div className="transportation-card-flex transportation-card-flex-up">
                <div className="transportation-card-pic-1" />
                <div className="transportation-card-text text-right">
                  由荔枝角港鐵站B1出口出發
                  <br />
                  <br />
                  <button
                    className="a-btn"
                    onClick={() => toggleModal(!modalState)}
                  >
                    按此查閱詳情
                  </button>
                  <br />
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
      {modalState && <LaiChiKokModal closeAction={() => closeModal()} />}
    </section>
  )
}

export default inject("store")(observer(Transportation))
