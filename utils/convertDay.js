const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const convertDay = (createdAt) => {
  const day = new Date(createdAt).getDay()
  return daysOfWeek[day]
}

export default convertDay
