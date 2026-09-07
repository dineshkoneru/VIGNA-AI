import { QuizQuestion } from "../types";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: "Ganesh Chaturthi",
    categoryTe: "వినాయక చవితి",
    questionEn: "In which Hindu lunar month is Ganesh Chaturthi traditionally celebrated?",
    questionTe: "సాంప్రదాయకంగా వినాయక చవితిని ఏ హిందూ చంద్ర మాసంలో జరుపుకుంటారు?",
    optionsEn: [
      "Bhadrapada (Shukla Chaturthi)",
      "Kartika (Purnima)",
      "Chaitra (Navami)",
      "Ashvin (Dashami)"
    ],
    optionsTe: [
      "భాద్రపద శుద్ధ చతుర్థి",
      "కార్తీక పౌర్ణమి",
      "చైత్ర నవమి",
      "ఆశ్వయుజ దశమి"
    ],
    correctAnswer: 0,
    explanationEn: "Ganesh Chaturthi falls on the fourth day (Chaturthi) of the waxing moon phase (Shukla Paksha) in the month of Bhadrapada.",
    explanationTe: "భాద్రపద మాసంలో శుక్ల పక్ష చతుర్థి (నాల్గవ రోజు) నాడు వినాయక చవితిని వైభవంగా జరుపుకుంటారు."
  },
  {
    id: 2,
    category: "Lord Ganesha",
    categoryTe: "గణేశుడి విశేషాలు",
    questionEn: "Why is Lord Ganesha called 'Ekadanta' (One-tusked)?",
    questionTe: "వినాయకుడిని 'ఏకదంతుడు' అని ఎందుకు పిలుస్తారు?",
    optionsEn: [
      "He broke his tusk to write the epic Mahabharata",
      "He was born with only one tooth",
      "He lost it in a battle with demons",
      "It represents the solitary Sun"
    ],
    optionsTe: [
      "మహాభారతాన్ని రాయడానికి తన దంతాన్ని విరిచి కలంగా వాడారు",
      "పుట్టుకతోనే ఒకే దంతం కలిగి ఉండటం వల్ల",
      "రాక్షసులతో యుద్ధంలో కోల్పోవడం వల్ల",
      "ఒంటరి సూర్యునికి ప్రతీకగా ఉండటం వల్ల"
    ],
    correctAnswer: 0,
    explanationEn: "To transcribe the Mahabharata continuously as Sage Vyasa dictated without pausing, Ganesha broke his own tusk to use as a pen.",
    explanationTe: "వ్యాస మహర్షి మహాభారతాన్ని నిరంతరాయంగా చెబుతుంటే, కలం విరిగిపోకుండా రాయడం కోసం గణపతి తన దంతాన్ని విరిచి కలంగా ఉపయోగించారు."
  },
  {
    id: 3,
    category: "Eco-friendly celebrations",
    categoryTe: "పర్యావరణహిత వేడుకలు",
    questionEn: "Why should we avoid Plaster of Paris (PoP) idols during Ganesh Chaturthi?",
    questionTe: "వినాయక చవితికి ప్లాస్టర్ ఆఫ్ ప్యారిస్ (PoP) విగ్రహాలను ఎందుకు నివారించాలి?",
    optionsEn: [
      "PoP does not dissolve easily and leaches toxic heavy metals into water",
      "PoP idols are too heavy to lift",
      "PoP idols are only used in winter",
      "PoP is not available in India"
    ],
    optionsTe: [
      "PoP నీటిలో సులభంగా కరగదు మరియు హానికర రసాయనాలను విడుదల చేస్తుంది",
      "PoP విగ్రహాలు ఎత్తడానికి చాలా బరువుగా ఉంటాయి",
      "PoP విగ్రహాలను శీతాకాలంలో మాత్రమే వాడతారు",
      "PoP భారతదేశంలో దొరకదు"
    ],
    correctAnswer: 0,
    explanationEn: "PoP takes months to dissolve, choking lakes and leaching toxic chemicals like gypsum, barium, and lead that kill fish and aquatic ecosystems.",
    explanationTe: "PoP కరగడానికి ఎన్నో నెలలు పడుతుంది. ఇది నీటిలోని ప్రాణవాయువును తగ్గించి, విషపూరిత రసాయనాలతో జలచరాల ప్రాణాలను హరిస్తుంది."
  },
  {
    id: 4,
    category: "Indian culture",
    categoryTe: "భారతీయ సంస్కృతి",
    questionEn: "Who transformed Ganesh Chaturthi into a grand public festival (Sarvajanik Utsav) in 1893?",
    questionTe: "1893లో వినాయక చవితిని సార్వజనిక (ప్రజా) ఉత్సవంగా మార్చిన జాతీయ నాయకుడు ఎవరు?",
    optionsEn: [
      "Lokmanya Bal Gangadhar Tilak",
      "Mahatma Gandhi",
      "Swami Vivekananda",
      "Subhas Chandra Bose"
    ],
    optionsTe: [
      "లోకమాన్య బాలగంగాధర తిలక్",
      "మహాత్మా గాంధీ",
      "స్వామి వివేకానంద",
      "సుభాష్ చంద్రబోస్"
    ],
    correctAnswer: 0,
    explanationEn: "Bal Gangadhar Tilak utilized public festival gatherings to unite people across social divisions during the Indian Independence movement.",
    explanationTe: "స్వాతంత్ర్య సమరంలో ప్రజలను ఐక్యం చేయడానికి బాలగంగాధర తిలక్ 1893లో గణేష్ ఉత్సవాలను సార్వజనిక వేదికగా మలిచారు."
  },
  {
    id: 5,
    category: "Lord Ganesha",
    categoryTe: "గణేశుడి విశేషాలు",
    questionEn: "What is the vehicle (vahana) of Lord Ganesha?",
    questionTe: "శ్రీ వినాయకుడి పవిత్ర వాహనం ఏమిటి?",
    optionsEn: [
      "Mushika (The Mouse)",
      "Garuda (The Eagle)",
      "Nandi (The Bull)",
      "Mayura (The Peacock)"
    ],
    optionsTe: [
      "మూషికం (ఎలుక)",
      "గరుడుడు (గద్ద)",
      "నంది (ఎద్దు)",
      "మయూరం (నెమలి)"
    ],
    correctAnswer: 0,
    explanationEn: "Lord Ganesha rides the mouse (Mushika), symbolizing mastery over restless desires and the ego that chews away at peace.",
    explanationTe: "మూషిక వాహనం చంచలమైన మనస్సును, అదుపులేని కోరికలను వివేకంతో నియంత్రించవచ్చని సూచిస్తుంది."
  },
  {
    id: 6,
    category: "Ganesh Chaturthi",
    categoryTe: "వినాయక చవితి",
    questionEn: "How many sacred medicinal leaves are traditionally offered during Ganesha 'Patri Pooja'?",
    questionTe: "వినాయక వ్రతంలో సంప్రదాయంగా ఎన్ని రకాల పవిత్ర ఔషధ పత్రులతో పూజ (పత్రి పూజ) చేస్తారు?",
    optionsEn: [
      "21 leaves (Eka-Vimshati Patri)",
      "9 leaves (Nava Patri)",
      "108 leaves (Ashtottara Patri)",
      "5 leaves (Pancha Patri)"
    ],
    optionsTe: [
      "21 పత్రులు (ఏకవింశతి పత్రి పూజ)",
      "9 పత్రులు (నవ పత్రి)",
      "108 పత్రులు (అష్టోత్తర పత్రి)",
      "5 పత్రులు (పంచ పత్రి)"
    ],
    correctAnswer: 0,
    explanationEn: "21 sacred leaves including Machipatri, Bilva, Durva, and Tulasi are offered, each possessing remarkable Ayurvedic medicinal values.",
    explanationTe: "మాచిపత్రి, మారేడు, గరిక, తులసి వంటి 21 రకాల అద్భుత ఔషధ గుణాలున్న పత్రాలతో ఏకవింశతి పత్రి పూజ చేస్తారు."
  },
  {
    id: 7,
    category: "Eco-friendly celebrations",
    categoryTe: "పర్యావరణహిత వేడుకలు",
    questionEn: "What is a 'Seed Ganesha' (Beej Ganapati)?",
    questionTe: "'సీడ్ వినాయకుడు' (Beej Ganapati) అంటే ఏమిటి?",
    optionsEn: [
      "A clay idol embedded with plant seeds that sprouts after immersion",
      "An idol carved completely out of a wooden log",
      "An idol made of plastic beads",
      "An idol imported from foreign gardens"
    ],
    optionsTe: [
      "మట్టిలో విత్తనాలు నిక్షిప్తమైన విగ్రహం - నిమజ్జనం తర్వాత అందమైన మొక్కగా మొలకెత్తుతుంది",
      "చెక్క మొద్దుతో చెక్కిన విగ్రహం",
      "ప్లాస్టిక్ పూసలతో చేసిన విగ్రహం",
      "విదేశాల నుంచి తెచ్చిన విగ్రహం"
    ],
    correctAnswer: 0,
    explanationEn: "Seed Ganeshas are made of natural mud containing seeds. When immersed in a flower pot, they dissolve and grow into a healthy plant.",
    explanationTe: "మట్టి విగ్రహంలో తులసి లేదా పూల విత్తనాలు ఉంచుతారు. కుండీలో నిమజ్జనం చేయగానే కొన్ని రోజుల్లోనే పచ్చని మొక్కగా ఎదుగుతుంది."
  },
  {
    id: 8,
    category: "Lord Ganesha",
    categoryTe: "గణేశుడి విశేషాలు",
    questionEn: "What does the sweet Modak symbolize in Lord Ganesha's hand?",
    questionTe: "వినాయకుడి చేతిలోని తీపి మోదకం దేనికి ప్రతీక?",
    optionsEn: [
      "Divine joy and the supreme sweetness of spiritual wisdom (Brahma-jnana)",
      "A golden weapon of war",
      "Worldly wealth and gold coins",
      "An astronomical compass"
    ],
    optionsTe: [
      "దివ్య ఆనందం మరియు ఆత్మజ్ఞానం యొక్క పరమ మాధుర్యం",
      "యుద్ధంలో వాడే ఒక బంగారు ఆయుధం",
      "భౌతిక సంపద మరియు బంగారు నాణాలు",
      "ఖగోళ దిక్సూచి"
    ],
    correctAnswer: 0,
    explanationEn: "Modak symbolizes eternal bliss ('Moda') and self-realization wrapped in the simple sheath of virtue.",
    explanationTe: "మోదకం అంటే పరమానందం. అంతర్గత ఆధ్యాత్మిక జ్ఞానం మరియు ఆనందాన్ని మోదకం సూచిస్తుంది."
  },
  {
    id: 9,
    category: "Indian culture",
    categoryTe: "భారతీయ సంస్కృతి",
    questionEn: "What grass is considered most sacred and calming when offered to Lord Ganesha?",
    questionTe: "వినాయకుడికి అత్యంత ప్రీతికరమైన, చలువ చేసే పవిత్ర గడ్డి ఏది?",
    optionsEn: [
      "Durva / Garika (Bermuda grass)",
      "Bamboo grass",
      "Lemon grass",
      "Vetiver roots"
    ],
    optionsTe: [
      "దూర్వాంకురాలు / గరిక",
      "వెదురు గడ్డి",
      "లెమన్ గ్రాస్",
      "వట్టి వేళ్ళు"
    ],
    correctAnswer: 0,
    explanationEn: "Durva (21 blades of fresh Bermuda grass) was offered by sages to soothe Lord Ganesha after he swallowed the blazing demon Analasura.",
    explanationTe: "అనలాసురుడనే రాక్షసుడిని సంహరించిన తర్వాత గణపతి శరీర తాపాన్ని తగ్గించడానికి మునులు 21 గరిక పోచలను సమర్పించారు."
  },
  {
    id: 10,
    category: "Eco-friendly celebrations",
    categoryTe: "పర్యావరణహిత వేడుకలు",
    questionEn: "What is the best alternative to lake immersion for students celebrating on campus?",
    questionTe: "కళాశాల ప్రాంగణంలో చెరువులను కలుషితం చేయకుండా విసర్జన చేయడానికి ఉత్తమ మార్గం ఏమిటి?",
    optionsEn: [
      "Bucket/tub immersion on campus, using the clay water for campus garden plants",
      "Leaving the idol in college corridors",
      "Throwing the idol in municipal trash bins",
      "Burning the idol with firecrackers"
    ],
    optionsTe: [
      "క్యాంపస్‌లో బకెట్ లేదా తొట్టిలో నిమజ్జనం చేసి, ఆ మట్టి నీటిని కళాశాల మొక్కలకు పోయడం",
      "విగ్రహాన్ని కాలేజ్ వరండాల్లో వదిలేయడం",
      "చెత్త కుండీలలో విగ్రహాన్ని వేయడం",
      "టపాసులతో విగ్రహాన్ని కాల్చడం"
    ],
    correctAnswer: 0,
    explanationEn: "Bucket immersion dissolves clay peacefully within hours, keeping public water bodies clean and returning nutrients to the soil.",
    explanationTe: "బకెట్ నిమజ్జనం వల్ల నదులు, చెరువులు కలుషితం కావు. ఆ పవిత్ర మట్టి నీటితో కళాశాల ప్రాంగణంలో పచ్చదనం వర్ధిల్లుతుంది."
  }
];
