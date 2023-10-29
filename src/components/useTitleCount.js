import { useEffect } from "react";
const useTitleCount = (count) => {
    useEffect(()=>{
        document.title = "Chat"+ "(" + count + ")";
      }, [count]);
}

export default useTitleCount