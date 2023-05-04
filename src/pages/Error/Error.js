import styles from './Error.module.scss'

export function Error() {
  return (
    <main className={styles.main}>
      <div className={styles.error}>
        <h1 className={styles.error__title}>{'Error 404'.toUpperCase()}</h1>
        <h2 className={styles.error__message}>
          L'utilisateur n'a pas été trouvé ou bien a été supprimé.
        </h2>
      </div>
    </main>
  )
}
