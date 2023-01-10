import { Component } from '@angular/core';
import cardsHeart from '@iconify/icons-mdi/cards-heart';

@Component({
  selector: 'app-special-photo',
  templateUrl: './special-photo.component.html',
  styleUrls: ['./special-photo.component.scss']
})
export class SpecialPhotoComponent {
  heartIcon = cardsHeart;
}
