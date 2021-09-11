import React, { useRef, useEffect, useState } from "react"
import navTitleImg from "../assets/img/nav-title.png"
import "./Nav.css"
import { inject, observer } from "mobx-react"
import { autorun } from "mobx"
import PropTypes from "prop-types"
import { scrollToRef } from "../helpers/Anim"

function Nav({ store }) {
  const scrollRef = useRef()
  const navRef = useRef(null)
  const [toggleState, toggleMenu] = useState(true)
  const scrollTo = (target) =>{
    toggleMenu(true)
    store.scrollTo(target)
  }

  useEffect(
    () =>
      autorun(() => {
        if (store && store.dest && store.dest === "nav") {
          scrollToRef(scrollRef)
          store.scrollTo(null)
        }
      }),
    [store] // note empty dependencies
  )
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
        if (navRef.current && !navRef.current.contains(event.target)) {
          toggleMenu(true)
        }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [navRef]);
  return (
    <nav className="navbar" ref={scrollRef}>
      <div className="navbar-container">
        <div className="navbar-flex">
          <div className="nav-logo">
            <button type="button" onClick={() => scrollTo("nav")}>
              <img
                className="nav-title"
                alt="花丸日本語教室"
                src={navTitleImg}
              />
            </button>
          </div>
          <button
            type="button"
            className="nav-menu vmiddle"
            onClick={() => toggleMenu(!toggleState)}
          >
            目錄
            <span className="gap-5px vmiddle">
              <i className="lni-menu size-md vmiddle" />
            </span>
          </button>
          <ul
            className={`nav-list ${toggleState ? "" : "nav-list-expand"}`} ref={navRef}
          >
            <li>
              <button type="button" onClick={() => scrollTo("about")}>
                關於我們
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollTo("qualification")}
              >
                導師資歷
              </button>
            </li>
            <li>
              <button type="button" onClick={() => scrollTo("course")}>
                課程資料
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollTo("transportation")}
              >
                前往方法
              </button>
            </li>
            <li>
              <button type="button" onClick={() => scrollTo("contact")}>
                聯絡我們
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  store: PropTypes.object,
}
Nav.defaultProps = {
  store: null,
}
export default inject("store")(observer(Nav))
