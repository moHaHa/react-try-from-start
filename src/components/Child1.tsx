import { Outlet } from "react-router-dom";

export const Child1: React.FC = () => {
  return (
    <div style={{ border: "4px solid gold" }}>
      <div>Child 1</div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
