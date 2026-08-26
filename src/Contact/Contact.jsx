export default function Contact() {
    return (
        <>
            <h1>Kontakt</h1>

            <p className="contact-text">
                Du hast eine Frage, Feedback zu einem meiner Projekte oder
                möchtest einfach mit mir in Kontakt treten?
                Dann kannst du mir gerne eine E-Mail schreiben oder mein
                GitHub-Profil besuchen.
            </p>

             <section className="contact-info">
                <h2>Kontaktinformationen</h2>


            <ul className="link">
                <li>
                    <strong>Email: </strong>
                    <a href="mailto:Sebastian.willman@t-online.de">
                        Sebastian.willman@t-online.de
                    </a>
                </li>

                <li>
                    <strong>Github : </strong>
                    <a href="https://github.com/Seeby24">
                        github.com/Seeby24
                    </a>
                </li>
            </ul>
            </section>

           <section className="contact-message">
            
                <h2>Ich freue mich auf deine Nachricht!</h2>

                <p>
                    Egal ob es um ein Projekt, eine Idee, Feedback oder eine
                    allgemeine Frage geht – ich freue mich über deine Nachricht.
                </p>
            </section>
        </>)
}