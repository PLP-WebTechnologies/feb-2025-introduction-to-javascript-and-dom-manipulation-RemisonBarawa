// script.js

// Change Text Content Dynamically
const changeTextButton = document.getElementById('changeTextButton');
const greetingElement = document.getElementById('greeting');

if (changeTextButton && greetingElement) {
    changeTextButton.addEventListener('click', function() {
        greetingElement.textContent = 'Hello from JavaScript!';
    });
}

// Modify CSS Styles via JavaScript
const changeStyleButton = document.getElementById('changeStyleButton');
const styleElement = document.getElementById('style-element');

if (changeStyleButton && styleElement) {
    changeStyleButton.addEventListener('click', function() {
        styleElement.style.backgroundColor = 'lightblue';
        styleElement.style.color = 'darkblue';
        styleElement.style.padding = '10px';
        styleElement.style.border = '1px solid blue';
    });
}

// Add or Remove an Element
const addElementButton = document.getElementById('addElementButton');
const removeElementButton = document.getElementById('removeElementButton');
const elementContainer = document.getElementById('element-container');
const removableParagraph = document.getElementById('removable-paragraph');
let newParagraphCounter = 1;
let isParagraphRemoved = false;

if (addElementButton && elementContainer) {
    addElementButton.addEventListener('click', function() {
        if (isParagraphRemoved) {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = `New paragraph added: ${newParagraphCounter}`;
            elementContainer.appendChild(newParagraph);
            newParagraphCounter++;
            isParagraphRemoved = false;
        } else {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = `Another new paragraph: ${newParagraphCounter}`;
            elementContainer.appendChild(newParagraph);
            newParagraphCounter++;
        }
    });
}

if (removeElementButton && elementContainer && removableParagraph) {
    removeElementButton.addEventListener('click', function() {
        if (elementContainer.contains(removableParagraph)) {
            elementContainer.removeChild(removableParagraph);
            isParagraphRemoved = true;
        } else {
            alert('The original paragraph has already been removed.');
        }
    });
}
