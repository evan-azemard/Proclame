import styles from './ExempleOrganism.module.scss'
import { ExempleMolecule } from '@molecules/ExempleMolecule'

export function ExempleOrganism() {
  return (
    <section className={styles.organism}>
      <ExempleMolecule />
    </section>
  )
}
