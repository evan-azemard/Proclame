import React from "react";
import type { TitleProps } from "./Title.props";
import styles from "./Title.module.scss";
import type { JSX } from "react";

export default function Title({ children, type = 2 }: TitleProps) {
  const Tag = `h${type}` as keyof JSX.IntrinsicElements;

  return React.createElement(Tag, { className: styles.title }, children);
}
