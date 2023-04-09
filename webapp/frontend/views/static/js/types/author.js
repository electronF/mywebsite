class Author {
    constructor(id, name, surname, gender, email, aboutMe, accountStatus, imagePath, registerAt) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.email = email;
        this.aboutMe = aboutMe;
        this.accountStatus = accountStatus;
        this.imagePath = imagePath;
        this.registerAt = (new Date(Date.parse(registerAt)));
    }
    fromJson(author) {
        this.id = author['id'];
        this.name = author['name'];
        this.surname = author['surname'];
        this.imagePath = author['imagepath'];
        this.gender = author['gender'];
        this.email = author['email'];
        this.aboutMe = author['aboutme'];
        this.accountStatus = author['account_status'];
        this.registerAt = (new Date(Date.parse(author['register_at'])));
        return this;
    }
    toJson() {
        return {
            'id': this.id,
            'name': this.name,
            'surname': this.surname,
            'email': this.email,
            'gender': this.gender,
            'about_me': this.aboutMe,
            'account_status': this.accountStatus,
            'imagepath': this.imagePath,
            'register_at': this.registerAt.toISOString()
        };
    }
}
export default Author;
