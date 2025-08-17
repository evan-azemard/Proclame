import styles from './ExemplePage.module.scss'
import { ExempleOrganism } from '@organisms/ExempleOrganism'

export function ExemplePage() {
  return (
    <main className={styles.page}>
      <h1>Exemple Page</h1>
      <ExempleOrganism />
    </main>
  )
}
