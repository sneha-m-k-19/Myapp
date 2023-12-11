import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  districts=[
    {
    id:1,
    title:"Kannur",
    image:"https://3.bp.blogspot.com/-pG6Ev_q2J_g/WLEdp-vUvAI/AAAAAAABFIw/PfNbibSMoCkZEh5QkSJJHb4O-61M_0mpQCLcB/s1600/IMG_2191.JPG",
    Description:"Kannur is one of the 14 districts along the west coast in the state of Kerala, India. The city of Kannur is the district headquarters and gives the district its name. The old name, Cannanore, is the anglicized form of the Malayalam name Kannur. Kannur district is bounded by Kasaragod District to the north, Kozhikode district to the south, Mahé district to the southwest and Wayanad"  ,
  },
    {
      id:2,
      title:"Ernakulam",
      image:"https://th.bing.com/th/id/OIP.-1GnPejIAfngwkYbK6nFMwHaE8?rs=1&pid=ImgDetMain",
      Description:"Ernakulam bordering the district of Thrissur in the north, Idukki in the East, Alappuzha and Kottayam in the south, Lakshadweep Sea in the west is an amalgam of a hoary heritage and global growth of industry and commerce. For the outside world, Ernakulam is part of Kochi referred to in the history of Kerala as the Queen of Arabian Sea."  
    },
    {
      id:3,
      title:"Trivandrum",
      image:"https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1615498078_20200302153343.jpg",
      Description:"Thiruvananthapuram (Malayalam: തിരുവനന്തപുരം) is the capital city of the Indian state of Kerala. The city used to be known by the name of Trivandrum. It is on the west coast of India near the far south of the mainland."    
    }
  ]

}
