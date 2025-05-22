import { atom } from 'recoil';
import { Subjects } from '@/features/MainComponent/Schedule/TimeTable';

export const scheduleState = atom<Subjects | null>({
  key: 'scheduleState',
  default: null,
});