import { Component, OnInit } from "@angular/core";
import { PersonaService } from "../../services/persona.service";
import { Ipersona } from "../../model/Persona.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(public personaService: PersonaService) {
    this.personaService.getAll().subscribe(data => console.log(data));
  }

  ngOnInit() {}
}
