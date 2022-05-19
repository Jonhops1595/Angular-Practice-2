import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.url)
    .pipe(catchError(this.handleError));
  }

  createPost(post :any){
    return this.http.post(this.url,post)
    .pipe(catchError(this.handleError));
  }

  updatePost(post: any){
    return this.http.patch(this.url + '/' + post.id, {isRead: true})
    .pipe(catchError(this.handleError));
  }

  deletePost(id: number){
    return this.http.delete(this.url + '/' + id)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occured:', error.error)
    } else if (error.status === 400) {
      console.error('Bad Input error:', error.error);
      alert('Bad Input error');
    } else if (error.status === 404) {
      console.error('Bad delete error', error.error);
      alert('Bad delete error');
    } else {
      console.error(
        'Backend returned code ${error.status}, body was: ', error.error);
    }
    return throwError(() => new Error('An error occured. Try again later'));
  }
}
