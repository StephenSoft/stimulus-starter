import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]

//   connect(){
//       alert("aaaa")
//   }

  initialize() {
    this.index = 0
    this.showCurrentSlide()
  }

  next() {
      console.log("next")
    this.index++
    this.showCurrentSlide()
  }

  previous() {
    this.index--
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.index
      console.log(`aaa: ${this.index}`)
    })
  }
}