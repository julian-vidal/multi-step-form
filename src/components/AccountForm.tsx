import { FormWrapper } from "./FormWrapper";

type AccountData = {
    email: string,
    password: string
}

type AccountFormProps = AccountData & {
    updateFields: (fields: Partial<AccountData>) => void
}

export function AccountForm({email, password, updateFields} : AccountFormProps) {
    return(
        <FormWrapper title="Account Creation">
            <input
                type="text"
                required
                autoFocus
                placeholder="Email*"
                name="email"
                value={email}
                onChange = {e => updateFields({email: e.target.value})} />
            <input
                type="password"
                required
                placeholder="Password*"
                name="password"
                value={password}
                onChange = {e => updateFields({password: e.target.value})} />
        </FormWrapper>
    )
}