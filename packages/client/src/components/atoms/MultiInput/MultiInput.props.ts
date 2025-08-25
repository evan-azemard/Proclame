export type MultiInputProps = {
    type: "text" | "select" | "file" | "checkbox" | "password" | "email" | "textarea" | "search"
    placeholder?: string
    name: string
    label?: string
    options?: string[]
}