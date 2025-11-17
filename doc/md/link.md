### <a name="link"></a>bbn.fn.link()

  __Follows a link and if needed by sending the corresponding Ajax request and executing bbn.fn.defaultPreLinkFunction.__

  Once bbn has been initiated this function will be triggered every time a link is clicked.  
It accepts the same arguments as seen in treatAjaxArguments but will tipically just be called with a URL,
the defaultLinkURL functions being in charge of loading the content.


  __Returns__ _undefined_ 

### Examples



```javascript
// Will open in a new window/tab
bbn.fn.link('https://nytimes.com');
// Will send an Ajax request
bbn.fn.link('my/page');
// Will open your default email program
bbn.fn.link('mailto:postmaster@test.com');
```

[Back to top](#bbn_top)  <a name="bbn_top"></a>

