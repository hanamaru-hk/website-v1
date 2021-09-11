import React from "react"
import "../sections/Course.css"

function SelfCourseCard1({ title, priceLck, priceOutside }) {
  return (
    <div className="card bottom-padding">
      <div className="course-flex">
        <div className="course-desc1">
          <div className="course-table">
            <div className="course-title-row">
              <div className="course-title-cell">
                <h1 className="course-card-title retroshadow">{title}</h1>
              </div>
              <div className="course-title-cell-right">
              <a
                  className="btn"
                  href="http://docs.google.com/forms/d/1z9sXRLlSq8N6U_IOTPPVoCkDxZ3yhw0PzzNf0uutB-s/"
                  target="_blank"                  
                >
                  按此報名
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="fundamental-class-desc" className="course-desc2">
          <div className="course-table">
            <div className="course-header">
              <div className="course-row">
                <div className="course-cell course-header-padding course-bg-grey" />
                <div className="course-cell course-bg-grey">人數</div>
                <div className="course-cell course-bg-grey">荔枝角小教室</div>
                <div className="course-cell course-bg-grey text-sc-right">
                  教室以外地方
                </div>
                <div className="course-cell course-header-padding course-bg-grey" />
              </div>
            </div>
            <div className="course-body">
              <div className="course-row">
                <div className="course-cell course-header-padding" />
                <div className="course-cell">1對1</div>
                <div className="course-cell">{priceLck && priceLck[0]}</div>
                <div className="course-cell text-sc-right">
                  {priceOutside && priceOutside[0]}
                </div>
                <div className="course-cell course-header-padding" />
              </div>
              <div className="course-row">
                <div className="course-cell course-header-padding" />
                <div className="course-cell">1對2</div>
                <div className="course-cell">{priceLck && priceLck[1]}</div>
                <div className="course-cell text-sc-right">
                  {priceOutside && priceOutside[1]}
                </div>
                <div className="course-cell course-header-padding" />
              </div>
              <div className="course-row">
                <div className="course-cell course-header-padding" />
                <div className="course-cell">1對3</div>
                <div className="course-cell">{priceLck && priceLck[2]}</div>
                <div className="course-cell text-sc-right">
                  {priceOutside && priceOutside[2]}
                </div>
                <div className="course-cell course-header-padding" />
              </div>
              <div className="course-row">
                <div className="course-cell course-header-padding" />
                <div className="course-cell">1對4或以上</div>
                <div className="course-cell">{priceLck && priceLck[3]}</div>
                <div className="course-cell text-sc-right">
                  {priceOutside && priceOutside[3]}
                  <br />
                  (全班總共學費)
                </div>
                <div className="course-cell course-header-padding" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelfCourseCard1
