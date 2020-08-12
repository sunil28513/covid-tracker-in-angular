import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private finaldata=[];
  private apiurl='https://api.covid19api.com/summary';
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(this.apiurl)
  }
}
