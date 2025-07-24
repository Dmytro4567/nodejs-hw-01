import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Контактів немає. Видаляти нічого.');
      return;
    }

    contacts.pop();
    await writeContacts(contacts);

    console.log('Останній контакт успішно видалено.');
  } catch (error) {
    console.error('Помилка видалення останнього контакту:', error.message);
  }
};

removeLastContact();

