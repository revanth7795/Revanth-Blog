import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-disqus',
    template: '<div id="disqus_thread"></div>',
})

export class DisqusComponent implements OnInit{

    ngOnInit() {
      (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://revanth7795.disqus.com/embed.js';
        s.setAttribute('data-timestamp', new Date().getTime().toString());
        (d.head || d.body).appendChild(s);
      })();
    }
}
