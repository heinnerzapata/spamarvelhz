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
    template: ` <div class="container">
                <div class="row">
                <div class="col-12 text-center">
                <div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <div class="container">
                      <div class="row">
                        <div class="col-12 text-right">
                          <button type="button" class="close" (click)="close()" >
                            <img id="imgBtnClose" src="assets/images/btn-close.png">
                          </button>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 col-md-5 text-center">

                        </div>
                        <div class="col-12 col-md-7 text-left">
                          <div id="titleComicContent">
                            <h4 class="modal-title">{{message | uppercase}}</h4>
                          </div>
                        </div>
                      </div>
                     </div>


                   </div>
                   <div class="modal-body">
                     <p  *ngIf="comic.title != undefined">{{ comic.title }}</p>
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
                     <button type="button" class="btn btn-default" (click)="close()" >Cancel</button>
                   </div>
                 </div>
              </div>
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
  public comic;
  public comicson;

  constructor(private marvelApiService: MarvelApiService,dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit(){
      this.consultar(this.message);
  }

  consultar(message:String) {
    alert(message)
    this.marvelApiService.getCharacter(message).subscribe(
      (data) => this.comic = data.data.results[0]
    );

    //this.comicson = JSON.stringify(this.comic);

  }

  confirm() {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = true;
    this.close();
  }
}
