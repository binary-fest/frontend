import { CompetitionType } from './Team';

interface Competition {
  title: string,
  description: string,
  imageUrl: string,
  guideBookUrl: string,
  isOpen: boolean,
  code: CompetitionType
}

export type { Competition }