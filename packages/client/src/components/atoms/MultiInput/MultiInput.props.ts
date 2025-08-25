export type MultiInputProps = {
    type: "text" | "select" | "file" | "checkbox" | "password" | "email" | "textarea"
    placeholder?: string
    name: string
    label?: string
    options?: string[]
}