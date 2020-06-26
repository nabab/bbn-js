/**
 * @file   History.
 * @author BBN Solutions <info@bbn.solutions>
 * @since  12/04/2020
 */

;((bbn) => {
  "use strict";

  /**
   * @var {Object} _private Misc variable for internal use
   */
  let _private = {};

  Object.assign(bbn.fn, {
    /**
     * @method   history
     * @todo     Add method description for history
     * @global   
     * @memberof bbn.fn
     * @returns   
     */
    history(){
      return window.history || false;
    },

  });
})(bbn);
