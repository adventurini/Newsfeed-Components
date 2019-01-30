// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement= domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', ()=> this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles= document.querySelectorAll('.article');
articles.forEach(domElement => new Article(domElement));

// class Panel {
//   // constructor
//   constructor(panel) {
//     // panel is the individual DOM panel
//     this.panelButtons = panel.querySelector('.panel-buttons');
//     this.panelBtnOpen = panel.querySelector('.panel-btn-open');
//     this.panelBtnClose = panel.querySelector('.panel-btn-close');
//     this.panelContent = panel.querySelector('.panel-content');
    
//     //this.panelButtons.addEventListener('click', this.togglePanel.bind(this));
//     this.panelButtons.addEventListener('click', () => this.togglePanel());
    
//   }
//   // methods
//   togglePanel() {
//     console.log(this.panelBtnOpen);
//     this.panelBtnOpen.classList.toggle('hide-btn');
//     this.panelBtnClose.classList.toggle('hide-btn');
//     this.panelContent.classList.toggle('toggle-on');
//   }
// }

// const panels = document.querySelectorAll('.panel');
// panels.forEach( panel => new Panel(panel));


// // DOM panels -> loop (forEach) -> forEach will iterate over each DOM panel individually -> create a new Panel class -> creates a new panel object -> returned back to the dom
