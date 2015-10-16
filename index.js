'use strict';

// kickin it old school with jQuery
import jQuery from 'jquery'; 
import Handlebars from 'handlebars';
var _ = require('lodash');
require('jquery-ui');

class App {

  constructor(...args) {

    this.content = {
      sections: [
        {
          title: 'Section 1',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur recusandae tempora qui aliquam eum inventore sunt nostrum velit voluptatum possimus obcaecati eaque repellat fugiat, neque dolores quae voluptas quis suscipit.'    
        },
        {
          title: 'Section 2',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur recusandae tempora qui aliquam eum inventore sunt nostrum velit voluptatum possimus obcaecati eaque repellat fugiat, neque dolores quae voluptas quis suscipit.'    
        },
        {
          title: 'Section 3',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur recusandae tempora qui aliquam eum inventore sunt nostrum velit voluptatum possimus obcaecati eaque repellat fugiat, neque dolores quae voluptas quis suscipit.'    
        }    
      ]
    };

  }

  run() {
    const self = this;
    jQuery(function($) {
      $.get('templates/index.html', function(res) {
        let template = Handlebars.compile(res);
        let html = template(self.content);
        $('html').html(html);
        $( "#accordion" ).accordion();

        // es6fu
        console.log( ((s)=>`done: ${s}`)('whew') );
      });  
    });

  }

}

(new App()).run();