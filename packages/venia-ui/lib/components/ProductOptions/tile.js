import React from 'react';
import { bool, func, number, oneOfType, shape, string } from 'prop-types';

import { useStyle } from '../../classify';
import defaultClasses from './tile.module.css';
import { useTile } from '@magento/peregrine/lib/talons/ProductOptions/useTile';

const getClassName = (name, isSelected, isCompressed) =>
    `${name}${isCompressed ? '_compressed' : ''}${
        isSelected ? '_selected' : ''
    }`;

const Tile = props => {
    const {
        isSelected,
        item: { label, value_index },
        onClick,
        isCompressed
    } = props;

    const talonProps = useTile({
        onClick,
        value_index
    });

    const { handleClick } = talonProps;

    const classes = useStyle(defaultClasses, props.classes);
    const className = classes[getClassName('root', isSelected, isCompressed)];

    return (
        <button
            className={className}
            onClick={handleClick}
            title={label}
            type="button"
            data-cy="Tile-button"
        >
            <span>{label}</span>
        </button>
    );
};

export default Tile;

Tile.propTypes = {
    isSelected: bool,
    item: shape({
        label: string.isRequired,
        value_index: oneOfType([number, string]).isRequired
    }).isRequired,
    onClick: func.isRequired,
    isCompressed: bool
};

Tile.defaultProps = {
    isSelected: false,
    isCompressed: false
};
