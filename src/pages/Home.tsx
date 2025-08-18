import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100 text-gray-900">
            {/* Navbar */}
            <nav className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur border-b shadow-sm z-50">
                <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
                    <Link to="/" className="text-2xl md:text-3xl font-bold text-blue-600">
                        LiteGPT
                    </Link>
                    <Link
                        to="/liteChat"
                        className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                    >
                        Try Now
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="flex-1 flex flex-col justify-center items-center text-center px-6 pt-24">
                <motion.h1
                    className="text-5xl md:text-6xl font-extrabold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Welcome to <span className="text-blue-600">LiteGPT</span>
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Your lightweight AI chat companion. Simple. Fast. Helpful.
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                    <Link
                        to="/liteChat"
                        className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
                    >
                        Try LiteGPT
                    </Link>
                    <a
                        href="#features"
                        className="px-6 py-3 bg-gray-200 text-gray-900 rounded-2xl shadow hover:bg-gray-300 transition"
                    >
                        Learn More
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 bg-white px-6">
                <h2 className="text-3xl font-bold text-center mb-10">Why LiteGPT?</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">⚡ Fast</h3>
                        <p className="text-gray-600">
                            Optimized for speed so you get instant responses without lag.
                        </p>
                    </div>
                    <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">🎯 Simple</h3>
                        <p className="text-gray-600">
                            Clean interface with zero distractions. Just chat and go.
                        </p>
                    </div>
                    <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">🤖 Powerful</h3>
                        <p className="text-gray-600">
                            Backed by cutting-edge AI models under the hood.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center text-gray-500 text-sm border-t">
                © 2025 LiteGPT. All rights reserved.
            </footer>
        </div>
    );
}
