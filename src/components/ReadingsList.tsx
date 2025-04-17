
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReadingData } from "./GlucoseChart";
import { cn } from "@/lib/utils";

interface ReadingsListProps {
  readings: ReadingData[];
}

export function ReadingsList({ readings }: ReadingsListProps) {
  // Get color class based on glucose level
  const getColorClass = (value: number) => {
    if (value < 70) return "text-glucose-low"; // Low
    if (value > 180) return "text-glucose-high"; // High
    return "text-glucose-normal"; // Normal
  };

  // Format date for display
  const formatDateTime = (date: Date) => {
    return date.toLocaleString([], {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Historique des mesures</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        {readings.length === 0 ? (
          <p className="text-center text-muted-foreground py-4 px-6">
            Aucune mesure enregistrée
          </p>
        ) : (
          <ul className="divide-y">
            {[...readings].reverse().map((reading, index) => (
              <li key={index} className="px-6 py-3 flex justify-between items-center">
                <span>{formatDateTime(reading.date)}</span>
                <span className={cn("font-semibold", getColorClass(reading.value))}>
                  {reading.value} mg/dL
                </span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
