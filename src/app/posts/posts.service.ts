import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts:Post[] =[];
  // The Subject is private. an only call next() within this class.
  private postsUpdated = new Subject<Post[]>();

  public posts$ = this.postsUpdated.asObservable();

  constructor(private http: HttpClient) { }

  addPosts(post:Post){
    this.posts.push(post);
    this.postsUpdated.next([...this.posts])
  }

  getPosts(){
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
    .subscribe(data => {
      this.posts = data.posts;
      this.postsUpdated.next([...this.posts])
    });
  }

  // Public function - returns read only.  
  // Post-list.component listens for this in it's ngOnInit()
  // getPostsUpdatedListener(){
  //   return this.postsUpdated.asObservable();
  // }

}
