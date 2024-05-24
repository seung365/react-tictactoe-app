import React from "react"
import "./Square.css"

const Square = (props) => { // 구조분해 할당으로도 가능하다.. {onClick, value} 해서 그냥 onClick이랑 value도 바로 사용 가능
  
    return (
      <button className="square" 
      onClick={() => {props.onClick()}}>
      {props.value}
      </button>
    )
}
export default Square

