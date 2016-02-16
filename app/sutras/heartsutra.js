const heartsutra = {
    sutra: [
        {key: '001', romaji: 'kan', kanji: '觀', hiragana: 'かん', english: '?'},
        {key: '002', romaji: 'ji', kanji: '自', hiragana: 'じ', english: 'self'},
        {key: '003', romaji: 'zai', kanji: '在', hiragana: 'ざい', english: 'residing in'},
        {key: '004', romaji: 'bo', kanji: '菩', hiragana: 'ぼ', english: '"bo" in bodhisattvha'},
        {key: '005', romaji: 'satsu', kanji: '薩', hiragana: 'さつ', english: '"sat" in bodhisattvha'},
        {key: '006', romaji: 'gyō', kanji: '行', hiragana: 'ぎょう', english: 'thing?'},
        {key: '008', romaji: 'jin', kanji: '深', hiragana: 'じん', english: 'profound'},
        {key: '009', romaji: 'han', kanji: '般', hiragana: 'はん', english: '?'},
        {key: '010', romaji: 'nya', kanji: '若', hiragana: 'にゃ', english: '?'},
        {key: '011', romaji: 'ha', kanji: '波', hiragana: 'は', english: '?'},
        {key: '012', romaji: 'ra', kanji: '羅', hiragana: 'ら', english: '?'},
        {key: '013', romaji: 'mit', kanji: '蜜', hiragana: 'みっ', english: '?'},
        {key: '014', romaji: 'ta', kanji: '多', hiragana: 'た', english: '?'},
        {key: '015', romaji: 'ji', kanji: '時', hiragana: 'じ', english: 'time?'},
        {key: '016', romaji: 'shō', kanji: '照', hiragana: 'しょう', english: 'illumination'},
        {key: '017', romaji: 'ken', kanji: '見', hiragana: 'けん', english: 'see'},
        {key: '018', romaji: 'go', kanji: '五', hiragana: 'ご', english: 'five'},
        {key: '019', romaji: 'on', kanji: '蘊', hiragana: 'うん', english: 'skhanda'},
        {key: '020', romaji: 'kai', kanji: '皆', hiragana: 'かい', english: 'everyone?'},
        {key: '021', romaji: 'kū', kanji: '空', hiragana: 'くう', english: 'emptiness'},
        {key: '022', romaji: 'do', kanji: '度', hiragana: 'ど', english: 'degree?'},
        {key: '023', romaji: 'is', kanji: '一', hiragana: 'いっ', english: 'one'},
        {key: '024', romaji: 'sai', kanji: '切', hiragana: 'さい', english: 'cut'},
        {key: '025', romaji: 'ku', kanji: '苦', hiragana: 'く', english: 'dukkha'},
        {key: '026', romaji: 'yaku', kanji: '厄', hiragana: 'やく', english: 'evil'},
        {key: '027', romaji: 'sha', kanji: '舎', hiragana: 'さ', english: 'suffix (house)?'},
        {key: '028', romaji: 'ri', kanji: '利', hiragana: 'り', english: 'benefit'},
        {key: '029', romaji: 'shi', kanji: '子', hiragana: 'し', english: 'dimunitive object?'},
        {key: '030', romaji: 'shiki', kanji: '色', hiragana: 'しき', english: 'color? kin?'},
        {key: '031', romaji: 'fu', kanji: '不', hiragana: 'ふ', english: 'prefix (non)'},
        {key: '032', romaji: 'i', kanji: '異', hiragana: 'い', english: 'different? other? odd?'},
        {key: '033', romaji: 'kū', kanji: '空', hiragana: 'くう', english: 'emptiness'},
        {key: '034', romaji: 'kū', kanji: '空', hiragana: 'くう', english: 'emptiness'},
        {key: '035', romaji: 'fu', kanji: '不', hiragana: 'ふ', english: 'prefix (non)'},
        {key: '036', romaji: 'i', kanji: '異', hiragana: 'い', english: 'different? other? odd?'},
        {key: '037', romaji: 'shiki', kanji: '色', hiragana: 'しき', english: 'color? kin?'},
        {key: '038', romaji: 'shiki', kanji: '色', hiragana: 'しき', english: 'color? kin?'},
        {key: '039', romaji: 'soku', kanji: '即', hiragana: 'そく', english: 'immediately'},
        {key: '040', romaji: 'ze', kanji: '是', hiragana: 'ぜ', english: 'right, correct'},
        {key: '041', romaji: 'kū', kanji: '空', hiragana: 'くう', english: 'emptiness'},
        {key: '042', romaji: 'kū', kanji: '空', hiragana: 'くう', english: 'emptiness'},
        {key: '043', romaji: 'soku', kanji: '即', hiragana: 'そく', english: 'immediately'},
        {key: '044', romaji: 'ze', kanji: '是', hiragana: 'ぜ', english: 'right, correct'},
        {key: '045', romaji: 'shiki', kanji: '色', hiragana: 'しき', english: 'color? kin?'},
        {key: '046', romaji: 'ju', kanji: '受', hiragana: 'じゅ', english: 'to receive?'},
        {key: '047', romaji: 'sō', kanji: '想', hiragana: 'そう', english: 'thought, idea, concept'},
        {key: '048', romaji: 'gyō', kanji: '行', hiragana: 'ぎょう', english: 'thing?'},
        {key: '049', romaji: 'shiki', kanji: '職', hiragana: 'しき', english: 'employment?'},
        {key: '050', romaji: 'yaku', kanji: '亦', hiragana: 'やく', english: 'used in names?'},
        {key: '051', romaji: 'bu', kanji: '復', hiragana: 'ぶ', english: 'restore, revert, resume'},
        {key: '052', romaji: 'nyo', kanji: '如', hiragana: 'にょ', english: 'to seem'},
        {key: '053', romaji: 'ze', kanji: '是', hiragana: 'ぜ', english: 'right, correct'},
        {key: '054', romaji: 'sha', kanji: '舎', hiragana: 'さ', english: 'suffix (house)?'},
        {key: '055', romaji: 'ri', kanji: '利', hiragana: 'り', english: 'benefit'},
        {key: '056', romaji: 'shi', kanji: '子', hiragana: 'し', english: 'dimunitive object?'},
        {key: '057', romaji: 'ze', kanji: '是', hiragana: 'ぜ', english: 'right, correct'},
        {key: '058', romaji: 'sho', kanji: '諸', hiragana: 'しょ', english: 'various, many, together'},
        {key: '059', romaji: 'ho', kanji: '法', hiragana: 'ほう', english: 'dharma'},
        {key: '060', romaji: 'kū', kanji: '空', hiragana: 'くう', english: 'emptiness'},
        {key: '061', romaji: 'so', kanji: '柤', hiragana: 'そ', english: '?'},
        {key: '062', romaji: 'fu', kanji: '不', hiragana: 'ふ', english: 'prefix (non)'},
        {key: '063', romaji: 'shō', kanji: '生', hiragana: 'しょう', english: 'live, raw, natural'},
        {key: '064', romaji: 'fu', kanji: '不', hiragana: 'ふ', english: 'prefix (non)'},
        {key: '065', romaji: 'metsu', kanji: '滅', hiragana: 'めつ', english: 'die, perish, dissappear'},
        {key: '066', romaji: 'fu', kanji: '不', hiragana: 'ふ', english: 'prefix (non)'},
        {key: '067', romaji: 'ku', kanji: '垢', hiragana: 'く', english: 'grime, dirt'},
        {key: '068', romaji: 'fu', kanji: '不', hiragana: 'ふ', english: 'prefix (non)'},
        {key: '069', romaji: 'jō', kanji: '淨', hiragana: 'じょう', english: 'pure, unspoiled'},
        {key: '070', romaji: 'fu', kanji: '不', hiragana: 'ふ', english: 'prefix (non)'},
        {key: '071', romaji: 'zō', kanji: '増', hiragana: 'ぞう', english: 'increase'},
        {key: '072', romaji: 'fu', kanji: '不', hiragana: 'ふ', english: 'prefix (non)'},
        {key: '073', romaji: 'gen', kanji: '減', hiragana: 'げん', english: 'reduction'},
        {key: '074', romaji: 'ze', kanji: '是', hiragana: 'ぜ', english: 'right, correct'},
        {key: '075', romaji: 'ko', kanji: '故', hiragana: 'こ', english: 'late, deceased'},
        {key: '076', romaji: 'kū', kanji: '空', hiragana: 'くう', english: 'emptiness'},
        {key: '077', romaji: 'chu', kanji: '中', hiragana: 'ちゅ', english: 'inside'},
        {key: '078', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '079', romaji: 'shiki', kanji: '色', hiragana: 'しき', english: 'color? kin?'},
        {key: '080', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '081', romaji: 'ju', kanji: '受', hiragana: 'じゅ', english: 'to receive?'},
        {key: '082', romaji: 'sō', kanji: '想', hiragana: 'そう', english: 'thought, idea, concept'},
        {key: '083', romaji: 'gyō', kanji: '行', hiragana: 'ぎょう', english: 'thing?'},
        {key: '084', romaji: 'shiki', kanji: '職', hiragana: 'しき', english: 'employment?'},
        {key: '085', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '086', romaji: 'gen', kanji: '眠', hiragana: 'げん', english: '?'},
        {key: '087', romaji: 'ni', kanji: '耳', hiragana: 'に', english: 'ear'},
        {key: '088', romaji: 'bi', kanji: '鼻', hiragana: 'び', english: 'nose'},
        {key: '089', romaji: 'ze', kanji: '舌', hiragana: 'ぜつ', english: 'tongue'},
        {key: '090', romaji: 'shin', kanji: '身', hiragana: 'しん', english: 'body'},
        {key: '091', romaji: 'ni', kanji: '意', hiragana: 'に', english: 'idea, mind, heart, desire'},
        {key: '092', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '093', romaji: 'shiki', kanji: '色', hiragana: 'しき', english: 'color? kin?'},
        {key: '094', romaji: 'shō', kanji: '聲', hiragana: 'しょう', english: 'voice'},
        {key: '095', romaji: 'kō', kanji: '香', hiragana: 'こう', english: 'fragrance'},
        {key: '096', romaji: 'mi', kanji: '味', hiragana: 'み', english: 'taste'},
        {key: '097', romaji: 'soku', kanji: '觸', hiragana: 'そく', english: 'touch'},
        {key: '098', romaji: 'ho', kanji: '法', hiragana: 'ほ', english: 'dharma'},
        {key: '099', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '100', romaji: 'gen', kanji: '眠', hiragana: 'げん', english: '?'},
        {key: '101', romaji: 'kai', kanji: '界', hiragana: 'かい', english: 'world'},
        {key: '102', romaji: 'nai', kanji: '乃', hiragana: 'ない', english: 'then, really, as it turned out'},
        {key: '103', romaji: 'shi', kanji: '至', hiragana: 'し', english: 'male given name?'},
        {key: '104', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '105', romaji: 'i', kanji: '意', hiragana: 'い', english: 'thoughts, meaning'},
        {key: '106', romaji: 'shiki', kanji: '職', hiragana: 'しき', english: 'employment?'},
        {key: '107', romaji: 'kai', kanji: '界', hiragana: 'かい', english: 'world'},
        {key: '108', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '109', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '110', romaji: 'myō', kanji: '明', hiragana: 'みょう', english: 'clear, bright'},
        {key: '111', romaji: 'yaku', kanji: '亦', hiragana: 'やく', english: 'used in names?'},
        {key: '112', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '113', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '114', romaji: 'myō', kanji: '明', hiragana: 'みょう', english: 'clear, bright'},
        {key: '115', romaji: 'jin', kanji: '盡', hiragana: 'じん', english: 'exhaust? deplete?'},
        {key: '116', romaji: 'nai', kanji: '乃', hiragana: 'ない', english: 'then, really, as it turned out'},
        {key: '117', romaji: 'shi', kanji: '至', hiragana: 'し', english: 'male given name?'},
        {key: '118', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '119', romaji: 'rō', kanji: '老', hiragana: 'ろう', english: 'old age'},
        {key: '120', romaji: 'shi', kanji: '死', hiragana: 'し', english: 'death'},
        {key: '121', romaji: 'yaku', kanji: '亦', hiragana: 'やく', english: 'used in names?'},
        {key: '122', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '123', romaji: 'rō', kanji: '老', hiragana: 'ろう', english: 'old age'},
        {key: '124', romaji: 'shi', kanji: '死', hiragana: 'し', english: 'death'},
        {key: '125', romaji: 'jin', kanji: '盡', hiragana: 'じん', english: 'exhaust? deplete?'},
        {key: '126', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '127', romaji: 'ku', kanji: '苦', hiragana: 'く', english: 'dukkha'},
        {key: '128', romaji: 'shu', kanji: '?', hiragana: 'す', english: '?'},
        {key: '129', romaji: 'metsu', kanji: '滅', hiragana: 'めつ', english: 'die, perish, dissappear'},
        {key: '130', romaji: 'do', kanji: '道', hiragana: 'ど', english: 'path, way'},
        {key: '131', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '132', romaji: 'chi', kanji: '智', hiragana: 'ち', english: 'wisdom?'},
        {key: '133', romaji: 'yaku', kanji: '亦', hiragana: 'やく', english: 'used in names?'},
        {key: '134', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '135', romaji: 'toku', kanji: '得', hiragana: 'とく', english: 'benefit'},
        {key: '136', romaji: 'i', kanji: '以', hiragana: 'い', english: 'compared to, by means of'},
        {key: '137', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '138', romaji: 'sho', kanji: '所', hiragana: 'しょ', english: 'place'},
        {key: '139', romaji: 'toku', kanji: '得', hiragana: 'とく', english: 'benefit'},
        {key: '140', romaji: 'ko', kanji: '故', hiragana: 'こ', english: 'late, deceased'},
        {key: '141', romaji: 'bo', kanji: '菩', hiragana: 'ぼ', english: '"bo" in bodhisattvha'},
        {key: '142', romaji: 'dai', kanji: '提', hiragana: 'だい', english: 'to lower'},
        {key: '143', romaji: 'satsu', kanji: '薩', hiragana: 'さつ', english: '"sat" in bodhisattvha'},
        {key: '144', romaji: 'ta', kanji: '?', hiragana: 'た', english: '?'},
        {key: '145', romaji: 'e', kanji: '依', hiragana: 'え', english: 'rely on?'},
        {key: '146', romaji: 'han', kanji: '般', hiragana: 'はん', english: 'Han in transliteration of Prajñā'},
        {key: '147', romaji: 'nya', kanji: '若', hiragana: 'にゃ', english: 'Nya in transliteration of Prajñā'},
        {key: '148', romaji: 'ha', kanji: '波', hiragana: 'は', english: 'Ha in transliteration of Pāramitā'},
        {key: '149', romaji: 'ra', kanji: '羅', hiragana: 'ら', english: 'Ra in transliteration of Pāramitā'},
        {key: '150', romaji: 'mit', kanji: '蜜', hiragana: 'みっ', english: 'Mit in transliteration of Pāramitā'},
        {key: '151', romaji: 'ta', kanji: '多', hiragana: 'た', english: 'Ta in transliteration of Pāramitā'},
        {key: '152', romaji: 'ko', kanji: '故', hiragana: 'こ', english: 'late, deceased'},
        {key: '153', romaji: 'shin', kanji: '心', hiragana: 'しん', english: 'heart'},
        {key: '154', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '155', romaji: 'ke', kanji: '罣', hiragana: 'け', english: 'obstruct'},
        {key: '156', romaji: 'ge', kanji: '礙', hiragana: 'げ', english: 'hinderance'},
        {key: '157', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '158', romaji: 'ke', kanji: '罣', hiragana: 'け', english: 'obstruct'},
        {key: '159', romaji: 'ge', kanji: '礙', hiragana: 'げ', english: 'hinderance'},
        {key: '160', romaji: 'ko', kanji: '故', hiragana: 'こ', english: 'late, deceased'},
        {key: '161', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '162', romaji: 'u', kanji: '有', hiragana: 'う', english: 'exist, possess, occur'},
        {key: '162', romaji: 'u', kanji: '有', hiragana: 'う', english: 'exist, possess, occur'},
        {key: '163', romaji: 'ku', kanji: '恐', hiragana: 'く', english: 'fear'},
        {key: '164', romaji: 'fu', kanji: '怖', hiragana: 'ふ', english: 'frighten?'},
        {key: '165', romaji: 'on', kanji: '遠', hiragana: 'おん', english: 'distant, far, (literary) to distance oneself from'},
        {key: '166', romaji: 'ri', kanji: '離', hiragana: 'り', english: 'to leave, to go away, separate'},
        {key: '167', romaji: 'is', kanji: '一', hiragana: 'いっ', english: 'one'},
        {key: '168', romaji: 'sai', kanji: '切', hiragana: 'さい', english: 'cut'},
        {key: '169', romaji: 'ten', kanji: '?', hiragana: 'てん', english: '?'},
        {key: '170', romaji: 'dō', kanji: '倒', hiragana: 'どう', english: 'chinese: inverted, japanese : debt'},
        {key: '171', romaji: 'mu', kanji: '夢', hiragana: 'む', english: 'dream, visionary'},
        {key: '172', romaji: 'sō', kanji: '想', hiragana: 'そう', english: 'thought, idea, concept'},
        {key: '173', romaji: 'ku', kanji: '究', hiragana: 'く', english: 'examine, investigate'},
        {key: '174', romaji: 'kyo', kanji: '竟', hiragana: 'きょう', english: 'finally, after all, at last'},
        {key: '175', romaji: 'ne', kanji: '涅', hiragana: 'ね', english: 'part of abbreviation for "nirvana"'},
        {key: '176', romaji: 'han', kanji: '槃', hiragana: 'はん', english: 'part of abbreviation for "nirvana"'},
        {key: '177', romaji: 'san', kanji: '三', hiragana: 'さん', english: 'three'},
        {key: '178', romaji: 'se', kanji: '世', hiragana: 'せ', english: 'generation, age'},
        {key: '179', romaji: 'sho', kanji: '諸', hiragana: 'しょ', english: 'various, many, together'},
        {key: '180', romaji: 'butsu', kanji: '佛', hiragana: 'ぶつ', english: 'Buddha'},
        {key: '181', romaji: 'e', kanji: '依', hiragana: 'え', english: 'rely on?'},
        {key: '182', romaji: 'han', kanji: '般', hiragana: 'はん', english: 'Han in transliteration of Prajñā'},
        {key: '183', romaji: 'nya', kanji: '若', hiragana: 'にゃ', english: 'Nya in transliteration of Prajñā'},
        {key: '184', romaji: 'ha', kanji: '波', hiragana: 'は', english: 'Ha in transliteration of Pāramitā'},
        {key: '185', romaji: 'ra', kanji: '羅', hiragana: 'ら', english: 'Ra in transliteration of Pāramitā'},
        {key: '186', romaji: 'mit', kanji: '蜜', hiragana: 'みっ', english: 'Mit in transliteration of Pāramitā'},
        {key: '187', romaji: 'ta', kanji: '多', hiragana: 'た', english: 'Ta in transliteration of Pāramitā'},
        {key: '188', romaji: 'ko', kanji: ' ', hiragana: 'こ', english: ' '},
        {key: '189', romaji: 'toku', kanji: ' ', hiragana: 'とく', english: ' '},
        {key: '190', romaji: 'a', kanji: ' ', hiragana: 'あ', english: ' '},
        {key: '191', romaji: 'noku', kanji: ' ', hiragana: 'んおく', english: ' '},
        {key: '192', romaji: 'ta', kanji: ' ', hiragana: 'た', english: ' '},
        {key: '193', romaji: 'ra', kanji: ' ', hiragana: 'ら', english: ' '},
        {key: '194', romaji: 'sam', kanji: ' ', hiragana: 'さっ', english: ' '},
        {key: '195', romaji: 'myaku', kanji: ' ', hiragana: 'みゃく', english: ' '},
        {key: '196', romaji: 'sam', kanji: ' ', hiragana: 'さん', english: ' '},
        {key: '197', romaji: 'bo', kanji: ' ', hiragana: 'ぼ', english: ' '},
        {key: '198', romaji: 'dai', kanji: '提', hiragana: 'だい', english: 'to lower'},
        {key: '199', romaji: 'ko', kanji: ' ', hiragana: 'こ', english: ' '},
        {key: '200', romaji: 'chi', kanji: ' ', hiragana: 'ち', english: ' '},
        {key: '201', romaji: 'han', kanji: '般', hiragana: 'はん', english: 'Han in transliteration of Prajñā'},
        {key: '202', romaji: 'nya', kanji: '若', hiragana: 'にゃ', english: 'Nya in transliteration of Prajñā'},
        {key: '203', romaji: 'ha', kanji: '波', hiragana: 'は', english: 'Ha in transliteration of Pāramitā'},
        {key: '204', romaji: 'ra', kanji: '羅', hiragana: 'ら', english: 'Ra in transliteration of Pāramitā'},
        {key: '205', romaji: 'mit', kanji: '蜜', hiragana: 'みっ', english: 'Mit in transliteration of Pāramitā'},
        {key: '206', romaji: 'ta', kanji: '多', hiragana: 'た', english: 'Ta in transliteration of Pāramitā'},
        {key: '207', romaji: 'ze', kanji: ' ', hiragana: 'ぜ', english: ' '},
        {key: '208', romaji: 'dai', kanji: ' ', hiragana: 'だい', english: ' '},
        {key: '209', romaji: 'jin', kanji: ' ', hiragana: 'じん', english: ' '},
        {key: '210', romaji: 'shu', kanji: ' ', hiragana: 'す', english: ' '},
        {key: '211', romaji: 'ze', kanji: ' ', hiragana: 'ぜ', english: ' '},
        {key: '212', romaji: 'dai', kanji: ' ', hiragana: 'だい', english: ' '},
        {key: '213', romaji: 'myo', kanji: ' ', hiragana: 'みょ', english: ' '},
        {key: '214', romaji: 'shu', kanji: ' ', hiragana: 'す', english: ' '},
        {key: '215', romaji: 'ze', kanji: ' ', hiragana: 'ぜ', english: ' '},
        {key: '216', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '217', romaji: 'jo', kanji: ' ', hiragana: 'じょ', english: ' '},
        {key: '228', romaji: 'shu', kanji: ' ', hiragana: 'す', english: ' '},
        {key: '229', romaji: 'ze', kanji: ' ', hiragana: 'ぜ', english: ' '},
        {key: '220', romaji: 'mu', kanji: '無', hiragana: 'む', english: 'No'},
        {key: '221', romaji: 'to', kanji: ' ', hiragana: 'と', english: ' '},
        {key: '222', romaji: 'do', kanji: ' ', hiragana: 'ど', english: ' '},
        {key: '223', romaji: 'shu', kanji: ' ', hiragana: 'す', english: ' '},
        {key: '224', romaji: 'no', kanji: ' ', hiragana: 'の', english: ' '},
        {key: '225', romaji: 'jo', kanji: ' ', hiragana: 'じょ', english: ' '},
        {key: '226', romaji: 'is', kanji: ' ', hiragana: 'いっ', english: ' '},
        {key: '227', romaji: 'sai', kanji: ' ', hiragana: 'さい', english: ' '},
        {key: '238', romaji: 'ku', kanji: ' ', hiragana: 'く', english: ' '},
        {key: '239', romaji: 'shin', kanji: '心', hiragana: 'しん', english: 'heart'},
        {key: '230', romaji: 'jitsu', kanji: ' ', hiragana: 'じつ', english: ' '},
        {key: '231', romaji: 'fu', kanji: ' ', hiragana: 'ふ', english: ' '},
        {key: '232', romaji: 'ko', kanji: ' ', hiragana: 'こ', english: ' '},
        {key: '233', romaji: 'ko', kanji: ' ', hiragana: 'こ', english: ' '},
        {key: '234', romaji: 'setsu', kanji: ' ', hiragana: 'せつ', english: ' '},
        {key: '235', romaji: 'han', kanji: '般', hiragana: 'はん', english: 'Han in transliteration of Prajñā'},
        {key: '236', romaji: 'nya', kanji: '若', hiragana: 'にゃ', english: 'Nya in transliteration of Prajñā'},
        {key: '237', romaji: 'ha', kanji: '波', hiragana: 'は', english: 'Ha in transliteration of Pāramitā'},
        {key: '248', romaji: 'ra', kanji: '羅', hiragana: 'ら', english: 'Ra in transliteration of Pāramitā'},
        {key: '249', romaji: 'mit', kanji: '蜜', hiragana: 'みっ', english: 'Mit in transliteration of Pāramitā'},
        {key: '240', romaji: 'ta', kanji: '多', hiragana: 'た', english: 'Ta in transliteration of Pāramitā'},
        {key: '241', romaji: 'shu', kanji: ' ', hiragana: 'す', english: ' '},
        {key: '242', romaji: 'soku', kanji: ' ', hiragana: 'そく', english: ' '},
        {key: '243', romaji: 'setsu', kanji: ' ', hiragana: 'せつ', english: ' '},
        {key: '244', romaji: 'shu', kanji: ' ', hiragana: 'す', english: ' '},
        {key: '245', romaji: 'watsu', kanji: ' ', hiragana: 'わつ', english: ' '},
        {key: '246', romaji: 'gya', kanji: ' ', hiragana: 'ぎゃ', english: ' '},
        {key: '247', romaji: 'te', kanji: ' ', hiragana: 'て', english: ' '},
        {key: '258', romaji: 'gya', kanji: ' ', hiragana: 'ぎゃ', english: ' '},
        {key: '259', romaji: 'te', kanji: ' ', hiragana: 'て', english: ' '},
        {key: '250', romaji: 'ha', kanji: ' ', hiragana: 'は', english: ' '},
        {key: '251', romaji: 'ra', kanji: ' ', hiragana: 'ら', english: ' '},
        {key: '252', romaji: 'gya', kanji: ' ', hiragana: 'ぎゃ', english: ' '},
        {key: '253', romaji: 'te', kanji: ' ', hiragana: 'て', english: ' '},
        {key: '254', romaji: 'hara', kanji: ' ', hiragana: 'はら', english: ' '},
        {key: '255', romaji: 'so', kanji: ' ', hiragana: 'そ', english: ' '},
        {key: '256', romaji: 'gya', kanji: ' ', hiragana: 'ぎゃ', english: ' '},
        {key: '257', romaji: 'te', kanji: ' ', hiragana: 'て', english: ' '},
        {key: '268', romaji: 'bo', kanji: ' ', hiragana: 'ぼ', english: ' '},
        {key: '269', romaji: 'ji', kanji: ' ', hiragana: 'じ', english: ' '},
        {key: '260', romaji: 'sowa', kanji: ' ', hiragana: 'そわ', english: ' '},
        {key: '261', romaji: 'ka', kanji: ' ', hiragana: 'か', english: ' '},
        {key: '262', romaji: 'han', kanji: ' ', hiragana: 'はん', english: ' '},
        {key: '263', romaji: 'nya', kanji: ' ', hiragana: 'にゃ', english: ' '},
        {key: '264', romaji: 'shin', kanji: '心', hiragana: 'しん', english: 'heart'},
        {key: '265', romaji: 'gyo', kanji: '經', hiragana: 'ぎょ', english: ' '}
    ],
    title: [
        {key: '001', romaji: 'Maka', kanji: '摩訶', hiragana: 'まか', english: 'Great'},
        {key: '002', romaji: 'Hannya', kanji: '般若', hiragana: 'はんにゃ', english: 'Wisdom (transliteration of Prajñā)'},
        {key: '003', romaji: 'Haramitta', kanji: '波羅蜜多', hiragana: 'はらみった', english: 'Perfect (transliteration of Pāramitā)'},
        {key: '004', romaji: 'Shin', kanji: '心', hiragana: 'しん', english: 'Heart'},
        {key: '005', romaji: 'Gyo', kanji: '經', hiragana: 'ぎょ', english: 'Sutra'}
    ]
};

module.exports = heartsutra;