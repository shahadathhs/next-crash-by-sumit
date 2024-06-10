import Button from "@/app/components/Button"
import Image from "next/image"
import png from "@/public/images/3.png"

export default function Mission() {
  return (
    <main className="mt-10 space-y-4">
      <div>
        <p>
          Mission page
        </p>
        <Button />
        
        <div>
          <Image src={png} alt="iphone" className="h-20 w-auto"  />
        </div>
      </div>
    </main>
  )
}
