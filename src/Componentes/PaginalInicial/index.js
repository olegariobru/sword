import LoginBan from "../BannerLogin";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function PaginaHome(){

    const navigate = useNavigate();
    const location = useLocation();

      useEffect(() => {
        if (!location.state?.fromLogin) {
          navigate("/", { replace: true });
        }
      }, [location, navigate]);
    
    return(
        <main>
            <LoginBan/>
        </main>
    )
}