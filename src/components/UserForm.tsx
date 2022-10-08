import { FormWrapper } from "./FormWrapper";

type UserData = {
    firstName: string,
    lastName: string,
    age: number,
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({firstName, lastName, age, updateFields}: UserFormProps) {
    return(
        <FormWrapper title="User Details">
            <input
                type="text"
                required
                autoFocus
                placeholder="First Name*"
                name="firstName"
                value={firstName}
                onChange={e => updateFields({firstName: e.target.value})} />
            <input
                type="text"
                required
                placeholder="Last Name*"
                name="lastName"
                value={lastName}
                onChange={e => updateFields({lastName: e.target.value})} />
            <input
                type="number"
                required
                placeholder="Age*"
                name="age"
                min={1}
                max={100}
                value={age}
                onChange={e => updateFields({age: parseInt(e.target.value)})} />
        </FormWrapper>
    )
}