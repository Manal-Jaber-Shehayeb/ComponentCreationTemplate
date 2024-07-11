const FBHERO0012_IllustrationSchema = {
  description: fields.text({ label: "Description" }),
  emailLabel: fields.text({ label: "Email Label" }),
  emailPlaceholder: fields.text({ label: "Email Placeholder" }),
  signupInfo: fields.text({ label: "Signup Information" }),
  button: fields.object(
    {
      text: fields.text({ label: "Button Text" }),
      url: fields.text({ label: "Button URL" }),
    },
    {
      label: "Button",
    },
  ),
  termsOfService: fields.object(
    {
      text: fields.text({ label: "Terms of Service Text" }),
      url: fields.text({ label: "Terms of Service URL" }),
    },
    {
      label: "Terms of Service",
    },
  ),
  privacyPolicy: fields.object(
    {
      text: fields.text({ label: "Privacy Policy Text" }),
      url: fields.text({ label: "Privacy Policy URL" }),
    },
    {
      label: "Privacy Policy",
    },
  ),
  illustrationUrl: fields.text({ label: "Illustration URL" }),
};

const FBHERO0012_Illustration = collection({
  label: "Illustration with Email Signup Hero",
  path: "src/content/FBHERO0012_Illustration/*",
  slugField: "heading",
  schema: {
    heading: fields.slug({ name: { label: "Heading" } }),
    ...FBHERO0012_IllustrationSchema,
  },
});
