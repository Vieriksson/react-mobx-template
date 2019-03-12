import React from 'react'
import { Routes } from './routes'
import { GlobalStyle } from './styles/global'

const _App = () => (
  <>
    <GlobalStyle />
    <Routes />
  </>
)

export const App = _App
