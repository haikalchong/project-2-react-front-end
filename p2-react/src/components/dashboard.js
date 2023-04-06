import React from "react";
import { Navbar } from "./navbar";

export default function Dashboard() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="mb-5">
                <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel" style={{ height: "80vh" }}>
                    <div className="carousel-inner" style={{ height: "100%" }}>
                        <div className="carousel-item active">
                            <img src="https://picsum.photos/1920/1080" className="d-block" alt="https://picsum.photos/200/300" style={{
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "100%",
                                width: 'auto'
                            }} />
                         
                        </div>
                        <div className="carousel-item">
                            <img src="https://picsum.photos/1920/1080" className="d-block" alt="https://picsum.photos/200/300" style={{
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "100%",
                                width: 'auto'
                            }} />

                         
                        </div>
                        <div className="carousel-item">
                            <img src="https://picsum.photos/1920/1080" className="d-block" alt="https://picsum.photos/200/300" style={{
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "100%",
                                width: 'auto'
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
            </div>
            <div className="intro container d-flex flex-column justify-content-center align-item-center text-center ">
                <h2 className="mb-3">A Wannabe</h2>
                <p>Welcome to our Quiz App, designed to challenge and engage students like you! With a wide range of topics and difficulty levels, you'll have the opportunity to test your knowledge and learn new information in a fun and interactive way.</p>

                    <p>Whether you're studying for an upcoming exam or just looking for a way to exercise your brain, our Quiz App has something for everyone. From history and science to literature and pop culture, our quizzes cover a variety of subjects to keep you engaged and entertained.</p>

                    <p>So what are you waiting for? Download our Quiz App today and start exploring the exciting world of knowledge!</p>

            </div>
        </React.Fragment>

    );
}