import { Component } from '@angular/core';
import { NOTES } from '../../notes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss',
})
export class NotesListComponent {
  notes = NOTES;
}
