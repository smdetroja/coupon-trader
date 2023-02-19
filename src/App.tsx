import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core'
import { Hero } from './features/static/components/Hero'
import { Register } from './features/auth/Register'
import { Login } from './features/auth/Login'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  const preferredColorScheme =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme)
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Header />
        <Hero />
        <Register />
        <Login />
        <Footer />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
export default App
