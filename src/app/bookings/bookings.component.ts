import { Component } from '@angular/core';
import { BookingService } from '../service/booking.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  bookingList:any =[]
constructor(private bookingSvc:BookingService,private auth:AuthenticationService){

}

ngOnInit(){
// this.auth.setToken("ggvgvggdvcgvgvgcvgsvcgvgcvgdvgcgdgvcgvd")
// getBookings(){}

  this.bookingSvc.getDataFromServer("bookings").subscribe({
    next:(response)=>{
if(response && response.length >0){
  this.bookingList = response
  console.log("Booking-List" + this.bookingList)
}

    },
    error:(error)=>{
      alert(error);
    },
    complete:()=>{}
  })
}



deleteBooking(id:string, index:number ){

  const selection = confirm("Are you sure")

  if(selection){
    const endPoint = "bookings/" + id
    this.bookingSvc.deleteDataFromServer(endPoint).subscribe({
     next:(response)=>{
       console.log("Record Deleted Successfully")
       this.bookingList.splice(index,1)
     },

     error:(error)=>{
      if(error.error instanceof error){
        console.log("Client Side error" , error.error.message)
      }

      else{
        console.log("server side error", error.message)
      }
     }
    

 })
}
}

}
