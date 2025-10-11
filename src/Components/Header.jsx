// src/components/Header.jsx
import chefcloud from "../assets/chefcloude-project-3-removebg-preview.png";

export default function Header() {
  return (
    <div className="logo">
      <img src={chefcloud} alt="CHEF CLOUD" />
      <h1>CHEF CLOUD</h1>
    </div>
  );
}
