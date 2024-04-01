import { Component, ViewChild } from '@angular/core';
import { BookingService } from '../service/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IDeactivate } from '../guards/canexit.guard';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements IDeactivate {

  @ViewChild("createBookingForm")
  createBookingForm !: NgForm

bookingObj:Booking = new Booking()

selectedBookingId:string | null =null
editBooking:string | null=null

constructor(private bookingSvc:BookingService, private router:Router,private activatedRoute:ActivatedRoute){
this.selectedBookingId = this.activatedRoute.snapshot.paramMap.get('id')
this.editBooking = this.activatedRoute.snapshot.queryParamMap.get('edit')
console.log(this.selectedBookingId)
}
  
 
save(){
  if(this.editBooking){
    this.updateBooking()
  }
  else{
    this.createBooking()
  }
}

createBooking(){
  console.log("form data", this.bookingObj)
  this.bookingSvc.postDataToServer("bookings",this.bookingObj).subscribe({
    next:(response:any)=>{
      console.log("data saved successfully")
      this.router.navigate(['/booking-list'])
    },
    error:(error)=>{

    },
    complete:()=>{}
  })
}

ngOnInit(){
if(this.selectedBookingId !=null){
  this.getBookingById()
}
}

canExit(): boolean {
  if(this.createBookingForm.dirty){
    const result = confirm("You have Unsaved Changes, Do you want to continue")
    return result
  }else{
    return true 
  }
}

getBookingById(){
const endPoint = "bookings/" + this.selectedBookingId;
this.bookingSvc.getDataFromServer(endPoint).subscribe({
  next:(response:any)=>{
    console.log("Response :",response)
    this.bookingObj = {...response}
  },
  error:(error)=>{

  }
})
}

updateBooking(){
  const endPoint = "bookings/" + this.selectedBookingId 
  this.bookingSvc.putDataToServer(endPoint,this.bookingObj).subscribe({
    next:(response:any)=>{
      console.log("Data updated Successfully")
      this.router.navigate(['/booking-list'])
    },

    error:(error)=>{

    }
  })
}



}
class Booking {
  name:string="";
  source:string=""
  destination:string=""
  date:string=""

}