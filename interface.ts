interface Student{
    nis: number,
    nama: string,
    alamat: string,
    jurusan: string,
    sertifikat: boolean
}

interface User{
    id: number,
    name: string, 
    email: string,
    username: string
}

interface getUserAxios{
    data: User[]
}