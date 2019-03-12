import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
  onClick: () => void
}
export function Button({ title, onClick }: Props) {
  return <StyledButton onClick={() => onClick()}>{title}</StyledButton>
}

const StyledButton = styled.button`
  width: 200px;
  color: orange;
  background-color: green;
`
