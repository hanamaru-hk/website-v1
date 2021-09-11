import React, { useRef, useEffect } from "react"
import aboutBgImg from "../assets/img/about-bg.png"
import "./About.css"
import { inject, observer } from "mobx-react"
import { autorun } from "mobx"
import PropTypes from "prop-types"
import { scrollToRef } from "../helpers/Anim"

function About({ store }) {
  const scrollRef = useRef()
  useEffect(
    () =>
      autorun(() => {
        if (store && store.dest && store.dest === "about") {
          scrollToRef(scrollRef)
          store.scrollTo(null)
        }
      }),
    [store] // note empty dependencies
  )
  return (
    <section className="about" ref={scrollRef}>
      <div className="about-second-diagonal">
        <div className="container about-container">
          <div className="container-padding">
            <div className="about-flex">
              <div className="about-desc1">
                <h1 className="about-title retroshadow">關於我們</h1>
                花丸（はなまる/hanamaru）是指老師給成績優異的學生試卷上畫上的一個花型圖案，有讚賞的意思，形狀就像在一個漩渦外畫上花瓣。
                <br />
                <br />{" "}
                由於教室負責人喜歡花（はな/hana）形圖案，所以特別留意及喜歡這花丸圖案，並經常希望在學生的功課或試卷上畫上，可惜機會不多。
                <br />
                <br />{" "}
                丸（まる/maru）是圓形的意思，代表本教室目標全面教授學生讀、寫、聽、說四方面，讓學生能真正於旅行及日常生活中應用日語。同時，我們相信語言及文化有非常密切的關係，所以我們的目標不止是教授日本語言，我們更會與學生於日語中觀察日本文化及當中有趣的地方，令學生對日語能夠有更全面的概念。
                <br />
                <br />
              </div>

              <div className="about-desc2">
                <h1 className="about-title retroshadow">教學模式</h1>
                本教室主張私人及小組教學，好讓老師能夠仔細觀察學生進度，因材施教。本教室除了有指定教科書作基礎教材外，學生和老師於此教室能夠自由決定學習進度及教材。雖然我們主張不趕進度及輕鬆學習，但同時亦避免水過鴨背般的教學模式，目標令每一位學生於每一堂完結後都能夠熟習最低限度的日語知識。
              </div>
            </div>
          </div>
        </div>
        <div className="about-bg-container">
          <img src={aboutBgImg} className="class-bg" />
        </div>
      </div>
    </section>
  )
}

About.propTypes = {
  store: PropTypes.object,
}
About.defaultProps = {
  store: null,
}

export default inject("store")(observer(About))
