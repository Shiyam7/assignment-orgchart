import { atom } from 'jotai'
import { Employee } from '../utils';

export const searchAtom = atom('');
export const SelectedTeamAtom = atom<String | undefined | null>('');

export const employeeAtom = atom<Employee[]>([]);
export const employeeFilteredAtom = atom<Employee[]>([]);


