import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Article, ArticleCreation } from './models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private static readonly baseUrl: string = "https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2-GROUTKevin"

  constructor(private http : HttpClient) { }


  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${ArticleService.baseUrl}/articles`);
  }

  public getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${ArticleService.baseUrl}/articles/${id}`);
  }

  public deleteArticle(id: number): Observable<Article> {
    return this.http.delete<Article>(`${ArticleService.baseUrl}/articles/${id}`);
  }

  public addArticle(article: ArticleCreation): Observable<Article> {
    return this.http.post<Article>(`${ArticleService.baseUrl}/articles`, article);
  }

  public searchArticle(keyword: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${ArticleService.baseUrl}/articles?q=${keyword}`);
  }
}
