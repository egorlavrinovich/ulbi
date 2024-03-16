import Link, { LinkTheme } from "shared/Link/ui/Link";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./NavBar.module.scss";
import "./Navbar.scss";
import { appRoutesPaths } from "shared/config/routes/routes";
import { firstLetterToUpperCase } from "shared/lib/helpers/firstLetterToUpperCase";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <div className={classNames({ cls: styles.navbar_links })}>
      {Object.entries(appRoutesPaths)?.map(([key, value]) => {
        const { PRIMARY, SECONDARY } = LinkTheme;
        return (
          <Link
            key={key}
            to={value}
            theme={pathname === value ? PRIMARY : SECONDARY}
          >
            {firstLetterToUpperCase(key)}
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
