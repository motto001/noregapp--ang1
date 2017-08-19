import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    
    
    _apiURI : string;
     _host : string;

    constructor() {
        this._host = 'http://localhost:8000/cors/';
        this._apiURI = this._host+'manager/';
     }

     getApiURI() {
         return this._apiURI;
     }
   
     getApiHost() {
         return this._host;
     }
}