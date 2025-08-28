import { Title } from "@atoms/index";
import { TitleWithParagraph } from "@molecules/index";
import styles from "./About.module.scss";
import logo from "@atoms/Icon/icons/logo.png";
export default function About() {
  return (
    <>
      <div className={styles.logo}>
        <img src={logo} alt="Proclame logo" className={styles.logoImg} />
        <div className={styles.logoTitle}>
          <Title>PROCLAME</Title>
        </div>
      </div>
      <TitleWithParagraph title="A propos">
        <p>
          Hey! moi c’est Evan. J’ai 24 ans et je suis en formation en
          développement web.
        </p>
        <p>
          Proclame est créé avec passion, foi et engagement. Il s’agit d’une
          application pensée pour offrir un soutien émotionnel à travers des
          textes bibliques, dans un format immersif et apaisant.
        </p>
        <p>
          Chaque proclamation est accompagnée d’une ambiance sonore
          personnalisable, pour favoriser la méditation, le réconfort et la paix
          intérieure.
        </p>
        <p>
          J’ai réalisé l’ensemble du développement, du design à la mise en
          ligne, en utilisant des technologies modernes pour garantir
          performance, fiabilité et sécurité.
        </p>
        <p>
          L’application respecte les derniers standards en matière de protection
          des données et de sécurité web, avec une attention particulière portée
          à la robustesse du code et à la confidentialité des utilisateurs.
        </p>
        <p>
          Dans une démarche responsable, j’ai aussi réduit l’empreinte carbone
          de l’application grâce à des principes d’éco-conception.
        </p>
        <p>
          Chaque détail a été travaillé avec soin, dans l’idée de proposer un
          outil sincère, utile et durable.
        </p>
      </TitleWithParagraph>
    </>
  );
}
