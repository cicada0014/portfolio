import { Component, ElementRef } from '@angular/core';



declare var $: any;
declare var Materialize: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private el: ElementRef) {

  }

  private tabActivateSign: string;


  ngAfterViewChecked() {
    $('.carousel').css("height", "100vh")
  }

  ngAfterViewInit() {


    $('.scrollspy').scrollSpy({ scrollOffset: 0 });
    $('ul.tabs').tabs({ swipeable: true });

    $('.modal').modal(
      {
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
          console.log(modal, trigger);
        },
        complete: function () {
        } // Callback for Modal close
      }
    );


  }
}

