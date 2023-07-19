import { Component } from '@angular/core';
import {BreedsServiceService} from "../../services/breeds/breeds-service.service";
import {Breeds} from "../../models/breeds";

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {
  breeds : Breeds[] = []
  temperament : string = ''
  selectedBreed: any;
  constructor(private breedsServiceService:BreedsServiceService) { }

  ngOnInit(): void {
  this.breedsServiceService.getBreeds().subscribe(res => {
    this.breeds = res
    })
  }

  getId(id: any) {
    this.selectedBreed = this.breeds.find((breed) => breed.id === id)
  }

}
