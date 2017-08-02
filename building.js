var bar = function(total){
  count = 0,
  pace = require('pace')(total);
  while (count++ < total) {
    pace.op();
    // Cause some work to be done.
    for (var i = 0; i < 1000000; i++) {
      count = count;
    }
  }
};

bbn.building = ()=>{

  var path = require('path'),
        fs = require('fs'),

        babelify = require('babelify').configure({
          presets: ["es2015"]
        }),
        browserify = require('browserify'),
        dest = path.join( __dirname + '/../../../bbn.js'),
        style = path.join( __dirname + '/src/css/bbn.less'),
        dest_style = path.join( __dirname + '/../../../bbn.less');

  browserify(path.join(__dirname, 'main-for-browser.js')).bundle().pipe(fs.createWriteStream(dest));

    fs.exists(style, function (exists) {

      if( exists ){

        fs.readFile(style, function(err, logData){

          // Se si verifica un errore, lanciandolo, lo mostreremo e fermeremo l'esecuzione dell'app.
          if ( err ){
            throw err;
          }
          else{
            fs.writeFile(dest_style, logData.toString(), function(err){
              if ( err ){
                return console.log("file less error : " , err);
              }
              bar(60000);
            });
          }
        });
      }
      else{
        console.log("File not found!!  :(");
      }
    });
  }
