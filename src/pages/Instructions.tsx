
import Layout from "@/components/Layout";

const Instructions = () => {
  return (
    <Layout>
      <div className="container px-4 py-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center text-glucose-default">Instructions</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">Suivi de la glycémie</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>
                Utilisez la page d'accueil pour enregistrer vos mesures de glycémie.
                Entrez la valeur en mg/dL et appuyez sur le bouton + pour l'ajouter.
              </p>
              <p>
                Le graphique vous aidera à visualiser les tendances de votre glycémie tout au long de la journée.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-2">Lecture des résultats</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Les valeurs de glycémie sont codées par couleur :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li className="text-glucose-low">Rouge : Glycémie basse (&lt; 70 mg/dL)</li>
                <li className="text-glucose-normal">Vert : Glycémie normale (70-180 mg/dL)</li>
                <li className="text-glucose-high">Orange : Glycémie élevée (&gt; 180 mg/dL)</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-2">Assistant IA</h2>
            <p className="text-muted-foreground">
              L'assistant IA peut répondre à vos questions concernant le diabète, la nutrition
              et la gestion de votre glycémie. Cette fonctionnalité est en cours de développement.
            </p>
          </section>
          
          <section className="bg-secondary p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Important</h2>
            <p className="text-muted-foreground">
              Cette application est un outil de suivi et ne remplace pas les conseils
              médicaux professionnels. Consultez toujours votre médecin pour les décisions
              concernant votre traitement.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Instructions;
