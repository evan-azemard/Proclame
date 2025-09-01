import { Button, Container, Wave } from "@atoms/index";
import { SectionForm } from "@organisms/index";
import { useEffect } from "react";
import styles from "./AdminProclamations.module.scss";
export default function AdminProclamations() {
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
              <th>Statut</th>
              <th>Modifier</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Piano</td>
              <td className={styles.actions}>
                <Button text="Désactiver" />
              </td>
              <td className={styles.actions}>
                <Button text="Modifier" />
              </td>
              <td className={styles.actions}>
                <Button text="Supprimer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Wave />
      <SectionForm type="adminProclamation" />
    </Container>
  )
}
