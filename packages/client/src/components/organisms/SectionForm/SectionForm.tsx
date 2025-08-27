import type { SectionFormProps } from "./SectionForm.props";
import styles from "./SectionForm.module.scss";
import { Button, MultiInput } from "@atoms/index";

export default function SectionForm({ type }: SectionFormProps) {
  return (
    <>
      {(() => {
        switch (type) {
          case "login":
            return (
              <section className={styles.section}>
                <MultiInput
                  name="email"
                  type="email"
                  label="Adresse email"
                  placeholder="Entrer votre adresse email"
                />
                <MultiInput
                  name="password"
                  type="password"
                  label="Mot de passe"
                  placeholder="Entrer votre mot de passe"
                />
                <MultiInput
                  name="checkbox"
                  type="checkbox"
                  label="J'accepte la politique des cookies"
                />
                <div className={styles.buttonGroup}>
                  <Button text="S'inscrire" to="/register" />
                  <Button text="connexion" />
                </div>
              </section>
            );
          case "contact":
            return (
              <section className={styles.section}>
                <MultiInput
                  name="email"
                  type="email"
                  label="Adresse email"
                  placeholder="Entrer votre adresse email"
                />
                <MultiInput
                  name="username"
                  type="text"
                  label="Nom d'utilisateur"
                  placeholder="Entrer votre nom d'utilisateur"
                />
                <MultiInput
                  name="text"
                  type="textarea"
                  label="Message"
                  placeholder="Entrer votre message"
                />
                <div className={styles.buttonGroup}>
                  <Button text="Envoyer" />
                </div>
              </section>
            );
          case "register":
            return (
              <section className={styles.section}>
                <MultiInput
                  name="username"
                  type="text"
                  label="Nom d'utilisateur"
                  placeholder="Entrer votre nom d'utilisateur"
                />
                <MultiInput
                  name="email"
                  type="email"
                  label="Adresse email"
                  placeholder="Entrer votre adresse email"
                />
                <MultiInput
                  name="password"
                  type="password"
                  label="Mot de passe"
                  placeholder="Entrer votre mot de passe"
                />
                <MultiInput
                  name="confirm-password"
                  type="password"
                  label="Confirmez le mot de passe"
                  placeholder="Confirmez votre mot de passe"
                />
                <MultiInput
                  name="checkbox"
                  type="checkbox"
                  label="J'accepte les conditions générales d'utilisation"
                />
                <div className={styles.buttonGroup}>
                  <Button text="se connecter" to="/login" />
                  <Button text="valider" />
                </div>
              </section>
            );
          case "profile":
            return (
              <section className={styles.section}>
                <MultiInput
                  name="current-password"
                  type="password"
                  label="Mot de passe actuel"
                  placeholder="Entrer votre mot de passe actuel"
                />
                <MultiInput
                  name="new-password"
                  type="password"
                  label="Nouveau mot de passe"
                  placeholder="Entrer votre nouveau mot de passe"
                />
                <MultiInput
                  name="confirm-new-password"
                  type="password"
                  label="Confirmez le nouveau mot de passe"
                  placeholder="Confirmez votre nouveau mot de passe"
                />
                <div className={styles.buttonGroup}>
                  <Button text="enregistrer" />
                </div>
              </section>
            );
          case "admin-login":
            return (
              <section className={styles.section}>
                <MultiInput
                  name="email"
                  type="email"
                  label="Adresse email"
                  placeholder="Entrez votre adresse email"
                />
                <MultiInput
                  name="password"
                  type="password"
                  label="Mot de passe"
                  placeholder="Entrez votre mot de passe"
                />
                <div className={styles.buttonGroup}>
                  <Button text="connexion" />
                </div>
              </section>
            );
          case "admin-category":
            return (
              <section className={styles.section}>
                <MultiInput
                  name="category-name"
                  type="text"
                  label="Nom de la catégorie"
                  placeholder="Entrer le nom de la catégorie"
                />
                <div className={styles.buttonGroup}>
                  <Button text="enregistrer" />
                </div>
              </section>
            );
          case "admin-sound":
            return (
              <section className={styles.section}>
                <MultiInput
                  name="sound-name"
                  type="file"
                  label="Ajouter un son"
                  placeholder="Sélectionner un fichier audio"
                />
                <div className={styles.buttonGroup}>
                  <Button text="enregistrer" />
                </div>
              </section>
            );
          case "admin-proclamation":
            return (
              <section className={styles.section}>
                <MultiInput
                  name="proclamation-name"
                  type="text"
                  label="Nom de la proclamation"
                  placeholder="Entrer le nom de la proclamation"
                />
                <MultiInput
                  name="proclamation-text"
                  type="textarea"
                  label="Texte de la proclamation"
                  placeholder="Entrer le texte de la proclamation"
                />
                <div className={styles.buttonGroup}>
                  <Button text="enregistrer" />
                </div>
              </section>
            );
          default:
            return <p>Type de formulaire non reconnu.</p>;
        }
      })()}
    </>
  );
}
