const plantSchema = {
  taxon: {
    format: {
      pattern: /\D*/, // no digits
    },
    presence: true,
  },
  id: {
    format: {
      pattern: /\S*/, // no whitespace
    },
    presence: true,
  },
  owner: {
    format: {
      pattern: /\D*/, // no digits
    },
  },
  source: {
    keyValidator: ['name', 'comments'],
  },
  'source.id': {
    // not required, can be anything
  },
  'source.name': {
    // required key if object exists, can be anything
  },
  'source.comments': {
    // required key if object exists, can be anything
    length: {
      minimum: 10,
    },
  },
  notes: {
    length: {
      minimum: 1,
    },
    arrayValidator: {
      date: {
        datetime: true,
      },
      comments: {
        length: {
          minimum: 10,
        },
      },
    },
    presence: true,
  },
  alive: {
    inclusion: {
      within: [true, false],
    },
  },
};

export default plantSchema;
