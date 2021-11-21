import React, { useRef, useEffect } from "react"
import "./Course.css"
import { inject, observer } from "mobx-react"
import { autorun } from "mobx"
import PropTypes from "prop-types"
import NormalCourseCard from "../components/NormalCourseCard"
import SelfCourseCard1 from "../components/SelfCourseCard1"
import SelfCourseCard2 from "../components/SelfCourseCard2"
import Subscription from "../components/Subscription"
import { scrollToRef } from "../helpers/Anim"

function Course({ store }) {
  const scrollRef = useRef()
  useEffect(
    () =>
      autorun(() => {
        if (store && store.dest && store.dest === "course") {
          scrollToRef(scrollRef)
          store.scrollTo(null)
        }
      }),
    [store] // note empty dependencies
  )
  return (
    <section className="course" ref={scrollRef}>
      <div className="course-second-diagonal">
        <div className="container course-container">
          <div className="container-padding">
            <h1 className="course-title retroshadow">常規班</h1>
            <div className="normal-class-box">
            <p  className="text-left">
              常規班以日常生活為背景學習日語及日本文化。時間、人數、程度由教室安排。
            </p >
            <p  className="text-left">課程分為以下4種程度：</p></div>
            <NormalCourseCard
              flow
              beware
              title="基礎程度"
              buyBook
              noticeEveryMonth
              notEnoughStudent
              content={
                <div>
                  <p>
                    學生於此課程主要學習基本發音、簡單會話、名詞、動詞、形容詞基本句型。
                  </p>
                  <p>學費：$300/堂、每堂1.5小時</p>
                </div>
              }
            />
            <NormalCourseCard
              flow
              beware
              noticeEveryMonth
              notEnoughStudent
              title="N5程度"
              content={
                <div>
                  <p>
                    學生於此課程主要學習動詞多種基本變化，以表達更多意思。
                  </p>
                  <p>學費：$310/堂、每堂1.5小時</p>
                </div>
              }
            />
            <NormalCourseCard
              flow
              beware
              noticeEveryMonth
              notEnoughStudent
              title="N4程度"
              content={
                <div>
                  <p>
                    學生於此課程主要學習動詞更複雜的變化，句子結構較複雜，表達意思更深入。包括少量商業日語。
                  </p>
                  <p>學費：$320/堂、每堂1.5小時</p>
                </div>
              }
            />
            <NormalCourseCard
              flow
              beware
              noticeEveryMonth
              notEnoughStudent
              title="N3程度"
              content={
                <div>
                  <p>
                    學生於此課程主要學習日文書面語及口語，會有更多寫作練習。
                  </p>
                  <p>學費：$340/堂、每堂1.5小時</p>
                </div>
              }
            />
            <h1 className="course-title retroshadow">一對一/自組小班</h1>
            <div className="normal-class-box">
            <p  className="text-left">
            學生可自行組班及選擇上課時間，人數限1-4人。可自選課程程度（程度內容可參閱「常規課程」部分）。
            </p></div>
            <SelfCourseCard2
              title="基礎程度"
              price={[
                "$375@1.5hr",
                "$350@1.5hr",
                "$325@1.5hr",
                "$300@1.5hr",
              ]}

            />
            <SelfCourseCard2
              title="N5程度"
              price={["$388@1.5hr", "$362@1.5hr", "$336@1.5hr", "$310@1.5hr"]}
            />
            <SelfCourseCard2
              title="N4程度"
              price={["$400@1.5hr", "$373@1.5hr", "$346@1.5hr", "$320@1.5hr"]}
            />
            <SelfCourseCard2
              title="N3程度"
              price={["$420@1.5hr", "$392@1.5hr", "$362@1.5hr", "$340@1.5hr"]}
            />

            <h1 className="course-title retroshadow">旅遊日語班</h1>
            <NormalCourseCard
            flow
            notEnoughStudent
              title="旅遊日語班"
              content={
                <div>
                  <p>
                    以日本旅遊為背景，學習旅遊時遇到的日語及日本文化。此課程相等如常規班的基礎程度及N5程度，完成此課程的學生可考慮加入常規課程N4程度。請密切留意<a href="https://www.facebook.com/hanamaru.japanese">Facebook</a>、<a href="https://www.instagram.com/hanamaru.japanese">Instagram</a>的更新。
                  </p>
                  <p></p>

                  <p>學費：$300/堂、每堂1.5小時</p>
                </div>
              }
            />
            <h1 className="course-title retroshadow">日藉老師會話班</h1>
            <NormalCourseCard
            flow
              title="日藉老師會話班"
              content={
                <div>
                  <p>
                    日藉教師以流利英文作輔助，與學生以skype進行會話練習。學生可選擇以自由會話練習／專題討論／閱讀練習形式上課。
                  </p>
                  <p>學費：$280/堂、每堂1小時<br/>日期及時間：可以每堂預約，或指定時間定時上課</p>
                  <div class='embed-container'><iframe src='https://www.youtube.com/embed/sEuxwWEOp-Y' frameborder='0' allowfullscreen></iframe></div>
                </div>
              }
            />

            

            <h1 className="course-title retroshadow">工作坊</h1>
            <NormalCourseCard
              flow={false}
              title="工作坊"
              content={
                <div>
                  <p>
                    教室不定期會以各種不同主題舉行工作坊，請密切留意<a href="https://www.facebook.com/hanamaru.japanese">Facebook</a>、<a href="https://www.instagram.com/hanamaru.japanese">Instagram</a>的更新。
                    </p>
                </div>
              }
            />
            <h1 className="course-title retroshadow">其他課程</h1>
            <NormalCourseCard
              flow={false}
              title="其他課程"
              content={
                <div>
                  <p>
                    如果以上課程都不適合你，像是你希望視像教學，你都可以在報名表註明，或直接聯絡我們，我們可以嘗試為你安排。
                    </p>
                </div>
              }
            />
            <h1 className="course-title retroshadow">訂閱更新</h1>
            <Subscription />
          </div>
        </div>
      </div>
    </section>
  )
}

export default inject("store")(observer(Course))
