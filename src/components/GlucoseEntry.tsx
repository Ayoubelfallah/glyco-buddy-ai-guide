
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface GlucoseEntryProps {
  onAddReading: (value: number, date: Date) => void;
}

export function GlucoseEntry({ onAddReading }: GlucoseEntryProps) {
  const [value, setValue] = useState<string>("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const glucoseValue = parseFloat(value);
    if (!isNaN(glucoseValue) && glucoseValue > 0) {
      onAddReading(glucoseValue, new Date());
      setValue("");
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg">Nouvelle mesure</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            type="number"
            placeholder="Glycémie (mg/dL)"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1"
            step="0.1"
            min="0"
          />
          <Button type="submit" variant="default" size="icon" disabled={!value}>
            <Plus className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
