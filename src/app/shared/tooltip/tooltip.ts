export let Tooltip = {
    show(element: any, text: string) {
        this.element = element;
        if(this.tooltipVisible) {
            // Hide any visible tooltips
            this.hide();
        }

        let tooltip = this.getTooltip();

        element.parentNode.insertBefore(tooltip, element.nextSibling);

        tooltip.innerText = text;
        this.addTooltipStyle(element, tooltip);

        this.bodyClick = document.addEventListener('mouseup', function(e: any) {
            let target = e.target;
            if(this.tooltipVisible && !target.classList.contains('tooltip')) {
                this.hide(element);
            }
        }.bind(this));

        this.tooltipVisible = true;
    },

    hide(element: any) {
        element.parentNode.removeChild(this.getTooltip());
        this.tooltipVisible = false;
        this.tooltip = null;

        document.removeEventListener('mouseup', this.bodyClick);
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
        let elementWidth = elementPosition.width;
        let elementHeight = elementPosition.height;

        tooltip.style.position = 'absolute';
        tooltip.style.left = (elementPosition.left + (elementWidth / 2) - (tooltipWidth / 2)) + 'px';

        if(tooltipHeight > elementPosition.top) {
            tooltip.style.top = (elementPosition.top + (elementHeight + offset)) + 'px';
            tooltip.classList.add('bottom');
        } else {
            tooltip.style.top = (elementPosition.top - (tooltipHeight + offset)) + 'px';
            tooltip.classList.add('top');
        }

    }
};