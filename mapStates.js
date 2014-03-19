// Generated by CoffeeScript 1.6.3
(function(){var e;e=function(){var e;if(this.state==="forest"){println("The forest is dark and spooky");if(!visited(this.state)){println("You find a frog who blesses you (+5 hp)");this.hp+=5}else prob(.5)&&"You see a spider scuttling away from you.";button("upTree","Climb a tree");return showMap()}if(this.state==="upTree"){if(!visited("upTree")){println("You see an old monkey at the top of the tree");println("Murundy: Welcome to the land of the Monkeys, young one.");println("Murundy: My name is Murundy, and I am a sage among the Monkeys here.")}else println("You and Murundy are in the top of the tree, in the middle of the Monkey's forest.");button("askAboutForests","What can you tell me about these forests?");return button("forest","Climb down the tree")}if(this.state==="askAboutForests"){println("Murundy: The forests have been the land of the Monkeys for over a century.  But this last year the Spiders have moved in, driven by some unnatural force.");button("showSpiderForest","Would you take me to where the spiders are?");return button("forest","Climb down the tree")}if(this.state==="showSpiderForest"){println("Murundy: Certainly. But be prepared for what you are about to see.");println("Murundy: I'll take you on a path through the trees. Follow me.");button("spiderForestUpTree","Follow Murundy");return button("forest","Climb down the tree")}if(this.state==="spiderForestUpTree"){println("You find yourself in a darker part of the forest, and vast sticky cobwebs are strung hanging between the trees.");println("Murundy: See the egg-sacks between the root of the trees? These spiders are reproducing out of control. We don't know why.");button("upTree","I've seen enough. Please take me back.");return button("Spider Forest","Climb down the tree")}if(this.state==="Spider Forest"){println("The trees are tangled with cobwebs and the roots have egg-sacks strung between their roots.");if(prob(.5)){println("A spider clambers down from the trees and lunges at you.");this.enemies=[spider()];button("fightYourTurn","Engage him");return this.returnToState=this.state}println("you get tangled in a cobweb (-2 hp)");this.hp-=2;button("eggSacks","Investigate egg-sacks");return showMap()}if(this.state==="eggSacks"){println("You see larvae swarming inside of translucent pouches.");button("breakEggSacks","Break egg-sack");return button("Spider Forest","Done inestigating egg-sacks")}if(this.state==="breakEggSacks"){println("A baby spider crawls on to your hand and tries to bite you with its mandibles.");this.enemies=[babySpider()];this.returnToState=this.state;return button("fightYourTurn","Fight the Baby Spider")}if(this.state==="swamp"){println("The swamps glurp and gurgle at you");if(prob(.5)){println("A goblin rises out of the black deep");this.enemies=[goblin()];button("fightYourTurn","Engage him");return this.returnToState=this.state}println("Your boots get mucky");return showMap()}if(this.state==="deeper swamp"){println("the swamp is almost unbearebly thick. it has a strange stench. smells like orc.");if(prob(.5)){println("a corrupted orc rises from the muck");this.enemies=[corruptedOrc()];button("fightYourTurn","Engage him");return this.returnToState=this.state}println("your boots are now VERY mucky, I'd suggest cleaning them.");return showMap()}if(this.state==="desert"){println("The desert is hot and dry. It continues for great lengths to the south, but yields to foothills to the north. There are serious-looking cacti.");if(prob(.25)){println("You accidentally got a spine in you. (-3 hp)");this.hp-=3}return showMap()}if(this.state==="wasteland"){println("The wasteland is the result of a Scilos experiment gone wrong. It's a parched and lifeless desert as far as the eye can see. You are miserably thirsty.");if(prob(.5)){println("A cactus starts to move towards you.");this.enemies=[animatedCactus()];button("fightYourTurn","Engage the Animated Cactus");return this.returnToState=this.state}return showMap()}if(this.state==="Beara Mountains"){println("The air is thin and hard to breathe, and you see vast crevasses stretching below you.");if(prob(.5)){println("Suddenly, a dwarf beserker charges at you from a cliff above.");this.enemies=[dwarfBeserker()];button("fightYourTurn","Engage the Beserker");return this.returnToState=this.state}return showMap()}if(this.state==="foothills"){println("The ground is rough and treacherous, and the going is hard but you eventually make it to a good campground.");if(prob(.5)){println("While you are sleeping a savage horseman attacks you!");this.enemies=[horseMan()];button("fightYourTurn","Engage the Horseman");return this.returnToState=this.state}return showMap()}if(this.state==="Lake Mysterious"){println("The lake goes out as far as the eye can see its absolutely enormous.");println("there is a slight disturbance in the water... you wonder what it is...");if(prob(.5)){println("suddenly an enourmous octopus arises from the water.");this.enemies=[riverMonster()];button("fightYourTurn","Engage the Octopus");return this.returnToState=this.state}return showMap()}if(this.state==="Zealon Dungeon"){println("You see cut into the side of a hill the Zealon emblem, a skull inside of a circle made of snakes. Entranced, you walk closer and see that the gaping mouth of the skull leads to a room underground. It's darkeness is impenetrable.");button("enteranceRoom","Enter the Zealon Dungeon");return showMap()}if(this.state==="enteranceRoom"){println("You find yourself in a small room with walls that are coated in dried blood. The walls seem to press in on you. Your compass goes haywire. Your internal instincts are screaming at you to turn back.");button("entrance corridor","Go further in to the Dungeon");return button("Zealon Dungeon","Exit Dungeon")}if(this.state==="entrance corridor"){println("You walk in to a long narrow corridor. It has strange symbols and markings on the ground. It seems to be a kind of warning");if(!visited(this.state)){if(prob(.5)){println("A zombie raises itself out of the dirt.");this.enemies=[zombie()];button("fightYourTurn","Engage the Zombie");return this.returnToState=this.state}println("A spike-trap beneath your feet shoots up and stabs you. You lose 10 hp.");this.hp-=10;button("junctionRoom","Head deeper into the darkness");return button("enteranceRoom","Head back towards the light")}button("junctionRoom","Head deeper into the darkness");return button("enteranceRoom","Head back towards the light")}if(this.state==="junctionRoom"){println("You are in a large room with three corridors leading out of it.");e=Math.ceil(Math.random()*3);println("An ill odor fills the room and your lungs. You lose "+e+" hp.");this.hp-=e;if(!visited(this.state)){println("A giant Zombie raises itself out of the filthy ground. It reaches its long fingers towards you.");this.enemies=[largeZombie()];button("fightYourTurn","Engage the Zombie");return this.returnToState=this.state}button("leftCorridor","Enter the corridor on the left");button("rightCorridor","Enter the corridor on the right");return button("entrance corridor","Go back towards the enterance")}if(this.state==="leftCorridor"){println("Deeper into the dungeon, you see an open room. A huge, engraved chest sits at the back of the room.");button("junctionRoom","Go towards the enterance");return button("leftRoom","Go deeper")}if(this.state==="leftRoom"){if(!visited(this.state)){println("As you enter the room, the door slams behind you and a towering orc smiles a sister grin at you.");button("leftRoom fight","Attack him");return button("leftRoom talk","Go up to him")}}else{if(this.state==="leftRoom fight"){println("You meet the battle with gusto.");this.enemies=[corruptedOrc()];setState("fightYourTurn");return this.returnToState="leftRoom"}if(this.state==="leftRoom talk"){println("You walk up to the orc");return button("hello","Hello")}if(this.state==="hello"){println("Hello my name is Chenk.");return button("whatGoingOn","What's going on with this dungeon?")}if(this.state==="whatGoingOn"){println("Chenk: This is a dungeon created by the Zealon for their sinis†er rites.");return button("whyareyouhere","Why are you here? And why havent you attacked me?")}if(this.state==="whyareyouhere"){println("I am here because the Zealon experimented their corruption magic on me but it backfired. Orcs arent all bad you know its just that the Zealon corrupted many of my kind. I cant leave the dungeon because of some strange magic.");return button("more","Wow the Zealon are really bad!")}if(this.state==="more"){println("Chenk: The Zealon are bad but its debatable if they are the worst. The Ajurites are also pretty bad. They are good but over-zealous. They will kill hundreds of people just because one person did something bad. Then there are the Scilos. They are a group of mad scientists who are ruthless in the name of science. They do all kinds of experiments on people and animals.");return button("leftRoom","Wow. Thank you.")}if(this.state==="rightRoom"){println("");return button("junctionRoom","Go towards the enterance")}if(this.state==="Plain of Ashard"){println("A paladin in blazing white armor rides up and greets you as you enter onto the plain. You see the Ajurite symbol of a rising sun on his chestplate.");if(visited("attackThePaladin"))println("Ajurite Paladin: You are not welcome here. Leave at once.");else{println("Ajurite Paladin: The plain of Ashard is the land of the holy Ajurites. All travellers, including yourself, are granted free-passage through this land, providing you strictly adhere to Ajurite law.");println("Ajurite Paladin: If you have come to the Plain of Ashard to prove your mettle, I'll escourt you to the arena.");button("arena","Please take me to the arena.")}button("attackTheKnight","Attack the Ajurite Paladin");return showMap()}if(this.state==="attackTheKnight"){println("Ajurite Paladin: You raise your weapon against me? The Ajurites will not forgive you till your bones are ashes and those ashes are whiped from the face of the earth. Not a trace of you will remain after I am through with you. (he spits)");this.enemies=[paladin()];this.returnToState="Plain of Ashard";return setState("fightYourTurn")}if(this.state==="arena"){println("The arena is a palacial, white circular stadium which you hear and smell long before your enter. The stench of human bodies pressed close together and the constant roar of the croud.");println("Your in the lobby of the arena.");visited("arenaFight")?println("Ajurite Lord: Ah. Welcome back. Will you do battle again?"):println("Ajurite Lord: (loudly) Let the next fight begin.");button("Plain of Ashard","Leave the Arena");return button("arenaFight","Challenge an opponent")}if(this.state==="arenaFight"){println("Ajurite Lord: So you'd like to try your strength in the pit? Whom would you like to challenge?");button("arenaCorruptedOrc","Fight a Corrupted Orc");return button("arenaZombie","Fight a Zombie")}if(this.state==="arenaCorruptedOrc"){println("You walk out in the center of the dirt field and the croud goes silent. A grate is raised on the opposite side of the field, and a hulking orc emerges.");this.enemies=[corruptedOrc()];setState("fightYourTurn");return this.returnToState="arena"}if(this.state==="arenaZombie"){println("You walk out in the center of the dirt field and the croud goes silent. A grate is raised on the opposite side of the field, and a sickening zombie emerges.");this.enemies=[zombie()];setState("fightYourTurn");return this.returnToState="arena"}}}}).call(this);