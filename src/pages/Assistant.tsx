
import { useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  content: string;
  isUser: boolean;
}

const Assistant = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Bonjour ! Je suis votre assistant IA pour vous aider à gérer votre diabète. Comment puis-je vous aider aujourd'hui ?",
      isUser: false
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { content: input, isUser: true }]);
    
    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          content: "Dans cette version de démonstration, je ne peux pas encore répondre à vos questions. Cette fonctionnalité sera disponible dans une prochaine mise à jour.", 
          isUser: false 
        }
      ]);
    }, 1000);
    
    setInput("");
  };

  return (
    <Layout>
      <div className="container flex flex-col h-[calc(100vh-4rem)] px-4 pt-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center text-glucose-default">Assistant IA</h1>
        
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "rounded-lg p-3 max-w-[80%]",
                message.isUser 
                  ? "bg-glucose-default text-white ml-auto" 
                  : "bg-secondary mr-auto"
              )}
            >
              {message.content}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Posez une question..."
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={!input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Assistant;
