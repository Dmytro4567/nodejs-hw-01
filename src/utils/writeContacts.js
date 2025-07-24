import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const stringifiedData = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, stringifiedData, 'utf-8');
    console.log('Контакти успішно збережено.');
  } catch (error) {
    console.error('Помилка запису у файл:', error.message);
  }
};

