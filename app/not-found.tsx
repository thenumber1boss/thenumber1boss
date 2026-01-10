import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="space-y-6 text-center max-w-md">
        <div className="space-y-2">
          <h1 className="text-7xl font-mono font-bold tracking-tighter text-primary">404</h1>
          <h2 className="text-xl font-medium uppercase tracking-widest text-muted-foreground">System Void</h2>
        </div>
        
        <p className="text-muted-foreground">
          The vector you are trying to access does not exist within this ecosystem. 
          It may have been deprecated or never initialized.
        </p>

        <div className="pt-6">
          <Button asChild variant="outline" className="rounded-full px-8">
            <Link href="/">Return to Base</Link>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
        Error Code: NOT_FOUND_EXCEPTION
      </div>
    </div>
  )
}