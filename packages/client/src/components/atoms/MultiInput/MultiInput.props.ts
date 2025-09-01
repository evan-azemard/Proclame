export type MultiInputProps = {
    type: "text" | "select" | "file" | "checkbox" | "password" | "email" | "textarea" | "search" | "switch"
    placeholder?: string
    name: string
    label?: string
    options?: string[]
}