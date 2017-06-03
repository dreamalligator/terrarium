// see http://validatejs.org/

const plantSchema = {
  taxon: {
    presense: true
  },
  id: {
    pattern: /\d/,
    presense: true
  }
}

export default plantSchema;
