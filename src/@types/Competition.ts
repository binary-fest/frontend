import { CompetitionType } from './Team';

interface Competition {
  title: string,
  description: string,
  imageUrl: string,
  guideBookUrl: string,
  isOpen: boolean,
  code: CompetitionType,
  technicalGuideUrl: string,
  templateUrl?: string
}

export type { Competition }