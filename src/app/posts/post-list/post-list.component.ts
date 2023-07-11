import { Component } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {

  posts:Post[] = [];
  postSubscription: Subscription | undefined;

  constructor(private postService: PostsService) {}

  ngOnInit(){
    //this.posts = this.postService.getPosts();
    this.postSubscription = this.postService.getPostsUpdatedListener().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnDestroy(){
    this.postSubscription?.unsubscribe();
  }

}
