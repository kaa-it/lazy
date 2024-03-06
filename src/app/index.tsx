import { Outlet } from "react-router-dom";
import s from "./app.module.css";

export const App = () => {
  return (
    <div className={s.app}>
      <main className={s.content}>
        <Outlet />
      </main>
    </div>
  );
};
