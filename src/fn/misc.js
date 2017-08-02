/**
 * Created by BBN on 10/02/2017.
 */
;(function($, bbn){
  "use strict";

  $.extend(bbn.fn, {

    /**     MISC     */

    isDom: function(ele){
      return ele instanceof Element;
    },

    isjQuery: function(ele){
      return ele instanceof jQuery;
    },

    timestamp: function(seconds){
      var r = (new Date()).getTime();
      return seconds ? r*1000 : r;
    },

    // Logging function
    log: function(){
      if ( (!bbn.env.isInit || bbn.env.logging) && window.console !== undefined ){
        var args = arguments,
            i = 0;
        while (i < args.length ){
          window.console.log(args[i]);
          i++;
        }
      }
    },

    stat: function(returnStat){
      return;
      if ( bbn.env.logging ){
        var logs = bbn.var.loggers;
        for ( var i = 0; i < arguments.length; i++ ){
          var a = arguments[i],
              type = typeof(a);
          if ( (type === 'boolean') || (type === 'undefined') ){
            break;
          }
          else{
            if ( type === 'object' ){
              a = bbn.fn.getPath(a);
            }
            else{
              a = a.toString();
            }
            if ( !logs[a] ){
              logs[a] = {
                _num: 0,
              };
            }
            logs[a]._num++;
            logs = logs[a];
          }
        }
        if ( arguments[arguments.length-1] === true ){
          var treat = function(obj){
            var v = {};
            for ( var n in obj ){
              if ( n.indexOf('_') !== 0 ){
                v[n + '(' + obj[n]._num + ')'] = treat(obj[n]);
              }
            }
            return v;
          };
          return treat(logs);
        }
        if ( arguments[arguments.length-1] === false ){
          for ( var n in logs ){
            delete logs[n];
          }
          logs._num = 0;
          return ;
        }
        return returnStat;
      }
    },

    tagName: function(element){
      var p = $(element).prop("tagName");
      return p ? p.toLowerCase() : false;
    },

    getAttributes: function(element){
      var attr = {};
      $(element).each(function() {
        $.each(this.attributes, function() {
          // this.attributes is not a plain object, but an array
          // of attribute nodes, which contain both the name and value
          if(this.specified) {
            attr[this.name] = this.value;
          }
        });
      });
      return attr;
    },

    getPath: function(element){
      var path,
          node = $(element),
          done = false;

      while (node.length ){
        var realNode = node[0],
            name = realNode.localName;

        if ( !name ) break;
        if ( realNode === document.body ) break;

        if ( realNode.id ){
          return '#' + realNode.id;
        }

        if ( !done ){
          if ( realNode.className && (realNode.className !== ' ') ){
            name += ('.' + bbn.fn.replaceAll(" ", ".", bbn.fn.replaceAll("  ", " ", realNode.className)));
          }
          done = 1;
        }
        var parent = node.parent(),
            sameTagSiblings = parent.children(name);

        if ( sameTagSiblings.length > 1 ){

          var allSiblings = parent.children(),
              index = allSiblings.index(realNode) + 1;

          if ( index > 1 ){
            name += ':nth-child(' + index + ')';
          }
        }

        path = name + (path ? '>' + path : '');
        node = parent;
      }

      return path;
    },

    /**
     * Creates an empty deferred object which will be resolved after 5 milliseconds
     * @param res
     * @returns {JQueryDeferred<T>}
     */
    makeDeferred: function(res, timeout){
      var deferred = $.Deferred();
      setTimeout(function(){
        deferred.resolve(res);
      }, timeout ? timeout : 5);
      return deferred;
    },

    wait_for_script: function(varname, fn, force){
      // 50 = 10 seconds max
      var myvar = eval(varname);
      if ( force || (myvar === undefined) ){
        var deferred = $.getScript("./?lib=varname");
      }
      else{
        var deferred = bbn.fn.makeDeferred();
      }
      return deferred.then(function(){
        fn();
      });
    },
  })

})(jQuery, bbn);