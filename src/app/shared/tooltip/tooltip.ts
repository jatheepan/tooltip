export let Tooltip = {
    show(element: any, text: string) {
        if(this.tooltipVisible) {
            // Hide any visible tooltips
            this.hide();
        }

        var tooltip = this.getTooltip();

        element.parentNode.insertBefore(tooltip, element.nextSibling);

        tooltip.innerText = text;
        this.addTooltipStyle(element, tooltip);

        this.bodyClick = document.addEventListener('mouseup', function(e: any) {
            var target = e.target;
            if(this.tooltipVisible && !target.classList.contains('tooltip')) {
                this.hide(element);
            }
        }.bind(this));

        this.tooltipVisible = true;
    },

    hide(element: any) {
        element.parentNode.removeChild(this.getTooltip());
        this.tooltipVisible = false;
        this.wrappedElement = null;
        this.tooltip = null;

        document.removeEventListener('mouseup', this.bodyClick);
    },

    getTooltip() {
        if(!this.tooltip) {
            var holder = document.createElement('span');

            holder.classList.add('tooltip');
            holder.classList.add('top');
            this.tooltip = holder;
        }

        return this.tooltip;
    },

    addTooltipStyle: function(element: any, tooltip: any) {
        var tooltipWidth = tooltip.offsetWidth;
        var elementPosition = element.getBoundingClientRect();
        var elementWidth = element.offsetWidth;

        tooltip.style.position = 'absolute';
        tooltip.style.top = (elementPosition.top - (40)) + 'px';
        tooltip.style.left = (elementPosition.left + (elementWidth / 2) - (tooltipWidth / 2)) + 'px';
    }
};