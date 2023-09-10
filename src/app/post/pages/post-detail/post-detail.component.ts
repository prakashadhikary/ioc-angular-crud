import { Component } from '@angular/core';
import { Post } from '../../post.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent {
  postId!: number;
  post!: Post;

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

  goBack(): void {
    this.router.navigate(['/posts']);
  }
}

