import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
  videoSource = "./assets/services/AI-video.mp4";

  tabs = [
    {
      title: "AI Transformation",
      description:
        "Accelerate your AI Transformation with HBT TECH's comprehensive approach. Utilize design-thinking methodologies to uncover hidden prospects and unveil substantial value through a meticulously prioritized roadmap, setting the stage for immediate impactful wins. Whether seeking enhanced efficiency or unlocking new possibilities, our strategy paves the way for a seamless transition towards a transformed and AI-driven future for your organization.",
    },
    {
      title: "Generative AI",
      description:
        "Delve into the cutting-edge advancements of Generative AI with HKB TECH. Our sophisticated AI models offer groundbreaking solutions and inventive outputs across diverse sectors. Our expertise unlocks immense potential, fostering innovation and pioneering novel approaches. With Generative AI, we elevate ideation to new heights and bring forth unprecedented problem-solving capabilities, ensuring a pathway to groundbreaking solutions and innovative concepts. Partner with us to explore the forefront of Generative AI and its transformative potential across industries.",
    },

    {
      title: "Machine Learning & Deep Learning",
      description:
        "Leverage the depth and breadth of HKB TECH's Machine Learning & Deep Learning services. Our AI solutions offer a robust platform for sophisticated data analysis and predictive insights. Dive into the advanced capabilities that enable complex problem-solving, allowing your organization to unearth valuable insights and make informed, data-driven decisions for enhanced operations and strategic growth. Whether it's predictive analytics or pattern recognition, our AI models are designed to revolutionize the way you approach complex challenges.",
    },

    {
      title: "MLOPs & AIOPs",
      description:
        "HKB TECH optimizes AI operations with a fusion of MLOps (Machine Learning Operations) and AIOps (Artificial Intelligence Operations). This advanced integration refines the operational life cycle of AI systems, ensuring efficient deployment, monitoring, and maintenance. By unifying these methodologies, we provide a comprehensive approach for scaling, managing, and refining AI models, fostering perpetual innovation, reliability, and performance within your organization's AI framework.",
      
    },
  ];

  constructor() {}

  activeTab = 0;

  activateTab(index: number): void {
    console.log(index);
    this.activeTab = index;
  }

  ngOnInit(): void {}
}
