export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#171717]">
            <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-2 border-[#525252] border-t-[#F8903C] rounded-full animate-spin"></div>
                <div className="text-[#A3A3A3] font-main text-sm">Loading...</div>
            </div>
        </div>
    );
}
