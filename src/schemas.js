const plantSchema = {
  taxon: {
    format: {
      pattern: /\D*/ // no digits
    },
    presence: true
  },
  id: {
    format: {
      pattern: /\S*/ // no whitespace
    },
    presence: true
  },
  owner: {
    format: {
      pattern: /\D*/ // no digits
    }
  },
  source: {

  },
  'source.id': {

  },
  'source.name': {

  },
  'source.comments': {
    length: {
      minimum: 10
    }
  },
  notes: {
    length: {
      minimum: 1
    },
    arrayValidator: {
      date: {
        datetime: true
      },
      comments: {
        length: {
          minimum: 10
        }
      }
    },
    presence: true
  },
  alive: {
    inclusion: {
      within: [true, false]
    }
  }
}

export default plantSchema;
