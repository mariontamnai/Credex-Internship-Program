import {useState} from "react";

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", company: "", type: "", message: ""});

    const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = e => {
        e.preventDefault();
        alert("Form submitted (frontend only)");
    };

    return (
        <section className="py-16 bg-white px-4">
            <h2 className="text-3xl text-center font-semibold mb-8">Contact Us</h2>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
                <input required type="text" name="name" placeholder="Your Name" onChange={handleChange} className="w-full border px-4 py-2 rounded" />
                <input required type="email" name="email" placeholder="Your Email" onChange={handleChange} className="w-full border px-4 py-2 rounded" />
                <input type="text" name="company" placeholder="Company" onChange={handleChange} className="w-full border px-4 py-2 rounded" />
                <select required name="type" onChange={handleChange} className="w-full bordrer px-4 py-2 rounded">
                    <option value="">Select License Type</option>
                    <option value="SaaS">SaaS</option>
                    <option value="Enterprise">Enterprise</option>
                </select>
                <textarea required name="message" placeholder="Message" onChange={handleChange} className="w-full border px-4 py-2 rounded h-32" />
                <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Send Message</button>
            </form>
        </section>
    );
};
export default ContactForm;