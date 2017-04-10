import { Component, ElementRef } from '@angular/core';



declare var $: any;
declare var Materialize: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private pdfSrc :string =  "assets/pdfs/3ndprojectplan.pdf";

  constructor(private el: ElementRef) {

  }

  private tabActivateSign: string;


  ngAfterViewChecked() {
    $('.carousel').css("height", "100vh")
  }

  ngAfterViewInit() {


    $('.scrollspy').scrollSpy({ scrollOffset: 0 });
    $('#portfolio-tabs').tabs({ swipeable: true });

    $('.modal').modal(
      {
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        },
        complete: function () {
        } // Callback for Modal close
      }
    );

    var options = [
      {
        selector: '#skills', offset: 100, callback: function (el) {
          $("#circleHTML").circliful({
            text: "HTML/CSS",
            animationStep: 5,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 15,
            percent: 75
          });
        }
      },
      {
        selector: '#skills', offset: 110, callback: function (el) {
          $("#circleJS").circliful({
            text: "JavaScript",
            animationStep: 5,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 15,
            percent: 70
          });
        }
      },
      {
        selector: '#skills', offset: 120, callback: function (el) {
          $("#circleTS").circliful({
            text: "TypeScript",
            animationStep: 5,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 15,
            percent: 65
          });
        }
      },
      {
        selector: '#skills', offset: 130, callback: function (el) {
          $("#circleJAVA").circliful({
            text: "JAVA",
            animationStep: 5,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 15,
            percent: 70
          });
        }
      },
      {
        selector: '#skills', offset: 140, callback: function (el) {
          $("#circleHTTP").circliful({
            text: "SQL",
            animationStep: 5,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 15,
            percent: 50,
            targetTextSize:17,
            // animateInView: true
            title : "test"
          });
        }
      },
    ];
    Materialize.scrollFire(options);




  }
}

