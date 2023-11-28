import React, {
  useState,
  useRef,
  useEffect,
  MouseEvent,
  ReactNode,
} from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
`;

const DropdownIcon = styled.div`
  margin-top: 5px;
  cursor: pointer;
`;

const Menu = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  width: 110px;
  top: 100%;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  z-index: 1;
`;

const MenuItem = styled.div`
  padding: 8px;
  font-size: 14px;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

interface DropdownMenuProps {
  initialItems?: string[];
  children: ReactNode;
}

interface UseDropdownMenuReturn {
  isMenuVisible: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  setItems: (items: string[]) => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
  menuItems: string[];
}

const useDropdownMenu = ({
  initialItems = [],
}: DropdownMenuProps): UseDropdownMenuReturn => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [menuItems, setMenuItems] = useState(initialItems);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  const setItems = (items: string[]) => {
    setMenuItems(items);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      handleClickOutside(event);
    };

    document.addEventListener(
      'mousedown',
      handleClick as unknown as EventListener,
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClick as unknown as EventListener,
      );
    };
  }, []);

  return {
    isMenuVisible,
    toggleMenu,
    closeMenu,
    setItems,
    dropdownRef,
    menuItems,
  };
};

const DropdownMenu = ({ initialItems = [], children }: DropdownMenuProps) => {
  const {
    isMenuVisible,
    toggleMenu,
    closeMenu,
    setItems,
    dropdownRef,
    menuItems,
  } = useDropdownMenu({ initialItems, children });

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownIcon onClick={toggleMenu}>{children}</DropdownIcon>
      <Menu isVisible={isMenuVisible}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={closeMenu}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </DropdownContainer>
  );
};

export default DropdownMenu;
