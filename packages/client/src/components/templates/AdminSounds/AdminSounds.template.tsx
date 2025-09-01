import { Button, Container, Wave } from "@atoms/index";
import { useEffect } from "react";
import styles from "./AdminSounds.module.scss";
import { SectionForm } from "@organisms/index";
export default function AdminSounds() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Wave />
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>Ecouter</th>
              <th>Statut</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Piano</td>
              <td className={styles.actions}>
                <Button text="Ecouter" />
              </td>
              <td className={styles.actions}>
                <Button text="Désactiver" />
              </td>
              <td className={styles.actions}>
                <Button text="Supprimer" />
              </td>
            </tr>

             <tr>
              <td>2</td>
              <td>Vent</td>
              <td className={styles.actions}>
                <Button text="Ecouter" />
              </td>
              <td className={styles.actions}>
                <Button text="Désactiver" />
              </td>
              <td className={styles.actions}>
                <Button text="Supprimer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Wave />
      <SectionForm type="adminSound" />
    </Container>
  );
}
