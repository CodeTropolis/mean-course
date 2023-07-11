import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  constructor(private postService: PostsService){}

  enterdTitle = '';
  enteredContent = '';
  
  addPost(form: NgForm){
    if(form.invalid) return;
    const post: Post = {title: form.value.title, content: form.value.content};
    this.postService.addPosts(post);
    form.resetForm();
  }
}

