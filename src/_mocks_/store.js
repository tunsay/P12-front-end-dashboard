export const userData = {
  id: 28,
  userInfos: {
    firstName: 'Mohammed',
    lastName: 'Calin',
    age: 26,
  },
  todayScore: 0.1,
  keyData: {
    calorieCount: 2000,
    proteinCount: 20,
    carbohydrateCount: 240,
    lipidCount: 200,
  },
}

export const userActivity = {
  userId: 28,
  sessions: [
    {
      day: '2021-07-01',
      kilogram: 40,
      calories: 140,
    },
    {
      day: '2021-07-02',
      kilogram: 40,
      calories: 120,
    },
    {
      day: '2021-07-03',
      kilogram: 41,
      calories: 180,
    },
    {
      day: '2021-07-04',
      kilogram: 41,
      calories: 190,
    },
    {
      day: '2021-07-05',
      kilogram: 40,
      calories: 160,
    },
    {
      day: '2021-07-06',
      kilogram: 38,
      calories: 162,
    },
    {
      day: '2021-07-07',
      kilogram: 36,
      calories: 190,
    },
  ],
}

export const userPerformance = {
  userId: 28,
  kind: {
    1: 'cardio',
    2: 'energy',
    3: 'endurance',
    4: 'strength',
    5: 'speed',
    6: 'intensity',
  },
  data: [
    {
      value: 180,
      kind: 1,
    },
    {
      value: 160,
      kind: 2,
    },
    {
      value: 240,
      kind: 3,
    },
    {
      value: 150,
      kind: 4,
    },
    {
      value: 300,
      kind: 5,
    },
    {
      value: 190,
      kind: 6,
    },
  ],
}

export const userAverageSessions = {
  userId: 28,
  sessions: [
    {
      day: 1,
      sessionLength: 40,
    },
    {
      day: 2,
      sessionLength: 43,
    },
    {
      day: 3,
      sessionLength: 45,
    },
    {
      day: 4,
      sessionLength: 50,
    },
    {
      day: 5,
      sessionLength: 10,
    },
    {
      day: 6,
      sessionLength: 0,
    },
    {
      day: 7,
      sessionLength: 80,
    },
  ],
}
