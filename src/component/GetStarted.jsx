import { FaUser, FaRocket } from "react-icons/fa";
import { MdOutlineInventory2 } from "react-icons/md";

const steps = [
    {
        id: 1,
        title: "Create Account",
        desc: "Sign up for free in seconds. No credit card required to get started.",
        icon: <FaUser />,
    },
    {
        id: 2,
        title: "Choose Products",
        desc: "Browse our catalog and select the tools that fit your needs.",
        icon: <MdOutlineInventory2 />,
    },
    {
        id: 3,
        title: "Start Creating",
        desc: "Download and start using your premium tools immediately.",
        icon: <FaRocket />,
    },
];

const GetStarted = () => {
    return (
        <div className="py-20 bg-gray-50">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Get Started In 3 Steps</h2>
                <p className="text-gray-500 mt-2">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className="bg-white rounded-xl shadow-sm border p-6 text-center relative hover:shadow-md transition"
                    >
                        {/* Step number badge */}
                        <div className="absolute top-4 right-4 bg-purple-500 text-white text-sm w-8 h-8 flex items-center justify-center rounded-full">
                            {step.id}
                        </div>

                        {/* Icon */}
                        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-2xl mb-4">
                            {step.icon}
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        <p className="text-gray-500 text-sm mt-2">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GetStarted;