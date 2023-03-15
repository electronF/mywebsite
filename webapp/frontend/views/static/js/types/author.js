class Author {
    constructor(name, surname, imagePath) {
        this.getName = () => this._name;
        this.getSurname = () => this._surname;
        this.getImagePath = () => this._imagePath;
        this.setName = (name) => this._name = name;
        this.setSurname = (surname) => this._surname = surname;
        this.setImagePath = (imagePath) => this._imagePath = imagePath;
        this._name = name;
        this._surname = surname;
        this._imagePath = imagePath;
    }
    fromJson(author) {
        this._name = author['name'];
        this._surname = author['surname'];
        this._imagePath = author['image_path'];
    }
    toJson() {
        return {
            'name': this._name,
            'surname': this._surname,
            'image_path': this._imagePath
        };
    }
}
export default Author;
