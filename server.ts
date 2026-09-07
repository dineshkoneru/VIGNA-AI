import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// API health route
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    time: new Date().toISOString(),
  });
});

// Fallback intelligent responses for Ganesh AI when Gemini API key is unavailable
function getIntelligentFallback(message: string, language: string): string {
  const msg = message.toLowerCase();
  const isTelugu = language === "te" || /[\u0C00-\u0C7F]/.test(message);

  if (isTelugu) {
    if (msg.includes("ఎందుకు") || msg.includes("చవితి") || msg.includes("కారణం")) {
      return "వినాయక చవితి (గణేశ చతుర్థి) భాద్రపద శుద్ధ చతుర్థి నాడు జరుపుకుంటారు. శివపార్వతుల పుత్రుడైన విఘ్నేశ్వరుడు జన్మించిన పవిత్ర దినమిది. సమస్త విఘ్నాలను తొలగించి, జ్ఞానం మరియు సమృద్ధిని ప్రసాదించే ఆదిదేవుడిగా గణేశుడిని పూజిస్తారు.";
    }
    if (msg.includes("కథ") || msg.includes("పుట్టుక")) {
      return "పార్వతీదేవి తన నలుగు పిండితో ఒక బాలుడి రూపాన్ని తీర్చిదిద్ది, ప్రాణం పోసింది. పరమశివుడు వచ్చినప్పుడు ఆయనను లోపలికి అనుమతించకపోవడంతో జరిగిన యుద్ధంలో బాలుడి శిరస్సు తొలగింపబడింది. అనంతరం పార్వతీదేవి కోరిక మేరకు గజముఖాన్ని (ఏనుగు తల) అమర్చి, విఘ్నాధిపతిగా వరమిచ్చారు.";
    }
    if (msg.includes("పర్యావరణ") || msg.includes("మట్టి") || msg.includes("eco")) {
      return "పర్యావరణహితంగా జరుపుకునేందుకు ముఖ్య సూచనలు:\n1. సహజ మట్టి (క్లే) వినాయక ప్రతిమలనే వాడండి.\n2. కెమికల్ రంగుల బదులు పసుపు, కుంకుమ, సహజ రంగులు ఉపయోగించండి.\n3. ప్లాస్టిక్ మరియు థర్మోకోల్ డెకరేషన్ నివారించండి.\n4. బకెట్ లేదా ఇంట్లోనే చిన్న నీటి కుండీలో నిమజ్జనం చేసి, ఆ మట్టిని మొక్కలకు వాడండి.";
    }
    if (msg.includes("మోదకం") || msg.includes("కుడుములు") || msg.includes("ప్రసాదం")) {
      return "మోదకం వినాయకుడికి అత్యంత ప్రీతికరమైన నైవేద్యం. బియ్యప్పిండితో తయారై, లోపల బెల్లం, కొబ్బరి మరియు యాలకుల మిశ్రమం ఉంటుంది. ఇది ఆధ్యాత్మికంగా అంతర్గత ఆనందానికి మరియు జ్ఞానానికి ప్రతీకగా చెబుతారు.";
    }
    return "నమస్కారం! నేను గణేష్ AI, మీ పండుగ సహాయకుడిని. వినాయక చవితి విశిష్టత, పూజా విధానం, పర్యావరణహిత పద్ధతులు మరియు మన కళాశాల వేడుకల గురించి ఏదైనా అడగవచ్చు!";
  }

  // English fallbacks
  if (msg.includes("why") || msg.includes("celebrate") || msg.includes("reason")) {
    return "Ganesh Chaturthi is celebrated on Shukla Chaturthi of the Hindu month of Bhadrapada to commemorate the arrival or rebirth of Lord Ganesha from Mount Kailash with Goddess Parvati. Ganesha is revered as the remover of obstacles (Vighnaharta), the deity of intellect, new beginnings, and prosperity.";
  }
  if (msg.includes("story") || msg.includes("origin") || msg.includes("birth")) {
    return "According to tradition, Goddess Parvati created Ganesha from turmeric/clay paste to guard her chamber while she bathed. When Lord Shiva arrived, Ganesha faithfully followed his mother's command and barred Shiva. In the resulting conflict, Shiva severed the boy's head. Seeing Parvati's grief, Shiva promised to restore him with the head of the first living creature found facing north—an elephant. Shiva bestowed him with the title 'Ganapati' (Lord of all celestial groups).";
  }
  if (msg.includes("eco") || msg.includes("green") || msg.includes("environment") || msg.includes("clay")) {
    return "Ways to celebrate an Eco-Friendly Ganesh Chaturthi:\n1. **Natural Clay Idols (Mitti Ke Ganesh)**: Free of Plaster of Paris (PoP), dissolving cleanly in water.\n2. **Plant-a-Ganesha**: Seed idols that sprout into flowering plants after immersion.\n3. **Natural Colors**: Turmeric, beetroot, multani mitti instead of toxic chemical paints.\n4. **Bucket Immersion**: Visarjan in clean water buckets at home or college gardens to nurture soil.\n5. **Biodegradable Decor**: Fresh marigolds, mango leaves, and paper diyas instead of thermocol.";
  }
  if (msg.includes("modak") || msg.includes("prasad") || msg.includes("food")) {
    return "Modak is Lord Ganesha's favorite sweet. Traditionally prepared with steamed rice flour dumpling stuffed with grated fresh coconut, jaggery, nutmeg, and cardamom. Symbolically, the outer rice sheath represents worldly life, while the sweet jaggery core symbolizes divine self-realization and blissful wisdom.";
  }
  if (msg.includes("facts") || msg.includes("interesting") || msg.includes("trivia")) {
    return "Interesting facts about Lord Ganesha:\n1. **Ekadanta**: He broke his own tusk to use as a stylus when writing the epic Mahabharata as sage Vyasa dictated.\n2. **Mushakavaahana**: His humble mount, the mouse (Krauncha), represents conquering ego, desire, and restlessness.\n3. **Prathama Pujya**: Lord Ganesha received the boon of being worshipped first before any ritual, festival, or new journey.";
  }

  return "Namaste! I am GANESH AI, your festival companion. I am here to assist you with Lord Ganesha's stories, festival traditions, eco-friendly celebration ideas, rituals, and our college celebration schedule. How may I guide you today?";
}

