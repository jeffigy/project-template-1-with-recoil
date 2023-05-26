import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
type DrawerButtonProps = {
  btnRef: React.RefObject<HTMLButtonElement>;
  onClick: () => void;
};

function DrawerButton({ btnRef, onClick }: DrawerButtonProps) {
  return (
    <IconButton
      size={"sm"}
      display={{ base: "block", md: "none" }}
      ref={btnRef}
      onClick={onClick}
      icon={<HamburgerIcon />}
      aria-label={"menu"}
      variant={"secondaryOutline"}
    />
  );
}

export default DrawerButton;
