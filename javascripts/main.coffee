_ = require('underscore')
Backbone = require('backbone')
Backbone.ajax = require('backbone.nativeajax')
Backbone.View = require('backbone.nativeview')
# require('Backbone.dualStorage') # FIXME
require('./taxonomy')
require('./plot')

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
      ''

  formattedHumidity: ->
    @environment?.humidity || ''

  formattedLuminosity: ->
    @environment?.luminosity || ''

  defaults:
    alive: true
    carnivorous: true
    owner: 'tom'
)

PlantCollection = Backbone.Collection.extend(
  model: Plant
  url: './javascripts/plants.json'
)

@plantList = new PlantCollection()
@plantList.on('add', (plant) ->
  console.log("added plant: #{plant?.taxon}")
)

PlantListView = Backbone.View.extend(
  el: '#plant-container'
  events:
    'click .update': 'updatePlant'
    'click .create': 'createPlant'
    'click .cancel': ''
    'click .view': 'viewPlant'
  model: @plantList.models
  template: _.template(document.querySelector('#plant-collection-template').innerHTML)

  initialize: ->
    @render()

  render: (eventName) ->
    @el.innerHTML = @template({ plants: @model })
    @

  updatePlant: (_event) ->
    console.log 'update', @

  createPlant: (_event) =>
    console.log 'create', @
    @plantList.add([
      { taxon: "Dionaea Muscipula" }
      { taxon: "Drosera Capensis" }
    ])
)

@defaultPlantListView = null


AppRouter = Backbone.Router.extend({
  routes:
    '': 'list'
    'plant-info/:id': 'viewPlant'

  list: =>
    @plantList.fetch({
      success: =>
        @defaultPlantListView = new PlantListView()
        @defaultPlantListView.render()
    })

  viewPlant: (id) =>

})

newAppRouter = new AppRouter()
Backbone.history.start()
