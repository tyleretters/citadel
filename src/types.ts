export interface TrackType {
  number: number
  title: string
  length: string
  track_slug: string
  id: string
}

export interface ReleaseType {
  title: string
  project: string
  released: string
  type: string
  format: string
  role: string
  label: string
  tracks: Array<TrackType>
  notes: string
  credits: string
  release_slug: string
  project_slug: string
  id: string
}