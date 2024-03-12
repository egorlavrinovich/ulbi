import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Link.module.scss";

export enum LinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type typeOfLink = typeof LinkTheme[keyof typeof LinkTheme];

interface RouterLinkProps extends LinkProps {
  theme?: typeOfLink;
}

const Link: FC<RouterLinkProps> = ({ to, children, theme }) => {
  return (
    <RouterLink
      className={classNames({ cls: classes.link, additional: [theme] })}
      to={to}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
