class Slider {
  constructor() {
    this.currentItem = 0;

    let container = document.querySelector('.container');
    this.items = document.querySelectorAll('.item');
    this.totalItemCount = this.items.length;
    if (this.items.length > 0) {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].style.left = `${i * 400}px`;
      }
    }
  }

  showNext() {
    this.currentItem = this.currentItem + 1;
    // this.updateItemPosition()
    for (let i = 0; i < this.totalItemCount; i++) {
      this.items[i].style.left = `${
        this.items[i].getBoundingClientRect().left - 400
      }px`;
    }
  }

  showPrev() {
    this.currentItem = this.currentItem - 1;
    for (let i = 0; i < this.totalItemCount; i++) {
      this.items[i].style.left = `${
        this.items[i].getBoundingClientRect().left + 400
      }px`;
    }
  }
}

let slider = new Slider();

document.querySelector('.next').addEventListener('click', (e) => {
  slider.showNext();
});

document.querySelector('.prev').addEventListener('click', (e) => {
  slider.showPrev();
});
