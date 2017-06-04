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
  vendor: {

  },
  'vendor.id': {

  },
  'vendor.name': {

  },
  'vendor.comments': {
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
      within: [true, false, undefined] // undefined is for when I've given it away, or maybe I'm a mess and lost track of my plant :O. Just planning for future ;)
    },
    presence: true
  }
}

export default plantSchema;
