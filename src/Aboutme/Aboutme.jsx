export default function Aboutme() {
    return (
        <main>
            <h1>Über mich</h1>
            <p>
                Ich bin 17 Jahre alt und besuche seit dem Sommer 2024 die
                Informatikmittelschule in Winterthur. Schon seit einigen Jahren
                interessiere ich mich für das Programmieren. Aus diesem Grund
                habe ich mich entschieden, meine schulische Laufbahn in Richtung
                Informatik zu gestalten.
            </p>

            <p>
                Während meiner Ausbildung konnte ich bereits erste praktische
                Erfahrungen in verschiedenen Bereichen der Informatik sammeln.
                Besonders spannend finde ich die Entwicklung von
                Webanwendungen und die Arbeit mit React. Dabei gefällt mir vor
                allem, eigene Ideen umzusetzen und direkt zu sehen, wie aus
                einer Idee eine funktionierende Anwendung entsteht.
            </p>

            <p>
                Neben React habe ich bereits mit Java, JavaScript, HTML, CSS,
                Python und SQL gearbeitet. Ich beherrsche noch nicht alle
                Technologien perfekt, bin aber motiviert, meine Kenntnisse
                zu erweitern und neue Technologien
                kennenzulernen.
            </p>
            <p>
                In der Schule und in meiner Freizeit habe ich mich mit folgenden Technologien
                bekannt gemacht:
            </p>

            <section className="technologies">
                <h2>Technologien</h2>
                    <h3> Frontend</h3>
                    <div className="technology-list">
                        <span>JavaScript</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>React</span>
                        <span>Bootstrap</span>

                    </div>

                    <h3> Backend</h3>
                    <div className="technology-list">
                        <span>Java</span>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>Python</span>
                        <span>Spring Boot</span>
                    </div>

                    <h3> Datenbanken</h3>
                    <div className="technology-list">
                        <span>MYSQL</span>
                        <span>MongoDB</span>
                    </div>

                     <h3> Deployment & Cloud</h3>
                    <div className="technology-list">
                        <span>Docker</span>
                        <span>Nginx</span>
                        <span>Github-Pages</span>
                        <span>AWS</span>
                        <span>Kubernetes</span>
                        <span>OpenShift</span>
                    </div>

                     <h3> Tools</h3>
                    <div className="technology-list">
                        <span>GitHub</span>
                        <span>Git</span>
                        <span>ESLint</span>
                        <span>Postman</span>
                        <span>npm</span> 
                    </div>

            </section>

        </main>
    )
}