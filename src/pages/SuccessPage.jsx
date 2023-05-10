import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";
import { runConfetti } from "../utils/confetti";

function SuccessPage() {
  const { clearCart } = useCartContext();
  const navigate = useNavigate();
  useEffect(() => {
    clearCart();
    runConfetti();
    setTimeout(() => {
      navigate("/home");
    }, 5000);
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0",
      }}
    >
      <h1 style={{ textAlign: "center", color: "white" }}>
        Thanks for the purchase!
      </h1>
    </div>
  );
}

export default SuccessPage;
