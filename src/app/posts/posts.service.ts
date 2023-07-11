import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts:Post[] =[];

  constructor() { }

  getPosts(){
    return this.posts; // Copy array: return [...this.posts]. As is, this modfies the orignal array.
  }

  addPosts(post:Post){
    this.posts.push(post);
  }

}
