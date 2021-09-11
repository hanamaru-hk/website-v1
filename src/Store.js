import { action, observable, decorate } from "mobx"

export class Store {
  dest = null

  scrollTo(dest) {
    this.dest = dest
  }
}

decorate(Store, {
  dest: observable,
  scrollTo: action,
})

export default Store
