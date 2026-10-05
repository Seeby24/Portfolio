import SnakeImg from "../pictures/Snake.png"
import SlotImg from "../pictures/Slot_Machine.png"
import BlackjackImg from "../pictures/Blackjack.png"
import TictacttoeImg from "../pictures/Tictactoe_extended.png"
import Tictactoe_normal from "../pictures/Tictactoe_normal.png"
import Sudoku from "../pictures/Sudoku.png"
import SQM from "../pictures/SQM.png"
import Dashboard from "../pictures/Dashboard.png"

export default function Projects() {
    return (
        <>
            <h1>Projekte</h1>
            <p>Hier sieht man alle meine Projekte. Momentan habe ich nur React-Projekte
                aber ich werde noch andere Sprachen ausprobieren.
            </p>
            <div className="projects">
                <div className="project">
                    <img src={SnakeImg} alt="Foto vom Snake Spiel" />
                    <div className="text-box">
                        <h2>Snake Spiel</h2>
                        <span>In diesem Projekt habe ich ein Snake Spiel mit React gemacht</span>
                        <a href="https://github.com/Seeby24/Snake"> Link zu Repo</a>
                    </div>
                </div>

                <div className="project">
                    <img src={SlotImg} alt="Foto vom Slot Spiel" />
                    <div className="text-box">
                        <h2>Slot Maschine</h2>
                        <span>In diesem Projekt habe ich eine Slot Maschine mit React gemacht</span>
                        <a href="https://github.com/Seeby24/Slot_machine"> Link zu Repo</a>
                    </div>
                </div>

                <div className="project">
                    <img src={BlackjackImg} alt="Foto vom Blackjack Spiel" />
                    <div className="text-box">
                        <h2>Blackjack Spiel</h2>
                        <span>In diesem Projekt habe ich ein Blackjack Spiel mit React gemacht</span>
                        <a href="https://github.com/Seeby24/Blackjack"> Link zu Repo</a>
                    </div>
                </div>

                <div className="project">
                    <img src={Tictactoe_normal} alt="Foto vom Tictactoe Spiel" />
                    <div className="text-box">
                        <h2>Tictactoe</h2>
                        <span>In diesem Projekt habe ich ein normales Tictactoe in react gemacht</span>
                        <a href="https://github.com/Seeby24/TicTacToe_extended"> Link zu Repo</a>
                    </div>
                </div>

                <div className="project">
                    <img src={TictacttoeImg} alt="Foto vom Tictactoe Spiel" />
                    <div className="text-box">
                        <h2>Tictactoe Erweitert</h2>
                        <span>In diesem Projekt habe ich ein erweitertes Tictactoe mit React gemacht</span>
                        <a href="https://github.com/Seeby24/TicTacToe_extended"> Link zu Repo</a>
                    </div>
                </div>

                <div className="project">
                    <img src={Sudoku} alt="Foto vom Sudoku Spiel" />
                    <div className="text-box">
                        <h2>Sudoku</h2>
                        <span>In diesem Projekt habe ich ein Sudoku mit React gemacht</span>
                        <a href="https://github.com/Seeby24/SudokuAPI"> Link zu Repo</a>
                    </div>
                </div>

                <div className="project">
                    <img src={SQM} alt="Foto von der SideQuestMAxxing App" />
                    <div className="text-box">
                        <h2>SideQuestMaxxing</h2>
                        <span>In diesem Projekt habe ich eine moile App mit react native gemacht</span>
                        <a href="https://github.com/Seeby24/SideQuestMaxxing"> Link zu Repo</a>
                    </div>
                </div>

                <div className="project">
                    <img src={Dashboard} alt="Foto von der Dashboard Applikation" />
                    <div className="text-box">
                        <h2>Dashboard (Nicht fertig)</h2>
                        <span>In diesem Projekt mache ich ein Dashboard für die Schule mit react & express</span>
                        <a href="https://github.com/Seeby24/Dashboard"> Link zu Repo</a>
                    </div>
                </div>


            </div>
        </>
    )
}

