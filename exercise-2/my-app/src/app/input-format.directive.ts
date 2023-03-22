import { UpperCasePipe } from '@angular/common';
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  
  constructor(private x:HostListener) { 
    
  }

}
