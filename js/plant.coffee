parametersAndSources = [
  {
    taxon: ""
    common_name: "general parameters"
    t: [] # temperature (ambient, soil, extremes)
    h: [50, 90] # humidity
    l: [] # luminosity
    m: [] # moisture
    f: [] # air flow
    p: [] # ph
    s: [] # soil
    c: [] # container
    dp: # dormancy period
    d: { # databases
      i: # ITIS taxonomic serial number
      u: # USDA plants symbol
    }
    sources: [
      ["Barry Rice, <i>About Humidity</i>, The Carnivorous Plant FAQ (2007)", "http://www.sarracenia.com/faq/faq3440.html"]
    ]
  }, {
    taxon: "Byblis liniflora"
    common_name: "Rainbow Plant"
    t: [[null, null], [60, 85], [38, 100]]
    h: [50, 80]
    l: [[8, 10], "full to partly  sunny"]
    m: ["damp, but not waterlogged"]
    f: []
    p: []
    sources: [
      ["Brian Barnes, <i>Growing Byblis successfully</i>, International Carnivorous Plant Society", "http://www.carnivorousplants.org/howto/GrowingGuides/Byblis.php"]
      ["Peter D'Amato, <i>The Savage Garden: Cultivating Carnivorous Plants</i>, p184-185, 1998", "ISBN: 0-89815-915-6"]
    ]
  }, {
    taxon: "Darlingtonia californica"
    common_name: "Cobra Lily"
    t: [[null, 62.6], [null, 80]]
    h: []
    l: [14]
    m: []
    f: []
    p: []
    d: {
      i: 22004
      u: "DACA5"
    }
    sources: [
      ["John Brittnacher, <i>Growing Darlingtonia californica</i>, International Carnivorous Plant Society", "http://www.carnivorousplants.org/howto/GrowingGuides/Darlingtonia.php"]
      ["Jennifer Brownfield, <i>Rearing Cobras</i>, Carnivorous Plant Newsletter 14(3):78-80 (1985)", "http://www.carnivorousplants.org/cpn/articles/CPNv14n3p78_80.pdf"]
    ]
  }, {
    taxon: "Utricularia subulata"
    common_name: "Zigzag Bladderwort"
    t: [[68, 86]]
    h: []
    l: ["medium (some shade)"]
    m: []
    f: []
    p: []
    d: {
      i: 34465
      u: "UTSU"
    }
    sources: [
      ["Barry Rice, <i>About terrestrial Utricularia</i>, The Carnivorous Plant FAQ (2007)", "http://www.sarracenia.com/faq/faq5583.html"]
    ]
  }, {
    taxon: "Pinguicula lusitanica"
    common_name: "Pale Butterwort"
    t: [[60, null]]
    h: []
    l: []
    m: []
    f: []
    p: []
    sources: [
      ["<i>Growing warm temperate Pinguicula</i>, International Carnivorous Plant Society", "http://www.carnivorousplants.org/howto/GrowingGuides/Pings_WarmTemp.php"]
    ]
  }, {
    taxon: "Proboscidea parviflora var. hohokamiania"
    common_name: "Devil's Claw"
    t: ["heat tolerant"]
    h: []
    l: []
    m: []
    f: []
    p: []
    d: {
      i: 833964
      u: "PRPAH"
    }
    sources: [
      ["<i>Growing Ibicella and Proboscidea</i>, International Carnivorous Plant Society", "http://www.carnivorousplants.org/howto/GrowingGuides/Ibicella.php"]
    ]
  }, {
    taxon: "Drosera rotundifolia"
    common_name: "Round-Leafed Sundew"
    t: [[60, 90], "goes dormant below 60"]
    h: [50, 60]
    l: ["as much as possible; will flower >16 hr photoperiod"]
    m: []
    f: []
    p: []
    sources: [
      ["Aaron May, <i>Drosera rotundifolia 'Charles Darwin'</i>, The Sundew Grow Guides", "http://www.growsundews.com/sundews/rotundifolia_charles_darwin.html"]
    ]
  }, {
    taxon: "Drosera filiformis tracyi"
    common_name: "Thread-Leafed Sundew, white form"
    t: ["USDA zone 6-9, with winter protection. Most likely need a wintering to germinate seeds."]
    h: []
    l: []
    m: []
    f: []
    p: []
    d: {
      i: 527788
      u: "DRTR4"
    }
    sources: [
      ["John Brittnacher, <i>Growing Drosera filiformis and Drosera tracyi</i>, International Carnivorous Plant Society", "http://www.carnivorousplants.org/howto/GrowingGuides/D_filiformis.php"]
      ["Barry Rice, <The Thread-leaf Sundews Drosera Filiformis and Drosera Tracyi</i>, International Carnivorous Plant Society", "http://www.sarracenia.com/pubs/cpn40-4-16.pdf"]
    ]
  }, {
    taxon: "Drosera capensis"
    common_name: "Cape Sundew, typical form"
    t: [[45, 90]]
    h: [50, null]
    l: ["will turn red with 16hr photoperiod"]
    m: []
    f: []
    p: []
    sources: [
      ["Aaron May, <i>Drosera capensis varieties</i>, The Sundew Grow Guides", "http://www.growsundews.com/sundews/Drosera_capensis.html"]
    ]
  }, {
    taxon: "Sarracenia leucophylla"
    common_name: "White-topped Pitcher Plant"
    t: ["needs seasons, summer - mid 90's, winter - can tolerate freezing"]
    h: []
    l: ["full sun"]
    m: []
    f: []
    p: []
    sources: [
      ["<i>Growing Sarracenia leucophylla</i>, International Carnivorous Plant Society", "http://www.carnivorousplants.org/howto/GrowingGuides/S_leucophylla.php"]
    ]
  }, {
    taxon: "Nepenthes (N. maxima x N. northiana)"
    common_name: "Miranda"
    t: [[68,95], "fairly wide temperature range. It does best with warm to hot days and cool nights, but avoid longer periods of cold night time temperatures"]
    h: ["consistently high humidity"]
    l: [13, "consistent, low-intensity illumination, or at least indirect sunlight"]
    m: []
    f: []
    p: []
    sources: [
      ["David P. Evans, <i>Nepenthes maxima ‘Lake Poso’</i>, Carnivorous Plant Newsletter 38(1):12-22 (2009)", "http://www.carnivorousplants.org/cpn/Species/v38n1p12_22.html"]
      ["Jeff Shafer, <i>Cultivation of Nepenthes Northiana</i>, Carnivorous Plant Newsletter 32(2):49-51 (2003)", "http://www.carnivorousplants.org/cpn/articles/CPNv32n2p49_51.pdf"]
    ]
  }, {
    taxon: "Sarracenia purpurea purpurea"
    common_name: "Northern Purple Pitcher Plant"
    t: [[-20, null], "most cold hardy of the <i>Sarracenia</i>, can survive USDA zone 5 and colder"]
    h: []
    l: ["bright, or full sun"]
    m: []
    f: []
    p: []
    sources: [
      ["John Brittnacher, <i>Growing Sarracenia purpurea and S. rosea</i>, International Carnivorous Plant Society","http://www.carnivorousplants.org/howto/GrowingGuides/S_purpurea.php"]
      ["John Brittnacher, <i>Growing Sarracenia</i>, International Carnivorous Plant Society", "http://www.carnivorousplants.org/howto/GrowingGuides/Sarracenia.php"]
    ]
  }, {
    taxon: "Drosera binata"
    common_name: "t-form"
    t: []
    h: []
    l: ["strong light"]
    m: ["medium wet to sodden during growth periods, and some moisture during dormancy"]
    f: []
    p: ["acidic"]
    sources: [
      ["I. Gilbert, <i>Drosera Binata</i>, Carnivorous Plant Newsletter 13(3):74-76 (1984)", "http://carnivorousplants.org/cpn/articles/CPNv13n3p74_76.pdf"]
    ]
  }, {
    taxon: "Sarracenia rubra ssp. gulfensis"
    common_name: "ancestral x giant"
    t: []
    h: []
    l: []
    m: []
    f: []
    p: []
    sources: null
  }, {
    taxon: "Nepenthes ventricosa x (singalana x aristolochioides)"
    common_name: ""
    t: []
    h: []
    l: []
    m: []
    f: []
    p: []
    sources: null
  }, {
    taxon: "Drosera adelae"
    common_name: ""
    t: ["hot"]
    h: ["high humidity, but not necessarily as much as the other sisters"]
    l: ["cited as found in wild with low light intensity, but lots of light cited by growers - see citations"]
    m: []
    f: []
    p: []
    sources: [
      ["John Brittnacher, <i>Growing Drosera adelae and sisters</i>, International Carnivorous Plant Society", "http://www.carnivorousplants.org/howto/GrowingGuides/DroseraTropical.php"]
      ["Roger Hoelter, <i>On the Care and (Not) Feeding of D. Adelae, Prolifera and Schizandra</i>, Carnivorous Plant Newsletter 17(1):22-24 (1988)", "http://www.carnivorousplants.org/cpn/articles/CPNv17n1p22_24.pdf"]
      ["Dr. P. S. Lavarack, <i>Rainforest Drosera of North Queensland</i>, Carnivorous Plant Newsletter 8(2):61-64 (1979)", "http://www.carnivorousplants.org/cpn/articles/CPNv08n2p60_64.pdf"]
    ]
  }, {
    taxon: "Drosophyllum lusitanicum"
    common_name: "dewey pine"
    t: [[40, 75], [], [null, 100], "will survive a light frost"]
    h: ["not humid"]
    l: [["1500 foot candles", null], "mostly sunny to full sun"]
    m: ["moist but dont let get soggy. well-drained."]
    f: []
    dp: [true, "cease to grow during the hot, dry summers. planting medium must be drier during the dormant period."]
    s: [
      "sphagnum moss (living and nonliving)"
      "sphagnum peat moss"
      "1 part sphagnum peat moss to 1 part perlite or 1 part sand"
      "1 part sphagnum peat moss to 3 parts sand or 3 parts perlite"
      "some growers add powdered limestone or dolomite at a rate of 1 teaspoon (5ml) per quart (liter) of medium"
    ]
    sources: [
      ["Tom Cahill, <i>Growing Drosophyllum lusitanicum</i>, International Carnivorous Plant Society", "http://www.carnivorousplants.org/howto/GrowingGuides/Drosophyllum.php"]
      ["Adrian Slack, <i>On Growing Drosphyllum Lusitanicum, The Portuguese Dewy Pine</i>, Carnivorous Plant Newsletter 8(2):64-67 (1979)"]
      ["James and Patricia Pietropaolo, <i>Carnivorous Plants of the World</i>, pg 100-104 (1986)"]
    ]
  }, {
    taxon: "Sarracenia psittacina"
    common_name: "parrot pitcher plant"
    t: ["is not freeze tolerant"]
    h: []
    l: ["full sun"]
    m: ["can handle submersion"]
    f: []
    p: []
    sources: [
      ["Growing Sarracenia psittacina, International Carnivorous Plant Society", "http://www.carnivorousplants.org/howto/GrowingGuides/S_psittacina.php"]
      ["Barry Rice, <i>About Sarracenia psittacina, the parrot pitcher plant</i>", "http://www.sarracenia.com/faq/faq5536.html"]
    ]
    notes: "top-water regularly to maintain oxygen levels for teh roots and to keep salt levels down in the soil"
  }, {
    taxon: "Dionaea muscipula 'Royal Red'"
    common_name: ""
    t: [[10.4, null], "cool"]
    h: ["humid"]
    l: ["full sun"]
    m: ["wet, but not soggy. water level should be more than 5cm (2 in) below surface of soil."]
    f: []
    p: []
    sources: [
      ["John Brittnacher, <i>Growing Dionaea muscipula</i>", "http://www.carnivorousplants.org/howto/GrowingGuides/Dionaea.php"]
    ]
  }, {
    taxon: "Pinguicula primuliflora"
    common_name: ""
    t: [[50, 86], [null, null], [32, 95], "doesn't have any special adaptations to survive freezing weather"]
    h: ["high humidity"]
    l: ["indirect light or filtered, avoid direct sun exposure"]
    m: ["moist, can tolerate flooded conditions for a short period of time. a good aeration is especially necessary to avoid the prone rotting of the plants."]
    f: []
    p: []
    d: {
      i: 34440
      u: "PIPR"
    }
    sources: [
      ["<i>Pinguicula primuliflora</i>, A World of Pinguicula", "http://www.pinguicula.org/A_world_of_Pinguicula_2/Pages/pinguicula_primuliflora.htm"]
      ["<i>Growing warm temperate Pinguicula</i>, International Carnivorous Plant Society", "http://www.carnivorousplants.org/howto/GrowingGuides/Pings_WarmTemp.php"]
    ]
  }, {
    taxon: "Pinguicula cyclosecta"
    common_name: ""
    t: [[68, 95], [null, null], [39.2, null], "warm humid in summer, cooler and drier in winter"]
    h: [[20, null], "high humidity when carnivorous leaves, less when not."]
    l: ["need seasonal light cues"]
    m: ["not boggy. water according to leaf type, not season. when the plants have carnivorous leaves, they need to be kept moist and enjoy high humidity although they do fine at 20% RH. Succulent leaves means they need less water, keep soild lightly damp. Can be totally dry if air is very humid."]
    f: ["windy"]
    p: ["alkaline"]
    sources: [
      ["Johan van Marm, <i>'Here at last: Pinguicula cyclosecta</i>' The International Pinguicula Study Group, Newsletter No. 6, April 1995", "http://www.carnivorousplants.org/IPSG/IPSG_06.PDF"]
      ["John Brittnacher, <i>Growing Mexican Pinguicula</i>, International Carnivorous Plant Society", "http://www.carnivorousplants.org/howto/GrowingGuides/Pings_Mexican.php"]
      ["<i>Pinguicula cyclosecta</i>, A World of Pinguicula", "http://www.pinguicula.org/pages/plantes/pinguicula_cyclosecta.htm"]
    ]
  }, {
    taxon: "Nepenthes x maxima"
    common_name: ""
    t: []
    h: []
    l: []
    m: []
    f: []
    p: []
    sources: null
  }, {
    taxon: "Sarracenia 'Dana\'s Delight'"
    common_name: ""
    t: []
    h: []
    l: []
    m: []
    f: []
    p: []
    sources: null
  }, {
    taxon: "Nepenthes singalana 'Tujuh'"
    common_name: ""
    t: []
    h: []
    l: []
    m: []
    f: []
    p: []
    sources: null
  }
]

