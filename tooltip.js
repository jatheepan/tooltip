var Tooltip = {
    show: function(element, text) {
        if(this.tooltipVisible) {
            this.hide(); // Hide any visible tooltips
        }
        var tooltip = this.getTooltip();
        var wrappedElement = this.wrapElement(element);

        tooltip.innerText = text;

        wrappedElement.appendChild(tooltip);
        wrappedElement.appendChild(element);
        this.tooltipVisible = true;
    },

    hide: function() {
        var parent = this.wrappedElement.parentNode;

        parent.appendChild(this.orgElement);
        parent.removeChild(this.wrappedElement);
        this.tooltipVisible = false;
        this.wrappedElement = null;
        this.tooltip = null;
    },

    getTooltip: function() {
        if(!this.tooltip) {
            var holder = document.createElement('div');

            holder.classList.add('tooltip');
            this.tooltip = holder;
        }

        return this.tooltip;
    },

    wrapElement: function(element) {
        if(!this.wrappedElement) {
            this.orgElement = element;
            var wrapper = document.createElement('div');

            wrapper.classList.add('tooltip-wrapper');
            element.parentNode.replaceChild(wrapper, element);
            this.wrappedElement = wrapper;
        }

        return this.wrappedElement;
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
