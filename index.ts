//import
import axios from "axios"

//type data
const typeDataString: string = "Test"
const typeDataNumber: number = 1
const typeDataBoolean: boolean = true
const typeDataObject: object = {name: "Ica", major: "RPL"}
const typeDataArrayString: string[] = ["Test 1", "Test 2"]
const typeDataArrayNumber: number[] = [1, 2]
const typeDataArrayObject: object[] = [{name: "Ica", major: "RPL"}, {name: "Dinda", major: "RPL"}]
const typeDataArrayAny: any[] = ["Test", 1]

console.log("String : ", typeDataString)
console.log("Number : ", typeDataNumber)
console.log("Boolean : ", typeDataBoolean)
console.log("Object : ", typeDataObject)
console.log("Array String : ", typeDataArrayString)
console.log("Array Number : ", typeDataArrayNumber)
console.log("Array Object : ", typeDataArrayObject)
console.log("Array Any : ", typeDataArrayAny )

//interface
const dataStudent: Student = {
    nis: 100,
    nama: "Ica",
    alamat: "Malang",
    jurusan: "RPL",
    sertifikat: true
}

const dataUser: User = {
    id: 1,
    name: "User 1",
    email: "tes@gmail.com",
    username: "user1"
}

console.log("Data Student : ", dataStudent)
console.log("Data User : ", dataUser)

//void
function greetings(message: string): void {
    console.log(message);
}
greetings("Tes Void")

//class
class Point {
    x: number;
    y: number;
   
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
   
const newPoint = new Point(13, 56);
console.log(newPoint)

//Data Enum
enum dataEnum{
    JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DES
}
console.log("Enum Value : ", dataEnum.JAN)
console.log("Enum Array : ", dataEnum[0])

//Async Func
async function getUsers() {
    try {
        const { data, status } = await axios.get<getUserAxios>(
        'https://jsonplaceholder.typicode.com/users',
        {
            headers: {
            Accept: 'application/json',
            },
        },
        );
      
        console.log("Data", JSON.stringify(data));
        console.log('Status : ', status);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
        }
    }
}

getUsers()