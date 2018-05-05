import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const eventos = [
        { id: 1, ciudad: 'Madrid', feria: 'FiTour', img:'assets/madrid.jpg' },
        { id: 2, ciudad: 'Barcelona', feria: 'Feria de los calçots', img:'assets/bcn.jpg'},
        { id: 3, ciudad: 'Sevilla', feria: 'Feria de Abril de Sevilla', img:'assets/sevilla.jpg'},
        { id: 4, ciudad: 'Santiago de Compostela', feria: 'Camino de Santiago', img:'assets/santiago3.png'},
        { id: 5, ciudad: 'Málaga', feria: 'Feria de Málaga', img:'assets/malaga2.jpg'},
        { id: 6, ciudad: 'Valencia', feria: 'La Fallas de Valencia', img:'assets/valencia.jpg'}
    ];
    return {eventos};
  }
}