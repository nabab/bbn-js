/**
 * @file   Form related functions.
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
     * @method   add_inputs
     * @todo     Add method description for add_inputs
     * @global   
     * @memberof bbn.fn
     * @param    {Object} form   
     * @param    {array}  params 
     * @param    {String} prefix 
     * @returns  {*}      
     */
    add_inputs(form, params, prefix){
      if ( form && (form.tagName === 'FORM') ){
        let appendToForm = (name, val) => {
          let input = document.createElement('input');
          input.setAttribute('type', 'hidden');
          input.setAttribute('name', name);
          input.setAttribute('value', val);
          form.appendChild(input);
        };
        params = JSON.parse(JSON.stringify(params || {}));
        prefix = prefix || '';
        
        if ( params ){
          bbn.fn.iterate(params, (param, key) => {
            let name = prefix ? `${prefix}[${key}]` : key;
            if ( param instanceof Date ){
              appendToForm(form, name, param.toISOString());
            }
            else if ( param instanceof Array ){
              param.forEach((e, i) => {
                const tempName = `${name}[${i}]`;
                if ( typeof e === 'object' ){
                  bbn.fn.add_inputs(form, e, tempName);
                }
                else {
                  appendToForm(tempName, e.toString());
                }
              });
            }
            else if (
              (typeof param === 'object') &&
              !(param instanceof File)
            ){
              bbn.fn.add_inputs(form, param, name);
            }
            else {
              appendToForm(name, param.toString());
            }
          });
        }
      }
    },

    /**
     * @method   cancel
     * @todo     Add method description for cancel
     * @global   
     * @memberof bbn.fn
     * @param    {HTMLElement} form 
     * @param    {Event}       e    
     * @returns  {*}           
     */
    cancel(form, e){
      if ( e ){
        e.preventDefault();
      }
      //bbn.fn.reset(form, e);
      let obj = bbn.fn.formChanges(form);
      for ( let n in obj ){
        if ( obj[n].oldValue !== obj[n].value ){
          let input = form.querySelector("input[name='" + n + "']");
          //if ( input.is(":checkbox,:radio") ){
          if ( (input.type === "checkbox") || (input.type === "radio") ){          
            //input.trigger("click");
            input.click();
          }
          else {
            input.val(obj[n].oldValue);
            //input.trigger("change").trigger("blur");
            input.onchange(); 
            input.blur();
          }
        }
      }
      bbn.fn.log("CANCEL", obj);
    },

    /**
     * @method   reset
     * @todo     Add method description for reset
     * @global   
     * @memberof bbn.fn
     * @param    {HTMLElement} form 
     * @param    {Event}       e    
     * @returns  {*}           
     */
    reset(form, e){
      //$(form).data("bbnSubmit", null);
      if ( form ){
        form.setAttribute('bbnSubmit', null);
      }
    },

    /**
     * @method   submit
     * @todo     Add method description for submit
     * @global   
     * @memberof bbn.fn
     * @fires    {*}           
     * @fires    {*}           
     * @param    {HTMLElement} form 
     * @param    {Event}       e    
     * @returns  {*}           
     */
    submit(form, e){
      //let $form = $(form),
      let url = form.getAttribute("action") || bbn.env.path,
          data;
      if ( url === '' ){
        url = '.';
      }
      
      //if ( (typeof(url) === 'string') && (url.indexOf("http") !== 0 || url.indexOf(window.document.location.hostname) !== -1) && !form.is("[target]") ){
      if ( (typeof(url) === 'string') && (url.indexOf("http") !== 0 || url.indexOf(window.document.location.hostname) !== -1) && !form.getAttribute("target") ){  
        if ( e ){
          e.preventDefault();
        }
        data = bbn.fn.formdata(form);
        
        if ( data ){
          //$form.attr("action", null);
          form.setAttribute('action', null);          
          //$form.data("bbnSubmit", 1);
          form.dataset.bbnSubmit = 1;
          //var script = $form.data("script");
          let script = form.dataset.script;

          if ( bbn.fn.isFunction(script) ){
            /*$form.data("script", function(d){
              $form.attr("action", url);
              script(d);
            })*/
            form.dataset.script = d =>{
              form.setAttribute("action", url);
              script(d);
            };
          }
          //if ( $form.data("script") ){
          if ( form.getAttribute("data-script") ){  
            //bbn.fn.post(url, data, $form.data("script"));
            bbn.fn.post(url, data, form.getAttribute("data-script"));
          }
          else{
            bbn.fn.post(url, data);
          }
        }
      }
    },

    /**
     * @method   fieldValue
     * @todo     Add method description for fieldValue
     * @global   
     * @memberof bbn.fn
     * @param    {HTMLElement} field 
     * @returns                
     */
    fieldValue(field){
      //var $f = $(field),
        let  v;
      //if ( $f.is(":checkbox") ){
      if ( field.type === "checkbox" ){
      //if ( $f.is(":checked") ){
        if ( field.checked ){
        //v = $f.val();
          v = field.value;
          if ( !v ){
            v = 1;
          }
        }
        else{
          v = 0;
        }
      }
      //else if ( $f.is(":radio") ){
        //if ( $f.is(":checked") ){
      else if ( field.type === "radio" ){      
        if ( field.checked ){  
        //v = $f.val();
          v = field.value;
        }
      }
      else{
        //v = $f.val();
        v = field.value;
      }
      return v;
    },

    /**
     * @method   formdata
     * @todo     Add method description for formdata
     * @global   
     * @memberof bbn.fn
     * @fires    {*}            
     * @param    {HTMLElementL} form 
     * @returns                 
     */
    formdata(form){
     // var $f = $(form),
          // inputs with a name
      //  $inputs = $f.find(":input").filter("[name]"),
      let $inputs = form.querySelectorAll('input[name],select[name],textarea[name],button[name]'),
          num_changes = 0,
          //$$,
          res = {},
          n,
          v,
          forget;
      //$inputs.each(function(j){
      bbn.fn.each($inputs, ( input, i ) => {
        //$$ = $(this);
        v = bbn.fn.fieldValue(input);
        //if ( (v !== undefined) && !$$.is(":disabled") ){
        if ( (v !== undefined) && !input.disabled ){  
          //var name = this.name;
          let name = input.name;
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
            let tmp, parts = name.split(".");
            tmp = res;
            for ( let i = 0; i < parts.length; i++ ){
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

    /**
     * @method   formChanges
     * @todo     Add method description for formChanges
     * @global   
     * @memberof bbn.fn
     * @fires    {*}           
     * @param    {HTMLElement} form 
     * @returns                
     */
    formChanges(form){
      //var $f = $(form),
          //inputs with a name
      //    $inputs = $f.find(":input[name]:not(.bbn-no,.bbn-no :input,.bbn-form :input)"),
      let data = bbn.fn.formdata(form),
          changes = {},
          v,
          name,
          $inputs = form.querySelectorAll('input[name]:not(.bbn-no),select[name]:not(.bbn-no),textarea[name]:not(.bbn-no),button[name]:not(.bbn-no)');

      bbn.fn.each($inputs, (val, i)=>{
        if ( (val.classList.contains('bbn-form') === false) || (val.classList.contains('bbn-form') &&
          (val.querySelectorAll('input,select,textarea,button').length === -1)) 
        ){
           //$inputs.each(function(){
           //name = this.name;
          name = val.name;
          //v = $(this).data("bbnOriginalValue");
          v = val.getAttribute("data-bbn-original-value");        
          if ( (v !== null) && (data[name] !== undefined) && (data[name] !== v) ){
            changes[name] = {
              value: data[name],
              oldValue: v
            };
          }
        }  
      });
      return changes;
    },

    /**
     * @method   objectToFormData
     * @todo     Add method description for objectToFormData
     * @global   
     * @memberof bbn.fn
     * @param    {Object|Array|File} obj        
     * @param    {String}            key        
     * @param    {Array}             ignoreList 
     * @returns                      
     */
    objectToFormData(obj, key, ignoreList){
      let formData = new FormData();
      function appendFormData(data, key = ''){
        if ( !ignoreList || (bbn.fn.isArray(ignoreList) && !ignoreList.includes(key)) ){
          if ( data instanceof File ){
            formData.append(key, data);
          } 
          else if (bbn.fn.isArray(data)) {
            bbn.fn.each(data, (v, i) => {
              appendFormData(v, key + '[' + i + ']');
            })
          } 
          else if ( bbn.fn.isObject(data) && Object.keys(data).length ){
            bbn.fn.iterate(data, (v, i) => {
              if ( data.hasOwnProperty(i) ){
                appendFormData(v, !key ? i : key + '[' + i + ']');
              }
            })
          } 
          else {
            if ( !bbn.fn.isNull(data) && (data !== undefined) ){
              formData.append(key, data);
            }
          }
        }
      }
      appendFormData(obj, key);
      return formData;
    },

  });
})(bbn);
