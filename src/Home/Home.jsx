import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="home-page">
            <h1>Willkommen </h1>

            <p>
                Hallo, ich bin Sebastian. Ich absolviere derzeit eine Ausbildung
                zum Informatiker in Winterthur.
            </p>

            <p>
                Ich interessiere mich besonders für Softwareentwicklung und
                die Entwicklung von Webanwendungen. In meiner Freizeit und
                während meiner Ausbildung arbeite ich an verschiedenen
                Projekten, um neue Ideen auszuprobieren und praktische
                Erfahrungen zu sammeln.
            </p>

            <p>
                Auf dieser Webseite präsentiere ich meine Projekte und
                persönlichen Arbeiten. Hier möchte ich einen Einblick in die
                Dinge geben, an denen ich gearbeitet habe, und zeigen, welche
                Ideen ich umgesetzt habe.
            </p>

            <div className="home-actions">
                <Link to="/projects">Meine Projekte →</Link>
                <Link to="/aboutme">Mehr über mich →</Link>
            </div>
        </div>
    )
}