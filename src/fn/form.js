/**
 * Created by BBN on 10/02/2017.
 */
;(($, bbn) => {
  "use strict";

  $.extend(bbn.fn, {

    /**     FORMS     */

    /* Adds inputs to a form, respecting the data structure */
    add_inputs(form, params, prefix){
      let name,
          appendToForm = function(form, name, val){
            form.append($("<input>").attr({
              type: "hidden",
              name: name
            }).val(val));
          };
      params = JSON.parse(JSON.stringify(params || {}));
      prefix = prefix || ''
      if ( form.length && params ){
        for ( let param in params ){
          name = prefix ? `${prefix}[${param}]` : param;
          if ( params[param] instanceof Date ){
            appendToForm(form, name, params[param].toISOString());
          }
          else if ( params[param] instanceof Array ){
            params[param].forEach((e, i) => {
              const tempName = `${name}[${i}]`;
              if ( typeof e === 'object' ){
                bbn.fn.add_inputs(form, e, tempName);
              }
              else {
                appendToForm(form, tempName, e.toString());
              }
            });
          }
          else if (
            (typeof params[param] === 'object') &&
            !(params[param] instanceof File)
          ){
            bbn.fn.add_inputs(form, params[param], name);
          }
          else {
            appendToForm(form, name, params[param].toString());
          }
        }
      }
    },

    /*add_inputs: function(form, params, prefix){
      var name,
          is_array;
      if ( form.length && params ){
        is_array = Array.isArray(params);
        for ( var i in params ){
          name = prefix ? prefix + '[' +
            ( is_array ? '' : i ) + ']' : i;
          if ( typeof(params[i]) === 'object' ){
            bbn.fn.add_inputs(form, params[i], name);
          }
          else{
            form.append($("<input>").attr({
              type: "hidden",
              name: name
            }).val(params[i]));
          }
        }
      }
    },*/

    cancel(form, e){
      if ( e ){
        e.preventDefault();
      }
      //bbn.fn.reset(form, e);
      var obj = bbn.fn.formChanges(form);
      for ( var n in obj ){
        if ( obj[n].oldValue !== obj[n].value ){
          var input = $(":input[name='" + n + "']");
          if ( input.is(":checkbox,:radio") ){
            input.trigger("click");
          }
          else {
            input.val(obj[n].oldValue);
            input.trigger("change").trigger("blur");
          }
        }
      }
      bbn.fn.log("CANCEL", obj);
    },

    reset(form, e){
      $(form).data("bbnSubmit", null);
    },

    submit(form, e){
      var $form = $(form),
          url = $form.attr("action") || bbn.env.path,
          data;
      if ( url === '' ){
        url = '.';
      }
      if ( (typeof(url) === 'string') && (url.indexOf("http") !== 0 || url.indexOf(window.document.location.hostname) !== -1) && !$form.is("[target]") ){
        if ( e ){
          e.preventDefault();
        }
        data = bbn.fn.formdata(form);
        if ( data ){
          $form.attr("action", null);
          $form.data("bbnSubmit", 1);
          var script = $form.data("script");
          if ( bbn.fn.isFunction(script) ){
            $form.data("script", function(d){
              $form.attr("action", url);
              script(d);
            })
          }
          if ( $form.data("script") ){
            bbn.fn.post(url, data, $form.data("script"));
          }
          else{
            bbn.fn.post(url, data);
          }
        }
      }
    },

    setInitialValues(ele, force){
      // Keeping the original values in a data attached to the element
      $(":input[name]:not(.bbn-no,.bbn-no :input,.bbn-form :input)", ele).each(function(){
        var $$ = $(this),
            v;
        if ( force || ($$.data("bbnOriginalValue") === undefined) ){
          v = bbn.fn.fieldValue(this);
          if ( v !== undefined ){
            $$.data("bbnOriginalValue", v === undefined ? "" : v);
          }
        }
      });
    },

    formupdated(form){
      var res = true,
          $f = $(form),
          data = bbn.fn.formdata($f),
          $inputs = $f.find(":input:not(.bbn-no,.bbn-no :input,.bbn-form :input)").filter("[name]").filter(function(){
            return $(this).data("bbnOriginalValue") !== undefined;
          }).each(function(){
            if ( $(this).data("bbnOriginalValue")  != data[$(this).attr("name")] ){
              //bbn.fn.log($(this).data("bbnOriginalValue"), data[$(this).attr("name")]);
              res = false;
            }
          });
      return res;
    },

    fieldValue(field){
      var $f = $(field),
          v;
      if ( $f.is(":checkbox") ){
        if ( $f.is(":checked") ){
          v = $f.val();
          if ( !v ){
            v = 1;
          }
        }
        else{
          v = 0;
        }
      }
      else if ( $f.is(":radio") ){
        if ( $f.is(":checked") ){
          v = $f.val();
        }
      }
      else{
        v = $f.val();
      }
      return v;
    },

    formdata(form){
      var $f = $(form),
          // inputs with a name
          $inputs = $f.find(":input").filter("[name]"),
          num_changes = 0,
          $$,
          res = {},
          n,
          v,
          forget;
      $inputs.each(function(j){
        $$ = $(this);
        v = bbn.fn.fieldValue(this);
        if ( (v !== undefined) && !$$.is(":disabled") ){
          var name = this.name;
          if (
            (name.indexOf("[]") === -1) &&
            (name.indexOf("[") > -1) &&
            (name.indexOf("]") > -1) &&
            (name.lastIndexOf("]") === name.length-1)
          ){
            name = bbn.fn.replaceAll("][", ".", name);
            name = bbn.fn.replaceAll("[", ".", name);
            name = bbn.fn.replaceAll("]", "", name);
          }
          if (
            (name.length > 2) &&
            (name.indexOf("[]") === (name.length - 2))
          ){
            n = name.substr(0, name.length - 2);
            if ( res[n] === undefined ){
              res[n] = [];
            }
            res[n].push(v);
          }
          else if ( name.indexOf(".") > -1 ){
            var tmp, parts = name.split(".");
            tmp = res;
            for ( var i = 0; i < parts.length; i++ ){
              if ( res[parts[i]] === undefined ){
                if ( i < (parts.length-1) ){
                  tmp[parts[i]] = {};
                }
                else{
                  tmp[parts[i]] = v;
                }
              }
              tmp = tmp[parts[i]];
            }
          }
          else{
            res[name] = v;
          }
        }
      });
      // return num_changes ? res : false;
      return res;
    },

    formChanges(form){
      var $f = $(form),
          // inputs with a name
          $inputs = $f.find(":input[name]:not(.bbn-no,.bbn-no :input,.bbn-form :input)"),
          data = bbn.fn.formdata(form),
          changes = {},
          v,
          name;
      bbn.fn.log("INPUTS", form, $inputs);
      $inputs.each(function(){
        name = this.name;
        v = $(this).data("bbnOriginalValue");
        if ( (v !== undefined) && (data[name] !== undefined) && (data[name] !== v) ){
          changes[name] = {
            value: data[name],
            oldValue: v
          };
        }
      });
      return changes;
    },

  })

})(jQuery, bbn);