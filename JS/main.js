document.addEventListener('DOMContentLoaded', function(event) {
    // Button Builder
    var ButtonCreator = function(container) {
        this.container = container;
        this.buttons = [];
    };

    ButtonCreator.prototype.appendButton = function(number) {
        // Do not change this method, is not part of the test
        var element = document.createElement('button');
        // Set data-*
        element.setAttribute('data-index', (number + 1));

        element.innerText = 'Button #' + (number + 1);
        this.container.appendChild(element);
        this.buttons.push(element);
    };

    ButtonCreator.prototype.addEventListeners = function() {
        for (var i = 0; i < this.buttons.length; ++i) {
            this.buttons[i].addEventListener('click', function() {
                // Get data-*
                alert( 'METHOD #1: Set and Get data-attribute(data-index): ' + this.getAttribute('data-index') );

                // Sibling
                var elements = this.parentNode.childNodes;
                var index = 0;
                for (var i = 0; i < elements.length; i++) {
                    // Only work with elements, another nodetypes are not valid
                    if (elements[i].nodeType === 1) {
                        // If the current element is equal to "this": break!
                        if(elements[i] === this) break;
                        index++;
                    }
                }
                alert('METHOD #2: Sibling(Count previous elements in same parent node): ' + (index +1));

                // Original
                //alert( 'METHOD: Original: Button #' + ( i + 1 ) + ' pressed!');

            });
        }
    };

    // Initialization: Use button builder to generate 10 buttons
    var builder = new ButtonCreator(document.getElementById('container'));
    for (var i = 0; i < 10; ++i) {
        builder.appendButton(i);
    }
    builder.addEventListeners();
});
