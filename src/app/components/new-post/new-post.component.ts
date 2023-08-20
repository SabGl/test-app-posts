import {Component, EventEmitter, Output} from '@angular/core';
import {Post} from "../posts/posts.component";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  @Output() onAddNewPost: EventEmitter<Post> =  new EventEmitter<Post>()

  title: string = ''
  text: string = ''


  addNewPost(){
    if(this.title.trim() && this.text.trim()){
      const post: Post = {
        title: this.title,
        text: this.text,
        id: Math.random(),
      }
      this.onAddNewPost.emit(post)
      this.title = this.text = ''
    }
  }
}
