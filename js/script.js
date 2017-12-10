// Business (or back-end) logic:

// An array of web development terms
let terms = [
  'Alert',
  'Arguments',
  'Assignment operator',
  'Attributes',
  'Booleans',
  'Business logic',
  'Callback',
  'Calling',
  'Chaining methods',
  'Comments',
  'Comparison operator',
  'Concatenation',
  'Document Object Model, or DOM',
  'Documentation and Resources',
  'Escape',
  'Event handler',
  'Functions',
  'Javascript',
  'Jquery',
  'Methods',
  'NaN',
  'Null',
  'Number',
  'Operators',
  'Parameters',
  'Regular expressions',
  'Return',
  'Strings',
  'Undefined',
  'User interface logic',
  'Variable naming conventions',
  'Variables'
];

// An array of web development definitions
let definitions = [
  'A function that opens a dialog box and returns undefined.',
  'Is what you pass into a function or method that provide the function with additional information to help it perform its action.',
  'Changes the value of the variable on the left of the operator.',
  'These are additional values that configure the elements or adjust their behavior.',
  'true and false are booleans. They are not strings - they simply represent being true or false.',
  'The code responsible for handling the evaluation and manipulation of data; does not require any user interface.',
  'a function passed as an argument to another function. A callback function is not executed immediately; One use of callback functions is that they are passed into event handlers to be executed at a future time.',
  'Executing a function on a thing.',
  'Calling a method directly on the return value of another method.',
  'anything following // on a line in JavaScript or contained in /* */ is ignored by the computer. Comments are a convenient way to leave notes in your code for yourself or other programmers.',
  'Does not change any values, but returns a boolean (true or false) depending on whether the statement evaluates as true or false.',
  'Combining two Strings together into one String.',
  'Is your browser\'s interpretation of the HTML it reads. When JavaScript changes the page, it updates the DOM, not the HTML.',
  'MDN is one of the best sources of documentation on JavaScript. The site includes guides, tutorials, reference, tools and resources for developers using JavaScript.',
  'Include quotes in strings by either escaping them with \\, or by using single quotes outside.',
  'An event handler "listens" to the element(s) to which it\'s attached and responds when a certain event is triggered. .click() is a click listener, which is a type of event handler that responds when an element to which it\'s attached is clicked.',
  'A function is a block of code that performs an action and returns a result; optionally takes arguments',
  'JavaScript is a programming language used to make web pages interactive. Like HTML and CSS, you do not need to install anything to begin writing JavaScript or see it run on your users\' computers. All modern browsers support JavaScript which means JavaScript that you write for your web pages will automatically run when your visitors load your web page in their browsers. In fact, JavaScript is the only scripting language that all browsers support so if you want a page to have dynamic content, learning JavaScript is a must.',
  'Is a JavaScript library that makes it easier to incorporate JavaScript on your web pages. When we say it is a library, we mean that many common tasks that would take many, many lines of JavaScript code to execute have been packaged into methods that you\'ll be able to use with a single line of code. These methods are always available and ready to use the same way you might check out a book at a library. The goal of jQuery is to allow its users to "write less, do more". It\'s also one of the primary ways we can add interactivity to our sites.',
  'A method is an action run on a piece of data; you can think of it as a message you send to a piece of data, and the result is the response.',
  'Is a type of number which stands for not a number.',
  'This represents nothingness.',
  'Numerical value.',
  'An operator is a special character (or characters) that indicates an action to be performed.',
  'Is a variable that\'s assigned to the argument.',
  'Are search strings used to locate and manipulate content that matches a particular pattern.',
  'The return value is the function\'s response.',
  'A JavaScript data type that represents the exact text of whatever is enclosed in the quotes',
  'An object (such as a variable) without a defined value.',
  'The code responsible for the interaction between the user and the application; handles tasks such as event listening, user input forms, DOM manipulation, display and styling.',
  'Use lowerCamelCase when naming JavaScript variables. Start with a lowercase letter, and if the variable name is more than one word, remove all spaces and capitalize the first letter of each subsequent word.',
  'Variables can be thought of as containers used to store information. They allow for a way to label data with a descriptive name.'
];

// User-interface (or front-end) logic:

// An event listener to show and hide the definition of div.flashcard on click
$('.flashcard').click(function() {
  $(this).children('p').fadeToggle().toggleClass('hidden');
});
