import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const eventos = [
        { id: 1, ciudad: 'Madrid', feria: 'FiTour' },
        { id: 2, ciudad: 'Barcelona', feria: 'Feria de los calçots'},
        { id: 3, ciudad: 'Sevilla', feria: 'Feria de Abril'},
        { id: 4, ciudad: 'Fuenlabrada', feria: 'Feria de los chonis'},
        { id: 5, ciudad: 'ioahsdkfg', feria: 'Feria de los chonis'},
        { id: 6, ciudad: 'Valladolid', feria: 'Feria de la tapa'}
    ];
    return {eventos};
  }
}