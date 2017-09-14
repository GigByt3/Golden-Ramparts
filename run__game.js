{
	function getRoom(key) {
		return gamedata.rooms.find(function(room) {
			return room.key == key; 
		});
	}
	
	function getItem(name) {
		var item = name
		return gamedata.items.find(function(item) {
			for (var i = item.name.length - 1; i >= 0; i--) {
				if(item.name[i] == name) {
					return item.name[i] == name
				}
			};
		});
	}

	function getNpc(name) {
		var thing = name
		return gamedata.npcs.find(function(thing) {
			for (var i = thing.name.length - 1; i >= 0; i--) {
				if(thing.name[i]== name) {
					return thing.name[i] == name
				}
			};
		});
	}

	function getInventory(item) {
		if(player.inventory.indexOf(item) != -1){
			return player.inventory.indexOf(item);
		}
	}
}	
	
	
	var player = {inventory: ["apple", "apple", "apple", "apple", "apple", "book", "knife", "clothes"], hunger: 20, health: 21, location: "", equiped_weapon: "knife", equiped_armor: "clothes"}
	player.location = "courtyard"
	document.getElementById('bonSante').value = "Health: " + player.health
	
	var attackedWords = ""
	var attacker = ""
	var runWords = ""
	var stop = false
	function FailtoBlock() {
		return getHurt()
	}
	function getHurt() {
		if(attacker != "") {
			var Amount_hurt = (getNpc(attacker).damage - getItem(player.equiped_armor).protection)
			if(Amount_hurt < 0) Amount_hurt = 1
			player.health -= Amount_hurt
			attackedWords = ""
			return true
		} else {
			return false
		}
	}


	player.walk = function(respo) {
		player.hunger--
		if(contains_for_walk(getRoom(player.location).exits, respo)) {
			player.location = getRoom(player.location).exits[respo]
			return "you walk into the " + getRoom(player.location).name + "."
		} else {
			return "Good job..." + "<br>" + "<br>" + " you walked into a wall."
		}
	};