synonymList = [
  [
    {
      taxon: "Drosera filiformis",
      var: "tracyi"
    },
    {
      taxon: "Drosera tracyi"
    }
  ]
]

circleOfLifeList = [
  {
    taxon: "Drosera binata"
    arrived: {
      date: 20151005 12 # YYYYMMDD HR:MM:SS
      source: "shipped from California Carnivores, potted."
    }
    inBetween: [
      {
        date: 20151009
        size:
        alive: true
      } , {
        date:
      }
    ]
    died: null
  }, {
    taxon: "Drosera tracyi"
    arrived: {
      date: 20151005 12 # YYYYMMDD HR:MM:SS
      source: "shipped from California Carnivores, potted."
    }
  }, {
    taxon: "Sarracenia rubra ssp. gulfensis 'ancestral x giant'"
    arrived: {
      date: 20151005 12 # YYYYMMDD HR:MM:SS
      source: "shipped from California Carnivores, potted."
    }
  }, {
    taxon: "Drosera Capensis"
    arrived: {
      date: 20151005 12 # YYYYMMDD HR:MM:SS
      source: "shipped from California Carnivores, potted."
    }
  }, {
    taxon: "Drosera Capensis 'alba'"
    arrived: {
      date: 20151005 12 # YYYYMMDD HR:MM:SS
      source: "shipped from California Carnivores, potted."
    }
  }, {
    taxon: "Drosera Capensis 'narrow red'"
    arrived: {
      date: 20151005 12 # YYYYMMDD HR:MM:SS
      source: "shipped from California Carnivores, potted."
    }
  }, {
    taxon: "Nepenthes ventricosa x (singalana x aristolochioides)"
    arrived: {
      date: 20151016 18 # YYYYMMDD HR:MM:SS
      notes: "medium size. Super dark purple pitchers, almost black."
      source: "Bought on site at California Carnivores."
    }
  }, {
    taxon: "Drosera adelae"
    owner: "Tom"
    arrived: {
      date: 20151016 18 # YYYYMMDD HR:MM:SS
      source: "Bought on site at California Carnivores."
    }
  }, {
    taxon: "Drosera adelae"
    owner: "Fonda"
    arrived: {
      date: 20151016 18 # YYYYMMDD HR:MM:SS
      source: "Bought on site at California Carnivores."
    }
  }, {
    taxon: "Drosophyllum"
    owner: "Tom"
    arrived: {
      date: 20151016 18 # YYYYMMDD HR:MM:SS
      source: "Bought on site at California Carnivores."
    }
    inBetween: [
      {
        date: 20151108 17
        size:
        alive: true
        notes: "slack potted in terra cotta clay pot, with mix made by Peter D'Amato. pot is approximately 6\" bottom diameter and 9.5\" on top. height is approx. 9\". some sphagnum over bottom hole to block losing soil. trimmed dead stalks away. thorougly wetted with distilled water. didn't have enough mix to fill to top, will have to add more soon."
      }
    ]
    died: null
  }, {
    taxon: "Sarracenia psittacina"
    owner: "Tom"
    arrived: {
      date: 20151016 18 # YYYYMMDD HR:MM:SS
      source: "Bought on site at California Carnivores."
    }
  }, {
    taxon: "Dionaea muscipula 'Royal Red'"
    owner: "Tom"
    arrived: {
      date: 20151016 18 # YYYYMMDD HR:MM:SS
      source: "Bought on site at California Carnivores."
    }
  }, {
    taxon: "Pinguicula primuliflora"
    owner: "Tom"
    arrived: {
      date: 20151016 18 # YYYYMMDD HR:MM:SS
      source: "Bought on site at California Carnivores."
    }
  }, {
    taxon: "Pinguicula cyclosecta"
    owner: "Tom"
    arrived: {
      date: 20151016 18 # YYYYMMDD HR:MM:SS
      source: "Bought on site at California Carnivores."
    }
  }, {
    taxon: "Nepenthes 'Miranda'"
    owner: "Alex"
    arrived: {
      date: 20151016 18 # YYYYMMDD HR:MM:SS
      source: "Bought on site at California Carnivores."
    }
  }, {
    taxon: "Nepenthes x maxima"
    owner: "Fonda"
    arrived: {
      date: 20151016 18 # YYYYMMDD HR:MM:SS
      source: "Bought on site at California Carnivores."
    }
  }, {
    taxon: "Sarracenia 'Dana\'s Delight'"
    owner: "Fonda"
    arrived: {
      date: 20151016 18 # YYYYMMDD HR:MM:SS
      source: "Bought on site at California Carnivores."
    }
  }, {
    taxon: "Nepenthes singalana 'Tujuh'"
    owner: "Tom"
    arrived: {
      date: 20151016 18 # YYYYMMDD HR:MM:SS
      source: "Bought on site at California Carnivores."
    }
  }
]
