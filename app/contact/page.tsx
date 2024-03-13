import PageHolder from "../components/page-holder";
import ContactForm from "./contact-form";



export default function ContactMe(){

    return(
        <PageHolder>
            <h1 className="text-3xl text-center mb-2 font-semibold">Contact Me</h1>
            <ContactForm/>
        </PageHolder>
    );
}