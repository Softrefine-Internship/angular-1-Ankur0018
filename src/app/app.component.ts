import { Component } from '@angular/core';
import { Profile } from './profile.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-1';
  cards: Profile[] = [
    new Profile("Ankur", "ankurkukar@gmail.com", 1234567890, 21),
    new Profile("Navdeep", "Navdeep@gmail.com", 1234567890, 20),
  ];

  editingIndex: number | null = null;
  showDetails = true;
  errorMessage: string = '';

  editProfile(index: number) {
    this.editingIndex = index; 
  }
  

  updateProfile() {
    if (this.editingIndex !== null) {
      const editedCard = this.cards[this.editingIndex];
  
      // Validations
      if (!Profile.validateEmail(editedCard.email)) {
        this.errorMessage = "Invalid email format!";
        return;
      }
      if (!Profile.validatePhone(editedCard.phone)) {
        this.errorMessage = "Phone number must be 10 digits!";
        return;
      }
      if (!Profile.validateAge(editedCard.age)) {
        this.errorMessage = "Age must be between 1 and 99!";
        return;
      }
  
      this.errorMessage = '';
      this.editingIndex = null; 
    }
  }
  
}
