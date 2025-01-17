"use client"

import Image from "next/image"
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form"
import Button from "./components/button"
import Input from "./components/input"
import { useState } from "react"
import {
  signInWithEmailAndPassword
  
} from "firebase/auth"
import { auth } from "../firebase"

interface FormData {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const [serverError, setServerError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
   const router = useRouter()
 

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true)
    setServerError(null)
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      const user = userCredential.user
      console.log("User signed in:", user)
     router.push('/Dashboard');
    } catch (error) {
      setServerError((error as Error).message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full relative bg-light-grey h-[984px] overflow-hidden text-left text-[14px] text-white font-gotham-bold">
      <div className="absolute top-[273px] left-[160px] rounded-[112px] bg-gray hidden flex-row items-center justify-center py-5 px-8">
        {/* <div className="relative tracking-[0.05em] leading-[140%] uppercase">
          tutustu koko tarinaamme
        </div> */}
      </div>
      <div className="absolute top-[calc(50%_-_300px)] left-[calc(50%_-_238px)] flex flex-col items-center justify-start gap-[51px] text-13xl text-dark-grey font-heading-s">
        <div className="w-[182.5px] relative h-10">
          <Image
            src="/logo-icon.svg"
            alt="Logo Icon"
            className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
            width={100}
            height={24}
            priority
          />
          <Image
            src="/devlinks.svg"
            alt="Devlinks Logo"
            className="absolute top-[6.25px] left-[47.5px] w-[135px] h-[26.3px]"
            width={100}
            height={24}
            priority
          />
        </div>
        <div className="w-[476px] rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start p-10 gap-[40px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <b className="self-stretch relative leading-[150%]">Login</b>
              <div className="self-stretch relative text-base leading-[150%] text-grey">
                Add your details below to get back into the app
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="self-stretch flex flex-col items-start justify-start gap-[24px] text-xs"
            >
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <label className="w-[396px] relative leading-[150%] inline-block">
                  Email address
                  <div className="w-[396px] rounded-lg bg-white box-border overflow-hidden flex flex-row items-center justify-start py-3 px-4 gap-[12px] text-base border-[1px] border-solid border-borders">
                    <Image
                      src="/email-icon.svg"
                      alt="Email Logo"
                      className="w-4 relative h-4 overflow-hidden shrink-0"
                      width={100}
                      height={24}
                      priority
                    />
                    <Input
                      {...register("email", { required: "Email is required" })}
                      id="email"
                      type="email"
                      className="flex-grow"
                      placeholder="e.g. alex@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </label>
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <label className="w-[396px] relative leading-[150%] inline-block">
                  Password
                  <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start py-3 px-4 gap-[12px] text-base border-[1px] border-solid border-borders">
                    <Image
                      src="/password-icon.svg"
                      alt="Password Logo"
                      className="w-4 relative h-4 overflow-hidden shrink-0"
                      width={100}
                      height={24}
                      priority
                    />
                    <Input
                      {...register("password", {
                        required: "Password is required",
                      })}
                      id="password"
                      type="password"
                      className="flex-grow"
                      placeholder="Enter your password"
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </label>
              </div>
              {serverError && <p className="text-red-500">{serverError}</p>}
              <Button
                type="submit"
                className="self-stretch bg-purple hover:bg-[#b8a7fc] text-base text-white leading-[150%] font-semibold"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
            <div className="self-stretch relative text-base leading-[150%] text-center text-grey">
              <span>{`Don’t have an account? `}</span>
              <span className="text-purple">Create account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
