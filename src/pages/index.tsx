import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const nav = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("refreshUUID")) {
      nav("/register");
      return;
    }
    nav("/chat");
  }, [nav]);
  return <div></div>;
}

export default LandingPage;
