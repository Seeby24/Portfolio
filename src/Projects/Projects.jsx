import SnakeImg from "../pictures/Snake.png"
import SlotImg from "../pictures/Slot_Machine.png"
import BlackjackImg from "../pictures/Blackjack.png"
import TictacttoeImg from "../pictures/Tictactoe_extended.png"
import Tictactoe_normal from "../pictures/Tictactoe_normal.png"

export default function Projects() {
    return (
        <>
            <h1>Projekte</h1>
            <div className="projects">
                <p>Hier sieht man alle meine Projekte. Momentan habe ich nur React-Projekte
                    aber ich werde noch andere Sprachen ausprobieren. </p>
                <div className="project">
                    <img src={SnakeImg} alt="Foto vom Snake Spiel"/>
                    <div className="text-box">
                        <h2>Snake Spiel</h2>
                        <span>In diesem Projekt habe ich ein Snake Spiel mit React gemacht</span>
                        <a href="https://github.com/Seeby24/Snake"> Link zu Repo</a>
                    </div>
                </div>

                <div className="project">
                    <img src={SlotImg} alt="Foto vom Slot Spiel"/>
                    <div className="text-box">
                        <h2>Slot Maschine</h2>
                        <span>In diesem Projekt habe ich eine Slot Maschine mit React gemacht</span>
                        <a href="https://github.com/Seeby24/Slot_machine"> Link zu Repo</a>
                    </div>
                </div>

                <div className="project">
                    <img src={BlackjackImg} alt="Foto vom Blackjack Spiel"/>
                    <div className="text-box">
                        <h2>Blackjack Spiel</h2>
                        <span>In diesem Projekt habe ich ein Blackjack Spiel mit React gemacht</span>
                        <a href="https://github.com/Seeby24/Blackjack"> Link zu Repo</a>
                    </div>
                </div>

                <div className="project">
                    <img src={Tictactoe_normal} alt="Foto vom Tictactoe Spiel"/>
                    <div className="text-box">
                        <h2>Tictactoe</h2>
                        <span>In diesem Projekt habe ich ein normales Tictactoe in react gemacht</span>
                        <a href="https://github.com/Seeby24/TicTacToe_extended"> Link zu Repo</a>
                    </div>
                </div>

                <div className="project">
                    <img src={TictacttoeImg} alt="Foto vom Tictactoe Spiel"/>
                    <div className="text-box">
                        <h2>Tictactoe</h2>
                        <span>In diesem Projekt habe ich ein erweitertes Tictactoe mit React gemacht</span>
                        <a href="https://github.com/Seeby24/TicTacToe_extended"> Link zu Repo</a>
                    </div>
                </div>


            </div>
        </>
    )
}

