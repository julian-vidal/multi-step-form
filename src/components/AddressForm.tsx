import { FormWrapper } from "./FormWrapper";

type AddressData = {
    street: string,
    city: string,
    state: string,
    zip: string
}

type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void
}

export function AddressForm({street, city, state, zip, updateFields}: AddressFormProps) {
    return(
        <FormWrapper title="Address Details">
            <input
                type="text" 
                required
                autoFocus
                placeholder="Street*"
                name="street"
                value={street}
                onChange={e => updateFields({street: e.target.value}) } />
            <input
                type="text"
                required
                placeholder="City*"
                name="city"
                value={city}
                onChange={e => {updateFields({city: e.target.value})}} />
            <input 
                type="text"
                required
                placeholder="State*"
                name="state"
                value={state}
                onChange={e => {updateFields({state: e.target.value})}} />
            <input
                type="text"
                required
                placeholder="Zip*"
                name="zip"
                value={zip}
                onChange={e=> {updateFields({zip: e.target.value})}} />
        </FormWrapper>
    )
}