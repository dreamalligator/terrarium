_ = require("underscore")
Backbone = require("backbone")
Backbone.ajax = require('backbone.nativeajax')
Backbone.D3ViewMixin = require("backbone.nativeview")
Backbone.View = Backbone.NativeView

# Models
Plant = Backbone.Model.extend(
  initialize: ->

  defaults:
    owner: "tom"
)

PlantCollection = Backbone.Collection.extend(
  model: Plant
  url: "./javascripts/plants.json"
)

# Views
PlantListView = Backbone.View.extend(
  el: "#plant-container"
  template: _.template(document.querySelector("#plant-collection-overview").innerHTML)

  initialize: ->
    @render()

  render: (eventName) ->
    plants = _.pluck(@model, 'attributes')
    formattedData = { plants: plants }
    @el.innerHTML = @template(formattedData)
)

# Router
AppRouter = Backbone.Router.extend({
  routes:
    "": "list"
    "plants/:id": "plant"

  list: =>
    @plantList = new PlantCollection()
    @plantList.fetch({
      success: =>
        defaultPlantListView = new PlantListView({ model: @plantList.models })
        defaultPlantListView.render()
    })

  plant: (id) =>
    @plantList = new PlantCollection()
    @plantList.fetch({
      success: =>
        console.log @plantList.get(id).attributes
    })
})

app_router = new AppRouter()

Backbone.history.start()