/*	player.run = function(respo) {
		runWords = ""
		player.hunger -= 5	
		for(i = 2; i !== 0; i--) {
			if(contains_for_walk(getRoom(player.location).exits, respo)) {
				player.location = getRoom(player.location).exits[respo]
				runWords += "you run into the " + getRoom(player.location).name + "."
			} else {
				runWords += "Good job..." + "<br>" + "<br>" + " you ran into a wall."
				player.health--
			}
			runWords += "<br>"
			response = "Blocked"
			attacker = ""
		}
		return runWords
	};*/
	player.hit = function(respo) {
		player.hunger -= 3
		if(typeof(getNpc(respo)) == "object" && hit_check(respo) && hit_check2(respo)) {
			getNpc(respo).health -= getItem(player.equiped_weapon).damage
			if(getNpc(respo).health <= 0) {
				getRoom(player.location).npcs.splice(getRoom(player.location).npcs.indexOf(getNpc(respo)), 1)
				for (var i = getNpc(respo).loot.length - 1; i >= 0; i--) {
					console.log(getNpc(respo).loot[i])
					console.log(typeof(getNpc(respo).loot[i]))
					getRoom(player.location).items.push(getNpc(respo).loot[i])
					getItem(getNpc(respo).loot[i].item_key).room.push(player.location)
					console.log(getRoom(player.location).items)
				};	
			}
			a = getNpc(respo).health
			b = Math.round(Math.random()*(1 - a)+a)
			if(b <= 15 && a > 0) {
				attackedWords = " Angered they attack you in turn."
			} else if(b > 15) {
				attackedWords = "They are indifrent to your attack"
				attacker = ""
			} if(a <= 0) {
				attackedWords = " Your blow is fatal, and they fall to the ground, quite dead."
				attacker = ""
			}
			return "you hit " + respo + " with your " + player.equiped_weapon + "." + attackedWords
		} else {
			return "sorry there is not a " + respo + " here for you to strike."
		}
	};
	
		function hit_check (respo) {
			for (var i = getRoom(player.location).npcs.length - 1; i >= 0; i--) {
				if(getNpc(respo).npc_key == getRoom(player.location).npcs[i].npc_key) {
					return true
				}
			} 
			return false
		}
		function hit_check2 (respo) {
			for (var i = getNpc(respo).name.length - 1; i >= 0; i--) {
				for (var i = getRoom(player.location).npcs.length - 1; i >= 0; i--) {
					if(getRoom(player.location).npcs[i].npc_key == getNpc(respo).npc_key) {
						return true
					}
				};
			};
			return false
		}
	player.take = function(respo) {
		player.hunger--
		if(typeof(getItem(respo)) == "object" && take_check(respo)) {
			player.inventory.push(getItem(respo).name[0])
			var current_room = getRoom(player.location)
			var idx_filter_one = current_room.items.find(function(item) {return item.item_key == respo});
			var idx = current_room.items.indexOf(idx_filter_one)
			getRoom(player.location).items.splice(idx, 1)
			var idx_filter_one = getItem(respo).room.find(function(room) {return room == player.location});
			var idx = getItem(respo).room.indexOf(idx_filter_one)
			getItem(respo).room.splice(idx, 1)
			return "you pick up the " + respo + "."
		} else {
			return "sorry there is not a " + respo + " here for you to pick up."
		}
	};

	function take_check (respo) {
		for (var itemInRoom = getRoom(player.location).items.length - 1; itemInRoom > -1; itemInRoom--) {
			for(var whichRoom = getItem(respo).room.length - 1; whichRoom > -1; whichRoom--) {
				if(getItem(respo).room[whichRoom] == player.location && getRoom(player.location).items[itemInRoom].item_key == getItem(respo).item_key) {
					return true;
				};
			};
		};
		return false;	
	};
	player.drop = function(respo) {
		player.hunger--
		var place = getInventory(respo)
		if(place != null) {
			getRoom(player.location).items.push({"item_key": getItem(respo).item_key, "look_suffix": "there is a " + respo + " here. "})
			getItem(respo).room.push(getRoom(player.location).key)
			if(player.equiped_weapon == respo) player.equiped_weapon = player.inventory[0]
			if(player.equiped_armor == respo) player.equiped_armor = "clothes"
			player.inventory.splice(place, 1)
			return "you drop the " + respo + "."
		} else {
			return "you don't have a " + respo + " to drop."
		}
	}
	player.read = function(respo) {
		player.hunger += 0.25
		if(check_inventory(respo) && getItem(respo).special == "can be read") {
			return getItem(respo).writing
		} else {
			return "Can't, sorry."
		}
	};
	player.i = function() {
		return player.inventory.join(", <br>") + "<br> your " + player.equiped_weapon + " is in your hand. <br> you are wearing " + player.equiped_armor + "."
	};
	player.look = function() {
		var room = getRoom(player.location)
		var extras = ""
		for (var i = room.items.length - 1; i >= 0; i--) {
			extras += room.items[i].look_suffix
		};		
		for (var i = room.npcs.length - 1; i >= 0; i--) {
			extras += room.npcs[i].look_suffix
		};
		return room.description + extras
	}; 


	player.equip = function(respo) {
		player.hunger--
		if(check_inventory(getItem(respo).name[0])){
			var ability = getItem(respo).special
			if(ability == "weapon") {
				player.equiped_weapon = respo
				return "you pull out your " + respo
			} else if(ability == "armor") {
				player.equiped_armor = respo
				return "you put on your " + respo
			} else {
					return "you want to fight with an " + respo + "? <br> how do you think that would work out?"
			}
		} else {
			return "you dont have a " + respo
		}
	};
	player.help = function() {
		return "hit[npc] <br> take[item] <br> drop[item] <br> i(gives inventory) <br> look(gives area description) <br> walk[north, east, west, south] <br> read(read a book. its good for you) <br> equip[item] <br> block(if attacked) <br> eat[food] <br> help"
	}
	player.block = function() {
		player.hunger -= 2
		var a = 0
		var b = player.hunger
		if(Math.random()*(b - a)+a  >= 7) {
			attackedWords = "Blocked"
			attacker = ""
			return "You sucsesfuly block their attack! <br> They fall back and wait for your next attack!"
		} else {
			return "You are simply to fatigued to make a reliable block! Their strike gets through your gaurd and causes you harm."
		}
	}
	player.eat = function(respo) {
		if(check_inventory(respo)) {
			for (var c = player.inventory.length - 1; c >= 0; c--) {
				if(player.inventory[c] == respo) {
					if(getItem(respo).special == "food") {
						player.inventory.splice(c, 1)
						player.hunger += getItem(respo).food
						if(getItem(respo).food > 5) {
							var satisfaction = "great"
						} else {
							var satisfaction = "good"
						}
						return "You eat your " + respo + ". It tasted " + satisfaction + "."
					} else {
						player.inventory.splice(c, 1)
						player.health -= getItem(respo).damage + 1 * 4
						return "You eat your " + respo + ". That might not have been a very good idea."
					}
				}
			};
		} else {
			return "you do not have a " + respo + " to eat."
		}
	}


