import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [eventStatus, setEventStatus] = useState("upcoming");

    useEffect(() => {
        const hackathonStartDate = new Date("2026-01-07T19:00:00+05:30").getTime();
        const hackathonEndDate = new Date("2026-01-18T17:00:00+05:30").getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distanceToStart = hackathonStartDate - now;
            const distanceToEnd = hackathonEndDate - now;

            if (distanceToStart > 0) {
                setEventStatus("upcoming");
                setTimeLeft({
                    days: Math.floor(distanceToStart / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distanceToStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distanceToStart % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distanceToStart % (1000 * 60)) / 1000),
                });
            } else if (distanceToEnd > 0) {
                setEventStatus("live");
                setTimeLeft({
                    days: Math.floor(distanceToEnd / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distanceToEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distanceToEnd % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distanceToEnd % (1000 * 60)) / 1000),
                });
            } else {
                setEventStatus("ended");
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const getTimerTitle = () => ({
        upcoming: "COUNTDOWN TO THE EVENT",
        live: "🔴 EVENT IS LIVE - TIME REMAINING",
        ended: "Event Has Ended",
    }[eventStatus] || "COUNTDOWN TO THE EVENT");

    const getTimerColor = () => ({
        upcoming: "text-[#CE1126]",
        live: "text-red-500 animate-pulse",
        ended: "text-gray-400",
    }[eventStatus] || "text-[#CE1126]");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 mb-8 text-center"
        >
            <h3 className={`text-xl sm:text-2xl font-bold ${getTimerColor()} mb-8 font-benguiat tracking-widest`}>
                {getTimerTitle()}
            </h3>

            {eventStatus !== "ended" && (
                <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
                    {["days", "hours", "minutes", "seconds"].map((unit, i) => (
                        <motion.div
                            key={unit}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: i * 0.15 }}
                            className="flex flex-col items-center"
                        >
                            <div className="relative group">
                                <div className="bg-gradient-to-b from-[#CE1126] to-[#9A0D1B] px-2 sm:px-3 py-1 rounded-t border border-[#CE1126] shadow-[0_0_10px_rgba(206,17,38,0.4)]">
                                    <span className="text-white text-[10px] sm:text-xs font-benguiat uppercase tracking-wide">
                                        {unit}
                                    </span>
                                </div>

                                <div className="bg-gradient-to-b from-gray-100 to-gray-200 px-2 sm:px-3 py-2 sm:py-3 rounded-b border border-t-0 border-gray-300 shadow-md relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1IiAvPjwvc3ZnPg==')] opacity-30"></div>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={timeLeft[unit]}
                                            initial={{ y: -10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: 10, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold font-benguiat text-gray-900 tracking-tight"
                                            style={{
                                                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            {timeLeft[unit].toString().padStart(2, "0")}
                                        </motion.div>
                                    </AnimatePresence>

                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-30"></div>
                                </div>

                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[90%] h-1 bg-black/20 blur-sm rounded-full"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {eventStatus === "ended" && (
                <div className="mt-6 bg-gradient-to-b from-gray-800 to-gray-900 border-2 border-[#CE1126] rounded-lg px-8 py-6 inline-block shadow-[0_0_20px_rgba(206,17,38,0.4)]">
                    <span className="text-gray-200 text-lg font-benguiat">🏆 The Event Has Concluded</span>
                </div>
            )}
        </motion.div>
    );
};

export default CountdownTimer;