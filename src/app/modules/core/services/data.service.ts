import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { Dress } from '../../homes/containers/home-list-container/home-list-container.component';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

export interface DataState<T>{
  loading: boolean;
  data:T;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dress$ = new BehaviorSubject({ loading: true, data:[]});

  constructor(private httpClient: HttpClient) { }

  getDress$(): Observable<DataState<Dress[]>> {

    return this.dress$.asObservable();
  }
  loadDress() {

    this.dress$.next({ loading: true, data: []});
    this.httpClient.get<any[]>('assets/mocks/homes.json').pipe(
      delay(1000)
      
    ).subscribe((dress: Dress[]) =>{ 
        this.dress$.next({ loading: false, data: dress });
      });
  }
}
