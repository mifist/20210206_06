/** @jsxImportSource @emotion/react */
import {jsx, keyframes} from "@emotion/react"

import styled from "@emotion/styled/macro"
import * as colors from "./colors"
import * as mq from "./mq"
import {FaSpinner} from "react-icons/fa"

const spin = keyframes({
  "0%": {transform: "rotate(0deg)"},
  "100%": {transform: "rotate(360deg)"},
})

export const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
})
Spinner.defaultProps = {
  "aria-label": "loading",
}

export function FullSpinner() {
  return (
    <div
      css={{
        fontSize: "4em",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner />
    </div>
  )
}

export const ButtonGroup = styled.div({
  padding: "0.5rem 0",
})

export const Button = styled.button(
  {
    padding: "6px 1rem",
    textTransform: "uppercase",
    border: 0,
    color: colors.white,
    transition: "all 1s",
    cursor: "pointer",
    borderRadius: "8px",
    backgroundColor: colors.danger,

    [mq.small]: {
      padding: ".8rem 1rem",
      backgroundColor: colors.primary,
    },

    [mq.medium]: {
      backgroundColor: colors.yellow,
    },

    [mq.large]: {
      backgroundColor: colors.green,
    },

    "&:hover": {
      backgroundColor: colors.dangerHover,
    },
  },
  ({type, mr = 0}) => ({
    marginRight: mr,
    background: type === "reset" ? colors.danger : colors.primary,

    "&:hover": {
      background: type === "reset" ? colors.dangerHover : colors.primaryHover,
    },
  }),
)

export const WrapApp = styled.div`
  max-width: 1200px;
  margin: 1rem auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`
export const WrapForm = styled.form({
  maxWidth: "400px",
  margin: "1rem auto",
})

export const FormGroup = styled.div({
  marginBottom: "1rem",
})

export const Label = styled.label({
  display: "block",
  marginBottom: "1rem",
})
export const Input = styled.input({
  display: "block",
  width: "100%",
  padding: "0.6rem",
  marginBottom: "1rem",
})
