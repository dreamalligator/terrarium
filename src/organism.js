// nothing saved (or just hardcoded data), just localStorage, just db, both localStorage and db
const SAVE_STATE_ICONS = ['◌', '◐', '◑', '◉'];

/** a base Organism class. Just keeping this around in case this project is used for something other than plants I guess. Let me know in a github issue if you think of a good way to implement! */
class Organism {
  constructor(options) {
    this.alive = true;
    this.id = options.id;
    this.taxon = options.taxon;
    this._taxonomicLink = undefined;

    this.saveState = {
      localStorage: ko.observable(false),
      db: ko.observable(false),
    }

    this.saveStateIcon = ko.pureComputed(() => {
      const l = this.saveState.localStorage();
      const d = this.saveState.db();
      let index = 0;

      if (l & !d)
        index = 1;
      else if (!l & d)
        index = 2;
      else if (l & d)
        index = 3;

      return SAVE_STATE_ICONS[index];
    })
  }

  sync() {

  }
}

export default Organism;
