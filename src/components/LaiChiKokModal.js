import React from "react"
import "./LaiChiKokModal.css"

function LaiChiKokModal({ closeAction }) {
  return (
    <div className="modal-laichikok">
      <div className="modal-inner">
        <a className="modal-close a-btn" onClick={() => closeAction()}>
          關閉
          <span className="gap-5px" />
          <i className="lni-close size-xs" />
        </a>
        <div className="container modal-container">
          <div className="container-padding">
            <div className="modal-laichikok-flex">
              <div className="modal-laichikok-outer-card">
                <div className="card modal-laichikok-card">
                  <div className="modal-laichikok-card-up">
                    <img
                      src={require("../assets/img/map/1.jpeg")}
                      className="modal-laichikok-card-img"
                    />
                  </div>
                  <div className="modal-laichikok-card-down">
                    <ol start="1">
                      <li>由荔枝角港鐵站B1出口出發</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="modal-laichikok-hori-arrow">
                <img
                  src={require("../assets/img/arrow_left.png")}
                  className="modal-laichikok-hori-arrow-img"
                />
              </div>
              <div className="modal-laichikok-vert-arrow">
                <img
                  src={require("../assets/img/arrow_left_down.png")}
                  className="modal-laichikok-vert-arrow-img"
                />
              </div>
              <div className="modal-laichikok-outer-card">
                <div className="card modal-laichikok-card">
                  <div className="modal-laichikok-card-up">
                    <img
                      src={require("../assets/img/map/2.jpeg")}
                      className="modal-laichikok-card-img"
                    />
                  </div>
                  <div className="modal-laichikok-card-down">
                    <ol start="2">
                      <li>直行並越過前面交通燈</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="right-down-arrow modal-laichikok-down-arrow">
                <div className="modal-laichikok-down-arrow-inner">
                  <img
                    src={require("../assets/img/arrow_right_down.png")}
                    className="modal-laichikok-down-arrow-img"
                  />
                </div>
              </div>
              <div className="modal-laichikok-vert-arrow">
                <img
                  src={require("../assets/img/arrow_left_down.png")}
                  className="modal-laichikok-vert-arrow-img"
                />
              </div>
            </div>
            <div className="modal-laichikok-flex-reverse">
              <div className="modal-laichikok-outer-card">
                <div className="card modal-laichikok-card">
                  <div className="modal-laichikok-card-up">
                    <img
                      src={require("../assets/img/map/3.jpeg")}
                      className="modal-laichikok-card-img"
                    />
                  </div>
                  <div className="modal-laichikok-card-down">
                    <ol start="3">
                      <li>繼續直行</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="modal-laichikok-hori-arrow">
                <img
                  src={require("../assets/img/arrow_right.png")}
                  className="modal-laichikok-hori-arrow-img"
                />
              </div>
              <div className="modal-laichikok-vert-arrow">
                <img
                  src={require("../assets/img/arrow_left_down.png")}
                  className="modal-laichikok-vert-arrow-img"
                />
              </div>
              <div className="modal-laichikok-outer-card">
                <div className="card modal-laichikok-card">
                  <div className="modal-laichikok-card-up">
                    <img
                      src={require("../assets/img/map/4.jpeg")}
                      className="modal-laichikok-card-img"
                    />
                  </div>
                  <div className="modal-laichikok-card-down">
                    <ol start="4">
                      <li>越過光昌街 進入麗新商場</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="modal-laichikok-down-arrow left-down-arrow">
                <div className="modal-laichikok-down-arrow-inner">
                  <img
                    src={require("../assets/img/arrow_left_down.png")}
                    className="modal-laichikok-down-arrow-img"
                  />
                </div>
              </div>
              <div className="modal-laichikok-vert-arrow">
                <img
                  src={require("../assets/img/arrow_left_down.png")}
                  className="modal-laichikok-vert-arrow-img"
                />
              </div>
            </div>
            <div className="modal-laichikok-flex">
              <div className="modal-laichikok-outer-card">
                <div className="card modal-laichikok-card">
                  <div className="modal-laichikok-card-up">
                    <img
                      src={require("../assets/img/map/5.jpeg")}
                      className="modal-laichikok-card-img"
                    />
                  </div>
                  <div className="modal-laichikok-card-down">
                    <ol start="5">
                      <li>進入戲院</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="modal-laichikok-hori-arrow">
                <img
                  src={require("../assets/img/arrow_left.png")}
                  className="modal-laichikok-hori-arrow-img"
                />
              </div>
              <div className="modal-laichikok-vert-arrow">
                <img
                  src={require("../assets/img/arrow_left_down.png")}
                  className="modal-laichikok-vert-arrow-img"
                />
              </div>
              <div className="modal-laichikok-outer-card">
                <div className="card modal-laichikok-card">
                  <div className="modal-laichikok-card-up">
                    <img
                      src={require("../assets/img/map/6.jpeg")}
                      className="modal-laichikok-card-img"
                    />
                  </div>
                  <div className="modal-laichikok-card-down">
                    <ol start="6">
                      <li>穿過戲院直出福華街</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="right-down-arrow modal-laichikok-down-arrow">
                <div className="modal-laichikok-down-arrow-inner">
                  <img
                    src={require("../assets/img/arrow_right_down.png")}
                    className="modal-laichikok-down-arrow-img"
                  />
                </div>
              </div>
              <div className="modal-laichikok-vert-arrow">
                <img
                  src={require("../assets/img/arrow_left_down.png")}
                  className="modal-laichikok-vert-arrow-img"
                />
              </div>
            </div>
            <div className="modal-laichikok-flex-reverse">
              <div className="modal-laichikok-outer-card">
                <div className="card modal-laichikok-card">
                  <div className="modal-laichikok-card-up">
                    <img
                      src={require("../assets/img/map/7.jpeg")}
                      className="modal-laichikok-card-img"
                    />
                  </div>
                  <div className="modal-laichikok-card-down">
                    <ol start="7">
                      <li>直出福華街轉左</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="modal-laichikok-hori-arrow">
                <img
                  src={require("../assets/img/arrow_right.png")}
                  className="modal-laichikok-hori-arrow-img"
                />
              </div>
              <div className="modal-laichikok-vert-arrow">
                <img
                  src={require("../assets/img/arrow_left_down.png")}
                  className="modal-laichikok-vert-arrow-img"
                />
              </div>
              <div className="modal-laichikok-outer-card">
                <div className="card modal-laichikok-card">
                  <div className="modal-laichikok-card-up">
                    <img
                      src={require("../assets/img/map/8.jpeg")}
                      className="modal-laichikok-card-img"
                    />
                  </div>
                  <div className="modal-laichikok-card-down">
                    <ol start="8">
                      <li>直行</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="modal-laichikok-down-arrow left-down-arrow">
                <div className="modal-laichikok-down-arrow-inner">
                  <img
                    src={require("../assets/img/arrow_left_down.png")}
                    className="modal-laichikok-down-arrow-img"
                  />
                </div>
              </div>
              <div className="modal-laichikok-vert-arrow">
                <img
                  src={require("../assets/img/arrow_left_down.png")}
                  className="modal-laichikok-vert-arrow-img"
                />
              </div>
            </div>
            <div className="modal-laichikok-flex">
              <div className="modal-laichikok-outer-card">
                <div className="card modal-laichikok-card">
                  <div className="modal-laichikok-card-up">
                    <img
                      src={require("../assets/img/map/9.jpeg")}
                      className="modal-laichikok-card-img"
                    />
                  </div>
                  <div className="modal-laichikok-card-down">
                    <ol start="9">
                      <li>越過青山道</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="modal-laichikok-hori-arrow">
                <img
                  src={require("../assets/img/arrow_left.png")}
                  className="modal-laichikok-hori-arrow-img"
                />
              </div>
              <div className="modal-laichikok-vert-arrow">
                <img
                  src={require("../assets/img/arrow_left_down.png")}
                  className="modal-laichikok-vert-arrow-img"
                />
              </div>
              <div className="modal-laichikok-outer-card">
                <div className="card modal-laichikok-card">
                  <div className="modal-laichikok-card-up">
                    <img
                      src={require("../assets/img/map/10.jpeg")}
                      className="modal-laichikok-card-img"
                    />
                  </div>
                  <div className="modal-laichikok-card-down">
                    <ol start="10">
                      <li>過對面斑馬綫</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="right-down-arrow modal-laichikok-down-arrow">
                <div className="modal-laichikok-down-arrow-inner">
                  <img
                    src={require("../assets/img/arrow_right_down.png")}
                    className="modal-laichikok-down-arrow-img"
                  />
                </div>
              </div>
              <div className="modal-laichikok-vert-arrow">
                <img
                  src={require("../assets/img/arrow_left_down.png")}
                  className="modal-laichikok-vert-arrow-img"
                />
              </div>
            </div>
            <div className="modal-laichikok-flex-reverse">
              <div className="modal-laichikok-outer-card">
                <div className="card modal-laichikok-card">
                  <div className=" modal-laichikok-card-up">
                    <img
                      src={require("../assets/img/map/11.jpeg")}
                      className="modal-laichikok-card-img"
                    />
                  </div>
                  <div className="modal-laichikok-card-down">
                    <ol start="11">
                      <li>直行直至見到百美工業大廈</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="modal-laichikok-hori-arrow">
                <img
                  src={require("../assets/img/arrow_right.png")}
                  className="modal-laichikok-hori-arrow-img"
                />
              </div>
              <div className="modal-laichikok-vert-arrow">
                <img
                  src={require("../assets/img/arrow_left_down.png")}
                  className="modal-laichikok-vert-arrow-img"
                />
              </div>
              <div className="modal-laichikok-outer-card">
                <div className="card modal-laichikok-card">
                  <div className="modal-laichikok-card-up">
                    <img
                      src={require("../assets/img/map/12.jpeg")}
                      className="modal-laichikok-card-img"
                    />
                  </div>
                  <div className="modal-laichikok-card-down">
                    <ol start="12">
                      <li>
                        搭升降機至11樓會見到lofter大門
                        <br />
                        按207#並等待開門
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LaiChiKokModal
