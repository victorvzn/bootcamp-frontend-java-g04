import React from 'react'

const BaseTag = ({ label, bgColor, textColor }) => {
  return (
    <div className={`py-3 rounded-md text-center capitalize font-extrabold min-w-[120px] ${bgColor} ${textColor}`}>
      <span className="text-3xl leading-3 mr-2">•</span>
      {label}
    </div>
  )
}

export default BaseTag