var script = ""

function check_inventory (item) {
	for (var c = player.inventory.length - 1; c >= 0; c--) {
		if(player.inventory[c] == item) return true
	};
	return false
}

function say_what(words, comand) {
	say_things("> " + comand);
	say_things(words);
}


function say_things(words) {
	script = document.getElementById("paragraphs").innerHTML;
	newline = "<br>" + words
	script = script + newline;
	document.getElementById("paragraphs").innerHTML = script;
}


function contains_for_walk(array, item) {
	for(i = array.indecy.length; i >= 0; i--) {
		if(array.indecy[i] == item) {
			return true
		}
	}
	return false

}

function vital_signs() {
	if(player.health < 0) {
		deathFun = ["You are dead. Get over it.", "You're dead and should be concentrating on developing a good firm rigor mortis.", "For a dead person you are talking too much.", "You keep out of this, you're dead."]
		say_things(deathFun[Math.round(Math.random()*3)])
		return false
	} else if(player.hunger <= 0) {
		player.health += player.hunger
		say_things("you are starving.")
	} else if(player.hunger <= 10) {
		say_things("you are hungry.")
	} else if(player.hunger >= 30) {
		player.hunger = 30
	}
	return true
}

function result(response) {
	responses = response.split(" ")
	verb = responses[0]
	rest = responses
	rest.splice(0, 1)      
	if(typeof(player[verb]) == "function") {
		rest = rest.join(" ")
		return player[verb](rest)
	} else {
		return "you cant do that"
	}
}
function first_spcace (respo) {
	respo = respo.split("")
	delete respo[0]
	respo = respo.join("")
	return respo
}

document.getElementById("respo").addEventListener("keypress", listener);

function html_cleanUp(input) {
    window.scrollTo(0, 100134058934549688395783457823578258399);
    var sante = document.getElementById('bonSante')
    sante.innerHTML = "Health: " + player.health + "  Vitality: " + player.hunger
    if(attackedWords != "Blocked") {
    	for (var i = getRoom(player.location).npcs.length - 1; i >= 0; i--) {
    		if(getNpc(getRoom(player.location).npcs[i].npc_key).mood == "malevolent") {
    			say_things("The " + getNpc(getRoom(player.location).npcs[i].npc_key).name[0] + " attacks you.")
    			attacker = getNpc(getRoom(player.location).npcs[i].npc_key).name[0]
    			attackedWords = "Attacking"
    		}
    	}
	}
	input.value = ""
}

function listener(event) {
	var code = event.code;
	if(event.code != "Enter" && code != "Space" && stop) {
		var verbs = ["hit", "take", "drop", "i", "look", "walk", "read", "equip", "block", "eat", "help"]
		var possibleVerbs = []
		var check = 0
		var responseArray = document.getElementById('respo')
		for (var y = verbs.length - 1; y >= 0; y--) {
			check = 0
			for (var x = responseArray.value.length - 1; x >= 0; x--) {
				if(verbs[y].charAt(x) == responseArray.value.charAt(x)) {
					check++
				}
			}
			if(check == responseArray.value.length) {
				possibleVerbs.push(verbs[y])
			}
		}
	} else if(code == "Space") {
		stop = true
	}
	if(event.code == "Enter" && vital_signs()) {
		stop = false
		responseArray = document.getElementById('respo')
		var response = responseArray.value.toLowerCase()
		say_what(result(response), response)
		if (FailtoBlock() == true) {
			say_things("You failed to block and got hurt.")
		}
		attacker = ""
		html_cleanUp(responseArray)	
		if(attackedWords == " Angered they attack you in turn.") {
			attacker = respo
		}
	}
}

/*
When data hunting

	var current_room = getRoom(player.location)
	var idx = current_room.items.find(function(item) {return item.item_key == respo} );

*/
