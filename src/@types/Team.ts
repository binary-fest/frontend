type CompetitionType = "uiux" | "iot"

interface Team {
  name: string
  email: string
  institute: string
  title: string
  competition_type: CompetitionType
  url_files: string
}

export type { Team, CompetitionType }