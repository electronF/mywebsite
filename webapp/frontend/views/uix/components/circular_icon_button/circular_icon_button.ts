class GenerateCircularIconButton
{
    #icon:string = ''
    #alt:string = ''
    #title:string = ''
    #key:string = ''
    constructor(icon_path:string, key:string,  alt:string='', title:string='')
    {
        this.#icon = icon_path
        this.#key = key
        this.#alt = alt
        this.#title = title
    }

    render()
    {
      return `\
        <button type="menu" class="circular-icon-button" key='${this.#key}'>
            <img src="${this.#icon}" alt="${this.#alt}" title="${this.#title}"/>
        </button>`  
    }
}


export default GenerateCircularIconButton