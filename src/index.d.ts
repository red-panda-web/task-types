/*
Типизируйте функцию getPersons, возвращающую массив объектов со следующими свойствами:
- name - строка
- age - число
- gender - 'male' или 'female'
 */
type g = 'male' | 'female';

type obj = {
    name: string;
    age: number;
    gender: g;
};

type objs = obj[];

export function getPersons(): objs;

/*
Типизируйте функцию personToString, возвращающую строку и принимающую объект одного из следующих форматов:
   1. Пользователь:
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   2. Сотрудник
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   - company- строка
 */

type user = {
    name: string;
    age: number;
    gender: g;
};

type employee = user & { company: string };

export function personToString(person: user | employee): string;
