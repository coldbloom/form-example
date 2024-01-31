export const Config = [
    {
      name: "name",
      placeholder: "Имя",
      required: true
    },
    {
        name: "surname",
        placeholder: "Фамилия",
        required: true
    },
    {
        name: "email",
        placeholder: "E-mail",
        pattern: "",
        errorMessage: "Неверный email"
    }
]

export const initialState: FormDataI = {
    name: "",
    password: "",
    duplicate: "",
    email: "",
    surname: ""
}

export type FormDataI = {
    name: string,
    password: string
    duplicate: string | undefined,
    email: string,
    surname: string
}

