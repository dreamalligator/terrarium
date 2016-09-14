_ = require("underscore")
Backbone = require("backbone")
Backbone.ajax = require('backbone.nativeajax')
require("backbone.nativeview")
Backbone.View = Backbone.NativeView
require("./taxonomy")
require("./plot")

# Models
Plant = Backbone.Model.extend(
  initialize: ->
    _.extend(@, @attributes)
    @addEnvironmentalParameters()

  addEnvironmentalParameters: ->
    foundParams = _.find(window.rawTaxonomy, (plantAttributes) =>
      plantAttributes.taxon == @taxon
    )
    _.extend(@, foundParams) if foundParams

  formattedTemperature: ->
    if t = @environment?.temperature
      [t.ambient, t.soil, t.extremes].join(' ')
    else
      ""

  formattedHumidity: ->
    @environment?.humidity || ""

  formattedLuminosity: ->
    @environment?.luminosity || ""

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
    @el.innerHTML = @template({ plants: @model })
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
