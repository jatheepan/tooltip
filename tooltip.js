var Tooltip = {
    show: function(element, text) {
        if(this.tooltipVisible) {
            // Hide any visible tooltips
            this.hide();
        }
        var tooltip = this.getTooltip();
        var wrappedElement = this.getWrappedElement(element);

        tooltip.innerText = text;

        wrappedElement.appendChild(tooltip);
        wrappedElement.appendChild(element);

        this.bodyClick = document.body.addEventListener('mouseup', function(e) {
            var target = e.target;
            if(this.tooltipVisible && !target.classList.contains('tooltip')) {
                this.hide();
            }
        }.bind(this));

        this.tooltipVisible = true;
    },

    hide: function() {
        var parent = this.wrappedElement.parentNode;

        parent.appendChild(this.orgElement);
        parent.removeChild(this.wrappedElement);
        this.tooltipVisible = false;
        this.wrappedElement = null;
        this.tooltip = null;

        document.body.removeEventListener('mouseup', this.bodyClick);
    },

    getTooltip: function() {
        if(!this.tooltip) {
            var holder = document.createElement('div');

            holder.classList.add('tooltip');
            holder.classList.add('top');
            this.tooltip = holder;
        }

        return this.tooltip;
    },

    getWrappedElement: function(element) {
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
