import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function TelaDeEntrada() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.fromLogin) {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  return (
    <h1>Teste</h1>
  );
}
