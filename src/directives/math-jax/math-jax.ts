import { Directive, ElementRef, Input } from '@angular/core';

/**
* Generated class for the MathJaxDirective directive.
*
* See https://angular.io/api/core/Directive for more info on Angular
* Directives.
*/
@Directive({
selector: '[MathJax]' // Attribute selector
})
export class MathJaxDirective {
@Input('MathJax') MathJaxInput: string;
constructor(private el: ElementRef) {
}
ngOnChanges() {
console.log('>> ngOnChanges');
//let MathJax : any;
//this.el.nativeElement.style.backgroundColor = 'yellow';
this.el.nativeElement.innerHTML = this.MathJaxInput;
console.log(this.MathJaxInput);
eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub, this.el.nativeElement])');
eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub, this.el.nativeElement])');
}
}