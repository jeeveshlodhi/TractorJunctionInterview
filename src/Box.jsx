import React, { useState } from "react";

const Box = ({ id, arr, setShow, toShow }) => {
  // const [boxState, setBoxState] = useState(false);
  // // const [boxId, setBoxId]  = useState(0)
  // // const newPromise = new Promise((res, rej)=>{
  // //   setTimeout(()=>{
  // //     res(setBoxId(arr[id]))
  // //   },1000)
  // // })

  // const handleClick = () => {
  //   if (boxState === false) {
  //     setBoxState(true);
  //   } else {
  //     setBoxState(false);
  //   }
  //   // const pro = newPromise.then((val)=>console.log(val))
  // };
  console.log("BOx");
  return (
    <div onClick={() => setShow(id)} style={{ border: "1px solid black" }}>
      {toShow === false ? "" : id}
    </div>
  );
};

export default Box;
