import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    return await readContacts();
  } catch (error) {
    console.error('Помилка при отриманні контактів:', error.message);
    return [];
  }
};

console.log(await getAllContacts());

