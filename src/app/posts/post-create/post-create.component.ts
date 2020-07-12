import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateCompononet {
  enteretValue='';
  newPost = 'Henüz Post YOK.';

  onAddPost(){
    // consolda gelen Objenin tüm detaylarını verecek
   // console.dir(postInput);
    this.newPost = this.enteretValue;
    this.enteretValue = '';
  }
}
