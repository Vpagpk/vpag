import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface SmartImageProps extends ImageProps {
    wrapperClassName?: string;
}

export function SmartImage({
    className,
    alt,
    wrapperClassName,
    ...props
}: SmartImageProps) {
    return (
        <Image
            className={cn("transition-opacity duration-300", className)}
            alt={alt}
            sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            loading={props.priority ? undefined : "lazy"}
            {...props}
        />
    );
}
