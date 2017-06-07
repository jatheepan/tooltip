var Tooltip = {
    show: function(element, text) {
        var tooltip = this.getTooltip();

        tooltip.innerText = text;
        element.parentNode.insertBefore(tooltip, element.nextSibling);
        element.parentNode.classList.add('tooltip-parent');
    },

    hide: function() {
        var tooltip = this.getTooltip();

        if(tooltip) {
            tooltip.parentNode.removeChild(tooltip);
            tooltip.parentNode.classList.remove('tooltip-parent');
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

var button = document.getElementById('button');
var button2 = document.getElementById('button2');

button.onclick = function() {
    Tooltip.show(button, 'TEST');
};
button2.onclick = function() {
    Tooltip.show(button2, 'TEST');
};
