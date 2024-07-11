import { Button, Label, TextInput } from "flowbite-react";
import { FBHERO0012_IllustrationProps } from "./FBHERO0012_Illustration.types";

// FBHERO0012_Illustration: IllustrationWithEmailSignupHero

export default function FBHERO0012_Illustration({
  heading,
  description,
  emailLabel,
  emailPlaceholder,
  signupInfo,
  button,
  termsOfService,
  privacyPolicy,
  illustrationUrl,
}: FBHERO0012_IllustrationProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-12 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7 xl:col-span-8">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            {heading}
          </h1>
          <p className="mb-6 max-w-2xl text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            {description}
          </p>
          <form action={button.url} className="">
            <div className="mb-3 flex items-center">
              <div className="relative mr-3">
                <Label htmlFor="email" className="sr-only">
                  {emailLabel}
                </Label>
                <TextInput
                  icon={() => (
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  )}
                  id="email"
                  placeholder={emailPlaceholder}
                  required
                  type="email"
                  className="[&_input]:w-full [&_input]:py-3 [&_input]:md:w-80"
                />
              </div>
              <div>
                <Button type="submit" className="[&>span]:py-3">
                  {button.text}
                </Button>
              </div>
            </div>
            <div className="text-left text-sm text-gray-500 dark:text-gray-300">
              {signupInfo}&nbsp;
              <a
                href={termsOfService.url}
                className="text-primary-600 hover:underline dark:text-primary-500"
              >
                {termsOfService.text}
              </a>
              &nbsp;and&nbsp;
              <a
                className="text-primary-600 hover:underline dark:text-primary-500"
                href={privacyPolicy.url}
              >
                {privacyPolicy.text}
              </a>
              .
            </div>
          </form>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex xl:col-span-4">
          <img
            src={illustrationUrl}
            alt="phone illustration"
          />
        </div>
      </div>
    </section>
  );
}
