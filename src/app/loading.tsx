export default function Loading() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                {/* Animated loading spinner */}
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin"></div>
                </div>
                <p className="text-muted-foreground text-sm animate-pulse">Loading...</p>
            </div>
        </div>
    );
}
