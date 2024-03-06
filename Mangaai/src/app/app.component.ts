import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = '';

  handleFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      if (fileType === 'image/png' || fileType === 'image/jpeg') {
        this.message = 'Thank you!';
      } else {
        this.message = 'Please select a PNG or JPEG image.';
      }
    }
  }  
}
