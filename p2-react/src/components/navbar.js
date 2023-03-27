import React from "react";


export function Navbar(props) {
    return <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>

                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Quizholic</a>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">

                            <a className="nav-link active" aria-current="page" href="#">Home</a>

                        </li>
                        <li className="nav-item">

                            <a className="nav-link" href="#">Do a Quiz</a>

                        </li>
                        <li className="nav-item">

                            <a className="nav-link" href="/createQuiz">Create a Quiz</a>

                        </li>
                    </ul>
                    <form className="d-flex">

                        <input className="form-control me-2" type="search" placeholder="Search for a quiz" aria-label="Search" />

                        <button className="btn btn-outline-success" type="submit">Search</button>

                    </form>
                </div>
            </div>
        </nav>

    </React.Fragment>



}