// AI Chat endpoint using @google/genai
app.post("/api/chat", async (req, res) => {
  try {
    const { message, language = "en", history = [] } = req.body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Message cannot be empty." });
    }

    const trimmedMessage = message.trim();
    const apiKey = process.env.GEMINI_API_KEY;

    // Check if API key is provided and valid
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      // Fallback with intelligent, respectful response
      const fallbackReply = getIntelligentFallback(trimmedMessage, language);
      return res.json({
        reply: fallbackReply,
        source: "curated_assistant",
      });
    }

    // Initialize GoogleGenAI SDK lazily as recommended
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const langInstruction =
      language === "te"
        ? "Respond in natural, respectful Telugu (తెలుగు). If technical or English terms are helpful, you can provide them in parentheses."
        : "Respond in English.";

    const systemInstruction = `You are GANESH AI, a friendly, warm, and respectful AI assistant created for our college Ganesh Chaturthi celebration.
You specialize in:
- Ganesh Chaturthi festival traditions, rituals, and cultural significance.
- Stories and symbolism of Lord Ganesha (Vighnaharta, Ekadanta, Gajanana, Buddhi-pradata).
- Eco-friendly celebrations (clay idols, organic colors, bucket visarjan, reducing plastic/thermocol waste).
- Traditional recipes and prasadham (Modak, Kudumulu, Sundal, Puran Poli).
- Encouraging college student unity, eco-consciousness, and joyful festive spirit.

Personality Guidelines:
- Tone: Friendly, respectful, cheerful, and helpful.
- Simple, engaging, and clear for college students and visitors.
- Culturally respectful; do not make unsupported religious claims. When appropriate, acknowledge that regional traditions vary across Andhra Pradesh, Telangana, Maharashtra, Karnataka, and other parts of India.
- Keep answers concise, structured, and easy to read unless the user specifically asks for in-depth stories or details.
- Always use the requested language: ${langInstruction}`;

    // Format chat history for context
    const chatContents: any[] = [];
    if (Array.isArray(history)) {
      // Keep recent 6 messages to stay concise and relevant
      const recent = history.slice(-6);
      for (const item of recent) {
        if (item.sender === "user") {
          chatContents.push({ role: "user", parts: [{ text: item.text }] });
        } else if (item.sender === "ai") {
          chatContents.push({ role: "model", parts: [{ text: item.text }] });
        }
      }
    }

    // Add current user prompt
    chatContents.push({ role: "user", parts: [{ text: trimmedMessage }] });

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: chatContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const text = response.text || getIntelligentFallback(trimmedMessage, language);
    return res.json({ reply: text, source: "gemini" });
  } catch (error: any) {
    console.error("Gemini API error:", error?.message || error);
    // Graceful fallback to avoid leaving user hanging
    const fallback = getIntelligentFallback(req.body?.message || "", req.body?.language || "en");
    return res.json({
      reply: fallback,
      source: "fallback_on_error",
      note: "Answered via knowledge base while connecting to AI service.",
    });
  }
});

// Start server with Vite middleware in dev or static serving in prod
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Ganesh AI server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
