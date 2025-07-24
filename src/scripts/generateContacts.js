import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newContacts = [];

    for (let i = 0; i < number; i++) {
      const contact = createFakeContact();
      newContacts.push(contact);
    }

    const updatedContacts = [...contacts, ...newContacts];
    await writeContacts(updatedContacts);

    console.log(`${number} контактів успішно додано.`);
  } catch (error) {
    console.error('Помилка генерації контактів:', error.message);
  }
};

generateContacts(5);
