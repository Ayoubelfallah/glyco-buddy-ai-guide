
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export interface ReadingData {
  value: number;
  date: Date;
}

interface GlucoseChartProps {
  data: ReadingData[];
}

export function GlucoseChart({ data }: GlucoseChartProps) {
  // Format data for the chart
  const chartData = data.map((reading) => ({
    time: reading.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    value: reading.value,
    date: reading.date
  }));
  
  // Determine color based on glucose value
  const getValueColor = (value: number) => {
    if (value < 70) return "#EF4444"; // Low - red
    if (value > 180) return "#F59E0B"; // High - orange
    return "#10B981"; // Normal - green
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg">Évolution de la glycémie</CardTitle>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            Aucune donnée disponible. Ajoutez votre première mesure.
          </p>
        ) : (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="time" tick={{ fontSize: 12 }} />
              <YAxis domain={['dataMin - 10', 'dataMax + 10']} tick={{ fontSize: 12 }} />
              <Tooltip
                formatter={(value: number) => [`${value} mg/dL`, 'Glycémie']}
                labelFormatter={(label) => `Heure: ${label}`}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3B82F6"
                strokeWidth={2}
                activeDot={{ r: 8, fill: "#3B82F6" }}
                dot={{ r: 4, fill: "#3B82F6" }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
