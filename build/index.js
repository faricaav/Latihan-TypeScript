"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import
const axios_1 = __importDefault(require("axios"));
//type data
const typeDataString = "Test";
const typeDataNumber = 1;
const typeDataBoolean = true;
const typeDataObject = { name: "Ica", major: "RPL" };
const typeDataArrayString = ["Test 1", "Test 2"];
const typeDataArrayNumber = [1, 2];
const typeDataArrayObject = [{ name: "Ica", major: "RPL" }, { name: "Dinda", major: "RPL" }];
const typeDataArrayAny = ["Test", 1];
console.log("String : ", typeDataString);
console.log("Number : ", typeDataNumber);
console.log("Boolean : ", typeDataBoolean);
console.log("Object : ", typeDataObject);
console.log("Array String : ", typeDataArrayString);
console.log("Array Number : ", typeDataArrayNumber);
console.log("Array Object : ", typeDataArrayObject);
console.log("Array Any : ", typeDataArrayAny);
//interface
const dataStudent = {
    nis: 100,
    nama: "Ica",
    alamat: "Malang",
    jurusan: "RPL",
    sertifikat: true
};
const dataUser = {
    id: 1,
    name: "User 1",
    email: "tes@gmail.com",
    username: "user1"
};
console.log("Data Student : ", dataStudent);
console.log("Data User : ", dataUser);
//void
function greetings(message) {
    console.log(message);
}
greetings("Tes Void");
//class
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newPoint = new Point(13, 56);
console.log(newPoint);
//Data Enum
var dataEnum;
(function (dataEnum) {
    dataEnum[dataEnum["JAN"] = 0] = "JAN";
    dataEnum[dataEnum["FEB"] = 1] = "FEB";
    dataEnum[dataEnum["MAR"] = 2] = "MAR";
    dataEnum[dataEnum["APR"] = 3] = "APR";
    dataEnum[dataEnum["MAY"] = 4] = "MAY";
    dataEnum[dataEnum["JUN"] = 5] = "JUN";
    dataEnum[dataEnum["JUL"] = 6] = "JUL";
    dataEnum[dataEnum["AUG"] = 7] = "AUG";
    dataEnum[dataEnum["SEP"] = 8] = "SEP";
    dataEnum[dataEnum["OCT"] = 9] = "OCT";
    dataEnum[dataEnum["NOV"] = 10] = "NOV";
    dataEnum[dataEnum["DES"] = 11] = "DES";
})(dataEnum || (dataEnum = {}));
console.log("Enum Value : ", dataEnum.JAN);
console.log("Enum Array : ", dataEnum[0]);
//Async Func
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data, status } = yield axios_1.default.get('https://jsonplaceholder.typicode.com/users', {
                headers: {
                    Accept: 'application/json',
                },
            });
            console.log("Data", JSON.stringify(data));
            console.log('Status : ', status);
            return data;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}
getUsers();
