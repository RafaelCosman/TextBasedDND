class Die
	constructor: (@numberOfDice, @numberOfSides, @constant) ->

	roll: ->
		sum = @constant
		for i in [1..@numberOfDice]
			sum += Math.random() * @numberOfSides

		return Math.floor(Math.max(sum, 0))

	toString: ->
		@numberOfDice + "d" + @numberOfSides + "+" + @constant

class Weapon
	constructor: (@die, @name, @price) ->

	roll: ->
		@die.roll()

	toString: ->
		@name.toString() + ": " + @die.toString() + " (" + @price.toString() + "gp)"

class Monster
	constructor: (name, @hp, @weapon, @gp, @xp) ->
		@name = randomAdjective() + " " + name

	roll: ->
		@weapon.roll()

	hit: (damage) ->
		@hp -= damage

	isDead: ->
		@hp <= 0

	toString: ->
		@name
