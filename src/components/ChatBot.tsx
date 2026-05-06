import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";

type Step = "dienst" | "type" | "urgentie" | "gemeente" | "naam" | "telefoon" | "done";
interface Message { from: "bot" | "user"; text: string; }

const DIENSTEN = ["Bedrijfshal bouwen", "Staalconstructie", "Loods of magazijn", "Sandwichpanelen", "Gevelrenovatie", "Prijsvraag"];
const TYPE_KLANT = ["Particulier", "Bedrijf"];
const URGENTIE = ["Ja, zo snel mogelijk", "Nee, geen haast"];

const Bubble = ({ m }: { m: Message }) => (
  <div className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
    <div className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${m.from === "bot" ? "rounded-tl-sm" : "text-white rounded-tr-sm"}`}
      style={m.from === "bot" ? { background: "hsl(215 15% 93%)", color: "hsl(215 25% 12%)" } : { background: "hsl(215 40% 14%)" }}>
      {m.text}
    </div>
  </div>
);

const Choices = ({ options, onSelect, cols = 2 }: { options: string[]; onSelect: (v: string) => void; cols?: 1 | 2 }) => (
  <div className={`grid gap-2 ${cols === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
    {options.map((o) => (
      <button key={o} onClick={() => onSelect(o)} className="rounded-xl border border-border bg-card px-3 py-2.5 text-xs font-medium text-foreground hover:border-accent hover:text-accent transition-colors text-left">
        {o}
      </button>
    ))}
  </div>
);

export const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [autoOpened, setAutoOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<Step>("dienst");
  const [input, setInput] = useState("");
  const [started, setStarted] = useState(false);
  const lead = useRef({ dienst: "", type: "", gemeente: "", naam: "" });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!autoOpened) {
      const t = setTimeout(() => { setOpen(true); setAutoOpened(true); }, 3000);
      return () => clearTimeout(t);
    }
  }, [autoOpened]);

  useEffect(() => {
    if (open && !started) {
      setStarted(true);
      setTimeout(() => {
        setMessages([{ from: "bot", text: "Goeiedag! 👋 Ik ben Tim van Bradico. Waarvoor wil u een offerte aanvragen?" }]);
      }, 350);
    }
  }, [open, started]);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => {
    if (step === "gemeente" || step === "naam" || step === "telefoon")
      setTimeout(() => inputRef.current?.focus(), 100);
  }, [step]);

  const addBot = (t: string) => setMessages((p) => [...p, { from: "bot", text: t }]);
  const addUser = (t: string) => setMessages((p) => [...p, { from: "user", text: t }]);
  const delay = (fn: () => void) => setTimeout(fn, 380);

  const handleDienst = (d: string) => { lead.current.dienst = d; addUser(d); delay(() => { addBot("Vraagt u als particulier of vanuit een bedrijf?"); setStep("type"); }); };
  const handleType = (t: string) => { lead.current.type = t; addUser(t); delay(() => { addBot("Heeft u een deadline of timing in gedachten?"); setStep("urgentie"); }); };
  const handleUrgentie = (u: string) => { addUser(u); delay(() => { addBot("In welke gemeente is het project gelegen?"); setStep("gemeente"); }); };

  const handleSubmit = () => {
    const val = input.trim(); if (!val) return; setInput("");
    if (step === "gemeente") { lead.current.gemeente = val; addUser(val); delay(() => { addBot("En hoe mag ik u noemen?"); setStep("naam"); }); }
    else if (step === "naam") { lead.current.naam = val; addUser(val); delay(() => { addBot(`Fijn, ${val}! Op welk nummer mogen we u terugbellen?`); setStep("telefoon"); }); }
    else if (step === "telefoon") {
      addUser(val);
      delay(() => {
        addBot(`Bedankt, ${lead.current.naam}! We nemen zo snel mogelijk contact op voor uw ${lead.current.dienst.toLowerCase()} in ${lead.current.gemeente}. Tot snel! 🙏`);
        setStep("done");
      });
    }
  };

  const placeholder = step === "gemeente" ? "Bijv. Hasselt, Genk..." : step === "naam" ? "Uw naam" : "Uw telefoonnummer";
  const showInput = step === "gemeente" || step === "naam" || step === "telefoon";

  return (
    <>
      {open && (
        <div className="fixed right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col bg-white" style={{ bottom: "5.5rem", maxHeight: "500px" }}>
          <div className="flex items-center justify-between px-4 py-3 shrink-0" style={{ background: "hsl(215 40% 14%)" }}>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-9 w-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: "hsl(28 85% 52%)", color: "#fff" }}>T</div>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2" style={{ background: "#4ade80", borderColor: "hsl(215 40% 14%)" }} />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">Tim van Bradico</p>
                <p className="text-white/55 text-xs">Reageert snel</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors" aria-label="Sluit chat"><X className="h-5 w-5" /></button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2.5" style={{ background: "hsl(30 10% 97%)" }}>
            {messages.map((m, i) => <Bubble key={i} m={m} />)}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t bg-white px-3 py-3 shrink-0">
            {step === "dienst" && <Choices options={DIENSTEN} onSelect={handleDienst} />}
            {step === "type" && <Choices options={TYPE_KLANT} onSelect={handleType} cols={1} />}
            {step === "urgentie" && <Choices options={URGENTIE} onSelect={handleUrgentie} cols={1} />}
            {showInput && (
              <div className="flex gap-2">
                <input ref={inputRef} type={step === "telefoon" ? "tel" : "text"} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSubmit()} placeholder={placeholder} className="flex-1 rounded-xl border border-border bg-secondary px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors" />
                <button onClick={handleSubmit} className="rounded-xl px-3 py-2.5 text-white transition-opacity hover:opacity-90" style={{ background: "hsl(28 85% 52%)" }} aria-label="Verstuur"><Send className="h-4 w-4" /></button>
              </div>
            )}
            {step === "done" && <p className="text-center text-xs text-muted-foreground py-1">We contacteren u zo snel mogelijk.</p>}
          </div>
        </div>
      )}

      <button onClick={() => setOpen((o) => !o)} className="fixed right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elegant transition-all hover:scale-110 active:scale-95 lg:bottom-5" style={{ bottom: "5.5rem", background: "hsl(215 40% 14%)" }} aria-label="Open chat Bradico">
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </>
  );
};
