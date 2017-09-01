/** ◌: nothing changed from hardcoded data, ◐: just localStorage, ◑: just db, ◉: both localStorage and db*/
const SAVE_STATE_ICONS = ['◌', '◐', '◑', '◉'];

/**
 * a base Organism class. Just keeping this around in case this project is used for something other than plants I guess. Let me know in a github issue if you think of a good way to implement!
 * @class Organism
 */
class Organism {
  constructor(options) {
    this.alive = true;
    this.id = options.id;
    this.taxon = options.taxon;
    this._taxonomicLink = undefined;
    this.saveState = ko.observable(0);
    this.saveStates = {
      localStorage: ko.observable(false),
      db: ko.observable(false),
    };
    this.saveStateIcon = ko.pureComputed(() => {
      return SAVE_STATE_ICONS[this.saveState()];
    });
  }

  // /**
  //  * saveState() will return an integer representing the saveState.
  //  * saveState.localStorage() will give you the state of localStorage.
  //  * saveState.db() will give you the state of db syncing.
  //  * @return {integer} the callable state object function? not sure what to call this.
  // */
  // set saveState() {
  //   const l = this._localStorage();
  //   const d = this._db();
  //   let index = this._saveStateIndex;
  //
  //   if (l & !d)
  //     index = 1;
  //   else if (!l & d)
  //     index = 2;
  //   else if (l & d)
  //     index = 3;
  //
  //   return index;
  // }

  sync() {
    if (this.syncLocalStorage()) {
      // TODO
    }

    if (this.syncDb()) {
      // TODO
    }
  }

  syncLocalStorage() {
    window.localStorage.setItem(this.id, ko.toJSON(this));
    this.saveStates.localStorage(true);
    return true;
  }

  // not implemented yet
  syncDb() {
    return false;
  }
}

export default Organism;
