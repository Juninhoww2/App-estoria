import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  sliderOpts = {
    zoom: false,
    sliderPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20
  };


  constructor(private modalController: ModalController) {

   }

  openPreview() {

  }
   
  ngOnInit() {
  }

}
