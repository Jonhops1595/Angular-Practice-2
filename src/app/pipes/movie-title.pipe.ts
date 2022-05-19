import { Pipe, PipeTransform } from '@angular/core';



@Pipe({name: 'movieTitle'})
export class MovieTitlePipe implements PipeTransform {
  transform(value: string)  {
    let smallWords: string [] = ["be", "for", "the", "of", "a", "is"];
    let strArray: string [] = value.split(/(\s+)/);
    let newString: string  = "";
    for(let i = 0;i < strArray.length;i++){
        let targetWord: string = strArray[i].toLowerCase();
        let wordCheck: boolean = false;
        for (let j = 0; j < smallWords.length;j++){
            if(targetWord == smallWords[j]){
                if(i != 0) {
                    console.log("Test: " + targetWord + " " + smallWords[j]);
                    wordCheck = true;
                }
            }
        }
        if(!wordCheck){
            targetWord = targetWord[0].toUpperCase() + targetWord.substring(1).toLowerCase();
        }
        newString += targetWord + " ";
    }
    return newString;
  }
}