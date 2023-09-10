import { Component } from '@angular/core';
import { Post } from '../../post.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  postId!: number;
  post: Post = {
    id: 0,
    title: '',
    content: '',
  };

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = +params['id'];
      if (this.postId) {
        this.loadPost(this.postId);
      }
    });
  }

  loadPost(postId: number): void {
    const post = this.postService.getPost(postId);

    if (post) {
      this.post = post;
    } else {
      this.router.navigate(['/posts']);
    }
  }

  savePost(): void {
    if (this.postId) {
      this.postService.updatePost(this.post);
    } else {
      this.postService.addPost(this.post);
    }
    this.router.navigate(['/posts']);
  }

  clear(): void {
    this.post = {
      id: 0,
      title: '',
      content: '',
    };
  }

  goBack(): void {
    this.router.navigate(['/posts']);
  }
}
