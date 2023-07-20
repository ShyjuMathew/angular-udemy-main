import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'any' })
export class PostsService {
  constructor(private http: HttpClient) {}

  createAndStorePosts(title: string, content: string) {
    const postData: Post = { title: title, content: content };

    this.http
      .post<{ [key: string]: Post }>(
        'https://angular-62c36-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((response) => {
        console.log('Response: ', response);
      });
  }

  fetchPost() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://angular-62c36-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((responseData) => {
          const postArr: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArr.push({ ...responseData[key], id: key });
            }
          }
          return postArr;
        })
      );
  }

  deletePost() {
    return this.http.delete(
      'https://angular-62c36-default-rtdb.firebaseio.com/posts.json'
    );
  }
}
