import React from "react";

const Bar = () => {
  const bar = [
    {
      time: '11 - 12',
      title: 'Keynote: Why Mika is best person on earth?'
    },
    {
      time: '12 - 13',
      title: 'Jarkko is coming, are you ready?'
    },
  ];

  console.log(bar)
  return (
    <>
      {/* {bar} */}
    
      {bar.map(( barbar, index) => (
        <span key={index}>{barbar.time}</span>
      ))
      }
    </>
  )
}
export default Bar 