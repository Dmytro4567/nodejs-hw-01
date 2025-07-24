import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Помилка читання файлу:', error.message);
    return [];
  }
};
