class Author
{
    _name:string
    _surname:string
    _imagePath:string
    constructor(name: string, surname:string, imagePath:string)
    {    
        this._name = name
        this._surname = surname
        this._imagePath = imagePath
    }

    getName = () => this._name

    getSurname = () => this._surname

    getImagePath = () => this._imagePath

    setName = (name:string) => this._name = name

    setSurname = (surname:string) => this._surname = surname
    
    setImagePath = (imagePath:string) => this._imagePath = imagePath

    fromJson(author:object)
    {
        this._name = author['name']
        this._surname = author['surname']
        this._imagePath = author['image_path']
    }

    toJson()
    {
        return {
            'name': this._name,
            'surname': this._surname,
            'image_path': this._imagePath
        }
    }
}


export default Author
