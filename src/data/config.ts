// Central Configuration for GANESH AI and College Festival Celebrations

export const FESTIVAL_CONFIG = {
  // Target date for Ganesh Chaturthi 2026 (Bhadrapada Shukla Chaturthi falls around mid-September 2026)
  targetDate: "2026-09-14T08:00:00+05:30",
  festivalYear: "2026",
  festivalNameEn: "Ganesh Chaturthi 2026",
  festivalNameTe: "వినాయక చవితి 2026",
  
  // Editable College Celebration Placeholders
  collegeInfo: {
    collegeNameEn: "[College Name] Institute of Technology & Science",
    collegeNameTe: "[కళాశాల పేరు] ఇన్స్టిట్యూట్ ఆఫ్ టెక్నాలజీ",
    departmentEn: "Department of Computer Science & Student Cultural Union",
    departmentTe: "కంప్యూటర్ సైన్స్ విభాగం & సాంస్కృతిక కమిటీ",
    venueEn: "Campus Central Amphitheater & College Quadrangle",
    venueTe: "క్యాంపస్ సెంట్రల్ యాంఫీథియేటర్ & క్వాడ్రాంగిల్",
    celebrationDatesEn: "September 14 - September 18, 2026 (5-Day Grand Fest)",
    celebrationDatesTe: "సెప్టెంబర్ 14 - సెప్టెంబర్ 18, 2026 (5 రోజుల మహోత్సవం)",
    pandalThemeEn: "Eco-Friendly Prakriti Ganesha & Tech-Infused Devotion",
    pandalThemeTe: "పర్యావరణహిత ప్రకృతి గణేష & సాంకేతిక భక్తి వైభవం",
    
    // Annaprasadham (Feast)
    annaprasadham: {
      timeEn: "Daily 12:30 PM - 2:30 PM & Grand Bhandara on Day 5",
      timeTe: "ప్రతిరోజూ మధ్యాహ్నం 12:30 నుండి 2:30 వరకు & 5వ రోజు మహా అన్నప్రసాదం",
      menuEn: "Ghee Puliyogare (Tamarind Rice), Bellam Pongali (Sweet Jaggery Rice), Steamed Modaks, Curd Rice & Laddu",
      menuTe: "నెయ్యి పులిహోర, బెల్లం పొంగలి, ఆవిరి కుడుములు / మోదకాలు, దద్దోజనం & తిరుపతి లడ్డు",
      venueEn: "College Dining Hall Ground & Garden Pavilion",
      venueTe: "కళాశాల డైనింగ్ హాల్ & గార్డెన్ పెవిలియన్",
      volunteerContact: "Student Council Helpdesk: ext. 402 / cultural@college.edu",
    },
    
    // Visarjan (Immersion)
    visarjan: {
      dateEn: "Day 5 - September 18, 2026 at 4:30 PM",
      dateTe: "5వ రోజు - సెప్టెంబర్ 18, 2026 సాయంత్రం 4:30 గంటలకు",
      processionRouteEn: "Main College Gate ➔ Department Block ➔ Sports Ground Eco-Pond",
      processionRouteTe: "ప్రధాన గేట్ ➔ డిపార్ట్‌మెంట్ బ్లాక్ ➔ స్పోర్ట్స్ గ్రౌండ్ ఎకో-పాండ్",
      highlightEn: "Traditional Dhol-Tasha troop by students, herbal gulal, and zero-pollution campus lake immersion.",
      highlightTe: "విద్యార్థుల సాంప్రదాయ ధోల్-తాషా, ఆర్గానిక్ గులాల్, మరియు పర్యావరణ పరిరక్షణతో కూడిన నిమజ్జనం.",
    },

    // Daily Schedule
    events: [
      {
        id: "ev-1",
        time: "08:30 AM",
        titleEn: "Ganapati Prana Pratishtha & Maha Pooja",
        titleTe: "గణపతి ప్రాణ ప్రతిష్ఠ & మహా పూజ",
        venueEn: "Central Pandal",
        venueTe: "సెంట్రల్ మండపం",
        descriptionEn: "Vedic chants, student welcome aarti, and distribution of Modak prasadham.",
        descriptionTe: "వేద మంత్రోచ్ఛారణలు, విద్యార్థుల హారతి మరియు మోదక ప్రసాద వితరణ.",
      },
      {
        id: "ev-2",
        time: "11:00 AM",
        titleEn: "Clay Ganesha Making Workshop & Eco-Contest",
        titleTe: "మట్టి గణపతి తయారీ వర్క్‌షాప్ & పోటీ",
        venueEn: "Open Air Auditorium",
        venueTe: "ఓపెన్ ఎయిర్ ఆడిటోరియం",
        descriptionEn: "Hands-on idol crafting workshop with natural red clay and organic seeds embedded inside.",
        descriptionTe: "సహజ మట్టితో విగ్రహాల తయారీ మరియు సీడ్ గణేష్ తయారీ విధానం.",
      },
      {
        id: "ev-3",
        time: "02:30 PM",
        titleEn: "College Cultural Fest: Devotional Music & Classical Dance",
        titleTe: "కళాశాల కల్చరల్ ఫెస్ట్: భక్తి సంగీతం & శాస్త్రీయ నృత్యం",
        venueEn: "Main Auditorium",
        venueTe: "మెయిన్ ఆడిటోరియం",
        descriptionEn: "Performances by college music band, classical bharatanatyam, and ganesh sloka recitations.",
        descriptionTe: "కాలేజ్ మ్యూజిక్ బ్యాండ్, భరతనాట్యం మరియు గణేశ స్తోత్ర పఠనం.",
      },
      {
        id: "ev-4",
        time: "06:30 PM",
        titleEn: "Maha Sandhya Deepotsav & 108 Diya Aarti",
        titleTe: "మహా సంధ్యా దీపోత్సవం & 108 దివ్య హారతి",
        venueEn: "Central Pandal",
        venueTe: "సెంట్రల్ మండపం",
        descriptionEn: "Illuminating campus with 1000 clay oil lamps and student choir singing Sukhkarta Dukhharta.",
        descriptionTe: "మట్టి ప్రమిదల వెలుగుల్లో 108 దివ్య హారతి మరియు భక్తి సంకీర్తన.",
      },
    ],
  },
};
