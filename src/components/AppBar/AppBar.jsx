import { Navigation } from "../Navigation";
import { UserMenu } from "../UserMenu";
import css from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation/>
      <UserMenu/>

    </header>
  );
};