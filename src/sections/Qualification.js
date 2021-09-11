import React, { useRef, useEffect } from "react"
import "./Qualification.css"
import { inject, observer } from "mobx-react"
import { autorun } from "mobx"
import PropTypes from "prop-types"
import { scrollToRef } from "../helpers/Anim"

function Qualification({ store }) {
  const scrollRef = useRef()
  useEffect(
    () =>
      autorun(() => {
        if (store && store.dest && store.dest === "qualification") {
          scrollToRef(scrollRef)
          store.scrollTo(null)
        }
      }),
    [store] // note empty dependencies
  )
  return (
    <section className="qualification" ref={scrollRef}>
      <div className="qualification-second-diagonal">
        <div className="container qualification-container">
          <div className="container-padding">
            <div className="card qualification-card-background">
              <div className="qualification-flex">
                <div className="qualification-desc1" />
                <div className="qualification-desc2">
                  <h1 className="qualification-title retroshadow">導師資歷</h1>
                  本教室主要由以下背景導師組成：
                  <br />
                  <ul>
                    <li>香港中文大學日本研究碩士</li>
                    <li>
                      香港城市大學專上學院應用日語副文學士
                      <br />
                      （Distinction成績畢業）
                    </li>
                    <li>
                      香港城市大學社會科學
                      <br />
                      （亞洲及國際研究）榮譽學士
                    </li>
                    <li>持有日本語能力試驗一級證書（JLPT N1)</li>
                    <li>有豐富教授日語經驗</li>
                    <li>曾於日本留學</li>
                    <li>曾就職於日資公司</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Qualification.propTypes = {
  store: PropTypes.object,
}
Qualification.defaultProps = {
  store: null,
}

export default inject("store")(observer(Qualification))
