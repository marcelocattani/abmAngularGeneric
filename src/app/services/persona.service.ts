import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { Ipersona } from '../model/Persona.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService extends BaseServiceService<Ipersona> {

  constructor( httpClient : HttpClient) {
    super(httpClient);    
    this.baseUrl += "persona/";    
   }   

}
