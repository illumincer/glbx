import { Button } from '@nextui-org/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createTheme, NextUIProvider } from "@nextui-org/react"
import Darkmode from './components/darkMode'
import NavbarItem from './components/navbar/firstItem'
import Slidermain from './components/slider/firsItem.'

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {}, // optional
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {}, // optional
  }
})

export default function Home() {
  return (
    <div className={styles.container}>
     <NavbarItem />
     <Slidermain />
    </div>
  )
}
