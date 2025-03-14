
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FileText, HelpCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center relative z-50" style={{ backgroundColor: '#1903bd' }}>
      <div className="flex space-x-4">
        <Sheet>
          <SheetTrigger className="text-[#dadada] hover:text-gray-200 pixelated flex items-center gap-2">
            <FileText size={18} />
            Terms & Conditions
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="pixelated">Terms & Conditions</SheetTitle>
            </SheetHeader>
            <div className="pixelated mt-4">
              Content coming soon...
            </div>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger className="text-[#dadada] hover:text-gray-200 pixelated flex items-center gap-2">
            <HelpCircle size={18} />
            How to Use
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="pixelated">How to Use</SheetTitle>
            </SheetHeader>
            <div className="pixelated mt-4">
              Content coming soon...
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
