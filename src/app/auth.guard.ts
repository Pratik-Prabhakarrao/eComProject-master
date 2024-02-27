import { CanActivateFn } from '@angular/router';
import { SellService } from './services/sell.service';;
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const sellerService = inject(SellService)

  if(localStorage.getItem('seller')){
    return true;
  };

  return sellerService.isSellerLoggedIn;
  
  
  
};

