import { Component, OnInit } from '@angular/core';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  aa(){
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        trigger: ".about-mobile",
        start: "top center",
        end: "center 51%",
        pin: true,
        scrub: 0.1,
        //snap: directionalSnap(1 / (sections.length - 1)),
        // end: "+=100"
      }
    });
  
  
  


  }



  ngOnInit(): void {
    this.aa()
  }

}
