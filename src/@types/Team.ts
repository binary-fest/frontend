type CompetitionType = "uiux" | "iot"

interface Team {
  name: string
  email: string
  institute: string
  title: string
  competition_type: CompetitionType
}

export type { Team, CompetitionType }