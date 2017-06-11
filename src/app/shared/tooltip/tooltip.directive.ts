import {
    Directive,
    ElementRef,
    HostListener,
    Input
} from '@angular/core';
import {Tooltip} from './tooltip';

@Directive({
    selector: '[tkTooltip]'
})

export class TooltipDirective {
    @Input() tkTooltipMessage: string = '';
    constructor(private el: ElementRef) {
    }

    @HostListener('click', ['$event']) onClick(event: Event) {
        if(this.tkTooltipMessage.trim()) {
            Tooltip.show(this.el.nativeElement, this.tkTooltipMessage.trim());
        }
    }
}
