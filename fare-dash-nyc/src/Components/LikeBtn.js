import { useState } from "react";

function NotThere() {
  const [like, setLike] = useState(false);
  return (
    <>
      <h3 onClick={()=> setLike((prevLike) => !prevLike)} style={{cursor: "pointer"}}>{like? <i class="fa-solid fa-thumbs-up" style={{color: "brown"}}></i> : <i class="fa-regular fa-thumbs-up" style={{color: "white", cursor: "cursor-pointer"}}></i>}</h3>
      {/* <h3 onClick={()=> setLike((prevLike) => !prevLike)}>{like? <i class="fa-solid fa-thumbs-down" style={{color: "brown"}}></i> : <i class="fa-regular fa-thumbs-down" style={{color: "white", cursor: "cursor-pointer"}}></i>}</h3> */}
    </>
  );
}

export default NotThere;
