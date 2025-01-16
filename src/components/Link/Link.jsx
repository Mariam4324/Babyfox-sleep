import css from "./Link.module.scss";

export const Link = ({ linkText }) => {
  return (
    <li>
      <a className={css.link} href="#">
        {linkText}
      </a>
    </li>
  );
};
