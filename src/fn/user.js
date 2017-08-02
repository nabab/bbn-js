/**
 * Created by BBN on 10/02/2017.
 */
;(function($, bbn){
  "use strict";

  $.extend(bbn.fn, {

    /**     USERS     */

    userName: function(d){
      var type = (typeof(d)).toLowerCase();
      if ( type === 'object' ){
        if ( d.full_name ){
          return d.full_name;
        }
        if ( d.login ){
          return d.login;
        }
        return bbn.lng.unknown + (d.id ? " (" + d.id + ")" : "");
      }
      if ( (type === 'number') ){
        if ( bbn.users !== undefined ){
          return bbn.fn.get_field(bbn.users, "value", d, "text");
        }
        return bbn.lng.unknown + " (" + d + ")";
      }
      return bbn.lng.unknown;
    },

    userGroup: function(d){
      var type = (typeof(d)).toLowerCase();
      if ( type === 'object' ){
        d = d.id_group;
        type = (typeof(d)).toLowerCase();
      }
      if ( (type === 'number') ){
        if ( bbn.usergroups !== undefined ){
          return bbn.fn.get_field(bbn.usergroups, "value", id, "text");
        }
        return bbn.lng.unknown + " (" + d + ")";
      }
      return bbn.lng.unknown;
    },

    userAvatar: function(id){
      var type = (typeof(d)).toLowerCase(),
          avatar;
      if ( (type === 'object') && d.avatar ){
        avatar = d.avatar;
      }
      if ( (type === 'number') && (bbn.users !== undefined) ){
        avatar = bbn.fn.get_field(bbn.users, "value", id, "avatar");
      }
      if ( avatar ){
        return '<span class="bbn-avatar"><img src="' + avatar + '" alt="' + name + '"></span>';
      }
      return bbn.var.defaultAvatar;
    },

  })

})(jQuery, bbn);