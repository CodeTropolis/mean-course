import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts:Post[] =[];
  // The Subject is private - can only call next() within this class.
  private postsUpdated = new Subject<Post[]>();

  constructor() { }

  getPosts(){
    return this.posts; // Copy array: return [...this.posts]. As is, this modfies the orignal array.
  }

  addPosts(post:Post){
    this.posts.push(post);
    this.postsUpdated.next([...this.posts])
  }

  // Public function - returns read only.  
  getPostsUpdatedListener(){
    return this.postsUpdated.asObservable();
  }

}
