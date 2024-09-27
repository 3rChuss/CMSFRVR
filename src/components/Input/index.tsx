import { FC, Fragment } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  additionalClasses?: string
}

const Input: FC<InputProps> = ({ label, additionalClasses, ...rest }) => {
  return (
    <Fragment>
      {label && (
        <label
          htmlFor={rest.id}
          className="block text-xs font-semibold text-gray-600 dark:text-gray-400"
        >
          {label} {rest.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        className={`mt-2 w-full rounded-lg border-transparent bg-gray-100 px-4 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-gray-500 focus:bg-white focus:ring-0 ${additionalClasses}`}
        {...rest}
      />
    </Fragment>
  )
}

export default Input
