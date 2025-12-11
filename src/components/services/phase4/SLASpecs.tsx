export default function SLASpecs() {
    return (
        <section className="py-24 px-6 bg-white dark:bg-[#050812]">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Service Level Agreement (SLA)</h2>

                <div className="overflow-x-auto rounded-3xl border border-neutral-200 dark:border-white/10">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-neutral-50 dark:bg-[#0A0F1F]">
                            <tr>
                                <th className="p-6 text-sm font-bold uppercase tracking-wider text-neutral-500">Metric</th>
                                <th className="p-6 text-sm font-bold uppercase tracking-wider text-neutral-500">Standard</th>
                                <th className="p-6 text-sm font-bold uppercase tracking-wider text-neutral-500">Premium (Enterprise)</th>
                                <th className="p-6 text-sm font-bold uppercase tracking-wider text-neutral-500">Guarantee</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 dark:divide-white/10">
                            <tr className="bg-white dark:bg-background hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors">
                                <td className="p-6 font-medium">Order Processing Time</td>
                                <td className="p-6 text-neutral-600 dark:text-neutral-400">24 Hours</td>
                                <td className="p-6 text-accent font-bold">4 Hours</td>
                                <td className="p-6 text-green-500 text-sm">100% Refund on Late Shipments</td>
                            </tr>
                            <tr className="bg-white dark:bg-background hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors">
                                <td className="p-6 font-medium">Inventory Accuracy</td>
                                <td className="p-6 text-neutral-600 dark:text-neutral-400">98.5%</td>
                                <td className="p-6 text-accent font-bold">99.9%</td>
                                <td className="p-6 text-green-500 text-sm">Free Replacement + Credit</td>
                            </tr>
                            <tr className="bg-white dark:bg-background hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors">
                                <td className="p-6 font-medium">response Time (Support)</td>
                                <td className="p-6 text-neutral-600 dark:text-neutral-400">24 Hours</td>
                                <td className="p-6 text-accent font-bold">30 Minutes</td>
                                <td className="p-6 text-green-500 text-sm">Dedicated Slack Channel</td>
                            </tr>
                            <tr className="bg-white dark:bg-background hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors">
                                <td className="p-6 font-medium">Defect Rate (Manufacturing)</td>
                                <td className="p-6 text-neutral-600 dark:text-neutral-400">&lt; 2.0%</td>
                                <td className="p-6 text-accent font-bold">&lt; 0.5%</td>
                                <td className="p-6 text-green-500 text-sm">Automated QC Reports</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-4 text-xs text-neutral-400 text-right">
                    * SLAs are legally binding in our Partner Contract.
                </p>
            </div>
        </section>
    );
}
