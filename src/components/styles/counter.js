import styled from "styled-components"

export const Button = styled.button`
  padding: 6px 1rem;
  border: 0;
  background: #2a82bb;
  color: #ffffff;
  margin-right: ${props => props.marginRight || 0};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`

export const NewButton = styled(Button)`
  background: green;
`
