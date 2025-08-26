import type { IconProps } from "./Icon.props";
import ArrowBack from "./icons/Icon-arrow-back.svg?react";
import ArrowDown from "./icons/Icon-arrow-down.svg?react";
import ArrowUp from "./icons/Icon-arrow-up.svg?react";
import Burger from "./icons/Icon-burger.svg?react";
import Chat from "./icons/Icon-chat.svg?react";
import Cross from "./icons/Icon-cross.svg?react";
import Favorite from "./icons/Icon-favorite.svg?react";
import Fire from "./icons/Icon-fire.svg?react";
import Home from "./icons/Icon-home.svg?react";
import Melody from "./icons/Icon-melody.svg?react";
import Plus from "./icons/Icon-plus.svg?react";
import Profil from "./icons/Icon-profil.svg?react";
import Shofar from "./icons/Icon-shofar.svg?react";
import Storm from "./icons/Icon-storm.svg?react";
import Validate from "./icons/Icon-validate.svg?react";
import Warning from "./icons/Icon-warning.svg?react";
import Wind from "./icons/Icon-wind.svg?react";
import styles from "./Icon.module.scss";

export default function Icon({
  name,
  title,
  width = "25px",
  color,
  onClick
}: IconProps) {
  const iconsMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    "arrow-back": ArrowBack,
    "arrow-down": ArrowDown,
    "arrow-up": ArrowUp,
    burger: Burger,
    chat: Chat,
    cross: Cross,
    favorite: Favorite,
    fire: Fire,
    home: Home,
    melody: Melody,
    plus: Plus,
    profil: Profil,
    shofar: Shofar,
    storm: Storm,
    validate: Validate,
    warning: Warning,
    wind: Wind,
  };
  const IconComponent = iconsMap[name];
  if (!IconComponent) return null;
  return (
    <span className={styles.icon} aria-label={name} title={title} onClick={onClick}>
      <IconComponent
        width={width}
        style={{ color: color || "currentColor" }}
      />
    </span>
  );
}
