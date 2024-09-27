import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  color?: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      className={`w-full rounded-md bg-blue-500 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none disabled:opacity-50 ${
        props.color === 'secondary'
          ? 'bg-gray-700 text-slate-100 hover:bg-gray-400 focus:bg-gray-400'
          : ''
      }`}
      {...props}
    >
      {props.text}
    </button>
  )
}

export default Button
