
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="bg-retro-blue p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Sheet>
          <SheetTrigger className="text-white hover:text-gray-200 pixelated">
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
          <SheetTrigger className="text-white hover:text-gray-200 pixelated">
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
