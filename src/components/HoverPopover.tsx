import * as React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

interface HoverPopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export const HoverPopover = ({ trigger, children }: HoverPopoverProps) => {
  const [open, setOpen] = React.useState(false);
  let timeout: NodeJS.Timeout;

  const handleOpen = () => {
    clearTimeout(timeout);
    setOpen(true);
  };

  const handleClose = () => {
    timeout = setTimeout(() => setOpen(false), 100);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <span
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          onFocus={handleOpen}
          onBlur={handleClose}
        >
          {trigger}
        </span>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        sideOffset={8}
        className="p-4"
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};
