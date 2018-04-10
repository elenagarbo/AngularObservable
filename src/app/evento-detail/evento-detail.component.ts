import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../models/evento';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventoService } from '../services/evento.service';
 
@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css']
})
export class EventoDetailComponent implements OnInit {
  @Input() evento: Evento;
 
  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    this.getEvento();
  }
 
  getEvento(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventoService.getEvento(id)
      .subscribe(evento => this.evento = evento);
  }
 
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.eventoService.updateEvento(this.evento)
      .subscribe(() => this.goBack());
  }
}