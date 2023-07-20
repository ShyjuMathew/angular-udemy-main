import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private activatedSub: Subscription;
  constructor(private userService: UserService) {}
  userActivated = false;
  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(
      (activation: boolean) => {
        this.userActivated = activation;
      }
    );
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}
