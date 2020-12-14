import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage {
    public form = [
        { val: 'lorem ipsum', isChecked: true },
        { val: 'lorem ipsum', isChecked: false },
        { val: 'lorem ipsum', isChecked: false },
        { val: 'lorem ipsum', isChecked: false },
        { val: 'lorem ipsum', isChecked: false },
        { val: 'lorem ipsum', isChecked: false },
        { val: 'lorem ipsum', isChecked: false },
        { val: 'lorem ipsum', isChecked: false },
        { val: 'lorem ipsum', isChecked: false },
        { val: 'lorem ipsum', isChecked: false },
        { val: 'lorem ipsum', isChecked: false },
        { val: 'lorem ipsum', isChecked: false }
      ];
}
