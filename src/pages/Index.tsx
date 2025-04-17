
import { useState } from "react";
import Layout from "@/components/Layout";
import { GlucoseEntry } from "@/components/GlucoseEntry";
import { GlucoseChart, type ReadingData } from "@/components/GlucoseChart";
import { ReadingsList } from "@/components/ReadingsList";

const Index = () => {
  const [readings, setReadings] = useState<ReadingData[]>([]);

  const handleAddReading = (value: number, date: Date) => {
    setReadings(prev => [...prev, { value, date }]);
  };

  return (
    <Layout>
      <div className="container px-4 py-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center text-glucose-default">GlycoBuddy</h1>
        
        <GlucoseEntry onAddReading={handleAddReading} />
        <GlucoseChart data={readings} />
        <ReadingsList readings={readings} />
      </div>
    </Layout>
  );
};

export default Index;
