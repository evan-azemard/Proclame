import type { WaveProps } from "./Wave.props";
import styles from "./Wave.module.scss";
import waveImage from "../Icon/icons/wave.png";

export default function Wave({ space }: WaveProps) {
  return (
    <span
      className={space ? `${styles.wave} ${styles["wave-space"]} wave` : styles.wave}
    >
      <br />
      <img src={waveImage} alt="Wave" style={{ width: "100%" }} />
      <br />
    </span>
  );
}
