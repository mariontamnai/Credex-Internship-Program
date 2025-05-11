const testimonials = [
    { name: "Jane Doe", role: "IT Manager", company: "TechCorp", text: "SoftSell helped us recover value from unused software easily."},
    { name: "John Smith", role: "Founder", company: "StartPro", text: "Quick, reliable, and transparent service!"},
];

const Testimonials = () => (
    <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-8">Customer Testimonials</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
            {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-6 rounded-md shadow-md w-full md:w-1/3">
                    <p className="italic mb-4">"{t.text}"</p>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm">{t.role}, {t.company}</p>
                </div>
            ))}
        </div>
    </section>
);
export default Testimonials;