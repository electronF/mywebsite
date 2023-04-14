

class AudioPlayer
{
    audioPlayerTop:number
    #evenListenner()
    {
        document.addEventListener('scroll', (event)=>{
          var audioPlayer = (document.getElementsByClassName('audio-player') as HTMLCollectionOf<HTMLDivElement>)[0]
          if(
            audioPlayer.style.getPropertyValue('position') == 'sticky'
            && (this.audioPlayerTop - audioPlayer.getBoundingClientRect().top) < 0 
            && audioPlayer.getBoundingClientRect().top > 10
            )
          {
            audioPlayer.style.setProperty('border', 'none')
            audioPlayer.style.setProperty('box-shadow', 'none')
            audioPlayer.style.setProperty('transition', 'all .1s')
          }
          else if (audioPlayer.style.getPropertyValue('position') == 'sticky')
          {
            audioPlayer.style.setProperty('top', '10px')
            audioPlayer.style.setProperty('border', '2px solid #606C38')
            audioPlayer.style.setProperty('box-shadow', '0 3px 3px 0px #606C38')
            audioPlayer.style.setProperty('transition', 'all .2s')
          }

          this.audioPlayerTop = audioPlayer.getBoundingClientRect().top
        })
    }

    listen()
    {
        this.#evenListenner()
    }
}


class AudioPlayerActions
{
    soundIsLoaded:boolean
    audioElement:HTMLAudioElement|null
    secondsIteration:number = 10
    
    constructor(){
        this.soundIsLoaded = false
        this.audioElement = null
    }
    
    secondToDuration = (duration:number) =>
    {
        var hours = Math.floor(duration/3600)
        duration = duration%3600

        var minutes = Math.floor(duration/60)
        duration = duration%60

        var seconds = Math.floor(duration)

        if(hours>0)
            return (((hours>0)?`${hours}:`:'') + ((minutes<10)?'0':'') + `${minutes}:`+((seconds<10)?'0':'') + `${seconds.toFixed()}`)
        else
            return (((minutes<10)?'0':'') + `${minutes}:` +((seconds<10)?'0':'') + seconds.toFixed() )
    }

    changePosition = (element:HTMLElement) =>
    {

        var div = element.parentElement.parentElement as HTMLDivElement
        var position = div.style.getPropertyValue('position')

        var image = div.getElementsByTagName('img')[0]

        if(position == 'sticky' )
        {
            div.style.setProperty('position', 'relative')
            div.style.setProperty('border', 'none')
            div.style.setProperty('box-shadow', 'none')
            div.style.setProperty('transition', 'all .1s')

            image.src = image.getAttribute('icon2')
        }
        else
        {
            div.style.setProperty('position', 'sticky')
            div.style.setProperty('top', '10px')
            div.style.setProperty('border', '2px solid #606C38')
            div.style.setProperty('box-shadow', '0 3px 3px 0px #606C38')
            div.style.setProperty('transition', 'all .2s')

            image.src = image.getAttribute('icon1')
        }
    }

    changeVoice = (element:HTMLElement) =>
    {
        console.log(' Change voice ')
    }

    readPrevious = (element:HTMLElement) =>
    {
        this.audioElement.currentTime = this.audioElement.currentTime - this.secondsIteration
    }

    playPause = (element:HTMLElement) =>
    {
        var image = element.getElementsByTagName('img')[0]

        if(this.soundIsLoaded == false)
        {
            this.audioElement = document.createElement('audio')
            this.audioElement.src = "/static/sounds/Christophe Mae - 40 ans demain.mp3"

            var timerBarDiv = element.parentElement.parentElement.previousElementSibling
            var progressBarDiv = element.parentElement.parentElement.previousElementSibling.getElementsByClassName("progress-bar")
            if(progressBarDiv!.length > 0)
            {
                var elements = progressBarDiv[0].getElementsByClassName("progress-indicator")
                var elements1 = timerBarDiv?.getElementsByClassName("passed-time")
                var elements2 = timerBarDiv?.getElementsByClassName("duration")


                this.audioElement.oncanplay = (event) => {
                    if(elements2?.length > 0)
                    {
                        elements2[0].innerHTML = `${this.secondToDuration(this.audioElement.duration)}`
                    }

                    if(elements?.length> 0)
                    { 
                        elements[0].setAttribute('max', ''+(isNaN(this.audioElement.duration)?1:this.audioElement.duration))
                    }
                }

                this.audioElement.onended = (event)=>{
                    image.src = "/static/images/cicle-filled-play-icon-1.webp"
                }
                
                if(elements?.length > 0)
                {
                    this.audioElement.ontimeupdate = (event) => {
                        elements[0].setAttribute('value', `${this.audioElement.currentTime}`)
                        // elements[0].setAttribute('max', `${Math.max(this.audioElement.currentTime, 1)}`)

                        
                        // if(isNaN(this.audioElement.duration))
                        // {
                            
                        //     if(elements2?.length > 0)
                        //     {
                        //         console.log('here 2')
                        //         elements2[0].innerHTML = `${this.secondToDuration(this.audioElement.currentTime)}`
                        //     }
                        // }

                        if(elements1?.length > 0){
                            elements1[0].innerHTML = `${this.secondToDuration(this.audioElement.currentTime)}`
                        }
                    }
                     
                } 
            }

            this.soundIsLoaded = true
        }

        if(this.audioElement!.paused == true)
        {
            this.audioElement.play()
            image.src = "/static/images/cicle-filled-pause-icon-1.webp"
        }
        else
        {
            this.audioElement.pause()
            image.src = "/static/images/cicle-filled-play-icon-1.webp"
        }
    }

    readNext = (element:HTMLElement) =>
    {
        this.audioElement.currentTime = this.audioElement.currentTime + this.secondsIteration
    }

    changeSpeed = (element:HTMLElement) =>
    {
        var speed = parseFloat(element.getAttribute('value'))
        speed = Math.max((speed + 1 )%4, 1)
        element.setAttribute('value', `${speed}`)
        element.textContent = `${speed}.0×`

        this.audioElement.playbackRate = speed
    }

    onThumbsMove = () => {
        $('.progress-indicator').on('mouseup', (event)=>{
            var value = (event.currentTarget as any).valueAsNumber
            if(this.soundIsLoaded)
            {
                this.audioElement.currentTime = value
            }
        })

        $('.progress-indicator').on('mouseup', (event)=>{
            var value = (event.currentTarget as any).valueAsNumber
            if(this.soundIsLoaded)
            {
                this.audioElement.currentTime = value
            }
        })
        
        $('.progress-indicator').on('mousedown', (event)=>{
            var value = (event.currentTarget as any).valueAsNumber
            if(this.soundIsLoaded)
            {
                this.audioElement.currentTime = value
            }
        })
    }
}


var audioPlayerActions = new AudioPlayerActions()

audioPlayerActions.onThumbsMove()


var audioPlayerFunctions = {
    'changePosition': audioPlayerActions.changePosition,
    'changeVoice': audioPlayerActions.changeVoice,
    'readPrevious': audioPlayerActions.readPrevious,
    'playPause': audioPlayerActions.playPause,
    'readNext': audioPlayerActions.readNext,
    'changeSpeed': audioPlayerActions.changeSpeed,
}

var audioListenner = (new AudioPlayer()).listen()