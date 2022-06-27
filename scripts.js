// Write your JavaScript code here.
// Remember to pay attention to page loading!
function mission () {
    const takeoffButton = document.getElementById("takeoff")
    const landingButton = document.getElementById("landing")
    const flightStatus = document.getElementById("flightStatus")
    const shuttleBackgroud = document.getElementById("shuttleBackground")
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
    const missionAbort = document.getElementById("missionAbort")
    const up = document.getElementById("up")
    const down = document.getElementById("down")
    const left = document.getElementById("left")
    const right = document.getElementById("right")
    const rocket = document.getElementById("rocket")
    rocket.style.bottom = "0px"
    rocket.style.left = "0px"
    rocket.style.position = "absolute"

    takeoffButton.addEventListener("click", event => {
        let answer = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (answer === true) {
          flightStatus.innerHTML = "Shuttle in flight."
          shuttleBackgroud.style.backgroundColor = "#3376FF";
          spaceShuttleHeight.innerHTML = "10,000"
        }
      });
    
    landingButton.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackgroud.style.backgroundColor = "#41E37B";
        spaceShuttleHeight.innerHTML = "0"
    });

    missionAbort.addEventListener("click", event => {
        let answer = window.confirm("Confirm that you want to abort the mission.")
        if (answer === true) {
          flightStatus.innerHTML = "Mission aborted."
          shuttleBackgroud.style.backgroundColor = "#41E37B";
          spaceShuttleHeight.innerHTML = "0"
        }
      });

    up.addEventListener("click", event => {
        let movement = parseInt(rocket.style.bottom) + 10 + "px"
        rocket.style.bottom = movement
        let miles = parseInt(spaceShuttleHeight.innerHTML) + 10000
        spaceShuttleHeight.innerHTML = miles
    })

    down.addEventListener("click", event => {
      let movement = parseInt(rocket.style.bottom) - 10 + "px"
      rocket.style.bottom = movement
      let miles = parseInt(spaceShuttleHeight.innerHTML) - 10000
      spaceShuttleHeight.innerHTML = miles
  })

    left.addEventListener("click", event => {
     let movement = parseInt(rocket.style.left) + 10 + "px"
     rocket.style.left = movement
  })

    right.addEventListener("click", event => {
     let movement = parseInt(rocket.style.left) - 10 + "px"
      rocket.style.left = movement
  })

}

window.addEventListener("load", mission);