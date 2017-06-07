var Tooltip = {
    show: function(element, text) {
        var tooltip = this.getTooltip();

        tooltip.innerText = text;
        element.parentNode.insertBefore(tooltip, element.nextSibling);
    },

    hide: function() {
        var tooltip = this.getTooltip();

        if(tooltip) {
            tooltip.parentNode.removeChild(tooltip);
            this.tooltip = null;
        }
    },

    getTooltip: function() {
        if(!this.tooltip) {
            var holder = document.createElement('div');

            holder.classList.add('tooltip');
            this.tooltip = holder;
        }

        return this.tooltip;
    }
};