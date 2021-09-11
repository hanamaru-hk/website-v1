import React from "react"
import "../sections/Course.css"

function CourseCard({ title, content, flow, beware,buyBook, noticeEveryMonth,notEnoughStudent  }) {
  return (
    <div className="card bottom-padding">
      <div className="course-flex">
        <div className="course-desc1">
          <div className="course-table">
            <div className="course-title-row">
              <div className="course-title-cell">
                <h1 className="course-title retroshadow">{title}</h1>
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

          {content}
          <p>
          {noticeEveryMonth && (<>*學生報名時需另加$133購買教科書。</>)}
          {buyBook &&  (<>基礎程度另需再加$10購買假名習字簿。</>)}
          {        noticeEveryMonth &&  (  <>
<br/>*以上課程全部最少二人成班，最多四人一班。
  <br/>
              *學費以每月計，每月繳交一次學費。</>
              )}          
          </p>
          <p>
          {flow && (
            <>
              報名方法：
              <br />
              Step1: 按右上角"按此報名"
              <br />
              Step2: 教室會以whatsapp通知你是否成功入班
              <br />
              Step3: 跟據whatsapp指引預先繳交學費作留位
              <br />
              </>
              
            
          )}
          {notEnoughStudent && (
            <>
            （*如人數不足，有機會延遲開班或全數退回學費）
            </>
          )}
          </p>

          {
            beware && (
              <p>
              請密切留意<a href="https://www.facebook.com/hanamaru.japanese">Facebook</a>、<a href="https://www.instagram.com/hanamaru.japanese">Instagram</a>的更新。
              
              </p>

            )
          }
        </div>
      </div>
    </div>
  )
}

export default CourseCard
