const stopwatchContainer = document.querySelector("#stopwatch")

const btnAddStopwatch = document.querySelector("#addStopwatch")

const convertSecondToTime = (seconds) => {
    let s = seconds % 60
    let m = Math.floor(seconds / 60)

    if (s < 10) s = "0" + s
    if (m < 10) m = "0" + m

    return m + ":" + s
}
let isClick = false;


btnAddStopwatch.addEventListener("click", () => {
    if (!isClick) {
        isClick = true;
        console.log(isClick);
        const stopwatch = new Stopwatch("Clock 1")
        const stopwatch1 = new Stopwatch("Clock 2")
        const stopwatch2 = new Stopwatch("Clock 3")
        const stopwatch3 = new Stopwatch("Clock 4")
        const stopwatch4 = new Stopwatch("Clock 5")
        stopwatchContainer.appendChild(stopwatch.container)
        stopwatchContainer.appendChild(stopwatch1.container)
        stopwatchContainer.appendChild(stopwatch2.container)
        stopwatchContainer.appendChild(stopwatch3.container)
        stopwatchContainer.appendChild(stopwatch4.container)

        const btnStopAll = document.createElement("button")
        btnStopAll.setAttribute("class","stop")
        btnStopAll.innerHTML = "Stop All"
        stopwatchContainer.appendChild(btnStopAll)
        btnStopAll.addEventListener("click", () => {
            stopwatch.handleStopAll()
            stopwatch1.handleStopAll()
            stopwatch2.handleStopAll()
            stopwatch3.handleStopAll()
            stopwatch4.handleStopAll()
        })

        const btnStartAll = document.createElement("button")
        btnStartAll.setAttribute("class","start")
        btnStartAll.innerHTML = "Start All"
        stopwatchContainer.appendChild(btnStartAll)
        btnStartAll.addEventListener("click", () => {
            stopwatch.handleStartAll()
            stopwatch1.handleStartAll()
            stopwatch2.handleStartAll()
            stopwatch3.handleStartAll()
            stopwatch4.handleStartAll()
        })


    } else {
        alert("Already printed")
    }
})

class Stopwatch {
    name = "" ; 
    count = 0;
    interval = null;
    isStarted = false;
    

    container;
    txtTime;
    btnStart;
    btnPause;
    btnStop;
    btnStopAll;

    constructor(name) {
        this.name = name;

        this.container = document.createElement("div")
        this.container.classList.add("stopwatch-container")

        this.btnArea = document.createElement("div")
        this.btnArea.classList.add("btnArea")

        this.txtTime = document.createElement("span")
        this.txtTime.innerHTML = "00:00"

        this.btnStart = document.createElement("button")
        this.btnStart.innerHTML = "Start"
        this.btnStart.addEventListener("click", this.handleStart)
        this.btnStart.setAttribute("class","start")

        this.btnPause = document.createElement("button")
        this.btnPause.innerHTML = "Pause"
        this.btnPause.addEventListener("click", this.handlePause)
        this.btnPause.setAttribute("id","pause")

        this.btnStop = document.createElement("button")
        this.btnStop.innerHTML = "Stop"
        this.btnStop.addEventListener("click", this.handleStop)
        this.btnStop.setAttribute("class","stop")

        this.Name = document.createElement("p")
        this.Name.innerHTML = `${this.name}`



        this.container.appendChild(this.txtTime)
        this.container.appendChild(this.btnArea)
        this.btnArea.appendChild(this.btnStart)
        this.btnArea.appendChild(this.btnPause)
        this.btnArea.appendChild(this.btnStop)
        this.btnArea.appendChild(this.Name)

    }

    handleStart = () => {
        if (!this.isStarted) {
            this.interval = setInterval(() => {
                this.count++;
                this.txtTime.innerHTML = convertSecondToTime(this.count)
            }, 1000)

            this.isStarted = true;
        } else {
            alert("Started!")
            return;
        }
    }
    handleStartAll = () => {
        if (!this.isStarted) {
            this.interval = setInterval(() => {
                this.count++;
                this.txtTime.innerHTML = convertSecondToTime(this.count)
            }, 1000)

            this.isStarted = true;
        } else {
            alert("Started!")
            return;
        }
    }

    handlePause = () => {
        clearInterval(this.interval)
        this.isStarted = false;
    }

    handleStop = () => {
        clearInterval(this.interval)
        this.count = 0;
        this.txtTime.innerHTML = "00:00"
        this.isStarted = false;

    }

    handleStopAll = () => {
        clearInterval(this.interval)
        this.count = 0;
        this.txtTime.innerHTML = "00:00"
        this.isStarted = false;
    }
}