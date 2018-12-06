class Client {

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.addresses = [];
    }

    addAddress(address) {
        this.addresses.push(address);
    }

    getFavoriteAddress(){
        if (this.addresses.length == 0){
            return null;
        }

        return this.addresses.filter(this.isFavoriteAddress);
    }

    isFavoriteAddress(address){
        return address.favorite === true;
    }
}

class Address {
    constructor(line1, line2, postalCode, town, country, favorite){
        this.line1 = line1;
        this.line2 = line2;
        this.postalCode = postalCode;
        this.town = town;
        this.country = country;
        this.favorite = favorite;
    }
}
