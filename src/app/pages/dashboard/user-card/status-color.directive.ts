import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStatusColorDirective]'
})
export class StatusColorDirective implements OnChanges{

  @Input() statusColor !: string;
  constructor(private elementRef: ElementRef, private render2: Renderer2) { }

  ngOnChanges(){
    if (this.statusColor == 'Active') {
      //this.elementRef.nativeElement.style.color = 'green';
      this.render2.setStyle(this.elementRef.nativeElement, 'color', 'green');
      this.render2.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      '#e8f5e9'
    );
    } 
    if(this.statusColor == 'Inactive') {
      //this.elementRef.nativeElement.style.color = 'red'
      this.render2.setStyle(this.elementRef.nativeElement, 'color', 'red');      
      this.render2.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      '#ffebee'
    );
    }
  }

}
