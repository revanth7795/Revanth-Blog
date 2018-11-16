import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Revanth Bogala';
  isOpen: boolean;
  height = 0;
  userName:any;
  userEmail:any;
  userComments:any;

  ngOnInit(){
    
    $(document).ready(function(){
      // Initialize Tooltip
      //$("[data-toggle='tooltip']").tooltip(); 
      
      // Add smooth scrolling to all links in navbar + footer link
      $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash != "") {
    
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    })

  }

  onClickAbout(height: number){
    
    setTimeout(() => {
      this.height = height;
      setTimeout(() => {
        this.height = 0;
      }, 1200);
    }, 1000);
  }

  onComment(){
    console.log(this.userName+"  "+this.userEmail+"  "+this.userComments);
    if(this.userName && this.userEmail && this.userComments){
      alert("Sent Successfully!");
    }else{
      alert("Warning: Please Enter all fields");
    }
    
    this.userName="";
    this.userEmail="";
    this.userComments="";

  }

}
