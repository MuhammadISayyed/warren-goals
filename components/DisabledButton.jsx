import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DisabledButton = ({ children }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>You can&apos;t prioritize more than 5 goals.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DisabledButton;
