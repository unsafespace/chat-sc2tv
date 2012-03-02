var smiles = [
	// main
	{code: ':happy:', img: 'a.png', width: '30', height: '30'},
	{code: ':aws:', img: 'awesome.png', width: '30', height: '30'},
	{code: ':nc:', img: 'nocomments.png', width: '30', height: '30'},
	{code: ':manul:', img: 'manul.png', width: '30', height: '30'},
	{code: ':crazy:', img: 'crazy.png', width: '30', height: '30'},
	{code: ':cry:', img: 'cry.png', width: '30', height: '30'},
	{code: ':glory:', img: 'glory.png', width: '30', height: '30'},
	{code: ':kawai:', img: 'kawai.png', width: '30', height: '30'},
	{code: ':mee:', img: 'mee.png', width: '30', height: '30'},
	{code: ':omg:', img: 'omg.png', width: '30', height: '30'},
	{code: ':whut:', img: 'mhu.png', width: '30', height: '30'},
	{code: ':sad:', img: 'sad.png', width: '30', height: '30'},
	{code: ':spk:', img: 'slowpoke.png', width: '29', height: '30'},
	{code: ':trf:', img: 'trollface.gif', width: '30', height: '25'},
	{code: ':hmhm:', img: '2.png', width: '30', height: '30'},
	{code: ':mad:', img: 'mad.png', width: '30', height: '30'},
	{code: ':angry:', img: 'aangry.png', width: '30', height: '30'},
	{code: ':xd:', img: 'ii.png', width: '31', height: '30'},
	{code: ':fu:', img: 'fuuuu.png', width: '30', height: '30'},
	{code: ':why:', img: 'why.png', width: '34', height: '30'},
	{code: ':huh:', img: 'huh.png', width: '31', height: '30'},
	{code: ':tears:', img: 'happycry.png', width: '30', height: '30'},
	{code: ':slow:', img: 'spok.png', width: '29', height: '32'},
	{code: ':notch:', img: 'notch.png', width: '30', height: '30'},
	{code: ':vaga:', img: 'vaganych.png', width: '30', height: '30'},
	{code: ':ra:', img: 'ra.png', width: '31', height: '34'},
	{code: ':fp:', img: 'facepalm.png', width: '30', height: '30'},
	{code: ':neo:', img: 'smith.png', width: '30', height: '30'},
	{code: ':yao:', img: 'yao.png', width: '23', height: '30'},
	{code: ':fyeah:', img: 'fyeah.png', width: '30', height: '30'},
	{code: ':lucky:', img: 'lol.png', width: '29', height: '30'},
	{code: ':okay:', img: 'okay.png', width: '22', height: '30'},
	{code: ':alone:', img: 'alone.png', width: '26', height: '25'},
	{code: ':joyful:', img: 'ewbte.png', width: '30', height: '29'},
	{code: ':peka:', img: 'mini-happy.png', width: '30', height: '30'},
	{code: ':ban:', img: 'banan.png', width: '21', height: '30'},
	{code: ':bm:', img: 'bm.gif', width: '62', height: '31'},
	{code: ':cap:', img: 'cap.png', width: '35', height: '25'},
	{code: ':br:', img: 'br.png', width: '27', height: '30'},
	{code: ':fpl:', img: 'leefacepalm.png', width: '26', height: '30'},
	{code: ':ht:', img: 'heart.png', width: '30', height: '30'},
	// face
	{code: ':adolf:', img: 'adolf.gif', width: '25', height: '33'},
	{code: ':bratok:', img: 'bratok.gif', width: '24', height: '33'},
	{code: ':strelok:', img: 'strelok.png', width: '26', height: '30'},
	{code: ':white-ra:', img: 'white-ra.gif', width: '25', height: '33'},
	{code: ':dimaga:', img: 'dimaga.gif', width: '25', height: '33'},
	{code: ':bruce:', img: 'bruce.gif', width: '30', height: '33'},
	{code: ':jae:', img: 'jaedong.gif', width: '27', height: '32'},
	{code: ':flash:', img: 'flash1.gif', width: '27', height: '33'},
	{code: ':bisu:', img: 'bisu.gif', width: '24', height: '33'},
	{code: ':jangbi:', img: 'jangbi.png', width: '24', height: '33'},
	{code: ':idra:', img: 'idra.gif', width: '26', height: '33'},
	{code: ':vdv:', img: 'vitya.gif', width: '23', height: '33'},
	{code: ':imba:', img: 'djigurda.gif', width: '29', height: '33'},
	{code: ':tgirl:', img: 'brucelove.png', width: '26', height: '30'},
	{code: ':top1sng:', img: 'happy.png', width: '22', height: '30'},
	{code: ':slavik:', img: 'slavik.png', width: '21', height: '30'},
	{code: ':olsilove:', img: 'arbitooor.png', width: '27', height: '30'},
	// other
	{code: ':apc:', img: 'apochai.png', width: '26', height: '30'},
	{code: ':pool:', img: 'pool.png', width: '30', height: '30'},
	{code: ':ej:', img: 'ejik.png', width: '30', height: '30'},
	{code: ':mario:', img: 'mario.png', width: '33', height: '30'},
	{code: ':tort:', img: 'tort.png', width: '30', height: '30'},
	{code: ':arni:', img: 'terminator.png', width: '20', height: '30'},
	{code: ':crab:', img: 'crab.png', width: '34', height: '30'},
	{code: ':hero:', img: 'heroes3.png', width: '24', height: '28'},
	{code: ':mc:', img: 'mine.png', width: '25', height: '25'},
	{code: ':osu:', img: 'osu.png', width: '30', height: '30'},
	{code: ':q3:', img: 'q3.png', width: '30', height: '30'},
	{code: ':cow:', img: 'cow.png', width: '30', height: '23'},
	{code: ':panda:', img: 'panda.png', width: '30', height: '30'},
	{code: ':tigra:', img: 'tigrica.png', width: '30', height: '30'},
	{code: ':globus:', img: 'globus.png', width: '30', height: '36'},
	{code: ':volck:', img: 'voOlchik1.png', width: '31', height: '31'},
	{code: ':hpeka:', img: 'harupeka.png', width: '30', height: '30'},
	{code: ':sun:', img: 'sunl.png', width: '30', height: '30'},
	{code: ':marin:', img: 'sc2_smile.gif', width: '30', height: '30'},
	{code: ':cou:', img: 'cougar.gif', width: '30', height: '30'},
	{code: ':wb:', img: 'wormban.png', width: '30', height: '30'},
	{code: ':dobro:', img: 'dobre.png', width: '30', height: '30'},
	{code: ':theweedle:', img: 'weedle.png', width: '30', height: '30'},
	{code: ':nook:', img: 'no-okay.png', width: '30', height: '30'},
	{code: ':noj:', img: 'knife.png', width: '30', height: '15'},
	{code: ':skalka:', img: 'atata.gif', width: '32', height: '32'},
	{code: ':fpd:', img: 'fp.png', width: '43', height: '30'},
	{code: ':sweedlove:', img: 'sweetden.png', width: '34', height: '30'},
	{code: ':hg:', img: 'hg.png', width: '30', height: '30'},
	// anime
	{code: ':yoko:', img: 'yoko.png', width: '60', height: '44'},
	{code: ':miku:', img: 'miku.png', width: '42', height: '50'},
	{code: ':winry:', img: 'winry.png', width: '30', height: '45'},
	{code: ':asuka:', img: 'asuka.png', width: '42', height: '50'},
	{code: ':konata:', img: 'konata.png', width: '30', height: '30'},
  {code: ':reimu:', img: 'reimu.png', width: '42', height: '50'}
];