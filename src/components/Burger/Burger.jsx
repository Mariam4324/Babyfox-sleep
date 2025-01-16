import { useState } from "react";
import { BurgerModal } from "../BurgerModal/BurgerModal";
import css from "./Burger.module.scss";

export const Burger = () => {
  const [burger, setBurger] = useState(false);

  console.log(burger);

  return (
    <aside className={css.burger}>
      <svg onClick={() => setBurger(true)} className={css.burger__open} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" fill="#222" />
      </svg>

      {burger ? <BurgerModal setBurger={setBurger} /> : ""}
    </aside>
  );
};
