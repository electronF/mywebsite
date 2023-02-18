from dataclasses import dataclass

@dataclass
class AuthorDTO:
    name:str
    surname:str

    profile_image:str
    miniature:str