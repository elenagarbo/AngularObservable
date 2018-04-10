import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: Evento[];
 
  selectedEvento: Evento;
 
 
  constructor(private eventoService: EventoService) { }
 
  ngOnInit() {
    this.getEventos();
  }
 
  
  getEventos(): void {
    this.eventoService.getEventos()
        .subscribe(eventos => this.eventos = eventos);
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.eventoService.addEvento({ name } as Evento)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  
 
  delete(evento: Evento): void {
    this.eventos = this.eventos.filter(e => e !== evento);
    this.eventoService.deleteEvento(evento).subscribe();
  }
}