import React, { useRef, useEffect } from "react"
import "./Contact.css"
import { inject, observer } from "mobx-react"
import { autorun } from "mobx"
import PropTypes from "prop-types"
import { scrollToRef } from "../helpers/Anim"

function Contact({ store }) {
  const scrollRef = useRef()
  useEffect(
    () =>
      autorun(() => {
        if (store && store.dest && store.dest === "contact") {
          scrollToRef(scrollRef)
          store.scrollTo(null)
        }
      }),
    [store] // note empty dependencies
  )
  return (
    <footer className="footer" ref={scrollRef}>
      <div className="container footer-container">
        <div className="footer-flex">
          <div className="footer-addr">
            <h4 className="footer-h4">地址</h4>
            <p className="lead mb-0">
              <a
                href="https://www.google.com/maps/place/%E8%8A%B1%E4%B8%B8%E6%97%A5%E6%9C%AC%E8%AA%9E%E6%95%99%E5%AE%A4/@22.3399216,114.1498285,17z/data=!3m1!4b1!4m5!3m4!1s0x340407d5af63cea5:0x4dc866a9179b71bc!8m2!3d22.3399216!4d114.1520172"
                className="footer-link-button"
                target="_blank"
              >
                九龍荔枝角青山道500號
                <br />
                百美工業大廈11樓B7室
              </a>
            </p>
          </div>
          <div className="footer-link">
            <h4 className="footer-h4">連結</h4>
            <a
              className="footer-link-button"
              href="https://www.facebook.com/hanamaru.japanese"
              target="_blank"
            >
              <i className="lni-facebook size-lg" />
            </a>
            <a
              className="footer-link-button"
              href="https://www.instagram.com/hanamaru.japanese"
              target="_blank"
            >
              <i className="lni-instagram size-lg" />
            </a>
            <a
              className="footer-link-button"
              href="mailto:info@hanamaru.hk"
              target="_blank"
            >
              <i className="lni-envelope size-lg" />
            </a>
            <a
              className="footer-link-button"
              href="https://wa.me/85259806801"
              target="_blank"
            >
              <i className="lni-whatsapp size-lg" />
            </a>
          </div>
          <div className="footer-tel">
            <h4 className="footer-h4">電話 / Whatsapp</h4>
            <p className="lead mb-0">
              <a
                href="https://wa.me/85259806801"
                className="footer-link-button "
                target="_blank"
              >
                5980 6801
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default inject("store")(observer(Contact))
