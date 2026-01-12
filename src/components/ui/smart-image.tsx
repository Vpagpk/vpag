import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

// Minimal blur placeholder for faster perceived loading
const blurDataURL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExYTFhIi8+PC9zdmc+";

interface SmartImageProps extends ImageProps {
    wrapperClassName?: string;
    disableBlur?: boolean;
}

export function SmartImage({
    className,
    alt,
    wrapperClassName,
    disableBlur,
    ...props
}: SmartImageProps) {
    return (
        <Image
            className={cn("transition-opacity duration-300", className)}
            alt={alt}
            sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            loading={props.priority ? undefined : "lazy"}
            placeholder={disableBlur || props.priority ? undefined : "blur"}
            blurDataURL={disableBlur || props.priority ? undefined : blurDataURL}
            {...props}
        />
    );
}
