import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

const MAIN_URL= "http://localhost:9092/";
const BASE_URL = "http://localhost:9092/savebook"
const SEARCHBYCate ="http://localhost:9092/books/category/search?category=";
const searchbyAuthorname ="http://localhost:9092/books/author/search?authorName=";
const SearchByPublisher="http://localhost:9092/books/publisher/search?publisherName=";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  createBook(book:
    {
      authorId: number;
      title: string;
      authorname: string;
      category: string;
      price: number;
      content: string;
      publisher: string;
      publishedDate: string;
      logo: string;
      Active: boolean;
     
    },uploadedImage:File) {
      const formData= new FormData();
      formData.append('bookstring',JSON.stringify(book));
      formData.append('image',uploadedImage);

       return this.http.post(BASE_URL, formData);
  }
  getBookslist() {
    return this.http.get(MAIN_URL + 'books');
  }
  searchbyCategory(enteredValue1: string): Observable<Object> {
    return this.http.get(SEARCHBYCate + enteredValue1);

  }
  searchbyPublisher(enteredValue2: string): Observable<Object> {
    return this.http.get(SearchByPublisher + enteredValue2);

  }
  searchbyAuthorname(enteredValue3: string): Observable<Object> {
    return this.http.get(searchbyAuthorname + enteredValue3);
  }

  constructor(public http: HttpClient) { }
}
