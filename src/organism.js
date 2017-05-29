/** a base Organism class. Just keeping this around in case this project is used for something other than plants I guess. Let me know in a github issue if you think of a good way to implement! */
class Organism {
  constructor(options) {
    if (typeof options.id !== 'string')
      throw new Error(`unexpected id: ${options.id}`);
    if (typeof options.taxon !== 'string')
      throw new Error(`unexpected taxon: ${options.taxon}`);

    this.id = options.id;
    this.taxon = options.taxon;
    this._taxonomicLink = undefined;
  }
}

export default Organism;
