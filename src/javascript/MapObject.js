class MapObject {
  static all = []

  constructor({location, icon, color = 'black'}) {
    this.location = location
    this.icon = icon
    this.color = `text-${color}`
    console.log('hi')
    MapObject.all.push(this)
  }

}

export default MapObject