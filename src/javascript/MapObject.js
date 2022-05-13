class MapObject {
  static all = []

  constructor({location, icon, color = 'black'}) {
    this.location = location
    this.icon = icon
    this.color = `text-${color}`
    this.hidden = false
    MapObject.all.push(this)
  }

  hide() {
    this.hidden = true
    MapObject.all = MapObject.all
  }

  unhide() {
    this.hidden = false
    MapObject.all = MapObject.all
  }

}

export default MapObject