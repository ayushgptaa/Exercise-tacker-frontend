const convertDate = (dateString) => {
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
  return formattedDate
}

export default convertDate
