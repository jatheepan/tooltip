export let Tooltip = {
    show(element: any, text: string) {
        this.element = element;
        if(this.tooltipVisible) {
            // Hide any visible tooltips
            this.hide();
        }

        let tooltip = this.getTooltip();

        // element.parentNode.insertBefore(tooltip, element.nextSibling);
        document.body.appendChild(tooltip);

        tooltip.innerText = text;
        this.addTooltipStyle(element, tooltip);

        this.onMouseUpHandler = (e: any) => {
            let target = e.target;
            if(this.tooltipVisible && !target.classList.contains('tooltip')) {
                this.hide();
            }
        }
        this.onPageScrollHandler = () => this.addTooltipStyle(element, tooltip);
        document.addEventListener('mouseup', this.onMouseUpHandler);
        document.addEventListener('scroll', this.onPageScrollHandler);
        this.tooltipVisible = true;
    },

    hide() {
        document.body.removeChild(this.getTooltip());
        this.tooltipVisible = false;
        this.tooltip = null;

        document.removeEventListener('mouseup', this.onMouseUpHandler);
        document.removeEventListener('scroll', this.onPageScrollHandler);
    },

    getTooltip() {
        if(!this.tooltip) {
            let holder = document.createElement('span');

            holder.classList.add('tooltip');
            this.tooltip = holder;
        }

        return this.tooltip;
    },

    addTooltipStyle(element: any, tooltip: any) {
        let offset = 6;
        let tooltipWidth = tooltip.offsetWidth;
        let tooltipHeight = tooltip.offsetHeight;
        let elementPosition = element.getBoundingClientRect();
        let elementWidth = element.offsetWidth;
        let elementHeight = element.offsetHeight;
        let pageScroll = document.documentElement.scrollTop || document.body.scrollTop;

        tooltip.style.position = 'absolute';
        tooltip.style.left = (elementPosition.left + (elementWidth / 2) - (tooltipWidth / 2)) + 'px';

        if(tooltipHeight > elementPosition.top) {
            tooltip.style.top = pageScroll + (elementPosition.top + (elementHeight + offset)) + 'px';
            tooltip.classList.remove('top');
            tooltip.classList.add('bottom');
        } else {
            tooltip.style.top = pageScroll + (elementPosition.top - (tooltipHeight + offset)) + 'px';
            tooltip.classList.remove('bottom');
            tooltip.classList.add('top');
        }

    }
};