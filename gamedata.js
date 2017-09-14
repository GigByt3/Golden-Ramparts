var gamedata = {
	"rooms": [
		{
			"key": "entrance_room",
			"name": "entrance room",
			"description": "You are in a smallish, yet well decorated entrance room, with a well cushioned chair, and a side table. ",
			"items": [
				{
					"item_key": "vase_of_flowers",
					"look_suffix": " On one of the side tables there resides a vase of flowers. "
				}
			],
			"npcs": [
				{
					"npc_key": "zombie",
					"look_suffix": " There is a zombie shuffling around here."
				}
			],
			"exits": {
				"south": "courtyard",
				"north": "entrance_hall", 
				"west": "bedroom", 
				"indecy": ["west", "north", "south"]
			}
		},
		{
			"key": "courtyard",
			"name": "courtyard",
			"description": "You are in the courtyard, there are walls to the west, east, and south, there is a door leading into a castle to the north. ",
			"items": [
				{
					"item_key": "shovel",
					"look_suffix": "There is a shovel here. "
				},
				{
					"item_key": "wood_axe",
					"look_suffix": " There is a wood axe here. "
				}
			],
			"npcs": [
				{
					"npc_key": "noble",
					"look_suffix": " A strident gentelman glides around the room. Nodding to you good nauturedly."
				}
			],
			"exits": {
				"north": "entrance_room",
				"indecy": ["north"]
			}
		},
		{
			"key": "entrance_hall",
			"name": "entrance hall",
			"description": "You are in a long narrow hallway with nice paneled walls a few small display tables and an armor stand. The hall ends to the north with no opening, yet you do notice a door of the the west, there is also of course, the door to the south, that leads to the entrance room. ",
			"items": [
				{
					"item_key": "decorative_armor",
					"look_suffix": " There is a set of decorative armor here."
				}
			],
			"npcs": [
				{
					"npc_key": "murdurer",
					"look_suffix": " A shadowy figure lurks in the shadows, an axe barely visible beneath the deep folds."
				}
			],
			"exits": {
				"south": "entrance_room",
				"west": "dining_room",
				"indecy": ["south", "west"]
			}
		},
		{
			"key": "dining_room",
			"name": "dining room",
			"description": "You are in a fancy dining room with a door to the east leading to the entrance hall. ",
			"items": [
				{
					"item_key": "vase_of_flowers",
					"look_suffix": " There is a vase of flowers on the table. "
				}
			],
			"npcs": [
				{
					"npc_key": "automoton",
					"look_suffix": " A giant metal mech walks around the room, steam hissing at its every move."
				}
			],
			"exits": {
				"east": "entrance_hall",
				"indecy": ["east"]
			}
		},
		{
			"key": "bedroom",
			"name": "bedroom",
			"description": " You are in a large bedroom fit for a king there is a king sized bed, a writing table, ana a bedside table. There is a door to the east that leads into the entrance room. ",
			"items": [
				{
					"item_key": "book",
					"look_suffix": " There is a book here"
				}
			],
			"npcs": [
				{
					"npc_key": "florist",
					"look_suffix": "A lady walks around the room with a vase of flowers in the crook of her arm. "
				}
			],
			"exits": {
				"east": "entrance_room",
				"indecy": ["east"]
			}
		}
	],

	"npcs": [
		{
			"npc_key": "zombie",
			"name": ["zombie", "gardener zombie"],
			"look_suffix": "There is a zombie shufling around the room who looks like he spent most of his life, and death, in a flower bed.",
			"damage": 3,
			"health": 3,
			"mood": "malevolent", // -1 means angry or worked up, +1 means complacent happy.
			"color": "black",
			"font": "Goudy Old Style",
			"loot": [
				{
				"item_key": "shovel",
				"look_suffix": "in the zombies cold now completely lifeless hand there is a shovel."
				}
			]
		},
		{
			"npc_key": "noble",
			"name": ["strident gentelman", "jhon goodman", "aristocrat", "noble", "john", "mr. goodman", "gentelman"],
			"look_suffix": "A strident gentelman glides around the room. Nodding to you good nauturedly.",
			"damage": 1.5,
			"health": 5,
			"mood": "calm", // -1 means angry or worked up, +1 means complacent happy.
			"color": "black",
			"font": "Goudy Old Style",
			"loot": [
				{
				"item_key": "book",
				"look_suffix": "under the now deceased aristocrats arm he carries an book."
				}
			]
		},
		{
			"npc_key": "automoton",
			"name": ["mech", "unit 531", "robot", "automoton"],
			"look_suffix": "A giant metal mech walks around the room, steam hissing at its every move. ",
			"damage": 10,
			"health": 30,
			"mood": "nutral", // -1 means angry or worked up, +1 means complacent happy.
			"color": "black",
			"font": "Goudy Old Style",
			"loot": [
				{
				"item_key": "decorative_armor",
				"look_suffix": "The now still automoton is encased in ornate decorative armor. "
				}
			]
		},
		{
			"npc_key": "murdurer",
			"name": ["shadowy figure", "jack little", "murdurer", "Jack", "the murdurer", "figure"],
			"look_suffix": "shadowy figure lurks in the shadows, an axe barely visible beneath the deep folds. ",
			"damage": 8,
			"health": 10,
			"mood": "malevolent", // -1 means angry or worked up, +1 means complacent happy.
			"color": "black",
			"font": "Goudy Old Style",
			"loot": [
				{
				"item_key": "wood_axe",
				"look_suffix": "The would be homocidal maniac lies on the floor, the axe that made him, on the floor at his side. "
				}
			]
		},
		{
			"npc_key": "florist",
			"name": ["the florist", "nancy harding", "nancy", "mrs. harding", "florist"],
			"look_suffix": "A lady walks around the room with a vase of flowers in the crook of her arm. ",
			"damage": 100000,
			"health": 100000,
			"mood": "calm", // -1 means angry or worked up, +1 means complacent happy.
			"color": "black",
			"font": "Goudy Old Style",
			"loot": [
				{
				"item_key": "vase_of_flowers",
				"looks_suffix": "The inocent florist, lies on the floor removed from her life to soon, the flowers still in her grasp. "
				}
			]
		}
	],

	"items": [
		{
			"item_key": "shovel",
			"name": ["shovel", "spade"],
			"damage": 5,
			"weight": 5,
			"special": "weapon",
			"room": ["courtyard"]
		},
		{
			"item_key": "wood_axe",
			"name": ["wood axe", "axe", "hachet", "wood_axe"],
			"damage": 10,
			"weight": 5,
			"special": "weapon",
			"room": ["courtyard"]
		},
		{
			"item_key": "book",
			"name": ["book", "novel"],
			"weight": 1,
			"writing": "A book, by Finlay Norton-Lindsay. \n For the purpouses of this demo game this is a book that can be read. I would like to personaly \n congradulate you on reading this book, I must say, it is an impresive acomplishment. You found my existance in \n your inventory, read the help text on reading, put two and two together, and then you typed a whole nine charecters \n into this computor and it gave you me, your everyday book. In fact, as a vote of confidence, \n and a token of my gratitude for reading me I have gived you +0.0025 vitality 100 times!",
			"special": "can be read",
			"room": ["bedroom"]
		},
		{
			"item_key": "vase_of_flowers",
			"name": ["vase of flowers", "vase", "flowers", "plant", "vase_of_flowers"],
			"damage": 6,
			"weight": 3,
			"special": "weapon",
			"room": [
				"dining_room",
				"entrance_room"
			]
		},
		{
			"item_key": "decorative_armor",
			"name": ["decorative armor", "armor", "set of decorative armor", "Inistrad", "decorative_armor"],
			"damage": 0,
			"weight": 10,
			"protection": 8,
			"special": "armor",
			"room": ["entrance_hall"]
		},
		{
			"item_key": "clothes",
			"name": ["clothes", "armor", "garments"],
			"damage": 0,
			"weight": 2,
			"protection": 1,
			"special": "armor",
			"room": []
		},
		{
			"item_key": "apple",
			"name": ["apple", "fruit", "pome de terre"],
			"damage": 0,
			"weight": .5,
			"food": 5,
			"special": "food",
			"room": []
		},
		{
			"item_key": "knife",
			"name": ["knife", "blade"],
			"damage": 3,
			"weight": .5,
			"special": "weapon",
			"room": []
		}/*,
	/*	{
			room: "",
			name: "antique sword",
			damage: 6
		},
		{
			room: "",
			name: "heirloom broadsword",
			damage: 9
		},
		{
			room: "courtyard",
			name: "shovel",
			damage: 4
		},
		{
			room: "",
			name: "metal teapot",
			damage: 3,
			is_legendary: true
		},
		{
			room: "",
			name: "sharpened axe",
			damage: 7
		},
		{
			room: "",
			name: "butter knife",
			damage: 2
		},
		{
			room: "",
			name: "crimson knife",
			damage: 10,
			cursed: true
		}*/
	]
};
/*var theMap = {
	courtyard: {
		exits: {north: "entrance_room", indecy: ["north"]},
		name: "courtyard",
		description: {Basic: " ", Items: {shovel: "There is a shovel here. ", wood_axe: "there is a wood axe here. "}, Enemys: {none: "you are alone here. "}}
	},
	entrance_room: {
		exits: {south: "courtyard", north: "entrance_hall", west: "bedroom", indecy: ["west", "north", "south"]},
		name: "entrance room",
		description: {Basic: "", Items: "", Enemys: ""}
	},
	entrance_hall: {
		exits: {south: "entrance_room", west: "dining_room", indecy: ["south", "west"]},
		name: "entrance hall",
		description: {Basic: "", Items: "", Enemys: ""}
	},
	bedroom: {
		exits: {east: "entrance_room", indecy: ["east"]},
		name: "bedroom",
		description: {Basic: "", Items: "", Enemys: ""}
	},
	dining_room: {
		exits: {east: "entrance_hall", indecy: ["east"]},
		name: "dining room",
		description: {Basic: "", Items: "", Enemys: ""}
	}
}

item_directory = {
	//books
	green_book: {
		room: "",
		name: "green book",
		is_book: true
	},
	red_book: {
		room: "",
		name: "red book",
		is_book: true
	},
	blue_book: {
		room: "",
		name: "blue book",
		is_book: true
	},
	purple_book: {
		room: "",
		name: "purple book",
		is_book: true
	},
	orange_book: {
		room: "",
		name: "orange book",
		is_book: true
	},
	yellow_book: {
		room: "",
		name: "yellow book",
		is_book: true
	},
	black_book: {
		room: "",
		name: "black book",
		is_book: true
	},
	gold_book: {
		room: "",
		name: "gold book",
		is_book: true
	},
	
		Weapons

	swords: 5 - 10
	axes: 3 - 7
	misc(shovel, iorn ketel, metal teapot): 1 - 5
	knives: 2 - 8
	 
	antique_sword: {
		room: "",
		name: "antique sword",
		damage: 6
	},
	heirloom_broadsword: {
		room: "",
		name: "heirloom broadsword",
		damage: 9
	},
	shovel: {
		room: "courtyard",
		name: "shovel",
		damage: 4
	},
	metal_teapot: {
		room: "",
		name: "metal teapot",
		damage: 3,
		is_legendary: true
	},
	wood_axe: {
		room: "courtyard",
		name: "wood axe",
		damage: 5
	},
	sharpened_axe: {
		room: "",
		name: "sharpened axe",
		damage: 7
	},
	butter_knife: {
		room: "",
		name: "butter knife",
		damage: 2
	},
	crimson_knife: {
		room: "",
		name: "crimson knife",
		damage: 10,
		cursed: true
	},
	// armor 
	fancy_clothes: {
		room: "",
		name: "fancy clothes",
		protection: 1
	},
	decorative_armor: {
		room: "entrance hall",
		name: "decorative armor",
		protection: 3
	},
	burnished_fullplate: {
		room: "",
		name: "burnished fullplate",
		protection: 5
	},
	//food
	apple: {
		room: {},
		name: "apple",
		food: 5
	},
	pie: {
		room: "dining room",
		name: "pie",
		food: 12
	},
	bread: {
		room: "bedroom",
		name: "bread",
		food: 7
	}
	//misc
}









*/



