import React from "react"

type Props = {
  name: string
  type: "text" | "email" | "password" | "number"
  placeholder: string
}

const StyledInputRef = React.forwardRef<HTMLInputElement, Props>(
  ({ name, type = "text", placeholder, ...rest }, ref) => {
    return (
      <div className="relative z-0">
        <input
          {...rest}
          id={name}
          type={type}
          placeholder=""
          className="pt-3 pl-5 p-2 block w-full px-0 mt-0 bg-transparent border-2 appearance-none focus:outline-none focus:ring-0 focus:border-secondary border-gray-200"
          ref={ref}
        />
        <label
          htmlFor={name}
          className="absolute duration-200 ease-in-out top-3 left-3 -z-1 origin-0 text-secondary"
        >
          {placeholder}
        </label>
      </div>
    )
  }
)

export default StyledInputRef
