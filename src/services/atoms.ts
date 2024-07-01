import { atom } from 'jotai'
import { Employee, EmployeeNode } from '../utils';

export const searchAtom = atom('');
export const SelectedTeamAtom = atom<String | undefined | null>('');

export const employeesAtom = atom<Employee[]>([]);
export const employeeFilteredAtom = atom<Employee[]>([]);
export const employeeAtom = atom<Employee | null>(null)
export const relationAtom = atom<EmployeeNode[]>([])


