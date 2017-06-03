const plantSchema = {
  taxon: {
    format: {
      pattern: /\D/
    },
    presence: true
  },
  id: {
    // format: {
    //   pattern: /\D/
    // },
    presence: true
  },
  owner: {

  },
  vendor: {

  },
  'vendor.vendorId': {

  },
  'vendor.name': {

  },
  notes: {

  },
  'notes.date': {

  },
  'notes.comments': {

  },
  alive: {

  }
}

export default plantSchema;
