import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Dashboard.module.scss'

//** Api Data */
import { getUserData } from '../../services/userData'
/** mock data */
// import { getUserData } from '_mocks_/userData'

// import { TUserForHomePage } from 'types/apiData.types'

import { Error } from 'pages/Error/Error'

function Dashboard() {
  /* gets id from url */
  const { id } = useParams()
  /* component states */
  const [user, setUser] = useState()

  useEffect(() => {
    const getData = async (id) => {
      try {
        const userData = await getUserData(id)
        console.log(userData)
        setUser(userData)
      } catch (err) {
        console.log('Error:', err)
      }
    }
    getData(id)
  }, [id])

  // If the api/mock don't find the user, display error
  if (user) {
    return (
      <main className={styles.main}>
        <section className={styles.dashboard}>
          <h1 className={styles.dashboard__title}>
            Bonjour{' '}
            <span className={styles.dashboard__title__username}>
              {user?.userInfos.firstName}
            </span>
          </h1>
          <p className={styles.dashboard__subtitle}>
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </p>
        </section>
      </main>
    )
  } else return <Error />
}

export default Dashboard
