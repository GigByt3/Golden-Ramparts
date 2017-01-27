function prompter() {
  var newItemtype = prompt("Item, Npc, or Room", "Please copy from above")
  if(newItemtype == "Item") {
    prompt("you are making an item", "Item_key[to be called as(no spaces)]*[Name(array of possible names)]*Damage[number]*Weight[number]*Special[weapon, armor, can be read etc]*Room[name]")
  } else if(newItemtype == "Npc") {
    prompt("you are making a non-player charecter", "")
  } else {
    prompt("you are making a room", "")
  }
}
/*
///// This is a room
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
		}
////// This is a npc
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
		}
////// This is an Item
{
			"item_key": "wood_axe",
			"name": ["wood axe", "axe", "hachet", "wood_axe"],
			"damage": 10,
			"weight": 5,
			"special": "weapon",
			"room": ["courtyard"]
		}
