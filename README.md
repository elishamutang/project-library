# project-library
Library project from The Odin Project's JavaScript course.

To action:

1. Ensure data from book object is displayed in main container. *New Book div is being created with its info displayed everytime the 'Submit' button is clicked.*

2. Display book dynamically in main element whenever user inserts a new book. *Solved using auto-fit/auto-fill and minmax for grid-items. Alternatively can use media queries but out of scope for this project.*

3. Use grid to dynamically adjust inside main element (i.e resize book 'cards' to fit within main element). *Solved using auto-fit/auto-fill and minmax for grid-items.*

4. Utilize data attributes. Dynamically create data attributes for each "book" object using JS. Ensure there will be a link between myLibrary array and book object in DOM (i.e if a book is to removed from the DOM, that book will also be removed in myLibrary array).

Bugs found: 
1. Users were able to input pages less than 0. *Solution was to check if value for pages is more than 0, then run code nested inside if statement.*


Future improvements:

1. CSS hover effects for buttons.
2. Freeze header (i.e when scrolling downwards, header follows).
3. Styling of modal (general styling and transition).
