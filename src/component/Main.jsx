import React from "react"
import style from "./homecrud.module.css"


const Main =()=>{
    return(
    <nav id={style.nav}>
        <div class={style.sub}>home</div>
        <div class={style.sub}>gallery</div>
        <div class={style.sub}>books</div>
        <div class={style.sub}>pens</div>
        <div class={style.sub}>videos</div>
        <div class={style.sub}>map</div>
        <div class={style.sub}>location</div>
        <div class={style.sub}>orders</div>
        <div class={style.sub}>logout</div>
    </nav>
    )
}
export default Main