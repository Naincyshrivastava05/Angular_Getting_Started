import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-Getting-Started';
  imgUrl = '../assets/BL_logo_square_jpg.jpg';
   url = "https:www.bridgelabz.com";
   userName: string = '';


ngOnInit(): void {
  this.title="Hello from BridgeLabs";
}

onClick($event: any){
  console.log("Save button is clicked", $event);
  window.open(this.url, "_blank");
}
}