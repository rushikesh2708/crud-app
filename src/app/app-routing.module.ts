import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { AuthGuard } from './guards/auth.guard';
import { canexit } from './guards/canexit.guard';

const routes: Routes = [
  {path:"booking-list",component:BookingsComponent},
  {path:"create-booking",component:CreateBookingComponent,/* canActivate:[AuthGuard]*/canDeactivate:[canexit]},
  {path:"edit-booking/:id",component:CreateBookingComponent},
  {path:"",redirectTo:"/booking-list",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
