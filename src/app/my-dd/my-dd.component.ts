import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-my-dd',
  templateUrl: './my-dd.component.html',
  styleUrls: ['./my-dd.component.scss'],
})
export class MyDdComponent {
  todo = [
    'Ir a trabajar',
    'Ir de compras',
    'Ir a casa',
    'Dormir'
  ];

  done = [
    'Levantarme',
    'Cepillarme los dientes',
    'Bañarme',
    'Revisar mi correo',
    'Sacar a pasear a luna'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
