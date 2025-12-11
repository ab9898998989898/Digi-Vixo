export default function LeadershipPrinciples() {
    const principles = [
        {
            title: "Customer Obsession",
            desc: "Leaders start with the customer and work backwards. We work vigorously to earn and keep customer trust. Although leaders pay attention to competitors, they obsess over customers."
        },
        {
            title: "Ownership",
            desc: "Leaders are owners. They think long term and don't sacrifice long-term value for short-term results. They act on behalf of the entire company, beyond just their own team. They never say 'that's not my job'."
        },
        {
            title: "Invent and Simplify",
            desc: "Leaders expect and require innovation and invention from their teams and always find ways to simplify. They are externally aware, look for new ideas from everywhere, and are not limited by 'not invented here'."
        },
        {
            title: "Bias for Action",
            desc: "Speed matters in business. Many decisions and actions are reversible and do not need extensive study. We value calculated risk taking."
        },
        {
            title: "Deliver Results",
            desc: "Leaders focus on the key inputs for their business and deliver them with the right quality and in a timely fashion. Despite setbacks, they rise to the occasion and never settle."
        }
    ];

    return (
        <section className="py-24 px-6 bg-neutral-950 text-white">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center">
                    <h2 className="text-4xl font-bold tracking-tighter mb-4">Leadership Principles</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        The DNA that guides our decision making every single day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {principles.map((p, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-gold/30 transition-colors">
                            <h3 className="text-xl font-bold mb-4 text-gold">{p.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                {p.desc}
                            </p>
                        </div>
                    ))}
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-accent to-blue-900 flex items-center justify-center text-center">
                        <h3 className="text-2xl font-bold">Join the Mission.</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
