import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"

export function PdfViewer({cv,onClose}: { cv: string; onClose: () => void }) {
   const API = import.meta.env.VITE_API_URL;
  return (
    <Dialog  open onOpenChange={onClose}>
      <DialogTrigger asChild>
           </DialogTrigger>
      <DialogContent className="w-[800px] h-[600px] ">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center font-bold">Applicant CV</DialogTitle>
          
        </DialogHeader>
        <div className="h-[80vh]">
         
          <iframe
          
          src={`${API}/uploads/${cv}`}
          className="w-full h-full rounded-2xl"
          >

          </iframe>
        </div>
        
      </DialogContent>
    </Dialog>
  )
}
export default PdfViewer