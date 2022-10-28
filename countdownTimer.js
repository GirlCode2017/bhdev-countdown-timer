const CountdownTimer = class {
    constructor(
        timerType,
        deadlineDate,
        displayHeading,
        expiredMessage,
        redirectText,
        redirectLink,
        autoRedirect,
        daysLeft,
        hoursLeft,
        minutesLeft,
        secondsLeft,
        timerColon,
        currentTime,
        targetDate,
        timeBetween,
        minutesStart,
        secondsStart,
        showDays,
        showHours
    ) {
        this.timerType = timerType,
        this.deadlineDate = deadlineDate,
        this.displayHeading = displayHeading,
        this.expiredMessage = expiredMessage,
        this.redirectText = redirectText,
        this.redirectLink = redirectLink,
        this.autoRedirect = autoRedirect,
        this.daysLeft = daysLeft,
        this.hoursLeft = hoursLeft,
        this.minutesLeft = minutesLeft,
        this.secondsLeft = secondsLeft,
        this.timerColon = timerColon,
        this.currentTime = currentTime,
        this.targetDate = targetDate,
        this.timeBetween = timeBetween,
        this.minutesStart = minutesStart,
        this.secondsStart = secondsStart,
        this.showDays = showDays,
        this.showHours = showHours
    }
    settings(_anon_Obj) {
        this.timerType = _anon_Obj.timerType,
        this.deadlineDate = _anon_Obj.deadlineDate,
        this.displayHeading = _anon_Obj.displayHeading,
        this.expiredMessage = _anon_Obj.expiredMessage,
        this.redirectText = _anon_Obj.redirectText,
        this.redirectLink = _anon_Obj.redirectLink,
        this.autoRedirect = _anon_Obj.autoRedirect,
        this.minutesStart = _anon_Obj.minutesStart,
        this.secondsStart = _anon_Obj.secondsStart,
        this.showDays = _anon_Obj.showDays,
        this.showHours = _anon_Obj.showHours
        this.checkTimerType();
        this.configSettings();
    }
    configSettings() {
        // elem. display settings
        const hideElem = (elem1, elem2) => {
            elem1.style.display = "none"
            elem2.style.display = "none"
        }
        const hideDays = () => {
            const daysElem = document.querySelector('.countdown-content span:nth-of-type(1)')
            const firstColon = document.querySelector('span.timer-colon1')
            hideElem(daysElem, firstColon);
            console.info("Days element hidden")
        }
        const hideHours = () => {
            const hoursElem = document.querySelector('.countdown-content span.hours:nth-of-type(1)')
            const secondColon = document.querySelector('span.timer-colon2')
            hideElem(hoursElem, secondColon);
            console.info("Hours element hidden")
        }
        // check active timer keys
        if (this.timerType === "deadline") {
            if (this.deadlineDate === "" || this.deadlineDate === undefined) console.error("Deadline date and time must be set on the deadlineDate property in the following format: YYYY-MM-DDTHH:MM:SS.")
            if ( !this.showDays ) hideDays();
            if ( !this.showHours ) hideHours();
        }
        if (this.timerType === "minutes") {
            if (isNaN(this.minutesStart) || isNaN(this.secondsStart)) console.error("minutesStart/secondsStart property must only be a number value (ie. 10).")
        }
        // redirect link provisions
        if (this.redirectLink === "" || this.redirectLink === undefined) console.warn("Redirect link not provided. Default hyperlink will be used (https://www.banyanhill.com).")
    }
    timeSetter() {
        this.currentTime = new Date().getTime()
        this.targetDate = new Date(this.deadlineDate).getTime()
        this.timeBetween = this.targetDate - this.currentTime
    }
    // countdown timer
    runDeadline(_date_Obj) {
        const countdownIntvL = setInterval(() => {
            const _bound_date_Obj = _date_Obj.bind(this);
            _bound_date_Obj();
            // calc each time val, set and round down
            this.daysLeft = Math.floor( this.timeBetween / 86400000 )
            this.hoursLeft = Math.floor( (this.timeBetween % 86400000) / 3600000)
            this.minutesLeft = Math.floor( (this.timeBetween % 3600000) / 60000 )
            this.secondsLeft = Math.floor( (this.timeBetween % 60000) / 1000 )
            // padStart
            if (this.hoursLeft < 10) this.hoursLeft = "0" + this.hoursLeft;
            if (this.minutesLeft < 10) this.minutesLeft = "0" + this.minutesLeft;
            if (this.secondsLeft < 10) this.secondsLeft = "0" + this.secondsLeft;
            // update DOM
            let headlineElem = document.querySelectorAll('span.countdown-headline')[0]
            this.displayHeading === "" || this.displayHeading === undefined ? headlineElem.style.display = "none" : headlineElem.innerHTML = `${this.displayHeading}`
            document.querySelectorAll('span.days')[0].innerHTML = `${this.daysLeft} <span class="days-text">days</span>`
            document.querySelectorAll('span.timer-colon1')[0].innerText = `${this.timerColon}`
            document.querySelectorAll('span.hours')[0].innerHTML = `${this.hoursLeft} <span class="hours-text">hours</span>`
            document.querySelectorAll('span.timer-colon2')[0].innerText = `${this.timerColon}`
            document.querySelectorAll('span.minutes')[0].innerHTML = `${this.minutesLeft} <span class="minutes-text">minutes</span>`
            document.querySelectorAll('span.timer-colon3')[0].innerText = `${this.timerColon}`
            document.querySelectorAll('span.seconds')[0].innerHTML = `${this.secondsLeft} <span class="seconds-text">seconds</span>`
            // check time
            if ( this.timeBetween < 0 ) stopIntvL(countdownIntvL)
        }, 1000)
        const stopIntvL = (intvL) => {
            clearInterval(intvL);
            this.buildExpiry();
        };
    };
    // minute timer
    runMinute(_build_Obj, _config_Obj, _timeCheck_Obj) {
        _config_Obj;
        _build_Obj;

        const countdown = ( elementName, minutes, seconds ) => {
            let element, endTime, hours, mins, msLeft, time, deadlineDiv;
            deadlineDiv = document.querySelectorAll('#deadlineTimer')[0]
            deadlineDiv.setAttribute('class', 'dynamic-countdown countdown-container')
            function twoDigits( n ) {
              return (n <= 9 ? "0" + n : n);
            }
            function updateTimer() {
              msLeft = endTime - (+new Date);
                if ( msLeft < 1000 ) {
                  element.innerHTML = "0:00";
                }
                else {
                  time = new Date( msLeft );
                  hours = time.getUTCHours();
                  mins = time.getUTCMinutes();
                  element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
                  setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
                }
            }
            element = document.getElementById( elementName );
            endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
            updateTimer();
            _timeCheck_Obj;
          }
          countdown( "countdown", this.minutesStart, this.secondsStart );
    }
    timeCheck() { 
        function promise(method, seconds) {
            return new Promise((resolve, reject) => {
                try {
                    setTimeout(() => {
                        resolve(method);
                    }, seconds);
                } catch (error) {
                    reject(this.redirectTo());
                }
            });
        }
        const wait = async () => {
            return await promise(this.buildExpiry(), 1500)
        };
        const timerIntvL = setInterval(() => {
            if (document.getElementById('countdown').innerHTML === "0:00") {
                clearInterval(timerIntvL);
                wait();
            }
        }, 1000)
        
    };
    redirectTo(_date_Obj) {
        _date_Obj;
        const executeRedirect = () => {
            window.location.replace(`${this.redirectLink}`)
        }
        if (this.autoRedirect) {
            if (this.timerType === "deadline") if ( this.timeBetween < 0 ) executeRedirect();
            if (this.timerType === "minutes") executeRedirect();
        }
    };
    buildCountdownTimer() {
        const deadlineTimerDiv = document.getElementById('deadlineTimer')
        let timerContainer = document.createElement('div')
        timerContainer.setAttribute("class", "dynamic-countdown countdown-container")
        timerContainer.innerHTML = `
            <span class="countdown-headline"></span>
            <div class="countdown-content">
                <span><span class="days"></span></span>
                <span class="timer-colon timer-colon1"></span>
                <span><span class="hours"></span></span>
                <span class="timer-colon timer-colon2"></span>
                <span><span class="minutes"></span></span>
                <span class="timer-colon timer-colon3"></span>
                <span><span class="seconds"></span></span>
            </div>
        `;
        let colonSpan = timerContainer.querySelectorAll('span.timer-colon')
        this.timerColon = ":"
        colonSpan.forEach(() => {
            colonSpan.innerText = this.timerColon
        });
        deadlineTimerDiv.append(timerContainer)
    };
    buildMinutesTimer() {
        let deadlineDiv = document.getElementById('deadlineTimer')
        let minutesHeadline = document.createElement('span')
        const minutesCountdown = document.createElement('div')
        minutesHeadline.setAttribute('class', 'countdown-headline')
        minutesCountdown.setAttribute('id', 'countdown')
        deadlineDiv.removeChild(deadlineDiv.children[0])
        deadlineDiv.append(minutesHeadline)
        deadlineDiv.append(minutesCountdown)
        let headlineElem = document.querySelectorAll('span.countdown-headline')[0]
        this.displayHeading === "" || this.displayHeading === undefined ? headlineElem.style.display = "none" : headlineElem.innerHTML = `${this.displayHeading}`
    };
    buildRedirect() {
        let getExpiredMessage, redirectContent;
        const hasAction = (elem) => {
            this.redirectText === "" || this.redirectText === undefined ? redirectContent.innerHTML = elem : redirectContent.innerHTML = this.redirectText;
            if (!this.autoRedirect && this.redirectText === undefined) redirectContent.style.display = "none"
        }
        const hasRedirectLink = () => {
            getExpiredMessage = document.querySelectorAll('div.expired-message')[0]
            redirectContent = document.createElement('span')
            hasAction("You will be automatically redirected...")
            getExpiredMessage.append(redirectContent)
            setTimeout(() => {
                this.redirectTo();
            }, 1000)
        }
        const omittedRedirectLink = () => {
            getExpiredMessage = document.querySelectorAll('div.expired-message')[0]
            redirectContent = document.createElement('a')
            redirectContent.setAttribute('href', 'https://www.banyanhill.com')
            redirectContent.setAttribute('target', '_blank')
            redirectContent.setAttribute('rel', 'noopener noreferrer')
            redirectContent.setAttribute('class', 'expiry-redirect-link')
            if (!this.autoRedirect && this.redirectLink !== "" || this.redirectLink !== undefined) redirectContent.setAttribute('href', this.redirectLink)
            hasAction("Learn about our other services.")
            getExpiredMessage.append(redirectContent)
        }
        if (this.autoRedirect) this.redirectLink === "" || this.redirectLink === undefined ? console.error("The redirectLink is undefined. The autoRedirect property setting requires a redirect link to be provided.") : hasRedirectLink()     

        if (!this.autoRedirect) if(this.redirectLink !== "" || this.redirectLink !== undefined) omittedRedirectLink()
    }
    buildExpiry() {
        const countdownContainer = document.querySelectorAll('div.dynamic-countdown.countdown-container')[0]
        let expiredContainer = document.createElement('div')
        expiredContainer.setAttribute("class", "expired-container")
        expiredContainer.innerHTML = `<div class="expired-message">${this.expiredMessage}</div>`;
        countdownContainer.replaceWith(expiredContainer)
        this.buildRedirect();
    }
    checkTimerType() {
        return this.timerType === "deadline" ? this.runDeadline(this.timeSetter)
        : this.timerType === "minutes" ? this.runMinute(this.buildMinutesTimer(),this.configSettings(), this.timeCheck(this.minutesLeft, this.secondsLeft))
        : console.error("Timer type not specified. Must set timerType property to 'deadline' or 'minutes'.");
    }

    addCSS() {
        const css = document.createElement('link')
        css.rel = 'stylesheet'
        css.href = 'https://cloudcollective.s3.amazonaws.com/styles/countdownTimer/countdownTimer.css.gz'
        document.head.appendChild(css);
    }
};
const timer = new CountdownTimer();
timer.addCSS();
timer.buildCountdownTimer();