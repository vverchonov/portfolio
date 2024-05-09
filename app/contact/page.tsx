import PageHolder from "../components/page-holder";
import ContactForm from "./contact-form";
import CopyEmail from "./copy-email";

export default function ContactMe() {
  return (
    <PageHolder>
      <h1 className="text-3xl text-center mb-2 font-semibold">Contact Me</h1>
      <p className="text-xl mb-4">
        Feel free to contact me if you have any questions or business offers via
        contact form or email <CopyEmail />
      </p>
      <ContactForm />
    </PageHolder>
  );
}
