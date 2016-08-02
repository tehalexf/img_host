var app = angular.module('app', ['ngRoute']);




var pokemonList = [{
    "name": "Bulbasaur",
    "type": "Grass / Poison",
    "candy": "25 Bulbasaur Candy",
    "egg": "2 km"
}, {
    "name": "Ivysaur",
    "type": "Grass / Poison",
    "candy": "100 Bulbasaur Candy",
    "egg": "Not in Eggs"
}, {
    "name": "Venusaur",
    "type": "Grass / Poison",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Charmander",
    "type": "Fire",
    "candy": "25 Charmander Candy",
    "egg": "2 km"
}, {
    "name": "Charmeleon",
    "type": "Fire",
    "candy": "100 Charmander Candy",
    "egg": "Not in Eggs"
}, {
    "name": "Charizard",
    "type": "Fire / Flying",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Squirtle",
    "type": "Water",
    "candy": "25 Squirtle Candy",
    "egg": "2 km"
}, {
    "name": "Wartortle",
    "type": "Water",
    "candy": "100 Squirtle Candy",
    "egg": "Not in Eggs"
}, {
    "name": "Blastoise",
    "type": "Water",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Caterpie",
    "type": "Bug",
    "candy": "12 Caterpie Candy",
    "egg": "2 km"
}, {
    "name": "Metapod",
    "type": "Bug",
    "candy": "50 Caterpie Candy",
    "egg": "Not in Eggs"
}, {
    "name": "Butterfree",
    "type": "Bug / Flying",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Weedle",
    "type": "Bug / Poison",
    "candy": "12 Weedle Candy",
    "egg": "2 km"
}, {
    "name": "Kakuna",
    "type": "Bug / Poison",
    "candy": "50 Weedle Candy",
    "egg": "Not in Eggs"
}, {
    "name": "Beedrill",
    "type": "Bug / Poison",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Pidgey",
    "type": "Normal / Flying",
    "candy": "12 Pidgey Candy",
    "egg": "2 km"
}, {
    "name": "Pidgeotto",
    "type": "Normal / Flying",
    "candy": "50 Pidgey Candy",
    "egg": "Not in Eggs"
}, {
    "name": "Pidgeot",
    "type": "Normal / Flying",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Rattata",
    "type": "Normal",
    "candy": "25 Rattata Candy",
    "egg": "2 km"
}, {
    "name": "Raticate",
    "type": "Normal",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Spearow",
    "type": "Normal / Flying",
    "candy": "50 Spearow Candy",
    "egg": "2 km"
}, {
    "name": "Fearow",
    "type": "Normal / Flying",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Ekans",
    "type": "Poison",
    "candy": "50 Ekans Candy",
    "egg": "5 km"
}, {
    "name": "Arbok",
    "type": "Poison",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Pikachu",
    "type": "Electric",
    "candy": "50 Pikachu Candy",
    "egg": "2 km"
}, {
    "name": "Raichu",
    "type": "Electric",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Sandshrew",
    "type": "Ground",
    "candy": "50 Sandshrew Candy",
    "egg": "5 km"
}, {
    "name": "Sandslash",
    "type": "Ground",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Nidoran (F)",
    "type": "Poison",
    "candy": "25 Nidoran â™€ Candy",
    "egg": "5 km"
}, {
    "name": "Nidorina",
    "type": "Poison",
    "candy": "100 Nidoran â™€ Candy",
    "egg": "Not in Eggs"
}, {
    "name": "Nidoqueen",
    "type": "Poison / Ground",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Nidoran (M)",
    "type": "Poison",
    "candy": "25 Nidoranâ™‚ Candy",
    "egg": "5 km"
}, {
    "name": "Nidorino",
    "type": "Poison",
    "candy": "100 Nidoran â™‚ Candy",
    "egg": "Not in Eggs"
}, {
    "name": "Nidoking",
    "type": "Poison / Ground",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Clefairy",
    "type": "Normal",
    "candy": "50 Clefairy Candy",
    "egg": "2 km"
}, {
    "name": "Clefable",
    "type": "Normal",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Vulpix",
    "type": "Fire",
    "candy": "50 Vulpix Candy",
    "egg": "5 km"
}, {
    "name": "Ninetales",
    "type": "Fire",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Jigglypuff",
    "type": "Normal",
    "candy": "50 Jigglypuff Candy",
    "egg": "2 km"
}, {
    "name": "Wigglytuff",
    "type": "Normal",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Zubat",
    "type": "Poison / Flying",
    "candy": "50 Zubat Candy",
    "egg": "2 km"
}, {
    "name": "Golbat",
    "type": "Poison / Flying",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Oddish",
    "type": "Grass / Poison",
    "candy": "25 Oddish Candy",
    "egg": "5 km"
}, {
    "name": "Gloom",
    "type": "Grass / Poison",
    "candy": "100 Oddish Candy",
    "egg": "Not in Eggs"
}, {
    "name": "Vileplume",
    "type": "Grass / Poison",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Paras",
    "type": "Bug / Grass",
    "candy": "50 Paras Candy",
    "egg": "5 km"
}, {
    "name": "Parasect",
    "type": "Bug / Grass",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Venonat",
    "type": "Bug / Poison",
    "candy": "50 Venonat Candy",
    "egg": "5 km"
}, {
    "name": "Venomoth",
    "type": "Bug / Poison",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Diglett",
    "type": "Ground",
    "candy": "50 Diglett Candy",
    "egg": "5 km"
}, {
    "name": "Dugtrio",
    "type": "Ground",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Meowth",
    "type": "Normal",
    "candy": "50 Meowth Candy",
    "egg": "5 km"
}, {
    "name": "Persian",
    "type": "Normal",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Psyduck",
    "type": "Water",
    "candy": "50 Psyduck Candy",
    "egg": "5 km"
}, {
    "name": "Golduck",
    "type": "Water",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Mankey",
    "type": "Fighting",
    "candy": "50 Mankey Candy",
    "egg": "5 km"
}, {
    "name": "Primeape",
    "type": "Fighting",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Growlithe",
    "type": "Fire",
    "candy": "50 Growlithe Candy",
    "egg": "5 km"
}, {
    "name": "Arcanine",
    "type": "Fire",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Poliwag",
    "type": "Water",
    "candy": "25 Poliwag Candy",
    "egg": "5 km"
}, {
    "name": "Poliwhirl",
    "type": "Water",
    "candy": "100 Poliwag Candy",
    "egg": "Not in Eggs"
}, {
    "name": "Poliwrath",
    "type": "Water / Fighting",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Abra",
    "type": "Psychic",
    "candy": "25 Abra Candy",
    "egg": "5 km"
}, {
    "name": "Kadabra",
    "type": "Psychic",
    "candy": "100 Abra Candy",
    "egg": "Not in Eggs"
}, {
    "name": "Alakazam",
    "type": "Psychic",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Machop",
    "type": "Fighting",
    "candy": "25 Machop Candy",
    "egg": "5 km"
}, {
    "name": "Machoke",
    "type": "Fighting",
    "candy": "100 Machop Candy",
    "egg": "Not in Eggs"
}, {
    "name": "Machamp",
    "type": "Fighting",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Bellsprout",
    "type": "Grass / Poison",
    "candy": "25 Bellsprout Candy",
    "egg": "5 km"
}, {
    "name": "Weepinbell",
    "type": "Grass / Poison",
    "candy": "100 Bellsprout Candy",
    "egg": "Not in Eggs"
}, {
    "name": "Victreebel",
    "type": "Grass / Poison",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Tentacool",
    "type": "Water / Poison",
    "candy": "50 Tentacool Candy",
    "egg": "5 km"
}, {
    "name": "Tentacruel",
    "type": "Water / Poison",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Geodude",
    "type": "Rock / Ground",
    "candy": "25 Geodude Candy",
    "egg": "2 km"
}, {
    "name": "Graveler",
    "type": "Rock / Ground",
    "candy": "100 Geodude Candy",
    "egg": "Not in Eggs"
}, {
    "name": "Golem",
    "type": "Rock / Ground",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Ponyta",
    "type": "Fire",
    "candy": "50 Ponyta Candy",
    "egg": "5 km"
}, {
    "name": "Rapidash",
    "type": "Fire",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Slowpoke",
    "type": "Water / Psychic",
    "candy": "50 Slowpoke Candy",
    "egg": "5 km"
}, {
    "name": "Slowbro",
    "type": "Water / Psychic",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Magnemite",
    "type": "Electric",
    "candy": "50 Magnemite Candy",
    "egg": "5 km"
}, {
    "name": "Magneton",
    "type": "Electric",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Farfetch'd",
    "type": "Normal / Flying",
    "candy": "None",
    "egg": "5 km"
}, {
    "name": "Doduo",
    "type": "Normal / Flying",
    "candy": "50 Doduo Candy",
    "egg": "5 km"
}, {
    "name": "Dodrio",
    "type": "Normal / Flying",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Seel",
    "type": "Water",
    "candy": "50 Seel Candy",
    "egg": "5 km"
}, {
    "name": "Dewgong",
    "type": "Water / Ice",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Grimer",
    "type": "Poison",
    "candy": "50 Grimer Candy",
    "egg": "5 km"
}, {
    "name": "Muk",
    "type": "Poison",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Shellder",
    "type": "Water",
    "candy": "50 Shellder Candy",
    "egg": "5 km"
}, {
    "name": "Cloyster",
    "type": "Water / Ice",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Gastly",
    "type": "Ghost / Poison",
    "candy": "25 Gastly Candy",
    "egg": "5 km"
}, {
    "name": "Haunter",
    "type": "Ghost / Poison",
    "candy": "100 Gastly Candy",
    "egg": "Not in Eggs"
}, {
    "name": "Gengar",
    "type": "Ghost / Poison",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Onix",
    "type": "Rock / Ground",
    "candy": "None",
    "egg": "10 km"
}, {
    "name": "Drowzee",
    "type": "Psychic",
    "candy": "50 Drowzee Candy",
    "egg": "5 km"
}, {
    "name": "Hypno",
    "type": "Psychic",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Krabby",
    "type": "Water",
    "candy": "50 Krabby Candy",
    "egg": "5 km"
}, {
    "name": "Kingler",
    "type": "Water",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Voltorb",
    "type": "Electric",
    "candy": "50 Voltorb Candy",
    "egg": "5 km"
}, {
    "name": "Electrode",
    "type": "Electric",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Exeggcute",
    "type": "Grass / Psychic",
    "candy": "50 Exeggcute Candy",
    "egg": "5 km"
}, {
    "name": "Exeggutor",
    "type": "Grass / Psychic",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Cubone",
    "type": "Ground",
    "candy": "50 Cubone Candy",
    "egg": "5 km"
}, {
    "name": "Marowak",
    "type": "Ground",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Hitmonlee",
    "type": "Fighting",
    "candy": "None",
    "egg": "10 km"
}, {
    "name": "Hitmonchan",
    "type": "Fighting",
    "candy": "None",
    "egg": "10 km"
}, {
    "name": "Lickitung",
    "type": "Normal",
    "candy": "None",
    "egg": "5 km"
}, {
    "name": "Koffing",
    "type": "Poison",
    "candy": "50 Koffing Candy",
    "egg": "5 km"
}, {
    "name": "Weezing",
    "type": "Poison",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Rhyhorn",
    "type": "Ground / Rock",
    "candy": "50 Rhyhorn Candy",
    "egg": "5 km"
}, {
    "name": "Rhydon",
    "type": "Ground / Rock",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Chansey",
    "type": "Normal",
    "candy": "None",
    "egg": "10 km"
}, {
    "name": "Tangela",
    "type": "Grass",
    "candy": "None",
    "egg": "5 km"
}, {
    "name": "Kangaskhan",
    "type": "Normal",
    "candy": "None",
    "egg": "5 km"
}, {
    "name": "Horsea",
    "type": "Water",
    "candy": "50 Horsea Candy",
    "egg": "5 km"
}, {
    "name": "Seadra",
    "type": "Water",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Goldeen",
    "type": "Water",
    "candy": "50 Goldeen Candy",
    "egg": "5 km"
}, {
    "name": "Seaking",
    "type": "Water",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Staryu",
    "type": "Water",
    "candy": "50 Staryu Candy",
    "egg": "5 km"
}, {
    "name": "Starmie",
    "type": "Water / Psychic",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Mr. Mime",
    "type": "Psychic",
    "candy": "None",
    "egg": "10 km"
}, {
    "name": "Scyther",
    "type": "Bug / Flying",
    "candy": "None",
    "egg": "10 km"
}, {
    "name": "Jynx",
    "type": "Ice / Psychic",
    "candy": "None",
    "egg": "10 km"
}, {
    "name": "Electabuzz",
    "type": "Electric",
    "candy": "None",
    "egg": "10 km"
}, {
    "name": "Magmar",
    "type": "Fire",
    "candy": "None",
    "egg": "10 km"
}, {
    "name": "Pinsir",
    "type": "Bug",
    "candy": "None",
    "egg": "10 km"
}, {
    "name": "Tauros",
    "type": "Normal",
    "candy": "None",
    "egg": "5 km"
}, {
    "name": "Magikarp",
    "type": "Water",
    "candy": "400 Magikarp Candy",
    "egg": "2 km"
}, {
    "name": "Gyarados",
    "type": "Water / Flying",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Lapras",
    "type": "Water / Ice",
    "candy": "None",
    "egg": "10 km"
}, {
    "name": "Ditto",
    "type": "Normal",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Eevee",
    "type": "Normal",
    "candy": "25 Eevee Candy",
    "egg": "10 km"
}, {
    "name": "Vaporeon",
    "type": "Water",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Jolteon",
    "type": "Electric",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Flareon",
    "type": "Fire",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Porygon",
    "type": "Normal",
    "candy": "None",
    "egg": "5 km"
}, {
    "name": "Omanyte",
    "type": "Rock / Water",
    "candy": "50 Omanyte Candy",
    "egg": "10 km"
}, {
    "name": "Omastar",
    "type": "Rock / Water",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Kabuto",
    "type": "Rock / Water",
    "candy": "50 Kabuto Candy",
    "egg": "10 km"
}, {
    "name": "Kabutops",
    "type": "Rock / Water",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Aerodactyl",
    "type": "Rock / Flying",
    "candy": "None",
    "egg": "10 km"
}, {
    "name": "Snorlax",
    "type": "Normal",
    "candy": "None",
    "egg": "10 km"
}, {
    "name": "Articuno",
    "type": "Ice / Flying",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Zapdos",
    "type": "Electric / Flying",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Moltres",
    "type": "Fire / Flying",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Dratini",
    "type": "Dragon",
    "candy": "25 Dratini Candy",
    "egg": "10 km"
}, {
    "name": "Dragonair",
    "type": "Dragon",
    "candy": "100 Dratini Candy",
    "egg": "Not in Eggs"
}, {
    "name": "Dragonite",
    "type": "Dragon / Flying",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Mewtwo",
    "type": "Psychic",
    "candy": "None",
    "egg": "Not in Eggs"
}, {
    "name": "Mew",
    "type": "Psychic",
    "candy": "None",
    "egg": "Not in Eggs"
}]

