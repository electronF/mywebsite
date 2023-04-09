import GenerateCircularIconButton from "../circular_icon_button/circular_icon_button.js"


class GenerateLabeledFrameWithButton
{
    #label:string 
    #key:string
    #alt:string=''
    #title:string=''
    constructor(label:string, key:string, alt:string, title:string)
    {
        this.#label = label
        this.#key = key
        this.#alt = alt
        this.#title = title
    }

    render()
    {
        return (`
        <div class="labeled-frame-with-button">
            <span>${this.#label}</span>
            ${(new GenerateCircularIconButton('./../static/images/delete-icon.webp', this.#key, this.#alt, this.#title)).render()}
        </div>
        `)
    }
}

export default GenerateLabeledFrameWithButton