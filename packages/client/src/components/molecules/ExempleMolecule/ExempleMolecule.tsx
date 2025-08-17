import styles from './ExempleMolecule.module.scss'
import { Exemple } from '@atoms/index'

export function ExempleMolecule() {
  return (
    <div className={styles.molecule}>
      <Exemple />
      <Exemple />
    </div>
  )
}