moveList = {
    0: "Move Unset",
    1: "Thunder Shock",
    2: "Quick Attack",
    3: "Scratch",
    4: "Ember",
    5: "Vine Whip",
    6: "Tackle",
    7: "Razor Leaf",
    8: "Take Down",
    9: "Water Gun",
    10: "Bite",
    11: "Pound",
    12: "Double Slap",
    13: "Wrap",
    14: "Hyper Beam",
    15: "Lick",
    16: "Dark Pulse",
    17: "Smog",
    18: "Sludge",
    19: "Metal Claw",
    20: "Vice Grip",
    21: "Flame Wheel",
    22: "Megahorn",
    23: "Wing Attack",
    24: "Flamethrower",
    25: "Sucker Punch",
    26: "Dig",
    27: "Low Kick",
    28: "Cross Chop",
    29: "Psycho Cut",
    30: "Psybeam",
    31: "Earthquake",
    32: "Stone Edge",
    33: "Ice Punch",
    34: "Heart Stamp",
    35: "Discharge",
    36: "Flash Cannon",
    37: "Peck",
    38: "Drill Peck",
    39: "Ice Beam",
    40: "Blizzard",
    41: "Air Slash",
    42: "Heat Wave",
    43: "Twineedle",
    44: "Poison Jab",
    45: "Aerial Ace",
    46: "Drill Run",
    47: "Petal Blizzard",
    48: "Mega Drain",
    49: "Bug Buzz",
    50: "Poison Fang",
    51: "Night Slash",
    52: "Slash",
    53: "Bubble Beam",
    54: "Submission",
    55: "Karate Chop",
    56: "Low Sweep",
    57: "Aqua Jet",
    58: "Aqua Tail",
    59: "Seed Bomb",
    60: "Psyshock",
    61: "Rock Throw",
    62: "Ancient Power",
    63: "Rock Tomb",
    64: "Rock Slide",
    65: "Power Gem",
    66: "Shadow Sneak",
    67: "Shadow Punch",
    68: "Shadow Claw",
    69: "Ominous Wind",
    70: "Shadow Ball",
    71: "Bullet Punch",
    72: "Magnet Bomb",
    73: "Steel Wing",
    74: "Iron Head",
    75: "Parabolic Charge",
    76: "Spark",
    77: "Thunder Punch",
    78: "Thunder",
    79: "Thunderbolt",
    80: "Twister",
    81: "Dragon Breath",
    82: "Dragon Pulse",
    83: "Dragon Claw",
    84: "Disarming Voice",
    85: "Draining Kiss",
    86: "Dazzling Gleam",
    87: "Moonblast",
    88: "Play Rough",
    89: "Cross Poison",
    90: "Sludge Bomb",
    91: "Sludge Wave",
    92: "Gunk Shot",
    93: "Mud Shot",
    94: "Bone Club",
    95: "Bulldoze",
    96: "Mud Bomb",
    97: "Fury Cutter",
    98: "Bug Bite",
    99: "Signal Beam",
    100: "X Scissor",
    101: "Flame Charge",
    102: "Flame Burst",
    103: "Fire Blast",
    104: "Brine",
    105: "Water Pulse",
    106: "Scald",
    107: "Hydro Pump",
    108: "Psychic",
    109: "Psystrike",
    110: "Ice Shard",
    111: "Icy Wind",
    112: "Frost Breath",
    113: "Absorb",
    114: "Giga Drain",
    115: "Fire Punch",
    116: "Solar Beam",
    117: "Leaf Blade",
    118: "Power Whip",
    119: "Splash",
    120: "Acid",
    121: "Air Cutter",
    122: "Hurricane",
    123: "Brick Break",
    124: "Cut",
    125: "Swift",
    126: "Horn Attack",
    127: "Stomp",
    128: "Headbutt",
    129: "Hyper Fang",
    130: "Slam",
    131: "Body Slam",
    132: "Rest",
    133: "Struggle",
    134: "Scald",
    135: "Hydro Pump",
    136: "Wrap Green",
    137: "Wrap Pink",
    200: "Fury Cutter",
    201: "Bug Bite",
    202: "Bite",
    203: "Sucker Punch",
    204: "Dragon Breath",
    205: "Thunder Shock",
    206: "Spark",
    207: "Low Kick",
    208: "Karate Chop",
    209: "Ember",
    210: "Wing Attack",
    211: "Peck",
    212: "Lick",
    213: "Shadow Claw",
    214: "Vine Whip",
    215: "Razor Leaf",
    216: "Mud Shot",
    217: "Ice Shard",
    218: "Frost Breath",
    219: "Quick Attack",
    220: "Scratch",
    221: "Tackle",
    222: "Pound",
    223: "Cut",
    224: "Poison Jab",
    225: "Acid",
    226: "Psycho Cut",
    227: "Rock Throw",
    228: "Metal Claw",
    229: "Bullet Punch",
    230: "Water Gun",
    231: "Splash",
    232: "Water Gun",
    233: "Mud Slap",
    234: "Zen Headbutt",
    235: "Confusion",
    236: "Poison Sting",
    237: "Bubble",
    238: "Feint Attack",
    239: "Steel Wing",
    240: "Fire Fang",
    241: "Rock Smash"
}

