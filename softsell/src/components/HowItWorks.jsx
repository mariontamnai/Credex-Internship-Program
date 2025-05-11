const points = [
    {icon: "⚡", title: "Fast Payments", desc: "Get paid within 24 hours."},
    {icon: "🔒", title: "Secure Process", desc: "Safe and encrypted license transfers."},
    {icon: "🤝", title: "Trusted by Many", desc: "100+ happy clients."},
];

const WhyChooseUs = () => (
    <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Us</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
            {points.map((point, i) => (
                <div key={i} className="p-6 bg-white rounded-md shadow w-full md:w-1/3">
                    <div className="text-4xl mb-4">{point.icon}</div>
                    <h3 className="text-xl font-bold">{point.tittle}</h3>
                    <p>{point.desc}</p>
                </div>
            ))}
        </div>
    </section>
);
export default WhyChooseUs;