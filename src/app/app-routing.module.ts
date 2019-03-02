// modules
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// define routes
const routes: Routes = [];

@NgModule({
  // imports
  imports: [ RouterModule.forRoot(routes) ],
  // exports
  exports: [ RouterModule ]
})
export class AppRoutingModule {}