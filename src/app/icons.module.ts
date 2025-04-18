import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { ArrowLeft } from 'angular-feather/icons';


// Select some icons (use an object, not an array)
const icons = {
  ArrowLeft,
};

@NgModule({
  imports: [CommonModule, FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}