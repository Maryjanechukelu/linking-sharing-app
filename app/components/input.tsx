// components/Input.tsx
import React from "react"

interface InputProps {
  type?: string
  placeholder?: string
  className?: string
  [x: string]: any // to allow any other props like onChange, value, etc.
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  className = "",
  ...props
}) => {
  const baseStyle =
    " self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start py-3 px-4 gap-[12px] text-base border-[1px] border-solid border-borders text-black active:shadow-md active:shadow-[#BEADFF] focus:shadow-[#BEADFF] focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple active:ring-2 active:ring-purple active:border-purple"
  const placeholderStyle = "placeholder:gray-400"
  const enabledStyle = ""
  const activeStyle = ""

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${baseStyle} ${placeholderStyle} ${enabledStyle} ${activeStyle} ${className}`}
      {...props}
    />
  )
}

export default Input