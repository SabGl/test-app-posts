import { Component } from '@angular/core';


export interface Post {
  title: string
  text: string
  id: number
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: Post[] = [
    {title:"Чем опасен кортизо?", text:"Кортизол это гормон стресса. Избыток которого вреден для организма.", id: 1},
    {title: "Сколько чашек кофе можно выпить за день?", text: "Влияние кофе на организм отличается от человека к человеку.", id:2}
  ]

  updatePosts (post: Post){
    this.posts.unshift(post)

  }
}
