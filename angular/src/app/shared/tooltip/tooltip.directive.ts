import {
    Directive,
    ElementRef,
    HostListener,
    Input
} from '@angular/core';
import {Tooltip} from './tooltip';

@Directive({
    selector: '[tk-tooltip]'
})

export class TooltipDirective {
    @Input() tkTooltipMessage: string = '';
    constructor(private el: ElementRef) {
    }

    @HostListener('click', ['$event']) onClick(event: Event) {
        console.log(this.tkTooltipMessage);
        if(this.tkTooltipMessage.trim()) {
            Tooltip.show(this.el.nativeElement, this.tkTooltipMessage.trim());
        }
    }
}
