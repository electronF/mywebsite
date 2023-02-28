class TextWriter
{
    _selector = "div.text-writer"
}

class TextWriterWritingEvents extends TextWriter
{   
    #keyUpListenner()
    {
        $(this._selector).on('keyup', function(event){
            var text = $(this).text()
        })
    }

    listen()
    {
        this.#keyUpListenner()
    }
}


class TextWriterResizer extends TextWriter
{
    _canResize = false;
    _rezisingDirection = 'none'
    _detection_interval = 5
    _validResizingDirections = {est: 'e', south:'s', southEst: 'se'}
    #resizingDirectionListenner = () =>
    {
        $(this._selector).on('mousemove', (event) => {
            if(this._canResize == false)
            {
                var mouse = event.originalEvent
                var x = mouse.pageX - event.currentTarget.offsetLeft
                var y = mouse.pageY - event.currentTarget.offsetTop
                
                //expand
                if(
                    (x > event.currentTarget.clientWidth / 2)
                    && (y > event.currentTarget.clientHeight / 2)
                    && (event.currentTarget.clientWidth - x <= this._detection_interval)
                    && (event.currentTarget.clientHeight - y <= this._detection_interval)
                )
                {
                    $(event.currentTarget).css("cursor", "se-resize")
                    this._rezisingDirection = this._validResizingDirections.southEst
                }
                else if(
                    (x > event.currentTarget.clientWidth / 2)
                    && (event.currentTarget.clientWidth - x <= this._detection_interval)
                )
                {
                    $(event.currentTarget).css("cursor", "e-resize")
                    this._rezisingDirection = this._validResizingDirections.est
                }
                else if(
                    (y > event.currentTarget.clientHeight / 2)
                    && (event.currentTarget.clientHeight - y <= this._detection_interval)
                )
                {
                    $(event.currentTarget).css("cursor", "s-resize")
                    this._rezisingDirection = this._validResizingDirections.south
                }
                else
                {
                    $(event.currentTarget).css("cursor", "auto")
                    this._rezisingDirection = 'none'
                }
            }
        })
    }

    #canResizeListenner = () => 
    {
        $(this._selector).on('mousedown', (event) => {
            if(Object.values(this._validResizingDirections).includes(this._rezisingDirection))
            {
                this._canResize = true;
            }
        })

        $(this._selector).on('mouseup', (event) => {
            if(Object.values(this._validResizingDirections).includes(this._rezisingDirection))
            {
                this._canResize = false;
            }
        })

        $(document).on('mouseup', (event) => {
            if(Object.values(this._validResizingDirections).includes(this._rezisingDirection))
            {
                this._canResize = false;
            }
        })
    }

    #resizerListenner = () => 
    {
        $(document).on('mousemove', (event) => {
            if(this._canResize == true){
                var mouse = event.originalEvent
                if (this._rezisingDirection == this._validResizingDirections.southEst)
                {
                    $(this._selector).css(
                        "width", (mouse.pageX - $(this._selector).offset().left)+"px"
                    )
                    $(this._selector).css(
                        "height", 
                        (mouse.pageY - $(this._selector).offset().top)+"px"
                    )
                }
                else if(this._rezisingDirection == this._validResizingDirections.est)
                {
                    $(this._selector).css(
                        "width", (mouse.pageX - $(this._selector).offset().left)+"px"
                    ) 
                }
                else if(this._rezisingDirection == this._validResizingDirections.south)
                {
                    $(this._selector).css(
                        "height", 
                        (mouse.pageY - $(this._selector).offset().top)+"px"
                    )
                }
            }
        })
    }

    listen = () => {
        this.#resizingDirectionListenner()
        this.#canResizeListenner()
        this.#resizerListenner()
    }
}

function textWriterEventListenner()
{
    var textWriterResizer = (new TextWriterResizer())
    var textWriterEventListenner = (new TextWriterWritingEvents())
    
    textWriterResizer.listen()
    textWriterEventListenner.listen()
}

textWriterEventListenner()