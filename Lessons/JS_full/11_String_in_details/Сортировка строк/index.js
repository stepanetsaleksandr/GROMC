const sortContacts = (contacts, isAsk) => {
  if (!Array.isArray(contacts)) {
    return null;
  }

  const result = contacts.sort((a, b) => {
    if (!isAsk) {
      return b.name.localeCompare(a.name);
    }
    return a.name.localeCompare(b.name);
  });

  return result;
};

const contacts = [
  {
    name: 'Tom',
    phoneNumber: '666-66-66',
  },

  {
    name: 'John',
    phoneNumber: '555-55-55',
  },

  {
    name: 'Ann',
    phoneNumber: '333-33-33',
  },

  {
    name: 'Stephan',
    phoneNumber: '444-44-44',
  },

  {
    name: 'Suzy',

    phoneNumber: '222-22-22',
  },
  {
    name: 'Adel',

    phoneNumber: '111-11-11',
  },
];

console.log(sortContacts(contacts, false));
