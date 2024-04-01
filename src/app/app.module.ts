import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BookingsComponent } from './bookings/bookings.component';
import { FormsModule } from '@angular/forms';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { AppInterceptor } from './interceptor/AppInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    CreateBookingComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS,
    useClass:AppInterceptor,
    multi:true}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
