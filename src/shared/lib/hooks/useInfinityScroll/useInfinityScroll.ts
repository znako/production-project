import { MutableRefObject, useEffect, useRef } from "react"

interface useInfinityScrollProps {
    wrapperRef: MutableRefObject<HTMLElement>
    targetRef: MutableRefObject<HTMLElement>
    callback?: () => void
}

export const useInfinityScroll = (props: useInfinityScrollProps) => {
    const {
        targetRef,
        wrapperRef,
        callback
    } = props
  
    useEffect(() => {
        const wrapper = wrapperRef.current
        const target = targetRef.current
        let observer: IntersectionObserver | null = null
        if (callback) {
            let options = {
                root: wrapper,
                rootMargin: "0px",
                threshold: 1.0,
            };
            
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback()
                }
            }, options);
    
            observer.observe(target)
        
        }
        return () => {
            if (observer) {
                observer?.unobserve(target)
            }
        }
        
    }, [targetRef, wrapperRef, callback ])
    
}
