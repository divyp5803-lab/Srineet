/* =========================================
   SRINEET
   NEET 2027 COUNTDOWN
========================================= */


const examDate = new Date(
    "May 2, 2027 00:00:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = examDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "000";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days = Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference /
            (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference /
            (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(3, "0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


/* Start countdown */

updateCountdown();


setInterval(
    updateCountdown,
    1000
);