app.service('UserService', function() {

    this.get = function(id) {

        if (!id)
            return;

        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: 'https://pokemon.rhocode.com/api/getPokemon/' + id,
            success: function(data) {

                var dat = JSON.parse(JSON.stringify(data));


            },
            error: function(textStatus, errorThrown) {
                console.log("ERROR!")
            }

        });
    }
});


function generatePictureURL(number) {
    var num = number.toString();
    if (num.length == 1)
        num = "00" + num;
    else if (num.length == 2)
        num = "0" + num;
    return "https://tehalexf.github.io/img_host/imgs/" + num + ".png"
}


app.controller("userController", function($scope, $location, UserService) {




    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url: 'https://pokemon.rhocode.com/api/getPokemon/' + $location.search().id,
        success: function(data) {

            var dat = JSON.parse(JSON.stringify(data));

            $scope.username = dat.username;

      
              if(!(dat.username)) {
                  alert("Invalid Profile!")                 
               return
             }

            $scope.level = dat.level;


            var team = dat.team;
            $scope.profile = "no-team.png";
            if (team == 0) {
                $scope.profile = "no-team.png";
            } else if (team == 1) {
                $scope.profile = "mystic.png";
            } else if (team == 3) {
                $scope.profile = "instinct.png";
            } else if (team == 2) {
                $scope.profile = "valor.png";
            }
            $scope.caught = dat.pokedex_entries;
            console.log(dat.pokemon)
            dat.pokemon.forEach(function(entry) {

                var thisEntry = pokemonList[entry.id - 1];
                entry.name = thisEntry.name
                entry.type = thisEntry.type
                entry.id = generatePictureURL(entry.id)

                if (entry.favorite) {
                    entry.favorite = "";
                } else {
                    entry.favorite = "empty";
                }
                console.log(entry)
                if (entry.iv_atk == 15 && entry.iv_def == 15 && entry.iv_sta == 15) {
                    entry.foil = ";background-image: url('images/foil.png')"
                } else {
                    entry.foil = ""
                }
                entry.move_1 = moveList[entry.move_1]
                entry.move_2 = moveList[entry.move_2]
                var leftSide = ((entry.cpMultiplier + entry.additionalCPMultiplier) / 0.095)
                entry.percentage = Math.round(Math.min((leftSide * leftSide), dat.level) / dat.level * 100)


            });

            $scope.pokemons = dat.pokemon;

            $scope.$apply()
        },
        error: function(textStatus, errorThrown) {
            console.log("ERROR!")
        }

    });

    // UserService.get(, function() {

    //        
    // });

});


app.controller("pokemonController", function($scope, UserService) {
    $scope.username = "RyukLikesApples";
    $scope.level = "31";


    var team = 1;
    $scope.profile = "no-team.png";
    if (team == 0) {
        $scope.profile = "no-team.png";
    } else if (team == 1) {
        $scope.profile = "mystic.png";
    } else if (team == 2) {
        $scope.profile = "instinct.png";
    } else if (team == 3) {
        $scope.profile = "valor.png";
    }

    $scope.caught = "30";
});