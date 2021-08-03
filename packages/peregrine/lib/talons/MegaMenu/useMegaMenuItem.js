import { useCallback, useMemo, useState } from 'react';

export const useMegaMenuItem = props => {
    const { category, activeCategoryId, subMenuState } = props;

    const [isFocused, setIsFocused] = useState(subMenuState);
    const isActive = category.id === activeCategoryId;

    const handleCloseSubMenu = useCallback(() => {
        setIsFocused(false);
    }, [setIsFocused]);

    const isMenuActive = useMemo(() => {
        if (isFocused) {
            if (subMenuState) {
                return true;
            }
        }
        return false;
    }, [isFocused, subMenuState]);

    const a11yClick = e => {
        //checking down arrow or space
        if (e.keyCode === 32 || e.keyCode === 40) {
            return true;
        }
        //checking up arrow or escape
        if (e.keyCode === 38 || e.keyCode === 27) {
            setIsFocused(false);
        }
    };

    const toggleSubMenu = e => {
        e.preventDefault();
        if (
            category.children.length &&
            !(e.keyCode === 38 || e.keyCode === 27)
        ) {
            setIsFocused(true);
        } else {
            setIsFocused(false);
        }
    };

    return {
        isFocused,
        isActive,
        handleCloseSubMenu,
        isMenuActive,
        a11yClick,
        toggleSubMenu
    };
};