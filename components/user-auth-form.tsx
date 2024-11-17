"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { BackendApi, Configuration, LoginPostRequest } from "@/generated"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

interface LoginRequest {
  email: string | undefined,
  password: string | undefined
}

interface LoginResponse {
  email: string,
  token: string,
  status: number
}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [response, setResponse] = React.useState<LoginResponse>(); // TODO: add the correct type to this

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    const backendApi = new BackendApi(new Configuration({basePath: "http://localhost:5163"}))

    const dataToSend: LoginPostRequest = {
      loginRequest: {
        email: "email@email.com",
        password: "Test1!",
      }
  }

  try {
    var res = await backendApi.loginPost(dataToSend)

    console.log("success")
    console.log(res)
  } catch (error) {
    console.log(error)
  }

    /*const dataToSend: LoginRequest  = {
      email: email,
      password: password,
    };

    try {
      //const result = await postData(dataToSend);

      const result = {
        email: "email@email.com",
        token: "111111",
        status: 200
      }

      setIsLoading(false);

      console.log(result);

      if (result && result.status === 200) {
        setResponse(result);
        router.push("/Dashboard");
      }
    } catch (error) {
      console.log("error");
    }*/
  }

  async function postData(dataToSend: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if required
        },
        body: JSON.stringify(dataToSend),
      });

      const result: LoginResponse = await response.json();
      // setResponse(result); // Set the API response to state
      result.status = response.status;
      return result;
    } catch (error) {
      console.error('There was a problem sending the POST request:', error);
      throw error;
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </Button>
    </div>
  )
}