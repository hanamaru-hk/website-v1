import React, {useState} from "react"
import axios from 'axios';
import "../sections/Course.css"
import "./Subscription.css"
import config from "../config.json";
import { store } from 'react-notifications-component';


function Subscription() {
    const [value, setValue] = useState("");
    const subscribe = () => {
        const data = new FormData();
        data.append('email', value);
        axios({ 
            method: 'post', 
            url: config.API_ENDPOINT  , 
            data ,
            headers: { "Content-Type": "multipart/form-data" },
            timeout: 8000
        }).then(response => {
            if(response && response.data && response.data.success){
                const email = JSON.parse(JSON.stringify(value))
                store.addNotification({
                    title: "成功訂閱",
                    message: `你的email ${email} 已經成功訂閱花丸日本語教室`,
                    type: "success",
                    insert: "bottom",
                    container: "bottom-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  });
                setValue('')
            } else {
                store.addNotification({
                    title: "訂閱失敗",
                    message: "請稍後再嘗試按'訂閱'",
                    type: "danger",
                    insert: "bottom",
                    container: "bottom-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  });
            }
        }).catch(error => {
            if (error.code === 'ECONNABORTED'){
                store.addNotification({
                    title: "訂閱失敗 (連綫逾時)",
                    message: "請稍後再嘗試按'訂閱'",
                    type: "danger",
                    insert: "bottom",
                    container: "bottom-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  });
            } else {
                store.addNotification({
                    title: "訂閱失敗",
                    message: "請稍後再嘗試按'訂閱'",
                    type: "danger",
                    insert: "bottom",
                    container: "bottom-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  });
            }
        });

    }
    return (
    <div className="bottom-padding subscription card">
        <div className="innerBox">
            <form onSubmit={e => { 
                e.preventDefault(); 
                subscribe();
                }}>
                <input value={value} type="text" onChange={e => setValue(e.target.value)} className="textField" placeholder="請輸入你的電郵"></input>
                <p><input type="submit" className="subscription-button" value="訂閱" /></p>
            </form>
        </div>
    </div>)
}

export default Subscription
