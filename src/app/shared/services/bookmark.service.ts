import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  getTinyUrlsCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.baseService.getBaseUrl()}/api/v1/fetch/cards`);
  }
}
