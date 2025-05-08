import { atom } from 'recoil';
import { Subjects } from '@/features/main_component/Schedule/TimeTable';

export const scheduleState = atom<Subjects | null>({
  key: 'scheduleState',
  default: null,
});