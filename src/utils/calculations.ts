import { Release } from "@tyleretters/discography";

// 00:00:00 to seconds
export const timeToSeconds = (time: string): number => {
  const [hours, minutes, seconds] = time.split(":").map((t) => parseInt(t))
  return (hours * 60 * 60) + (minutes * 60) + seconds
}

// seconds to friendly
export const secondsToFriendly = (seconds: number): string => {
  let out = ""
  const h = Math.floor(seconds / 3600)
  if (h) out += `${h}hours `
  const m = Math.floor((seconds % 3600) / 60)
  if (m) out += `${m}min `
  const s = Math.floor(seconds % 60)
  out += `${s}sec`
  return out
}

export const getRuntime = (release: Release): number => {
  const length = release.tracks.reduce((acc, track) => {
    return acc + timeToSeconds(track.length)
  }, 0)
  return length;
}