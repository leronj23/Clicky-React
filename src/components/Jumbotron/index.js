import React from "react";
import './style.css';

function Jumbotron() {
    return (
        <div className="container-fluid mt-4">
            <div className="jumbotron text-center">
                <div className="jumbotronHeader"><strong>Clicky Game!</strong></div>
                <p><strong>Click on an image to earn points, but don't click on any more than once!</strong></p>
            </div>
        </div>
    );
}

export default Jumbotron;
