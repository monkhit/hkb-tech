import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {
  videoSource = "./assets/video/intro.mp4";
  activeTab = 0;
  details: any;

  tabs = [
    {
      title: "Traffic Management",
      description:
        "In the context of Smart Cities, Traffic Management emerges as a critical use case for urban development, aimed at addressing the complex challenges of urban mobility. At HKB TECH, our innovative Traffic Management solutions are strategically designed to optimize traffic flow, minimize congestion, and enhance overall urban transportation systems. Through the integration of cutting-edge technologies such as the Internet of Things (IoT), Artificial Intelligence (AI), and sophisticated data analytics, our solutions provide intelligent traffic control systems. These systems offer real-time data insights, enabling efficient and dynamic traffic management, resulting in improved safety, reduced travel times, and lowered environmental impact.",
      Mobiledescription:
        "Utilizing smart sensors and predictive analytics, our approach enables adaptive signal management and dynamic traffic control. This facilitates the reduction of traffic bottlenecks and enhances the overall commuter experience within urban areas. HKB TECH's commitment to Smart City initiatives focuses on creating more sustainable, connected, and livable urban environments. By transforming traffic management through advanced technological applications, we aim to contribute to the creation of smarter and more efficient transportation systems within cities.",
    },
    {
      title: "Waste Management",
      description:
        "In the landscape of Smart Cities, Waste Management emerges as a crucial use case for fostering sustainable urban environments. HKB TECH pioneers innovative Waste Management solutions that leverage advanced technologies to revolutionize waste handling and recycling practices. Our approach integrates smart sensors and IoT devices to enable real-time monitoring of waste levels in bins and containers throughout the city. Through this intelligent monitoring, our solutions optimize waste collection routes, reducing operational costs and environmental impact by minimizing unnecessary pickups.",
      Mobiledescription:
        "Moreover, our waste management systems employ predictive analytics to forecast waste generation patterns, aiding in efficient resource allocation and planning. This proactive approach streamlines waste collection schedules and enhances recycling efforts. HKB TECH's commitment to Smart Cities aligns with the vision of creating cleaner, more sustainable urban areas. By implementing innovative Waste Management solutions, we aim to contribute to the reduction of environmental impact, cost-effective waste handling, and the promotion of recycling practices for a greener and more efficient urban ecosystem.",
    },

    {
      title: "Smart Transportation",
      description:
        "In the realm of Smart Cities, Smart Transportation stands as a pivotal use case for revolutionizing urban mobility and enhancing the overall transportation infrastructure. At HKB TECH, our innovative Smart Transportation solutions are engineered to address the complex challenges of urban mobility, providing efficient, sustainable, and interconnected transportation systems. Our approach integrates advanced technologies such as IoT, Artificial Intelligence, and data analytics to develop a comprehensive ecosystem for intelligent transportation. Through real-time data collection and analysis, our solutions optimize traffic flow, reduce congestion, and enhance commuter experiences.",
      Mobiledescription:
        "Utilizing smart sensors and predictive analytics, our systems enable adaptive signal control, smart parking management, and dynamic route planning. This approach not only reduces traffic congestion but also minimizes travel times and environmental impact, promoting a more eco-friendly and efficient transport network. HKB TECH's commitment to Smart Cities revolves around creating more sustainable and connected urban spaces. By implementing cutting-edge Smart Transportation solutions, we aim to contribute to the development of smarter, more efficient, and eco-friendly transportation systems within cities, ultimately enhancing the quality of life for residents.",
    },

    {
      title: "Smart Parking",
      description:
        "In the landscape of Smart Cities, Smart Parking solutions represent a crucial use case for addressing the challenges of urban congestion and optimizing the parking infrastructure. HKB TECH is dedicated to crafting innovative Smart Parking solutions that employ advanced technologies to transform the way cities manage parking facilities. Through the integration of IoT sensors and real-time data analytics, our Smart Parking solutions provide comprehensive insights into parking space availability and occupancy levels. This data is accessible to motorists via mobile applications or digital signage, enabling them to locate available parking spaces quickly and efficiently.",
      Mobiledescription:
        "Our approach focuses on optimizing parking management systems, reducing traffic congestion, and minimizing the environmental impact caused by vehicles circling in search of parking. By facilitating smarter parking decisions, our solutions streamline traffic flow and enhance the overall urban mobility experience.</p><p>HKB TECH's commitment to Smart Cities aligns to create more sustainable and convenient urban environments. With our innovative Smart Parking solutions, we aim to contribute to reduced traffic congestion, improved accessibility, and a more streamlined parking experience, ultimately enhancing the quality of life for residents and visitors in smart urban spaces.",
    },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    this.activatedRoute.queryParams.subscribe(params => {
      this.details = this.router.getCurrentNavigation()?.extras.state?.['details']  
      // window.scrollTo(0, 0);
    })
    console.log(this.details)
    
   }


  activateTab(index: number): void {
    console.log(index);
    this.activeTab = index;
  }

  ngOnInit(): void {
  }

}
