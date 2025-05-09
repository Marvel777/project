'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const BackForwardButtons = () => {
    const router = useRouter()
    const [canGoBack, setCanGoBack] = useState(false)
    const [canGoForward, setCanGoForward] = useState(false)

    useEffect(() => {
        // Simple check: if history length > 1, assume we can go back
        setCanGoBack(window.history.length > 1)

        // Optional enhancement: forward history is hard to detect
        // So we can use custom tracking or just always show it active
        setCanGoForward(true)
    }, [])

    return (
        <div className="fixed top-4 left-4 z-50 flex gap-2">
            <Button
                variant="outline"
                size="icon"
                onClick={ () => router.back() }
                disabled={ !canGoBack }
            >
                <ChevronLeft className="w-4 h-4" />
            </Button>

        </div>
    )
}
