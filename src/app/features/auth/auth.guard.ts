import { inject } from '@angular/core';
import { CanActivateFn , Router} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  let data = {
    username: '1313',
    password: '@4432423'
  };
  if(data) {
    router.navigate(['auth/select-panel'])
  } else {
    router.navigate(['/'])

  }
  return true;
};
