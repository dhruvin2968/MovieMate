import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollTooTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  //0,0 means top x,y ||| window means the browser     
  }, [pathname]);   //pathname is a dependency and every time for a new pathname 
                    //the useEffect gets executed

  return null;
}
//We call thhis in index.js simply before our ap.js