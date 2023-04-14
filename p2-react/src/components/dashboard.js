import React from "react";
import { Navbar } from "./navbar";
import carouselOne from "../images/carousel-1.jpg"
import carouselTwo from "../images/carousel-2.jpg"
import carouselThree from "../images/carousel-3.jpg"
import "../App.css"

export default function Dashboard() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="mb-5" id="carousel">
                <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ height: "70%" }}>
                    <div className="carousel-inner" style={{ height: "100%" }}>
                        <div className="carousel-item active ">
                      
                            <img src={carouselOne} className="d-block" alt="https://picsum.photos/200/300" style={{
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: '100%',
                                width: '100%'
                            }} />
                         
                        </div>
                        <div className="carousel-item">
                            <img src={carouselTwo} className="d-block" alt="https://picsum.photos/200/300" style={{
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "100%",
                                width: '100%'
                            }} />
                            

                         
                        </div>
                        <div className="carousel-item">
                            <img src={carouselThree} className="d-block" alt="https://picsum.photos/200/300" style={{
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "100%",
                                width: '100%'
                            }} />
                        
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="intro container d-flex flex-column justify-content-center align-item-center text-center mt-3 p-3 wannabeContainer" id="info">
                <h2 className="mb-3">A Wannabe</h2>
                <p>Welcome to our Quiz App, designed to challenge and engage students like you! With a wide range of topics and difficulty levels, you'll have the opportunity to test your knowledge and learn new information in a fun and interactive way.</p>

                    <p>Whether you're studying for an upcoming exam or just looking for a way to exercise your brain, our Quiz App has something for everyone. From history and science to literature and pop culture, our quizzes cover a variety of subjects to keep you engaged and entertained.</p>

                    <p>So what are you waiting for? Download our Quiz App today and start exploring the exciting world of knowledge!</p>

            </div>
            </div>
           
        </React.Fragment>

    );
}