import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { MarvelApiService } from './../../../services/marvelapi.service';
import { Comic } from './../../../models/comic';

export interface ConfirmModel {
  title:string;
  message:string;
}
@Component({
    selector: 'confirm',
    template: `

                <!-- Modal -->
<div id="modalContainer">
</div>
                <div class="modal-dialog">

                  <div class="modal-content">
                     <div class="modal-header">
                       <div class="container">
                        <div class="row">
                          <div class="col-12 text-center">
                            <button type="button" class="close" (click)="close()" >
                              <img id="imgBtnClose" src="assets/images/btn-close.png">
                            </button>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-5 col-md-5 text-md-right text-center">
                              <img id="img-comic" src='{{comic.thumbnail.path + "." +  comic.thumbnail.extension}}'>
                          </div>
                          <div class="col-12 col-md-7 text-left">
                            <div id="titleComicContent">
                              <div class="container">
                                <div class="row">
                                  <div class="col-12">
                                    <h4 class="modal-title">{{comic.title | uppercase}}</h4>
                                  </div>
                                  <div class="col-12">
                                    <p id="comic-description">{{comic.description}}</p>
                                  </div>
                                </div>
                              </div>


                            </div>
                          </div>
                        </div>
                       </div>


                     </div>

                     <div class="container">

                      <div class="row">
                        <div id="left-modal" class="col-12 col-md-6 modal-option-container align-self-center" (mouseleave)="moveModalOption(1,image)" (mouseenter)="moveModalOption(0,image)" (click)="confirm()">
                          <img #image class="img-modal-left" src="assets/images/btn-favourites-default.png">
                          <span id="lblLeft">ADD TO FAVOURITES</span>
                        </div>
                        <div id="right-modal" class="col-12 col-md-6 modal-option-container align-self-center">
                          <div id="right-modal">
                            <img class="img-modal-left" src="assets/images/shopping-cart-primary.png">
                            <span id="lblRight">BUY FOR $ {{comic.prices[0].price}}</span>
                          </div>
                        </div>
                      </div>

                      <!--
                       <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
                       <button type="button" class="btn btn-default" (click)="close()" >Cancel</button> -->

                     </div>
                   </div>
              </div>


              `,
     styleUrls: ['./confirm.component.css'],
     providers:[MarvelApiService]

})
export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;

  public comic:Comic;

  constructor(private marvelApiService: MarvelApiService,dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit(){
      this.comic = JSON.parse(this.title);
  }


  moveModalOption(op:number,image:any){


    var obj = document.getElementById("left-modal");

    switch(op){
      case 0:{


        obj.style.backgroundColor = "rgb(50,40,39)";
        obj.style.color = "rgb(236,29,35)";
        image.src = "assets/images/btn-favourites-primary.png";


        break;
      }
      case 1:{


        obj.style.backgroundColor = "rgb(220,220,220)";
        obj.style.color = "rgb(61,51,50)";
        image.src = "assets/images/btn-favourites-default.png";


        break;
      }
    }
  }

  confirm() {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = true;
    this.close();
  }
}
