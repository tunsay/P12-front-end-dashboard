import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Dashboard.module.scss'
//** Api Data */
// import {
//   getUserData,
//   getUserActivity,
//   getUserPerformance,
//   getUserAverageSessions,
// } from '../../services/userData'
/** mock data */
import {
  getUserData,
  getUserActivity,
  getUserPerformance,
  getUserAverageSessions,
} from '_mocks_/userData'
/** Components */
import { ActivityChart } from 'components/ActivityChart/ActivityChart'
import { PerformanceChart } from 'components/PerformanceChart/PerformanceChart'
import { AverageSessionsChart } from 'components/AverageSessionsChart/AverageSessionsChart'
import { ScoreChart } from 'components/ScoreChart/ScoreChart'
import { Card } from 'components/Card/Card'
/** pages */
import { Error } from 'pages/Error/Error'

import energyLogo from '../../assets/energy.svg'
import chickenLogo from '../../assets/chicken.svg'
import cheeseburgerLogo from '../../assets/cheeseburger.svg'
import appleLogo from '../../assets/apple.svg'

const CardDataList = {
  calorieCount: {
    name: 'Calories',
    unit: 'kCal',
    image: energyLogo,
    color: 'red',
  },
  proteinCount: {
    name: 'Proteines',
    unit: 'g',
    image: chickenLogo,
    color: 'blue',
  },
  carbohydrateCount: {
    name: 'Glucides',
    unit: 'g',
    image: appleLogo,
    color: 'yellow',
  },
  lipidCount: {
    name: 'Lipides',
    unit: 'g',
    image: cheeseburgerLogo,
    color: 'pink',
  },
}

/**
 * Component for rendering the dashboard page
 * @component
 * @returns {React.ReactElement} The dashboard page
 * @default
 */

function Dashboard() {
  /* gets id from url */
  const { id } = useParams()
  /* component states */
  const [user, setUser] = useState()
  const [activity, setActivity] = useState()
  const [performance, setPerformance] = useState()
  const [averageSessions, setAverageSessions] = useState()
  const [score, setScore] = useState()
  const [keyData, setKeyData] = useState()

  /**
   * Retrieves data for the dashboard from the server.
   * @async
   * @function
   * @param {number} id - The user ID
   * @throws {Error} If the data cannot be retrieved from the server
   */
  useEffect(() => {
    const getData = async (id) => {
      try {
        const userData = await getUserData(id)
        setUser(userData)
        // User 12 and 18 don't use the same score name, 12=todayScore and 18=score
        if (userData.todayScore) {
          setScore(userData.todayScore)
        } else {
          setScore(userData.score)
        }
        setKeyData(userData.keyData)
        const userActivity = await getUserActivity(id)
        setActivity(userActivity)
        const userPerformance = await getUserPerformance(id)
        setPerformance(userPerformance)
        const userAverageSessions = await getUserAverageSessions(id)
        setAverageSessions(userAverageSessions)
      } catch (err) {
        console.log('Error:', err)
      }
    }
    getData(id)
  }, [id])

  /**
   * Renders the dashboard page if user id exists, otherwise renders an error page.
   * @returns {React.ReactElement} The dashboard page or an error page
   */
  if (id === '15') {
    // condition to test mock data
    // if (user) {
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

          <div className={styles.dashboard__container}>
            <div className={styles.dashboard__container__left}>
              <ActivityChart activityData={activity} />

              <div className={styles.dashboard__container__charts}>
                <AverageSessionsChart sessionsData={averageSessions} />
                <PerformanceChart performanceData={performance} />
                <ScoreChart score={score} />
              </div>
            </div>

            <aside className={styles.dashboard__container__right}>
              {keyData &&
                Object.entries(keyData).map(([key, value]) => {
                  const data = {
                    count: value,
                    ...CardDataList[key],
                  }

                  return <Card value={data} />
                })}
            </aside>
          </div>
        </section>
      </main>
    )
    /* renders error page if user id does not exist */
  } else return <Error />
}

export default Dashboard
