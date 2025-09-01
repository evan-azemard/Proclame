import { Button, Container, MultiInput, Title, Wave } from "@atoms/index";
import { useEffect } from "react";
import styles from "./AdminUsers.module.scss";
export default function AdminUsers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Wave />
      <MultiInput
        name="search"
        type="search"
        label="Rechercher un utilisateur"
        placeholder="Rechercher par pseudo ou email"
      />

      {/* Si recherche */}
      {/* <Wave />

      <div className="flex-center mb-6">
        <Title type={2}>
          Thomas
        </Title>
      </div>
        <p className="mb-2">Dernière connexion : 2023-03-15</p>
        <p>Dernière modification du mot de passe : 2023-03-14</p>
      <Wave /> */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nom d'utilisateur</th>
              <th>Email</th>
              <th>Dernière connexion</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JohnDoe</td>
              <td>johndoe@example.com</td>
              <td>2023-03-15</td>
              <td className={styles.actions}>
                <Button text="Modifier" />
                <Button text="Supprimer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
}
