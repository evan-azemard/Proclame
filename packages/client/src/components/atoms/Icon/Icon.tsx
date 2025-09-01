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
// Shofar: remplacé par PNG servi depuis /public/converted (pas d'import direct nécessaire)
import Storm from "./icons/Icon-storm.svg?react";
import Validate from "./icons/Icon-validate.svg?react";
import Warning from "./icons/Icon-warning.svg?react";
import Wind from "./icons/Icon-wind.svg?react";
import styles from "./Icon.module.scss";
import { useNavigate } from "react-router-dom";

export default function Icon({
  name,
  title,
  width = "3rem",
  size,
  color,
  uri,
  onClick,
}: IconProps) {
  type SvgComponent = React.FC<React.SVGProps<SVGSVGElement>>;
  type IconEntry = SvgComponent | 'shofar';
  const iconsMap: Record<string, IconEntry> = {
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
  shofar: 'shofar',
    storm: Storm,
    validate: Validate,
    warning: Warning,
    wind: Wind,
  };
  const IconComponent = iconsMap[name];
  const navigate = useNavigate();
  if (!IconComponent) return null;

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (onClick) {
      if ("vibrate" in navigator) {
        navigator.vibrate(50);
      }
      onClick(event);
      if (event.isPropagationStopped()) return;
    }
    if (uri) navigate(uri);
  };

  const finalWidth = size || width;

  return (
    <span
      className={styles.icon}
      aria-label={name}
      title={title}
      onClick={handleClick}
    >
      {IconComponent === 'shofar' ? (
        <img
          src={'/converted/Icon-shofar-256.png'}
          style={{ width: finalWidth, height: 'auto', filter: color ? `drop-shadow(0 0 0 ${color})` : undefined }}
          alt={title || name}
          loading="lazy"
        />
      ) : (
        <IconComponent
          width={finalWidth}
          style={{ color: color || "currentColor" }}
        />
      )}
    </span>
  );
}
