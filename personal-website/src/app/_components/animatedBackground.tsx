export default function AnimatedBackground() {
    return (
        <>
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {/* Floating particles/dots */}
                <div
                    className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#22C55E] rounded-full opacity-60 animate-ping"
                    style={{ animationDelay: '0s' }}
                />
                <div
                    className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#facc15] rounded-full opacity-40 animate-ping"
                    style={{ animationDelay: '1s' }}
                />
                <div
                    className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#22C55E] rounded-full opacity-50 animate-ping"
                    style={{ animationDelay: '2s' }}
                />
                <div
                    className="absolute top-3/4 right-1/3 w-2 h-2 bg-[#facc15] rounded-full opacity-30 animate-ping"
                    style={{ animationDelay: '1.5s' }}
                />
                <div
                    className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-[#22C55E] rounded-full opacity-45 animate-ping"
                    style={{ animationDelay: '0.5s' }}
                />
            </div>
        </>
    );
}
