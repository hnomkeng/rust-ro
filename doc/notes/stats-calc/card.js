var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
	let window = _____WB$wombat$assign$function_____("window");
	let self = _____WB$wombat$assign$function_____("self");
	let document = _____WB$wombat$assign$function_____("document");
	let location = _____WB$wombat$assign$function_____("location");
	let top = _____WB$wombat$assign$function_____("top");
	let parent = _____WB$wombat$assign$function_____("parent");
	let frames = _____WB$wombat$assign$function_____("frames");
	let opener = _____WB$wombat$assign$function_____("opener");


	cardOBJ = [
		[0,0,"(No Card)",0,0],
		[1,1,"All Race + 20%",0,30,20,31,20,32,20,33,20,34,20,35,20,36,20,37,20,38,20,39,20,0],
		[2,1,"All Element + 20%",0,40,20,41,20,42,20,43,20,44,20,45,20,46,20,47,20,48,20,49,20,0],
		[3,1,"All Size15%,Atk+5",0,17,5,27,15,28,15,29,15,0],
		[4,1,"Fabre",0,3,1,13,100,0],
		[5,1,"Drops",0,5,1,8,3,0],
		[6,1,"Hornet",0,1,1,17,3,0],
		[7,1,"Lunatic",0,6,1,10,1,11,1,0],
		[8,1,"Female Thief Bug",0,2,1,9,1,0],
		[9,1,"Skeleton",0,17,10,131,2,0],
		[10,1,"Wolf",0,17,15,10,1,0],
		[11,1,"Andre",0,17,20,0],
		[12,1,"Pecopeco Egg",0,30,20,0],
		[13,1,"Hydra",0,37,20,0],
		[14,1,"Goblin",0,32,20,0],
		[15,1,"Caramel",0,34,20,0],
		[16,1,"Scorpion",0,33,20,0],
		[17,1,"Flora",0,35,20,0],
		[18,1,"Strauf",0,36,20,0],
		[19,1,"Petite",0,39,20,0],
		[20,1,"Deviace",0,37,7,32,7,33,7,34,7,0],
		[21,1,"Drainlair",0,41,20,0],
		[22,1,"Santa Poring",0,47,20,0],
		[23,1,"Mandragora",0,44,20,0],
		[24,1,"Vadon",0,43,20,0],
		[25,1,"Anacondaq",0,45,20,0],
		[26,1,"Kaho",0,42,20,0],
		[27,1,"Orc Skeleton",0,46,20,0],
		[28,1,"Desert Wolf",0,27,15,17,5,0],
		[29,1,"Skel Worker",0,28,15,17,5,0],
		[30,1,"Minorous",0,29,15,17,5,0],
		[31,1,"Abysmal Knight",0,26,25,0],
		[32,1,"Drake","Reduces the size modifier of your weapon (Certain weapon types have reduced attack power against certain sizes of monsters).",0],
		[33,1,"Plankton",0,17,5,135,5,0],
		[34,1,"Boa",0,17,5,130,5,0],
		[35,1,"Marina",0,17,5,132,5,0],
		[36,1,"Metaller",0,17,5,136,5,0],
		[37,1,"Magnolia",0,17,5,133,5,0],
		[38,1,"Zenorc",0,17,10,130,4,0],
		[39,1,"Golem","Weapon cannot be broken.",17,5,0],
		[40,1,"Mummy",0,8,20,0],
		[41,1,"Soldier Skeleton",0,10,9,0],
		[42,1,"Doppelganger",0,12,10,0],
		[43,1,"Sidewinder","Enables usage of [Double Attack] Lv 1 (usable with all weapons).  If you know a level of [Double Attack] higher than level 1, you will use that level instead.",0],
		[44,1,"Phreeoni",0,8,100,0],
		[45,1,"Baphomet","All regular attacks splash damage 9 cells adjacent to the target.",8,-10,0],
		[46,1,"Hunter Fly","Enables a 3% chance of gaining 15% of the damage inflicted on an enemy as HP with each attack.<BR>(This bonus is not calculated)",0],
		[47,1,"Dracula","Enables a 10% chance to gain 5% of the damage inflicted on an enemy as SP with each attack.<BR>(This bonus is not calculated)",0],
		[48,2,"Willow",0,14,80,0],
		[49,2,"Elder Willow",0,4,2,0],
		[50,2,"Nightmare",0,2,1,155,100,0],
		[51,2,"Deviruchi",0,1,1,154,100,0],
		[52,2,"Orc Hero",0,3,3,151,100,0],
		[53,3,"Thief Bug Egg",0,13,400,0],
		[54,3,"Andre Egg",0,15,5,0],
		[55,3,"Ambernite",0,18,2,0],
		[56,3,"Thara Frog",0,57,30,0],
		[57,3,"Orc Warrior",0,52,30,0],
		[58,3,"Bigfoot",0,54,30,0],
		[59,3,"Rafflesia",0,55,30,0],
		[60,3,"Petite",0,59,30,0],
		[61,3,"Khalitzburg",0,56,30,0],
		[62,3,"Horn",0,78,35,0],
		[63,3,"Medusa",0,56,15,159,100,0],
		[64,4,"Poring",0,6,2,11,1,0],
		[65,4,"Picky",0,1,1,17,10,0],
		[66,4,"Super Picky",0,3,1,13,100,0],
		[67,4,"Thief Bug",0,2,1,0],
		[68,4,"Rocker",0,5,1,17,5,0],
		[69,4,"Baby Desert Wolf",0,4,1,0],
		[70,4,"Savage",0,3,3,0],
		[71,4,"Pupa",0,13,700,0],
		[72,4,"Roda Frog",0,13,400,14,50,0],
		[73,4,"Pecopeco",0,15,10,0],
		[74,4,"Steel Chonchon",0,18,2,64,10,0],
		[75,4,"Evil Druid",0,4,1,18,1,198,9,0],
		[76,5,"Whisper",0,9,20,68,-50,0],
		[77,5,"Raydric",0,60,20,0],
		[78,5,"Baphomet Jr",0,2,3,10,1,0],
		[79,5,"Condor",0,9,10,0],
		[80,5,"Dustiness",0,9,5,64,30,0],
		[81,5,"Marse",0,9,5,61,30,0],
		[82,5,"Jakk",0,9,5,63,30,0],
		[83,5,"Hode",0,9,5,62,30,0],
		[84,5,"Marionette",0,9,5,68,30,0],
		[85,5,"Orc Zombie",0,9,5,69,30,0],
		[86,5,"Isis",0,9,5,67,30,0],
		[87,5,"Mist",0,9,5,65,30,0],
		[88,6,"Chonchon",0,9,2,2,1,0],
		[89,6,"Male Thief Bug",0,2,2,0],
		[90,6,"Martyr",0,2,1,15,10,0],
		[91,6,"Sohee",0,16,15,76,3,0],
		[92,6,"Verit",0,15,8,16,8,0],
		[93,6,"Zombie",0,75,20,0],
		[94,6,"Eggrya",0,76,15,0],
		[95,6,"Eddga","Infinite [Endure]",15,-25,0],
		[96,7,"Spore",0,3,2,0],
		[97,7,"Kukre",0,2,2,0],
		[98,7,"Tarou",0,1,2,0],
		[99,7,"Wormtail",0,5,2,0],
		[100,7,"Zerom",0,5,3,0],
		[101,7,"Mantis",0,1,3,0],
		[102,7,"Yoyo",0,2,1,11,5,0],
		[103,7,"Kobold",0,1,1,10,4,0],
		[104,7,"Muka",0,75,10,0],
		[105,7,"Phen","When casting a skill, attacks will not interrupt your casting.",73,25,0],
		[106,1,"*Star Crumb",0,0],
		[107,1,"Archer Skeleton",0,25,10,0],
		[108,10,"Scorpion King",0,0],
		[109,1,"Savage Babe",0,131,5,0],
		[110,1,"Familiar",0,17,5,134,5,0],
		[111,1,"Requiem",0,137,5,0],
		[112,10,"Andre Larva",0,4,1,0],
		[113,2,"Stainer",0,18,1,156,20,0],
		[114,2,"Coco",0,18,1,155,20,0],
		[115,2,"Martin",0,18,1,154,20,0],
		[116,2,"Ghoul",0,18,1,150,20,0],
		[117,2,"Giearth",0,157,100,62,15,0],
		[118,2,"Marduk",0,156,100,0],
		[119,2,"Mistress","Skills requiring gemstones to cast no longer require them.<BR>SP cost of skills + 25%.",0],
		[120,2,"Pharaoh","SP cost of skills - 30%.",0],
		[121,10,"Soldier Andre",0,0],
		[122,3,"Anubis",0,58,30,0],
		[123,3,"Megalodon",0,18,1,152,20,0],
		[124,3,"Argos",0,18,1,159,20,0],
		[125,3,"Munak",0,18,1,62,5,159,15,0],
		[126,3,"Golden Thiefbug","Immunity to all magic (including heal).<BR>SP cost of skills + 100%.",0],
		[127,3,"Maya","Chance to reflect targeted magic + 50%.",0],
		[128,4,"Swordfish",0,18,1,198,1,0],
		[129,4,"Sandman",0,18,1,198,2,0],
		[130,4,"Pasana",0,18,1,198,3,0],
		[131,4,"Dokkebi",0,18,1,198,4,0],
		[132,4,"Cornutus","Armor cannot be broken.",18,1,0],
		[133,4,"Argiope",0,18,1,198,5,0],
		[134,4,"Angeling",0,198,6,0],
		[135,4,"Bathory",0,198,7,0],
		[136,4,"Ghostring",0,198,8,75,-25,0],
		[137,4,"Marc",0,152,100,61,5,0],
		[138,4,"Orc Lord","Reflects 30% of all physical damage.",0],
		[139,5,"Frilldora",0,230,108201,0],
		[140,6,"Moonlight Flower","Movement speed increase (same as agility up).",0],
		[141,7,"Beelzebub",0,73,-30,0],
		[142,7,"Poison Spore",0,220,101703,0],
		[143,7,"Marine Sphere",0,220,100703,0],
		[144,7,"Vitata","SP cost of skills + 25%.",220,102501,0],
		[145,7,"Smokie",0,230,101601,0],
		[146,7,"Creamy",0,230,103501,0],
		[147,7,"Poporing",0,230,101801,0],
		[148,7,"Obeaune",0,230,102601,0],
		[149,7,"Pirate Skel",0,230,106005,0],
		[150,7,"Horon",0,230,105001,0],
		[151,7,"Joker",0,230,101501,0],
		[152,7,"Osiris","When revived, you recover full HP & SP.",0],
		[153,10,"",0,0],
		[154,3,"Race Reduction 30%",0,50,30,51,30,52,30,53,30,54,30,55,30,56,30,57,30,58,30,59,30,0],
		[155,10,"",0,0],
		[156,1,"Crit Dmg+10%,Crit+7",0,70,10,10,7,0],
		[157,1,"Metaling",0,231,19817201,0],
		[158,1,"Eremes Guile",0,117,10,0],
		[159,1,"Howard Alt-Eisen",0,8,30,12,-5,0],
		[160,1,"Cecil Damon",0,12,5,8,-30,0],
		[161,1,"Mastersmith (MVP)","When attacking physically, adds 10% chance to destroy an enemy's weapon and a 7% chance of destroying its armor.",0],
		[162,1,"Sniper (MVP)","When physically attacking, adds a 5% chance to absorb 20% of the damage inflicted on the enemy as HP.  HP Recovery Rate - 100%.",75,-100,0],
		[163,1,"Breeze",0,17,5,138,5,0],
		[164,1,"Lady Solace","When equipped by a priest:<BR>When attacking physically, adds a chance to autocast [Grand Cross] Lv 5.",0],
		[165,1,"Maero of Thanatos",0,17,5,231,19802803,0],
		[166,1,"Memory of Thanatos","When attacking physically, drains 1sp from you.",23,1,85,30,9,-30,0],
		[167,1,"Hill Wind","When un equipping the weapon with this card, drains 50 sp from you.",5057,5,5126,5,5127,5,0],
		[168,1,"Laurell Weinder","When un equipping the weapon with this card, drains 50 sp from you.",5130,3,5131,3,0],
		[169,1,"Death Word","When un equipping the weapon with this card, drains 50 sp from you.",5046,5,5057,5,5277,5,0],
		[170,1,"Red Ferus","When un equipping the weapon with this card, drains 50 sp from you.",5122,5,5125,5,0],
		[171,1,"Pitman","When un equipping the weapon with this card, drains 50 sp from you.",5132,5,5133,5,0],
		[172,3,"Teddy Bear",0,51,30,0],
		[173,3,"Despero of Thanatos","Each refine increases your INT by 1.",4,-6,0],
		[174,2,"Ungoliant",0,75,10,158,100,0],
		[175,2,"Holden",0,6,2,0],
		[176,2,"Gemini-S58","When base AGI is at or higher than 90, gain +30% resistance to silence and stun.<BR>When base VIT is at or higher than 80, +50% resistance to petrification and sleep.",0],
		[177,2,"Kathryne Keyron","Each refine decreases cast time by 1%.<BR>If refined to +9 or higher, MATK +2%.",0],
		[178,2,"Lord Knight Seyren (MVP)","Enables use of the skill [Frenzy] Lv1. (Not available for calculation)",15,-50,0],
		[179,2,"Blue Acidus","If refined to 4 or less, gain MaxSP + 40, SP Recovery Rate + 5%.",14,40,0],
		[180,2,"Seyren Windsor","Each refine increases your STR by 1.",1,-6,0],
		[181,4,"Waste Stove",0,4,1,17,5,0],
		[182,4,"Venomus","When receiving physical damage, there is a very high chance to cast poison on both you and your opponent.",0],
		[183,4,"Porcellio",0,17,25,18,-5,0],
		[184,4,"Mineral",0,17,-25,18,3,0],
		[185,4,"Obsidian","For every 18 base DEX, gain VIT + 1.",0],
		[186,4,"Remover","Each refine decreases the HP gained.<BR>(Calculation Unknown)",13,800,0],
		[187,4,"Egnigem Cenia","For every 18 INT, gain STR + 1",0],
		[188,4,"Armeyer Dinze","When killing a fish type monster, gain a chance to obtain Clam Soup (VIT + 3) as a drop.",0],
		[189,4,"Venatu","For every 18 base AGI, gain LUK + 1.",0],
		[190,4,"Archdam",0,17,10,73,20,0],
		[191,4,"Ancient Mimic","For every 18 base LUK, gain AGI + 1.",0],
		[192,4,"Red Novus",0,13,500,75,10,0],
		[193,4,"Yellow Novus","When receiving physical damage, there is a very high chance to cast chaos on both you and your opponent.",0],
		[194,4,"Alicel",0,9,10,18,-5,0],
		[195,4,"Skogul","When receiving physical damage, there is a very high chance to cast bleeding on both you and your opponent.",0],
		[196,4,"Mistress of Shelter","For every 18 base STR you have, INT + 1.",0],
		[197,4,"Dame of Sentinel","For every 18 base VIT you have, DEX + 1.",0],
		[198,4,"Dimik","Each refine increases your VIT by 1.",3,-5,0],
		[199,4,"Frus","Each refine increases your chance to reflect targeted magic spells by 2%.<BR>If equipped by a Mage type character, MDEF+3.",0],
		[200,10,"",0,0],
		[201,10,"Element Stone (Water)",0,0],
		[202,10,"Element Stone (Earth)",0,0],
		[203,10,"Element Stone (Fire)",0,0],
		[204,10,"Element Stone (Wind)",0,0],
		[205,10,"Unused",0,0],
		[206,10,"Unused",0,0],
		[207,10,"Unused",0,0],
		[208,10,"Unused",0,0],
		[209,10,"Unused",0,0],
		[210,10,"Unused",0,0],
		[211,10,"Unused",0,0],
		[212,7,"Quve","When equipped by a Novice or Super Novice character, gain a chance to autocast [Increase AGI] Lv1 on yourself when taking physical damage.",0],
		[213,2,"Gibbet","If refined to +5 or less, gain MDEF + 5.",0],
		[214,4,"Disguise","When receiving physical damage, gain a chance to cast silence on your opponent.<BR>If you have base VIT of 77 or higher, the chance to silence increases.",0],
		[215,1,"Dullahan",0,70,10,119,7,0],
		[216,7,"Heirozoist","When attacking physically against a monster, there is a small chance to polymorph that monster into a different type of monster.",0],
		[217,1,"Bloody Murderer",0,70,10,114,7,0],
		[218,7,"Lude","When equipped by a Novice or Super Novice character, gain a chance to autocast [Endure] Lv1 when taking physical damage.",0],
		[219,1,"Lord of the Dead","When performing a short range physical attack, there is a chance to cause Stun, Curse, Silence, Poison, Bleeding, and Coma on the target.",0],
		[220,4,"Loli Ruri","WHen receiving physical damage, there is a chance to autocast [Heal] Lv3 on yourself.",0],
		[221,2,"Arc Angeling","If you have base LUK of 77 or higher, gain increases HP and SP recovery by 100%.",13,300,92,100,0],
		[222,3,"Arcluse","If refined to +5 or less, gain DEF+2, MDEF+3.",0],
		[223,1,"Assaulter",0,70,10,117,7,0],
		[224,4,"Anolian","If you know [Improve Concentration] Lv 10, you will autocast Lv10 instead.",231,69804201,0],
		[225,4,"Apocalypse","If armor is refined to +9 or higher, Max HP + 800�B",3,2,0],
		[226,7,"Jing Guai","When killing an Angel type monster, gain a chance of obtaining [Box of Sunlight] as a drop.",0],
		[227,6,"Am Mut",0,127,10,57,-20,0],
		[228,6,"Amon Ra","If you have base INT of 99, the chance to autocast [Kyrie Ellison] increases substantially.",7,1,231,69809810,0],
		[229,6,"Alarm",0,3,1,13,300,0],
		[230,7,"Alligator",0,78,5,0],
		[231,3,"Alice","Modifies your resistance to boss monsters by + 40%.",79,-40,0],
		[232,4,"Anthony",0,231,69803501,0],
		[233,1,"The Paper","When attacking physically, drains 1SP with every attack.",70,20,0],
		[234,2,"Incubus",0,14,150,4,-3,76,-20,0],
		[235,1,"Injustice",0,221,19808301,0],
		[236,7,"Violy","If you know [Unbearing Octave] Lv5, you will autocast Lv5 instead.",231,19820101,0],
		[237,7,"Wind Ghost","If you know [Jupitel Thunder] Lv10, you will autocast Lv10 instead.",221,19812603,0],
		[238,2,"Wootan Shooter",0,18,1,157,20,0],
		[239,2,"Wootan Fighter",0,18,1,158,20,0],
		[240,4,"Wooden Golem",0,75,30,18,1,0],
		[241,3,"Executioner",0,18,1,192,25,0],
		[242,6,"Explosion",0,129,10,59,-20,0],
		[243,5,"Eclipse",0,3,1,0],
		[244,1,"Elder","(Increased damage only occurs during War of Emperium)",1063,40,1064,40,1065,40,0],
		[245,3,"Ancient Mummy",0,231,69802905,0],
		[246,6,"Ancient Worm",0,126,10,56,-20,0],
		[247,7,"Owl Duke",0,231,19809003,0],
		[248,7,"Owl Baron",0,231,19810301,0],
		[249,3,"Ogretooth",0,18,1,191,25,0],
		[250,7,"Orc Archer","When killing a demi-human type monster, gain a chance to obtain [Box of Panting] as a drop.",0],
		[251,7,"Poison Toad",0,221,19801701,0],
		[252,1,"Orc Lady",0,83,30,0],
		[253,1,"Fur Seal","When equipped by an Acolyte type class, gain +9 critical versus undead and demon monsters.",8,10,9,3,0],
		[254,1,"Shellfish",0,1072,30,0],
		[255,1,"Samurai Specter","Bypasses defense of normal monsters.<BR>Reduces HP recovery by 100%, and drains 666HP every 10 seconds.<BR>When un equipping this card, you lose 999 hp.",0],
		[256,7,"Gargoyle","When killing an insect type monster, gain a chance to obtain [Box of Thunder] as a drop.",0],
		[257,6,"Gajomart",0,123,10,53,-20,0],
		[258,5,"Kappa","If refined to +5 or less, gain MDEF+8.",0],
		[259,1,"Crab",0,1240,30,0],
		[260,7,"Shinobi","When receiving physical damage on a character that knows the skill [Cloaking], gain a chance to autocast [Cloaking] Lv5.",2,1,0],
		[261,4,"Karakasa","When receiving physical damage, there is a chance to cast [Chaos] on the opponent.<BR>If you have base STR of 77 or higher, the chance of chaos increases.",0],
		[262,7,"Galopago","When killing an insect type monster, gain a chance to obtain apple/banana/carrot juice as a drop.",0],
		[263,1,"Gig","�ߐڕ����U���ō����`�����X�^�[��|�������ASP5�񕜁B<BR>�����������ASP5�����B",0],
		[264,4,"Chimera","�����_���[�W���󂯂����A���m���œG��ŏ�Ԃɂ���B<BR>�A�T�V����A�T�V���N���X����������ƁA��荂�m���œŏ�Ԃɂ���B",0],
		[265,1,"Catterpillar","�ߐڕ����U���ŐA���`�����X�^�[��|�������ASP5�񕜁B<BR>�����������ASP5�����B",0],
		[266,6,"Cat 'o Nine Tails","���@���˗�5%",19,3,0],
		[267,5,"Giant Whisper","�␳�l��������STR��80�ȏ�̏ꍇ�AATK+20�B<BR>�␳�l��������VIT��80�ȏ�̏ꍇ�AMAXHP+3%�B<BR>�␳�l��������LUK��80�ȏ�̏ꍇ�ACRI+3�B",9,10,0],
		[268,4,"Killer Mantis","�����_���[�W���󂯂����A���m���œG���o����Ԃɂ���B",0],
		[269,6,"Cookie (Red)",0,128,10,58,-20,0],
		[270,7,"Cookie (Green)",0,6,2,5037,10,5387,10,0],
		[271,5,"Ninetails","���B�l��9�ȏ�̎��AFLEE+20�B",2,2,0],
		[272,3,"Mi Gao","Reduces damage from WoE Guardians by 50%.",3063,50,3064,50,3065,50,0],
		[273,2,"Cramp","�����X�^�[��|�������A���m����Zeny���l������B",0],
		[274,2,"Grand Peco",0,231,69810001,0],
		[275,4,"Creamy Fear","�����_���[�W���󂯂����A���m���œG��������Ԃɂ���B",0],
		[276,4,"Grizzly","�����_���[�W���󂯂����A���m���œG���Í���Ԃɂ���B",0],
		[277,1,"Griphon","�\�[�h�}���n�E�Ƃ���������ƁA�U�����ɒ�m���Ń{�[�����O�o�b�V��Lv5����������B",9,2,10,7,0],
		[278,6,"Gullinbursti",0,125,10,55,-20,0],
		[279,1,"Cruiser",0,70,10,112,7,0],
		[280,4,"Clock","�I�[�g�K�[�hLv10���K�����Ă���ꍇ�ALv10����������B",231,69815703,0],
		[281,4,"Baby Leopard","�}�[�`�����g�n�E�Ƃ���������ƁA�Z���j�����Ȃ��Ȃ�B",6,3,0],
		[282,4,"Aliza","�����U�����󂯂����A���m���ŃI�[�g�X�y��[���f�̃E�B���N]����<BR>�����҂��_���T�[�ł��鎞�A10%�̊m���Ŕ�������",0],
		[283,4,"Goat","If armor is refined to +5 or lower, DEF+2�AMDEF+5.",0],
		[284,2,"Evil Snake Lord",0,4,3,154,100,153,100,0],
		[285,4,"Majoruros","�����_���[�W���󂯂����A���m���œG���X�^����Ԃɂ���B",0],
		[286,1,"Goblin Archer",0,70,10,111,7,0],
		[287,1,"Goblin Rider",0,70,10,110,7,0],
		[288,1,"Goblin Leader",0,81,30,0],
		[289,1,"Kobold Archer",0,70,10,113,7,0],
		[290,1,"Kobold Leader",0,82,30,0],
		[291,4,"Succubus",0,13,1000,3,-3,75,-20,0],
		[292,7,"Tengu","�����X�^�[��|�������A���m���ŉ񕜌n�A�C�e�����h���b�v����B�i�������j",0],
		[293,4,"Sasquatch","�����_���[�W���󂯂����A���m���œG�𓀌���Ԃɂ���B",0],
		[294,5,"Vagabon Wolf",0,1,1,0],
		[295,5,"Wanderer","�V�[�t�n�E�Ƃ���������ƁA���+20�B",231,19817601,0],
		[296,1,"Tri Joint","�ߐڕ����U���Ŗ��`�����X�^�[��|�������ASP5�񕜁B<BR>�����������ASP5�����B",0],
		[297,7,"Sea-Otter Card","���ތ`�����X�^�[��|�������A���m���ł����i�₨�����݂��h���b�v����B<BR>���i��h�g��H�ׂ鎞��HP�񕜗�50%�����B",0],
		[298,2,"Carat","���B�l��9�ȏ�̎��AMaxSP+150",4,2,0],
		[299,4,"Kraben","�����_���[�W���󂯂����A���m���œG���Í���Ԃɂ���B",0],
		[300,6,"General Skeleton",0,124,10,54,-20,0],
		[301,4,"Geographer","�u���b�V���OLv10���K�����Ă���ꍇ�ALv10����������B",231,69803102,0],
		[302,4,"Giant Spider","�����_���[�W���󂯂����A���m���œG��ŏ�Ԃɂ���B",0],
		[303,2,"Giant Hornet","�����`�����X�^�[��|�������A���m���ŃE�B���h�I�u���F���f���[�����h���b�v����B",64,10,0],
		[304,6,"Firelock Soldier","If refined to +9 or higher, MAXHP+10%�AMAXSP+10%.",1,2,0],
		[305,1,"Hatii Babe",0,221,19805503,0],
		[306,3,"Zealotus",0,5207,10,5199,10,6,2,0],
		[307,3,"Enchanted Peach Tree","�����U�����A���m���Ŏ����Ƀq�[��Lv1���g�p����BLv10���K�����Ă���ꍇ�́ALv10���g�p����B",0],
		[308,4,"Skel Prisoner","�����_���[�W���󂯂����A���m���œG�𐇖���Ԃɂ���B",0],
		[309,2,"Stalactic Golem",0,18,1,151,20,0],
		[310,3,"Sting","���B�l��9�ȏ�̎��AMDEF+5�B",18,2,0],
		[311,1,"Dark Priest","�U�����A��m���œG��SP������������B<BR>�Z�[�W��v���t�F�b�T�[����������ƁA�����X�^�[�𕨗��U��������SP��1���񕜂���B",0],
		[312,7,"Stemworm","�����`�����X�^�[��|�������A���m���Łu���J�̔��v���h���b�v����B",0],
		[313,1,"Stormy Knight",0,132,20,221,19813101,0],
		[314,7,"Spring Rabit","�����`�����X�^�[��|�������A���m���łɂ��≻�����̃G�T���h���b�v����B<BR>�ɂ��≻�����̃G�T��H�ׂ�����HP�񕜗�50%�����B",0],
		[315,7,"Sleeper","���ތ`�����X�^�[��|�������A���m���Łu�������v���h���b�v����B",0],
		[316,7,"Sageworm","�����X�^�[��|�������A���m���ŃW�F���X�g�[�����h���b�v����B",0],
		[317,4,"Solider",0,18,2,19,2,0],
		[318,6,"Zombie Prisoner",0,121,10,51,-20,0],
		[319,1,"Zombie Master","�ߐڕ����U���ŕs���`�����X�^�[��|�������ASP5�񕜁B<BR>�����������ASP5�����B",0],
		[320,2,"Dark Illusion",0,73,-10,15,-10,16,-10,0],
		[321,4,"Dark Frame","�����_���[�W���󂯂����A���m���œG��Ή�������B",0],
		[322,6,"Dark Lord",0,221,69812505,0],
		[323,1,"Turtle General","Physical Attack Damage + 20%.",221,19800710,0],
		[324,7,"Dumpling Child","�l�Ԍ`�����X�^�[��|�������A���m���ŃL�����f�B�[��X�e�B�b�N�L�����f�B�[���h���b�v����B<BR>�L�����f�B�[�ƃX�e�B�b�N�L�����f�B�[��H�ׂ�����HP�񕜗�50%�����B",0],
		[325,1,"Chepet","(�����ɂł͂Ȃ��G��)",221,19802505,0],
		[326,1,"Zipper Bear","�U����SP1����B<BR>�}�[�`�����g�n�E�Ƃ���������ƁA���킪�j�����Ȃ��Ȃ�B",17,30,0],
		[327,5,"Choco",0,9,10,11,5,0],
		[328,1,"Mobster","�V�[�t�n�E�Ƃ���������ƁA�N���e�B�J��+4�B",70,15,0],
		[329,1,"Diabolic","�ߐڕ����U���ň����`�����X�^�[��|�������ASP5�񕜁B<BR>�����������ASP��5��������B",0],
		[330,4,"Demon Fungus","�����_���[�W���󂯂����A���m���œG�𐇖���Ԃɂ���B",0],
		[331,4,"Deadly Wraith","�����_���[�W���󂯂����A���m���œG�Ɏ􂢂�������B",0],
		[332,2,"White Lady","Increases recovery from your Heal, Sanctuary, and Potion Pitcher by + 30%.<BR>SP cost of skills + 15%.",0],
		[333,4,"Sky Deleter","HP�������񕜂��Ȃ��B�ߐڕ����U���Ń����X�^�[��|�������AHP100�񕜁B",0],
		[334,4,"Ground Deleter","�ߐڕ����U���Ń����X�^�[��|�������ASP10�񕜁B�����������ASP100�����B",0],
		[335,7,"Greatest General","�����U�����A��m���ŋC������������B<BR>�A�R���C�g�n�E�Ƃ���������ƁA�����m������������B<BR>�K���X�����K�[�̏ꍇ�́A�C���ł͂Ȃ��t���b�v�U�R�C������������B",0],
		[336,7,"Taoist Hermit","�A���`�����X�^�[��|�������A���m���Łu�J�T�Ȕ��v���h���b�v����B",0],
		[337,2,"Evil Nymph",0,4,1,14,50,0],
		[338,5,"Toad",0,11,1,0],
		[339,2,"Tower Keeper",0,73,-5,4,1,0],
		[340,5,"Dragon Tail",0,5040,5,5041,5,2,1,9,10,0],
		[341,5,"Dragon Fly",0,2,1,0],
		[342,2,"Dryad","�A���`�����X�^�[��|�������A���m���ŃC�G���[���C�u���h���b�v����B",62,10,0],
		[343,1,"Driller","�ߐڕ����U���ŗ��������X�^�[��|�������ASP5�񕜁B<BR>�����������ASP��5��������B",0],
		[344,4,"Nightmare Terror","�����_���[�W���󂯂����A���m���œG�Ɏ􂢂�������B",0],
		[345,1,"Nereid","�ߐڕ����U���œ����`�����X�^�[��|�������ASP5�񕜁B<BR>�����������ASP5�����B",0],
		[346,5,"Harpy",0,60,15,5046,5,0],
		[347,2,"Permitter",0,67,15,69,15,0],
		[348,3,"High Orc","�����U����5%�𔽎˂���",18,1,0],
		[349,4,"Hatii","�����_���[�W���󂯂����A�G��50%�̊m���œ�����Ԃɂ���B",0],
		[350,7,"Bloody Butterfly","���@�Ȃǂ̉r�����U�����󂯂邱�Ƃɂ���Ē��f����Ȃ��B",73,30,5053,5,0],
		[351,6,"Merman",0,75,10,76,10,0],
		[352,5,"Punk","�N�@�O�}�C�ALv5���K�����Ă���ꍇ�ALv5����������B",231,69813401,0],
		[353,1,"Panzer Goblin",0,70,10,116,7,0],
		[354,7,"Heater","�\�[�h�}���n�E�Ƃ���������ƁA���S���+3�B",10,3,0],
		[355,1,"Beetle","�ߐڕ����U���ŋ��ތ`�����X�^�[��|�������ASP5�񕜁B<BR>�����������ASP5�����B",0],
		[356,1,"Aster",0,1059,30,0],
		[357,2,"Kiel-D-01",0,74,30,0],
		[358,3,"Parasite",0,60,5,18,1,0],
		[359,1,"Fake Angel","�ߐڕ����U���œV�g�`�����X�^�[��|�������ASP5�񕜁B<BR>�����������ASP5�����B",0],
		[360,1,"Phendark","�ߐڕ����U���Ől�Ԍ`�����X�^�[��|�������ASP5�񕜁B<BR>���������� SP5�����B",0],
		[361,1,"Bloody Knight",0,221,19812501,0],
		[362,6,"Freezer","���B�l��9�ȏ�̏ꍇ�A�o�b�V���̃_���[�W10%�����B",13,300,0],
		[363,1,"Valkyrie Randgris","Weapon cannot be broken.<BR>Physical damage + 10%.",231,11023901,0],
		[364,4,"Brilight","�����_���[�W���󂯂����A���m���œG�𒾖ُ�Ԃɂ���B",0],
		[365,7,"Blazer","�����X�^�[��|�������A���m���ŐH�ו��n�A�C�e�����h���b�v����B�i�������j",0],
		[366,1,"Stone Shooter",0,8,10,17,10,0],
		[367,4,"Pest","�����_���[�W���󂯂����A���m���œG��Ή���Ԃɂ���B<BR>INT��77�ȏ�̏ꍇ�A��荂�m���ŐΉ���Ԃɂ���B",0],
		[368,3,"Penomena",0,50,30,0],
		[369,5,"Vocal",0,19,3,0],
		[370,7,"Bongun","�o�b�V���g�p���A�G��5�Z�������o���B<BR>���i�b�N����󂯂�_���[�W100%�����B�i�������j",221,19800601,0],
		[371,7,"Marin","�����X�^�[��|�������A���m���Ń[���s�[��ł������[���s�[���h���b�v����B",0],
		[372,5,"Mastering",0,6,1,0],
		[373,10,0,0,0],
		[374,2,"Maya Purple","�n�C�f�B���O��N���[�L���O�����Ă��郂���X�^�[��������B",0],
		[375,3,"Mysteltainn",0,18,1,190,25,0],
		[376,2,"Myst Case","�����X�^�[��|�������A���m���Ńv���[���g�{�b�N�X���h���b�v����B",0],
		[377,6,"Mini Demon",0,122,10,52,-20,0],
		[378,7,"Mimic","�����X�^�[��|�������A���m���ŌÂ��������h���b�v����B",0],
		[379,6,"Miyabi Doll",0,16,10,5055,5,0],
		[380,1,"Mutant Dragonoid","�t�@�C�A�[�{�[��Lv10���K�����Ă���ꍇ�ALv10����������B",17,15,221,19805203,0],
		[381,6,"Megalith","���B�l��5�ȉ��̎��AMDEF+7�B",0],
		[382,1,"Lava Golem",0,84,30,0],
		[383,2,"Rideword","�A�R���C�g�n�E�Ƃ���������ƁAINT+1�AMDEF+1�B",4,1,0],
		[384,4,"Rybio","�����_���[�W���󂯂����A���m���œG���X�^����Ԃɂ���B<BR>DEX��77�ȏ�̏ꍇ�A��荂�m���ŃX�^����Ԃɂ���B",0],
		[385,7,"Wraith","�s���`�����X�^�[��|�������A���m���Łu�N�X�N�X�΂����v���h���b�v����B",0],
		[386,7,"Raydric Archer","�����`�����X�^�[��|�������A���m���Łu���݂̔��v���h���b�v����B",0],
		[387,2,"Lieb Olmai","�����`�����X�^�[��|�������A���m���Ń��b�h�u���b�h���h���b�v����B",63,10,0],
		[388,6,"Raggler",0,1,1,3,1,0],
		[389,7,"Hermit Plant","�A���`�����X�^�[��|�������A���m���Őԃn�[�u�A���n�[�u�A���n�[�u���h���b�v����B<BR>�n�[�u�A�C�e�����g�p����HP�񕜗�50%�����B",0],
		[390,1,"Rotar Zairo",0,70,10,115,7,0],
		[391,6,"Wild Rose","�V�[�t�n�E�Ƃ���������ƁA���S���+5�B",2,1,0],
		[392,4,"Tao Gunka",0,15,100,18,-50,19,-50,0],
		[393,5,"Hye Gun",0,9,15,10,1,0],
		[394,5,"Deviling",0,60,50,61,-50,62,-50,63,-50,64,-50,65,-50,66,-50,67,-50,68,-50,69,-50,0],
		[395,7,"Zho Pu Long",0,2,1,10,3,0],
		[396,3,"Tamruan",0,18,2,5158,10,5159,10,5384,10,0],
		[397,2,"Leaf Cat","���ތ`�����X�^�[��|�������A���m���ŃN���X�^���u���[���h���b�v����B",61,10,0],
		[398,1,"Mao Guai",0,48,20,0],
		[399,6,"Iron Fist",0,120,10,50,-20,0],
		[400,5,"Noxious",0,60,10,78,10,0],
		[401,5,"Kavach Icarus","If refined to +4 or lower, Flee + 10, Perfect Dodge + 1.",9,10,0],
		[402,5,"Green Maiden","Each refine increases your LUK and Critical rate.",6,-5,0],
		[403,5,"Orc Baby","���B�l��9�ȏ�̏ꍇ�A����ɖ������U���ϐ�+5%�AFlee+5",60,10,9,10,0],
		[404,5,"Assassin Cross Eremes (MVP)",0,230,108203,0],
		[405,5,"Aliot","�����҂����m�A���l�A�V�[�t�n��ł���ꍇ�ASTR+2�A�ő�HP+5%<BR>�����҂��}�W�V�����A�A�R���C�g�A�A�[�`���[�n��ł���ꍇ�AINT+2�A�ő�SP+5%",0],
		[406,6,"Odium of Thanatos","���B�l�ɂ��AGI������",2,-5,0],
		[407,6,"Gold Acidus","���B�l��4�ȉ��̏ꍇ�A����ɍő�HP+4%�A�ő�SP+4%<BR>HP���R�񕜗�+5%�ASP���R�񕜗�+5%",15,4,16,4,0],
		[408,6,"Green Ferus",0,3,1,15,10,0],
		[409,6,"Lady Tanee","�����X�^�[��|���x�ɁA��m���Ńo�i�i�𗎂Ƃ�<BR>�o�i�i�̉񕜗�+100%",15,-50,16,50,0],
		[410,7,"Gremlin","�����^�����X�^�[��|���x�ɁA���m���Ń{���o�[�X�e�[�L(STR+3)�𗎂Ƃ�",0],
		[411,7,"Beholder",0,230,122501,0],
		[412,7,"Anopheles","�����^�����X�^�[��|���x�ɁA���m���ŐG��̃`�[�Y�O���^��(AGI+3)�𗎂Ƃ�",0],
		[413,7,"Whikebine Tres",0,231,19817401,0],
		[414,7,"Errende Ebece",0,231,69803201,0],
		[415,7,"Plasma","�����X�^�[��|���x�ɁA���m���Ń��W�X�g�|�[�V�����𗎂Ƃ�",0],
		[416,7,"Baroness of Retribution","�V�g�^�����X�^�[��|���x�ɁA���m���ő�w��(LUK+3)�𗎂Ƃ�",0],
		[417,7,"Dragon Egg","���������X�^�[��|���x�Ɉ��m���Ńn�`���n�[�u�e�B�[(INT+3)�𗎂Ƃ�",0],
		[418,7,"Grove","���`�^�����X�^�[��|���x�Ɉ��m���Ńt���[�c�~�b�N�X(DEX+3)�𗎂Ƃ�",0],
		[419,7,"Hydrolancer",0,231,19922701,0],
		[420,4,"RSX-0806","Armor is indestructable, and you cannot be knocked back.",3,3,0],
		[421,4,"High Priest (MVP)",0,231,109826701,0],
		[422,4,"Detardeurus",0,152,100,231,90523801,0],
		[423,6,"Boss Egnigem","Every 10 seconds you recover 50HP and 10SP.",15,10,16,10,0],
		[424,2,"High Wizard Kathryne (MVP)","��ʃ����X�^�[�̖��@�h��͂𖳎�����B<BR>�����������ASP��2000���x��������",73,100,76,-100,0],
		[425,2,"Vesper","���@�U�����A�{�X�����X�^�[��MDEF�� 30%�𖳎����ă_���[�W��^����B",5,2,0],
		[426,2,"Margaretha Sorin",0,4,1,231,91510105,0],
		[427,1,"Dolor of Thanatos","���@�U�����A�V�g�^�����X�^�[��10%�̒ǉ��_���[�W",0],
		[428,1,"Skeggiold","���@�U�����A�����^�����X�^�[��2%�̒ǉ��_���[�W",0],
		[429,100,0,"(�C���W���X�e�B�XC��2���ȏ�}���Ă����ʂ͑����܂���)",17,20,6,3,0],
		[430,100,0,"�I�[�g�X�y���̃t���X�g�_�C�o�[�����m�����傫������",0],
		[431,100,0,"�����푰��|�������ɓ���̊m���ŊL�𗎂Ƃ��B",44,30,0],
		[432,100,0,0,18,3,19,3,0],
		[433,100,0,0,4,4,3,4,75,30,76,30,0],
		[434,100,0,0,73,-20,15,20,16,20,0],
		[435,100,0,0,1,3,0],
		[436,100,0,0,18,3,3,3,0],
		[437,100,0,0,86,20,0],
		[438,100,0,"�ߐڕ����_���[�W���󂯂��ꍇ15%�̊m���œG�ɐ�����������",0],
		[439,100,0,"�ߐڕ����_���[�W���󂯂��ꍇ15%�̊m���œG�ɈÈł�������",0],
		[440,100,0,"�ߐڕ����_���[�W���󂯂��ꍇ15%�̊m���œG�Ɏ􂢂�������",0],
		[441,100,0,0,7,1,0],
		[442,100,0,0,9,18,0],
		[443,100,0,0,9,18,0],
		[444,100,0,0,9,18,0],
		[445,100,0,0,9,18,0],
		[446,100,0,0,9,18,0],
		[447,100,0,0,9,18,0],
		[448,100,0,0,13,300,14,60,0],
		[449,100,0,0,221,19805605,0],
		[450,100,0,"�G��|�����ƂɁA���m���Őԃ|�[�V�����𗎂Ƃ��B<BR>�Z�b�g�����҂����m�n�̏ꍇ�A��/��/���|�[�V�����̉񕜗ʂ�50%��������B",1,10,15,20,75,50,231,19815301,0],
		[451,100,0,"�ړ����x+5%<BR>�U�����Ƃ�SP��1���񕜂���B<BR>[�I�[�g�X�y��]�C���e�B�~�f�C�g���������Ȃ��Ȃ�B<BR>�Z�b�g�����҂������n�̏ꍇ�A�X�L���g�p���ɃW�F���X�g�[��������Ȃ��B",1,5,2,5,12,5,0],
		[452,100,0,"�X�L���g�p����SP����ʂ�10%��������B<BR>�Z�b�g�����҂����E�n�̏ꍇ�A�����푰�ƕs���푰����̃_���[�W��30%�J�b�g���A<BR>�����푰�ƕs���푰��|�������ɖႦ��o���l+5% ",3,10,73,-10,0],
		[453,100,0,"�Z�b�g�����҂��|��n�̏ꍇ�A<BR>�����푰��|�������ɖႦ��o���l��+5%�A<BR>�����U�������m���œ����푰�ɃR�[�}(����)��Ԃ�������B",25,20,2,5,5,3,86,20,0],
		[454,100,0,"�Z�b�g�����҂����n�̏ꍇ�A�r�����Ԃ�15%�����AMATK�� + 3%",13,500,18,5,19,5,5051,10,5054,10,5056,10,0],
		[455,100,0,"�U�������Ƃ�SP��2���񕜂���<BR>�Z�b�g�����҂����l�n�L�����̏ꍇ�A<BR>�����X�^�[��|���x�Ɉ��m���ŌÂ����F�̔��𗎂Ƃ��A20%�̊m���Ŗ��@�𔽎ˁB",6,10,5065,20,0],
		[456,100,0,"�Z�b�g�����҂��N���Z�C�_�[�̏ꍇ�A�Z�ɐ�������t�^����",1,1,4,1,18,2,75,10,73,-10,5324,10,5284,10,0],
		[457,100,0,"�X�g���b�v�A�[�}�[Lv5���K�����Ă���ꍇ�I�[�g�X�y����Lv5������<BR>�Z�b�g�����҂����[�O�ł���ꍇ�A<BR>�X�L���g�p��SP�����-20%�A<BR>�I�[�g�X�y���C���e�B�~�f�C�g���������Ȃ�",1,6,2,4,5169,10,0],
		[458,100,0,"�Z�b�g�����҂������N�̏ꍇ<BR>�X�L���g�p��SP�����-10%�A�r�������f����Ȃ�",1,3,17,25,14,80,5197,10,5321,10,231,19702905,0],
		[459,100,0,"�Z�b�g�����҂��o�[�h���_���T�[�̏ꍇ�A<BR>�����U�����󂯂����A���m���ŃI�[�g�X�y��[�^���̃^���b�g�J�[�h]Lv2����",5,5,5199,10,5207,10,5292,5,0],
		[460,100,0,"�Z�b�g�����҂��Z�[�W�ł���ꍇ�A<BR>20%�̊m���Ŗ��@���ˁA<BR>�r������-20%�A<BR>�����X�^�[��|���x�ɒ�m���Ń��b�h�E�C�G���[�W�F���X�g�[���𗎂Ƃ�",4,3,5057,10,5133,10,0],
		[461,100,0,"�U������x��SP1��<BR>�Z�b�g�����҂��A���P�~�X�g�̏ꍇ<BR>�����U�������m���ŃI�[�g�X�y��[�A�h���i�������b�V��]Lv1����<BR>�����X�^�[��|���x�Ɉ��m���ŃR�[�e�B���O��A�A���̌s�𗎂Ƃ�",1,4,15,7,16,7,5065,20,0],
	];

	CardNum = 461;

	CardSortOBJ = [
		[0,201,202,203,204,1,2,3,106,156,107,223,25,11,233,235,10,244,158,27,252,253,254,255,259,26,263,265,15,277,279,39,14,286,287,288,289,290,43,109,22,296,31,428,9,29,16,313,18,162,34,160,38,41,319,311,323,427,165,325,326,328,329,28,169,20,215,42,47,343,32,21,5,164,345,305,24,45,159,46,353,355,171,356,13,37,167,110,4,359,360,19,361,217,33,163,44,366,17,12,6,161,166,40,35,23,30,380,398,8,157,36,382,168,363,7,111,170,390,219,"NULL"],
		[0,1,2,3,106,156,107,223,25,11,233,235,10,244,158,27,252,253,254,255,259,26,263,265,15,277,279,39,14,286,287,288,289,290,43,109,22,296,31,428,9,29,16,313,18,162,34,160,38,41,319,311,323,427,165,325,326,328,329,28,169,20,215,42,47,343,32,21,5,164,345,305,24,45,159,46,353,355,171,356,13,37,167,110,4,359,360,19,361,217,33,163,44,366,17,12,6,161,166,40,35,23,30,380,398,8,157,36,382,168,363,7,111,170,390,219,"NULL"],
		[0,221,234,48,238,239,425,174,49,52,117,177,357,116,273,274,114,284,298,176,213,303,113,309,180,320,51,337,339,342,50,347,424,120,179,332,426,115,374,118,376,119,175,383,397,387,178,"NULL"],
		[0,154,222,122,231,124,54,55,241,245,126,249,57,61,306,307,310,173,396,56,53,272,348,58,358,60,172,368,62,127,375,125,123,63,59,"NULL"],
		[0,190,420,224,225,133,188,232,75,193,187,189,240,282,194,134,191,138,185,132,261,197,264,268,334,299,275,276,280,281,136,283,285,69,291,293,70,129,301,302,181,333,308,66,195,74,128,317,321,392,214,198,422,330,331,67,131,344,135,421,130,349,65,71,364,199,73,367,182,196,64,183,137,184,384,186,192,68,72,220,"NULL"],
		[0,404,86,76,243,405,85,403,401,258,267,271,79,294,295,82,80,402,327,394,338,340,341,400,346,78,352,393,139,369,83,372,84,81,87,77,"NULL"],
		[0,399,227,228,229,140,94,242,95,246,89,257,266,269,408,278,407,300,304,91,93,318,322,406,88,351,362,92,423,90,377,379,381,388,409,391,"NULL"],
		[0,230,414,236,412,237,141,247,248,250,251,152,148,256,260,262,212,97,270,146,418,410,226,103,292,297,416,395,151,312,314,96,145,315,316,100,98,324,335,336,417,419,149,216,350,354,144,411,413,105,415,365,142,147,150,370,371,143,101,378,104,102,218,385,386,99,389,"NULL"]
	];

	function cardsort(work)
	{
		for(i=1;work[i]!="NULL";i++){
			for(k=i;k>0;k--){
				if(cardOBJ[work[k-1]][2] > cardOBJ[work[k]][2]){
					work_backup = work[k-1];
					work[k-1] = work[k];
					work[k] = work_backup;
				}
			}
		}
		return work;
	}

	cardsort(CardSortOBJ[0]);
	cardsort(CardSortOBJ[1]);
	cardsort(CardSortOBJ[2]);
	cardsort(CardSortOBJ[3]);
	cardsort(CardSortOBJ[4]);
	cardsort(CardSortOBJ[5]);
	cardsort(CardSortOBJ[6]);
	cardsort(CardSortOBJ[7]);

	for(i=0;CardSortOBJ[0][i]!="NULL";i++)
		document.calcForm.A_weapon1_card1.options[i] = new Option(cardOBJ[CardSortOBJ[0][i]][2],cardOBJ[CardSortOBJ[0][i]][0]);
	for(i=0;CardSortOBJ[1][i]!="NULL";i++){
		document.calcForm.A_weapon1_card2.options[i] = new Option(cardOBJ[CardSortOBJ[1][i]][2],cardOBJ[CardSortOBJ[1][i]][0]);
		document.calcForm.A_weapon1_card3.options[i] = new Option(cardOBJ[CardSortOBJ[1][i]][2],cardOBJ[CardSortOBJ[1][i]][0]);
		document.calcForm.A_weapon1_card4.options[i] = new Option(cardOBJ[CardSortOBJ[1][i]][2],cardOBJ[CardSortOBJ[1][i]][0]);
	}
	document.calcForm.A_weapon1_card4.options[1] = new Option("Top 10 Ranked",106);

	for(i=0;CardSortOBJ[2][i]!="NULL";i++){
		document.calcForm.A_head1_card.options[i] = new Option(cardOBJ[CardSortOBJ[2][i]][2],cardOBJ[CardSortOBJ[2][i]][0]);
		document.calcForm.A_head2_card.options[i] = new Option(cardOBJ[CardSortOBJ[2][i]][2],cardOBJ[CardSortOBJ[2][i]][0]);
	}
	for(i=0;CardSortOBJ[3][i]!="NULL";i++)
		document.calcForm.A_left_card.options[i] = new Option(cardOBJ[CardSortOBJ[3][i]][2],cardOBJ[CardSortOBJ[3][i]][0]);
	for(i=0;CardSortOBJ[4][i]!="NULL";i++)
		document.calcForm.A_body_card.options[i] = new Option(cardOBJ[CardSortOBJ[4][i]][2],cardOBJ[CardSortOBJ[4][i]][0]);
	for(i=0;CardSortOBJ[5][i]!="NULL";i++)
		document.calcForm.A_shoulder_card.options[i] = new Option(cardOBJ[CardSortOBJ[5][i]][2],cardOBJ[CardSortOBJ[5][i]][0]);
	for(i=0;CardSortOBJ[6][i]!="NULL";i++)
		document.calcForm.A_shoes_card.options[i] = new Option(cardOBJ[CardSortOBJ[6][i]][2],cardOBJ[CardSortOBJ[6][i]][0]);
	for(i=0;CardSortOBJ[7][i]!="NULL";i++){
		document.calcForm.A_acces1_card.options[i] = new Option(cardOBJ[CardSortOBJ[7][i]][2],cardOBJ[CardSortOBJ[7][i]][0]);
		document.calcForm.A_acces2_card.options[i] = new Option(cardOBJ[CardSortOBJ[7][i]][2],cardOBJ[CardSortOBJ[7][i]][0]);
	}

	function Click_Card(CBI)
	{
		ActiveSkillSetPlus();

		if(eval(document.calcForm.ITEM_SW.checked)==0)
			return;
		for(i=0;i<=4;i++)
			myInnerHtml("ITEM"+i,"",0);
		myInnerHtml("ITEM_W_LV","",0);
		myInnerHtml("ITEM_DATA","",0);
		myInnerHtml("ITEM_SLOT","",0);
		myInnerHtml("ITEM_LV","",0);
		myInnerHtml("ITEM_WAIT","",0);

		if(CBI == 106){
			myInnerHtml("nm080","���̂����� or ���������NTOP10",0);
			myInnerHtml("B_SETUMEI","���̂�����1�ŕK���_���[�W+5<BR>���̂�����3�����̏ꍇ�͕K���_���[�W+40<BR>���������NTOP10�̏ꍇ�͕K���_���[�W+10<BR>(���������NTOP10�͈�ԉE�̕���J�[�h��)",0);
			return;
		}
		if(201 <= CBI && CBI <= 204){
			myInnerHtml("nm080",cardOBJ[CBI][2],0);
			myInnerHtml("B_SETUMEI","���킪 "+ ZokuseiOBJ[CBI-200] +"���� �ɂȂ�B",0);
			return;
		}
		myInnerHtml("nm080",cardOBJ[CBI][2] +" Card",0);

		CBIstr = "";
		for(i=4;cardOBJ[CBI][i] != 0;i+=2)
			Item_Setumei(cardOBJ[CBI],i);
		if(cardOBJ[CBI][3] != 0)
			CBIstr += cardOBJ[CBI][3] +"<BR>";

		for(i=4;cardOBJ[CBI][i] != 0;i+=2){
			if(cardOBJ[CBI][i] == 90){
				CBIstr += "<Font size=2><BR><B>When "+ SetCardName(cardOBJ[CBI][i+1]) + " are equipped at the same time:<BR>";
				for(j=4;cardOBJ[cardOBJ[CBI][i+1]][j] != 0;j+=2)
					Item_Setumei(cardOBJ[cardOBJ[CBI][i+1]],j);
				if(cardOBJ[cardOBJ[CBI][i+1]][3] != 0)
					CBIstr += cardOBJ[cardOBJ[CBI][i+1]][3] +"<BR>";
				CBIstr += "</Font></B>";
			}
		}

		myInnerHtml("B_SETUMEI",CBIstr,0);
	}

	w_SC = [[429,306,235,"NULL"],
		[430,349,305,"NULL"],
		[431,254,259,356,"NULL"],
		[432,229,280,352,"NULL"],
		[433,291,234,"NULL"],
		[434,322,320,"NULL"],
		[435,273,98,"NULL"],
		[436,274,73,"NULL"],
		[437,245,40,"NULL"],
		[438,9,308,"NULL"],
		[439,58,276,"NULL"],
		[440,50,344,"NULL"],
		[441,125,370,393,"NULL"],
		[442,294,10,"NULL"],
		[443,341,88,"NULL"],
		[444,243,7,"NULL"],
		[445,372,64,"NULL"],
		[446,369,68,"NULL"],
		[447,338,72,"NULL"],
		[448,218,212,"NULL"],
		[449,248,247,"NULL"],
		[450,223,317,347,354,362,"NULL"],
		[451,233,295,391,395,260,"NULL"],
		[452,253,383,307,301,270,"NULL"],
		[453,279,224,340,351,230,"NULL"],
		[454,337,358,220,346,379,350,"NULL"],
		[455,326,376,281,388,216,"NULL"],
		[456,190,347,354,362,"NULL"],
		[457,413,113,295,391,260,"NULL"],
		[458,253,383,181,270,"NULL"],
		[459,408,224,340,230,"NULL"],
		[460,337,192,346,379,350,"NULL"],
		[461,326,175,281,388,104,"NULL"],
	];
	SC_MAXnum = 32;
	for(i=0;i<=SC_MAXnum;i++){
		for(k=1;w_SC[i][k] != "NULL";k++){
			for(j=4;cardOBJ[w_SC[i][k]][j] != 0;j+=2);
			cardOBJ[w_SC[i][k]][j]=90;
			cardOBJ[w_SC[i][k]][j+1]=w_SC[i][0];
			cardOBJ[w_SC[i][k]][j+2]=0;
		}
	}

	function SetCardName(SENw){
		SENstr = "";
		for(SENi=0;SENi<=SC_MAXnum;SENi++){
			if(w_SC[SENi][0] == SENw){
				for(SENj=1;w_SC[SENi][SENj] != "NULL";SENj++){
					SENstr += "["+ cardOBJ[w_SC[SENi][SENj]][2] +" C]";
					if(w_SC[SENi][SENj+1] != "NULL")
						SENstr += " + ";
				}
				return SENstr;
			}
		}
	}

	function SetCard()
	{
		for(SEi=16;SEi<=25;SEi++)
			n_A_card[SEi] = 0;

		w_SE_num= 16;
		w_SE_ch = 0;
		for(SEk=0;SEk<=SC_MAXnum;SEk++){
			for(SEj=1;w_SC[SEk][SEj] != "NULL"  && (w_SE_ch == 1 || (w_SE_ch == 0 && SEj == 1));SEj++){
				w_SE_ch = 0;
				for(SEi=0;SEi<=15 && w_SE_ch == 0;SEi++){
					if(n_A_card[SEi] == w_SC[SEk][SEj])
						w_SE_ch = 1;
				}
			}
			if(w_SE_ch == 1){
				n_A_card[w_SE_num] = w_SC[SEk][0];
				w_SE_num++;
			}
		}
	}


}
/*
     FILE ARCHIVED ON 14:36:04 Nov 11, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:19:10 Nov 20, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 79.138
  exclusion.robots: 0.061
  exclusion.robots.policy: 0.053
  cdx.remote: 0.052
  esindex: 0.009
  LoadShardBlock: 56.253 (3)
  PetaboxLoader3.datanode: 83.904 (4)
  load_resource: 160.647
  PetaboxLoader3.resolve: 79.208
*/