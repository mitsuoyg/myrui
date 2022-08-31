import React from 'react'
import styles from './Button.module.scss'

export const Button = ({ color = 'primary', type, className, style, onClick, children }) => {
  const classes = [
    styles.button,
    styles[`button--${color}`]
  ]

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes.join(' ')} ${className}`}
      style={{ '--color': color, ...style }}
    >
      {children}
    </button>
  )
}