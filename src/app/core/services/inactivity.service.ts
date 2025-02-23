import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, fromEvent, merge, timer } from 'rxjs';
import {switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InactivityService {
  private inactivityTime = 5 * 60 * 1000;
  private activity$ = new Subject<void>();

  constructor(private router: Router, private ngZone: NgZone) {
    this.startMonitoring();
  }

  private startMonitoring(): void {
    this.ngZone.runOutsideAngular(() => {
      const userActivityEvents = merge(
        fromEvent(document, 'mousemove'),
        fromEvent(document, 'keydown'),
        fromEvent(document, 'click'),
        fromEvent(document, 'scroll'),
        fromEvent(document, 'touchstart')
      );

      userActivityEvents.subscribe(() => this.activity$.next());

      this.activity$
        .pipe(
          tap(() => console.log('Activity detected')),
          switchMap(() => timer(this.inactivityTime)),
          tap(() => this.ngZone.run(() => this.navigateToStart()))
        )
        .subscribe();
    });
  }

  private navigateToStart(): void {
    console.log('User inactive, navigating to start...');
    this.router.navigate(['/']);
  }
}
