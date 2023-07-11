import { Component } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {

  posts:Post[] = [];

  constructor(private postService: PostsService) {}

  ngOnInit(){
    this.posts = this.postService.getPosts();
  }

}
