import React from 'react'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledTextField = styled(TextField)`
    & label.Mui-focused {
        color: #000;
    }
    & .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
            border-color: #000;
        }
    }
    
`

const BaseTextField = (props) => {
    return (
        <StyledTextField {...props}  />
    )
}

export default BaseTextField
