import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateCompononet {
  enteretTitle='';
  enteretContent='';

  @Output() postCreatet = new EventEmitter<Post>();

  onAddPost(){
    const Post: Post = {
          title: this.enteretTitle,
          content:this.enteretContent
    };
    this.postCreatet.emit(Post);
  }
}
