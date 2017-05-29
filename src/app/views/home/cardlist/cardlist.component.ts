import { Component , Input , OnChanges , SimpleChanges , Pipe , PipeTransform} from '@angular/core';
import { Character } from './../../../models/character';
import { MarvelApiService } from './../../../services/marvelapi.service';
import { ConfirmComponent } from './../modals/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";
import { Comic } from './../../../models/comic';

@Component({
    selector : 'cardlist-component',
    templateUrl : './cardlist.component.html',
    styleUrls: ['./cardlist.component.css'],
    providers:[MarvelApiService],

})

export class CardListComponent{

  @Input()
  searchFilter:String;
  @Input()
  sortFilter:String;

  order:String;

  public comic;

  constructor(private marvelApiService: MarvelApiService,private dialogService:DialogService) {

    this.consultar(this.searchFilter);

  }

  consultarComic(data){
    
      let disposable = this.dialogService.addDialog(ConfirmComponent, {
          title:JSON.stringify(data),
          message:data.title})
          .subscribe((isConfirmed)=>{
              //We get dialog result
              if(isConfirmed) {
                  //alert('accepted');
              }
              else {
                  //alert('declined');
              }
          });
      //We can close dialog calling disposable.unsubscribe();
      //If dialog was not closed manually close it by timeout
      setTimeout(()=>{
          disposable.unsubscribe();
      },10000);

  }

  showConfirm(characterName:String,id:String) {
    this.marvelApiService.getCharacter(id).subscribe(
      (data) => this.comic = this.consultarComic(data.data.results[0])
    );

    /*
           let disposable = this.dialogService.addDialog(ConfirmComponent, {
               title:characterName,
               message:id})
               .subscribe((isConfirmed)=>{
                   //We get dialog result
                   if(isConfirmed) {
                       //alert('accepted');
                   }
                   else {
                       //alert('declined');
                   }
               });
           //We can close dialog calling disposable.unsubscribe();
           //If dialog was not closed manually close it by timeout
           setTimeout(()=>{
               disposable.unsubscribe();
           },10000);
*/


       }


  public characters:Array<Character>;

  consultar(searchFilter) {

    this.marvelApiService.getCharacters(searchFilter).subscribe(
      (data) => this.characters = data.data.results
    );
  }

  ngOnChanges(changes: SimpleChanges) {

    this.order = this.sortFilter;
    this.consultar(this.searchFilter);

  }

  /*
  public characters : Array<Character> = [

    new Character(1,'Heinner','heinner desc','jpg','http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf'),
    new Character(2,'David','David desc','jpg','http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf'),
    new Character(3,'Yesid','Yesid desc','jpg','http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf'),
    new Character(4,'Juan','Jaun desc','jpg','http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf'),

  ];

  */

  //new Character(1,'Heinner','heinner desc','jpg','http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf');




//id:number,name:string,description:string,extension:string,path:string

  //https://gateway.marvel.com/v1/public/characters?nameStartsWith=wolv&limit=50&ts=1&apikey=3ea1cd1673639f6a528e957b1db5939b&hash=cfa3f7936bc2ccd074e8876351bcffa3


}
