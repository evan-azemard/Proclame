import styles from "./HeaderNav.module.scss";
import logo from "@atoms/Icon/icons/logo.png";
import { Icon, Title } from "@atoms/index";

export default function HeaderNav() {
  return (
    <header className={styles.header}>
      <div>
        <nav>
          <ul>
            <li>
              <img src={logo} alt="Logo du site, un shofar" />
            </li>
          </ul>
        </nav>
        <Title type={1}>tt</Title>
      </div>
      <Icon name="burger" title="burger" uri="/menu"/>
    </header>
  );
}
