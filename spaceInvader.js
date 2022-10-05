"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

SpaceInvader();


function SpaceInvader() {
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fillStyle = "black";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(75, 225, 250, 100);
    context.fillStyle = "#66FF00";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(175, 225, 50, 50);
    context.fillStyle = "black";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(175, 125, 50, 50);
    context.fillStyle = "#66FF00";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(75, 75, 50, 50);
    context.fillStyle = "#66FF00";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(275, 75, 50, 50);
    context.fillStyle = "#66FF00";
    context.fill();
    context.stroke();


}