import {Component, OnInit} from '@angular/core';
import {UserActions} from "./actions";
import {StateService} from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'sbg-task';

  ngOnInit(): void {
      this.stateService.dispatch(new UserActions.Load());
  }

  constructor(private stateService: StateService) {}
}
