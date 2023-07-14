import React from 'react'
import { Link } from "react-router-dom";

const Buttons = ({url,bgColor,color,content}) => {
  return (
    <div>
        <Link to={url}><button className={`${bgColor} ${color} m-2` }>{content}</button></Link>
    </div>
  )
}

export default Buttons




