/**
 * @file   Forms and data.
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
     * Adds the given data to the given form by inserting hidden inputs.
     * 
     * @method   addInputs
     * @global   
     * @memberof bbn.fn
     * 
     * @example
     * ```javascript
     * let o = {name: "Smith", fname: "John"};
     * bbn.fn.addInputs(document.getElementById('myform'), o, 'bbn');
     * // Will write at the end of the given form:
     * // <input type="hidden" name="bbn[name]" value="Smith">
     * // <input type="hidden" name="bbn[fname]" value="John">
     * 
     * ```
     * 
     * @example
     * ```javascript
     * let o = {
     *   People: [
     *     {name: "Smith", fname: "John"},
     *     {name: "Smith", fname: "Eileen"}
     *   ],
     *   Dates: ['2021-08-25', '2021-09-06']
     * };
     * bbn.fn.addInputs(document.getElementById('myform'), o);
     * // Will write at the end of the given form:
     * // <input type="hidden" name="People[0][name]" value="Smith">
     * // <input type="hidden" name="People[0][fname]" value="John">
     * // <input type="hidden" name="People[1][name]" value="Smith">
     * // <input type="hidden" name="People[1][fname]" value="Eileen">
     * // <input type="hidden" name="Dates[0]" value="2021-08-25">
     * // <input type="hidden" name="Dates[1]" value="2021-09-06">
     * ```
     * 
     * @param    {HTMLElement} form   The form to which the inputs should be added
     * @param    {Object}      params The data which will be added
     * @param    {String}      prefix The optional object's name of the fields in the form
     * @returns  {undefined}
     */
    addInputs(form, params, prefix){
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
                  bbn.fn.addInputs(form, e, tempName);
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
              bbn.fn.addInputs(form, param, name);
            }
            else {
              appendToForm(name, param.toString());
            }
          });
        }
      }
    },

    /**
     * Submit a form's data through an Ajax request.
     * 
     * It will also prevent the event if given, and execute the given callback, 
     * or look for one in the data-script attribute.
     * 
     * @method   submit
     * @global   
     * @memberof bbn.fn
     * @fires    {*}           
     * @fires    {*}           
     * 
     * @param    {HTMLElement} form The form to submit
     * @param    {Event}       e    The optional submit event - which will be prevented
     * @param    {Function}    fn   An optional callback function
     * 
     * @returns  {*}           
     */
    submit(form, e, fn){
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
          if (!fn) {
            fn = form.getAttribute("data-script");
          }
          if (fn) {
            if (bbn.fn.isString(fn)) {
              fn = eval(fn);
            }
            bbn.fn.post(url, data, fn);
          }
          else{
            bbn.fn.post(url, data);
          }
        }
      }
    },

    /**
     * Returns the value of a form's input, differenciating between checkboxes, radio and other inputs.
     * 
     * @method   fieldValue
     * @global   
     * @memberof bbn.fn
     * @param    {HTMLElement} field The input element
     * 
     * @returns  {Mixed}       The value
     */
    fieldValue(field){
      let  v;
      if ( field.type === "checkbox" ){
        if ( field.checked ){
          v = field.value;
          if ( !v ){
            v = 1;
          }
        }
        else{
          v = 0;
        }
      }
      else if ( field.type === "radio" ){      
        if ( field.checked ){  
          v = field.value;
        }
      }
      else{
        v = field.value;
      }
      return v;
    },

    /**
     * Returns all the data contained in a form as a single object.
     * 
     * @method   formdata
     * @global   
     * @memberof bbn.fn
     * @fires    {*}            
     * 
     * @example
     * ```javascript
     * // <form id="myform">
     * // <input type="hidden" name="bbn[name]" value="Smith">
     * // <input type="hidden" name="bbn[fname]" value="John">
     * // </form>
     * bbn.fn.formdata(document.getElementById('myform'));
     * // {name: "Smith", fname: "John"};
     * 
     * ```
     * 
     * @example
     * ```javascript
     * // <form id="myform">
     * // <input type="hidden" name="People[0][name]" value="Smith">
     * // <input type="hidden" name="People[0][fname]" value="John">
     * // <input type="hidden" name="People[1][name]" value="Smith">
     * // <input type="hidden" name="People[1][fname]" value="Eileen">
     * // <input type="hidden" name="Dates[0]" value="2021-08-25">
     * // <input type="hidden" name="Dates[1]" value="2021-09-06">
     * // </form>
     * bbn.fn.formdata(document.getElementById('myform'));
     * // {
     * //   People: [
     * //     {name: "Smith", fname: "John"},
     * //     {name: "Smith", fname: "Eileen"}
     * //   ],
     * //   Dates: ['2021-08-25', '2021-09-06']
     * // }
     * ```
     * 
     * @param    {HTMLElement} form 
     * 
     * @returns  {Object}
     */
    formdata(form){
      let $inputs = form.querySelectorAll('input[name],select[name],textarea[name],button[name]');
      let res = {};
      let n;
      let v;
      bbn.fn.each($inputs, ( input, i ) => {
        v = bbn.fn.fieldValue(input);
        if ( (v !== undefined) && !input.disabled ){  
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
      let appendFormData = (data, key = '') => {
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
