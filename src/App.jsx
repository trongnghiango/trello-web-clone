import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@mui/material'
import {useTheme} from '@mui/material'

function App() {
  const theme = useTheme() 
  console.log(theme.spacing())
  return (
    <>
      <Button variant="contained">Hello world</Button>
      <span style={{padding: theme.spacing()}}>{`spacing ${theme.spacing()}`}</span>
    </>
  )
}

export default App
