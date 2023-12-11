import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
     constructor(private api:ApiService){}
    todos:any=""
    ngOnInit()
    {
      this.api.getTodo().subscribe((data:any)=>{this.todos=data})
    }
}
