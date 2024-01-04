export function formatDate(dateString: string) {
  // some releases have unknown day and month release dates
  let isYearOnly = false
  if (dateString.includes("??")) {
    isYearOnly = true
    dateString = dateString.split("?")[0]
  }
  const date = new Date(dateString)
  if (isNaN(date.getTime())) {
    return ""
  }
  if (isYearOnly) {
    return date.toLocaleDateString("en-US", { year: "numeric", timeZone: "UTC"})
  } else {
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC"})
  }
}